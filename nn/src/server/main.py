from concurrent import futures
import logging
import math
import time

import grpc

from proto import communication_pb2, communication_pb2_grpc
from nn import testing



class CommunicationServicer(communication_pb2_grpc.CommunicationServiceServicer):
    def sendData(self, request, context):

        print("request:", request.input)

        # response = testing.default_response
        response = int(testing.predict(request.input))

        print("response:", response)

        return communication_pb2.DataResponse(output=response)


def serve():
    print("Starting server...")
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    communication_pb2_grpc.add_CommunicationServiceServicer_to_server(CommunicationServicer(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    print("Server started!")
    print("Default response", testing.default_response)
    server.wait_for_termination()


if __name__ == "__main__":
    logging.basicConfig()
    serve()
