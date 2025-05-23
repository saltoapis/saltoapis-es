// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/electronickey/v1/electronic_key.proto (package salto.nebula.electronickey.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema, FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { OperationSchema } from "@saltoapis/longrunning-v1";
import { file_salto_longrunning_v1_operation } from "@saltoapis/longrunning-v1";
import type { DeviceMetadata } from "@saltoapis/nebula-type";
import { file_salto_nebula_type_device_metadata } from "@saltoapis/nebula-type";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file salto/nebula/electronickey/v1/electronic_key.proto.
 */
export const file_salto_nebula_electronickey_v1_electronic_key: GenFile = /*@__PURE__*/
  fileDesc("CjJzYWx0by9uZWJ1bGEvZWxlY3Ryb25pY2tleS92MS9lbGVjdHJvbmljX2tleS5wcm90bxIdc2FsdG8ubmVidWxhLmVsZWN0cm9uaWNrZXkudjEi0QEKDUVsZWN0cm9uaWNLZXkSDAoEbmFtZRgBIAEoCRIUCgxkaXNwbGF5X25hbWUYAiABKAkSEwoLaW5pdGlhbGl6ZWQYAyABKAgSFgoJZGV2aWNlX2lkGAQgASgJSACIAQESEAoIb3V0ZGF0ZWQYBSABKAgSOgoPZGV2aWNlX21ldGFkYXRhGAggASgLMiEuc2FsdG8ubmVidWxhLnR5cGUuRGV2aWNlTWV0YWRhdGESEwoLbG93X2JhdHRlcnkYByABKAhCDAoKX2RldmljZV9pZCKoAQoaQ3JlYXRlRWxlY3Ryb25pY0tleVJlcXVlc3QSDgoGcGFyZW50GAEgASgJEh4KEWVsZWN0cm9uaWNfa2V5X2lkGAIgASgJSACIAQESRAoOZWxlY3Ryb25pY19rZXkYAyABKAsyLC5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5FbGVjdHJvbmljS2V5QhQKEl9lbGVjdHJvbmljX2tleV9pZCInChdHZXRFbGVjdHJvbmljS2V5UmVxdWVzdBIMCgRuYW1lGAEgASgJInQKGUxpc3RFbGVjdHJvbmljS2V5c1JlcXVlc3QSDgoGcGFyZW50GAEgASgJEhEKCXBhZ2Vfc2l6ZRgCIAEoBRISCgpwYWdlX3Rva2VuGAMgASgJEg4KBmZpbHRlchgEIAEoCRIQCghvcmRlcl9ieRgFIAEoCSJ8ChpMaXN0RWxlY3Ryb25pY0tleXNSZXNwb25zZRJFCg9lbGVjdHJvbmljX2tleXMYASADKAsyLC5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5FbGVjdHJvbmljS2V5EhcKD25leHRfcGFnZV90b2tlbhgCIAEoCSKTAQoaVXBkYXRlRWxlY3Ryb25pY0tleVJlcXVlc3QSRAoOZWxlY3Ryb25pY19rZXkYASABKAsyLC5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5FbGVjdHJvbmljS2V5Ei8KC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFzayIqChpEZWxldGVFbGVjdHJvbmljS2V5UmVxdWVzdBIMCgRuYW1lGAEgASgJIjsKGEJpbmRFbGVjdHJvbmljS2V5UmVxdWVzdBIMCgRuYW1lGAEgASgJEhEKCWRldmljZV9pZBgCIAEoCSIbChlCaW5kRWxlY3Ryb25pY0tleVJlc3BvbnNlIjkKGlVuYmluZEVsZWN0cm9uaWNLZXlSZXF1ZXN0EgwKBG5hbWUYASABKAkSDQoFZm9yY2UYAiABKAgiHQobVW5iaW5kRWxlY3Ryb25pY0tleVJlc3BvbnNlIi4KHkluaXRpYWxpemVFbGVjdHJvbmljS2V5UmVxdWVzdBIMCgRuYW1lGAEgASgJIiEKH0luaXRpYWxpemVFbGVjdHJvbmljS2V5UmVzcG9uc2UiIQofSW5pdGlhbGl6ZUVsZWN0cm9uaWNLZXlNZXRhZGF0YSItCh1Db25maWd1cmVFbGVjdHJvbmljS2V5UmVxdWVzdBIMCgRuYW1lGAEgASgJIiAKHkNvbmZpZ3VyZUVsZWN0cm9uaWNLZXlSZXNwb25zZSIgCh5Db25maWd1cmVFbGVjdHJvbmljS2V5TWV0YWRhdGEiKQoZUmVzZXRFbGVjdHJvbmljS2V5UmVxdWVzdBIMCgRuYW1lGAEgASgJIhwKGlJlc2V0RWxlY3Ryb25pY0tleVJlc3BvbnNlIhwKGlJlc2V0RWxlY3Ryb25pY0tleU1ldGFkYXRhIjsKIUdlbmVyYXRlQXV0aG9yaXphdGlvblRva2VuUmVxdWVzdBIWCg5lbGVjdHJvbmljX2tleRgBIAEoCSJBCiJHZW5lcmF0ZUF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlEhsKE2F1dGhvcml6YXRpb25fdG9rZW4YASABKAwiPAoiR2VuZXJhdGVGaXJtd2FyZURvd25sb2FkVXJpUmVxdWVzdBIWCg5lbGVjdHJvbmljX2tleRgBIAEoCSJLCiNHZW5lcmF0ZUZpcm13YXJlRG93bmxvYWRVcmlSZXNwb25zZRIUCgxkb3dubG9hZF91cmkYASABKAkSDgoGZGlnZXN0GAIgASgJIiUKI0dlbmVyYXRlRmlybXdhcmVEb3dubG9hZFVyaU1ldGFkYXRhMqsMChRFbGVjdHJvbmljS2V5U2VydmljZRJ+ChNDcmVhdGVFbGVjdHJvbmljS2V5Ejkuc2FsdG8ubmVidWxhLmVsZWN0cm9uaWNrZXkudjEuQ3JlYXRlRWxlY3Ryb25pY0tleVJlcXVlc3QaLC5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5FbGVjdHJvbmljS2V5EngKEEdldEVsZWN0cm9uaWNLZXkSNi5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5HZXRFbGVjdHJvbmljS2V5UmVxdWVzdBosLnNhbHRvLm5lYnVsYS5lbGVjdHJvbmlja2V5LnYxLkVsZWN0cm9uaWNLZXkSiQEKEkxpc3RFbGVjdHJvbmljS2V5cxI4LnNhbHRvLm5lYnVsYS5lbGVjdHJvbmlja2V5LnYxLkxpc3RFbGVjdHJvbmljS2V5c1JlcXVlc3QaOS5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5MaXN0RWxlY3Ryb25pY0tleXNSZXNwb25zZRJ+ChNVcGRhdGVFbGVjdHJvbmljS2V5Ejkuc2FsdG8ubmVidWxhLmVsZWN0cm9uaWNrZXkudjEuVXBkYXRlRWxlY3Ryb25pY0tleVJlcXVlc3QaLC5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5FbGVjdHJvbmljS2V5EmgKE0RlbGV0ZUVsZWN0cm9uaWNLZXkSOS5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5EZWxldGVFbGVjdHJvbmljS2V5UmVxdWVzdBoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRKGAQoRQmluZEVsZWN0cm9uaWNLZXkSNy5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5CaW5kRWxlY3Ryb25pY0tleVJlcXVlc3QaOC5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5CaW5kRWxlY3Ryb25pY0tleVJlc3BvbnNlEowBChNVbmJpbmRFbGVjdHJvbmljS2V5Ejkuc2FsdG8ubmVidWxhLmVsZWN0cm9uaWNrZXkudjEuVW5iaW5kRWxlY3Ryb25pY0tleVJlcXVlc3QaOi5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5VbmJpbmRFbGVjdHJvbmljS2V5UmVzcG9uc2USeQoXSW5pdGlhbGl6ZUVsZWN0cm9uaWNLZXkSPS5zYWx0by5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MS5Jbml0aWFsaXplRWxlY3Ryb25pY0tleVJlcXVlc3QaHy5zYWx0by5sb25ncnVubmluZy52MS5PcGVyYXRpb24SdwoWQ29uZmlndXJlRWxlY3Ryb25pY0tleRI8LnNhbHRvLm5lYnVsYS5lbGVjdHJvbmlja2V5LnYxLkNvbmZpZ3VyZUVsZWN0cm9uaWNLZXlSZXF1ZXN0Gh8uc2FsdG8ubG9uZ3J1bm5pbmcudjEuT3BlcmF0aW9uEm8KElJlc2V0RWxlY3Ryb25pY0tleRI4LnNhbHRvLm5lYnVsYS5lbGVjdHJvbmlja2V5LnYxLlJlc2V0RWxlY3Ryb25pY0tleVJlcXVlc3QaHy5zYWx0by5sb25ncnVubmluZy52MS5PcGVyYXRpb24SoQEKGkdlbmVyYXRlQXV0aG9yaXphdGlvblRva2VuEkAuc2FsdG8ubmVidWxhLmVsZWN0cm9uaWNrZXkudjEuR2VuZXJhdGVBdXRob3JpemF0aW9uVG9rZW5SZXF1ZXN0GkEuc2FsdG8ubmVidWxhLmVsZWN0cm9uaWNrZXkudjEuR2VuZXJhdGVBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZRKBAQobR2VuZXJhdGVGaXJtd2FyZURvd25sb2FkVXJpEkEuc2FsdG8ubmVidWxhLmVsZWN0cm9uaWNrZXkudjEuR2VuZXJhdGVGaXJtd2FyZURvd25sb2FkVXJpUmVxdWVzdBofLnNhbHRvLmxvbmdydW5uaW5nLnYxLk9wZXJhdGlvbkKHAgolY29tLnNhbHRvYXBpcy5uZWJ1bGEuZWxlY3Ryb25pY2tleS52MUISRWxlY3Ryb25pY0tleVByb3RvUAFaUGdpdGh1Yi5jb20vc2FsdG9hcGlzLWludGVybmFsL3NhbHRvYXBpcy1nby9uZWJ1bGEvZWxlY3Ryb25pY2tleS92MTtlbGVjdHJvbmlja2V5qgIhU2FsdG9hcGlzLk5lYnVsYS5FbGVjdHJvbmljS2V5LlYxygIhU2FsdG9hcGlzXE5lYnVsYVxFbGVjdHJvbmljS2V5XFYx4gItR1BCTWV0YWRhdGFcU2FsdG9hcGlzXE5lYnVsYVxFbGVjdHJvbmljS2V5XFYxYgZwcm90bzM", [file_google_protobuf_empty, file_google_protobuf_field_mask, file_salto_longrunning_v1_operation, file_salto_nebula_type_device_metadata]);

