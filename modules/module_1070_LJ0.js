// Module: LJ0
// Params: qJ0

Object.defineProperty(qJ0, '__esModule', { value: !0 });
qJ0.toBase64 = void 0;
var bf4 = lG(),
  gf4 = DQ(),
  hf4 = (A) => {
    let B;
    if (typeof A === 'string') B = gf4.fromUtf8(A);
    else B = A;
    if (
      typeof B !== 'object' ||
      typeof B.byteOffset !== 'number' ||
      typeof B.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
      );
    return bf4.fromArrayBuffer(B.buffer, B.byteOffset, B.byteLength).toString('base64');
  };
qJ0.toBase64 = hf4;
