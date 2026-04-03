// Module: pZ0
// Params: iG8,uZ0

var za = Bf1();
function s_4(A, B) {
  if (((A = za.trimRight(A)), A[A.length - 1] !== ';')) A += ';';
  var Q = A.length,
    I = !1,
    G = 0,
    D = 0,
    Z = '';
  function Y() {
    if (!I) {
      var J = za.trim(A.slice(G, D)),
        C = J.indexOf(':');
      if (C !== -1) {
        var X = za.trim(J.slice(0, C)),
          V = za.trim(J.slice(C + 1));
        if (X) {
          var K = B(G, Z.length, X, V, J);
          if (K) Z += K + '; ';
        }
      }
    }
    G = D + 1;
  }
  for (; D < Q; D++) {
    var W = A[D];
    if (W === '/' && A[D + 1] === '*') {
      var F = A.indexOf('*/', D + 2);
      if (F === -1) break;
      ((D = F + 1), (G = D + 1), (I = !1));
    } else if (W === '(') I = !0;
    else if (W === ')') I = !1;
    else if (W === ';')
      if (I);
      else Y();
    else if (
      W ===
      `
`
    )
      Y();
  }
  return za.trim(Z);
}
uZ0.exports = s_4;
