import { OAuthClientCredentialsProvider } from "./interceptor";

export class SaltoOAuthException {
    constructor(
        public message: string,
    ) {
    }
}

type OAuthToken = {
    expires_in: number;
    access_token: string;
}

type OidcConfig = {
    token_endpoint: string;
}

export class SaltoOAuthClient implements OAuthClientCredentialsProvider {
    private token: OAuthToken | null = null;
    private expiration: number = 0;

    constructor(
        private clientID: string,
        private clientSecret: string,
        private scopes: string[],
        private discoveryHost: string = "account.saltosystems.com",
    ) {
    }

    public async getToken(): Promise<string> {
        if (this.token == null || this.tokenIsExpired()) {
            // Token is expired or null. Getting a new one.

            // expired token => get a new one
            this.token = await this.requestToken();

            // update expiration
            this.expiration = new Date().getUTCSeconds() + this.token.expires_in // seconds
        }

        return this.token.access_token;
    }

    private async requestToken(): Promise<OAuthToken> {
        // oidc discovery
        const oidcConfig = await this.getOidcConfig();

        // build token request post data
        const data = new FormData();
        data.set("grant_type", "client_credentials");
        data.set("client_id", this.clientID);
        data.set("client_secret", this.clientSecret);
        data.set("scope", this.scopes.join(" "));

        const response = await fetch(oidcConfig.token_endpoint, {
            method: "POST",
            body: data,
        })

        var result = await response.json();
        if (response.status == 200) {
            return result;
        } else {
            // get error
            throw new SaltoOAuthException(`Error getting the access_token. Server returned ${response.status} error ( error = '${result.error}', error_hint = '${result.error_hint}', description = '${result.error_description}')`);
        }
    }

    private async getOidcConfig(): Promise<OidcConfig> {
        const response = await fetch(`https://${this.discoveryHost}/.well-known/openid-configuration`)
        if (response.status == 200) {
            return await response.json();
        }
        throw new SaltoOAuthException(`Failed to get OIDC config. Server returned ${response.status} status.`);
    }

    private tokenIsExpired(): boolean {
        return new Date().getUTCSeconds() >= this.expiration;
    }
}
