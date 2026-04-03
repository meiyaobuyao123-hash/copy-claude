// Module: $YA
// Params: MH

var UYA =
    (MH && MH.__read) ||
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
  NYA =
    (MH && MH.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(MH, '__esModule', { value: !0 });
MH.intervalProvider = void 0;
MH.intervalProvider = {
  setInterval: function (A, B) {
    var Q = [];
    for (var I = 2; I < arguments.length; I++) Q[I - 2] = arguments[I];
    var G = MH.intervalProvider.delegate;
    if (G === null || G === void 0 ? void 0 : G.setInterval)
      return G.setInterval.apply(G, NYA([A, B], UYA(Q)));
    return setInterval.apply(void 0, NYA([A, B], UYA(Q)));
  },
  clearInterval: function (A) {
    var B = MH.intervalProvider.delegate;
    return ((B === null || B === void 0 ? void 0 : B.clearInterval) || clearInterval)(A);
  },
  delegate: void 0,
};
