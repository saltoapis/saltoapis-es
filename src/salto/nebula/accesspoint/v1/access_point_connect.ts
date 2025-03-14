// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/accesspoint/v1/access_point.proto (package salto.nebula.accesspoint.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AccessPoint, CreateAccessPointRequest, DeleteAccessPointRequest, GetAccessPointRequest, ListAccessPointsRequest, ListAccessPointsResponse, UnlockAccessPointRequest, UpdateAccessPointRequest } from "./access_point_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { Operation } from "@saltoapis/longrunning-v1";

/**
 * An access point is a smart electronic locking device capable of granting or
 * denying access to a secured area. This service is responsible for managing
 * access point resources.
 *
 * @generated from service salto.nebula.accesspoint.v1.AccessPointService
 */
export const AccessPointService = {
  typeName: "salto.nebula.accesspoint.v1.AccessPointService",
  methods: {
    /**
     * Create an access point
     *
     * Creates a new access point.
     *
     * @generated from rpc salto.nebula.accesspoint.v1.AccessPointService.CreateAccessPoint
     */
    createAccessPoint: {
      name: "CreateAccessPoint",
      I: CreateAccessPointRequest,
      O: AccessPoint,
      kind: MethodKind.Unary,
    },
    /**
     * Get an access point
     *
     * Retrieves an existing access point.
     *
     * @generated from rpc salto.nebula.accesspoint.v1.AccessPointService.GetAccessPoint
     */
    getAccessPoint: {
      name: "GetAccessPoint",
      I: GetAccessPointRequest,
      O: AccessPoint,
      kind: MethodKind.Unary,
    },
    /**
     * List access points
     *
     * Returns a list of access points that have been previously created.
     *
     * @generated from rpc salto.nebula.accesspoint.v1.AccessPointService.ListAccessPoints
     */
    listAccessPoints: {
      name: "ListAccessPoints",
      I: ListAccessPointsRequest,
      O: ListAccessPointsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update an access point
     *
     * Updates an existing access point.
     *
     * @generated from rpc salto.nebula.accesspoint.v1.AccessPointService.UpdateAccessPoint
     */
    updateAccessPoint: {
      name: "UpdateAccessPoint",
      I: UpdateAccessPointRequest,
      O: AccessPoint,
      kind: MethodKind.Unary,
    },
    /**
     * Delete an access point
     *
     * Permanently deletes an access point. This cannot be undone.
     *
     * @generated from rpc salto.nebula.accesspoint.v1.AccessPointService.DeleteAccessPoint
     */
    deleteAccessPoint: {
      name: "DeleteAccessPoint",
      I: DeleteAccessPointRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Unlock an access point
     *
     * Remotely unlocks an access point. This can be run against those access
     * points where their associated devices are online and connected.
     *
     * @generated from rpc salto.nebula.accesspoint.v1.AccessPointService.UnlockAccessPoint
     */
    unlockAccessPoint: {
      name: "UnlockAccessPoint",
      I: UnlockAccessPointRequest,
      O: Operation,
      kind: MethodKind.Unary,
    },
  }
} as const;

