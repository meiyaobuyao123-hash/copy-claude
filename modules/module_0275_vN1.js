// Module: vN1
// Params: sWA

Object.defineProperty(sWA, '__esModule', { value: !0 });
sWA.scheduleIterable = void 0;
var EZ9 = G8(),
  UZ9 = jN1(),
  NZ9 = l5(),
  aWA = hE();
function $Z9(A, B) {
  return new EZ9.Observable(function (Q) {
    var I;
    return (
      aWA.executeSchedule(Q, B, function () {
        ((I = A[UZ9.iterator]()),
          aWA.executeSchedule(
            Q,
            B,
            function () {
              var G, D, Z;
              try {
                ((G = I.next()), (D = G.value), (Z = G.done));
              } catch (Y) {
                Q.error(Y);
                return;
              }
              if (Z) Q.complete();
              else Q.next(D);
            },
            0,
            !0
          ));
      }),
      function () {
        return NZ9.isFunction(I === null || I === void 0 ? void 0 : I.return) && I.return();
      }
    );
  });
}
sWA.scheduleIterable = $Z9;
