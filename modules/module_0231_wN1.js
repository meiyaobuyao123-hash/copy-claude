// Module: wN1
// Params: $X

var DYA =
    ($X && $X.__read) ||
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
  ZYA =
    ($X && $X.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty($X, '__esModule', { value: !0 });
$X.animationFrameProvider = void 0;
var QG9 = _W();
$X.animationFrameProvider = {
  schedule: function (A) {
    var B = requestAnimationFrame,
      Q = cancelAnimationFrame,
      I = $X.animationFrameProvider.delegate;
    if (I) ((B = I.requestAnimationFrame), (Q = I.cancelAnimationFrame));
    var G = B(function (D) {
      ((Q = void 0), A(D));
    });
    return new QG9.Subscription(function () {
      return Q === null || Q === void 0 ? void 0 : Q(G);
    });
  },
  requestAnimationFrame: function () {
    var A = [];
    for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
    var Q = $X.animationFrameProvider.delegate;
    return (
      (Q === null || Q === void 0 ? void 0 : Q.requestAnimationFrame) || requestAnimationFrame
    ).apply(void 0, ZYA([], DYA(A)));
  },
  cancelAnimationFrame: function () {
    var A = [];
    for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
    var Q = $X.animationFrameProvider.delegate;
    return (
      (Q === null || Q === void 0 ? void 0 : Q.cancelAnimationFrame) || cancelAnimationFrame
    ).apply(void 0, ZYA([], DYA(A)));
  },
  delegate: void 0,
};
