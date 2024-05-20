// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/unit/v1/unit.proto (package salto.nebula.unit.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CleanOutUnitRequest, CleanOutUnitResponse, CreatePolicyRequest, CreateUnitRequest, DeletePolicyRequest, DeleteUnitRequest, GetPolicyRequest, GetUnitRequest, ListPoliciesRequest, ListPoliciesResponse, ListUnitsRequest, ListUnitsResponse, MoveInUnitRequest, MoveInUnitResponse, MoveOutUnitRequest, MoveOutUnitResponse, Policy, TestPermissionsRequest, TestPermissionsResponse, Unit, UpdatePolicyRequest, UpdateUnitRequest } from "./unit_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * UnitService is the service responsible for managing unit resources.
 *
 * @generated from service salto.nebula.unit.v1.UnitService
 */
export const UnitService = {
  typeName: "salto.nebula.unit.v1.UnitService",
  methods: {
    /**
     * Create a unit
     *
     * Creates a new unit.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.CreateUnit
     */
    createUnit: {
      name: "CreateUnit",
      I: CreateUnitRequest,
      O: Unit,
      kind: MethodKind.Unary,
    },
    /**
     * Get an existing unit
     *
     * Retrieves an existing unit.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.GetUnit
     */
    getUnit: {
      name: "GetUnit",
      I: GetUnitRequest,
      O: Unit,
      kind: MethodKind.Unary,
    },
    /**
     * List units
     *
     * Returns a list of units that have been previously created.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.ListUnits
     */
    listUnits: {
      name: "ListUnits",
      I: ListUnitsRequest,
      O: ListUnitsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update an existing unit
     *
     * Updates an existing unit.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.UpdateUnit
     */
    updateUnit: {
      name: "UpdateUnit",
      I: UpdateUnitRequest,
      O: Unit,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a unit
     *
     * Permanently deletes a unit. This cannot be undone.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.DeleteUnit
     */
    deleteUnit: {
      name: "DeleteUnit",
      I: DeleteUnitRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Clean out a unit
     *
     * Cleans out a unit by deleting all the users belonging to it. This process
     * implicitly entails the blocking of the keys that were active within the
     * unit. Cleaning out a unit will not delete the access rights and the
     * associated access points that belong to the unit.
     * (-- api-linter: core::0136::http-uri-suffix=disabled
     *     aip.dev/not-precedent: We need to do this because clean out is a
     *     phrasal verb and api-linter don't support using them. --)
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.CleanOutUnit
     */
    cleanOutUnit: {
      name: "CleanOutUnit",
      I: CleanOutUnitRequest,
      O: CleanOutUnitResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Move in a unit
     *
     * Moves in a unit by creating new occupants and associating them with the unit.
     * (-- api-linter: core::0136::http-uri-suffix=disabled
     *     aip.dev/not-precedent: We need to do this because "move in" is a phrasal
     *     verb and the api-linter doesn't support using them. --)
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.MoveInUnit
     */
    moveInUnit: {
      name: "MoveInUnit",
      I: MoveInUnitRequest,
      O: MoveInUnitResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Move out a unit
     *
     * Moves out a unit by deleting all the occupants belonging to it. This process
     * implicitly entails the blocking of the keys that were active within the
     * unit. Moving out a unit will not delete the access rights and the
     * associated access points that belong to the unit.
     * (-- api-linter: core::0136::http-uri-suffix=disabled
     *     aip.dev/not-precedent: We need to do this because "move out" is a phrasal
     *     verb and the api-linter doesn't support using them. --)
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.MoveOutUnit
     */
    moveOutUnit: {
      name: "MoveOutUnit",
      I: MoveOutUnitRequest,
      O: MoveOutUnitResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Create a policy
     *
     * Creates a new policy.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.CreatePolicy
     */
    createPolicy: {
      name: "CreatePolicy",
      I: CreatePolicyRequest,
      O: Policy,
      kind: MethodKind.Unary,
    },
    /**
     * Get an existing policy
     *
     * Retrieves an existing policy.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.GetPolicy
     */
    getPolicy: {
      name: "GetPolicy",
      I: GetPolicyRequest,
      O: Policy,
      kind: MethodKind.Unary,
    },
    /**
     * List policies
     *
     * Returns a list of policies that have been previously created.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.ListPolicies
     */
    listPolicies: {
      name: "ListPolicies",
      I: ListPoliciesRequest,
      O: ListPoliciesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update an existing policy
     *
     * Updates an existing policy.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.UpdatePolicy
     */
    updatePolicy: {
      name: "UpdatePolicy",
      I: UpdatePolicyRequest,
      O: Policy,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a policy
     *
     * Permanently deletes a policy. This cannot be undone.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.DeletePolicy
     */
    deletePolicy: {
      name: "DeletePolicy",
      I: DeletePolicyRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Test a permission
     *
     * Returns permissions that a caller has on the installation. If the
     * installation does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
     *
     * @generated from rpc salto.nebula.unit.v1.UnitService.TestPermissions
     */
    testPermissions: {
      name: "TestPermissions",
      I: TestPermissionsRequest,
      O: TestPermissionsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

