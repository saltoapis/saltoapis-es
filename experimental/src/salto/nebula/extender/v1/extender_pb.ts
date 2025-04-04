// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/extender/v1/extender.proto (package salto.nebula.extender.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema, FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { OperationSchema } from "@saltoapis/longrunning-v1";
import { file_salto_longrunning_v1_operation } from "@saltoapis/longrunning-v1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file salto/nebula/extender/v1/extender.proto.
 */
export const file_salto_nebula_extender_v1_extender: GenFile = /*@__PURE__*/
  fileDesc("CidzYWx0by9uZWJ1bGEvZXh0ZW5kZXIvdjEvZXh0ZW5kZXIucHJvdG8SGHNhbHRvLm5lYnVsYS5leHRlbmRlci52MSKMAQoIRXh0ZW5kZXISDAoEbmFtZRgBIAEoCRIUCgxkaXNwbGF5X25hbWUYAiABKAkSFgoJZGV2aWNlX2lkGAMgASgJSAGIAQESEQoHZ2F0ZXdheRgEIAEoCUgAEhIKCGV4dGVuZGVyGAUgASgJSABCDwoNcGFyZW50X2RldmljZUIMCgpfZGV2aWNlX2lkIocBChVDcmVhdGVFeHRlbmRlclJlcXVlc3QSDgoGcGFyZW50GAEgASgJEhgKC2V4dGVuZGVyX2lkGAIgASgJSACIAQESNAoIZXh0ZW5kZXIYAyABKAsyIi5zYWx0by5uZWJ1bGEuZXh0ZW5kZXIudjEuRXh0ZW5kZXJCDgoMX2V4dGVuZGVyX2lkIiIKEkdldEV4dGVuZGVyUmVxdWVzdBIMCgRuYW1lGAEgASgJIm8KFExpc3RFeHRlbmRlcnNSZXF1ZXN0Eg4KBnBhcmVudBgBIAEoCRIRCglwYWdlX3NpemUYAiABKAUSEgoKcGFnZV90b2tlbhgDIAEoCRIOCgZmaWx0ZXIYBCABKAkSEAoIb3JkZXJfYnkYBSABKAkiZwoVTGlzdEV4dGVuZGVyc1Jlc3BvbnNlEjUKCWV4dGVuZGVycxgBIAMoCzIiLnNhbHRvLm5lYnVsYS5leHRlbmRlci52MS5FeHRlbmRlchIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkifgoVVXBkYXRlRXh0ZW5kZXJSZXF1ZXN0EjQKCGV4dGVuZGVyGAEgASgLMiIuc2FsdG8ubmVidWxhLmV4dGVuZGVyLnYxLkV4dGVuZGVyEi8KC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFzayIlChVEZWxldGVFeHRlbmRlclJlcXVlc3QSDAoEbmFtZRgBIAEoCSI2ChNCaW5kRXh0ZW5kZXJSZXF1ZXN0EgwKBG5hbWUYASABKAkSEQoJZGV2aWNlX2lkGAIgASgJIhYKFEJpbmRFeHRlbmRlclJlc3BvbnNlIiUKFVVuYmluZEV4dGVuZGVyUmVxdWVzdBIMCgRuYW1lGAEgASgJIhgKFlVuYmluZEV4dGVuZGVyUmVzcG9uc2UiMQodVXBkYXRlRXh0ZW5kZXJGaXJtd2FyZVJlcXVlc3QSEAoIZXh0ZW5kZXIYASABKAkiIAoeVXBkYXRlRXh0ZW5kZXJGaXJtd2FyZVJlc3BvbnNlIjoKHlVwZGF0ZUV4dGVuZGVyRmlybXdhcmVNZXRhZGF0YRIYChBwcm9ncmVzc19wZXJjZW50GAEgASgFIiQKFFJlc2V0RXh0ZW5kZXJSZXF1ZXN0EgwKBG5hbWUYASABKAkiFwoVUmVzZXRFeHRlbmRlclJlc3BvbnNlIhcKFVJlc2V0RXh0ZW5kZXJNZXRhZGF0YSI2CiJHZW5lcmF0ZUZpcm13YXJlRG93bmxvYWRVcmlSZXF1ZXN0EhAKCGV4dGVuZGVyGAEgASgJIksKI0dlbmVyYXRlRmlybXdhcmVEb3dubG9hZFVyaVJlc3BvbnNlEhQKDGRvd25sb2FkX3VyaRgBIAEoCRIOCgZkaWdlc3QYAiABKAkiJQojR2VuZXJhdGVGaXJtd2FyZURvd25sb2FkVXJpTWV0YWRhdGEyxQgKD0V4dGVuZGVyU2VydmljZRJlCg5DcmVhdGVFeHRlbmRlchIvLnNhbHRvLm5lYnVsYS5leHRlbmRlci52MS5DcmVhdGVFeHRlbmRlclJlcXVlc3QaIi5zYWx0by5uZWJ1bGEuZXh0ZW5kZXIudjEuRXh0ZW5kZXISXwoLR2V0RXh0ZW5kZXISLC5zYWx0by5uZWJ1bGEuZXh0ZW5kZXIudjEuR2V0RXh0ZW5kZXJSZXF1ZXN0GiIuc2FsdG8ubmVidWxhLmV4dGVuZGVyLnYxLkV4dGVuZGVyEnAKDUxpc3RFeHRlbmRlcnMSLi5zYWx0by5uZWJ1bGEuZXh0ZW5kZXIudjEuTGlzdEV4dGVuZGVyc1JlcXVlc3QaLy5zYWx0by5uZWJ1bGEuZXh0ZW5kZXIudjEuTGlzdEV4dGVuZGVyc1Jlc3BvbnNlEmUKDlVwZGF0ZUV4dGVuZGVyEi8uc2FsdG8ubmVidWxhLmV4dGVuZGVyLnYxLlVwZGF0ZUV4dGVuZGVyUmVxdWVzdBoiLnNhbHRvLm5lYnVsYS5leHRlbmRlci52MS5FeHRlbmRlchJZCg5EZWxldGVFeHRlbmRlchIvLnNhbHRvLm5lYnVsYS5leHRlbmRlci52MS5EZWxldGVFeHRlbmRlclJlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHkSbQoMQmluZEV4dGVuZGVyEi0uc2FsdG8ubmVidWxhLmV4dGVuZGVyLnYxLkJpbmRFeHRlbmRlclJlcXVlc3QaLi5zYWx0by5uZWJ1bGEuZXh0ZW5kZXIudjEuQmluZEV4dGVuZGVyUmVzcG9uc2UScwoOVW5iaW5kRXh0ZW5kZXISLy5zYWx0by5uZWJ1bGEuZXh0ZW5kZXIudjEuVW5iaW5kRXh0ZW5kZXJSZXF1ZXN0GjAuc2FsdG8ubmVidWxhLmV4dGVuZGVyLnYxLlVuYmluZEV4dGVuZGVyUmVzcG9uc2UScgoWVXBkYXRlRXh0ZW5kZXJGaXJtd2FyZRI3LnNhbHRvLm5lYnVsYS5leHRlbmRlci52MS5VcGRhdGVFeHRlbmRlckZpcm13YXJlUmVxdWVzdBofLnNhbHRvLmxvbmdydW5uaW5nLnYxLk9wZXJhdGlvbhJgCg1SZXNldEV4dGVuZGVyEi4uc2FsdG8ubmVidWxhLmV4dGVuZGVyLnYxLlJlc2V0RXh0ZW5kZXJSZXF1ZXN0Gh8uc2FsdG8ubG9uZ3J1bm5pbmcudjEuT3BlcmF0aW9uEnwKG0dlbmVyYXRlRmlybXdhcmVEb3dubG9hZFVyaRI8LnNhbHRvLm5lYnVsYS5leHRlbmRlci52MS5HZW5lcmF0ZUZpcm13YXJlRG93bmxvYWRVcmlSZXF1ZXN0Gh8uc2FsdG8ubG9uZ3J1bm5pbmcudjEuT3BlcmF0aW9uQuQBCiBjb20uc2FsdG9hcGlzLm5lYnVsYS5leHRlbmRlci52MUINRXh0ZW5kZXJQcm90b1ABWkZnaXRodWIuY29tL3NhbHRvYXBpcy1pbnRlcm5hbC9zYWx0b2FwaXMtZ28vbmVidWxhL2V4dGVuZGVyL3YxO2V4dGVuZGVyqgIcU2FsdG9hcGlzLk5lYnVsYS5FeHRlbmRlci5WMcoCHFNhbHRvYXBpc1xOZWJ1bGFcRXh0ZW5kZXJcVjHiAihHUEJNZXRhZGF0YVxTYWx0b2FwaXNcTmVidWxhXEV4dGVuZGVyXFYxYgZwcm90bzM", [file_google_protobuf_empty, file_google_protobuf_field_mask, file_salto_longrunning_v1_operation]);