/**
 * The electronic key object
 *
 * @generated from message salto.nebula.electronickey.v1.ElectronicKey
 */
export type ElectronicKey = Message<"salto.nebula.electronickey.v1.ElectronicKey"> & {
  /**
   * Output only. Resource name of the electronic key. It must have the format of
   * `installations/*\/electronic-keys/*`. For example:
   * `installations/surelock-homes-hq/electronic-keys/main-key`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Display name of the electronic key.
   *
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * Indicates whether this electronic key has been initialized or not. This
   * field cannot be modified using a standard
   * [`UpdateElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.UpdateElectronicKey]
   * operation. To change the value of this field, you must call
   * [`InitializeElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.InitializeElectronicKey].
   *
   * If the value is `false` also applies to the case where the
   * initialization process has been initiated but where it has not finished.
   *
   * @generated from field: bool initialized = 3;
   */
  initialized: boolean;

  /**
   * Globally unique identifier that is used across all devices manufactured
   * by SALTO, including gateways, extenders, electronic keys and so on.
   *
   * @generated from field: optional string device_id = 4;
   */
  deviceId?: string;

  /**
   * Indicates whether this electronic key has pending updates or not. This
   * could be because there was a pending configuration or a firmware update
   * and is conditionally set based on the current installation settings.
   *
   * @generated from field: bool outdated = 5;
   */
  outdated: boolean;

  /**
   * Device metadata contains information about a device hardware and firmware.
   *
   * @generated from field: salto.nebula.type.DeviceMetadata device_metadata = 8;
   */
  deviceMetadata?: DeviceMetadata;

  /**
   * Indicates whether the battery of this electronic key is low, and needs
   * replacing, or is normal and doesn't need replacing.
   *
   * @generated from field: bool low_battery = 7;
   */
  lowBattery: boolean;
};

