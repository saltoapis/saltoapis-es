// @generated by protoc-gen-es v1.10.0 with parameter "target=ts,import_extension=none"
// @generated from file salto/type/color.proto (package salto.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Represents a color in the RGBA color space.
 * By default, applications should assume the sRGB color space.
 *
 * When color equality needs to be decided, implementations, unless
 * documented otherwise, treat two colors as equal if all their red,
 * green, blue, and alpha values each differ by at most 1e-5.
 *
 * @generated from message salto.type.Color
 */
export class Color extends Message<Color> {
  /**
   * The amount of red in the color as a value in the interval [0, 1].
   *
   * @generated from field: float red = 1;
   */
  red = 0;

  /**
   * The amount of green in the color as a value in the interval [0, 1].
   *
   * @generated from field: float green = 2;
   */
  green = 0;

  /**
   * The amount of blue in the color as a value in the interval [0, 1].
   *
   * @generated from field: float blue = 3;
   */
  blue = 0;

  /**
   * The fraction of this color that should be applied to the pixel. That is,
   * the final pixel color is defined by the equation:
   *
   *   `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)`
   *
   * This means that a value of 1.0 corresponds to a solid color, whereas
   * a value of 0.0 corresponds to a completely transparent color.
   * If omitted, this color object is rendered as a solid color
   * (as if the alpha value had been explicitly given a value of 1.0).
   *
   * @generated from field: optional float alpha = 4;
   */
  alpha?: number;

  constructor(data?: PartialMessage<Color>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "salto.type.Color";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "red", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "green", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "blue", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "alpha", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Color {
    return new Color().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Color {
    return new Color().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Color {
    return new Color().fromJsonString(jsonString, options);
  }

  static equals(a: Color | PlainMessage<Color> | undefined, b: Color | PlainMessage<Color> | undefined): boolean {
    return proto3.util.equals(Color, a, b);
  }
}

