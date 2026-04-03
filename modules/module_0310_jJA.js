// Module: jJA
// Params: ak

var eW9 =
  (ak && ak.__generator) ||
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
  };
Object.defineProperty(ak, '__esModule', { value: !0 });
ak.generate = void 0;
var _JA = lI(),
  AF9 = sp(),
  BF9 = ep(),
  QF9 = vN1();
function IF9(A, B, Q, I, G) {
  var D, Z, Y, W;
  if (arguments.length === 1)
    ((D = A),
      (W = D.initialState),
      (B = D.condition),
      (Q = D.iterate),
      (Z = D.resultSelector),
      (Y = Z === void 0 ? _JA.identity : Z),
      (G = D.scheduler));
  else if (((W = A), !I || AF9.isScheduler(I))) ((Y = _JA.identity), (G = I));
  else Y = I;
  function F() {
    var J;
    return eW9(this, function (C) {
      switch (C.label) {
        case 0:
          ((J = W), (C.label = 1));
        case 1:
          if (!(!B || B(J))) return [3, 4];
          return [4, Y(J)];
        case 2:
          (C.sent(), (C.label = 3));
        case 3:
          return ((J = Q(J)), [3, 1]);
        case 4:
          return [2];
      }
    });
  }
  return BF9.defer(
    G
      ? function () {
          return QF9.scheduleIterable(F(), G);
        }
      : F
  );
}
ak.generate = IF9;
