# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/communication.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x19proto/communication.proto\x12\x07generic\"#\n\x0b\x44\x61taRequest\x12\x14\n\x05input\x18\x01 \x01(\tR\x05input\"&\n\x0c\x44\x61taResponse\x12\x16\n\x06output\x18\x01 \x01(\x05R\x06output2Q\n\x14\x43ommunicationService\x12\x39\n\x08sendData\x12\x14.generic.DataRequest\x1a\x15.generic.DataResponse\"\x00\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'proto.communication_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  _globals['_DATAREQUEST']._serialized_start=38
  _globals['_DATAREQUEST']._serialized_end=73
  _globals['_DATARESPONSE']._serialized_start=75
  _globals['_DATARESPONSE']._serialized_end=113
  _globals['_COMMUNICATIONSERVICE']._serialized_start=115
  _globals['_COMMUNICATIONSERVICE']._serialized_end=196
# @@protoc_insertion_point(module_scope)
