// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/controller/v1/controller.proto (package salto.nebula.controller.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema, FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { OperationSchema } from "@saltoapis/longrunning-v1";
import { file_salto_longrunning_v1_operation } from "@saltoapis/longrunning-v1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file salto/nebula/controller/v1/controller.proto.
 */
export const file_salto_nebula_controller_v1_controller: GenFile = /*@__PURE__*/
  fileDesc("CitzYWx0by9uZWJ1bGEvY29udHJvbGxlci92MS9jb250cm9sbGVyLnByb3RvEhpzYWx0by5uZWJ1bGEuY29udHJvbGxlci52MSKnAgoKQ29udHJvbGxlchIMCgRuYW1lGAEgASgJEhQKDGRpc3BsYXlfbmFtZRgCIAEoCRIWCglkZXZpY2VfaWQYAyABKAlIAYgBARIRCgdnYXRld2F5GAQgASgJSAASEgoIZXh0ZW5kZXIYBSABKAlIABIVCg1hY2Nlc3NfcG9pbnRzGAYgAygJEhMKC2luaXRpYWxpemVkGAcgASgIEhAKCG91dGRhdGVkGAggASgIEhYKCWNvbm5lY3RlZBgJIAEoCEgCiAEBEjMKD2xhc3RfZXZlbnRfdGltZRgKIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCDwoNcGFyZW50X2RldmljZUIMCgpfZGV2aWNlX2lkQgwKCl9jb25uZWN0ZWQikwEKF0NyZWF0ZUNvbnRyb2xsZXJSZXF1ZXN0Eg4KBnBhcmVudBgBIAEoCRIaCg1jb250cm9sbGVyX2lkGAIgASgJSACIAQESOgoKY29udHJvbGxlchgDIAEoCzImLnNhbHRvLm5lYnVsYS5jb250cm9sbGVyLnYxLkNvbnRyb2xsZXJCEAoOX2NvbnRyb2xsZXJfaWQiJAoUR2V0Q29udHJvbGxlclJlcXVlc3QSDAoEbmFtZRgBIAEoCSJxChZMaXN0Q29udHJvbGxlcnNSZXF1ZXN0Eg4KBnBhcmVudBgBIAEoCRIRCglwYWdlX3NpemUYAiABKAUSEgoKcGFnZV90b2tlbhgDIAEoCRIOCgZmaWx0ZXIYBCABKAkSEAoIb3JkZXJfYnkYBSABKAkibwoXTGlzdENvbnRyb2xsZXJzUmVzcG9uc2USOwoLY29udHJvbGxlcnMYASADKAsyJi5zYWx0by5uZWJ1bGEuY29udHJvbGxlci52MS5Db250cm9sbGVyEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCSKGAQoXVXBkYXRlQ29udHJvbGxlclJlcXVlc3QSOgoKY29udHJvbGxlchgBIAEoCzImLnNhbHRvLm5lYnVsYS5jb250cm9sbGVyLnYxLkNvbnRyb2xsZXISLwoLdXBkYXRlX21hc2sYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrIicKF0RlbGV0ZUNvbnRyb2xsZXJSZXF1ZXN0EgwKBG5hbWUYASABKAkiOAoVQmluZENvbnRyb2xsZXJSZXF1ZXN0EgwKBG5hbWUYASABKAkSEQoJZGV2aWNlX2lkGAIgASgJIhgKFkJpbmRDb250cm9sbGVyUmVzcG9uc2UiNgoXVW5iaW5kQ29udHJvbGxlclJlcXVlc3QSDAoEbmFtZRgBIAEoCRINCgVmb3JjZRgCIAEoCCIaChhVbmJpbmRDb250cm9sbGVyUmVzcG9uc2UiKwobSW5pdGlhbGl6ZUNvbnRyb2xsZXJSZXF1ZXN0EgwKBG5hbWUYASABKAkiHgocSW5pdGlhbGl6ZUNvbnRyb2xsZXJSZXNwb25zZSI4ChxJbml0aWFsaXplQ29udHJvbGxlck1ldGFkYXRhEhgKEHByb2dyZXNzX3BlcmNlbnQYASABKAUiKgoaQ29uZmlndXJlQ29udHJvbGxlclJlcXVlc3QSDAoEbmFtZRgBIAEoCSIdChtDb25maWd1cmVDb250cm9sbGVyUmVzcG9uc2UiNwobQ29uZmlndXJlQ29udHJvbGxlck1ldGFkYXRhEhgKEHByb2dyZXNzX3BlcmNlbnQYASABKAUiJgoWUmVzZXRDb250cm9sbGVyUmVxdWVzdBIMCgRuYW1lGAEgASgJIhkKF1Jlc2V0Q29udHJvbGxlclJlc3BvbnNlIhkKF1Jlc2V0Q29udHJvbGxlck1ldGFkYXRhIjUKH1VwZGF0ZUNvbnRyb2xsZXJGaXJtd2FyZVJlcXVlc3QSEgoKY29udHJvbGxlchgBIAEoCSIiCiBVcGRhdGVDb250cm9sbGVyRmlybXdhcmVSZXNwb25zZSI8CiBVcGRhdGVDb250cm9sbGVyRmlybXdhcmVNZXRhZGF0YRIYChBwcm9ncmVzc19wZXJjZW50GAEgASgFIjcKIUdlbmVyYXRlQXV0aG9yaXphdGlvblRva2VuUmVxdWVzdBISCgpjb250cm9sbGVyGAEgASgJIkEKIkdlbmVyYXRlQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2USGwoTYXV0aG9yaXphdGlvbl90b2tlbhgBIAEoDCI4CiJHZW5lcmF0ZUZpcm13YXJlRG93bmxvYWRVcmlSZXF1ZXN0EhIKCmNvbnRyb2xsZXIYASABKAkiSwojR2VuZXJhdGVGaXJtd2FyZURvd25sb2FkVXJpUmVzcG9uc2USFAoMZG93bmxvYWRfdXJpGAEgASgJEg4KBmRpZ2VzdBgCIAEoCSIlCiNHZW5lcmF0ZUZpcm13YXJlRG93bmxvYWRVcmlNZXRhZGF0YTKXDAoRQ29udHJvbGxlclNlcnZpY2USbwoQQ3JlYXRlQ29udHJvbGxlchIzLnNhbHRvLm5lYnVsYS5jb250cm9sbGVyLnYxLkNyZWF0ZUNvbnRyb2xsZXJSZXF1ZXN0GiYuc2FsdG8ubmVidWxhLmNvbnRyb2xsZXIudjEuQ29udHJvbGxlchJpCg1HZXRDb250cm9sbGVyEjAuc2FsdG8ubmVidWxhLmNvbnRyb2xsZXIudjEuR2V0Q29udHJvbGxlclJlcXVlc3QaJi5zYWx0by5uZWJ1bGEuY29udHJvbGxlci52MS5Db250cm9sbGVyEnoKD0xpc3RDb250cm9sbGVycxIyLnNhbHRvLm5lYnVsYS5jb250cm9sbGVyLnYxLkxpc3RDb250cm9sbGVyc1JlcXVlc3QaMy5zYWx0by5uZWJ1bGEuY29udHJvbGxlci52MS5MaXN0Q29udHJvbGxlcnNSZXNwb25zZRJvChBVcGRhdGVDb250cm9sbGVyEjMuc2FsdG8ubmVidWxhLmNvbnRyb2xsZXIudjEuVXBkYXRlQ29udHJvbGxlclJlcXVlc3QaJi5zYWx0by5uZWJ1bGEuY29udHJvbGxlci52MS5Db250cm9sbGVyEl8KEERlbGV0ZUNvbnRyb2xsZXISMy5zYWx0by5uZWJ1bGEuY29udHJvbGxlci52MS5EZWxldGVDb250cm9sbGVyUmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRJ3Cg5CaW5kQ29udHJvbGxlchIxLnNhbHRvLm5lYnVsYS5jb250cm9sbGVyLnYxLkJpbmRDb250cm9sbGVyUmVxdWVzdBoyLnNhbHRvLm5lYnVsYS5jb250cm9sbGVyLnYxLkJpbmRDb250cm9sbGVyUmVzcG9uc2USfQoQVW5iaW5kQ29udHJvbGxlchIzLnNhbHRvLm5lYnVsYS5jb250cm9sbGVyLnYxLlVuYmluZENvbnRyb2xsZXJSZXF1ZXN0GjQuc2FsdG8ubmVidWxhLmNvbnRyb2xsZXIudjEuVW5iaW5kQ29udHJvbGxlclJlc3BvbnNlEnAKFEluaXRpYWxpemVDb250cm9sbGVyEjcuc2FsdG8ubmVidWxhLmNvbnRyb2xsZXIudjEuSW5pdGlhbGl6ZUNvbnRyb2xsZXJSZXF1ZXN0Gh8uc2FsdG8ubG9uZ3J1bm5pbmcudjEuT3BlcmF0aW9uEm4KE0NvbmZpZ3VyZUNvbnRyb2xsZXISNi5zYWx0by5uZWJ1bGEuY29udHJvbGxlci52MS5Db25maWd1cmVDb250cm9sbGVyUmVxdWVzdBofLnNhbHRvLmxvbmdydW5uaW5nLnYxLk9wZXJhdGlvbhJmCg9SZXNldENvbnRyb2xsZXISMi5zYWx0by5uZWJ1bGEuY29udHJvbGxlci52MS5SZXNldENvbnRyb2xsZXJSZXF1ZXN0Gh8uc2FsdG8ubG9uZ3J1bm5pbmcudjEuT3BlcmF0aW9uEngKGFVwZGF0ZUNvbnRyb2xsZXJGaXJtd2FyZRI7LnNhbHRvLm5lYnVsYS5jb250cm9sbGVyLnYxLlVwZGF0ZUNvbnRyb2xsZXJGaXJtd2FyZVJlcXVlc3QaHy5zYWx0by5sb25ncnVubmluZy52MS5PcGVyYXRpb24SmwEKGkdlbmVyYXRlQXV0aG9yaXphdGlvblRva2VuEj0uc2FsdG8ubmVidWxhLmNvbnRyb2xsZXIudjEuR2VuZXJhdGVBdXRob3JpemF0aW9uVG9rZW5SZXF1ZXN0Gj4uc2FsdG8ubmVidWxhLmNvbnRyb2xsZXIudjEuR2VuZXJhdGVBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZRJ+ChtHZW5lcmF0ZUZpcm13YXJlRG93bmxvYWRVcmkSPi5zYWx0by5uZWJ1bGEuY29udHJvbGxlci52MS5HZW5lcmF0ZUZpcm13YXJlRG93bmxvYWRVcmlSZXF1ZXN0Gh8uc2FsdG8ubG9uZ3J1bm5pbmcudjEuT3BlcmF0aW9uQvIBCiJjb20uc2FsdG9hcGlzLm5lYnVsYS5jb250cm9sbGVyLnYxQg9Db250cm9sbGVyUHJvdG9QAVpKZ2l0aHViLmNvbS9zYWx0b2FwaXMtaW50ZXJuYWwvc2FsdG9hcGlzLWdvL25lYnVsYS9jb250cm9sbGVyL3YxO2NvbnRyb2xsZXKqAh5TYWx0b2FwaXMuTmVidWxhLkNvbnRyb2xsZXIuVjHKAh5TYWx0b2FwaXNcTmVidWxhXENvbnRyb2xsZXJcVjHiAipHUEJNZXRhZGF0YVxTYWx0b2FwaXNcTmVidWxhXENvbnRyb2xsZXJcVjFiBnByb3RvMw", [file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_timestamp, file_salto_longrunning_v1_operation]);

