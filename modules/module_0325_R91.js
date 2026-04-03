// Module: R91
// Params: Vq

var sF9 =
    (Vq && Vq.__read) ||
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
  rF9 =
    (Vq && Vq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Vq, '__esModule', { value: !0 });
Vq.zip = void 0;
var oF9 = G8(),
  tF9 = j4(),
  eF9 = TT(),
  AJ9 = qX(),
  BJ9 = t2(),
  QJ9 = IY();
function IJ9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = QJ9.popResultSelector(A),
    I = eF9.argsOrArgArray(A);
  return I.length
    ? new oF9.Observable(function (G) {
        var D = I.map(function () {
            return [];
          }),
          Z = I.map(function () {
            return !1;
          });
        G.add(function () {
          D = Z = null;
        });
        var Y = function (F) {
          tF9.innerFrom(I[F]).subscribe(
            BJ9.createOperatorSubscriber(
              G,
              function (J) {
                if (
                  (D[F].push(J),
                  D.every(function (X) {
                    return X.length;
                  }))
                ) {
                  var C = D.map(function (X) {
                    return X.shift();
                  });
                  if (
                    (G.next(Q ? Q.apply(void 0, rF9([], sF9(C))) : C),
                    D.some(function (X, V) {
                      return !X.length && Z[V];
                    }))
                  )
                    G.complete();
                }
              },
              function () {
                ((Z[F] = !0), !D[F].length && G.complete());
              }
            )
          );
        };
        for (var W = 0; !G.closed && W < I.length; W++) Y(W);
        return function () {
          D = Z = null;
        };
      })
    : AJ9.EMPTY;
}
Vq.zip = IJ9;
