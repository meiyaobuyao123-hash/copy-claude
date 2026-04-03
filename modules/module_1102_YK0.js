// Module: YK0
// Params: DK0

Object.defineProperty(DK0, '__esModule', { value: !0 });
DK0.convertToBuffer = void 0;
var _h4 = Iv1(),
  jh4 =
    typeof Buffer !== 'undefined' && Buffer.from
      ? function (A) {
          return Buffer.from(A, 'utf8');
        }
      : _h4.fromUtf8;
function yh4(A) {
  if (A instanceof Uint8Array) return A;
  if (typeof A === 'string') return jh4(A);
  if (ArrayBuffer.isView(A))
    return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  return new Uint8Array(A);
}
DK0.convertToBuffer = yh4;
