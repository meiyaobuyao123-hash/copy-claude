// Module: Al
// Params: KSA

Object.defineProperty(KSA, '__esModule', { value: !0 });
KSA._getStorageKey = KSA._getUserStorageKey = void 0;
var XSA = If();
function VSA(A, B, Q) {
  var I;
  if (Q) return Q(A, B);
  let G = B && B.customIDs ? B.customIDs : {},
    D = [
      `uid:${(I = B === null || B === void 0 ? void 0 : B.userID) !== null && I !== void 0 ? I : ''}`,
      `cids:${Object.keys(G)
        .sort((Z, Y) => Z.localeCompare(Y))
        .map((Z) => `${Z}-${G[Z]}`)
        .join(',')}`,
      `k:${A}`,
    ];
  return XSA._DJB2(D.join('|'));
}
KSA._getUserStorageKey = VSA;
function hb9(A, B, Q) {
  if (B) return VSA(A, B, Q);
  return XSA._DJB2(`k:${A}`);
}
KSA._getStorageKey = hb9;