/**
 * The extender object
 *
 * @generated from message salto.nebula.extender.v1.Extender
 */
export type Extender = Message<"salto.nebula.extender.v1.Extender"> & {
  /**
   * Output only. Resource name of the extender. It must have the format of
   * `installations/*\/extenders/*`. For example:
   * `installations/surelock-homes-hq/extenders/elementary`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Display name of the extender.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Globally unique identifier that is used across all devices manufactured
   * by SALTO, including gateways, extenders, encoders and so on.
   *
   * @generated from field: optional string device_id = 3;
   */
  deviceId?: string;

  /**
   * Parent device name, could be a `Gateway` or an `Extender` and takes the
   * form of a relative resource name:
   * `installations/surelock-homes-hq/gateways/conan-doyle` or
   * `installations/surelock-homes-hq/extenders/elementary`.
   *
   * @generated from oneof salto.nebula.extender.v1.Extender.parent_device
   */
  parentDevice: {
    /**
     * Parent name, when extender is connected to a gateway
     *
     * @generated from field: string gateway = 4;
     */
    value: string;
    case: "gateway";
  } | {
    /**
     * Parent name, when extender is connected to an extender
     *
     * @generated from field: string extender = 5;
     */
    value: string;
    case: "extender";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message salto.nebula.extender.v1.Extender.
 * Use `create(ExtenderSchema)` to create a new message.
 */
export const ExtenderSchema: GenMessage<Extender> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 0);

/**
 * The request message for [CreateExtender][salto.nebula.extender.v1.ExtenderService.CreateExtender]
 *
 * @generated from message salto.nebula.extender.v1.CreateExtenderRequest
 */
export type CreateExtenderRequest = Message<"salto.nebula.extender.v1.CreateExtenderRequest"> & {
  /**
   * Resource name of the parent resource where to create the extender. For
   * example, `installations/surelock-homes-hq`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The extender ID to use for this extender. In case it's empty
   * the server will autogenerate a unique identifier.
   *
   * @generated from field: optional string extender_id = 2;
   */
  extenderId?: string;

  /**
   * The extender resource to be created. Client must not set the
   * `Extender.name` field.
   *
   * @generated from field: salto.nebula.extender.v1.Extender extender = 3;
   */
  extender?: Extender;
};

/**
 * Describes the message salto.nebula.extender.v1.CreateExtenderRequest.
 * Use `create(CreateExtenderRequestSchema)` to create a new message.
 */
export const CreateExtenderRequestSchema: GenMessage<CreateExtenderRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 1);

