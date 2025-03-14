// @generated by protoc-gen-es v1.10.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/openingmodeschedule/v1/opening_mode_schedule.proto (package salto.nebula.openingmodeschedule.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3 } from "@bufbuild/protobuf";
import { DayType } from "@saltoapis/nebula-type";
import { DayOfWeek } from "@saltoapis/type";
import { OpeningMode } from "@saltoapis/nebula-type";
import { TimeOfDay } from "@saltoapis/type";

/**
 * The opening mode schedule object
 *
 * @generated from message salto.nebula.openingmodeschedule.v1.OpeningModeSchedule
 */
export class OpeningModeSchedule extends Message<OpeningModeSchedule> {
  /**
   *  Resource name of the opening mode schedule. It must have the format of
   * `installations/*\/opening-mode-schedules/*`. For example:
   * `installations/surelock-homes-hq/opening-mode-schedules/office-24-7`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Display name of the opening mode schedule.
   *
   * @generated from field: string display_name = 2;
   */
  displayName = "";

  /**
   * Days when the opening mode schedule is valid.
   *
   * @generated from field: repeated salto.nebula.openingmodeschedule.v1.OpeningModeSchedule.Day days = 3;
   */
  days: OpeningModeSchedule_Day[] = [];

  constructor(data?: PartialMessage<OpeningModeSchedule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.openingmodeschedule.v1.OpeningModeSchedule";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "days", kind: "message", T: OpeningModeSchedule_Day, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OpeningModeSchedule {
    return new OpeningModeSchedule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OpeningModeSchedule {
    return new OpeningModeSchedule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OpeningModeSchedule {
    return new OpeningModeSchedule().fromJsonString(jsonString, options);
  }

  static equals(a: OpeningModeSchedule | PlainMessage<OpeningModeSchedule> | undefined, b: OpeningModeSchedule | PlainMessage<OpeningModeSchedule> | undefined): boolean {
    return proto3.util.equals(OpeningModeSchedule, a, b);
  }
}

/**
 * Day of the week
 *
 * @generated from message salto.nebula.openingmodeschedule.v1.OpeningModeSchedule.Day
 */
export class OpeningModeSchedule_Day extends Message<OpeningModeSchedule_Day> {
  /**
   * Day type
   *
   * @generated from field: salto.nebula.type.DayType day_type = 1;
   */
  dayType = DayType.DAY_TYPE_UNSPECIFIED;

  /**
   * In case `day_type` is `NORMAL`, the specific day of the week.
   *
   * @generated from field: salto.type.DayOfWeek day_of_week = 2;
   */
  dayOfWeek = DayOfWeek.DAY_OF_WEEK_UNSPECIFIED;

  /**
   * The slot to be applied.
   *
   * @generated from field: repeated salto.nebula.openingmodeschedule.v1.OpeningModeSchedule.Day.Slot slots = 3;
   */
  slots: OpeningModeSchedule_Day_Slot[] = [];

  constructor(data?: PartialMessage<OpeningModeSchedule_Day>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.openingmodeschedule.v1.OpeningModeSchedule.Day";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "day_type", kind: "enum", T: proto3.getEnumType(DayType) },
    { no: 2, name: "day_of_week", kind: "enum", T: proto3.getEnumType(DayOfWeek) },
    { no: 3, name: "slots", kind: "message", T: OpeningModeSchedule_Day_Slot, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OpeningModeSchedule_Day {
    return new OpeningModeSchedule_Day().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OpeningModeSchedule_Day {
    return new OpeningModeSchedule_Day().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OpeningModeSchedule_Day {
    return new OpeningModeSchedule_Day().fromJsonString(jsonString, options);
  }

  static equals(a: OpeningModeSchedule_Day | PlainMessage<OpeningModeSchedule_Day> | undefined, b: OpeningModeSchedule_Day | PlainMessage<OpeningModeSchedule_Day> | undefined): boolean {
    return proto3.util.equals(OpeningModeSchedule_Day, a, b);
  }
}

/**
 * The time period in which the opening mode will be valid
 *
 * @generated from message salto.nebula.openingmodeschedule.v1.OpeningModeSchedule.Day.Slot
 */
export class OpeningModeSchedule_Day_Slot extends Message<OpeningModeSchedule_Day_Slot> {
  /**
   * The opening mode to be applied.
   *
   * @generated from field: salto.nebula.type.OpeningMode opening_mode = 1;
   */
  openingMode = OpeningMode.OPENING_MODE_UNSPECIFIED;

  /**
   * Start time of day when schedule starts being valid.
   *
   * @generated from field: salto.type.TimeOfDay start_time = 2;
   */
  startTime?: TimeOfDay;

  /**
   * End time of day when schedule ends being valid.
   *
   * @generated from field: salto.type.TimeOfDay end_time = 3;
   */
  endTime?: TimeOfDay;

  constructor(data?: PartialMessage<OpeningModeSchedule_Day_Slot>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.openingmodeschedule.v1.OpeningModeSchedule.Day.Slot";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "opening_mode", kind: "enum", T: proto3.getEnumType(OpeningMode) },
    { no: 2, name: "start_time", kind: "message", T: TimeOfDay },
    { no: 3, name: "end_time", kind: "message", T: TimeOfDay },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OpeningModeSchedule_Day_Slot {
    return new OpeningModeSchedule_Day_Slot().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OpeningModeSchedule_Day_Slot {
    return new OpeningModeSchedule_Day_Slot().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OpeningModeSchedule_Day_Slot {
    return new OpeningModeSchedule_Day_Slot().fromJsonString(jsonString, options);
  }

  static equals(a: OpeningModeSchedule_Day_Slot | PlainMessage<OpeningModeSchedule_Day_Slot> | undefined, b: OpeningModeSchedule_Day_Slot | PlainMessage<OpeningModeSchedule_Day_Slot> | undefined): boolean {
    return proto3.util.equals(OpeningModeSchedule_Day_Slot, a, b);
  }
}

/**
 * The request message for [`CreateOpeningModeSchedule`][salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.CreateOpeningModeSchedule]
 *
 * @generated from message salto.nebula.openingmodeschedule.v1.CreateOpeningModeScheduleRequest
 */
export class CreateOpeningModeScheduleRequest extends Message<CreateOpeningModeScheduleRequest> {
  /**
   * Resource name of the parent resource where to create the opening mode
   * schedule. For example: `installations/surelock-homes-hq`.
   *
   * @generated from field: string parent = 1;
   */
  parent = "";

  /**
   * The opening mode schedule ID to use for this opening mode schedule. In
   * case it's empty the server will autogenerate a unique identifier.
   *
   * @generated from field: string opening_mode_schedule_id = 2;
   */
  openingModeScheduleId = "";

  /**
   * The opening mode schedule resource to be created. Client must not set the
   * `OpeningModeSchedule.name` field.
   *
   * @generated from field: salto.nebula.openingmodeschedule.v1.OpeningModeSchedule opening_mode_schedule = 3;
   */
  openingModeSchedule?: OpeningModeSchedule;

  constructor(data?: PartialMessage<CreateOpeningModeScheduleRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.openingmodeschedule.v1.CreateOpeningModeScheduleRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "opening_mode_schedule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "opening_mode_schedule", kind: "message", T: OpeningModeSchedule },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOpeningModeScheduleRequest {
    return new CreateOpeningModeScheduleRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOpeningModeScheduleRequest {
    return new CreateOpeningModeScheduleRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOpeningModeScheduleRequest {
    return new CreateOpeningModeScheduleRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateOpeningModeScheduleRequest | PlainMessage<CreateOpeningModeScheduleRequest> | undefined, b: CreateOpeningModeScheduleRequest | PlainMessage<CreateOpeningModeScheduleRequest> | undefined): boolean {
    return proto3.util.equals(CreateOpeningModeScheduleRequest, a, b);
  }
}

/**
 * The request message for [`GetOpeningModeSchedule`][salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.GetOpeningModeSchedule]
 *
 * @generated from message salto.nebula.openingmodeschedule.v1.GetOpeningModeScheduleRequest
 */
export class GetOpeningModeScheduleRequest extends Message<GetOpeningModeScheduleRequest> {
  /**
   * The name of the requested opening mode schedule resource. For example:
   * `installations/surelock-homes-hq/opening-mode-schedules/office-24-7`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetOpeningModeScheduleRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.openingmodeschedule.v1.GetOpeningModeScheduleRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOpeningModeScheduleRequest {
    return new GetOpeningModeScheduleRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOpeningModeScheduleRequest {
    return new GetOpeningModeScheduleRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOpeningModeScheduleRequest {
    return new GetOpeningModeScheduleRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetOpeningModeScheduleRequest | PlainMessage<GetOpeningModeScheduleRequest> | undefined, b: GetOpeningModeScheduleRequest | PlainMessage<GetOpeningModeScheduleRequest> | undefined): boolean {
    return proto3.util.equals(GetOpeningModeScheduleRequest, a, b);
  }
}

/**
 * The request message for [`ListOpeningModeSchedules`][salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.ListOpeningModeSchedules]
 *
 * @generated from message salto.nebula.openingmodeschedule.v1.ListOpeningModeSchedulesRequest
 */
export class ListOpeningModeSchedulesRequest extends Message<ListOpeningModeSchedulesRequest> {
  /**
   * The parent resource name. For example: `installations/surelock-homes-hq`.
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
   * A filter that chooses which opening mode schedules to return.
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

  constructor(data?: PartialMessage<ListOpeningModeSchedulesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.openingmodeschedule.v1.ListOpeningModeSchedulesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOpeningModeSchedulesRequest {
    return new ListOpeningModeSchedulesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOpeningModeSchedulesRequest {
    return new ListOpeningModeSchedulesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOpeningModeSchedulesRequest {
    return new ListOpeningModeSchedulesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListOpeningModeSchedulesRequest | PlainMessage<ListOpeningModeSchedulesRequest> | undefined, b: ListOpeningModeSchedulesRequest | PlainMessage<ListOpeningModeSchedulesRequest> | undefined): boolean {
    return proto3.util.equals(ListOpeningModeSchedulesRequest, a, b);
  }
}

/**
 * The response message for [`ListOpeningModeSchedules`][salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.ListOpeningModeSchedules]
 *
 * @generated from message salto.nebula.openingmodeschedule.v1.ListOpeningModeSchedulesResponse
 */
export class ListOpeningModeSchedulesResponse extends Message<ListOpeningModeSchedulesResponse> {
  /**
   * The field name should match the noun `opening_mode_schedules` in the method name.
   * There will be a maximum number of items returned based on the `page_size`
   * field in the request.
   *
   * @generated from field: repeated salto.nebula.openingmodeschedule.v1.OpeningModeSchedule opening_mode_schedules = 1;
   */
  openingModeSchedules: OpeningModeSchedule[] = [];

  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListOpeningModeSchedulesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.openingmodeschedule.v1.ListOpeningModeSchedulesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "opening_mode_schedules", kind: "message", T: OpeningModeSchedule, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOpeningModeSchedulesResponse {
    return new ListOpeningModeSchedulesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOpeningModeSchedulesResponse {
    return new ListOpeningModeSchedulesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOpeningModeSchedulesResponse {
    return new ListOpeningModeSchedulesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListOpeningModeSchedulesResponse | PlainMessage<ListOpeningModeSchedulesResponse> | undefined, b: ListOpeningModeSchedulesResponse | PlainMessage<ListOpeningModeSchedulesResponse> | undefined): boolean {
    return proto3.util.equals(ListOpeningModeSchedulesResponse, a, b);
  }
}

/**
 * The response message for [`UpdateOpeningModeSchedule`][salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.UpdateOpeningModeSchedule]
 *
 * @generated from message salto.nebula.openingmodeschedule.v1.UpdateOpeningModeScheduleRequest
 */
export class UpdateOpeningModeScheduleRequest extends Message<UpdateOpeningModeScheduleRequest> {
  /**
   * The opening mode schedule resource which replaces the resource on the server.
   *
   * @generated from field: salto.nebula.openingmodeschedule.v1.OpeningModeSchedule opening_mode_schedule = 1;
   */
  openingModeSchedule?: OpeningModeSchedule;

  /**
   * The update mask applied to the resource.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateOpeningModeScheduleRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.openingmodeschedule.v1.UpdateOpeningModeScheduleRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "opening_mode_schedule", kind: "message", T: OpeningModeSchedule },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateOpeningModeScheduleRequest {
    return new UpdateOpeningModeScheduleRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateOpeningModeScheduleRequest {
    return new UpdateOpeningModeScheduleRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateOpeningModeScheduleRequest {
    return new UpdateOpeningModeScheduleRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateOpeningModeScheduleRequest | PlainMessage<UpdateOpeningModeScheduleRequest> | undefined, b: UpdateOpeningModeScheduleRequest | PlainMessage<UpdateOpeningModeScheduleRequest> | undefined): boolean {
    return proto3.util.equals(UpdateOpeningModeScheduleRequest, a, b);
  }
}

/**
 * The response message for [`DeleteOpeningModeSchedule`][salto.nebula.openingmodeschedule.v1.OpeningModeScheduleService.DeleteOpeningModeSchedule]
 *
 * @generated from message salto.nebula.openingmodeschedule.v1.DeleteOpeningModeScheduleRequest
 */
export class DeleteOpeningModeScheduleRequest extends Message<DeleteOpeningModeScheduleRequest> {
  /**
   * The resource name of the opening mode schedule to be deleted. For example:
   * `installations/surelock-homes-hq/opening-mode-schedules/office-24-7`.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteOpeningModeScheduleRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.nebula.openingmodeschedule.v1.DeleteOpeningModeScheduleRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteOpeningModeScheduleRequest {
    return new DeleteOpeningModeScheduleRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteOpeningModeScheduleRequest {
    return new DeleteOpeningModeScheduleRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteOpeningModeScheduleRequest {
    return new DeleteOpeningModeScheduleRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteOpeningModeScheduleRequest | PlainMessage<DeleteOpeningModeScheduleRequest> | undefined, b: DeleteOpeningModeScheduleRequest | PlainMessage<DeleteOpeningModeScheduleRequest> | undefined): boolean {
    return proto3.util.equals(DeleteOpeningModeScheduleRequest, a, b);
  }
}

