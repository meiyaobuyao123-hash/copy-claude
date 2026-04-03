// Module: Bf1
// Params: lG8,dZ0

dZ0.exports = {
  indexOf: function (A, B) {
    var Q, I;
    if (Array.prototype.indexOf) return A.indexOf(B);
    for (Q = 0, I = A.length; Q < I; Q++) if (A[Q] === B) return Q;
    return -1;
  },
  forEach: function (A, B, Q) {
    var I, G;
    if (Array.prototype.forEach) return A.forEach(B, Q);
    for (I = 0, G = A.length; I < G; I++) B.call(Q, A[I], I, A);
  },
  trim: function (A) {
    if (String.prototype.trim) return A.trim();
    return A.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (A) {
    if (String.prototype.trimRight) return A.trimRight();
    return A.replace(/(\s*$)/g, '');
  },
};
