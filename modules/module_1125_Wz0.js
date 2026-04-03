// Module: Wz0
// Params: Zz0

Object.defineProperty(Zz0, '__esModule', { value: !0 });
Zz0.toBase64 = void 0;
var yd4 = WD1(),
  kd4 = Dz0(),
  xd4 = (A) => {
    let B;
    if (typeof A === 'string') B = kd4.fromUtf8(A);
    else B = A;
    if (
      typeof B !== 'object' ||
      typeof B.byteOffset !== 'number' ||
      typeof B.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
      );
    return yd4.fromArrayBuffer(B.buffer, B.byteOffset, B.byteLength).toString('base64');
  };
Zz0.toBase64 = xd4;
