// Module: m$1
// Params: Uq

var oV9 =
    (Uq && Uq.__read) ||
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
  tV9 =
    (Uq && Uq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(Uq, '__esModule', { value: !0 });
Uq.merge = void 0;
var eV9 = w2(),
  AK9 = ik(),
  jVA = IY(),
  BK9 = mE();
function QK9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = jVA.popScheduler(A),
    I = jVA.popNumber(A, 1 / 0);
  return eV9.operate(function (G, D) {
    AK9.mergeAll(I)(BK9.from(tV9([G], oV9(A)), Q)).subscribe(D);
  });
}
Uq.merge = QK9;
