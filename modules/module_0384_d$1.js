// Module: d$1
// Params: Nq

var IK9 =
    (Nq && Nq.__read) ||
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
  GK9 =
    (Nq && Nq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Nq, '__esModule', { value: !0 });
Nq.mergeWith = void 0;
var DK9 = m$1();
function ZK9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  return DK9.merge.apply(void 0, GK9([], IK9(A)));
}
Nq.mergeWith = ZK9;
