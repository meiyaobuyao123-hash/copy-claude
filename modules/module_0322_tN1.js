// Module: tN1
// Params: CCA

Object.defineProperty(CCA, '__esModule', { value: !0 });
CCA.raceInit = CCA.race = void 0;
var bF9 = G8(),
  FCA = j4(),
  gF9 = TT(),
  hF9 = t2();
function mF9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  return (
    (A = gF9.argsOrArgArray(A)),
    A.length === 1 ? FCA.innerFrom(A[0]) : new bF9.Observable(JCA(A))
  );
}
CCA.race = mF9;
function JCA(A) {
  return function (B) {
    var Q = [],
      I = function (D) {
        Q.push(
          FCA.innerFrom(A[D]).subscribe(
            hF9.createOperatorSubscriber(B, function (Z) {
              if (Q) {
                for (var Y = 0; Y < Q.length; Y++) Y !== D && Q[Y].unsubscribe();
                Q = null;
              }
              B.next(Z);
            })
          )
        );
      };
    for (var G = 0; Q && !B.closed && G < A.length; G++) I(G);
  };
}
CCA.raceInit = JCA;
