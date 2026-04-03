// Module: KR1
// Params: sSA

Object.defineProperty(sSA, '__esModule', { value: !0 });
sSA._typedJsonParse = void 0;
var hg9 = pG();
function mg9(A, B, Q) {
  try {
    let I = JSON.parse(A);
    if (I && typeof I === 'object' && B in I) return I;
  } catch (I) {}
  return (hg9.Log.error(`Failed to parse ${Q}`), null);
}
sSA._typedJsonParse = mg9;
