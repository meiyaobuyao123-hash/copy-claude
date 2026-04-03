// Module: ck
// Params: fWA

Object.defineProperty(fWA, '__esModule', { value: !0 });
fWA.observeOn = void 0;
var fN1 = hE(),
  IZ9 = w2(),
  GZ9 = t2();
function DZ9(A, B) {
  if (B === void 0) B = 0;
  return IZ9.operate(function (Q, I) {
    Q.subscribe(
      GZ9.createOperatorSubscriber(
        I,
        function (G) {
          return fN1.executeSchedule(
            I,
            A,
            function () {
              return I.next(G);
            },
            B
          );
        },
        function () {
          return fN1.executeSchedule(
            I,
            A,
            function () {
              return I.complete();
            },
            B
          );
        },
        function (G) {
          return fN1.executeSchedule(
            I,
            A,
            function () {
              return I.error(G);
            },
            B
          );
        }
      )
    );
  });
}
fWA.observeOn = DZ9;
