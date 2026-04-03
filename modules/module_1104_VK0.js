// Module: VK0
// Params: CK0

Object.defineProperty(CK0, '__esModule', { value: !0 });
CK0.numToUint8 = void 0;
function xh4(A) {
  return new Uint8Array([(A & 4278190080) >> 24, (A & 16711680) >> 16, (A & 65280) >> 8, A & 255]);
}
CK0.numToUint8 = xh4;