/**
 * The controller object
 *
 * @generated from message salto.nebula.controller.v1.Controller
 */
export type Controller = Message<"salto.nebula.controller.v1.Controller"> & {
  /**
   * Output only. Resource name of the controller. It must have the format of
   * `installations/*\/controllers/*`. For example:
   * `installations/surelock-homes-hq/controller/dancing-men`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Display name of the controller.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Globally unique identifier that is used across all devices manufactured
   * by SALTO, including gateways, extenders, electronic locks and so on.
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
   * @generated from oneof salto.nebula.controller.v1.Controller.parent_device
   */
  parentDevice: {
    /**
     * Parent name, when controller is connected to a gateway
     *
     * @generated from field: string gateway = 4;
     */
    value: string;
    case: "gateway";
  } | {
    /**
     * Parent name, when controller is connected to an extender
     *
     * @generated from field: string extender = 5;
     */
    value: string;
    case: "extender";
  } | { case: undefined; value?: undefined };

  /**
   * The access points that the controller gives coverage to.
   *
   * @generated from field: repeated string access_points = 6;
   */
  accessPoints: string[];

  /**
   * Indicates whether this controller has been initialized or not. This
   * field cannot be modified using a standard
   * [`UpdateController`][salto.nebula.controller.v1.ControllerService.UpdateController]
   * operation. To change the value of this field, you must call
   * [`InitializeController`][salto.nebula.controller.v1.ControllerService.InitializeController].
   *
   * If the value is `false` also applies to the case where the
   * initialization process has been initiated but where it has not finished.
   *
   * @generated from field: bool initialized = 7;
   */
  initialized: boolean;

  /**
   * Indicates whether this controller has pending updates or not. This
   * could be because there was a pending configuration or a firmware update
   * and is conditionally set based on the current installation settings.
   *
   * @generated from field: bool outdated = 8;
   */
  outdated: boolean;

  /**
   * Indicates whether this controller is connected or not. It's
   * considered connected if there has been at least one communication with it
   * within the last 10 minutes. The property is left unset if it is an
   * offline controller.
   *
   * @generated from field: optional bool connected = 9;
   */
  connected?: boolean;

  /**
   * The last time an event was received.
   *
   * @generated from field: google.protobuf.Timestamp last_event_time = 10;
   */
  lastEventTime?: Timestamp;
};

