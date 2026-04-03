// Module: t$1
// Params: GKA

Object.defineProperty(GKA, '__esModule', { value: !0 });
GKA.retry = void 0;
var rK9 = w2(),
  IKA = t2(),
  oK9 = lI(),
  tK9 = Xq(),
  eK9 = j4();
function AH9(A) {
  if (A === void 0) A = 1 / 0;
  var B;
  if (A && typeof A === 'object') B = A;
  else B = { count: A };
  var Q = B.count,
    I = Q === void 0 ? 1 / 0 : Q,
    G = B.delay,
    D = B.resetOnSuccess,
    Z = D === void 0 ? !1 : D;
  return I <= 0
    ? oK9.identity
    : rK9.operate(function (Y, W) {
        var F = 0,
          J,
          C = function () {
            var X = !1;
            if (
              ((J = Y.subscribe(
                IKA.createOperatorSubscriber(
                  W,
                  function (V) {
                    if (Z) F = 0;
                    W.next(V);
                  },
                  void 0,
                  function (V) {
                    if (F++ < I) {
                      var K = function () {
                        if (J) (J.unsubscribe(), (J = null), C());
                        else X = !0;
                      };
                      if (G != null) {
                        var U = typeof G === 'number' ? tK9.timer(G) : eK9.innerFrom(G(V, F)),
                          N = IKA.createOperatorSubscriber(
                            W,
                            function () {
                              (N.unsubscribe(), K());
                            },
                            function () {
                              W.complete();
                            }
                          );
                        U.subscribe(N);
                      } else K();
                    } else W.error(V);
                  }
                )
              )),
              X)
            )
              (J.unsubscribe(), (J = null), C());
          };
        C();
      });
}
GKA.retry = AH9;
