// Module: Y$1
// Params: vCA

Object.defineProperty(vCA, '__esModule', { value: !0 });
vCA.catchError = void 0;
var vJ9 = j4(),
  bJ9 = t2(),
  gJ9 = w2();
function fCA(A) {
  return gJ9.operate(function (B, Q) {
    var I = null,
      G = !1,
      D;
    if (
      ((I = B.subscribe(
        bJ9.createOperatorSubscriber(Q, void 0, void 0, function (Z) {
          if (((D = vJ9.innerFrom(A(Z, fCA(A)(B)))), I))
            (I.unsubscribe(), (I = null), D.subscribe(Q));
          else G = !0;
        })
      )),
      G)
    )
      (I.unsubscribe(), (I = null), D.subscribe(Q));
  });
}
vCA.catchError = fCA;
