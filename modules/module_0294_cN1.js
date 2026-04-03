// Module: cN1
// Params: Cq

var kY9 =
    (Cq && Cq.__read) ||
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
  mFA =
    (Cq && Cq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Cq, '__esModule', { value: !0 });
Cq.bindCallbackInternals = void 0;
var xY9 = sp(),
  fY9 = G8(),
  vY9 = lk(),
  bY9 = Jq(),
  gY9 = ck(),
  hY9 = z91();
function pN1(A, B, Q, I) {
  if (Q)
    if (xY9.isScheduler(Q)) I = Q;
    else
      return function () {
        var G = [];
        for (var D = 0; D < arguments.length; D++) G[D] = arguments[D];
        return pN1(A, B, I).apply(this, G).pipe(bY9.mapOneOrManyArgs(Q));
      };
  if (I)
    return function () {
      var G = [];
      for (var D = 0; D < arguments.length; D++) G[D] = arguments[D];
      return pN1(A, B).apply(this, G).pipe(vY9.subscribeOn(I), gY9.observeOn(I));
    };
  return function () {
    var G = this,
      D = [];
    for (var Z = 0; Z < arguments.length; Z++) D[Z] = arguments[Z];
    var Y = new hY9.AsyncSubject(),
      W = !0;
    return new fY9.Observable(function (F) {
      var J = Y.subscribe(F);
      if (W) {
        W = !1;
        var C = !1,
          X = !1;
        if (
          (B.apply(
            G,
            mFA(mFA([], kY9(D)), [
              function () {
                var V = [];
                for (var K = 0; K < arguments.length; K++) V[K] = arguments[K];
                if (A) {
                  var U = V.shift();
                  if (U != null) {
                    Y.error(U);
                    return;
                  }
                }
                if ((Y.next(1 < V.length ? V : V[0]), (X = !0), C)) Y.complete();
              },
            ])
          ),
          X)
        )
          Y.complete();
        C = !0;
      }
      return J;
    });
  };
}
Cq.bindCallbackInternals = pN1;
