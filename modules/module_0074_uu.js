// Module: uu
// Params: o0A

Object.defineProperty(o0A, '__esModule', { value: !0 });
var Wv2 = tA();
vQ();
jA1();
Ry();
var Fv2 = vA1(),
  du;
function r0A(A) {
  return du ? du.get(A) : void 0;
}
function Jv2(A) {
  let B = r0A(A);
  if (!B) return;
  let Q = {};
  for (let [, [I, G]] of B) {
    if (!Q[I]) Q[I] = [];
    Q[I].push(Wv2.dropUndefinedKeys(G));
  }
  return Q;
}
function Cv2(A, B, Q, I, G, D) {
  let Z = Fv2.getActiveSpan();
  if (Z) {
    let Y = r0A(Z) || new Map(),
      W = `${A}:${B}@${I}`,
      F = Y.get(D);
    if (F) {
      let [, J] = F;
      Y.set(D, [
        W,
        {
          min: Math.min(J.min, Q),
          max: Math.max(J.max, Q),
          count: (J.count += 1),
          sum: (J.sum += Q),
          tags: J.tags,
        },
      ]);
    } else Y.set(D, [W, { min: Q, max: Q, count: 1, sum: Q, tags: G }]);
    if (!du) du = new WeakMap();
    du.set(Z, Y);
  }
}
o0A.getMetricSummaryJsonForSpan = Jv2;
o0A.updateMetricSummaryOnActiveSpan = Cv2;
