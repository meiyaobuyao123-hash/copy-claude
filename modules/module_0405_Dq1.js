// Module: Dq1
// Params: MKA

Object.defineProperty(MKA, '__esModule', { value: !0 });
MKA.single = void 0;
var PH9 = Wq(),
  SH9 = uN1(),
  _H9 = dN1(),
  jH9 = w2(),
  yH9 = t2();
function kH9(A) {
  return jH9.operate(function (B, Q) {
    var I = !1,
      G,
      D = !1,
      Z = 0;
    B.subscribe(
      yH9.createOperatorSubscriber(
        Q,
        function (Y) {
          if (((D = !0), !A || A(Y, Z++, B)))
            (I && Q.error(new SH9.SequenceError('Too many matching values')), (I = !0), (G = Y));
        },
        function () {
          if (I) (Q.next(G), Q.complete());
          else Q.error(D ? new _H9.NotFoundError('No matching values') : new PH9.EmptyError());
        }
      )
    );
  });
}
MKA.single = kH9;
