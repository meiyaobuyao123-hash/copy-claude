// Module: Uw0
// Params: BF8,$D1

var { defineProperty: UD1, getOwnPropertyDescriptor: Vp4, getOwnPropertyNames: Kp4 } = Object,
  Hp4 = Object.prototype.hasOwnProperty,
  jv1 = (A, B) => UD1(A, 'name', { value: B, configurable: !0 }),
  zp4 = (A, B) => {
    for (var Q in B) UD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Sv1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Kp4(B))
        if (!Hp4.call(A, G) && G !== Q)
          UD1(A, G, { get: () => B[G], enumerable: !(I = Vp4(B, G)) || I.enumerable });
    }
    return A;
  },
  Vw0 = (A, B, Q) => (Sv1(A, B, 'default'), Q && Sv1(Q, B, 'default')),
  wp4 = (A) => Sv1(UD1({}, '__esModule', { value: !0 }), A),
  ND1 = {};
zp4(ND1, { Uint8ArrayBlobAdapter: () => _v1 });
$D1.exports = wp4(ND1);
var Kw0 = CD1(),
  Hw0 = pz0();
function zw0(A, B = 'utf-8') {
  if (B === 'base64') return Kw0.toBase64(A);
  return Hw0.toUtf8(A);
}
jv1(zw0, 'transformToString');
function ww0(A, B) {
  if (B === 'base64') return _v1.mutate(Kw0.fromBase64(A));
  return _v1.mutate(Hw0.fromUtf8(A));
}
jv1(ww0, 'transformFromString');
var Ew0 = class A extends Uint8Array {
  static fromString(B, Q = 'utf-8') {
    switch (typeof B) {
      case 'string':
        return ww0(B, Q);
      default:
        throw new Error(`Unsupported conversion from ${typeof B} to Uint8ArrayBlobAdapter.`);
    }
  }
  static mutate(B) {
    return (Object.setPrototypeOf(B, A.prototype), B);
  }
  transformToString(B = 'utf-8') {
    return zw0(this, B);
  }
};
jv1(Ew0, 'Uint8ArrayBlobAdapter');
var _v1 = Ew0;
Vw0(ND1, iz0(), $D1.exports);
Vw0(ND1, Xw0(), $D1.exports);
