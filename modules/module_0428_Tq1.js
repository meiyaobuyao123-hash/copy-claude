// Module: Tq1
// Params: Mq

var LHA =
    (Mq && Mq.__read) ||
    function (A, B) {
      var Q = typeof Symbol === 'function' && A[Symbol.iterator];
      if (!Q) return A;
      var I = Q.call(A),
        G,
        D = [],
        Z;
      try {
        while ((B === void 0 || B-- > 0) && !(G = I.next()).done) D.push(G.value);
      } catch (Y) {
        Z = { error: Y };
      } finally {
        try {
          if (G && !G.done && (Q = I.return)) Q.call(I);
        } finally {
          if (Z) throw Z.error;
        }
      }
      return D;
    },
  RHA =
    (Mq && Mq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Mq, '__esModule', { value: !0 });
Mq.withLatestFrom = void 0;
var Cw9 = w2(),
  OHA = t2(),
  Xw9 = j4(),
  Vw9 = lI(),
  Kw9 = cI(),
  Hw9 = IY();
function zw9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = Hw9.popResultSelector(A);
  return Cw9.operate(function (I, G) {
    var D = A.length,
      Z = new Array(D),
      Y = A.map(function () {
        return !1;
      }),
      W = !1,
      F = function (C) {
        Xw9.innerFrom(A[C]).subscribe(
          OHA.createOperatorSubscriber(
            G,
            function (X) {
              if (((Z[C] = X), !W && !Y[C]))
                ((Y[C] = !0), (W = Y.every(Vw9.identity)) && (Y = null));
            },
            Kw9.noop
          )
        );
      };
    for (var J = 0; J < D; J++) F(J);
    I.subscribe(
      OHA.createOperatorSubscriber(G, function (C) {
        if (W) {
          var X = RHA([C], LHA(Z));
          G.next(Q ? Q.apply(void 0, RHA([], LHA(X))) : X);
        }
      })
    );
  });
}
Mq.withLatestFrom = zw9;
