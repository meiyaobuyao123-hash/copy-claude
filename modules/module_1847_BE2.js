// Module: BE2
// Params: is8,AE2

AE2.exports = function (A, B) {
  B = B || process.argv;
  var Q = B.indexOf('--'),
    I = /^-{1,2}/.test(A) ? '' : '--',
    G = B.indexOf(I + A);
  return G !== -1 && (Q === -1 ? !0 : G < Q);
};
