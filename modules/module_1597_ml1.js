// Module: ml1
// Params: V82

Object.defineProperty(V82, '__esModule', { value: !0 });
V82.toLogAttributes = V82.createExportLogsServiceRequest = void 0;
var Eg6 = bJ1(),
  hJ1 = gJ1();
function Ug6(A, B) {
  let Q = Eg6.getOtlpEncoder(B);
  return { resourceLogs: $g6(A, Q) };
}
V82.createExportLogsServiceRequest = Ug6;
function Ng6(A) {
  let B = new Map();
  for (let Q of A) {
    let {
        resource: I,
        instrumentationScope: { name: G, version: D = '', schemaUrl: Z = '' },
      } = Q,
      Y = B.get(I);
    if (!Y) ((Y = new Map()), B.set(I, Y));
    let W = `${G}@${D}:${Z}`,
      F = Y.get(W);
    if (!F) ((F = []), Y.set(W, F));
    F.push(Q);
  }
  return B;
}
function $g6(A, B) {
  let Q = Ng6(A);
  return Array.from(Q, ([I, G]) => ({
    resource: hJ1.createResource(I),
    scopeLogs: Array.from(G, ([, D]) => {
      return {
        scope: hJ1.createInstrumentationScope(D[0].instrumentationScope),
        logRecords: D.map((Z) => qg6(Z, B)),
        schemaUrl: D[0].instrumentationScope.schemaUrl,
      };
    }),
    schemaUrl: void 0,
  }));
}
function qg6(A, B) {
  return {
    timeUnixNano: B.encodeHrTime(A.hrTime),
    observedTimeUnixNano: B.encodeHrTime(A.hrTimeObserved),
    severityNumber: Mg6(A.severityNumber),
    severityText: A.severityText,
    body: hJ1.toAnyValue(A.body),
    attributes: X82(A.attributes),
    droppedAttributesCount: A.droppedAttributesCount,
    flags: A.spanContext?.traceFlags,
    traceId: B.encodeOptionalSpanContext(A.spanContext?.traceId),
    spanId: B.encodeOptionalSpanContext(A.spanContext?.spanId),
  };
}
function Mg6(A) {
  return A;
}
function X82(A) {
  return Object.keys(A).map((B) => hJ1.toKeyValue(B, A[B]));
}
V82.toLogAttributes = X82;
