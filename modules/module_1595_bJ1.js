// Module: bJ1
// Params: Y82

Object.defineProperty(Y82, '__esModule', { value: !0 });
Y82.getOtlpEncoder =
  Y82.encodeAsString =
  Y82.encodeAsLongBits =
  Y82.toLongBits =
  Y82.hrTimeToNanos =
    void 0;
var Gg6 = CD(),
  fl1 = Q82();
function vl1(A) {
  let B = BigInt(1e9);
  return BigInt(A[0]) * B + BigInt(A[1]);
}
Y82.hrTimeToNanos = vl1;
function G82(A) {
  let B = Number(BigInt.asUintN(32, A)),
    Q = Number(BigInt.asUintN(32, A >> BigInt(32)));
  return { low: B, high: Q };
}
Y82.toLongBits = G82;
function bl1(A) {
  let B = vl1(A);
  return G82(B);
}
Y82.encodeAsLongBits = bl1;
function D82(A) {
  return vl1(A).toString();
}
Y82.encodeAsString = D82;
var Dg6 = typeof BigInt !== 'undefined' ? D82 : Gg6.hrTimeToNanoseconds;
function I82(A) {
  return A;
}
function Z82(A) {
  if (A === void 0) return;
  return fl1.hexToBinary(A);
}
var Zg6 = { encodeHrTime: bl1, encodeSpanContext: fl1.hexToBinary, encodeOptionalSpanContext: Z82 };
function Yg6(A) {
  if (A === void 0) return Zg6;
  let B = A.useLongBits ?? !0,
    Q = A.useHex ?? !1;
  return {
    encodeHrTime: B ? bl1 : Dg6,
    encodeSpanContext: Q ? I82 : fl1.hexToBinary,
    encodeOptionalSpanContext: Q ? I82 : Z82,
  };
}
Y82.getOtlpEncoder = Yg6;
