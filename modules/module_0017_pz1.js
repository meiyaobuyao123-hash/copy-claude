// Module: pz1
// Params: X1A

Object.defineProperty(X1A, '__esModule', { value: !0 });
var HR2 = IJ(),
  zR2 = dz1(),
  F1A = fG(),
  Lu = wE();
function wR2(A) {
  (Lu.addHandler('fetch', A), Lu.maybeInstrument('fetch', ER2));
}
function ER2() {
  if (!zR2.supportsNativeFetch()) return;
  HR2.fill(F1A.GLOBAL_OBJ, 'fetch', function (A) {
    return function (...B) {
      let { method: Q, url: I } = C1A(B),
        G = { args: B, fetchData: { method: Q, url: I }, startTimestamp: Date.now() };
      return (
        Lu.triggerHandlers('fetch', { ...G }),
        A.apply(F1A.GLOBAL_OBJ, B).then(
          (D) => {
            let Z = { ...G, endTimestamp: Date.now(), response: D };
            return (Lu.triggerHandlers('fetch', Z), D);
          },
          (D) => {
            let Z = { ...G, endTimestamp: Date.now(), error: D };
            throw (Lu.triggerHandlers('fetch', Z), D);
          }
        )
      );
    };
  });
}
function uz1(A, B) {
  return !!A && typeof A === 'object' && !!A[B];
}
function J1A(A) {
  if (typeof A === 'string') return A;
  if (!A) return '';
  if (uz1(A, 'url')) return A.url;
  if (A.toString) return A.toString();
  return '';
}
function C1A(A) {
  if (A.length === 0) return { method: 'GET', url: '' };
  if (A.length === 2) {
    let [Q, I] = A;
    return { url: J1A(Q), method: uz1(I, 'method') ? String(I.method).toUpperCase() : 'GET' };
  }
  let B = A[0];
  return { url: J1A(B), method: uz1(B, 'method') ? String(B.method).toUpperCase() : 'GET' };
}
X1A.addFetchInstrumentationHandler = wR2;
X1A.parseFetchArgs = C1A;
