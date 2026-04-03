// Module: AK0
// Params: tV0

Object.defineProperty(tV0, '__esModule', { value: !0 });
tV0.toUtf8 = tV0.fromUtf8 = void 0;
function Lh4(A) {
  return new TextEncoder().encode(A);
}
tV0.fromUtf8 = Lh4;
function Rh4(A) {
  return new TextDecoder('utf-8').decode(A);
}
tV0.toUtf8 = Rh4;
