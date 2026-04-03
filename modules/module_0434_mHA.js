// Module: mHA
// Params: Oq

var yN9 =
    (Oq && Oq.__read) ||
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
  kN9 =
    (Oq && Oq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Oq, '__esModule', { value: !0 });
Oq.race = void 0;
var xN9 = TT(),
  fN9 = g91();
function vN9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  return fN9.raceWith.apply(void 0, kN9([], yN9(xN9.argsOrArgArray(A))));
}
Oq.race = vN9;
