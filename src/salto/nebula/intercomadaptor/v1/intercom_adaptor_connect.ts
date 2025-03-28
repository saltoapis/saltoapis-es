// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/intercomadaptor/v1/intercom_adaptor.proto (package salto.nebula.intercomadaptor.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BindIntercomAdaptorRequest, BindIntercomAdaptorResponse, ConfigureIntercomAdaptorRequest, CreateIntercomAdaptorRequest, DeleteIntercomAdaptorRequest, GenerateAuthorizationTokenRequest, GenerateAuthorizationTokenResponse, GenerateFirmwareDownloadUriRequest, GetIntercomAdaptorRequest, InitializeIntercomAdaptorRequest, IntercomAdaptor, ListIntercomAdaptorsRequest, ListIntercomAdaptorsResponse, ResetIntercomAdaptorRequest, UnbindIntercomAdaptorRequest, UnbindIntercomAdaptorResponse, UpdateIntercomAdaptorFirmwareRequest, UpdateIntercomAdaptorRequest } from "./intercom_adaptor_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { Operation } from "@saltoapis/longrunning-v1";

/**
 * An intercom adaptor is a device that can be connected to an existing intercom
 * system close to the telephone handset, without affecting its proper
 * functioning. Its main function is to convert the intercom system to become
 * part of the access control system.
 *
 * @generated from service salto.nebula.intercomadaptor.v1.IntercomAdaptorService
 */
export const IntercomAdaptorService = {
  typeName: "salto.nebula.intercomadaptor.v1.IntercomAdaptorService",
  methods: {
    /**
     * Create an intercom adaptor
     *
     * Creates a new intercom adaptor
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.CreateIntercomAdaptor
     */
    createIntercomAdaptor: {
      name: "CreateIntercomAdaptor",
      I: CreateIntercomAdaptorRequest,
      O: IntercomAdaptor,
      kind: MethodKind.Unary,
    },
    /**
     * Get an intercom adaptor
     *
     * Gets an existing intercom adaptor.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.GetIntercomAdaptor
     */
    getIntercomAdaptor: {
      name: "GetIntercomAdaptor",
      I: GetIntercomAdaptorRequest,
      O: IntercomAdaptor,
      kind: MethodKind.Unary,
    },
    /**
     * List intercom adaptors
     *
     * Returns a list of intercom adaptors that have been previously created.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.ListIntercomAdaptors
     */
    listIntercomAdaptors: {
      name: "ListIntercomAdaptors",
      I: ListIntercomAdaptorsRequest,
      O: ListIntercomAdaptorsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update an intercom adaptor
     *
     * Updates an existing intercom adaptor.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.UpdateIntercomAdaptor
     */
    updateIntercomAdaptor: {
      name: "UpdateIntercomAdaptor",
      I: UpdateIntercomAdaptorRequest,
      O: IntercomAdaptor,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an intercom adaptor
     *
     * Permanently deletes an intercom adaptor. This cannot be undone.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.DeleteIntercomAdaptor
     */
    deleteIntercomAdaptor: {
      name: "DeleteIntercomAdaptor",
      I: DeleteIntercomAdaptorRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Bind an intercom adaptor
     *
     * Binds an intercom adaptor. Binding an intercom adaptor assigns a device
     * identifier to the intercom adaptor. After binding, the device can then be
     * initialized or configured.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.BindIntercomAdaptor
     */
    bindIntercomAdaptor: {
      name: "BindIntercomAdaptor",
      I: BindIntercomAdaptorRequest,
      O: BindIntercomAdaptorResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Unbind an intercom adaptor
     *
     * Unbinds an intercom adaptor. Unbinding an intercom adaptor removes the
     * device identifier from the intercom adaptor. This may be required in some
     * cases where the intercom adaptor is not available anymore because, for
     * example, it's broken or damaged. Unbinding allows the initialization of
     * the replacement device without removing it from the installation. It also
     * means the device keeps all the information associated with it, such as
     * events.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.UnbindIntercomAdaptor
     */
    unbindIntercomAdaptor: {
      name: "UnbindIntercomAdaptor",
      I: UnbindIntercomAdaptorRequest,
      O: UnbindIntercomAdaptorResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Initialize an intercom adaptor
     *
     * Initializes an intercom adaptor. Intercom adaptors need to be initialized
     * before you can start to use them.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.InitializeIntercomAdaptor
     */
    initializeIntercomAdaptor: {
      name: "InitializeIntercomAdaptor",
      I: InitializeIntercomAdaptorRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Configure an intercom adaptor
     *
     * Configures an intercom adaptor. Configuring an intercom adaptor implies
     * adding some information to the intercom adaptor such as setting the time
     * zone.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.ConfigureIntercomAdaptor
     */
    configureIntercomAdaptor: {
      name: "ConfigureIntercomAdaptor",
      I: ConfigureIntercomAdaptorRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Reset an intercom adaptor
     *
     * Resetting a device such as an intercom adaptor means returning it to its
     * factory settings. Resetting is the process of removing the identity as
     * well as all the associated information of an already configured device.
     * Once a device has been reset, you need to reconfigure it.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.ResetIntercomAdaptor
     */
    resetIntercomAdaptor: {
      name: "ResetIntercomAdaptor",
      I: ResetIntercomAdaptorRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Update intercom adaptor firmware
     *
     * Updates an intercom adaptor's firmware. SALTO provides firmware updates
     * when new functionality is available or when we fix a bug.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.UpdateIntercomAdaptorFirmware
     */
    updateIntercomAdaptorFirmware: {
      name: "UpdateIntercomAdaptorFirmware",
      I: UpdateIntercomAdaptorFirmwareRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Generates an authorization token for an intercom adaptor
     *
     * Generates an authorization token that allows to connect, authenticate and
     * authorize against an intercom adaptor.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.GenerateAuthorizationToken
     */
    generateAuthorizationToken: {
      name: "GenerateAuthorizationToken",
      I: GenerateAuthorizationTokenRequest,
      O: GenerateAuthorizationTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Generate intercom adaptor firmware download URI
     *
     * Provides the download URI for the latest firmware bundle for the
     * intercom adaptor. The returned URI can be used to bring the intercom
     * adaptor firmwares up to latest.
     *
     * @generated from rpc salto.nebula.intercomadaptor.v1.IntercomAdaptorService.GenerateFirmwareDownloadUri
     */
    generateFirmwareDownloadUri: {
      name: "GenerateFirmwareDownloadUri",
      I: GenerateFirmwareDownloadUriRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
  }
} as const;

