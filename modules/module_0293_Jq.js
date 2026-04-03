// Module: Jq
// Params: Fq

var TY9 =
    (Fq && Fq.__read) ||
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
  PY9 =
    (Fq && Fq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Fq, '__esModule', { value: !0 });
Fq.mapOneOrManyArgs = void 0;
var SY9 = dE(),
  _Y9 = Array.isArray;
function jY9(A, B) {
  return _Y9(B) ? A.apply(void 0, PY9([], TY9(B))) : A(B);
}
function yY9(A) {
  return SY9.map(function (B) {
    return jY9(A, B);
  });
}
Fq.mapOneOrManyArgs = yY9;
