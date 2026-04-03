// Module: zxA
// Params: KxA

Object.defineProperty(KxA, '__esModule', { value: !0 });
KxA.toBase64 = void 0;
var Mc9 = lG(),
  Lc9 = DQ(),
  Rc9 = (A) => {
    let B;
    if (typeof A === 'string') B = Lc9.fromUtf8(A);
    else B = A;
    if (
      typeof B !== 'object' ||
      typeof B.byteOffset !== 'number' ||
      typeof B.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
      );
    return Mc9.fromArrayBuffer(B.buffer, B.byteOffset, B.byteLength).toString('base64');
  };
KxA.toBase64 = Rc9;
