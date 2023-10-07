import express from "express";
import { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || '8080';

import cors from 'cors';

import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";

import { DataRequest, DataResponse } from "./proto/communication_pb"
import { CommunicationService } from "./proto/communication_connect"

const client = createPromiseClient(
    CommunicationService,
    createGrpcTransport({
        httpVersion: "2",
        baseUrl: "http://localhost:50051",
    })
);

app.use(express.static("dist"));

app.post("/api/send", (req: Request, res: Response) => {

	req.on("data", async (data) => {
		console.log(data.toString());

		const rpc_request = new DataRequest({ input: data.toString() });
		const rpc_response = await client.sendData(rpc_request);

		res.json({ message: rpc_response.output });
	});

});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
