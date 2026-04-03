// Module: sO
// Params: R0A

Object.defineProperty(R0A, '__esModule', { value: !0 });
var jx2 = tA(),
  yx2 = Ny(),
  M0A = DJ(),
  kx2 = qy(),
  xw1 = iZ();
function L0A(A, B, Q) {
  let I = B.getOptions(),
    { publicKey: G } = B.getDsn() || {},
    { segment: D } = (Q && Q.getUser()) || {},
    Z = jx2.dropUndefinedKeys({
      environment: I.environment || yx2.DEFAULT_ENVIRONMENT,
      release: I.release,
      user_segment: D,
      public_key: G,
      trace_id: A,
    });
  return (B.emit && B.emit('createDsc', Z), Z);
}
function xx2(A) {
  let B = M0A.getClient();
  if (!B) return {};
  let Q = L0A(xw1.spanToJSON(A).trace_id || '', B, M0A.getCurrentScope()),
    I = kx2.getRootSpan(A);
  if (!I) return Q;
  let G = I && I._frozenDynamicSamplingContext;
  if (G) return G;
  let { sampleRate: D, source: Z } = I.metadata;
  if (D != null) Q.sample_rate = `${D}`;
  let Y = xw1.spanToJSON(I);
  if (Z && Z !== 'url') Q.transaction = Y.description;
  return ((Q.sampled = String(xw1.spanIsSampled(I))), B.emit && B.emit('createDsc', Q), Q);
}
R0A.getDynamicSamplingContextFromClient = L0A;
R0A.getDynamicSamplingContextFromSpan = xx2;
