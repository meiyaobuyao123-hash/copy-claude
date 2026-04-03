// Module: Q$1
// Params: sk

var B$1 =
  (sk && sk.__values) ||
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
Object.defineProperty(sk, '__esModule', { value: !0 });
sk.bufferCount = void 0;
var HJ9 = w2(),
  zJ9 = t2(),
  wJ9 = gE();
function EJ9(A, B) {
  if (B === void 0) B = null;
  return (
    (B = B !== null && B !== void 0 ? B : A),
    HJ9.operate(function (Q, I) {
      var G = [],
        D = 0;
      Q.subscribe(
        zJ9.createOperatorSubscriber(
          I,
          function (Z) {
            var Y,
              W,
              F,
              J,
              C = null;
            if (D++ % B === 0) G.push([]);
            try {
              for (var X = B$1(G), V = X.next(); !V.done; V = X.next()) {
                var K = V.value;
                if ((K.push(Z), A <= K.length))
                  ((C = C !== null && C !== void 0 ? C : []), C.push(K));
              }
            } catch (q) {
              Y = { error: q };
            } finally {
              try {
                if (V && !V.done && (W = X.return)) W.call(X);
              } finally {
                if (Y) throw Y.error;
              }
            }
            if (C)
              try {
                for (var U = B$1(C), N = U.next(); !N.done; N = U.next()) {
                  var K = N.value;
                  (wJ9.arrRemove(G, K), I.next(K));
                }
              } catch (q) {
                F = { error: q };
              } finally {
                try {
                  if (N && !N.done && (J = U.return)) J.call(U);
                } finally {
                  if (F) throw F.error;
                }
              }
          },
          function () {
            var Z, Y;
            try {
              for (var W = B$1(G), F = W.next(); !F.done; F = W.next()) {
                var J = F.value;
                I.next(J);
              }
            } catch (C) {
              Z = { error: C };
            } finally {
              try {
                if (F && !F.done && (Y = W.return)) Y.call(W);
              } finally {
                if (Z) throw Z.error;
              }
            }
            I.complete();
          },
          void 0,
          function () {
            G = null;
          }
        )
      );
    })
  );
}
sk.bufferCount = EJ9;
