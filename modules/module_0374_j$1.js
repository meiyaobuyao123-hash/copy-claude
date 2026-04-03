// Module: j$1
// Params: KVA

Object.defineProperty(KVA, '__esModule', { value: !0 });
KVA.groupBy = void 0;
var UV9 = G8(),
  NV9 = j4(),
  $V9 = iI(),
  qV9 = w2(),
  VVA = t2();
function MV9(A, B, Q, I) {
  return qV9.operate(function (G, D) {
    var Z;
    if (!B || typeof B === 'function') Z = B;
    else ((Q = B.duration), (Z = B.element), (I = B.connector));
    var Y = new Map(),
      W = function (K) {
        (Y.forEach(K), K(D));
      },
      F = function (K) {
        return W(function (U) {
          return U.error(K);
        });
      },
      J = 0,
      C = !1,
      X = new VVA.OperatorSubscriber(
        D,
        function (K) {
          try {
            var U = A(K),
              N = Y.get(U);
            if (!N) {
              Y.set(U, (N = I ? I() : new $V9.Subject()));
              var q = V(U, N);
              if ((D.next(q), Q)) {
                var M = VVA.createOperatorSubscriber(
                  N,
                  function () {
                    (N.complete(), M === null || M === void 0 || M.unsubscribe());
                  },
                  void 0,
                  void 0,
                  function () {
                    return Y.delete(U);
                  }
                );
                X.add(NV9.innerFrom(Q(q)).subscribe(M));
              }
            }
            N.next(Z ? Z(K) : K);
          } catch (R) {
            F(R);
          }
        },
        function () {
          return W(function (K) {
            return K.complete();
          });
        },
        F,
        function () {
          return Y.clear();
        },
        function () {
          return ((C = !0), J === 0);
        }
      );
    G.subscribe(X);
    function V(K, U) {
      var N = new UV9.Observable(function (q) {
        J++;
        var M = U.subscribe(q);
        return function () {
          (M.unsubscribe(), --J === 0 && C && X.unsubscribe());
        };
      });
      return ((N.key = K), N);
    }
  });
}
KVA.groupBy = MV9;