/**
 * Describes the message salto.nebula.electronickey.v1.ElectronicKey.
 * Use `create(ElectronicKeySchema)` to create a new message.
 */
export const ElectronicKeySchema: GenMessage<ElectronicKey> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 0);

/**
 * The request message for [CreateElectronicKey][salto.nebula.electronickey.v1.ElectronicKeyService.CreateElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.CreateElectronicKeyRequest
 */
export type CreateElectronicKeyRequest = Message<"salto.nebula.electronickey.v1.CreateElectronicKeyRequest"> & {
  /**
   * Resource name of the parent resource where to create the electronic key. For
   * example, `installations/surelock-homes-hq`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * The electronic key ID to use for this electronic key. In case it's empty the
   * server will autogenerate a unique identifier.
   *
   * @generated from field: optional string electronic_key_id = 2;
   */
  electronicKeyId?: string;

  /**
   * The electronic key resource to be created. Client must not set the
   * `ElectronicKey.name` field.
   *
   * @generated from field: salto.nebula.electronickey.v1.ElectronicKey electronic_key = 3;
   */
  electronicKey?: ElectronicKey;
};

/**
 * Describes the message salto.nebula.electronickey.v1.CreateElectronicKeyRequest.
 * Use `create(CreateElectronicKeyRequestSchema)` to create a new message.
 */
