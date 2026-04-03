// Module: I30
// Params: Ue5,Q30

var TM4 = function A(B) {
  return PM4(B) && !SM4(B);
};
function PM4(A) {
  return !!A && typeof A === 'object';
}
function SM4(A) {
  var B = Object.prototype.toString.call(A);
  return B === '[object RegExp]' || B === '[object Date]' || yM4(A);
}
var _M4 = typeof Symbol === 'function' && Symbol.for,
  jM4 = _M4 ? Symbol.for('react.element') : 60103;
function yM4(A) {
  return A.$$typeof === jM4;
}
function kM4(A) {
  return Array.isArray(A) ? [] : {};
}
function Qn(A, B) {
  return B.clone !== !1 && B.isMergeableObject(A) ? rv(kM4(A), A, B) : A;
}
function xM4(A, B, Q) {
  return A.concat(B).map(function (I) {
    return Qn(I, Q);
  });
}
function fM4(A, B) {
  if (!B.customMerge) return rv;
  var Q = B.customMerge(A);
  return typeof Q === 'function' ? Q : rv;
}
function vM4(A) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(A).filter(function (B) {
        return Object.propertyIsEnumerable.call(A, B);
      })
    : [];
}
function A30(A) {
  return Object.keys(A).concat(vM4(A));
}
function B30(A, B) {
  try {
    return B in A;
  } catch (Q) {
    return !1;
  }
}
function bM4(A, B) {
  return B30(A, B) && !(Object.hasOwnProperty.call(A, B) && Object.propertyIsEnumerable.call(A, B));
}
function gM4(A, B, Q) {
  var I = {};
  if (Q.isMergeableObject(A))
    A30(A).forEach(function (G) {
      I[G] = Qn(A[G], Q);
    });
  return (
    A30(B).forEach(function (G) {
      if (bM4(A, G)) return;
      if (B30(A, G) && Q.isMergeableObject(B[G])) I[G] = fM4(G, Q)(A[G], B[G], Q);
      else I[G] = Qn(B[G], Q);
    }),
    I
  );
}
function rv(A, B, Q) {
  ((Q = Q || {}),
    (Q.arrayMerge = Q.arrayMerge || xM4),
    (Q.isMergeableObject = Q.isMergeableObject || TM4),
    (Q.cloneUnlessOtherwiseSpecified = Qn));
  var I = Array.isArray(B),
    G = Array.isArray(A),
    D = I === G;
  if (!D) return Qn(B, Q);
  else if (I) return Q.arrayMerge(A, B, Q);
  else return gM4(A, B, Q);
}
rv.all = function A(B, Q) {
  if (!Array.isArray(B)) throw new Error('first argument should be an array');
  return B.reduce(function (I, G) {
    return rv(I, G, Q);
  }, {});
};
var hM4 = rv;
Q30.exports = hM4;