/**
 * Describes the message salto.nebula.controller.v1.Controller.
 * Use `create(ControllerSchema)` to create a new message.
 */
export const ControllerSchema: GenMessage<Controller> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 0);

/**
 * The request message for [CreateController][salto.nebula.controller.v1.ControllerService.CreateController]
 *
 * @generated from message salto.nebula.controller.v1.CreateControllerRequest
 */
export type CreateControllerRequest = Message<"salto.nebula.controller.v1.CreateControllerRequest"> & {
  /**
   * Resource name of the parent resource where to create the controller. For
   * example, `installations/surelock-homes-hq`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The controller ID to use for this controller. In case it's empty the
   * server will autogenerate a unique identifier.
   *
   * @generated from field: optional string controller_id = 2;
   */
  controllerId?: string;

  /**
   * The controller resource to be created. Client must not set the
   * `Controller.name` field.
   *
   * @generated from field: salto.nebula.controller.v1.Controller controller = 3;
   */
  controller?: Controller;
};

/**
 * Describes the message salto.nebula.controller.v1.CreateControllerRequest.
 * Use `create(CreateControllerRequestSchema)` to create a new message.
 */
export const CreateControllerRequestSchema: GenMessage<CreateControllerRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 1);

/**
 * The request message for [GetController][salto.nebula.controller.v1.ControllerService.GetController]
 *
 * @generated from message salto.nebula.controller.v1.GetControllerRequest
 */
