// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=none"
// @generated from file salto/longrunning/v1/operation.proto (package salto.longrunning.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any, EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any, file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { Status } from "@saltoapis/google-rpc";
import { file_google_rpc_status } from "@saltoapis/google-rpc";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file salto/longrunning/v1/operation.proto.
 */
export const file_salto_longrunning_v1_operation: GenFile = /*@__PURE__*/
  fileDesc("CiRzYWx0by9sb25ncnVubmluZy92MS9vcGVyYXRpb24ucHJvdG8SFHNhbHRvLmxvbmdydW5uaW5nLnYxIqgBCglPcGVyYXRpb24SDAoEbmFtZRgBIAEoCRImCghtZXRhZGF0YRgCIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSDAoEZG9uZRgDIAEoCBIjCgVlcnJvchgEIAEoCzISLmdvb2dsZS5ycGMuU3RhdHVzSAASKAoIcmVzcG9uc2UYBSABKAsyFC5nb29nbGUucHJvdG9idWYuQW55SABCCAoGcmVzdWx0IiMKE0dldE9wZXJhdGlvblJlcXVlc3QSDAoEbmFtZRgBIAEoCSJOChVMaXN0T3BlcmF0aW9uc1JlcXVlc3QSEQoJcGFnZV9zaXplGAEgASgFEhIKCnBhZ2VfdG9rZW4YAiABKAkSDgoGZmlsdGVyGAMgASgJImYKFkxpc3RPcGVyYXRpb25zUmVzcG9uc2USMwoKb3BlcmF0aW9ucxgBIAMoCzIfLnNhbHRvLmxvbmdydW5uaW5nLnYxLk9wZXJhdGlvbhIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkiJgoWRGVsZXRlT3BlcmF0aW9uUmVxdWVzdBIMCgRuYW1lGAEgASgJIiYKFkNhbmNlbE9wZXJhdGlvblJlcXVlc3QSDAoEbmFtZRgBIAEoCTKNAwoQT3BlcmF0aW9uU2VydmljZRJaCgxHZXRPcGVyYXRpb24SKS5zYWx0by5sb25ncnVubmluZy52MS5HZXRPcGVyYXRpb25SZXF1ZXN0Gh8uc2FsdG8ubG9uZ3J1bm5pbmcudjEuT3BlcmF0aW9uEmsKDkxpc3RPcGVyYXRpb25zEisuc2FsdG8ubG9uZ3J1bm5pbmcudjEuTGlzdE9wZXJhdGlvbnNSZXF1ZXN0Giwuc2FsdG8ubG9uZ3J1bm5pbmcudjEuTGlzdE9wZXJhdGlvbnNSZXNwb25zZRJXCg9EZWxldGVPcGVyYXRpb24SLC5zYWx0by5sb25ncnVubmluZy52MS5EZWxldGVPcGVyYXRpb25SZXF1ZXN0GhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5ElcKD0NhbmNlbE9wZXJhdGlvbhIsLnNhbHRvLmxvbmdydW5uaW5nLnYxLkNhbmNlbE9wZXJhdGlvblJlcXVlc3QaFi5nb29nbGUucHJvdG9idWYuRW1wdHlC1AEKHGNvbS5zYWx0b2FwaXMubG9uZ3J1bm5pbmcudjFCDk9wZXJhdGlvblByb3RvUAFaRWdpdGh1Yi5jb20vc2FsdG9hcGlzLWludGVybmFsL3NhbHRvYXBpcy1nby9sb25ncnVubmluZy92MTtsb25ncnVubmluZ6oCGFNhbHRvYXBpcy5Mb25ncnVubmluZy5WMcoCGFNhbHRvYXBpc1xMb25ncnVubmluZ1xWMeICJEdQQk1ldGFkYXRhXFNhbHRvYXBpc1xMb25ncnVubmluZ1xWMWIGcHJvdG8z", [file_google_protobuf_any, file_google_protobuf_empty, file_google_rpc_status]);

/**
 * The long-running operation object
 *
 * @generated from message salto.longrunning.v1.Operation
 */
