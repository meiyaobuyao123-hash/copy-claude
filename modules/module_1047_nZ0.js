// Module: nZ0
// Params: aG8,iZ0

var eI1 = Af1(),
  r_4 = pZ0(),
  nG8 = Bf1();
function cZ0(A) {
  return A === void 0 || A === null;
}
function o_4(A) {
  var B = {};
  for (var Q in A) B[Q] = A[Q];
  return B;
}
function lZ0(A) {
  ((A = o_4(A || {})),
    (A.whiteList = A.whiteList || eI1.whiteList),
    (A.onAttr = A.onAttr || eI1.onAttr),
    (A.onIgnoreAttr = A.onIgnoreAttr || eI1.onIgnoreAttr),
    (A.safeAttrValue = A.safeAttrValue || eI1.safeAttrValue),
    (this.options = A));
}
lZ0.prototype.process = function (A) {
  if (((A = A || ''), (A = A.toString()), !A)) return '';
  var B = this,
    Q = B.options,
    I = Q.whiteList,
    G = Q.onAttr,
    D = Q.onIgnoreAttr,
    Z = Q.safeAttrValue,
    Y = r_4(A, function (W, F, J, C, X) {
      var V = I[J],
        K = !1;
      if (V === !0) K = V;
      else if (typeof V === 'function') K = V(C);
      else if (V instanceof RegExp) K = V.test(C);
      if (K !== !0) K = !1;
      if (((C = Z(J, C)), !C)) return;
      var U = { position: F, sourcePosition: W, source: X, isWhite: K };
      if (K) {
        var N = G(J, C, U);
        if (cZ0(N)) return J + ':' + C;
        else return N;
      } else {
        var N = D(J, C, U);
        if (!cZ0(N)) return N;
      }
    });
  return Y;
};
iZ0.exports = lZ0;