/**
 * The request message for [GetExtender][salto.nebula.extender.v1.ExtenderService.GetExtender]
 *
 * @generated from message salto.nebula.extender.v1.GetExtenderRequest
 */
export type GetExtenderRequest = Message<"salto.nebula.extender.v1.GetExtenderRequest"> & {
  /**
   * The name of the requested extender resource. For example:
   * `installations/surelock-homes-hq/extenders/elementary`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.extender.v1.GetExtenderRequest.
 * Use `create(GetExtenderRequestSchema)` to create a new message.
 */
export const GetExtenderRequestSchema: GenMessage<GetExtenderRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 2);

/**
 * The request message for [ListExtenders][salto.nebula.extender.v1.ExtenderService.ListExtenders]
 *
 * @generated from message salto.nebula.extender.v1.ListExtendersRequest
 */
export type ListExtendersRequest = Message<"salto.nebula.extender.v1.ListExtendersRequest"> & {
  /**
   * The parent resource name. For example: `installations/surelock-homes-hq`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The maximum number of items to return.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * The `next_page_token` value returned from a previous `List` request, if
   * any.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * A filter that chooses which extenders to return.
   *
   * @generated from field: string filter = 4;
   */
  filter: string;

  /**
   * How the results should be sorted.
   *
   * @generated from field: string order_by = 5;
   */
  orderBy: string;
};

