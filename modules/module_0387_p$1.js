// Module: p$1
// Params: OH

var VK9 =
    (OH && OH.__read) ||
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
  KK9 =
    (OH && OH.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(OH, '__esModule', { value: !0 });
OH.onErrorResumeNext = OH.onErrorResumeNextWith = void 0;
var HK9 = TT(),
  zK9 = rN1();
function bVA() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = HK9.argsOrArgArray(A);
  return function (I) {
    return zK9.onErrorResumeNext.apply(void 0, KK9([I], VK9(Q)));
  };
}
OH.onErrorResumeNextWith = bVA;
OH.onErrorResumeNext = bVA;
