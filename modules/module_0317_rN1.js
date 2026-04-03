// Module: rN1
// Params: sJA

Object.defineProperty(sJA, '__esModule', { value: !0 });
sJA.onErrorResumeNext = void 0;
var LF9 = G8(),
  RF9 = TT(),
  OF9 = t2(),
  aJA = cI(),
  TF9 = j4();
function PF9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = RF9.argsOrArgArray(A);
  return new LF9.Observable(function (I) {
    var G = 0,
      D = function () {
        if (G < Q.length) {
          var Z = void 0;
          try {
            Z = TF9.innerFrom(Q[G++]);
          } catch (W) {
            D();
            return;
          }
          var Y = new OF9.OperatorSubscriber(I, void 0, aJA.noop, aJA.noop);
          (Z.subscribe(Y), Y.add(D));
        } else I.complete();
      };
    D();
  });
}
sJA.onErrorResumeNext = PF9;
