// Module: L$1
// Params: Eq

var mX9 =
    (Eq && Eq.__read) ||
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
  dX9 =
    (Eq && Eq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Eq, '__esModule', { value: !0 });
Eq.endWith = void 0;
var uX9 = tp(),
  pX9 = N91();
function cX9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  return function (Q) {
    return uX9.concat(Q, pX9.of.apply(void 0, dX9([], mX9(A))));
  };
}
Eq.endWith = cX9;