export type GetControllerRequest = Message<"salto.nebula.controller.v1.GetControllerRequest"> & {
  /**
   * The name of the requested controller resource. For example:
   * `installations/surelock-homes-hq/controllers/dancing-men`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.controller.v1.GetControllerRequest.
 * Use `create(GetControllerRequestSchema)` to create a new message.
 */
export const GetControllerRequestSchema: GenMessage<GetControllerRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 2);

/**
 * The request message for [ListControllers][salto.nebula.controller.v1.ControllerService.ListControllers]
 *
 * @generated from message salto.nebula.controller.v1.ListControllersRequest
 */
export type ListControllersRequest = Message<"salto.nebula.controller.v1.ListControllersRequest"> & {
  /**
   * The parent resource name. For example, `installations/surelock-homes-hq`.
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
   * A filter that chooses which controllers to return.
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
 * Describes the message salto.nebula.controller.v1.ListControllersRequest.
 * Use `create(ListControllersRequestSchema)` to create a new message.
 */
export const ListControllersRequestSchema: GenMessage<ListControllersRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 3);

/**
 * The response message for [ListControllers][salto.nebula.controllers.v1.ControllerService.ListControllers]
 *
 * @generated from message salto.nebula.controller.v1.ListControllersResponse
 */
export type ListControllersResponse = Message<"salto.nebula.controller.v1.ListControllersResponse"> & {
  /**
   * The field name should match the noun `controllers` in the method name. There
   * will be a maximum number of items returned based on the `page_size` field
   * in the request.
   *
   * @generated from field: repeated salto.nebula.controller.v1.Controller controllers = 1;
   */
  controllers: Controller[];

  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message salto.nebula.controller.v1.ListControllersResponse.
 * Use `create(ListControllersResponseSchema)` to create a new message.
 */
export const ListControllersResponseSchema: GenMessage<ListControllersResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 4);

/**
 * The request message for [UpdateController][salto.nebula.controller.v1.ControllerService.UpdateController]
 *
 * @generated from message salto.nebula.controller.v1.UpdateControllerRequest
 */
export type UpdateControllerRequest = Message<"salto.nebula.controller.v1.UpdateControllerRequest"> & {
  /**
   * The controller resource which replaces the resource on the server.
   *
   * @generated from field: salto.nebula.controller.v1.Controller controller = 1;
   */
  controller?: Controller;

  /**
   * The update mask applied to the resource.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message salto.nebula.controller.v1.UpdateControllerRequest.
 * Use `create(UpdateControllerRequestSchema)` to create a new message.
 */
export const UpdateControllerRequestSchema: GenMessage<UpdateControllerRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 5);

/**
 * The request message for [DeleteController][salto.nebula.controller.v1.ControllerService.DeleteController]
 *
 * @generated from message salto.nebula.controller.v1.DeleteControllerRequest
 */
export type DeleteControllerRequest = Message<"salto.nebula.controller.v1.DeleteControllerRequest"> & {
  /**
   * The resource name of the controller to be deleted. For example:
   * `installations/surelock-homes-hq/controllers/dancing-men`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.controller.v1.DeleteControllerRequest.
 * Use `create(DeleteControllerRequestSchema)` to create a new message.
 */
export const DeleteControllerRequestSchema: GenMessage<DeleteControllerRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 6);

/**
 * The request message for [`BindController`][salto.nebula.controller.v1.ControllerService.BindController]
 *
 * @generated from message salto.nebula.controller.v1.BindControllerRequest
 */
