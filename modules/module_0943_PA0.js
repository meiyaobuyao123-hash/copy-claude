// Module: PA0
// Params: OA0

Object.defineProperty(OA0, '__esModule', { value: !0 });
OA0.toBase64 = void 0;
var KX4 = lG(),
  HX4 = DQ(),
  zX4 = (A) => {
    let B;
    if (typeof A === 'string') B = HX4.fromUtf8(A);
    else B = A;
    if (
      typeof B !== 'object' ||
      typeof B.byteOffset !== 'number' ||
      typeof B.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
      );
    return KX4.fromArrayBuffer(B.buffer, B.byteOffset, B.byteLength).toString('base64');
  };
OA0.toBase64 = zX4;
