// Module: rp
// Params: fFA

Object.defineProperty(fFA, '__esModule', { value: !0 });
fFA.timeout = fFA.TimeoutError = void 0;
var HY9 = QY(),
  zY9 = q91(),
  wY9 = w2(),
  EY9 = j4(),
  UY9 = Dq(),
  NY9 = t2(),
  $Y9 = hE();
fFA.TimeoutError = UY9.createErrorClass(function (A) {
  return function B(Q) {
    if (Q === void 0) Q = null;
    (A(this),
      (this.message = 'Timeout has occurred'),
      (this.name = 'TimeoutError'),
      (this.info = Q));
  };
});
function qY9(A, B) {
  var Q = zY9.isValidDate(A) ? { first: A } : typeof A === 'number' ? { each: A } : A,
    I = Q.first,
    G = Q.each,
    D = Q.with,
    Z = D === void 0 ? MY9 : D,
    Y = Q.scheduler,
    W = Y === void 0 ? (B !== null && B !== void 0 ? B : HY9.asyncScheduler) : Y,
    F = Q.meta,
    J = F === void 0 ? null : F;
  if (I == null && G == null) throw new TypeError('No timeout provided.');
  return wY9.operate(function (C, X) {
    var V,
      K,
      U = null,
      N = 0,
      q = function (M) {
        K = $Y9.executeSchedule(
          X,
          W,
          function () {
            try {
              (V.unsubscribe(), EY9.innerFrom(Z({ meta: J, lastValue: U, seen: N })).subscribe(X));
            } catch (R) {
              X.error(R);
            }
          },
          M
        );
      };
    ((V = C.subscribe(
      NY9.createOperatorSubscriber(
        X,
        function (M) {
          (K === null || K === void 0 || K.unsubscribe(), N++, X.next((U = M)), G > 0 && q(G));
        },
        void 0,
        void 0,
        function () {
          if (!(K === null || K === void 0 ? void 0 : K.closed))
            K === null || K === void 0 || K.unsubscribe();
          U = null;
        }
      )
    )),
      !N && q(I != null ? (typeof I === 'number' ? I : +I - W.now()) : G));
  });
}
fFA.timeout = qY9;
function MY9(A) {
  throw new fFA.TimeoutError(A);
}