export type BindControllerRequest = Message<"salto.nebula.controller.v1.BindControllerRequest"> & {
  /**
   * The resource name of the controller to be bound. For example:
   * `installations/surelock-homes-hq/controllers/main-controller`.
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
 * Describes the message salto.nebula.controller.v1.BindControllerRequest.
 * Use `create(BindControllerRequestSchema)` to create a new message.
 */
export const BindControllerRequestSchema: GenMessage<BindControllerRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 7);

/**
 * The empty response message for [`BindController`][salto.nebula.controller.v1.ControllerService.BindController]
 *
 * @generated from message salto.nebula.controller.v1.BindControllerResponse
 */
export type BindControllerResponse = Message<"salto.nebula.controller.v1.BindControllerResponse"> & {
};

/**
 * Describes the message salto.nebula.controller.v1.BindControllerResponse.
 * Use `create(BindControllerResponseSchema)` to create a new message.
 */
export const BindControllerResponseSchema: GenMessage<BindControllerResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 8);

/**
 * The request message for [`UnbindController`][salto.nebula.controller.v1.ControllerService.UnbindController]
 *
 * @generated from message salto.nebula.controller.v1.UnbindControllerRequest
 */
export type UnbindControllerRequest = Message<"salto.nebula.controller.v1.UnbindControllerRequest"> & {
  /**
   * The resource name of the controller to be bound. For example:
   * `installations/surelock-homes-hq/controllers/main-controller`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * If set to true, the device identifier is removed (unbound) from the
   * controller. Otherwise, the request will only work if the controller
   * isn't bound to any previous device identifier.
   *
   * @generated from field: bool force = 2;
   */
  force: boolean;
};

/**
 * Describes the message salto.nebula.controller.v1.UnbindControllerRequest.
 * Use `create(UnbindControllerRequestSchema)` to create a new message.
 */
export const UnbindControllerRequestSchema: GenMessage<UnbindControllerRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 9);

/**
 * The empty response message for [`UnbindController`][salto.nebula.controller.v1.ControllerService.UnbindController]
 *
 * @generated from message salto.nebula.controller.v1.UnbindControllerResponse
 */
export type UnbindControllerResponse = Message<"salto.nebula.controller.v1.UnbindControllerResponse"> & {
};

/**
 * Describes the message salto.nebula.controller.v1.UnbindControllerResponse.
 * Use `create(UnbindControllerResponseSchema)` to create a new message.
 */
export const UnbindControllerResponseSchema: GenMessage<UnbindControllerResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 10);

/**
 * The request message for [`InitializeController`][salto.nebula.controller.v1.ControllerService.InitializeController]
 *
 * @generated from message salto.nebula.controller.v1.InitializeControllerRequest
 */
export type InitializeControllerRequest = Message<"salto.nebula.controller.v1.InitializeControllerRequest"> & {
  /**
   * The resource name of the controller to be initialized. For example:
   * `installations/surelock-homes-hq/controllers/main-controller`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.controller.v1.InitializeControllerRequest.
 * Use `create(InitializeControllerRequestSchema)` to create a new message.
 */
export const InitializeControllerRequestSchema: GenMessage<InitializeControllerRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 11);

/**
 * The empty response message for [`InitializeController`][salto.nebula.controller.v1.ControllerService.InitializeController]
 *
 * @generated from message salto.nebula.controller.v1.InitializeControllerResponse
 */
export type InitializeControllerResponse = Message<"salto.nebula.controller.v1.InitializeControllerResponse"> & {
};

/**
 * Describes the message salto.nebula.controller.v1.InitializeControllerResponse.
 * Use `create(InitializeControllerResponseSchema)` to create a new message.
 */
export const InitializeControllerResponseSchema: GenMessage<InitializeControllerResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 12);

/**
 * @generated from message salto.nebula.controller.v1.InitializeControllerMetadata
 */
export type InitializeControllerMetadata = Message<"salto.nebula.controller.v1.InitializeControllerMetadata"> & {
  /**
   * Progress of operation. Range: [0, 100].
   *
   * @generated from field: int32 progress_percent = 1;
   */
  progressPercent: number;
};

/**
 * Describes the message salto.nebula.controller.v1.InitializeControllerMetadata.
 * Use `create(InitializeControllerMetadataSchema)` to create a new message.
 */
export const InitializeControllerMetadataSchema: GenMessage<InitializeControllerMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 13);

/**
 * The request message for [`ConfigureController`][salto.nebula.controller.v1.ControllerService.ConfigureController]
 *
 * @generated from message salto.nebula.controller.v1.ConfigureControllerRequest
 */
export type ConfigureControllerRequest = Message<"salto.nebula.controller.v1.ConfigureControllerRequest"> & {
  /**
   * The resource name of the controller to be configured. For example:
   * `installations/surelock-homes-hq/controllers/main-controller`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.controller.v1.ConfigureControllerRequest.
 * Use `create(ConfigureControllerRequestSchema)` to create a new message.
 */
export const ConfigureControllerRequestSchema: GenMessage<ConfigureControllerRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 14);

