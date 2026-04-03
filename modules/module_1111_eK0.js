// Module: eK0
// Params: oK0

Object.defineProperty(oK0, '__esModule', { value: !0 });
oK0.isEmptyData = void 0;
function sh4(A) {
  if (typeof A === 'string') return A.length === 0;
  return A.byteLength === 0;
}
oK0.isEmptyData = sh4;
