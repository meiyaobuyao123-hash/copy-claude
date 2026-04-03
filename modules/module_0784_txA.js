// Module: txA
// Params: rxA

Object.defineProperty(rxA, '__esModule', { value: !0 });
rxA.headStream = void 0;
async function Bl9(A, B) {
  var Q;
  let I = 0,
    G = [],
    D = A.getReader(),
    Z = !1;
  while (!Z) {
    let { done: F, value: J } = await D.read();
    if (J)
      (G.push(J),
        (I +=
          (Q = J === null || J === void 0 ? void 0 : J.byteLength) !== null && Q !== void 0
            ? Q
            : 0));
    if (I >= B) break;
    Z = F;
  }
  D.releaseLock();
  let Y = new Uint8Array(Math.min(B, I)),
    W = 0;
  for (let F of G) {
    if (F.byteLength > Y.byteLength - W) {
      Y.set(F.subarray(0, Y.byteLength - W), W);
      break;
    } else Y.set(F, W);
    W += F.length;
  }
  return Y;
}
rxA.headStream = Bl9;
