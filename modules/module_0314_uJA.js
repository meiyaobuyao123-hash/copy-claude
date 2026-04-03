// Module: uJA
// Params: mJA

Object.defineProperty(mJA, '__esModule', { value: !0 });
mJA.merge = void 0;
var KF9 = ik(),
  HF9 = j4(),
  zF9 = qX(),
  hJA = IY(),
  wF9 = mE();
function EF9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = hJA.popScheduler(A),
    I = hJA.popNumber(A, 1 / 0),
    G = A;
  return !G.length
    ? zF9.EMPTY
    : G.length === 1
      ? HF9.innerFrom(G[0])
      : KF9.mergeAll(I)(wF9.from(G, Q));
}
mJA.merge = EF9;
