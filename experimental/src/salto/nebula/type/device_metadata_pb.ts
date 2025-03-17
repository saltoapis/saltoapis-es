// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/type/device_metadata.proto (package salto.nebula.type, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Date } from "@saltoapis/type";
import { file_salto_type_date } from "@saltoapis/type";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file salto/nebula/type/device_metadata.proto.
 */
export const file_salto_nebula_type_device_metadata: GenFile = /*@__PURE__*/
  fileDesc("CidzYWx0by9uZWJ1bGEvdHlwZS9kZXZpY2VfbWV0YWRhdGEucHJvdG8SEXNhbHRvLm5lYnVsYS50eXBlIqUCCg5EZXZpY2VNZXRhZGF0YRJGCg5jaXJjdWl0X2JvYXJkcxgBIAMoCzIuLnNhbHRvLm5lYnVsYS50eXBlLkRldmljZU1ldGFkYXRhLkNpcmN1aXRCb2FyZBrKAQoMQ2lyY3VpdEJvYXJkEioKEG1hbnVmYWN0dXJlX2RhdGUYAiABKAsyEC5zYWx0by50eXBlLkRhdGUSFQoNc2VyaWFsX251bWJlchgDIAEoCRJKCglmaXJtd2FyZXMYBCADKAsyNy5zYWx0by5uZWJ1bGEudHlwZS5EZXZpY2VNZXRhZGF0YS5DaXJjdWl0Qm9hcmQuRmlybXdhcmUaKwoIRmlybXdhcmUSDgoGbnVtYmVyGAEgASgJEg8KB3ZlcnNpb24YAiABKAlC3AEKGWNvbS5zYWx0b2FwaXMubmVidWxhLnR5cGVCE0RldmljZU1ldGFkYXRhUHJvdG9QAVpUZ2l0aHViLmNvbS9zYWx0b2FwaXMtaW50ZXJuYWwvc2FsdG9hcGlzLWdvL25lYnVsYS90eXBlL2RldmljZW1ldGFkYXRhO2RldmljZW1ldGFkYXRhqgIVU2FsdG9hcGlzLk5lYnVsYS5UeXBlygIVU2FsdG9hcGlzXE5lYnVsYVxUeXBl4gIhR1BCTWV0YWRhdGFcU2FsdG9hcGlzXE5lYnVsYVxUeXBlYgZwcm90bzM", [file_salto_type_date]);

/**
 * Metadata contains information about a device. Most metadata is immutable.
 *
 * @generated from message salto.nebula.type.DeviceMetadata
 */
export type DeviceMetadata = Message<"salto.nebula.type.DeviceMetadata"> & {
  /**
   * Circuit boards present in this device.
   *
   * @generated from field: repeated salto.nebula.type.DeviceMetadata.CircuitBoard circuit_boards = 1;
   */
  circuitBoards: DeviceMetadata_CircuitBoard[];
};

/**
 * Describes the message salto.nebula.type.DeviceMetadata.
 * Use `create(DeviceMetadataSchema)` to create a new message.
 */
export const DeviceMetadataSchema: GenMessage<DeviceMetadata> = /*@__PURE__*/
  messageDesc(file_salto_nebula_type_device_metadata, 0);

/**
 * Metadata of a circuit board present on a device.
 *
 * @generated from message salto.nebula.type.DeviceMetadata.CircuitBoard
 */
export type DeviceMetadata_CircuitBoard = Message<"salto.nebula.type.DeviceMetadata.CircuitBoard"> & {
  /**
   * Date manufactured
   *
   * @generated from field: salto.type.Date manufacture_date = 2;
   */
  manufactureDate?: Date;

  /**
   * Hardware serial number, for example, `2.000.0020`
   *
   * @generated from field: string serial_number = 3;
   */
  serialNumber: string;

  /**
   * Firmwares present in this circuit board.
   *
   * @generated from field: repeated salto.nebula.type.DeviceMetadata.CircuitBoard.Firmware firmwares = 4;
   */
  firmwares: DeviceMetadata_CircuitBoard_Firmware[];
};

/**
 * Describes the message salto.nebula.type.DeviceMetadata.CircuitBoard.
 * Use `create(DeviceMetadata_CircuitBoardSchema)` to create a new message.
 */
export const DeviceMetadata_CircuitBoardSchema: GenMessage<DeviceMetadata_CircuitBoard> = /*@__PURE__*/
  messageDesc(file_salto_nebula_type_device_metadata, 0, 0);

/**
 * Firmware contains the firmware number and version.
 *
 * @generated from message salto.nebula.type.DeviceMetadata.CircuitBoard.Firmware
 */
export type DeviceMetadata_CircuitBoard_Firmware = Message<"salto.nebula.type.DeviceMetadata.CircuitBoard.Firmware"> & {
  /**
   * Firmware number, for example '0180'.
   *
   * @generated from field: string number = 1;
   */
  number: string;

  /**
   * Firmware version of a specific firmware number.
   *
   * @generated from field: string version = 2;
   */
  version: string;
};

/**
 * Describes the message salto.nebula.type.DeviceMetadata.CircuitBoard.Firmware.
 * Use `create(DeviceMetadata_CircuitBoard_FirmwareSchema)` to create a new message.
 */
export const DeviceMetadata_CircuitBoard_FirmwareSchema: GenMessage<DeviceMetadata_CircuitBoard_Firmware> = /*@__PURE__*/
  messageDesc(file_salto_nebula_type_device_metadata, 0, 0, 0);

