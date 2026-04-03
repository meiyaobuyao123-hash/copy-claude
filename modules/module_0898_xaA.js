// Module: xaA
// Params: yaA

Object.defineProperty(yaA, '__esModule', { value: !0 });
yaA.toBase64 = void 0;
var N74 = lG(),
  $74 = DQ(),
  q74 = (A) => {
    let B;
    if (typeof A === 'string') B = $74.fromUtf8(A);
    else B = A;
    if (
      typeof B !== 'object' ||
      typeof B.byteOffset !== 'number' ||
      typeof B.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
      );
    return N74.fromArrayBuffer(B.buffer, B.byteOffset, B.byteLength).toString('base64');
  };
yaA.toBase64 = q74;
