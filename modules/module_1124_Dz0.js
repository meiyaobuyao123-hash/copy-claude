// Module: Dz0
// Params: uW8,Gz0

var { defineProperty: FD1, getOwnPropertyDescriptor: Ld4, getOwnPropertyNames: Rd4 } = Object,
  Od4 = Object.prototype.hasOwnProperty,
  Hv1 = (A, B) => FD1(A, 'name', { value: B, configurable: !0 }),
  Td4 = (A, B) => {
    for (var Q in B) FD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Pd4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Rd4(B))
        if (!Od4.call(A, G) && G !== Q)
          FD1(A, G, { get: () => B[G], enumerable: !(I = Ld4(B, G)) || I.enumerable });
    }
    return A;
  },
  Sd4 = (A) => Pd4(FD1({}, '__esModule', { value: !0 }), A),
  Bz0 = {};
Td4(Bz0, { fromUtf8: () => Iz0, toUint8Array: () => _d4, toUtf8: () => jd4 });
Gz0.exports = Sd4(Bz0);
var Qz0 = WD1(),
  Iz0 = Hv1((A) => {
    let B = Qz0.fromString(A, 'utf8');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }, 'fromUtf8'),
  _d4 = Hv1((A) => {
    if (typeof A === 'string') return Iz0(A);
    if (ArrayBuffer.isView(A))
      return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(A);
  }, 'toUint8Array'),
  jd4 = Hv1((A) => {
    if (typeof A === 'string') return A;
    if (
      typeof A !== 'object' ||
      typeof A.byteOffset !== 'number' ||
      typeof A.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
      );
    return Qz0.fromArrayBuffer(A.buffer, A.byteOffset, A.byteLength).toString('utf8');
  }, 'toUtf8');
