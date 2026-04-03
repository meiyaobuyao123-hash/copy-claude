// Module: MO1
// Params: Mm5,vH

var { defineProperty: b51, getOwnPropertyDescriptor: Mn9, getOwnPropertyNames: Ln9 } = Object,
  Rn9 = Object.prototype.hasOwnProperty,
  qO1 = (A, B) => b51(A, 'name', { value: B, configurable: !0 }),
  On9 = (A, B) => {
    for (var Q in B) b51(A, Q, { get: B[Q], enumerable: !0 });
  },
  NO1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Ln9(B))
        if (!Rn9.call(A, G) && G !== Q)
          b51(A, G, { get: () => B[G], enumerable: !(I = Mn9(B, G)) || I.enumerable });
    }
    return A;
  },
  BM = (A, B, Q) => (NO1(A, B, 'default'), Q && NO1(Q, B, 'default')),
  Tn9 = (A) => NO1(b51({}, '__esModule', { value: !0 }), A),
  fH = {};
On9(fH, { Uint8ArrayBlobAdapter: () => $O1 });
vH.exports = Tn9(fH);
var pvA = Nf(),
  cvA = DQ();
function lvA(A, B = 'utf-8') {
  if (B === 'base64') return pvA.toBase64(A);
  return cvA.toUtf8(A);
}
qO1(lvA, 'transformToString');
function ivA(A, B) {
  if (B === 'base64') return $O1.mutate(pvA.fromBase64(A));
  return $O1.mutate(cvA.fromUtf8(A));
}
qO1(ivA, 'transformFromString');
var $O1 = class A extends Uint8Array {
  static {
    qO1(this, 'Uint8ArrayBlobAdapter');
  }
  static fromString(B, Q = 'utf-8') {
    switch (typeof B) {
      case 'string':
        return ivA(B, Q);
      default:
        throw new Error(`Unsupported conversion from ${typeof B} to Uint8ArrayBlobAdapter.`);
    }
  }
  static mutate(B) {
    return (Object.setPrototypeOf(B, A.prototype), B);
  }
  transformToString(B = 'utf-8') {
    return lvA(this, B);
  }
};
BM(fH, WO1(), vH.exports);
BM(fH, kxA(), vH.exports);
BM(fH, ixA(), vH.exports);
BM(fH, sxA(), vH.exports);
BM(fH, QfA(), vH.exports);
BM(fH, xvA(), vH.exports);
BM(fH, uvA(), vH.exports);
BM(fH, tq(), vH.exports);
