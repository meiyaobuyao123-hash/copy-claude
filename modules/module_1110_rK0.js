// Module: rK0
// Params: aK0

Object.defineProperty(aK0, '__esModule', { value: !0 });
aK0.convertToBuffer = void 0;
var ih4 = Iv1(),
  nh4 =
    typeof Buffer !== 'undefined' && Buffer.from
      ? function (A) {
          return Buffer.from(A, 'utf8');
        }
      : ih4.fromUtf8;
function ah4(A) {
  if (A instanceof Uint8Array) return A;
  if (typeof A === 'string') return nh4(A);
  if (ArrayBuffer.isView(A))
    return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  return new Uint8Array(A);
}
aK0.convertToBuffer = ah4;
