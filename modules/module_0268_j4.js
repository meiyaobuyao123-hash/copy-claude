// Module: j4
// Params: _B

var uD9 =
    (_B && _B.__awaiter) ||
    function (A, B, Q, I) {
      function G(D) {
        return D instanceof Q
          ? D
          : new Q(function (Z) {
              Z(D);
            });
      }
      return new (Q || (Q = Promise))(function (D, Z) {
        function Y(J) {
          try {
            F(I.next(J));
          } catch (C) {
            Z(C);
          }
        }
        function W(J) {
          try {
            F(I.throw(J));
          } catch (C) {
            Z(C);
          }
        }
        function F(J) {
          J.done ? D(J.value) : G(J.value).then(Y, W);
        }
        F((I = I.apply(A, B || [])).next());
      });
    },
  pD9 =
    (_B && _B.__generator) ||
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
  cD9 =
    (_B && _B.__asyncValues) ||
    function (A) {
      if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
      var B = A[Symbol.asyncIterator],
        Q;
      return B
        ? B.call(A)
        : ((A = typeof kN1 === 'function' ? kN1(A) : A[Symbol.iterator]()),
          (Q = {}),
          I('next'),
          I('throw'),
          I('return'),
          (Q[Symbol.asyncIterator] = function () {
            return this;
          }),
          Q);
      function I(D) {
        Q[D] =
          A[D] &&
          function (Z) {
            return new Promise(function (Y, W) {
              ((Z = A[D](Z)), G(Y, W, Z.done, Z.value));
            });
          };
      }
      function G(D, Z, Y, W) {
        Promise.resolve(W).then(function (F) {
          D({ value: F, done: Y });
        }, Z);
      }
    },
  kN1 =
    (_B && _B.__values) ||
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
Object.defineProperty(_B, '__esModule', { value: !0 });
_B.fromReadableStreamLike =
  _B.fromAsyncIterable =
  _B.fromIterable =
  _B.fromPromise =
  _B.fromArrayLike =
  _B.fromInteropObservable =
  _B.innerFrom =
    void 0;
var lD9 = E91(),
  iD9 = TN1(),
  pk = G8(),
  nD9 = PN1(),
  aD9 = SN1(),
  sD9 = _N1(),
  rD9 = yN1(),
  TWA = U91(),
  oD9 = l5(),
  tD9 = FN1(),
  eD9 = ip();
function AZ9(A) {
  if (A instanceof pk.Observable) return A;
  if (A != null) {
    if (nD9.isInteropObservable(A)) return PWA(A);
    if (lD9.isArrayLike(A)) return SWA(A);
    if (iD9.isPromise(A)) return _WA(A);
    if (aD9.isAsyncIterable(A)) return xN1(A);
    if (rD9.isIterable(A)) return jWA(A);
    if (TWA.isReadableStreamLike(A)) return yWA(A);
  }
  throw sD9.createInvalidObservableTypeError(A);
}
_B.innerFrom = AZ9;
function PWA(A) {
  return new pk.Observable(function (B) {
    var Q = A[eD9.observable]();
    if (oD9.isFunction(Q.subscribe)) return Q.subscribe(B);
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
_B.fromInteropObservable = PWA;
function SWA(A) {
  return new pk.Observable(function (B) {
    for (var Q = 0; Q < A.length && !B.closed; Q++) B.next(A[Q]);
    B.complete();
  });
}
_B.fromArrayLike = SWA;
function _WA(A) {
  return new pk.Observable(function (B) {
    A.then(
      function (Q) {
        if (!B.closed) (B.next(Q), B.complete());
      },
      function (Q) {
        return B.error(Q);
      }
    ).then(null, tD9.reportUnhandledError);
  });
}
_B.fromPromise = _WA;
function jWA(A) {
  return new pk.Observable(function (B) {
    var Q, I;
    try {
      for (var G = kN1(A), D = G.next(); !D.done; D = G.next()) {
        var Z = D.value;
        if ((B.next(Z), B.closed)) return;
      }
    } catch (Y) {
      Q = { error: Y };
    } finally {
      try {
        if (D && !D.done && (I = G.return)) I.call(G);
      } finally {
        if (Q) throw Q.error;
      }
    }
    B.complete();
  });
}
_B.fromIterable = jWA;
function xN1(A) {
  return new pk.Observable(function (B) {
    BZ9(A, B).catch(function (Q) {
      return B.error(Q);
    });
  });
}
_B.fromAsyncIterable = xN1;
function yWA(A) {
  return xN1(TWA.readableStreamLikeToAsyncGenerator(A));
}
_B.fromReadableStreamLike = yWA;
function BZ9(A, B) {
  var Q, I, G, D;
  return uD9(this, void 0, void 0, function () {
    var Z, Y;
    return pD9(this, function (W) {
      switch (W.label) {
        case 0:
          (W.trys.push([0, 5, 6, 11]), (Q = cD9(A)), (W.label = 1));
        case 1:
          return [4, Q.next()];
        case 2:
          if (((I = W.sent()), !!I.done)) return [3, 4];
          if (((Z = I.value), B.next(Z), B.closed)) return [2];
          W.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return ((Y = W.sent()), (G = { error: Y }), [3, 11]);
        case 6:
          if ((W.trys.push([6, , 9, 10]), !(I && !I.done && (D = Q.return)))) return [3, 8];
          return [4, D.call(Q)];
        case 7:
          (W.sent(), (W.label = 8));
        case 8:
          return [3, 10];
        case 9:
          if (G) throw G.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return (B.complete(), [2]);
      }
    });
  });
}