/**
 * Describes the message salto.nebula.extender.v1.ListExtendersRequest.
 * Use `create(ListExtendersRequestSchema)` to create a new message.
 */
export const ListExtendersRequestSchema: GenMessage<ListExtendersRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 3);

/**
 * The response message for [ListExtenders][salto.nebula.extender.v1.ExtenderService.ListExtenders]
 *
 * @generated from message salto.nebula.extender.v1.ListExtendersResponse
 */
export type ListExtendersResponse = Message<"salto.nebula.extender.v1.ListExtendersResponse"> & {
  /**
   * The field name should match the noun `extenders` in the method name.
   * There will be a maximum number of items returned based on the `page_size`
   * field in the request.
   *
   * @generated from field: repeated salto.nebula.extender.v1.Extender extenders = 1;
   */
  extenders: Extender[];

  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message salto.nebula.extender.v1.ListExtendersResponse.
 * Use `create(ListExtendersResponseSchema)` to create a new message.
 */
export const ListExtendersResponseSchema: GenMessage<ListExtendersResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 4);

/**
 * The response message for [UpdateExtender][salto.nebula.extender.v1.ExtenderService.UpdateExtender]
 *
 * @generated from message salto.nebula.extender.v1.UpdateExtenderRequest
 */
export type UpdateExtenderRequest = Message<"salto.nebula.extender.v1.UpdateExtenderRequest"> & {
  /**
   * The extender resource which replaces the resource on the server.
   *
   * @generated from field: salto.nebula.extender.v1.Extender extender = 1;
   */
  extender?: Extender;

  /**
   * The update mask applied to the resource.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message salto.nebula.extender.v1.UpdateExtenderRequest.
 * Use `create(UpdateExtenderRequestSchema)` to create a new message.
 */
export const UpdateExtenderRequestSchema: GenMessage<UpdateExtenderRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 5);

/**
 * The response message for [DeleteExtender][salto.nebula.extender.v1.ExtenderService.DeleteExtender]
 *
 * @generated from message salto.nebula.extender.v1.DeleteExtenderRequest
 */
export type DeleteExtenderRequest = Message<"salto.nebula.extender.v1.DeleteExtenderRequest"> & {
  /**
   * The resource name of the extender to be deleted. For example:
   * `installations/surelock-homes-hq/extenders/elementary`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.extender.v1.DeleteExtenderRequest.
 * Use `create(DeleteExtenderRequestSchema)` to create a new message.
 */
export const DeleteExtenderRequestSchema: GenMessage<DeleteExtenderRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 6);

/**
 * The request message for [`BindExtender`][salto.nebula.extender.v1.ExtenderService.BindExtender]
 *
 * @generated from message salto.nebula.extender.v1.BindExtenderRequest
 */
export type BindExtenderRequest = Message<"salto.nebula.extender.v1.BindExtenderRequest"> & {
  /**
   * The resource name of the extender to be bound. For example:
   * `installations/surelock-homes-hq/extenders/baker-street-entrance`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Globally unique identifier that is used across all devices manufactured
   * by SALTO, including gateways, extenders, electronic locks and so on.
   *
   * @generated from field: string device_id = 2;
   */
  deviceId: string;
};

/**
 * Describes the message salto.nebula.extender.v1.BindExtenderRequest.
 * Use `create(BindExtenderRequestSchema)` to create a new message.
 */
export const BindExtenderRequestSchema: GenMessage<BindExtenderRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 7);

/**
 * The empty response message for [`BindExtender`][salto.nebula.extender.v1.ExtenderService.BindExtender]
 *
 * @generated from message salto.nebula.extender.v1.BindExtenderResponse
 */
export type BindExtenderResponse = Message<"salto.nebula.extender.v1.BindExtenderResponse"> & {
};

/**
 * Describes the message salto.nebula.extender.v1.BindExtenderResponse.
 * Use `create(BindExtenderResponseSchema)` to create a new message.
 */
export const BindExtenderResponseSchema: GenMessage<BindExtenderResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 8);

