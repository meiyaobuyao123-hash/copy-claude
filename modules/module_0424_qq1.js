// Module: qq1
// Params: Ix

var pz9 =
  (Ix && Ix.__values) ||
  function (A) {
    var B = typeof Symbol === 'function' && Symbol.iterator,
      Q = B && A[B],
      I = 0;
    if (Q) return Q.call(A);
    if (A && typeof A.length === 'number')
      return {
        next: function () {
          if (A && I >= A.length) A = void 0;
          return { value: A && A[I++], done: !A };
        },
      };
    throw new TypeError(B ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  };
Object.defineProperty(Ix, '__esModule', { value: !0 });
Ix.windowCount = void 0;
var HHA = iI(),
  cz9 = w2(),
  lz9 = t2();
function iz9(A, B) {
  if (B === void 0) B = 0;
  var Q = B > 0 ? B : A;
  return cz9.operate(function (I, G) {
    var D = [new HHA.Subject()],
      Z = [],
      Y = 0;
    (G.next(D[0].asObservable()),
      I.subscribe(
        lz9.createOperatorSubscriber(
          G,
          function (W) {
            var F, J;
            try {
              for (var C = pz9(D), X = C.next(); !X.done; X = C.next()) {
                var V = X.value;
                V.next(W);
              }
            } catch (N) {
              F = { error: N };
            } finally {
              try {
                if (X && !X.done && (J = C.return)) J.call(C);
              } finally {
                if (F) throw F.error;
              }
            }
            var K = Y - A + 1;
            if (K >= 0 && K % Q === 0) D.shift().complete();
            if (++Y % Q === 0) {
              var U = new HHA.Subject();
              (D.push(U), G.next(U.asObservable()));
            }
          },
          function () {
            while (D.length > 0) D.shift().complete();
            G.complete();
          },
          function (W) {
            while (D.length > 0) D.shift().error(W);
            G.error(W);
          },
          function () {
            ((Z = null), (D = null));
          }
        )
      ));
  });
}
Ix.windowCount = iz9;
