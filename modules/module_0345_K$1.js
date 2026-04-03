// Module: K$1
// Params: zq

var EC9 =
    (zq && zq.__read) ||
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
  UC9 =
    (zq && zq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(zq, '__esModule', { value: !0 });
zq.concat = void 0;
var NC9 = w2(),
  $C9 = op(),
  qC9 = IY(),
  MC9 = mE();
function LC9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = qC9.popScheduler(A);
  return NC9.operate(function (I, G) {
    $C9
      .concatAll()(MC9.from(UC9([I], EC9(A)), Q))
      .subscribe(G);
  });
}
zq.concat = LC9;
