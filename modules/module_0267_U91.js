// Module: U91
// Params: HJ

var bD9 =
    (HJ && HJ.__generator) ||
    function (A, B) {
      var Q = {
          label: 0,
          sent: function () {
            if (D[0] & 1) throw D[1];
            return D[1];
          },
          trys: [],
          ops: [],
        },
        I,
        G,
        D,
        Z;
      return (
        (Z = { next: Y(0), throw: Y(1), return: Y(2) }),
        typeof Symbol === 'function' &&
          (Z[Symbol.iterator] = function () {
            return this;
          }),
        Z
      );
      function Y(F) {
        return function (J) {
          return W([F, J]);
        };
      }
      function W(F) {
        if (I) throw new TypeError('Generator is already executing.');
        while (Q)
          try {
            if (
              ((I = 1),
              G &&
                (D =
                  F[0] & 2
                    ? G.return
                    : F[0]
                      ? G.throw || ((D = G.return) && D.call(G), 0)
                      : G.next) &&
                !(D = D.call(G, F[1])).done)
            )
              return D;
            if (((G = 0), D)) F = [F[0] & 2, D.value];
            switch (F[0]) {
              case 0:
              case 1:
                D = F;
                break;
              case 4:
                return (Q.label++, { value: F[1], done: !1 });
              case 5:
                (Q.label++, (G = F[1]), (F = [0]));
                continue;
              case 7:
                ((F = Q.ops.pop()), Q.trys.pop());
                continue;
              default:
                if (
                  ((D = Q.trys), !(D = D.length > 0 && D[D.length - 1])) &&
                  (F[0] === 6 || F[0] === 2)
                ) {
                  Q = 0;
                  continue;
                }
                if (F[0] === 3 && (!D || (F[1] > D[0] && F[1] < D[3]))) {
                  Q.label = F[1];
                  break;
                }
                if (F[0] === 6 && Q.label < D[1]) {
                  ((Q.label = D[1]), (D = F));
                  break;
                }
                if (D && Q.label < D[2]) {
                  ((Q.label = D[2]), Q.ops.push(F));
                  break;
                }
                if (D[2]) Q.ops.pop();
                Q.trys.pop();
                continue;
            }
            F = B.call(A, Q);
          } catch (J) {
            ((F = [6, J]), (G = 0));
          } finally {
            I = D = 0;
          }
        if (F[0] & 5) throw F[1];
        return { value: F[0] ? F[1] : void 0, done: !0 };
      }
    },
  uk =
    (HJ && HJ.__await) ||
    function (A) {
      return this instanceof uk ? ((this.v = A), this) : new uk(A);
    },
  gD9 =
    (HJ && HJ.__asyncGenerator) ||
    function (A, B, Q) {
      if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
      var I = Q.apply(A, B || []),
        G,
        D = [];
      return (
        (G = {}),
        Z('next'),
        Z('throw'),
        Z('return'),
        (G[Symbol.asyncIterator] = function () {
          return this;
        }),
        G
      );
      function Z(X) {
        if (I[X])
          G[X] = function (V) {
            return new Promise(function (K, U) {
              D.push([X, V, K, U]) > 1 || Y(X, V);
            });
          };
      }
      function Y(X, V) {
        try {
          W(I[X](V));
        } catch (K) {
          C(D[0][3], K);
        }
      }
      function W(X) {
        X.value instanceof uk ? Promise.resolve(X.value.v).then(F, J) : C(D[0][2], X);
      }
      function F(X) {
        Y('next', X);
      }
      function J(X) {
        Y('throw', X);
      }
      function C(X, V) {
        if ((X(V), D.shift(), D.length)) Y(D[0][0], D[0][1]);
      }
    };
Object.defineProperty(HJ, '__esModule', { value: !0 });
HJ.isReadableStreamLike = HJ.readableStreamLikeToAsyncGenerator = void 0;
var hD9 = l5();
function mD9(A) {
  return gD9(this, arguments, function B() {
    var Q, I, G, D;
    return bD9(this, function (Z) {
      switch (Z.label) {
        case 0:
          ((Q = A.getReader()), (Z.label = 1));
        case 1:
          (Z.trys.push([1, , 9, 10]), (Z.label = 2));
        case 2:
          return [4, uk(Q.read())];
        case 3:
          if (((I = Z.sent()), (G = I.value), (D = I.done), !D)) return [3, 5];
          return [4, uk(void 0)];
        case 4:
          return [2, Z.sent()];
        case 5:
          return [4, uk(G)];
        case 6:
          return [4, Z.sent()];
        case 7:
          return (Z.sent(), [3, 2]);
        case 8:
          return [3, 10];
        case 9:
          return (Q.releaseLock(), [7]);
        case 10:
          return [2];
      }
    });
  });
}
HJ.readableStreamLikeToAsyncGenerator = mD9;
function dD9(A) {
  return hD9.isFunction(A === null || A === void 0 ? void 0 : A.getReader);
}
HJ.isReadableStreamLike = dD9;
