// Module: qA1
// Params: E0A

Object.defineProperty(E0A, '__esModule', { value: !0 });
var MW = tA(),
  Uk2 = Ny(),
  K0A = xu(),
  _w1 = LA1(),
  Sw1 = MA1(),
  Nk2 = iZ();
function $k2(A, B, Q, I, G, D) {
  let { normalizeDepth: Z = 3, normalizeMaxBreadth: Y = 1000 } = A,
    W = {
      ...B,
      event_id: B.event_id || Q.event_id || MW.uuid4(),
      timestamp: B.timestamp || MW.dateTimestampInSeconds(),
    },
    F = Q.integrations || A.integrations.map((N) => N.name);
  if ((qk2(W, A), Mk2(W, F), B.type === void 0)) z0A(W, A.stackParser);
  let J = Rk2(I, Q.captureContext);
  if (Q.mechanism) MW.addExceptionMechanism(W, Q.mechanism);
  let C = G && G.getEventProcessors ? G.getEventProcessors() : [],
    X = _w1.getGlobalScope().getScopeData();
  if (D) {
    let N = D.getScopeData();
    Sw1.mergeScopeData(X, N);
  }
  if (J) {
    let N = J.getScopeData();
    Sw1.mergeScopeData(X, N);
  }
  let V = [...(Q.attachments || []), ...X.attachments];
  if (V.length) Q.attachments = V;
  Sw1.applyScopeDataToEvent(W, X);
  let K = [...C, ...K0A.getGlobalEventProcessors(), ...X.eventProcessors];
  return K0A.notifyEventProcessors(K, W, Q).then((N) => {
    if (N) w0A(N);
    if (typeof Z === 'number' && Z > 0) return Lk2(N, Z, Y);
    return N;
  });
}
function qk2(A, B) {
  let { environment: Q, release: I, dist: G, maxValueLength: D = 250 } = B;
  if (!('environment' in A)) A.environment = 'environment' in B ? Q : Uk2.DEFAULT_ENVIRONMENT;
  if (A.release === void 0 && I !== void 0) A.release = I;
  if (A.dist === void 0 && G !== void 0) A.dist = G;
  if (A.message) A.message = MW.truncate(A.message, D);
  let Z = A.exception && A.exception.values && A.exception.values[0];
  if (Z && Z.value) Z.value = MW.truncate(Z.value, D);
  let Y = A.request;
  if (Y && Y.url) Y.url = MW.truncate(Y.url, D);
}
var H0A = new WeakMap();
function z0A(A, B) {
  let Q = MW.GLOBAL_OBJ._sentryDebugIds;
  if (!Q) return;
  let I,
    G = H0A.get(B);
  if (G) I = G;
  else ((I = new Map()), H0A.set(B, I));
  let D = Object.keys(Q).reduce((Z, Y) => {
    let W,
      F = I.get(Y);
    if (F) W = F;
    else ((W = B(Y)), I.set(Y, W));
    for (let J = W.length - 1; J >= 0; J--) {
      let C = W[J];
      if (C.filename) {
        Z[C.filename] = Q[Y];
        break;
      }
    }
    return Z;
  }, {});
  try {
    A.exception.values.forEach((Z) => {
      Z.stacktrace.frames.forEach((Y) => {
        if (Y.filename) Y.debug_id = D[Y.filename];
      });
    });
  } catch (Z) {}
}
function w0A(A) {
  let B = {};
  try {
    A.exception.values.forEach((I) => {
      I.stacktrace.frames.forEach((G) => {
        if (G.debug_id) {
          if (G.abs_path) B[G.abs_path] = G.debug_id;
          else if (G.filename) B[G.filename] = G.debug_id;
          delete G.debug_id;
        }
      });
    });
  } catch (I) {}
  if (Object.keys(B).length === 0) return;
  ((A.debug_meta = A.debug_meta || {}), (A.debug_meta.images = A.debug_meta.images || []));
  let Q = A.debug_meta.images;
  Object.keys(B).forEach((I) => {
    Q.push({ type: 'sourcemap', code_file: I, debug_id: B[I] });
  });
}
function Mk2(A, B) {
  if (B.length > 0)
    ((A.sdk = A.sdk || {}), (A.sdk.integrations = [...(A.sdk.integrations || []), ...B]));
}
function Lk2(A, B, Q) {
  if (!A) return null;
  let I = {
    ...A,
    ...(A.breadcrumbs && {
      breadcrumbs: A.breadcrumbs.map((G) => ({
        ...G,
        ...(G.data && { data: MW.normalize(G.data, B, Q) }),
      })),
    }),
    ...(A.user && { user: MW.normalize(A.user, B, Q) }),
    ...(A.contexts && { contexts: MW.normalize(A.contexts, B, Q) }),
    ...(A.extra && { extra: MW.normalize(A.extra, B, Q) }),
  };
  if (A.contexts && A.contexts.trace && I.contexts) {
    if (((I.contexts.trace = A.contexts.trace), A.contexts.trace.data))
      I.contexts.trace.data = MW.normalize(A.contexts.trace.data, B, Q);
  }
  if (A.spans)
    I.spans = A.spans.map((G) => {
      let D = Nk2.spanToJSON(G).data;
      if (D) G.data = MW.normalize(D, B, Q);
      return G;
    });
  return I;
}
function Rk2(A, B) {
  if (!B) return A;
  let Q = A ? A.clone() : new _w1.Scope();
  return (Q.update(B), Q);
}
function Ok2(A) {
  if (!A) return;
  if (Tk2(A)) return { captureContext: A };
  if (Sk2(A)) return { captureContext: A };
  return A;
}
function Tk2(A) {
  return A instanceof _w1.Scope || typeof A === 'function';
}
var Pk2 = [
  'user',
  'level',
  'extra',
  'contexts',
  'tags',
  'fingerprint',
  'requestSession',
  'propagationContext',
];
function Sk2(A) {
  return Object.keys(A).some((B) => Pk2.includes(B));
}
E0A.applyDebugIds = z0A;
E0A.applyDebugMeta = w0A;
E0A.parseEventHintOrCaptureContext = Ok2;
E0A.prepareEvent = $k2;
