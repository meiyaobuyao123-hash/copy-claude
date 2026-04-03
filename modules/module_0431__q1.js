// Module: _q1
// Params: Rq

var Rw9 =
    (Rq && Rq.__read) ||
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
  Ow9 =
    (Rq && Rq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Rq, '__esModule', { value: !0 });
Rq.zipWith = void 0;
var Tw9 = Sq1();
function Pw9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  return Tw9.zip.apply(void 0, Ow9([], Rw9(A)));
}
Rq.zipWith = Pw9;
