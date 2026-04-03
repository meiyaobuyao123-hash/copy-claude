// Module: m82
// Params: g82

Object.defineProperty(g82, '__esModule', { value: !0 });
g82.ProtobufTraceSerializer = void 0;
var b82 = vJ1(),
  og6 = cl1(),
  tg6 = b82.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse,
  eg6 = b82.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
g82.ProtobufTraceSerializer = {
  serializeRequest: (A) => {
    let B = og6.createExportTraceServiceRequest(A);
    return eg6.encode(B).finish();
  },
  deserializeResponse: (A) => {
    return tg6.decode(A);
  },
};
