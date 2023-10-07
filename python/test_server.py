from concurrent import futures
import logging
import math
import time

import grpc
from proto import communication_pb2, communication_pb2_grpc


class CommunicationServicer(communication_pb2_grpc.CommunicationServiceServicer):

    def sendData(self, request, context):
        print(request)
        print(request.input)
        return communication_pb2.DataResponse(output=6)


def serve():
    print("Starting server...")
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    communication_pb2_grpc.add_CommunicationServiceServicer_to_server(CommunicationServicer(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    print("Server started!")
    server.wait_for_termination()


if __name__ == "__main__":
    logging.basicConfig()
    serve()
