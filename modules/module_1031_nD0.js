// Module: nD0
// Params: FG8,iD0

iD0.exports = lD0;
lD0.sync = iS4;
var pD0 = D1('fs');
function lS4(A, B) {
  var Q = B.pathExt !== void 0 ? B.pathExt : process.env.PATHEXT;
  if (!Q) return !0;
  if (((Q = Q.split(';')), Q.indexOf('') !== -1)) return !0;
  for (var I = 0; I < Q.length; I++) {
    var G = Q[I].toLowerCase();
    if (G && A.substr(-G.length).toLowerCase() === G) return !0;
  }
  return !1;
}
function cD0(A, B, Q) {
  if (!A.isSymbolicLink() && !A.isFile()) return !1;
  return lS4(B, Q);
}
function lD0(A, B, Q) {
  pD0.stat(A, function (I, G) {
    Q(I, I ? !1 : cD0(G, A, B));
  });
}
function iS4(A, B) {
  return cD0(pD0.statSync(A), A, B);
}
