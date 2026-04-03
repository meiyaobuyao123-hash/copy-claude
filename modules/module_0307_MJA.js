// Module: MJA
// Params: $JA

Object.defineProperty($JA, '__esModule', { value: !0 });
$JA.forkJoin = void 0;
var _W9 = G8(),
  jW9 = lN1(),
  yW9 = j4(),
  kW9 = IY(),
  xW9 = t2(),
  fW9 = Jq(),
  vW9 = iN1();
function bW9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = kW9.popResultSelector(A),
    I = jW9.argsArgArrayOrObject(A),
    G = I.args,
    D = I.keys,
    Z = new _W9.Observable(function (Y) {
      var W = G.length;
      if (!W) {
        Y.complete();
        return;
      }
      var F = new Array(W),
        J = W,
        C = W,
        X = function (K) {
          var U = !1;
          yW9.innerFrom(G[K]).subscribe(
            xW9.createOperatorSubscriber(
              Y,
              function (N) {
                if (!U) ((U = !0), C--);
                F[K] = N;
              },
              function () {
                return J--;
              },
              void 0,
              function () {
                if (!J || !U) {
                  if (!C) Y.next(D ? vW9.createObject(D, F) : F);
                  Y.complete();
                }
              }
            )
          );
        };
      for (var V = 0; V < W; V++) X(V);
    });
  return Q ? Z.pipe(fW9.mapOneOrManyArgs(Q)) : Z;
}
$JA.forkJoin = bW9;
