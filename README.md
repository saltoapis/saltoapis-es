# saltoapis-es

This repository contains the source code for the ES SALTO APIs SDK.

> These APIs use the connectrpc framework and the gRPC protocol.
> Refer to the official documentation to learn more about [connectrpc](https://connectrpc.com/docs/introduction) and [gRPC](https://grpc.io/docs/).

## Getting started

Follow these steps to quickly set up and use the SDK:

1. **Authenticate with GitHub Package Registry**
2. **Install the SDK package(s) you need**
3. **Configure authentication for your application**

See details below.

## Installation

### 1. Authenticate with GitHub Package Registry

You need a GitHub personal access token with the `read:packages` permission. Generate one at [GitHub Tokens](https://github.com/settings/tokens) and copy it.

Login to the registry:

```sh
npm login --scope=@saltoapis --auth-type=legacy --registry=https://npm.pkg.github.com
# Username: <your GitHub username>
# Password: <your access token>
```

Alternatively, add this to your `.npmrc`:

```ini
//npm.pkg.github.com/:_authToken=TOKEN
@saltoapis:registry=https://npm.pkg.github.com
```

### 2. Install the SDK package

Find the package you need at [saltoapis-es NPM packages](https://github.com/saltoapis/saltoapis-es/packages?ecosystem=npm) and install it:

```sh
npm install @saltoapis/<package-name>
```

## Setup

This SDK publishes NPM packages in GitHub's Package Registry. You can see all published packages in the [saltoapis-es GitHub Packages listing](https://github.com/saltoapis/saltoapis-es/packages/).

Even though the packages are public, GitHub does not support downloading packages anonymously so you will need a GitHub personal access token with the `read:packages` permission set to retrieve the packages.

To setup your NPM environment with your access token do the following:

### 1. Create a personal access token

Access [GitHub Tokens](https://github.com/settings/tokens) and press "Generate new token". Give the token the name and expiration you want and be sure to check the `read:packages` scope. Then press "Generate token".

You will then have to copy your token (because it's going to be shown to you only once).

### 2. Add the GitHub NPM repository

You have to add the saltoapis NPM repository ([https://npm.pkg.github.com](https://npm.pkg.github.com)) to access the packages. You can do this by using the following npm command:

```sh
npm login --scope=@saltoapis --auth-type=legacy --registry=https://npm.pkg.github.com

# Username: <your username>
# Password: <your access token>
```

Or you can also manually edit your `.npmrc` file to include the following:

```ini
//npm.pkg.github.com/:_authToken=TOKEN
@saltoapis:registry=https://npm.pkg.github.com
```

### 3. Use the packages

If everything is setup correctly you will be able to include dependencies to the packages listed in [saltoapis-es NPM packages](https://github.com/saltoapis/saltoapis-es/packages?ecosystem=npm) in your project.

## Authentication example

The SDK provides a simple gRPC interceptor that will automatically get and refresh valid access tokens and include them in all gRPC requests.

> **Note**
> You should always request the following scopes when authenticating:
>
> ```text
> openid, offline, profile, email, https://saltoapis.com/auth/nebula
> ```

```ts
import { createGrpcTransport } from '@connectrpc/connect-node';
import { createPromiseClient } from '@connectrpc/connect';

const clientID = "your client id";
const clientSecret = "your client secret";
const scopes = ["openid", "offline", "profile", "email", "https://saltoapis.com/auth/nebula"];

// Create the saltoapis auth interceptor with your user credentials
const authInterceptor = SaltoapisAuthInterceptor.withClientCredentials(clientID, clientSecret, scopes);

// Create the gRPC transport
const transport = createGrpcTransport({
    httpVersion: '2',
    baseUrl: "https://nebula.saltoapis.com",
    interceptors: [ authInterceptor ]
});

// Now you can use the transport to instantiate any gRPC service
const client = createPromiseClient(OperationService, transport);
const res = await client.listOperations({ pageSize: 10 });
```

You can find more information about authentication at [Salto Nebula API authentication](https://developer.saltosystems.com/nebula/api/authentication/).

## Troubleshooting

- **401 Unauthorized or 404 Not Found when installing packages**
  - Make sure your personal access token has the `read:packages` scope.
  - Ensure your `.npmrc` is correctly configured and you are logged in to the correct registry.
  - Double-check the package name and scope.

- **npm ERR! code E401 or E403**
  - Your token may have expired or been revoked. Generate a new one and update your `.npmrc` or re-run `npm login`.

- **Cannot find package**
  - Confirm the package exists at [saltoapis-es NPM packages](https://github.com/saltoapis/saltoapis-es/packages?ecosystem=npm) and you are using the correct name.

- **Still having issues?**
  - Try logging out (`npm logout --scope=@saltoapis --registry=https://npm.pkg.github.com`) and logging in again.
  - Check for typos in your `.npmrc` file.
  - Consult the [GitHub Packages documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) for more help.
