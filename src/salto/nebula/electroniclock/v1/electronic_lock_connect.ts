// @generated by protoc-gen-connect-es v1.0.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/electroniclock/v1/electronic_lock.proto (package salto.nebula.electroniclock.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BindElectronicLockRequest, BindElectronicLockResponse, ConfigureElectronicLockRequest, CreateElectronicLockRequest, DeleteElectronicLockRequest, ElectronicLock, GenerateAuthorizationTokenRequest, GenerateAuthorizationTokenResponse, GetElectronicLockRequest, InitializeElectronicLockRequest, ListElectronicLocksRequest, ListElectronicLocksResponse, ResetElectronicLockRequest, UnbindElectronicLockRequest, UnbindElectronicLockResponse, UpdateElectronicLockFirmwareRequest, UpdateElectronicLockRequest } from "./electronic_lock_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { Operation } from "@saltoapis/longrunning-v1";

/**
 * An electronic lock is a physical electronic device such as an electronic
 * escutcheon or cylinder, or a door controller with an electric strike. It
 * differs from an access point in that, an electronic lock could be a
 * particular model of a device such as a SALTO Neo cylinder, a door controller
 * with an electric strike or a Danalock V3 smartlock, for example. An
 * electronic lock is a single device whereas an access point could be made up
 * of several devices. An access point could be composed of an electronic lock
 * plus a door detector, a door controller and a keypad, or an intercom adaptor
 * which is connected to multiple electronic locks. This service is responsible
 * for managing electronic lock resources.
 *
 * @generated from service salto.nebula.electroniclock.v1.ElectronicLockService
 */
export const ElectronicLockService = {
  typeName: "salto.nebula.electroniclock.v1.ElectronicLockService",
  methods: {
    /**
     * Create an electronic lock
     *
     * Creates a new electronic lock
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.CreateElectronicLock
     */
    createElectronicLock: {
      name: "CreateElectronicLock",
      I: CreateElectronicLockRequest,
      O: ElectronicLock,
      kind: MethodKind.Unary,
    },
    /**
     * Get an electronic lock
     *
     * Gets an existing electronic lock.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.GetElectronicLock
     */
    getElectronicLock: {
      name: "GetElectronicLock",
      I: GetElectronicLockRequest,
      O: ElectronicLock,
      kind: MethodKind.Unary,
    },
    /**
     * List electronic locks
     *
     * Returns a list of electronic locks that have been previously created.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.ListElectronicLocks
     */
    listElectronicLocks: {
      name: "ListElectronicLocks",
      I: ListElectronicLocksRequest,
      O: ListElectronicLocksResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update an electronic lock
     *
     * Updates an existing electronic lock.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.UpdateElectronicLock
     */
    updateElectronicLock: {
      name: "UpdateElectronicLock",
      I: UpdateElectronicLockRequest,
      O: ElectronicLock,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an electronic lock
     *
     * Permanently deletes an electronic lock. This cannot be undone.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.DeleteElectronicLock
     */
    deleteElectronicLock: {
      name: "DeleteElectronicLock",
      I: DeleteElectronicLockRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Bind an electronic lock
     *
     * Binds an electronic lock. Binding an electronic lock assigns a device
     * identifier to the electronic lock. After binding, the device can then be
     * initialized or configured.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.BindElectronicLock
     */
    bindElectronicLock: {
      name: "BindElectronicLock",
      I: BindElectronicLockRequest,
      O: BindElectronicLockResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Unbind an electronic lock
     *
     * Unbinds an electronic lock. Unbinding an electronic lock removes the
     * device identifier from the electronic lock. This may be required in some
     * cases where the electronic lock is not available anymore because, for
     * example, it's broken or damaged. Unbinding allows the initialization of
     * the replacement device without removing it from the installation. It also
     * means the device keeps all the information associated with it, such as
     * events.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.UnbindElectronicLock
     */
    unbindElectronicLock: {
      name: "UnbindElectronicLock",
      I: UnbindElectronicLockRequest,
      O: UnbindElectronicLockResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Initialize an electronic lock
     *
     * Initializes an electronic lock. Electronic locks need to be initialized
     * before you can start to use them.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.InitializeElectronicLock
     */
    initializeElectronicLock: {
      name: "InitializeElectronicLock",
      I: InitializeElectronicLockRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Configure an electronic lock
     *
     * Configures an electronic lock. Configuring an electronic lock implies
     * adding some information to the electronic lock such as setting the time
     * zone.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.ConfigureElectronicLock
     */
    configureElectronicLock: {
      name: "ConfigureElectronicLock",
      I: ConfigureElectronicLockRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Reset an electronic lock
     *
     * Resetting a device such as an electronic lock means returning it to its
     * factory settings. Resetting is the process of removing the identity as
     * well as all the associated information of an already configured device.
     * Once a device has been reset, you need to reconfigure it.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.ResetElectronicLock
     */
    resetElectronicLock: {
      name: "ResetElectronicLock",
      I: ResetElectronicLockRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Update electronic lock firmware
     *
     * Updates an electronic lock's firmware. SALTO provides firmware updates
     * when new functionality is available or when we fix a bug.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.UpdateElectronicLockFirmware
     */
    updateElectronicLockFirmware: {
      name: "UpdateElectronicLockFirmware",
      I: UpdateElectronicLockFirmwareRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Generate authorization token for an electronic lock
     *
     * Generates an authorization token that allows to connect to, authenticate and
     * authorize an electronic lock.
     *
     * @generated from rpc salto.nebula.electroniclock.v1.ElectronicLockService.GenerateAuthorizationToken
     */
    generateAuthorizationToken: {
      name: "GenerateAuthorizationToken",
      I: GenerateAuthorizationTokenRequest,
      O: GenerateAuthorizationTokenResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

