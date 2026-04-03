// Module: Yv1
// Params: LW8,eG1

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var PK0,
  SK0,
  _K0,
  jK0,
  yK0,
  kK0,
  xK0,
  fK0,
  vK0,
  tG1,
  Zv1,
  bK0,
  gK0,
  db,
  hK0,
  mK0,
  dK0,
  uK0,
  pK0,
  cK0,
  lK0,
  iK0,
  nK0;
(function (A) {
  var B =
    typeof global === 'object'
      ? global
      : typeof self === 'object'
        ? self
        : typeof this === 'object'
          ? this
          : {};
  if (typeof define === 'function' && define.amd)
    define('tslib', ['exports'], function (I) {
      A(Q(B, Q(I)));
    });
  else if (typeof eG1 === 'object' && typeof LW8 === 'object') A(Q(B, Q(LW8)));
  else A(Q(B));
  function Q(I, G) {
    if (I !== B)
      if (typeof Object.create === 'function')
        Object.defineProperty(I, '__esModule', { value: !0 });
      else I.__esModule = !0;
    return function (D, Z) {
      return (I[D] = G ? G(D, Z) : Z);
    };
  }
})(function (A) {
  var B =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (Q, I) {
        Q.__proto__ = I;
      }) ||
    function (Q, I) {
      for (var G in I) if (I.hasOwnProperty(G)) Q[G] = I[G];
    };
  ((PK0 = function (Q, I) {
    B(Q, I);
    function G() {
      this.constructor = Q;
    }
    Q.prototype = I === null ? Object.create(I) : ((G.prototype = I.prototype), new G());
  }),
    (SK0 =
      Object.assign ||
      function (Q) {
        for (var I, G = 1, D = arguments.length; G < D; G++) {
          I = arguments[G];
          for (var Z in I) if (Object.prototype.hasOwnProperty.call(I, Z)) Q[Z] = I[Z];
        }
        return Q;
      }),
    (_K0 = function (Q, I) {
      var G = {};
      for (var D in Q)
        if (Object.prototype.hasOwnProperty.call(Q, D) && I.indexOf(D) < 0) G[D] = Q[D];
      if (Q != null && typeof Object.getOwnPropertySymbols === 'function') {
        for (var Z = 0, D = Object.getOwnPropertySymbols(Q); Z < D.length; Z++)
          if (I.indexOf(D[Z]) < 0 && Object.prototype.propertyIsEnumerable.call(Q, D[Z]))
            G[D[Z]] = Q[D[Z]];
      }
      return G;
    }),
    (jK0 = function (Q, I, G, D) {
      var Z = arguments.length,
        Y = Z < 3 ? I : D === null ? (D = Object.getOwnPropertyDescriptor(I, G)) : D,
        W;
      if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
        Y = Reflect.decorate(Q, I, G, D);
      else
        for (var F = Q.length - 1; F >= 0; F--)
          if ((W = Q[F])) Y = (Z < 3 ? W(Y) : Z > 3 ? W(I, G, Y) : W(I, G)) || Y;
      return (Z > 3 && Y && Object.defineProperty(I, G, Y), Y);
    }),
    (yK0 = function (Q, I) {
      return function (G, D) {
        I(G, D, Q);
      };
    }),
    (kK0 = function (Q, I) {
      if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
        return Reflect.metadata(Q, I);
    }),
    (xK0 = function (Q, I, G, D) {
      function Z(Y) {
        return Y instanceof G
          ? Y
          : new G(function (W) {
              W(Y);
            });
      }
      return new (G || (G = Promise))(function (Y, W) {
        function F(X) {
          try {
            C(D.next(X));
          } catch (V) {
            W(V);
          }
        }
        function J(X) {
          try {
            C(D.throw(X));
          } catch (V) {
            W(V);
          }
        }
        function C(X) {
          X.done ? Y(X.value) : Z(X.value).then(F, J);
        }
        C((D = D.apply(Q, I || [])).next());
      });
    }),
    (fK0 = function (Q, I) {
      var G = {
          label: 0,
          sent: function () {
            if (Y[0] & 1) throw Y[1];
            return Y[1];
          },
          trys: [],
          ops: [],
        },
        D,
        Z,
        Y,
        W;
      return (
        (W = { next: F(0), throw: F(1), return: F(2) }),
        typeof Symbol === 'function' &&
          (W[Symbol.iterator] = function () {
            return this;
          }),
        W
      );
      function F(C) {
        return function (X) {
          return J([C, X]);
        };
      }
      function J(C) {
        if (D) throw new TypeError('Generator is already executing.');
        while (G)
          try {
            if (
              ((D = 1),
              Z &&
                (Y =
                  C[0] & 2
                    ? Z.return
                    : C[0]
                      ? Z.throw || ((Y = Z.return) && Y.call(Z), 0)
                      : Z.next) &&
                !(Y = Y.call(Z, C[1])).done)
            )
              return Y;
            if (((Z = 0), Y)) C = [C[0] & 2, Y.value];
            switch (C[0]) {
              case 0:
              case 1:
                Y = C;
                break;
              case 4:
                return (G.label++, { value: C[1], done: !1 });
              case 5:
                (G.label++, (Z = C[1]), (C = [0]));
                continue;
              case 7:
                ((C = G.ops.pop()), G.trys.pop());
                continue;
              default:
                if (
                  ((Y = G.trys), !(Y = Y.length > 0 && Y[Y.length - 1])) &&
                  (C[0] === 6 || C[0] === 2)
                ) {
                  G = 0;
                  continue;
                }
                if (C[0] === 3 && (!Y || (C[1] > Y[0] && C[1] < Y[3]))) {
                  G.label = C[1];
                  break;
                }
                if (C[0] === 6 && G.label < Y[1]) {
                  ((G.label = Y[1]), (Y = C));
                  break;
                }
                if (Y && G.label < Y[2]) {
                  ((G.label = Y[2]), G.ops.push(C));
                  break;
                }
                if (Y[2]) G.ops.pop();
                G.trys.pop();
                continue;
            }
            C = I.call(Q, G);
          } catch (X) {
            ((C = [6, X]), (Z = 0));
          } finally {
            D = Y = 0;
          }
        if (C[0] & 5) throw C[1];
        return { value: C[0] ? C[1] : void 0, done: !0 };
      }
    }),
    (nK0 = function (Q, I, G, D) {
      if (D === void 0) D = G;
      Q[D] = I[G];
    }),
    (vK0 = function (Q, I) {
      for (var G in Q) if (G !== 'default' && !I.hasOwnProperty(G)) I[G] = Q[G];
    }),
    (tG1 = function (Q) {
      var I = typeof Symbol === 'function' && Symbol.iterator,
        G = I && Q[I],
        D = 0;
      if (G) return G.call(Q);
      if (Q && typeof Q.length === 'number')
        return {
          next: function () {
            if (Q && D >= Q.length) Q = void 0;
            return { value: Q && Q[D++], done: !Q };
          },
        };
      throw new TypeError(I ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
    }),
    (Zv1 = function (Q, I) {
      var G = typeof Symbol === 'function' && Q[Symbol.iterator];
      if (!G) return Q;
      var D = G.call(Q),
        Z,
        Y = [],
        W;
      try {
        while ((I === void 0 || I-- > 0) && !(Z = D.next()).done) Y.push(Z.value);
      } catch (F) {
        W = { error: F };
      } finally {
        try {
          if (Z && !Z.done && (G = D.return)) G.call(D);
        } finally {
          if (W) throw W.error;
        }
      }
      return Y;
    }),
    (bK0 = function () {
      for (var Q = [], I = 0; I < arguments.length; I++) Q = Q.concat(Zv1(arguments[I]));
      return Q;
    }),
    (gK0 = function () {
      for (var Q = 0, I = 0, G = arguments.length; I < G; I++) Q += arguments[I].length;
      for (var D = Array(Q), Z = 0, I = 0; I < G; I++)
        for (var Y = arguments[I], W = 0, F = Y.length; W < F; W++, Z++) D[Z] = Y[W];
      return D;
    }),
    (db = function (Q) {
      return this instanceof db ? ((this.v = Q), this) : new db(Q);
    }),
    (hK0 = function (Q, I, G) {
      if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
      var D = G.apply(Q, I || []),
        Z,
        Y = [];
      return (
        (Z = {}),
        W('next'),
        W('throw'),
        W('return'),
        (Z[Symbol.asyncIterator] = function () {
          return this;
        }),
        Z
      );
      function W(K) {
        if (D[K])
          Z[K] = function (U) {
            return new Promise(function (N, q) {
              Y.push([K, U, N, q]) > 1 || F(K, U);
            });
          };
      }
      function F(K, U) {
        try {
          J(D[K](U));
        } catch (N) {
          V(Y[0][3], N);
        }
      }
      function J(K) {
        K.value instanceof db ? Promise.resolve(K.value.v).then(C, X) : V(Y[0][2], K);
      }
      function C(K) {
        F('next', K);
      }
      function X(K) {
        F('throw', K);
      }
      function V(K, U) {
        if ((K(U), Y.shift(), Y.length)) F(Y[0][0], Y[0][1]);
      }
    }),
    (mK0 = function (Q) {
      var I, G;
      return (
        (I = {}),
        D('next'),
        D('throw', function (Z) {
          throw Z;
        }),
        D('return'),
        (I[Symbol.iterator] = function () {
          return this;
        }),
        I
      );
      function D(Z, Y) {
        I[Z] = Q[Z]
          ? function (W) {
              return (G = !G) ? { value: db(Q[Z](W)), done: Z === 'return' } : Y ? Y(W) : W;
            }
          : Y;
      }
    }),
    (dK0 = function (Q) {
      if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
      var I = Q[Symbol.asyncIterator],
        G;
      return I
        ? I.call(Q)
        : ((Q = typeof tG1 === 'function' ? tG1(Q) : Q[Symbol.iterator]()),
          (G = {}),
          D('next'),
          D('throw'),
          D('return'),
          (G[Symbol.asyncIterator] = function () {
            return this;
          }),
          G);
      function D(Y) {
        G[Y] =
          Q[Y] &&
          function (W) {
            return new Promise(function (F, J) {
              ((W = Q[Y](W)), Z(F, J, W.done, W.value));
            });
          };
      }
      function Z(Y, W, F, J) {
        Promise.resolve(J).then(function (C) {
          Y({ value: C, done: F });
        }, W);
      }
    }),
    (uK0 = function (Q, I) {
      if (Object.defineProperty) Object.defineProperty(Q, 'raw', { value: I });
      else Q.raw = I;
      return Q;
    }),
    (pK0 = function (Q) {
      if (Q && Q.__esModule) return Q;
      var I = {};
      if (Q != null) {
        for (var G in Q) if (Object.hasOwnProperty.call(Q, G)) I[G] = Q[G];
      }
      return ((I.default = Q), I);
    }),
    (cK0 = function (Q) {
      return Q && Q.__esModule ? Q : { default: Q };
    }),
    (lK0 = function (Q, I) {
      if (!I.has(Q)) throw new TypeError('attempted to get private field on non-instance');
      return I.get(Q);
    }),
    (iK0 = function (Q, I, G) {
      if (!I.has(Q)) throw new TypeError('attempted to set private field on non-instance');
      return (I.set(Q, G), G);
    }),
    A('__extends', PK0),
    A('__assign', SK0),
    A('__rest', _K0),
    A('__decorate', jK0),
    A('__param', yK0),
    A('__metadata', kK0),
    A('__awaiter', xK0),
    A('__generator', fK0),
    A('__exportStar', vK0),
    A('__createBinding', nK0),
    A('__values', tG1),
    A('__read', Zv1),
    A('__spread', bK0),
    A('__spreadArrays', gK0),
    A('__await', db),
    A('__asyncGenerator', hK0),
    A('__asyncDelegator', mK0),
    A('__asyncValues', dK0),
    A('__makeTemplateObject', uK0),
    A('__importStar', pK0),
    A('__importDefault', cK0),
    A('__classPrivateFieldGet', lK0),
    A('__classPrivateFieldSet', iK0));
});
