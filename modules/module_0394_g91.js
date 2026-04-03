// Module: g91
// Params: $q

var fK9 =
    ($q && $q.__read) ||
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
  vK9 =
    ($q && $q.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty($q, '__esModule', { value: !0 });
$q.raceWith = void 0;
var bK9 = tN1(),
  gK9 = w2(),
  hK9 = lI();
function mK9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  return !A.length
    ? hK9.identity
    : gK9.operate(function (Q, I) {
        bK9.raceInit(vK9([Q], fK9(A)))(I);
      });
}
$q.raceWith = mK9;
