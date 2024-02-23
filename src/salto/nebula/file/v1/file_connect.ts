// @generated by protoc-gen-connect-es v1.0.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/file/v1/file.proto (package salto.nebula.file.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateFileRequest, File } from "./file_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * A file represents an object that serves as a reference for files
 * stored elsewhere. This service is responsible for managing file resources.
 *
 * @generated from service salto.nebula.file.v1.FileService
 */
export const FileService = {
  typeName: "salto.nebula.file.v1.FileService",
  methods: {
    /**
     * Create a file
     *
     * Creates a new file.
     *
     * @generated from rpc salto.nebula.file.v1.FileService.CreateFile
     */
    createFile: {
      name: "CreateFile",
      I: CreateFileRequest,
      O: File,
      kind: MethodKind.Unary,
    },
  }
} as const;

