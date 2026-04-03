// Module: WN1
// Params: $H

var MZA =
    ($H && $H.__read) ||
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
  LZA =
    ($H && $H.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty($H, '__esModule', { value: !0 });
$H.timeoutProvider = void 0;
$H.timeoutProvider = {
  setTimeout: function (A, B) {
    var Q = [];
    for (var I = 2; I < arguments.length; I++) Q[I - 2] = arguments[I];
    var G = $H.timeoutProvider.delegate;
    if (G === null || G === void 0 ? void 0 : G.setTimeout)
      return G.setTimeout.apply(G, LZA([A, B], MZA(Q)));
    return setTimeout.apply(void 0, LZA([A, B], MZA(Q)));
  },
  clearTimeout: function (A) {
    var B = $H.timeoutProvider.delegate;
    return ((B === null || B === void 0 ? void 0 : B.clearTimeout) || clearTimeout)(A);
  },
  delegate: void 0,
};
