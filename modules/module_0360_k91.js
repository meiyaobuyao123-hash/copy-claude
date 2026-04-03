// Module: k91
// Params: vXA

Object.defineProperty(vXA, '__esModule', { value: !0 });
vXA.distinctUntilChanged = void 0;
var MX9 = lI(),
  LX9 = w2(),
  RX9 = t2();
function OX9(A, B) {
  if (B === void 0) B = MX9.identity;
  return (
    (A = A !== null && A !== void 0 ? A : TX9),
    LX9.operate(function (Q, I) {
      var G,
        D = !0;
      Q.subscribe(
        RX9.createOperatorSubscriber(I, function (Z) {
          var Y = B(Z);
          if (D || !A(G, Y)) ((D = !1), (G = Y), I.next(Z));
        })
      );
    })
  );
}
vXA.distinctUntilChanged = OX9;
function TX9(A, B) {
  return A === B;
}
