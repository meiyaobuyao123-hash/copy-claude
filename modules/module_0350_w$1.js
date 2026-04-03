// Module: w$1
// Params: VXA

Object.defineProperty(VXA, '__esModule', { value: !0 });
VXA.debounce = void 0;
var hC9 = w2(),
  mC9 = cI(),
  XXA = t2(),
  dC9 = j4();
function uC9(A) {
  return hC9.operate(function (B, Q) {
    var I = !1,
      G = null,
      D = null,
      Z = function () {
        if ((D === null || D === void 0 || D.unsubscribe(), (D = null), I)) {
          I = !1;
          var Y = G;
          ((G = null), Q.next(Y));
        }
      };
    B.subscribe(
      XXA.createOperatorSubscriber(
        Q,
        function (Y) {
          (D === null || D === void 0 || D.unsubscribe(),
            (I = !0),
            (G = Y),
            (D = XXA.createOperatorSubscriber(Q, Z, mC9.noop)),
            dC9.innerFrom(A(Y)).subscribe(D));
        },
        function () {
          (Z(), Q.complete());
        },
        void 0,
        function () {
          G = D = null;
        }
      )
    );
  });
}
VXA.debounce = uC9;
