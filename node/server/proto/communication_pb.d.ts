import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message generic.DataRequest
 */
export declare class DataRequest extends Message<DataRequest> {
    /**
     * @generated from field: string input = 1;
     */
    input: string;
    constructor(data?: PartialMessage<DataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "generic.DataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataRequest;
    static equals(a: DataRequest | PlainMessage<DataRequest> | undefined, b: DataRequest | PlainMessage<DataRequest> | undefined): boolean;
}
/**
 * @generated from message generic.DataResponse
 */
export declare class DataResponse extends Message<DataResponse> {
    /**
     * @generated from field: int32 output = 1;
     */
    output: number;
    constructor(data?: PartialMessage<DataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "generic.DataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataResponse;
    static equals(a: DataResponse | PlainMessage<DataResponse> | undefined, b: DataResponse | PlainMessage<DataResponse> | undefined): boolean;
}
