// Module: VR1
// Params: nSA

Object.defineProperty(nSA, '__esModule', { value: !0 });
nSA._getFullUserHash = nSA._normalizeUser = void 0;
var xg9 = If(),
  fg9 = pG();
function vg9(A, B, Q) {
  try {
    let I = JSON.parse(JSON.stringify(A));
    if (B != null && B.environment != null) I.statsigEnvironment = B.environment;
    else if (Q != null) I.statsigEnvironment = { tier: Q };
    return I;
  } catch (I) {
    return (fg9.Log.error('Failed to JSON.stringify user'), { statsigEnvironment: void 0 });
  }
}
nSA._normalizeUser = vg9;
function bg9(A) {
  return A ? xg9._DJB2Object(A) : null;
}
nSA._getFullUserHash = bg9;
