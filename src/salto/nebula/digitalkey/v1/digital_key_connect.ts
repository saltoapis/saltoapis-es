// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/digitalkey/v1/digital_key.proto (package salto.nebula.digitalkey.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DigitalKey, DigitalKeyAccessPoint, GetDigitalKeyAccessPointRequest, GetDigitalKeyRequest, ListDigitalKeyAccessPointsRequest, ListDigitalKeyAccessPointsResponse, ListDigitalKeysRequest, ListDigitalKeysResponse, SyncDigitalKeyAccessPointsRequest, UnlockDigitalKeyAccessPointRequest } from "./digital_key_pb";
import { MethodKind } from "@bufbuild/protobuf";
import { Operation } from "@saltoapis/longrunning-v1";

/**
 * DigitalKeyService is the service responsible for managing digital key
 * resources. This service manages resources for the different types of keys
 * that exist on mobile devices, such as app keys or wallet keys.
 *
 * @generated from service salto.nebula.digitalkey.v1.DigitalKeyService
 */
export const DigitalKeyService = {
  typeName: "salto.nebula.digitalkey.v1.DigitalKeyService",
  methods: {
    /**
     * Get a digital key
     *
     * Gets an existing digital key.
     *
     * @generated from rpc salto.nebula.digitalkey.v1.DigitalKeyService.GetDigitalKey
     */
    getDigitalKey: {
      name: "GetDigitalKey",
      I: GetDigitalKeyRequest,
      O: DigitalKey,
      kind: MethodKind.Unary,
    },
    /**
     * List digital keys
     *
     * Returns a list of digital keys that have been previously created.
     *
     * @generated from rpc salto.nebula.digitalkey.v1.DigitalKeyService.ListDigitalKeys
     */
    listDigitalKeys: {
      name: "ListDigitalKeys",
      I: ListDigitalKeysRequest,
      O: ListDigitalKeysResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get an access point
     *
     * Gets an existing digital key's access point association.
     *
     * @generated from rpc salto.nebula.digitalkey.v1.DigitalKeyService.GetDigitalKeyAccessPoint
     */
    getDigitalKeyAccessPoint: {
      name: "GetDigitalKeyAccessPoint",
      I: GetDigitalKeyAccessPointRequest,
      O: DigitalKeyAccessPoint,
      kind: MethodKind.Unary,
    },
    /**
     * List access points
     *
     * Lists an existing digital key's access point associations.
     *
     * @generated from rpc salto.nebula.digitalkey.v1.DigitalKeyService.ListDigitalKeyAccessPoints
     */
    listDigitalKeyAccessPoints: {
      name: "ListDigitalKeyAccessPoints",
      I: ListDigitalKeyAccessPointsRequest,
      O: ListDigitalKeyAccessPointsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Synchronize access points
     *
     * Synchronize the digital key's access point associations.
     * This methods asks the cloud to synchronize the access points for the given digital key.
     * The cloud will trigger the synchronization of the digital key's access points if needed.
     * (-- api-linter: core::0136::http-name-variable=disabled --)
     *
     * @generated from rpc salto.nebula.digitalkey.v1.DigitalKeyService.SyncDigitalKeyAccessPoints
     */
    syncDigitalKeyAccessPoints: {
      name: "SyncDigitalKeyAccessPoints",
      I: SyncDigitalKeyAccessPointsRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Unlock an user access point
     *
     * Remotely unlocks an access point. This can be run against those access
     * points where their associated devices are online and connected.
     * The user related to the digital key must have the necessary access rights
     * and the access point has to include a permitted schedule to perform a remote unlock.
     *
     * @generated from rpc salto.nebula.digitalkey.v1.DigitalKeyService.UnlockDigitalKeyAccessPoint
     */
    unlockDigitalKeyAccessPoint: {
      name: "UnlockDigitalKeyAccessPoint",
      I: UnlockDigitalKeyAccessPointRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
  }
} as const;

