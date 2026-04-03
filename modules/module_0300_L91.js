// Module: L91
// Params: DJA

Object.defineProperty(DJA, '__esModule', { value: !0 });
DJA.mergeInternals = void 0;
var DW9 = j4(),
  ZW9 = hE(),
  GJA = t2();
function YW9(A, B, Q, I, G, D, Z, Y) {
  var W = [],
    F = 0,
    J = 0,
    C = !1,
    X = function () {
      if (C && !W.length && !F) B.complete();
    },
    V = function (U) {
      return F < I ? K(U) : W.push(U);
    },
    K = function (U) {
      (D && B.next(U), F++);
      var N = !1;
      DW9.innerFrom(Q(U, J++)).subscribe(
        GJA.createOperatorSubscriber(
          B,
          function (q) {
            if ((G === null || G === void 0 || G(q), D)) V(q);
            else B.next(q);
          },
          function () {
            N = !0;
          },
          void 0,
          function () {
            if (N)
              try {
                F--;
                var q = function () {
                  var M = W.shift();
                  if (Z)
                    ZW9.executeSchedule(B, Z, function () {
                      return K(M);
                    });
                  else K(M);
                };
                while (W.length && F < I) q();
                X();
              } catch (M) {
                B.error(M);
              }
          }
        )
      );
    };
  return (
    A.subscribe(
      GJA.createOperatorSubscriber(B, V, function () {
        ((C = !0), X());
      })
    ),
    function () {
      Y === null || Y === void 0 || Y();
    }
  );
}
DJA.mergeInternals = YW9;
