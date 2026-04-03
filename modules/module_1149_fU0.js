// Module: fU0
// Params: wF8,xU0

var { defineProperty: hD1, getOwnPropertyDescriptor: gl4, getOwnPropertyNames: hl4 } = Object,
  ml4 = Object.prototype.hasOwnProperty,
  rv1 = (A, B) => hD1(A, 'name', { value: B, configurable: !0 }),
  dl4 = (A, B) => {
    for (var Q in B) hD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  ul4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of hl4(B))
        if (!ml4.call(A, G) && G !== Q)
          hD1(A, G, { get: () => B[G], enumerable: !(I = gl4(B, G)) || I.enumerable });
    }
    return A;
  },
  pl4 = (A) => ul4(hD1({}, '__esModule', { value: !0 }), A),
  jU0 = {};
dl4(jU0, { fromUtf8: () => kU0, toUint8Array: () => cl4, toUtf8: () => ll4 });
xU0.exports = pl4(jU0);
var yU0 = _U0(),
  kU0 = rv1((A) => {
    let B = yU0.fromString(A, 'utf8');
    return new Uint8Array(B.buffer, B.byteOffset, B.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }, 'fromUtf8'),
  cl4 = rv1((A) => {
    if (typeof A === 'string') return kU0(A);
    if (ArrayBuffer.isView(A))
      return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(A);
  }, 'toUint8Array'),
  ll4 = rv1((A) => {
    if (typeof A === 'string') return A;
    if (
      typeof A !== 'object' ||
      typeof A.byteOffset !== 'number' ||
      typeof A.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.'
      );
    return yU0.fromArrayBuffer(A.buffer, A.byteOffset, A.byteLength).toString('utf8');
  }, 'toUtf8');
