// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file proto/communication.proto (package generic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DataRequest, DataResponse } from "./communication_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service generic.CommunicationService
 */
export const CommunicationService = {
  typeName: "generic.CommunicationService",
  methods: {
    /**
     * @generated from rpc generic.CommunicationService.sendData
     */
    sendData: {
      name: "sendData",
      I: DataRequest,
      O: DataResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