/**
 * The request message for [`UnbindExtender`][salto.nebula.extender.v1.ExtenderService.UnbindExtender]
 *
 * @generated from message salto.nebula.extender.v1.UnbindExtenderRequest
 */
export type UnbindExtenderRequest = Message<"salto.nebula.extender.v1.UnbindExtenderRequest"> & {
  /**
   * The resource name of the gateway to be unbound. For example:
   * `installations/surelock-homes-hq/extenders/baker-street-entrance`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.extender.v1.UnbindExtenderRequest.
 * Use `create(UnbindExtenderRequestSchema)` to create a new message.
 */
export const UnbindExtenderRequestSchema: GenMessage<UnbindExtenderRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 9);

/**
 * The empty response message for [`UnbindExtender`][salto.nebula.extender.v1.ExtenderService.UnbindExtender]
 *
 * @generated from message salto.nebula.extender.v1.UnbindExtenderResponse
 */
export type UnbindExtenderResponse = Message<"salto.nebula.extender.v1.UnbindExtenderResponse"> & {
};

/**
 * Describes the message salto.nebula.extender.v1.UnbindExtenderResponse.
 * Use `create(UnbindExtenderResponseSchema)` to create a new message.
 */
export const UnbindExtenderResponseSchema: GenMessage<UnbindExtenderResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 10);

/**
 * The request message for [`UpdateExtenderFirmware`][salto.nebula.extender.v1.ExtenderService.UpdateExtenderFirmware]
 *
 * @generated from message salto.nebula.extender.v1.UpdateExtenderFirmwareRequest
 */
export type UpdateExtenderFirmwareRequest = Message<"salto.nebula.extender.v1.UpdateExtenderFirmwareRequest"> & {
  /**
   * The resource name of the extender whose firmware will be updated, for
   * example:
   * `installations/surelock-homes-hq/extenders/elementary`.
   *
   * @generated from field: string extender = 1;
   */
  extender: string;
};

/**
 * Describes the message salto.nebula.extender.v1.UpdateExtenderFirmwareRequest.
 * Use `create(UpdateExtenderFirmwareRequestSchema)` to create a new message.
 */
export const UpdateExtenderFirmwareRequestSchema: GenMessage<UpdateExtenderFirmwareRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 11);

/**
 * The response message for [`UpdateExtenderFirmware`][salto.nebula.extender.v1.ExtenderService.UpdateExtenderFirmware]
 *
 * @generated from message salto.nebula.extender.v1.UpdateExtenderFirmwareResponse
 */
export type UpdateExtenderFirmwareResponse = Message<"salto.nebula.extender.v1.UpdateExtenderFirmwareResponse"> & {
};

/**
 * Describes the message salto.nebula.extender.v1.UpdateExtenderFirmwareResponse.
 * Use `create(UpdateExtenderFirmwareResponseSchema)` to create a new message.
 */
export const UpdateExtenderFirmwareResponseSchema: GenMessage<UpdateExtenderFirmwareResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 12);

/**
 * The metadata message for [`UpdateExtenderFirmware`][salto.nebula.extender.v1.ExtenderService.UpdateExtenderFirmware]
 *
 * @generated from message salto.nebula.extender.v1.UpdateExtenderFirmwareMetadata
 */
export type UpdateExtenderFirmwareMetadata = Message<"salto.nebula.extender.v1.UpdateExtenderFirmwareMetadata"> & {
  /**
   * Progress of operation. Range: [0, 100].
   *
   * @generated from field: int32 progress_percent = 1;
   */
  progressPercent: number;
};

/**
 * Describes the message salto.nebula.extender.v1.UpdateExtenderFirmwareMetadata.
 * Use `create(UpdateExtenderFirmwareMetadataSchema)` to create a new message.
 */
export const UpdateExtenderFirmwareMetadataSchema: GenMessage<UpdateExtenderFirmwareMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 13);

/**
 * The request message for [`ResetExtender`][salto.nebula.extender.v1.ExtenderService.ResetExtender]
 *
 * @generated from message salto.nebula.extender.v1.ResetExtenderRequest
 */
export type ResetExtenderRequest = Message<"salto.nebula.extender.v1.ResetExtenderRequest"> & {
  /**
   * The resource name of the extender to be reset. For example:
   * `installations/surelock-homes-hq/extenders/baker-street-entrance`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.extender.v1.ResetExtenderRequest.
 * Use `create(ResetExtenderRequestSchema)` to create a new message.
 */
export const ResetExtenderRequestSchema: GenMessage<ResetExtenderRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 14);

