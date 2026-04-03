// Module: O61
// Params: lSA

Object.defineProperty(lSA, '__esModule', { value: !0 });
lSA.StableID = void 0;
var _g9 = Al(),
  jg9 = pG(),
  pSA = tE(),
  yg9 = L61(),
  R61 = {};
lSA.StableID = {
  get: (A) => {
    if (R61[A] == null) {
      let B = kg9(A);
      if (B == null) ((B = yg9.getUUID()), uSA(B, A));
      R61[A] = B;
    }
    return R61[A];
  },
  setOverride: (A, B) => {
    ((R61[B] = A), uSA(A, B));
  },
};
function cSA(A) {
  return `statsig.stable_id.${_g9._getStorageKey(A)}`;
}
function uSA(A, B) {
  let Q = cSA(B);
  try {
    pSA._setObjectInStorage(Q, A);
  } catch (I) {
    jg9.Log.warn('Failed to save StableID');
  }
}
function kg9(A) {
  let B = cSA(A);
  return pSA._getObjectFromStorage(B);
}
