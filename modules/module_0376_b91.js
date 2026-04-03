// Module: b91
// Params: Bx

var TV9 =
  (Bx && Bx.__values) ||
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
Object.defineProperty(Bx, '__esModule', { value: !0 });
Bx.takeLast = void 0;
var PV9 = qX(),
  SV9 = w2(),
  _V9 = t2();
function jV9(A) {
  return A <= 0
    ? function () {
        return PV9.EMPTY;
      }
    : SV9.operate(function (B, Q) {
        var I = [];
        B.subscribe(
          _V9.createOperatorSubscriber(
            Q,
            function (G) {
              (I.push(G), A < I.length && I.shift());
            },
            function () {
              var G, D;
              try {
                for (var Z = TV9(I), Y = Z.next(); !Y.done; Y = Z.next()) {
                  var W = Y.value;
                  Q.next(W);
                }
              } catch (F) {
                G = { error: F };
              } finally {
                try {
                  if (Y && !Y.done && (D = Z.return)) D.call(Z);
                } finally {
                  if (G) throw G.error;
                }
              }
              Q.complete();
            },
            void 0,
            function () {
              I = null;
            }
          )
        );
      });
}
Bx.takeLast = jV9;
