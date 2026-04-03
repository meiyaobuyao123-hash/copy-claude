// Module: cl1
// Params: f82

Object.defineProperty(f82, '__esModule', { value: !0 });
f82.createExportTraceServiceRequest =
  f82.toOtlpSpanEvent =
  f82.toOtlpLink =
  f82.sdkSpanToOtlpSpan =
    void 0;
var Mo = gJ1(),
  cg6 = bJ1();
function y82(A, B) {
  let Q = A.spanContext(),
    I = A.status,
    G = A.parentSpanContext?.spanId ? B.encodeSpanContext(A.parentSpanContext?.spanId) : void 0;
  return {
    traceId: B.encodeSpanContext(Q.traceId),
    spanId: B.encodeSpanContext(Q.spanId),
    parentSpanId: G,
    traceState: Q.traceState?.serialize(),
    name: A.name,
    kind: A.kind == null ? 0 : A.kind + 1,
    startTimeUnixNano: B.encodeHrTime(A.startTime),
    endTimeUnixNano: B.encodeHrTime(A.endTime),
    attributes: Mo.toAttributes(A.attributes),
    droppedAttributesCount: A.droppedAttributesCount,
    events: A.events.map((D) => x82(D, B)),
    droppedEventsCount: A.droppedEventsCount,
    status: { code: I.code, message: I.message },
    links: A.links.map((D) => k82(D, B)),
    droppedLinksCount: A.droppedLinksCount,
  };
}
f82.sdkSpanToOtlpSpan = y82;
function k82(A, B) {
  return {
    attributes: A.attributes ? Mo.toAttributes(A.attributes) : [],
    spanId: B.encodeSpanContext(A.context.spanId),
    traceId: B.encodeSpanContext(A.context.traceId),
    traceState: A.context.traceState?.serialize(),
    droppedAttributesCount: A.droppedAttributesCount || 0,
  };
}
f82.toOtlpLink = k82;
function x82(A, B) {
  return {
    attributes: A.attributes ? Mo.toAttributes(A.attributes) : [],
    name: A.name,
    timeUnixNano: B.encodeHrTime(A.time),
    droppedAttributesCount: A.droppedAttributesCount || 0,
  };
}
f82.toOtlpSpanEvent = x82;
function lg6(A, B) {
  let Q = cg6.getOtlpEncoder(B);
  return { resourceSpans: ng6(A, Q) };
}
f82.createExportTraceServiceRequest = lg6;
function ig6(A) {
  let B = new Map();
  for (let Q of A) {
    let I = B.get(Q.resource);
    if (!I) ((I = new Map()), B.set(Q.resource, I));
    let G = `${Q.instrumentationScope.name}@${Q.instrumentationScope.version || ''}:${Q.instrumentationScope.schemaUrl || ''}`,
      D = I.get(G);
    if (!D) ((D = []), I.set(G, D));
    D.push(Q);
  }
  return B;
}
function ng6(A, B) {
  let Q = ig6(A),
    I = [],
    G = Q.entries(),
    D = G.next();
  while (!D.done) {
    let [Z, Y] = D.value,
      W = [],
      F = Y.values(),
      J = F.next();
    while (!J.done) {
      let X = J.value;
      if (X.length > 0) {
        let V = X.map((K) => y82(K, B));
        W.push({
          scope: Mo.createInstrumentationScope(X[0].instrumentationScope),
          spans: V,
          schemaUrl: X[0].instrumentationScope.schemaUrl,
        });
      }
      J = F.next();
    }
    let C = { resource: Mo.createResource(Z), scopeSpans: W, schemaUrl: void 0 };
    (I.push(C), (D = G.next()));
  }
  return I;
}