export const CreateElectronicKeyRequestSchema: GenMessage<CreateElectronicKeyRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 1);

/**
 * The request message for [GetElectronicKey][salto.nebula.electronickey.v1.ElectronicKeyService.GetElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.GetElectronicKeyRequest
 */
export type GetElectronicKeyRequest = Message<"salto.nebula.electronickey.v1.GetElectronicKeyRequest"> & {
  /**
   * The name of the requested electronic key resource. For example:
   * `installations/surelock-homes-hq/electronic-keys/main-key`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.electronickey.v1.GetElectronicKeyRequest.
 * Use `create(GetElectronicKeyRequestSchema)` to create a new message.
 */
export const GetElectronicKeyRequestSchema: GenMessage<GetElectronicKeyRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 2);

/**
 * The request message for [ListElectronicKeys][salto.nebula.electronickey.v1.ElectronicKeyService.ListElectronicKeys]
 *
 * @generated from message salto.nebula.electronickey.v1.ListElectronicKeysRequest
 */
export type ListElectronicKeysRequest = Message<"salto.nebula.electronickey.v1.ListElectronicKeysRequest"> & {
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
   * A filter that chooses which electronic keys to return.
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
 * Describes the message salto.nebula.electronickey.v1.ListElectronicKeysRequest.
 * Use `create(ListElectronicKeysRequestSchema)` to create a new message.
 */
export const ListElectronicKeysRequestSchema: GenMessage<ListElectronicKeysRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 3);

/**
 * The response message for [ListElectronicKeys][salto.nebula.electronickey.v1.ElectronicKeyService.ListElectronicKeys]
 *
 * @generated from message salto.nebula.electronickey.v1.ListElectronicKeysResponse
 */
export type ListElectronicKeysResponse = Message<"salto.nebula.electronickey.v1.ListElectronicKeysResponse"> & {
  /**
   * The field name should match the noun `electronic_keys` in the method name. There
   * will be a maximum number of items returned based on the `page_size` field
   * in the request.
   *
   * @generated from field: repeated salto.nebula.electronickey.v1.ElectronicKey electronic_keys = 1;
   */
  electronicKeys: ElectronicKey[];

  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message salto.nebula.electronickey.v1.ListElectronicKeysResponse.
 * Use `create(ListElectronicKeysResponseSchema)` to create a new message.
 */
export const ListElectronicKeysResponseSchema: GenMessage<ListElectronicKeysResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 4);

/**
 * The request message for [UpdateElectronicKey][salto.nebula.electronickey.v1.ElectronicKeyService.UpdateElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.UpdateElectronicKeyRequest
 */
export type UpdateElectronicKeyRequest = Message<"salto.nebula.electronickey.v1.UpdateElectronicKeyRequest"> & {
  /**
   * The electronic key resource which replaces the resource on the server.
   *
   * @generated from field: salto.nebula.electronickey.v1.ElectronicKey electronic_key = 1;
   */
  electronicKey?: ElectronicKey;

  /**
   * The update mask applied to the resource.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message salto.nebula.electronickey.v1.UpdateElectronicKeyRequest.
 * Use `create(UpdateElectronicKeyRequestSchema)` to create a new message.
 */
export const UpdateElectronicKeyRequestSchema: GenMessage<UpdateElectronicKeyRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 5);

/**
 * The request message for [DeleteElectronicKey][salto.nebula.electronickey.v1.ElectronicKeyService.DeleteElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.DeleteElectronicKeyRequest
 */
