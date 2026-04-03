// Module: si0
// Params: ni0

Object.defineProperty(ni0, '__esModule', { value: !0 });
ni0.isAttributeValue = ni0.isAttributeKey = ni0.sanitizeAttributes = void 0;
var pi0 = C4();
function S$6(A) {
  let B = {};
  if (typeof A !== 'object' || A == null) return B;
  for (let [Q, I] of Object.entries(A)) {
    if (!ci0(Q)) {
      pi0.diag.warn(`Invalid attribute key: ${Q}`);
      continue;
    }
    if (!li0(I)) {
      pi0.diag.warn(`Invalid attribute value set for key: ${Q}`);
      continue;
    }
    if (Array.isArray(I)) B[Q] = I.slice();
    else B[Q] = I;
  }
  return B;
}
ni0.sanitizeAttributes = S$6;
function ci0(A) {
  return typeof A === 'string' && A.length > 0;
}
ni0.isAttributeKey = ci0;
function li0(A) {
  if (A == null) return !0;
  if (Array.isArray(A)) return _$6(A);
  return ii0(A);
}
ni0.isAttributeValue = li0;
function _$6(A) {
  let B;
  for (let Q of A) {
    if (Q == null) continue;
    if (!B) {
      if (ii0(Q)) {
        B = typeof Q;
        continue;
      }
      return !1;
    }
    if (typeof Q === B) continue;
    return !1;
  }
  return !0;
}
function ii0(A) {
  switch (typeof A) {
    case 'number':
    case 'boolean':
    case 'string':
      return !0;
  }
  return !1;
}
