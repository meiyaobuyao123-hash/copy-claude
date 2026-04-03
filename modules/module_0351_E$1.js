// Module: E$1
// Params: HXA

Object.defineProperty(HXA, '__esModule', { value: !0 });
HXA.debounceTime = void 0;
var pC9 = QY(),
  cC9 = w2(),
  lC9 = t2();
function iC9(A, B) {
  if (B === void 0) B = pC9.asyncScheduler;
  return cC9.operate(function (Q, I) {
    var G = null,
      D = null,
      Z = null,
      Y = function () {
        if (G) {
          (G.unsubscribe(), (G = null));
          var F = D;
          ((D = null), I.next(F));
        }
      };
    function W() {
      var F = Z + A,
        J = B.now();
      if (J < F) {
        ((G = this.schedule(void 0, F - J)), I.add(G));
        return;
      }
      Y();
    }
    Q.subscribe(
      lC9.createOperatorSubscriber(
        I,
        function (F) {
          if (((D = F), (Z = B.now()), !G)) ((G = B.schedule(W, A)), I.add(G));
        },
        function () {
          (Y(), I.complete());
        },
        void 0,
        function () {
          D = G = null;
        }
      )
    );
  });
}
HXA.debounceTime = iC9;
