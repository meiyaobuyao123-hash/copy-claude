// Module: Sq1
// Params: Lq

var Nw9 =
    (Lq && Lq.__read) ||
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
  $w9 =
    (Lq && Lq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Lq, '__esModule', { value: !0 });
Lq.zip = void 0;
var qw9 = R91(),
  Mw9 = w2();
function Lw9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  return Mw9.operate(function (Q, I) {
    qw9.zip.apply(void 0, $w9([Q], Nw9(A))).subscribe(I);
  });
}
Lq.zip = Lw9;
