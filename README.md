# saltoapis-es

This repository contains the source code for the ES SALTO APIs SDK.

> These APIs use the connectrpc framework and the gRPC protocol.
> Refer to the official documentation to learn more about [connectrpc](https://connectrpc.com/docs/introduction) and [gRPC](https://grpc.io/docs/).

## Setup

This SDK publishes NPM packages in GitHub's Package Registry. You can see all published packages here: https://github.com/saltoapis/saltoapis-es/packages/.

Even though the packages are public, GitHub does not yet support downloading packages anonymously so you will need a GitHub personal access token with the `read:packages` permission set to retrieve the packages. 

To setup your NPM environment with your access token do the following:

### 1. Create a personal access token

Access https://github.com/settings/tokens and press "Generate new token". Give the token the name and expiration you want and be sure to check the `read:packages` scope. Then press "Generate token".

You will then have to copy your token (because its going to be shown to you only once).

### 2. Add the GitHub NPM repository

You have to add the saltoapis NPM repository (https://npm.pkg.github.com) to access the packages. You can do this by using the following npm command:
```sh
$ npm login --scope=@saltoapis --auth-type=legacy --registry=https://npm.pkg.github.com

> Username: <your username>
> Password: <your access token>
```

Or you can also manually edit your `.npmrc` file to include the following:
```
//npm.pkg.github.com/:_authToken=TOKEN
@saltoapis:registry=https://npm.pkg.github.com
```

### 3. Use the packages

If everything is setup correctly you will be able to include dependencies to the packages listed in https://github.com/saltoapis/saltoapis-es/packages?ecosystem=npm in your project.

## Authentication Example

The SDK provides a simple gRPC interceptor that will automatically get and refresh valid access tokens and include them in all gRPC requests.

> **Note**
> You should always request the following scopes when authenticating:
> ```
> openid, offline, profile, email, https://saltoapis.com/auth/nebula
> ```

```ts
import { createGrpcTransport } from '@connectrpc/connect-node';
import { createPromiseClient } from '@connectrpc/connect';

const clientID = "your client id";
const clientSecret = "your client secret";
const scopes = ["openid", "offline", "profile", "email", "https://saltoapis.com/auth/nebula"];

 // create the saltoapis auth interceptor with your user credentials
const authInterceptor = SaltoapisAuthInterceptor.withClientCredentials(clientID, clientSecret, scopes);

// create the gRPC transport
const transport = createGrpcTransport({
    httpVersion: '2',
    baseUrl: "https://nebula.saltoapis.com",
    interceptors: [ authInterceptor ]
});

// Now you can use the transport to instantiate any gRPC service
const client = createPromiseClient(OperationService, transport);
const res = await client.listOperations({ pageSize: 10 });
```

You can find more information about authentication at https://developer.saltosystems.com/nebula/api/authentication/.
