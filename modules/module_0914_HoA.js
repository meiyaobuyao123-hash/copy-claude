// Module: HoA
// Params: VoA

Object.defineProperty(VoA, '__esModule', { value: !0 });
VoA.toBase64 = void 0;
var tD4 = lG(),
  eD4 = DQ(),
  AZ4 = (A) => {
    let B;
    if (typeof A === 'string') B = eD4.fromUtf8(A);
    else B = A;
    if (
      typeof B !== 'object' ||
      typeof B.byteOffset !== 'number' ||
      typeof B.byteLength !== 'number'
    )
      throw new Error(
        '@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.'
      );
    return tD4.fromArrayBuffer(B.buffer, B.byteOffset, B.byteLength).toString('base64');
  };
VoA.toBase64 = AZ4;
