// Module: tD0
// Params: JG8,oD0

oD0.exports = sD0;
sD0.sync = nS4;
var aD0 = D1('fs');
function sD0(A, B, Q) {
  aD0.stat(A, function (I, G) {
    Q(I, I ? !1 : rD0(G, B));
  });
}
function nS4(A, B) {
  return rD0(aD0.statSync(A), B);
}
function rD0(A, B) {
  return A.isFile() && aS4(A, B);
}
function aS4(A, B) {
  var { mode: Q, uid: I, gid: G } = A,
    D = B.uid !== void 0 ? B.uid : process.getuid && process.getuid(),
    Z = B.gid !== void 0 ? B.gid : process.getgid && process.getgid(),
    Y = parseInt('100', 8),
    W = parseInt('010', 8),
    F = parseInt('001', 8),
    J = Y | W,
    C = Q & F || (Q & W && G === Z) || (Q & Y && I === D) || (Q & J && D === 0);
  return C;
}