/**
 * The empty response message for [`ConfigureController`][salto.nebula.controller.v1.ControllerService.ConfigureController]
 *
 * @generated from message salto.nebula.controller.v1.ConfigureControllerResponse
 */
export type ConfigureControllerResponse = Message<"salto.nebula.controller.v1.ConfigureControllerResponse"> & {
};

/**
 * Describes the message salto.nebula.controller.v1.ConfigureControllerResponse.
 * Use `create(ConfigureControllerResponseSchema)` to create a new message.
 */
export const ConfigureControllerResponseSchema: GenMessage<ConfigureControllerResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 15);

/**
 * The metadata message for [`ConfigureController`][salto.nebula.controller.v1.ControllerService.ConfigureController]
 *
 * @generated from message salto.nebula.controller.v1.ConfigureControllerMetadata
 */
export type ConfigureControllerMetadata = Message<"salto.nebula.controller.v1.ConfigureControllerMetadata"> & {
  /**
   * Progress of operation. Range: [0, 100].
   *
   * @generated from field: int32 progress_percent = 1;
   */
  progressPercent: number;
};

/**
 * Describes the message salto.nebula.controller.v1.ConfigureControllerMetadata.
 * Use `create(ConfigureControllerMetadataSchema)` to create a new message.
 */
export const ConfigureControllerMetadataSchema: GenMessage<ConfigureControllerMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 16);

/**
 * The request message for [`ResetController`][salto.nebula.controller.v1.ControllerService.ResetController]
 *
 * @generated from message salto.nebula.controller.v1.ResetControllerRequest
 */
export type ResetControllerRequest = Message<"salto.nebula.controller.v1.ResetControllerRequest"> & {
  /**
   * The resource name of the controller to be reset. For example:
   * `installations/surelock-homes-hq/controllers/main-controller`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.controller.v1.ResetControllerRequest.
 * Use `create(ResetControllerRequestSchema)` to create a new message.
 */
export const ResetControllerRequestSchema: GenMessage<ResetControllerRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 17);

/**
 * The empty response message for [`ResetController`][salto.nebula.controller.v1.ControllerService.ResetController]
 *
 * @generated from message salto.nebula.controller.v1.ResetControllerResponse
 */
export type ResetControllerResponse = Message<"salto.nebula.controller.v1.ResetControllerResponse"> & {
};

/**
 * Describes the message salto.nebula.controller.v1.ResetControllerResponse.
 * Use `create(ResetControllerResponseSchema)` to create a new message.
 */
export const ResetControllerResponseSchema: GenMessage<ResetControllerResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 18);

/**
 * The metadata message for [`ResetController`][salto.nebula.controller.v1.ControllerService.ResetController]
 *
 * @generated from message salto.nebula.controller.v1.ResetControllerMetadata
 */
export type ResetControllerMetadata = Message<"salto.nebula.controller.v1.ResetControllerMetadata"> & {
};

/**
 * Describes the message salto.nebula.controller.v1.ResetControllerMetadata.
 * Use `create(ResetControllerMetadataSchema)` to create a new message.
 */
export const ResetControllerMetadataSchema: GenMessage<ResetControllerMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 19);

/**
 * The request message for [`UpdateControllerFirmware`][salto.nebula.controller.v1.ControllerService.UpdateControllerFirmware]
 *
 * @generated from message salto.nebula.controller.v1.UpdateControllerFirmwareRequest
 */
export type UpdateControllerFirmwareRequest = Message<"salto.nebula.controller.v1.UpdateControllerFirmwareRequest"> & {
  /**
   * The resource name of the controller whose firmware will be updated. For
   * example:
   * `installations/surelock-homes-hq/controllers/main-controller`.
   *
   * @generated from field: string controller = 1;
   */
  controller: string;
};

/**
 * Describes the message salto.nebula.controller.v1.UpdateControllerFirmwareRequest.
 * Use `create(UpdateControllerFirmwareRequestSchema)` to create a new message.
 */
export const UpdateControllerFirmwareRequestSchema: GenMessage<UpdateControllerFirmwareRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 20);

/**
 * The response message for [`UpdateControllerFirmware`][salto.nebula.controller.v1.ControllerService.UpdateControllerFirmware]
 *
 * @generated from message salto.nebula.controller.v1.UpdateControllerFirmwareResponse
 */
export type UpdateControllerFirmwareResponse = Message<"salto.nebula.controller.v1.UpdateControllerFirmwareResponse"> & {
};

/**
 * Describes the message salto.nebula.controller.v1.UpdateControllerFirmwareResponse.
 * Use `create(UpdateControllerFirmwareResponseSchema)` to create a new message.
 */
export const UpdateControllerFirmwareResponseSchema: GenMessage<UpdateControllerFirmwareResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 21);