export type DeleteElectronicKeyRequest = Message<"salto.nebula.electronickey.v1.DeleteElectronicKeyRequest"> & {
  /**
   * The resource name of the electronic key to be deleted. For example:
   * `installations/surelock-homes-hq/electronic-keys/main-key`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.electronickey.v1.DeleteElectronicKeyRequest.
 * Use `create(DeleteElectronicKeyRequestSchema)` to create a new message.
 */
export const DeleteElectronicKeyRequestSchema: GenMessage<DeleteElectronicKeyRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 6);

/**
 * The request message for [`BindElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.BindElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.BindElectronicKeyRequest
 */
export type BindElectronicKeyRequest = Message<"salto.nebula.electronickey.v1.BindElectronicKeyRequest"> & {
  /**
   * The resource name of the electronic key to be bound. For example:
   * `installations/surelock-homes-hq/electronic-keys/main-key`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Globally unique identifier that is used across all devices manufactured
   * by SALTO, including gateways, extenders, electronic keys and so on.
   *
   * @generated from field: string device_id = 2;
   */
  deviceId: string;
};

/**
 * Describes the message salto.nebula.electronickey.v1.BindElectronicKeyRequest.
 * Use `create(BindElectronicKeyRequestSchema)` to create a new message.
 */
export const BindElectronicKeyRequestSchema: GenMessage<BindElectronicKeyRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 7);

/**
 * The empty response message for [`BindElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.BindElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.BindElectronicKeyResponse
 */
export type BindElectronicKeyResponse = Message<"salto.nebula.electronickey.v1.BindElectronicKeyResponse"> & {
};

/**
 * Describes the message salto.nebula.electronickey.v1.BindElectronicKeyResponse.
 * Use `create(BindElectronicKeyResponseSchema)` to create a new message.
 */
export const BindElectronicKeyResponseSchema: GenMessage<BindElectronicKeyResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 8);

/**
 * The request message for [`UnbindElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.UnbindElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.UnbindElectronicKeyRequest
 */
export type UnbindElectronicKeyRequest = Message<"salto.nebula.electronickey.v1.UnbindElectronicKeyRequest"> & {
  /**
   * The resource name of the electronic key to be unbound. For example:
   * `installations/surelock-homes-hq/electronic-keys/main-key`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * If set to true, the device identifier is removed (unbound) from the
   * electronic key. Otherwise, the request will only work if the electronic
   * key isn't bound to any previous device identifier.
   *
   * @generated from field: bool force = 2;
   */
  force: boolean;
};

/**
 * Describes the message salto.nebula.electronickey.v1.UnbindElectronicKeyRequest.
 * Use `create(UnbindElectronicKeyRequestSchema)` to create a new message.
 */
export const UnbindElectronicKeyRequestSchema: GenMessage<UnbindElectronicKeyRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 9);

/**
 * The empty response message for [`UnbindElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.UnbindElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.UnbindElectronicKeyResponse
 */
export type UnbindElectronicKeyResponse = Message<"salto.nebula.electronickey.v1.UnbindElectronicKeyResponse"> & {
};

/**
 * Describes the message salto.nebula.electronickey.v1.UnbindElectronicKeyResponse.
 * Use `create(UnbindElectronicKeyResponseSchema)` to create a new message.
 */
export const UnbindElectronicKeyResponseSchema: GenMessage<UnbindElectronicKeyResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 10);

/**
 * The request message for [`InitializeElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.InitializeElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.InitializeElectronicKeyRequest
 */
export type InitializeElectronicKeyRequest = Message<"salto.nebula.electronickey.v1.InitializeElectronicKeyRequest"> & {
  /**
   * The resource name of the electronic key to be initialized. For example:
   * `installations/surelock-homes-hq/electronic-keys/main-key`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.electronickey.v1.InitializeElectronicKeyRequest.
 * Use `create(InitializeElectronicKeyRequestSchema)` to create a new message.
 */
export const InitializeElectronicKeyRequestSchema: GenMessage<InitializeElectronicKeyRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 11);

/**
 * The empty response message for [`InitializeElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.InitializeElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.InitializeElectronicKeyResponse
 */
export type InitializeElectronicKeyResponse = Message<"salto.nebula.electronickey.v1.InitializeElectronicKeyResponse"> & {
};

/**
 * Describes the message salto.nebula.electronickey.v1.InitializeElectronicKeyResponse.
 * Use `create(InitializeElectronicKeyResponseSchema)` to create a new message.
 */
export const InitializeElectronicKeyResponseSchema: GenMessage<InitializeElectronicKeyResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 12);

/**
 * The metadata message for [`InitializeElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.InitializeElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.InitializeElectronicKeyMetadata
 */
