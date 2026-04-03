// Module: pz0
// Params: oW8,uz0

var { defineProperty: ED1, getOwnPropertyDescriptor: ku4, getOwnPropertyNames: xu4 } = Object,
  fu4 = Object.prototype.hasOwnProperty,
  Lv1 = (A, B) => ED1(A, 'name', { value: B, configurable: !0 }),
  vu4 = (A, B) => {
    for (var Q in B) ED1(A, Q, { get: B[Q], enumerable: !0 });
  },
  bu4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of xu4(B))
        if (!fu4.call(A, G) && G !== Q)
          ED1(A, G, { get: () => B[G], enumerable: !(I = ku4(B, G)) || I.enumerable });
    }
    return A;
  },
  gu4 = (A) => bu4(ED1({}, '__esModule', { value: !0 }), A),
  hz0 = {};
vu4(hz0, { fromUtf8: () => dz0, toUint8Array: () => hu4, toUtf8: () => mu4 });
uz0.exports = gu4(hz0);
var mz0 = Mv1(),
  dz0 = Lv1((A) => {
    let B = mz0.fromString(A, 'utf8');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }, 'fromUtf8'),
  hu4 = Lv1((A) => {
    if (typeof A === 'string') return dz0(A);
    if (ArrayBuffer.isView(A))
      return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(A);
  }, 'toUint8Array'),
  mu4 = Lv1((A) => {
    if (typeof A === 'string') return A;
    if (
      typeof A !== 'object' ||
      typeof A.byteOffset !== 'number' ||
      typeof A.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
      );
    return mz0.fromArrayBuffer(A.buffer, A.byteOffset, A.byteLength).toString('utf8');
  }, 'toUtf8');