/**
 * The metadata message for [`UpdateControllerFirmware`][salto.nebula.controller.v1.ControllerService.UpdateControllerFirmware]
 *
 * @generated from message salto.nebula.controller.v1.UpdateControllerFirmwareMetadata
 */
export type UpdateControllerFirmwareMetadata = Message<"salto.nebula.controller.v1.UpdateControllerFirmwareMetadata"> & {
  /**
   * Progress of operation. Range: [0, 100].
   *
   * @generated from field: int32 progress_percent = 1;
   */
  progressPercent: number;
};

/**
 * Describes the message salto.nebula.controller.v1.UpdateControllerFirmwareMetadata.
 * Use `create(UpdateControllerFirmwareMetadataSchema)` to create a new message.
 */
export const UpdateControllerFirmwareMetadataSchema: GenMessage<UpdateControllerFirmwareMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 22);

/**
 * The request message for [`GenerateAuthorizationToken`][salto.nebula.controller.v1.ControllerService.GenerateAuthorizationToken]
 *
 * @generated from message salto.nebula.controller.v1.GenerateAuthorizationTokenRequest
 */
export type GenerateAuthorizationTokenRequest = Message<"salto.nebula.controller.v1.GenerateAuthorizationTokenRequest"> & {
  /**
   * The resource name of the controller that the authorization token is
   * generated for. For example:
   * `installations/surelock-homes-hq/controllers/baker-street-entrance`.
   *
   * @generated from field: string controller = 1;
   */
  controller: string;
};

/**
 * Describes the message salto.nebula.controller.v1.GenerateAuthorizationTokenRequest.
 * Use `create(GenerateAuthorizationTokenRequestSchema)` to create a new message.
 */
export const GenerateAuthorizationTokenRequestSchema: GenMessage<GenerateAuthorizationTokenRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 23);

/**
 * The response message for [`GenerateAuthorizationToken`][salto.nebula.controller.v1.ControllerService.GenerateAuthorizationToken]
 *
 * @generated from message salto.nebula.controller.v1.GenerateAuthorizationTokenResponse
 */
export type GenerateAuthorizationTokenResponse = Message<"salto.nebula.controller.v1.GenerateAuthorizationTokenResponse"> & {
  /**
   * Authorization token to be used for connecting against a controller.
   *
   * @generated from field: bytes authorization_token = 1;
   */
  authorizationToken: Uint8Array;
};

/**
 * Describes the message salto.nebula.controller.v1.GenerateAuthorizationTokenResponse.
 * Use `create(GenerateAuthorizationTokenResponseSchema)` to create a new message.
 */
export const GenerateAuthorizationTokenResponseSchema: GenMessage<GenerateAuthorizationTokenResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 24);

/**
 * The request message for [`GenerateFirmwareDownloadUri`][salto.nebula.controller.v1.ControllerService.GenerateFirmwareDownloadUri]
 *
 * @generated from message salto.nebula.controller.v1.GenerateFirmwareDownloadUriRequest
 */
export type GenerateFirmwareDownloadUriRequest = Message<"salto.nebula.controller.v1.GenerateFirmwareDownloadUriRequest"> & {
  /**
   * The resource name of the controller to get the firmware download URI.
   * For example: `installations/surelock-homes-hq/controllers/main-controller`.
   *
   * @generated from field: string controller = 1;
   */
  controller: string;
};

/**
 * Describes the message salto.nebula.controller.v1.GenerateFirmwareDownloadUriRequest.
 * Use `create(GenerateFirmwareDownloadUriRequestSchema)` to create a new message.
 */
export const GenerateFirmwareDownloadUriRequestSchema: GenMessage<GenerateFirmwareDownloadUriRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 25);

/**
 * The response message for [`GenerateFirmwareDownloadUri`][salto.nebula.controller.v1.ControllerService.GenerateFirmwareDownloadUri]
 *
 * @generated from message salto.nebula.controller.v1.GenerateFirmwareDownloadUriResponse
 */
export type GenerateFirmwareDownloadUriResponse = Message<"salto.nebula.controller.v1.GenerateFirmwareDownloadUriResponse"> & {
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
 * Describes the message salto.nebula.controller.v1.GenerateFirmwareDownloadUriResponse.
 * Use `create(GenerateFirmwareDownloadUriResponseSchema)` to create a new message.
 */
export const GenerateFirmwareDownloadUriResponseSchema: GenMessage<GenerateFirmwareDownloadUriResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 26);

/**
 * The metadata message for [`GenerateFirmwareDownloadUri`][salto.nebula.controller.v1.ControllerService.GenerateFirmwareDownloadUri]
 *
 * @generated from message salto.nebula.controller.v1.GenerateFirmwareDownloadUriMetadata
 */
export type GenerateFirmwareDownloadUriMetadata = Message<"salto.nebula.controller.v1.GenerateFirmwareDownloadUriMetadata"> & {
};

