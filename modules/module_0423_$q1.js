// Module: $q1
// Params: VHA

Object.defineProperty(VHA, '__esModule', { value: !0 });
VHA.window = void 0;
var CHA = iI(),
  hz9 = w2(),
  XHA = t2(),
  mz9 = cI(),
  dz9 = j4();
function uz9(A) {
  return hz9.operate(function (B, Q) {
    var I = new CHA.Subject();
    Q.next(I.asObservable());
    var G = function (D) {
      (I.error(D), Q.error(D));
    };
    return (
      B.subscribe(
        XHA.createOperatorSubscriber(
          Q,
          function (D) {
            return I === null || I === void 0 ? void 0 : I.next(D);
          },
          function () {
            (I.complete(), Q.complete());
          },
          G
        )
      ),
      dz9.innerFrom(A).subscribe(
        XHA.createOperatorSubscriber(
          Q,
          function () {
            (I.complete(), Q.next((I = new CHA.Subject())));
          },
          mz9.noop,
          G
        )
      ),
      function () {
        (I === null || I === void 0 || I.unsubscribe(), (I = null));
      }
    );
  });
}
VHA.window = uz9;
