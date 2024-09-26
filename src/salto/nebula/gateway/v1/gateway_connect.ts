// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/gateway/v1/gateway.proto (package salto.nebula.gateway.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BindGatewayRequest, BindGatewayResponse, ConfigureGatewayRequest, CreateGatewayRequest, DeleteGatewayRequest, Gateway, GenerateAuthorizationTokenRequest, GenerateAuthorizationTokenResponse, GenerateFirmwareDownloadUriRequest, GetGatewayRequest, InitializeGatewayRequest, ListGatewaysRequest, ListGatewaysResponse, ResetGatewayRequest, UnbindGatewayRequest, UnbindGatewayResponse, UpdateGatewayFirmwareRequest, UpdateGatewayRequest } from "./gateway_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { Operation } from "@saltoapis/longrunning-v1";

/**
 * Gateways are hardware devices intended to be used with access points where
 * online connectivity is needed. This service is responsible for managing
 * gateway resources.
 *
 * @generated from service salto.nebula.gateway.v1.GatewayService
 */
export const GatewayService = {
  typeName: "salto.nebula.gateway.v1.GatewayService",
  methods: {
    /**
     * Create a gateway
     *
     * Creates a new gateway
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.CreateGateway
     */
    createGateway: {
      name: "CreateGateway",
      I: CreateGatewayRequest,
      O: Gateway,
      kind: MethodKind.Unary,
    },
    /**
     * Get a gateway
     *
     * Gets an existing gateway.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.GetGateway
     */
    getGateway: {
      name: "GetGateway",
      I: GetGatewayRequest,
      O: Gateway,
      kind: MethodKind.Unary,
    },
    /**
     * List gateways
     *
     * Returns a list of gateways that have been previously created.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.ListGateways
     */
    listGateways: {
      name: "ListGateways",
      I: ListGatewaysRequest,
      O: ListGatewaysResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update a gateway
     *
     * Updates an existing gateway.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.UpdateGateway
     */
    updateGateway: {
      name: "UpdateGateway",
      I: UpdateGatewayRequest,
      O: Gateway,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a gateway
     *
     * Permanently deletes a gateway. This cannot be undone.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.DeleteGateway
     */
    deleteGateway: {
      name: "DeleteGateway",
      I: DeleteGatewayRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Bind a gateway
     *
     * Binds a gateway. Binding a gateway assigns a device
     * identifier to the gateway. After binding, the device can then be
     * initialized or configured.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.BindGateway
     */
    bindGateway: {
      name: "BindGateway",
      I: BindGatewayRequest,
      O: BindGatewayResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Unbind a gateway
     *
     * Unbinds a gateway. Unbinding a gateway removes the
     * device identifier from the gateway. This may be required in some
     * cases where the gateway is not available anymore because, for
     * example, it's broken or damaged. Unbinding allows the initialization of
     * the replacement device without removing it from the installation. It also
     * means the device keeps all the information associated with it, such as
     * events.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.UnbindGateway
     */
    unbindGateway: {
      name: "UnbindGateway",
      I: UnbindGatewayRequest,
      O: UnbindGatewayResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Initialize a gateway
     *
     * Initializes a gateway. Gateways need to be initialized before
     * you can start to use them.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.InitializeGateway
     */
    initializeGateway: {
      name: "InitializeGateway",
      I: InitializeGatewayRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Configure a gateway
     *
     * Configures a gateway. Configuring a gateway implies adding some
     * information to the gateway such as setting the time zone.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.ConfigureGateway
     */
    configureGateway: {
      name: "ConfigureGateway",
      I: ConfigureGatewayRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Reset a gateway
     *
     * Resetting a device such as a gateway means returning it to its factory
     * settings. Resetting is the process of removing the identity as
     * well as all the associated information of an already configured device.
     * Once a device has been reset, you need to reconfigure it.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.ResetGateway
     */
    resetGateway: {
      name: "ResetGateway",
      I: ResetGatewayRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Update gateway firmware
     *
     * Updates a gateway's firmware. SALTO provides firmware updates when
     * new functionality is available or when we fix a bug.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.UpdateGatewayFirmware
     */
    updateGatewayFirmware: {
      name: "UpdateGatewayFirmware",
      I: UpdateGatewayFirmwareRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Generates an authorization token for a gateway
     *
     * Generates an authorization token that allows to connect, authenticate and
     * authorize against a gateway.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.GenerateAuthorizationToken
     */
    generateAuthorizationToken: {
      name: "GenerateAuthorizationToken",
      I: GenerateAuthorizationTokenRequest,
      O: GenerateAuthorizationTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Generate gateway firmware download URI
     *
     * Provides the download URI for the latest firmware bundle for the
     * gateway. The returned URI can be used to bring the gateway
     * firmwares up to latest.
     *
     * @generated from rpc salto.nebula.gateway.v1.GatewayService.GenerateFirmwareDownloadUri
     */
    generateFirmwareDownloadUri: {
      name: "GenerateFirmwareDownloadUri",
      I: GenerateFirmwareDownloadUriRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
  }
} as const;

