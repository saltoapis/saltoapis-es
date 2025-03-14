// @generated by protoc-gen-es v1.10.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/nebula/type/device_type.proto (package salto.nebula.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Represents the device types.
 *
 * @generated from enum salto.nebula.type.DeviceType
 */
export enum DeviceType {
  /**
   * Unspecified
   *
   * @generated from enum value: DEVICE_TYPE_UNSPECIFIED = 0;
   */
  DEVICE_TYPE_UNSPECIFIED = 0,

  /**
   * Electronic lock
   *
   * @generated from enum value: ELECTRONIC_LOCK = 1;
   */
  ELECTRONIC_LOCK = 1,

  /**
   * Gateway
   *
   * @generated from enum value: GATEWAY = 2;
   */
  GATEWAY = 2,

  /**
   * Extender
   *
   * @generated from enum value: EXTENDER = 3;
   */
  EXTENDER = 3,

  /**
   * Encoder
   *
   * @generated from enum value: ENCODER = 4;
   */
  ENCODER = 4,

  /**
   * Controller
   *
   * @generated from enum value: CONTROLLER = 5;
   */
  CONTROLLER = 5,

  /**
   * Intercom Adaptor
   *
   * @generated from enum value: INTERCOM_ADAPTOR = 6;
   */
  INTERCOM_ADAPTOR = 6,

  /**
   * Electronic key
   *
   * @generated from enum value: ELECTRONIC_KEY = 7;
   */
  ELECTRONIC_KEY = 7,
}
// Retrieve enum metadata with: proto3.getEnumType(DeviceType)
proto3.util.setEnumType(DeviceType, "salto.nebula.type.DeviceType", [
  { no: 0, name: "DEVICE_TYPE_UNSPECIFIED" },
  { no: 1, name: "ELECTRONIC_LOCK" },
  { no: 2, name: "GATEWAY" },
  { no: 3, name: "EXTENDER" },
  { no: 4, name: "ENCODER" },
  { no: 5, name: "CONTROLLER" },
  { no: 6, name: "INTERCOM_ADAPTOR" },
  { no: 7, name: "ELECTRONIC_KEY" },
]);

