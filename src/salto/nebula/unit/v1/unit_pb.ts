// @generated by protoc-gen-es v1.3.1 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/unit/v1/unit.proto (package salto.nebula.unit.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Representation of a unit resource inside the API
 *
 * @generated from message salto.nebula.unit.v1.Unit
 */
export class Unit extends Message<Unit> {
  /**
   * Resource name of the unit. It must have the format
   * `installations/*\/units/*`, for example:
   * `installations/surelock-homes-hq/units/101`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Display name.
   *
   * @generated from field: string display_name = 2;
   */
  displayName = "";

  /**
   * Time the unit was moved in.
   *
   * @generated from field: google.protobuf.Timestamp move_in_time = 3;
   */
  moveInTime?: Timestamp;

  /**
   * Time the unit was moved out.
   *
   * @generated from field: google.protobuf.Timestamp move_out_time = 4;
   */
  moveOutTime?: Timestamp;

  constructor(data?: PartialMessage<Unit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.Unit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "move_in_time", kind: "message", T: Timestamp },
    { no: 4, name: "move_out_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Unit {
    return new Unit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Unit {
    return new Unit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Unit {
    return new Unit().fromJsonString(jsonString, options);
  }

  static equals(a: Unit | PlainMessage<Unit> | undefined, b: Unit | PlainMessage<Unit> | undefined): boolean {
    return proto3.util.equals(Unit, a, b);
  }
}

/**
 * Representation of an IAM policy inside the API
 *
 * @generated from message salto.nebula.unit.v1.Policy
 */
export class Policy extends Message<Policy> {
  /**
   * Output only. Resource name of the policy. It must have the format of
   * `installations/*\/units/*\/iam-policies`, for example:
   * `installations/surelock-homes-hq/units/101/iam-policies/standard`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Specifies the identity requesting access to this resource.
   *
   * @generated from field: string member = 2;
   */
  member = "";

  /**
   * The names of the roles this policy grants.
   *
   * @generated from field: repeated string roles = 3;
   */
  roles: string[] = [];

  constructor(data?: PartialMessage<Policy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.Policy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "member", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "roles", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Policy {
    return new Policy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Policy {
    return new Policy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Policy {
    return new Policy().fromJsonString(jsonString, options);
  }

  static equals(a: Policy | PlainMessage<Policy> | undefined, b: Policy | PlainMessage<Policy> | undefined): boolean {
    return proto3.util.equals(Policy, a, b);
  }
}

/**
 * The request message for [`CreateUnit`][salto.nebula.unit.v1.UnitService.CreateUnit]
 *
 * @generated from message salto.nebula.unit.v1.CreateUnitRequest
 */
export class CreateUnitRequest extends Message<CreateUnitRequest> {
  /**
   * Resource name of the parent resource under which the unit is created. For
   * example, `installations/surelock-homes-hq`.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * The unit id to use for this unit. If it's empty the server will
   * autogenerate a unique identifier.
   *
   * @generated from field: optional string unit_id = 2;
   */
  unitId?: string;

  /**
   * The unit resource to be created. Client must not set the `Unit.name`
   * field.
   *
   * @generated from field: salto.nebula.unit.v1.Unit unit = 3;
   */
  unit?: Unit;

  constructor(data?: PartialMessage<CreateUnitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.CreateUnitRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "unit_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "unit", kind: "message", T: Unit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateUnitRequest {
    return new CreateUnitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateUnitRequest {
    return new CreateUnitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateUnitRequest {
    return new CreateUnitRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateUnitRequest | PlainMessage<CreateUnitRequest> | undefined, b: CreateUnitRequest | PlainMessage<CreateUnitRequest> | undefined): boolean {
    return proto3.util.equals(CreateUnitRequest, a, b);
  }
}

/**
 * The request message for [`GetUnit`][salto.nebula.unit.v1.UnitService.GetUnit]
 *
 * @generated from message salto.nebula.unit.v1.GetUnitRequest
 */
export class GetUnitRequest extends Message<GetUnitRequest> {
  /**
   * The name of the requested unit resource. For example:
   * `installations/surelock-homes-hq/unit/101`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetUnitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.GetUnitRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUnitRequest {
    return new GetUnitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUnitRequest {
    return new GetUnitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUnitRequest {
    return new GetUnitRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetUnitRequest | PlainMessage<GetUnitRequest> | undefined, b: GetUnitRequest | PlainMessage<GetUnitRequest> | undefined): boolean {
    return proto3.util.equals(GetUnitRequest, a, b);
  }
}

/**
 * The request message for [`ListUnits`][salto.nebula.unit.v1.UnitService.ListUnits]
 *
 * @generated from message salto.nebula.unit.v1.ListUnitsRequest
 */
export class ListUnitsRequest extends Message<ListUnitsRequest> {
  /**
   * The parent resource name, for example, `installations/surelock-homes-hq`.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * The maximum number of items to return.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * The `next_page_token` value returned from a previous `List` request, if
   * any.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  /**
   * A filter that chooses which units to return.
   *
   * @generated from field: string filter = 4;
   */
  filter = "";

  /**
   * How the results should be sorted.
   *
   * @generated from field: string order_by = 5;
   */
  orderBy = "";

  constructor(data?: PartialMessage<ListUnitsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.ListUnitsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUnitsRequest {
    return new ListUnitsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUnitsRequest {
    return new ListUnitsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUnitsRequest {
    return new ListUnitsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListUnitsRequest | PlainMessage<ListUnitsRequest> | undefined, b: ListUnitsRequest | PlainMessage<ListUnitsRequest> | undefined): boolean {
    return proto3.util.equals(ListUnitsRequest, a, b);
  }
}

/**
 * The request message for [`ListUnits`][salto.nebula.unit.v1.UnitService.ListUnits]
 *
 * @generated from message salto.nebula.unit.v1.ListUnitsResponse
 */
export class ListUnitsResponse extends Message<ListUnitsResponse> {
  /**
   * The field name should match the noun `units` in the method name. There
   * will be a maximum number of items returned based on the `page_size` field
   * in the request.
   *
   * @generated from field: repeated salto.nebula.unit.v1.Unit units = 1;
   */
  units: Unit[] = [];

  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListUnitsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.ListUnitsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "units", kind: "message", T: Unit, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUnitsResponse {
    return new ListUnitsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUnitsResponse {
    return new ListUnitsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUnitsResponse {
    return new ListUnitsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListUnitsResponse | PlainMessage<ListUnitsResponse> | undefined, b: ListUnitsResponse | PlainMessage<ListUnitsResponse> | undefined): boolean {
    return proto3.util.equals(ListUnitsResponse, a, b);
  }
}

/**
 * The request message for [`UpdateUnit`][salto.nebula.unit.v1.UnitService.UpdateUnit]
 *
 * @generated from message salto.nebula.unit.v1.UpdateUnitRequest
 */
export class UpdateUnitRequest extends Message<UpdateUnitRequest> {
  /**
   * The unit resource which replaces the resource on the server.
   *
   * @generated from field: salto.nebula.unit.v1.Unit unit = 1;
   */
  unit?: Unit;

  /**
   * The update mask applied to the resource.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateUnitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.UpdateUnitRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "unit", kind: "message", T: Unit },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUnitRequest {
    return new UpdateUnitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUnitRequest {
    return new UpdateUnitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUnitRequest {
    return new UpdateUnitRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateUnitRequest | PlainMessage<UpdateUnitRequest> | undefined, b: UpdateUnitRequest | PlainMessage<UpdateUnitRequest> | undefined): boolean {
    return proto3.util.equals(UpdateUnitRequest, a, b);
  }
}

/**
 * The request message for [`DeleteUnit`][salto.nebula.unit.v1.UnitService.DeleteUnit]
 *
 * @generated from message salto.nebula.unit.v1.DeleteUnitRequest
 */
export class DeleteUnitRequest extends Message<DeleteUnitRequest> {
  /**
   * The resource name of the unit to be deleted, for example:
   * `installations/surelock-homes-hq/units/101`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteUnitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.DeleteUnitRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteUnitRequest {
    return new DeleteUnitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteUnitRequest {
    return new DeleteUnitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteUnitRequest {
    return new DeleteUnitRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteUnitRequest | PlainMessage<DeleteUnitRequest> | undefined, b: DeleteUnitRequest | PlainMessage<DeleteUnitRequest> | undefined): boolean {
    return proto3.util.equals(DeleteUnitRequest, a, b);
  }
}

/**
 * The request message for [`CleanOutUnit`][salto.nebula.unit.v1.UnitService.CleanOutUnit]
 *
 * @generated from message salto.nebula.unit.v1.CleanOutUnitRequest
 */
export class CleanOutUnitRequest extends Message<CleanOutUnitRequest> {
  /**
   * The resource name of the unit to be cleaned out. For example:
   * `installations/salto-hq/units/101`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<CleanOutUnitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.CleanOutUnitRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CleanOutUnitRequest {
    return new CleanOutUnitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CleanOutUnitRequest {
    return new CleanOutUnitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CleanOutUnitRequest {
    return new CleanOutUnitRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CleanOutUnitRequest | PlainMessage<CleanOutUnitRequest> | undefined, b: CleanOutUnitRequest | PlainMessage<CleanOutUnitRequest> | undefined): boolean {
    return proto3.util.equals(CleanOutUnitRequest, a, b);
  }
}

/**
 * The empty response message for [`CleanOutUnit`][salto.nebula.unit.v1.UnitService.CleanOutUnit]
 *
 * @generated from message salto.nebula.unit.v1.CleanOutUnitResponse
 */
export class CleanOutUnitResponse extends Message<CleanOutUnitResponse> {
  constructor(data?: PartialMessage<CleanOutUnitResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.CleanOutUnitResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CleanOutUnitResponse {
    return new CleanOutUnitResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CleanOutUnitResponse {
    return new CleanOutUnitResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CleanOutUnitResponse {
    return new CleanOutUnitResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CleanOutUnitResponse | PlainMessage<CleanOutUnitResponse> | undefined, b: CleanOutUnitResponse | PlainMessage<CleanOutUnitResponse> | undefined): boolean {
    return proto3.util.equals(CleanOutUnitResponse, a, b);
  }
}

/**
 * The request message for [`CreatePolicy`][salto.nebula.unit.v1.UnitService.CreatePolicy]
 *
 * @generated from message salto.nebula.unit.v1.CreatePolicyRequest
 */
export class CreatePolicyRequest extends Message<CreatePolicyRequest> {
  /**
   * Resource name of the parent resource where to create the policy. For
   * example: `installations/salto-hq/units/101`.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * The policy ID to use for policy. In case it's empty the server
   * will autogenerate a unique identifier.
   *
   * @generated from field: string policy_id = 2;
   */
  policyId = "";

  /**
   * The policy resource to be created. Client must not set the `Policy.name`
   * field.
   *
   * @generated from field: salto.nebula.unit.v1.Policy policy = 3;
   */
  policy?: Policy;

  constructor(data?: PartialMessage<CreatePolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.CreatePolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "policy_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "policy", kind: "message", T: Policy },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePolicyRequest {
    return new CreatePolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePolicyRequest {
    return new CreatePolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePolicyRequest {
    return new CreatePolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreatePolicyRequest | PlainMessage<CreatePolicyRequest> | undefined, b: CreatePolicyRequest | PlainMessage<CreatePolicyRequest> | undefined): boolean {
    return proto3.util.equals(CreatePolicyRequest, a, b);
  }
}

/**
 * The request message for [`GetPolicy`][salto.nebula.unit.v1.UnitService.GetPolicy]
 *
 * @generated from message salto.nebula.unit.v1.GetPolicyRequest
 */
export class GetPolicyRequest extends Message<GetPolicyRequest> {
  /**
   * The name of the requested policy resource. For example:
   * `installations/surelock-homes-hq/units/101/iam-policies/standard`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetPolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.GetPolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPolicyRequest {
    return new GetPolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPolicyRequest {
    return new GetPolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPolicyRequest {
    return new GetPolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetPolicyRequest | PlainMessage<GetPolicyRequest> | undefined, b: GetPolicyRequest | PlainMessage<GetPolicyRequest> | undefined): boolean {
    return proto3.util.equals(GetPolicyRequest, a, b);
  }
}

/**
 * The request message for [`ListPolicies`][salto.nebula.unit.v1.UnitService.ListPolicies]
 *
 * @generated from message salto.nebula.unit.v1.ListPoliciesRequest
 */
export class ListPoliciesRequest extends Message<ListPoliciesRequest> {
  /**
   * The parent resource name, for example:
   * `installations/surelock-homes-hq/units/101`.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * The maximum number of items to return.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * The `next_page_token` value returned from a previous `List` request, if
   * any.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  /**
   * A filter that chooses which policies to return.
   *
   * @generated from field: string filter = 4;
   */
  filter = "";

  /**
   * How the results should be sorted.
   *
   * @generated from field: string order_by = 5;
   */
  orderBy = "";

  constructor(data?: PartialMessage<ListPoliciesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.ListPoliciesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPoliciesRequest {
    return new ListPoliciesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPoliciesRequest {
    return new ListPoliciesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPoliciesRequest {
    return new ListPoliciesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListPoliciesRequest | PlainMessage<ListPoliciesRequest> | undefined, b: ListPoliciesRequest | PlainMessage<ListPoliciesRequest> | undefined): boolean {
    return proto3.util.equals(ListPoliciesRequest, a, b);
  }
}

/**
 * The response message for [`ListPolicies`][salto.nebula.unit.v1.UnitService.ListPolicies]
 *
 * @generated from message salto.nebula.unit.v1.ListPoliciesResponse
 */
export class ListPoliciesResponse extends Message<ListPoliciesResponse> {
  /**
   * The field name should match the noun `policies` in the method name.
   * There will be a maximum number of items returned based on the `page_size`
   * field in the request.
   *
   * @generated from field: repeated salto.nebula.unit.v1.Policy policies = 1;
   */
  policies: Policy[] = [];

  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListPoliciesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.ListPoliciesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "policies", kind: "message", T: Policy, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPoliciesResponse {
    return new ListPoliciesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPoliciesResponse {
    return new ListPoliciesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPoliciesResponse {
    return new ListPoliciesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListPoliciesResponse | PlainMessage<ListPoliciesResponse> | undefined, b: ListPoliciesResponse | PlainMessage<ListPoliciesResponse> | undefined): boolean {
    return proto3.util.equals(ListPoliciesResponse, a, b);
  }
}

/**
 * The request message for [`UpdatePolicy`][salto.nebula.unit.v1.UnitService.UpdatePolicy]
 *
 * @generated from message salto.nebula.unit.v1.UpdatePolicyRequest
 */
export class UpdatePolicyRequest extends Message<UpdatePolicyRequest> {
  /**
   * The policy resource which replaces the resource on the server.
   *
   * @generated from field: salto.nebula.unit.v1.Policy policy = 1;
   */
  policy?: Policy;

  /**
   * The update mask applied to the resource.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdatePolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.UpdatePolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "policy", kind: "message", T: Policy },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePolicyRequest {
    return new UpdatePolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePolicyRequest {
    return new UpdatePolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePolicyRequest {
    return new UpdatePolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdatePolicyRequest | PlainMessage<UpdatePolicyRequest> | undefined, b: UpdatePolicyRequest | PlainMessage<UpdatePolicyRequest> | undefined): boolean {
    return proto3.util.equals(UpdatePolicyRequest, a, b);
  }
}

/**
 * The request message for [`DeletePolicy`][salto.nebula.unit.v1.UnitService.DeletePolicy]
 *
 * @generated from message salto.nebula.unit.v1.DeletePolicyRequest
 */
export class DeletePolicyRequest extends Message<DeletePolicyRequest> {
  /**
   * The resource name of the policy to be deleted, for example:
   * `installations/surelock-homes-hq/units/101/iam-policies/standard`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeletePolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.DeletePolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePolicyRequest {
    return new DeletePolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePolicyRequest {
    return new DeletePolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePolicyRequest {
    return new DeletePolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeletePolicyRequest | PlainMessage<DeletePolicyRequest> | undefined, b: DeletePolicyRequest | PlainMessage<DeletePolicyRequest> | undefined): boolean {
    return proto3.util.equals(DeletePolicyRequest, a, b);
  }
}

/**
 * The request message for [`TestPermissions`][salto.nebula.unit.v1.UnitService.TestPermissions]
 *
 * @generated from message salto.nebula.unit.v1.TestPermissionsRequest
 */
export class TestPermissionsRequest extends Message<TestPermissionsRequest> {
  /**
   * The resource name for which the policy detail is being requested, for
   * example: `installations/surelock-homes-hq/units/101`.
   *
   * @generated from field: string unit = 1;
   */
  unit = "";

  /**
   * The set of permissions to check for the `resource_name`. Permissions with
   * wildcards (such as '*' or 'nebula.access-point.*') are not allowed.
   *
   * @generated from field: repeated string permissions = 2;
   */
  permissions: string[] = [];

  constructor(data?: PartialMessage<TestPermissionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.TestPermissionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "unit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestPermissionsRequest {
    return new TestPermissionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestPermissionsRequest {
    return new TestPermissionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestPermissionsRequest {
    return new TestPermissionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TestPermissionsRequest | PlainMessage<TestPermissionsRequest> | undefined, b: TestPermissionsRequest | PlainMessage<TestPermissionsRequest> | undefined): boolean {
    return proto3.util.equals(TestPermissionsRequest, a, b);
  }
}

/**
 * The response message for [`TestPermissions`][salto.nebula.unit.v1.UnitService.TestPermissions]
 *
 * @generated from message salto.nebula.unit.v1.TestPermissionsResponse
 */
export class TestPermissionsResponse extends Message<TestPermissionsResponse> {
  /**
   * A subset of `TestPermissionsRequest.permissions` that the caller is
   * allowed.
   *
   * @generated from field: repeated string permissions = 1;
   */
  permissions: string[] = [];

  constructor(data?: PartialMessage<TestPermissionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.unit.v1.TestPermissionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestPermissionsResponse {
    return new TestPermissionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestPermissionsResponse {
    return new TestPermissionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestPermissionsResponse {
    return new TestPermissionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TestPermissionsResponse | PlainMessage<TestPermissionsResponse> | undefined, b: TestPermissionsResponse | PlainMessage<TestPermissionsResponse> | undefined): boolean {
    return proto3.util.equals(TestPermissionsResponse, a, b);
  }
}