export type InitializeElectronicKeyMetadata = Message<"salto.nebula.electronickey.v1.InitializeElectronicKeyMetadata"> & {
};

/**
 * Describes the message salto.nebula.electronickey.v1.InitializeElectronicKeyMetadata.
 * Use `create(InitializeElectronicKeyMetadataSchema)` to create a new message.
 */
export const InitializeElectronicKeyMetadataSchema: GenMessage<InitializeElectronicKeyMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 13);

/**
 * The request message for [`ConfigureElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.ConfigureElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.ConfigureElectronicKeyRequest
 */
export type ConfigureElectronicKeyRequest = Message<"salto.nebula.electronickey.v1.ConfigureElectronicKeyRequest"> & {
  /**
   * The resource name of the electronic key to be configured. For example:
   * `installations/surelock-homes-hq/electronic-keys/main-key`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.electronickey.v1.ConfigureElectronicKeyRequest.
 * Use `create(ConfigureElectronicKeyRequestSchema)` to create a new message.
 */
export const ConfigureElectronicKeyRequestSchema: GenMessage<ConfigureElectronicKeyRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 14);

/**
 * The empty response message for [`ConfigureElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.ConfigureElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.ConfigureElectronicKeyResponse
 */
export type ConfigureElectronicKeyResponse = Message<"salto.nebula.electronickey.v1.ConfigureElectronicKeyResponse"> & {
};

/**
 * Describes the message salto.nebula.electronickey.v1.ConfigureElectronicKeyResponse.
 * Use `create(ConfigureElectronicKeyResponseSchema)` to create a new message.
 */
export const ConfigureElectronicKeyResponseSchema: GenMessage<ConfigureElectronicKeyResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 15);

/**
 * The metadata message for [`ConfigureElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.ConfigureElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.ConfigureElectronicKeyMetadata
 */
export type ConfigureElectronicKeyMetadata = Message<"salto.nebula.electronickey.v1.ConfigureElectronicKeyMetadata"> & {
};

/**
 * Describes the message salto.nebula.electronickey.v1.ConfigureElectronicKeyMetadata.
 * Use `create(ConfigureElectronicKeyMetadataSchema)` to create a new message.
 */
export const ConfigureElectronicKeyMetadataSchema: GenMessage<ConfigureElectronicKeyMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 16);

/**
 * The request message for [`ResetElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.ResetElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.ResetElectronicKeyRequest
 */
export type ResetElectronicKeyRequest = Message<"salto.nebula.electronickey.v1.ResetElectronicKeyRequest"> & {
  /**
   * The resource name of the electronic key to be reset. For example:
   * `installations/surelock-homes-hq/electronic-keys/baker-street-entrance`.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.nebula.electronickey.v1.ResetElectronicKeyRequest.
 * Use `create(ResetElectronicKeyRequestSchema)` to create a new message.
 */
export const ResetElectronicKeyRequestSchema: GenMessage<ResetElectronicKeyRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 17);

/**
 * The empty response message for [`ResetElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.ResetElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.ResetElectronicKeyResponse
 */
export type ResetElectronicKeyResponse = Message<"salto.nebula.electronickey.v1.ResetElectronicKeyResponse"> & {
};

/**
 * Describes the message salto.nebula.electronickey.v1.ResetElectronicKeyResponse.
 * Use `create(ResetElectronicKeyResponseSchema)` to create a new message.
 */
export const ResetElectronicKeyResponseSchema: GenMessage<ResetElectronicKeyResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 18);

/**
 * The metadata message for [`ResetElectronicKey`][salto.nebula.electronickey.v1.ElectronicKeyService.ResetElectronicKey]
 *
 * @generated from message salto.nebula.electronickey.v1.ResetElectronicKeyMetadata
 */
export type ResetElectronicKeyMetadata = Message<"salto.nebula.electronickey.v1.ResetElectronicKeyMetadata"> & {
};

/**
 * Describes the message salto.nebula.electronickey.v1.ResetElectronicKeyMetadata.
 * Use `create(ResetElectronicKeyMetadataSchema)` to create a new message.
 */
export const ResetElectronicKeyMetadataSchema: GenMessage<ResetElectronicKeyMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 19);

/**
 * The request message for [`GenerateAuthorizationToken`][salto.nebula.electronickey.v1.ElectronicKeyService.GenerateAuthorizationToken]
 *
 * @generated from message salto.nebula.electronickey.v1.GenerateAuthorizationTokenRequest
 */
