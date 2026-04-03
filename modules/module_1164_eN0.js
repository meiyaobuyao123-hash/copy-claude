// Module: eN0
// Params: oN0

Object.defineProperty(oN0, '__esModule', { value: !0 });
oN0.toBase64 = void 0;
var ka4 = lG(),
  xa4 = DQ(),
  fa4 = (A) => {
    let B;
    if (typeof A === 'string') B = xa4.fromUtf8(A);
    else B = A;
    if (
      typeof B !== 'object' ||
      typeof B.byteOffset !== 'number' ||
      typeof B.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
      );
    return ka4.fromArrayBuffer(B.buffer, B.byteOffset, B.byteLength).toString('base64');
  };
oN0.toBase64 = fa4;
