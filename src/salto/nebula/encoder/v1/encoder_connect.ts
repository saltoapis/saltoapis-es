// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/encoder/v1/encoder.proto (package salto.nebula.encoder.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BindEncoderRequest, BindEncoderResponse, ConfigureEncoderRequest, CreateEncoderRequest, DeleteEncoderRequest, Encoder, GenerateAuthorizationTokenRequest, GenerateAuthorizationTokenResponse, GenerateFirmwareDownloadUriRequest, GetEncoderRequest, InitializeEncoderRequest, ListEncodersRequest, ListEncodersResponse, ReadKeyRequest, ResetEncoderRequest, UnbindEncoderRequest, UnbindEncoderResponse, UpdateEncoderFirmwareRequest, UpdateEncoderRequest } from "./encoder_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { Operation } from "@saltoapis/longrunning-v1";

/**
 * A card encoder is an external device that reads and updates physical card
 * keys with access information. This service is responsible for managing
 * encoder resources.
 *
 * @generated from service salto.nebula.encoder.v1.EncoderService
 */
export const EncoderService = {
  typeName: "salto.nebula.encoder.v1.EncoderService",
  methods: {
    /**
     * Create an encoder
     *
     * Creates a new encoder.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.CreateEncoder
     */
    createEncoder: {
      name: "CreateEncoder",
      I: CreateEncoderRequest,
      O: Encoder,
      kind: MethodKind.Unary,
    },
    /**
     * Get an encoder
     *
     * Gets an existing encoder.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.GetEncoder
     */
    getEncoder: {
      name: "GetEncoder",
      I: GetEncoderRequest,
      O: Encoder,
      kind: MethodKind.Unary,
    },
    /**
     * List encoders
     *
     * Returns a list of encoders that have been previously created.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.ListEncoders
     */
    listEncoders: {
      name: "ListEncoders",
      I: ListEncodersRequest,
      O: ListEncodersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update an encoder
     *
     * Updates an existing encoder.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.UpdateEncoder
     */
    updateEncoder: {
      name: "UpdateEncoder",
      I: UpdateEncoderRequest,
      O: Encoder,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an encoder
     *
     * Permanently deletes an encoder. This cannot be undone.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.DeleteEncoder
     */
    deleteEncoder: {
      name: "DeleteEncoder",
      I: DeleteEncoderRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Initialize an encoder
     *
     * Initializes an encoder. Encoders need to be initialized before
     * you can start to use them.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.InitializeEncoder
     */
    initializeEncoder: {
      name: "InitializeEncoder",
      I: InitializeEncoderRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Configure an encoder
     *
     * Configures an encoder. Configuring an encoder implies adding some
     * information to the encoder based on the current settings.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.ConfigureEncoder
     */
    configureEncoder: {
      name: "ConfigureEncoder",
      I: ConfigureEncoderRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Reset an encoder
     *
     * Resetting a device such as an encoder means returning it to its factory
     * settings. Resetting is the process of removing the identity as
     * well as all the associated information of an already configured device.
     * Once a device has been reset, you need to reconfigure it.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.ResetEncoder
     */
    resetEncoder: {
      name: "ResetEncoder",
      I: ResetEncoderRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Update encoder firmware
     *
     * Updates an encoder's firmware. SALTO provides firmware updates
     * when new functionality is available or when we fix a bug.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.UpdateEncoderFirmware
     */
    updateEncoderFirmware: {
      name: "UpdateEncoderFirmware",
      I: UpdateEncoderFirmwareRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Bind an encoder
     *
     * Binds an encoder. Binding an encoder assigns a device
     * identifier to the encoder. After binding, the device can then be
     * initialized or configured.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.BindEncoder
     */
    bindEncoder: {
      name: "BindEncoder",
      I: BindEncoderRequest,
      O: BindEncoderResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Unbind an encoder
     *
     * Unbinds an encoder. Unbinding an encoder removes the
     * device identifier from the encoder. This may be required in some
     * cases where the encoder is not available anymore because, for
     * example, it's broken or damaged. Unbinding allows the initialization of
     * the replacement device without removing it from the installation. It also
     * means the device keeps all the information associated with it, such as
     * events.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.UnbindEncoder
     */
    unbindEncoder: {
      name: "UnbindEncoder",
      I: UnbindEncoderRequest,
      O: UnbindEncoderResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Read a key
     *
     * Reads a key presented on an encoder.
     * (-- api-linter: core::0131::synonyms=disabled  --)
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.ReadKey
     */
    readKey: {
      name: "ReadKey",
      I: ReadKeyRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Generates an authorization token for an encoder
     *
     * Generates an authorization token that allows to connect, authenticate and
     * authorize against an encoder.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.GenerateAuthorizationToken
     */
    generateAuthorizationToken: {
      name: "GenerateAuthorizationToken",
      I: GenerateAuthorizationTokenRequest,
      O: GenerateAuthorizationTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Generate encoder firmware download URI
     *
     * Provides the download URI for the latest firmware bundle for the
     * encoder. The returned URI can be used to bring the encoder
     * firmwares up to latest.
     *
     * @generated from rpc salto.nebula.encoder.v1.EncoderService.GenerateFirmwareDownloadUri
     */
    generateFirmwareDownloadUri: {
      name: "GenerateFirmwareDownloadUri",
      I: GenerateFirmwareDownloadUriRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
  }
} as const;

