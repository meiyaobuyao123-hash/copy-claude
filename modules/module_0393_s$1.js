// Module: s$1
// Params: sVA

Object.defineProperty(sVA, '__esModule', { value: !0 });
sVA.publishReplay = void 0;
var yK9 = H91(),
  kK9 = Bc(),
  aVA = l5();
function xK9(A, B, Q, I) {
  if (Q && !aVA.isFunction(Q)) I = Q;
  var G = aVA.isFunction(Q) ? Q : void 0;
  return function (D) {
    return kK9.multicast(new yK9.ReplaySubject(A, B, I), G)(D);
  };
}
sVA.publishReplay = xK9;
