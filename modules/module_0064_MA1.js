// Module: MA1
// Params: T0A

Object.defineProperty(T0A, '__esModule', { value: !0 });
var bu = tA(),
  bx2 = sO(),
  gx2 = qy(),
  O0A = iZ();
function hx2(A, B) {
  let { fingerprint: Q, span: I, breadcrumbs: G, sdkProcessingMetadata: D } = B;
  if ((dx2(A, B), I)) cx2(A, I);
  (lx2(A, Q), ux2(A, G), px2(A, D));
}
function mx2(A, B) {
  let {
    extra: Q,
    tags: I,
    user: G,
    contexts: D,
    level: Z,
    sdkProcessingMetadata: Y,
    breadcrumbs: W,
    fingerprint: F,
    eventProcessors: J,
    attachments: C,
    propagationContext: X,
    transactionName: V,
    span: K,
  } = B;
  if (
    (My(A, 'extra', Q),
    My(A, 'tags', I),
    My(A, 'user', G),
    My(A, 'contexts', D),
    My(A, 'sdkProcessingMetadata', Y),
    Z)
  )
    A.level = Z;
  if (V) A.transactionName = V;
  if (K) A.span = K;
  if (W.length) A.breadcrumbs = [...A.breadcrumbs, ...W];
  if (F.length) A.fingerprint = [...A.fingerprint, ...F];
  if (J.length) A.eventProcessors = [...A.eventProcessors, ...J];
  if (C.length) A.attachments = [...A.attachments, ...C];
  A.propagationContext = { ...A.propagationContext, ...X };
}
function My(A, B, Q) {
  if (Q && Object.keys(Q).length) {
    A[B] = { ...A[B] };
    for (let I in Q) if (Object.prototype.hasOwnProperty.call(Q, I)) A[B][I] = Q[I];
  }
}
function dx2(A, B) {
  let { extra: Q, tags: I, user: G, contexts: D, level: Z, transactionName: Y } = B,
    W = bu.dropUndefinedKeys(Q);
  if (W && Object.keys(W).length) A.extra = { ...W, ...A.extra };
  let F = bu.dropUndefinedKeys(I);
  if (F && Object.keys(F).length) A.tags = { ...F, ...A.tags };
  let J = bu.dropUndefinedKeys(G);
  if (J && Object.keys(J).length) A.user = { ...J, ...A.user };
  let C = bu.dropUndefinedKeys(D);
  if (C && Object.keys(C).length) A.contexts = { ...C, ...A.contexts };
  if (Z) A.level = Z;
  if (Y) A.transaction = Y;
}
function ux2(A, B) {
  let Q = [...(A.breadcrumbs || []), ...B];
  A.breadcrumbs = Q.length ? Q : void 0;
}
function px2(A, B) {
  A.sdkProcessingMetadata = { ...A.sdkProcessingMetadata, ...B };
}
function cx2(A, B) {
  A.contexts = { trace: O0A.spanToTraceContext(B), ...A.contexts };
  let Q = gx2.getRootSpan(B);
  if (Q) {
    A.sdkProcessingMetadata = {
      dynamicSamplingContext: bx2.getDynamicSamplingContextFromSpan(B),
      ...A.sdkProcessingMetadata,
    };
    let I = O0A.spanToJSON(Q).description;
    if (I) A.tags = { transaction: I, ...A.tags };
  }
}
function lx2(A, B) {
  if (((A.fingerprint = A.fingerprint ? bu.arrayify(A.fingerprint) : []), B))
    A.fingerprint = A.fingerprint.concat(B);
  if (A.fingerprint && !A.fingerprint.length) delete A.fingerprint;
}
T0A.applyScopeDataToEvent = hx2;
T0A.mergeAndOverwriteScopeData = My;
T0A.mergeScopeData = mx2;
