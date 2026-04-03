// Module: E82
// Params: z82

Object.defineProperty(z82, '__esModule', { value: !0 });
z82.ProtobufLogsSerializer = void 0;
var H82 = vJ1(),
  Rg6 = ml1(),
  Og6 = H82.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse,
  Tg6 = H82.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
z82.ProtobufLogsSerializer = {
  serializeRequest: (A) => {
    let B = Rg6.createExportLogsServiceRequest(A);
    return Tg6.encode(B).finish();
  },
  deserializeResponse: (A) => {
    return Og6.decode(A);
  },
};
