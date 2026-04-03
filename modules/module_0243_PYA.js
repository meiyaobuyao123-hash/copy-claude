// Module: PYA
// Params: LH

var _G9 =
    (LH && LH.__read) ||
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
  jG9 =
    (LH && LH.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(LH, '__esModule', { value: !0 });
LH.immediateProvider = void 0;
var TYA = OYA(),
  yG9 = TYA.Immediate.setImmediate,
  kG9 = TYA.Immediate.clearImmediate;
LH.immediateProvider = {
  setImmediate: function () {
    var A = [];
    for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
    var Q = LH.immediateProvider.delegate;
    return ((Q === null || Q === void 0 ? void 0 : Q.setImmediate) || yG9).apply(
      void 0,
      jG9([], _G9(A))
    );
  },
  clearImmediate: function (A) {
    var B = LH.immediateProvider.delegate;
    return ((B === null || B === void 0 ? void 0 : B.clearImmediate) || kG9)(A);
  },
  delegate: void 0,
};
