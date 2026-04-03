// Module: Ax
// Params: mXA

Object.defineProperty(mXA, '__esModule', { value: !0 });
mXA.throwIfEmpty = void 0;
var _X9 = Wq(),
  jX9 = w2(),
  yX9 = t2();
function kX9(A) {
  if (A === void 0) A = xX9;
  return jX9.operate(function (B, Q) {
    var I = !1;
    B.subscribe(
      yX9.createOperatorSubscriber(
        Q,
        function (G) {
          ((I = !0), Q.next(G));
        },
        function () {
          return I ? Q.complete() : Q.error(A());
        }
      )
    );
  });
}
mXA.throwIfEmpty = kX9;
function xX9() {
  return new _X9.EmptyError();
}