export type Operation = Message<"salto.longrunning.v1.Operation"> & {
  /**
   * The server-assigned name, which is only unique within the same service
   * that originally returns it. If you use the default HTTP mapping, the
   * `name` should have the format of `operations/some/unique/name`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time.
   * Some services might not provide such metadata. Any method that returns a
   * long-running operation should document the metadata type, if any.
   *
   * @generated from field: google.protobuf.Any metadata = 2;
   */
  metadata?: Any;

  /**
   * If the value is `false`, it means the operation is still in progress. If
   * true, the operation is completed, and either `error` or `response` is
   * available.
   *
   * @generated from field: bool done = 3;
   */
  done: boolean;

  /**
   * The operation result, which can be either an `error` or a valid
   * `response`. If `done` == `false`, neither `error` nor `response` is set.
   * If `done` == `true`, exactly one of `error` or `response` is set.
   *
   * @generated from oneof salto.longrunning.v1.Operation.result
   */
  result: {
    /**
     * The error result of the operation in case of failure or cancellation.
     *
     * @generated from field: google.rpc.Status error = 4;
     */
    value: Status;
    case: "error";
  } | {
    /**
     * The normal response of the operation in case of success. If the
     * original method returns no data on success, such as `Delete`, the
     * response is `google.protobuf.Empty`. If the original method is
     * standard `Get`/`Create`/`Update`, the response should be the
     * resource. For other methods, the response should have the type
     * `XxxResponse`, where `Xxx` is the original method name. For example:
     * if the original method name is `AssignMobileKey()`, the inferred
     * response type is `AssignMobileKeyResponse`.
     *
     * @generated from field: google.protobuf.Any response = 5;
     */
    value: Any;
    case: "response";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message salto.longrunning.v1.Operation.
 * Use `create(OperationSchema)` to create a new message.
 */
export const OperationSchema: GenMessage<Operation> = /*@__PURE__*/
  messageDesc(file_salto_longrunning_v1_operation, 0);

/**
 * The request message for
 * [`OperationService.GetOperation`][salto.longrunning.v1.OperationService.GetOperation].
 *
 * @generated from message salto.longrunning.v1.GetOperationRequest
 */
export type GetOperationRequest = Message<"salto.longrunning.v1.GetOperationRequest"> & {
  /**
   * The name of the operation resource.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.longrunning.v1.GetOperationRequest.
 * Use `create(GetOperationRequestSchema)` to create a new message.
 */
export const GetOperationRequestSchema: GenMessage<GetOperationRequest> = /*@__PURE__*/
  messageDesc(file_salto_longrunning_v1_operation, 1);

/**
 * The request message for
 * [`OperationService.ListOperations`][salto.longrunning.v1.OperationService.ListOperations].
 *
 * @generated from message salto.longrunning.v1.ListOperationsRequest
 */
export type ListOperationsRequest = Message<"salto.longrunning.v1.ListOperationsRequest"> & {
  /**
   * The maximum number of items to return.
   *
   * @generated from field: int32 page_size = 1;
   */
  pageSize: number;

  /**
   * The `next_page_token` value returned from a previous `List` request, if
   * any.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  /**
   * A filter that chooses which operations to return. The maximum
   * length of the filter is 20000 characters.
   *
   * @generated from field: string filter = 3;
   */
  filter: string;
};

/**
 * Describes the message salto.longrunning.v1.ListOperationsRequest.
 * Use `create(ListOperationsRequestSchema)` to create a new message.
 */
export const ListOperationsRequestSchema: GenMessage<ListOperationsRequest> = /*@__PURE__*/
  messageDesc(file_salto_longrunning_v1_operation, 2);

/**
 * The response message for
 * [`Operations.ListOperations`][salto.longrunning.v1.OperationService.ListOperations].
 *
 * @generated from message salto.longrunning.v1.ListOperationsResponse
 */
export type ListOperationsResponse = Message<"salto.longrunning.v1.ListOperationsResponse"> & {
  /**
   * A list of operations that matches the specified filter in the request.
   *
   * @generated from field: repeated salto.longrunning.v1.Operation operations = 1;
   */
  operations: Operation[];

  /**
   * The standard List next-page token.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message salto.longrunning.v1.ListOperationsResponse.
 * Use `create(ListOperationsResponseSchema)` to create a new message.
 */
export const ListOperationsResponseSchema: GenMessage<ListOperationsResponse> = /*@__PURE__*/
  messageDesc(file_salto_longrunning_v1_operation, 3);

/**
 * The request message for
 * [`OperationService.DeleteOperation`][salto.longrunning.v1.OperationService.DeleteOperation].
 *
 * @generated from message salto.longrunning.v1.DeleteOperationRequest
 */
export type DeleteOperationRequest = Message<"salto.longrunning.v1.DeleteOperationRequest"> & {
  /**
   * The resource name of the operation to be deleted. For example:
   * `operations/01ds5r5cbjr9hvke5f6c5s7nm0`.
   * Format: operations/{operation}
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.longrunning.v1.DeleteOperationRequest.
 * Use `create(DeleteOperationRequestSchema)` to create a new message.
 */
export const DeleteOperationRequestSchema: GenMessage<DeleteOperationRequest> = /*@__PURE__*/
  messageDesc(file_salto_longrunning_v1_operation, 4);

/**
 * The request message for
 * [`OperationService.CancelOperation`][salto.longrunning.v1.OperationService.CancelOperation].
 *
 * @generated from message salto.longrunning.v1.CancelOperationRequest
 */
export type CancelOperationRequest = Message<"salto.longrunning.v1.CancelOperationRequest"> & {
  /**
   * The name of the operation resource to be cancelled. For example:
   * `operations/01ds5r5cbjr9hvke5f6c5s7nm0`.
   * Format: operations/{operation}
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message salto.longrunning.v1.CancelOperationRequest.
 * Use `create(CancelOperationRequestSchema)` to create a new message.
 */
export const CancelOperationRequestSchema: GenMessage<CancelOperationRequest> = /*@__PURE__*/
  messageDesc(file_salto_longrunning_v1_operation, 5);

/**
 * Manages long-running operations with an API service.
 *
 * When an API method normally takes long time to complete, it can be designed
 * to return [`Operation`][salto.longrunning.v1.Operation] to the client, and the
 * client can use this interface to receive the real response asynchronously by
 * polling the operation resource, or pass the operation resource to another API
 * to receive the response. Any API service that returns long-running operations
 * should implement the `OperationService` interface so developers can have a
 * consistent client experience.
 *
 * @generated from service salto.longrunning.v1.OperationService
 */
export const OperationService: GenService<{
  /**
   * Get a operation
   *
   * Retrieves an existing long-running operation.
   *
   * @generated from rpc salto.longrunning.v1.OperationService.GetOperation
   */
  getOperation: {
    methodKind: "unary";
    input: typeof GetOperationRequestSchema;
    output: typeof OperationSchema;
  },
  /**
   * List operations
   *
   * Returns a list of long-running operations that have been previously created.
   *
   * @generated from rpc salto.longrunning.v1.OperationService.ListOperations
   */
  listOperations: {
    methodKind: "unary";
    input: typeof ListOperationsRequestSchema;
    output: typeof ListOperationsResponseSchema;
  },
  /**
   * Delete an operation
   *
   * Permanently deletes a long-running operation. This cannot be undone.
   *
   * @generated from rpc salto.longrunning.v1.OperationService.DeleteOperation
   */
  deleteOperation: {
    methodKind: "unary";
    input: typeof DeleteOperationRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Cancel an operation
   *
   * Starts asynchronous cancellation on a long-running operation. The server
   * makes a best effort to cancel the operation, but success is not
   * guaranteed. Clients can use
   * [OperationService.GetOperation][salto.longrunning.v1.OperationService.GetOperation]
   * or other methods to check whether the cancellation succeeded or whether
   * the operation completed despite cancellation. On successful cancellation,
   * the operation is not deleted; instead, it becomes an operation with an
   * [Operation.error][salto.longrunning.v1.Operation.error] value with a
   * [google.rpc.Status.code][google.rpc.Status.code] of 1, corresponding to
   * `Code.CANCELLED`.
   *
   * @generated from rpc salto.longrunning.v1.OperationService.CancelOperation
   */
  cancelOperation: {
    methodKind: "unary";
    input: typeof CancelOperationRequestSchema;
    output: typeof EmptySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_salto_longrunning_v1_operation, 0);

