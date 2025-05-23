// @generated by protoc-gen-es v1.10.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/type/time_of_day.proto (package salto.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Represents a time of day. The date and time zone are either not significant
 * or are specified elsewhere. An API may chose to allow leap seconds. Related
 * types are [`salto.type.Date`][salto.type.Date] and
 * `google.protobuf.Timestamp`.
 *
 * @generated from message salto.type.TimeOfDay
 */
export class TimeOfDay extends Message<TimeOfDay> {
  /**
   * Hours of day in 24 hour format. Should be from 0 to 23.
   *
   * @generated from field: int32 hours = 1;
   */
  hours = 0;

  /**
   * Minutes of hour of day. Must be from 0 to 59.
   *
   * @generated from field: int32 minutes = 2;
   */
  minutes = 0;

  /**
   * Seconds of minutes of the time. Must be from 0 to 59.
   *
   * @generated from field: int32 seconds = 3;
   */
  seconds = 0;

  /**
   * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
   *
   * @generated from field: int32 nanos = 4;
   */
  nanos = 0;

  constructor(data?: PartialMessage<TimeOfDay>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.type.TimeOfDay";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "hours", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "minutes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "seconds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "nanos", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimeOfDay {
    return new TimeOfDay().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimeOfDay {
    return new TimeOfDay().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimeOfDay {
    return new TimeOfDay().fromJsonString(jsonString, options);
  }

  static equals(a: TimeOfDay | PlainMessage<TimeOfDay> | undefined, b: TimeOfDay | PlainMessage<TimeOfDay> | undefined): boolean {
    return proto3.util.equals(TimeOfDay, a, b);
  }
}

