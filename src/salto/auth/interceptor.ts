import { SaltoOAuthClient } from "./client_credentials_provider";
import { Interceptor } from "@connectrpc/connect";

export interface OAuthClientCredentialsProvider {
    getToken(): Promise<string>;
}

export class SaltoapisAuthInterceptor {
    private constructor(
        private oauthProvider: OAuthClientCredentialsProvider,
    ) {
    }

    static withProvider(oauthProvider: OAuthClientCredentialsProvider): Interceptor {
        return new SaltoapisAuthInterceptor(oauthProvider).interceptor();
    }

    static withClientCredentials(clientID: string, clientSecret: string, scopes: string[], discoveryHost?: string): Interceptor {
        return new SaltoapisAuthInterceptor(new SaltoOAuthClient(clientID, clientSecret, scopes, discoveryHost)).interceptor();
    }

    private interceptor(): Interceptor {
        return (next: any) => async (request: any) => {
            const token = await this.getToken();
            request.header.append('Authorization', `Bearer ${token}`);
            return next(request);
        }
    }

    private getToken(): Promise<string> {
        return this.oauthProvider.getToken();
    }
}
