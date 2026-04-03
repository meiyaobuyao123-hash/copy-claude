// Module: Ua
// Params: mZ8,DW0

var { defineProperty: KG1, getOwnPropertyDescriptor: ey4, getOwnPropertyNames: Ak4 } = Object,
  Bk4 = Object.prototype.hasOwnProperty,
  Xf1 = (A, B) => KG1(A, 'name', { value: B, configurable: !0 }),
  Qk4 = (A, B) => {
    for (var Q in B) KG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ik4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Ak4(B))
        if (!Bk4.call(A, G) && G !== Q)
          KG1(A, G, { get: () => B[G], enumerable: !(I = ey4(B, G)) || I.enumerable });
    }
    return A;
  },
  Gk4 = (A) => Ik4(KG1({}, '__esModule', { value: !0 }), A),
  QW0 = {};
Qk4(QW0, { fromUtf8: () => GW0, toUint8Array: () => Dk4, toUtf8: () => Zk4 });
DW0.exports = Gk4(QW0);
var IW0 = BW0(),
  GW0 = Xf1((A) => {
    let B = IW0.fromString(A, 'utf8');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }, 'fromUtf8'),
  Dk4 = Xf1((A) => {
    if (typeof A === 'string') return GW0(A);
    if (ArrayBuffer.isView(A))
      return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(A);
  }, 'toUint8Array'),
  Zk4 = Xf1((A) => {
    if (typeof A === 'string') return A;
    if (
      typeof A !== 'object' ||
      typeof A.byteOffset !== 'number' ||
      typeof A.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
      );
    return IW0.fromArrayBuffer(A.buffer, A.byteOffset, A.byteLength).toString('utf8');
  }, 'toUtf8');
