// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file proto/communication.proto (package generic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message generic.DataRequest
 */
export class DataRequest extends Message<DataRequest> {
  /**
   * @generated from field: string input = 1;
   */
  input = "";

  constructor(data?: PartialMessage<DataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "generic.DataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "input", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataRequest {
    return new DataRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataRequest {
    return new DataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataRequest {
    return new DataRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DataRequest | PlainMessage<DataRequest> | undefined, b: DataRequest | PlainMessage<DataRequest> | undefined): boolean {
    return proto3.util.equals(DataRequest, a, b);
  }
}

/**
 * @generated from message generic.DataResponse
 */
export class DataResponse extends Message<DataResponse> {
  /**
   * @generated from field: int32 output = 1;
   */
  output = 0;

  constructor(data?: PartialMessage<DataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "generic.DataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "output", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataResponse {
    return new DataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataResponse {
    return new DataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataResponse {
    return new DataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DataResponse | PlainMessage<DataResponse> | undefined, b: DataResponse | PlainMessage<DataResponse> | undefined): boolean {
    return proto3.util.equals(DataResponse, a, b);
  }
}