/**
 * The empty response message for [`ResetExtender`][salto.nebula.extender.v1.ExtenderService.ResetExtender]
 *
 * @generated from message salto.nebula.extender.v1.ResetExtenderResponse
 */
export type ResetExtenderResponse = Message<"salto.nebula.extender.v1.ResetExtenderResponse"> & {
};

/**
 * Describes the message salto.nebula.extender.v1.ResetExtenderResponse.
 * Use `create(ResetExtenderResponseSchema)` to create a new message.
 */
export const ResetExtenderResponseSchema: GenMessage<ResetExtenderResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 15);

/**
 * The metadata message for [`ResetExtender`][salto.nebula.extender.v1.ExtenderService.ResetExtender]
 *
 * @generated from message salto.nebula.extender.v1.ResetExtenderMetadata
 */
export type ResetExtenderMetadata = Message<"salto.nebula.extender.v1.ResetExtenderMetadata"> & {
};

/**
 * Describes the message salto.nebula.extender.v1.ResetExtenderMetadata.
 * Use `create(ResetExtenderMetadataSchema)` to create a new message.
 */
export const ResetExtenderMetadataSchema: GenMessage<ResetExtenderMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 16);

/**
 * The request message for [`GenerateFirmwareDownloadUri`][salto.nebula.extender.v1.ExtenderService.GenerateFirmwareDownloadUri]
 *
 * @generated from message salto.nebula.extender.v1.GenerateFirmwareDownloadUriRequest
 */
export type GenerateFirmwareDownloadUriRequest = Message<"salto.nebula.extender.v1.GenerateFirmwareDownloadUriRequest"> & {
  /**
   * The resource name of the extender to get the firmware download URI.
   * For example: `installations/surelock-homes-hq/extenders/baker-street-entrance`.
   *
   * @generated from field: string extender = 1;
   */
  extender: string;
};

/**
 * Describes the message salto.nebula.extender.v1.GenerateFirmwareDownloadUriRequest.
 * Use `create(GenerateFirmwareDownloadUriRequestSchema)` to create a new message.
 */
export const GenerateFirmwareDownloadUriRequestSchema: GenMessage<GenerateFirmwareDownloadUriRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 17);

/**
 * The response message for [`GenerateFirmwareDownloadUri`][salto.nebula.extender.v1.ExtenderService.GenerateFirmwareDownloadUri]
 *
 * @generated from message salto.nebula.extender.v1.GenerateFirmwareDownloadUriResponse
 */
export type GenerateFirmwareDownloadUriResponse = Message<"salto.nebula.extender.v1.GenerateFirmwareDownloadUriResponse"> & {
  /**
   * The URI to download the firmware bundle. The URI will be valid for 15
   * minutes.
   *
   * @generated from field: string download_uri = 1;
   */
  downloadUri: string;

  /**
   * Digest of the file to be download. This can be used to cache the file and
   * avoid downloading it multiple times.
   * The digest has the following format: `<algorithm>:<digest>`.
   * For example: `sha256:8ff2483f2fbaa6c8dfd4e3556dbde298eb5e342b5e46f84eabdccc8e1cbe2d5a`.
   *
   * @generated from field: string digest = 2;
   */
  digest: string;
};

/**
 * Describes the message salto.nebula.extender.v1.GenerateFirmwareDownloadUriResponse.
 * Use `create(GenerateFirmwareDownloadUriResponseSchema)` to create a new message.
 */
export const GenerateFirmwareDownloadUriResponseSchema: GenMessage<GenerateFirmwareDownloadUriResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 18);

/**
 * The metadata message for [`GenerateFirmwareDownloadUri`][salto.nebula.extender.v1.ExtenderService.GenerateFirmwareDownloadUri]
 *
 * @generated from message salto.nebula.extender.v1.GenerateFirmwareDownloadUriMetadata
 */
export type GenerateFirmwareDownloadUriMetadata = Message<"salto.nebula.extender.v1.GenerateFirmwareDownloadUriMetadata"> & {
};