/**
 * Describes the message salto.nebula.controller.v1.GenerateFirmwareDownloadUriMetadata.
 * Use `create(GenerateFirmwareDownloadUriMetadataSchema)` to create a new message.
 */
export const GenerateFirmwareDownloadUriMetadataSchema: GenMessage<GenerateFirmwareDownloadUriMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_controller_v1_controller, 27);

/**
 * Controllers are mains-wired hardware devices that can be used to control access where
 * a standalone lock cannot be fitted. For example, on car park barriers, turnstiles or
 * sliding doors. They allow the management of multiple accesses from a single device.
 * For example, one single controller could control access to both the entrance and exit
 * of a building via a turnstile. This service is responsible for managing controllers
 * resources.
 *
 * @generated from service salto.nebula.controller.v1.ControllerService
 */
export const ControllerService: GenService<{
  /**
   * Create a controller
   *
   * Creates a new controller
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.CreateController
   */
  createController: {
    methodKind: "unary";
    input: typeof CreateControllerRequestSchema;
    output: typeof ControllerSchema;
  },
  /**
   * Get a controller
   *
   * Gets an existing controller.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.GetController
   */
  getController: {
    methodKind: "unary";
    input: typeof GetControllerRequestSchema;
    output: typeof ControllerSchema;
  },
  /**
   * List controllers
   *
   * Returns a list of controllers that have been previously created.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.ListControllers
   */
  listControllers: {
    methodKind: "unary";
    input: typeof ListControllersRequestSchema;
    output: typeof ListControllersResponseSchema;
  },
  /**
   * Update a controller
   *
   * Updates an existing controller.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.UpdateController
   */
  updateController: {
    methodKind: "unary";
    input: typeof UpdateControllerRequestSchema;
    output: typeof ControllerSchema;
  },
  /**
   * Delete a controller
   *
   * Permanently deletes a controller. This cannot be undone.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.DeleteController
   */
  deleteController: {
    methodKind: "unary";
    input: typeof DeleteControllerRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Bind a controller
   *
   * Binds a controller. Binding a controller assigns a device
   * identifier to the controller. After binding, the device can then be
   * initialized or configured.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.BindController
   */
  bindController: {
    methodKind: "unary";
    input: typeof BindControllerRequestSchema;
    output: typeof BindControllerResponseSchema;
  },
  /**
   * Unbind a controller
   *
   * Unbinds a controller. Unbinding a controller removes the
   * device identifier from the controller. This may be required in some
   * cases where the controller is not available anymore because, for
   * example, it's broken or damaged. Unbinding allows the initialization of
   * the replacement device without removing it from the installation. It also
   * means the device keeps all the information associated with it, such as
   * events.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.UnbindController
   */
  unbindController: {
    methodKind: "unary";
    input: typeof UnbindControllerRequestSchema;
    output: typeof UnbindControllerResponseSchema;
  },
  /**
   * Initialize a controller
   *
   * Initializes a controller. Controllers need to be initialized
   * before you can start to use them.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.InitializeController
   */
  initializeController: {
    methodKind: "unary";
    input: typeof InitializeControllerRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Configure a controller
   *
   * Configures a controller. Configuring a controller implies
   * adding some information to the controller such as setting the time
   * zone.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.ConfigureController
   */
  configureController: {
    methodKind: "unary";
    input: typeof ConfigureControllerRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Reset a controller
   *
   * Resetting a device such as a controller means returning it to its
   * factory settings. Resetting is the process of removing the identity as
   * well as all the associated information of an already configured device.
   * Once a device has been reset, you need to reconfigure it.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.ResetController
   */
  resetController: {
    methodKind: "unary";
    input: typeof ResetControllerRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Update controller firmware
   *
   * Updates a controller's firmware. SALTO provides firmware updates
   * when new functionality is available or when we fix a bug.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.UpdateControllerFirmware
   */
  updateControllerFirmware: {
    methodKind: "unary";
    input: typeof UpdateControllerFirmwareRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Generates an authorization token for a controller
   *
   * Generates an authorization token that allows to connect, authenticate and
   * authorize against a controller.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.GenerateAuthorizationToken
   */
  generateAuthorizationToken: {
    methodKind: "unary";
    input: typeof GenerateAuthorizationTokenRequestSchema;
    output: typeof GenerateAuthorizationTokenResponseSchema;
  },
  /**
   * Generate controller firmware download URI
   *
   * Provides the download URI for the latest firmware bundle for the
   * controller. The returned URI can be used to bring the controller
   * firmwares up to latest.
   *
   * @generated from rpc salto.nebula.controller.v1.ControllerService.GenerateFirmwareDownloadUri
   */
  generateFirmwareDownloadUri: {
    methodKind: "unary";
    input: typeof GenerateFirmwareDownloadUriRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_salto_nebula_controller_v1_controller, 0);

