{
  "name": "@saltoapis/${PACKAGE_NAME}",
  "version": "${PACKAGE_VERSION}",
  "description": "SALTO API Client libraries",
  "sideEffects": false,
  "type": "module",
  "repository": {
    "type": "git",
    "url": "https://github.com/saltoapis/saltoapis-es"
  },
  "peerDependencies": {
    "@bufbuild/protobuf": "${BUFBUILD_PROTOBUF_VERSION}",
    "@connectrpc/connect": "${CONNECTRPC_CONNECT_VERSION}"${PACKAGE_DEPS}
  }
}
