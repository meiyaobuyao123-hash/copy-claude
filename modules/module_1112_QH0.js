// Module: QH0
// Params: AH0

Object.defineProperty(AH0, '__esModule', { value: !0 });
AH0.numToUint8 = void 0;
function rh4(A) {
  return new Uint8Array([(A & 4278190080) >> 24, (A & 16711680) >> 16, (A & 65280) >> 8, A & 255]);
}
AH0.numToUint8 = rh4;
