"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || '8080';
const connect_1 = require("@connectrpc/connect");
const connect_node_1 = require("@connectrpc/connect-node");
const communication_pb_1 = require("./proto/communication_pb");
const communication_connect_1 = require("./proto/communication_connect");
const client = (0, connect_1.createPromiseClient)(communication_connect_1.CommunicationService, (0, connect_node_1.createGrpcTransport)({
    httpVersion: "2",
    baseUrl: "http://localhost:50051",
}));
app.use(express_1.default.static("dist"));
app.post("/api/send", (req, res) => {
    req.on("data", (data) => __awaiter(void 0, void 0, void 0, function* () {
        data = JSON.parse(data.toString()).data;
        console.log("request: " + data.toString());
        const rpc_request = new communication_pb_1.DataRequest({ input: data.toString() });
        const rpc_response = yield client.sendData(rpc_request);
        console.log("response: " + rpc_response.output);
        res.json({ message: rpc_response.output });
    }));
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