export type GenerateAuthorizationTokenRequest = Message<"salto.nebula.electronickey.v1.GenerateAuthorizationTokenRequest"> & {
  /**
   * The resource name of the electronic key that the authorization token is
   * generated for. For example:
   * `installations/surelock-homes-hq/electronic-keys/main-key`.
   *
   * @generated from field: string electronic_key = 1;
   */
  electronicKey: string;
};

/**
 * Describes the message salto.nebula.electronickey.v1.GenerateAuthorizationTokenRequest.
 * Use `create(GenerateAuthorizationTokenRequestSchema)` to create a new message.
 */
export const GenerateAuthorizationTokenRequestSchema: GenMessage<GenerateAuthorizationTokenRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 20);

/**
 * The response message for [`GenerateAuthorizationToken`][salto.nebula.electronickey.v1.ElectronicKeyService.GenerateAuthorizationToken]
 *
 * @generated from message salto.nebula.electronickey.v1.GenerateAuthorizationTokenResponse
 */
export type GenerateAuthorizationTokenResponse = Message<"salto.nebula.electronickey.v1.GenerateAuthorizationTokenResponse"> & {
  /**
   * Authorization token to be used for connecting to an electronic key.
   *
   * @generated from field: bytes authorization_token = 1;
   */
  authorizationToken: Uint8Array;
};

/**
 * Describes the message salto.nebula.electronickey.v1.GenerateAuthorizationTokenResponse.
 * Use `create(GenerateAuthorizationTokenResponseSchema)` to create a new message.
 */
export const GenerateAuthorizationTokenResponseSchema: GenMessage<GenerateAuthorizationTokenResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 21);

/**
 * The request message for [`GenerateFirmwareDownloadUri`][salto.nebula.electronickey.v1.ElectronicKeyService.GenerateFirmwareDownloadUri]
 *
 * @generated from message salto.nebula.electronickey.v1.GenerateFirmwareDownloadUriRequest
 */
export type GenerateFirmwareDownloadUriRequest = Message<"salto.nebula.electronickey.v1.GenerateFirmwareDownloadUriRequest"> & {
  /**
   * The resource name of the electronickey to get the firmware download URI.
   * For example: `installations/surelock-homes-hq/electronic-keys/main-key`.
   *
   * @generated from field: string electronic_key = 1;
   */
  electronicKey: string;
};

/**
 * Describes the message salto.nebula.electronickey.v1.GenerateFirmwareDownloadUriRequest.
 * Use `create(GenerateFirmwareDownloadUriRequestSchema)` to create a new message.
 */
export const GenerateFirmwareDownloadUriRequestSchema: GenMessage<GenerateFirmwareDownloadUriRequest> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 22);

/**
 * The response message for [`GenerateFirmwareDownloadUri`][salto.nebula.electronickey.v1.ElectronicKeyService.GenerateFirmwareDownloadUri]
 *
 * @generated from message salto.nebula.electronickey.v1.GenerateFirmwareDownloadUriResponse
 */
export type GenerateFirmwareDownloadUriResponse = Message<"salto.nebula.electronickey.v1.GenerateFirmwareDownloadUriResponse"> & {
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
 * Describes the message salto.nebula.electronickey.v1.GenerateFirmwareDownloadUriResponse.
 * Use `create(GenerateFirmwareDownloadUriResponseSchema)` to create a new message.
 */
export const GenerateFirmwareDownloadUriResponseSchema: GenMessage<GenerateFirmwareDownloadUriResponse> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 23);

/**
 * The metadata message for [`GenerateFirmwareDownloadUri`][salto.nebula.electronickey.v1.ElectronicKeyService.GenerateFirmwareDownloadUri]
 *
 * @generated from message salto.nebula.electronickey.v1.GenerateFirmwareDownloadUriMetadata
 */
export type GenerateFirmwareDownloadUriMetadata = Message<"salto.nebula.electronickey.v1.GenerateFirmwareDownloadUriMetadata"> & {
};

/**
 * Describes the message salto.nebula.electronickey.v1.GenerateFirmwareDownloadUriMetadata.
 * Use `create(GenerateFirmwareDownloadUriMetadataSchema)` to create a new message.
 */
export const GenerateFirmwareDownloadUriMetadataSchema: GenMessage<GenerateFirmwareDownloadUriMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_electronickey_v1_electronic_key, 24);

/**
 * An electronic key is battery-powered device used to interact with electronic locks.
 *
 * @generated from service salto.nebula.electronickey.v1.ElectronicKeyService
 */