/**
 * Describes the message salto.nebula.extender.v1.GenerateFirmwareDownloadUriMetadata.
 * Use `create(GenerateFirmwareDownloadUriMetadataSchema)` to create a new message.
 */
export const GenerateFirmwareDownloadUriMetadataSchema: GenMessage<GenerateFirmwareDownloadUriMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_extender_v1_extender, 19);

/**
 * An extender allows the distance between the a gateway and an electronic lock
 * to be extended. It forwards signals between an access point (lock) and a
 * gateway. This service is responsible for managing extender resources.
 *
 * @generated from service salto.nebula.extender.v1.ExtenderService
 */
export const ExtenderService: GenService<{
  /**
   * Create an extender
   *
   * Creates a new extender
   *
   * @generated from rpc salto.nebula.extender.v1.ExtenderService.CreateExtender
   */
  createExtender: {
    methodKind: "unary";
    input: typeof CreateExtenderRequestSchema;
    output: typeof ExtenderSchema;
  },
  /**
   * Get an extender
   *
   * Gets an existing extender.
   *
   * @generated from rpc salto.nebula.extender.v1.ExtenderService.GetExtender
   */
  getExtender: {
    methodKind: "unary";
    input: typeof GetExtenderRequestSchema;
    output: typeof ExtenderSchema;
  },
  /**
   * List extenders
   *
   * Returns a list of extenders that have been previously created.
   *
   * @generated from rpc salto.nebula.extender.v1.ExtenderService.ListExtenders
   */
  listExtenders: {
    methodKind: "unary";
    input: typeof ListExtendersRequestSchema;
    output: typeof ListExtendersResponseSchema;
  },
  /**
   * Update an extender
   *
   * Updates an existing extender.
   *
   * @generated from rpc salto.nebula.extender.v1.ExtenderService.UpdateExtender
   */
  updateExtender: {
    methodKind: "unary";
    input: typeof UpdateExtenderRequestSchema;
    output: typeof ExtenderSchema;
  },
  /**
   * Delete an extender
   *
   * Permanently deletes an extender. This cannot be undone.
   *
   * @generated from rpc salto.nebula.extender.v1.ExtenderService.DeleteExtender
   */
  deleteExtender: {
    methodKind: "unary";
    input: typeof DeleteExtenderRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Bind an extender
   *
   * Binds an extender. Binding an extender assigns a device
   * identifier to the extender.
   *
   * @generated from rpc salto.nebula.extender.v1.ExtenderService.BindExtender
   */
  bindExtender: {
    methodKind: "unary";
    input: typeof BindExtenderRequestSchema;
    output: typeof BindExtenderResponseSchema;
  },
  /**
   * Unbind an extender
   *
   * Unbinds an extender. Unbinding an extender removes the
   * device identifier from the extender.
   *
   * @generated from rpc salto.nebula.extender.v1.ExtenderService.UnbindExtender
   */
  unbindExtender: {
    methodKind: "unary";
    input: typeof UnbindExtenderRequestSchema;
    output: typeof UnbindExtenderResponseSchema;
  },
  /**
   * Update extender firmware
   *
   * Updates an extender's firmware. SALTO provides firmware updates when
   * new functionality is available or when we fix a bug.
   *
   * @generated from rpc salto.nebula.extender.v1.ExtenderService.UpdateExtenderFirmware
   */
  updateExtenderFirmware: {
    methodKind: "unary";
    input: typeof UpdateExtenderFirmwareRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Reset an extender
   *
   * Resetting a device such as an extender means returning it to its
   * factory settings. Resetting is the process of removing the identity as
   * well as all the associated information of an already configured device.
   *
   * @generated from rpc salto.nebula.extender.v1.ExtenderService.ResetExtender
   */
  resetExtender: {
    methodKind: "unary";
    input: typeof ResetExtenderRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Generate extender firmware download URI
   *
   * Provides the download URI for the latest firmware bundle for the
   * extender. The returned URI can be used to bring the extender firmwares up
   * to latest.
   *
   * @generated from rpc salto.nebula.extender.v1.ExtenderService.GenerateFirmwareDownloadUri
   */
  generateFirmwareDownloadUri: {
    methodKind: "unary";
    input: typeof GenerateFirmwareDownloadUriRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_salto_nebula_extender_v1_extender, 0);

