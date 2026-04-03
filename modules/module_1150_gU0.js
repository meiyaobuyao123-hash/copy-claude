// Module: gU0
// Params: vU0

Object.defineProperty(vU0, '__esModule', { value: !0 });
vU0.convertToBuffer = void 0;
var il4 = fU0(),
  nl4 =
    typeof Buffer !== 'undefined' && Buffer.from
      ? function (A) {
          return Buffer.from(A, 'utf8');
        }
      : il4.fromUtf8;
function al4(A) {
  if (A instanceof Uint8Array) return A;
  if (typeof A === 'string') return nl4(A);
  if (ArrayBuffer.isView(A))
    return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  return new Uint8Array(A);
}
vU0.convertToBuffer = al4;
