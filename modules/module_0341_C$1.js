// Module: C$1
// Params: Kq

var rCA =
    (Kq && Kq.__read) ||
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
  oCA =
    (Kq && Kq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Kq, '__esModule', { value: !0 });
Kq.combineLatest = void 0;
var GC9 = M91(),
  DC9 = w2(),
  ZC9 = TT(),
  YC9 = Jq(),
  WC9 = np(),
  FC9 = IY();
function tCA() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = FC9.popResultSelector(A);
  return Q
    ? WC9.pipe(tCA.apply(void 0, oCA([], rCA(A))), YC9.mapOneOrManyArgs(Q))
    : DC9.operate(function (I, G) {
        GC9.combineLatestInit(oCA([I], rCA(ZC9.argsOrArgArray(A))))(G);
      });
}
Kq.combineLatest = tCA;
