// Module: cU0
// Params: uU0

Object.defineProperty(uU0, '__esModule', { value: !0 });
uU0.numToUint8 = void 0;
function rl4(A) {
  return new Uint8Array([(A & 4278190080) >> 24, (A & 16711680) >> 16, (A & 65280) >> 8, A & 255]);
}
uU0.numToUint8 = rl4;
