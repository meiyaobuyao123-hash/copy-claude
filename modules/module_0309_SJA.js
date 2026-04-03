// Module: SJA
// Params: TJA

Object.defineProperty(TJA, '__esModule', { value: !0 });
TJA.fromEventPattern = void 0;
var rW9 = G8(),
  oW9 = l5(),
  tW9 = Jq();
function OJA(A, B, Q) {
  if (Q) return OJA(A, B).pipe(tW9.mapOneOrManyArgs(Q));
  return new rW9.Observable(function (I) {
    var G = function () {
        var Z = [];
        for (var Y = 0; Y < arguments.length; Y++) Z[Y] = arguments[Y];
        return I.next(Z.length === 1 ? Z[0] : Z);
      },
      D = A(G);
    return oW9.isFunction(B)
      ? function () {
          return B(G, D);
        }
      : void 0;
  });
}
TJA.fromEventPattern = OJA;
