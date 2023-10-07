import { DataRequest, DataResponse } from "./communication_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service generic.CommunicationService
 */
export declare const CommunicationService: {
    readonly typeName: "generic.CommunicationService";
    readonly methods: {
        /**
         * @generated from rpc generic.CommunicationService.sendData
         */
        readonly sendData: {
            readonly name: "sendData";
            readonly I: typeof DataRequest;
            readonly O: typeof DataResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
