// Module: _l
// Params: YpA

Object.defineProperty(YpA, '__esModule', { value: !0 });
YpA.default = void 0;
YpA.unsafeStringify = ZpA;
var t24 = e24(Sl());
function e24(A) {
  return A && A.__esModule ? A : { default: A };
}
var tI = [];
for (let A = 0; A < 256; ++A) tI.push((A + 256).toString(16).slice(1));
function ZpA(A, B = 0) {
  return (
    tI[A[B + 0]] +
    tI[A[B + 1]] +
    tI[A[B + 2]] +
    tI[A[B + 3]] +
    '-' +
    tI[A[B + 4]] +
    tI[A[B + 5]] +
    '-' +
    tI[A[B + 6]] +
    tI[A[B + 7]] +
    '-' +
    tI[A[B + 8]] +
    tI[A[B + 9]] +
    '-' +
    tI[A[B + 10]] +
    tI[A[B + 11]] +
    tI[A[B + 12]] +
    tI[A[B + 13]] +
    tI[A[B + 14]] +
    tI[A[B + 15]]
  );
}
function A94(A, B = 0) {
  let Q = ZpA(A, B);
  if (!t24.default(Q)) throw TypeError('Stringified UUID is invalid');
  return Q;
}
var B94 = A94;
YpA.default = B94;