export const ElectronicKeyService: GenService<{
  /**
   * Create a new electronic key
   *
   * Creates a new electronic key
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.CreateElectronicKey
   */
  createElectronicKey: {
    methodKind: "unary";
    input: typeof CreateElectronicKeyRequestSchema;
    output: typeof ElectronicKeySchema;
  },
  /**
   * Get an electronic key
   *
   * Gets an existing electronic key.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.GetElectronicKey
   */
  getElectronicKey: {
    methodKind: "unary";
    input: typeof GetElectronicKeyRequestSchema;
    output: typeof ElectronicKeySchema;
  },
  /**
   * List electronic keys
   *
   * Returns a list of electronic keys that have been previously created.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.ListElectronicKeys
   */
  listElectronicKeys: {
    methodKind: "unary";
    input: typeof ListElectronicKeysRequestSchema;
    output: typeof ListElectronicKeysResponseSchema;
  },
  /**
   * Update an electronic key
   *
   * Updates an existing electronic key.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.UpdateElectronicKey
   */
  updateElectronicKey: {
    methodKind: "unary";
    input: typeof UpdateElectronicKeyRequestSchema;
    output: typeof ElectronicKeySchema;
  },
  /**
   * Delete an electronic key
   *
   * Permanently deletes an electronic key. This cannot be undone.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.DeleteElectronicKey
   */
  deleteElectronicKey: {
    methodKind: "unary";
    input: typeof DeleteElectronicKeyRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Bind an electronic key
   *
   * Binds an electronic key. Binding an electronic key assigns a device
   * identifier to the electronic key. After binding, the device can then be
   * initialized or configured.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.BindElectronicKey
   */
  bindElectronicKey: {
    methodKind: "unary";
    input: typeof BindElectronicKeyRequestSchema;
    output: typeof BindElectronicKeyResponseSchema;
  },
  /**
   * Unbind an electronic key
   *
   * Unbinds an electronic key. Unbinding an electronic key removes the
   * device identifier from the electronic key. This may be required in some
   * cases where the electronic key is not available anymore because, for
   * example, it's broken or damaged. Unbinding allows the initialization of
   * the replacement device without removing it from the installation. It also
   * means the device keeps all the information associated with it, such as
   * events.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.UnbindElectronicKey
   */
  unbindElectronicKey: {
    methodKind: "unary";
    input: typeof UnbindElectronicKeyRequestSchema;
    output: typeof UnbindElectronicKeyResponseSchema;
  },
  /**
   * Initialize an electronic key
   *
   * Initializes an electronic key. Electronic keys need to be initialized
   * before you can start to use them.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.InitializeElectronicKey
   */
  initializeElectronicKey: {
    methodKind: "unary";
    input: typeof InitializeElectronicKeyRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Configure an electronic key
   *
   * Configures an electronic key. Configuring an electronic key implies
   * adding some information to the electronic key such as setting the time
   * zone.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.ConfigureElectronicKey
   */
  configureElectronicKey: {
    methodKind: "unary";
    input: typeof ConfigureElectronicKeyRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Reset an electronic key
   *
   * Resetting a device such as an electronic key means returning it to its
   * factory settings. Resetting is the process of removing the identity as
   * well as all the associated information of an already configured device.
   * Once a device has been reset, you need to reconfigure it.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.ResetElectronicKey
   */
  resetElectronicKey: {
    methodKind: "unary";
    input: typeof ResetElectronicKeyRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * Generate authorization token for an electronic key
   *
   * Generates an authorization token that allows to connect to, authenticate and
   * authorize an electronic key.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.GenerateAuthorizationToken
   */
  generateAuthorizationToken: {
    methodKind: "unary";
    input: typeof GenerateAuthorizationTokenRequestSchema;
    output: typeof GenerateAuthorizationTokenResponseSchema;
  },
  /**
   * Generate electronic key firmware download URI
   *
   * Provides the download URI for the latest firmware bundle for the
   * electronic key. The returned URI can be used to bring the electronic key
   * firmwares up to latest.
   *
   * @generated from rpc salto.nebula.electronickey.v1.ElectronicKeyService.GenerateFirmwareDownloadUri
   */
  generateFirmwareDownloadUri: {
    methodKind: "unary";
    input: typeof GenerateFirmwareDownloadUriRequestSchema;
    output: typeof OperationSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_salto_nebula_electronickey_v1_electronic_key, 0);

