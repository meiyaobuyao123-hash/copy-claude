// Module: x91
// Params: rXA

Object.defineProperty(rXA, '__esModule', { value: !0 });
rXA.exhaustMap = void 0;
var aX9 = dE(),
  nXA = j4(),
  sX9 = w2(),
  aXA = t2();
function sXA(A, B) {
  if (B)
    return function (Q) {
      return Q.pipe(
        sXA(function (I, G) {
          return nXA.innerFrom(A(I, G)).pipe(
            aX9.map(function (D, Z) {
              return B(I, D, G, Z);
            })
          );
        })
      );
    };
  return sX9.operate(function (Q, I) {
    var G = 0,
      D = null,
      Z = !1;
    Q.subscribe(
      aXA.createOperatorSubscriber(
        I,
        function (Y) {
          if (!D)
            ((D = aXA.createOperatorSubscriber(I, void 0, function () {
              ((D = null), Z && I.complete());
            })),
              nXA.innerFrom(A(Y, G++)).subscribe(D));
        },
        function () {
          ((Z = !0), !D && I.complete());
        }
      )
    );
  });
}
rXA.exhaustMap = sXA;
