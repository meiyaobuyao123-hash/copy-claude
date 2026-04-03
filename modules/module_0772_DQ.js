// Module: DQ
// Params: hh5,VxA

var { defineProperty: N51, getOwnPropertyDescriptor: Hc9, getOwnPropertyNames: zc9 } = Object,
  wc9 = Object.prototype.hasOwnProperty,
  DO1 = (A, B) => N51(A, 'name', { value: B, configurable: !0 }),
  Ec9 = (A, B) => {
    for (var Q in B) N51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Uc9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of zc9(B))
        if (!wc9.call(A, G) && G !== Q)
          N51(A, G, { get: () => B[G], enumerable: !(I = Hc9(B, G)) || I.enumerable });
    }
    return A;
  },
  Nc9 = (A) => Uc9(N51({}, '__esModule', { value: !0 }), A),
  JxA = {};
Ec9(JxA, { fromUtf8: () => XxA, toUint8Array: () => $c9, toUtf8: () => qc9 });
VxA.exports = Nc9(JxA);
var CxA = lG(),
  XxA = DO1((A) => {
    let B = CxA.fromString(A, 'utf8');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }, 'fromUtf8'),
  $c9 = DO1((A) => {
    if (typeof A === 'string') return XxA(A);
    if (ArrayBuffer.isView(A))
      return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(A);
  }, 'toUint8Array'),
  qc9 = DO1((A) => {
    if (typeof A === 'string') return A;
    if (
      typeof A !== 'object' ||
      typeof A.byteOffset !== 'number' ||
      typeof A.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
      );
    return CxA.fromArrayBuffer(A.buffer, A.byteOffset, A.byteLength).toString('utf8');
  }, 'toUtf8');
