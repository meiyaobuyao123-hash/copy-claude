// Module: kpA
// Params: jpA

Object.defineProperty(jpA, '__esModule', { value: !0 });
jpA.default = void 0;
var SpA = _pA(PpA()),
  _94 = _pA(ST1()),
  j94 = _l();
function _pA(A) {
  return A && A.__esModule ? A : { default: A };
}
function y94(A, B, Q) {
  if (SpA.default.randomUUID && !B && !A) return SpA.default.randomUUID();
  A = A || {};
  let I = A.random || (A.rng || _94.default)();
  if (((I[6] = (I[6] & 15) | 64), (I[8] = (I[8] & 63) | 128), B)) {
    Q = Q || 0;
    for (let G = 0; G < 16; ++G) B[Q + G] = I[G];
    return B;
  }
  return j94.unsafeStringify(I);
}
var k94 = y94;
jpA.default = k94;
