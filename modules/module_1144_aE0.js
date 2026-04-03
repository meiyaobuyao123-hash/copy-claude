// Module: aE0
// Params: XF8,kD1

var NE0,
  $E0,
  qE0,
  ME0,
  LE0,
  RE0,
  OE0,
  TE0,
  PE0,
  SE0,
  _E0,
  jE0,
  yE0,
  jD1,
  iv1,
  kE0,
  xE0,
  fE0,
  ab,
  vE0,
  bE0,
  gE0,
  hE0,
  mE0,
  dE0,
  uE0,
  pE0,
  cE0,
  yD1,
  lE0,
  iE0,
  nE0;
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
  else if (typeof kD1 === 'object' && typeof XF8 === 'object') A(Q(B, Q(XF8)));
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
      function (D, Z) {
        D.__proto__ = Z;
      }) ||
    function (D, Z) {
      for (var Y in Z) if (Object.prototype.hasOwnProperty.call(Z, Y)) D[Y] = Z[Y];
    };
  ((NE0 = function (D, Z) {
    if (typeof Z !== 'function' && Z !== null)
      throw new TypeError('Class extends value ' + String(Z) + ' is not a constructor or null');
    B(D, Z);
    function Y() {
      this.constructor = D;
    }
    D.prototype = Z === null ? Object.create(Z) : ((Y.prototype = Z.prototype), new Y());
  }),
    ($E0 =
      Object.assign ||
      function (D) {
        for (var Z, Y = 1, W = arguments.length; Y < W; Y++) {
          Z = arguments[Y];
          for (var F in Z) if (Object.prototype.hasOwnProperty.call(Z, F)) D[F] = Z[F];
        }
        return D;
      }),
    (qE0 = function (D, Z) {
      var Y = {};
      for (var W in D)
        if (Object.prototype.hasOwnProperty.call(D, W) && Z.indexOf(W) < 0) Y[W] = D[W];
      if (D != null && typeof Object.getOwnPropertySymbols === 'function') {
        for (var F = 0, W = Object.getOwnPropertySymbols(D); F < W.length; F++)
          if (Z.indexOf(W[F]) < 0 && Object.prototype.propertyIsEnumerable.call(D, W[F]))
            Y[W[F]] = D[W[F]];
      }
      return Y;
    }),
    (ME0 = function (D, Z, Y, W) {
      var F = arguments.length,
        J = F < 3 ? Z : W === null ? (W = Object.getOwnPropertyDescriptor(Z, Y)) : W,
        C;
      if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
        J = Reflect.decorate(D, Z, Y, W);
      else
        for (var X = D.length - 1; X >= 0; X--)
          if ((C = D[X])) J = (F < 3 ? C(J) : F > 3 ? C(Z, Y, J) : C(Z, Y)) || J;
      return (F > 3 && J && Object.defineProperty(Z, Y, J), J);
    }),
    (LE0 = function (D, Z) {
      return function (Y, W) {
        Z(Y, W, D);
      };
    }),
    (RE0 = function (D, Z, Y, W, F, J) {
      function C(S) {
        if (S !== void 0 && typeof S !== 'function') throw new TypeError('Function expected');
        return S;
      }
      var X = W.kind,
        V = X === 'getter' ? 'get' : X === 'setter' ? 'set' : 'value',
        K = !Z && D ? (W.static ? D : D.prototype) : null,
        U = Z || (K ? Object.getOwnPropertyDescriptor(K, W.name) : {}),
        N,
        q = !1;
      for (var M = Y.length - 1; M >= 0; M--) {
        var R = {};
        for (var T in W) R[T] = T === 'access' ? {} : W[T];
        for (var T in W.access) R.access[T] = W.access[T];
        R.addInitializer = function (S) {
          if (q) throw new TypeError('Cannot add initializers after decoration has completed');
          J.push(C(S || null));
        };
        var O = Y[M](X === 'accessor' ? { get: U.get, set: U.set } : U[V], R);
        if (X === 'accessor') {
          if (O === void 0) continue;
          if (O === null || typeof O !== 'object') throw new TypeError('Object expected');
          if ((N = C(O.get))) U.get = N;
          if ((N = C(O.set))) U.set = N;
          if ((N = C(O.init))) F.unshift(N);
        } else if ((N = C(O)))
          if (X === 'field') F.unshift(N);
          else U[V] = N;
      }
      if (K) Object.defineProperty(K, W.name, U);
      q = !0;
    }),
    (OE0 = function (D, Z, Y) {
      var W = arguments.length > 2;
      for (var F = 0; F < Z.length; F++) Y = W ? Z[F].call(D, Y) : Z[F].call(D);
      return W ? Y : void 0;
    }),
    (TE0 = function (D) {
      return typeof D === 'symbol' ? D : ''.concat(D);
    }),
    (PE0 = function (D, Z, Y) {
      if (typeof Z === 'symbol') Z = Z.description ? '['.concat(Z.description, ']') : '';
      return Object.defineProperty(D, 'name', {
        configurable: !0,
        value: Y ? ''.concat(Y, ' ', Z) : Z,
      });
    }),
    (SE0 = function (D, Z) {
      if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
        return Reflect.metadata(D, Z);
    }),
    (_E0 = function (D, Z, Y, W) {
      function F(J) {
        return J instanceof Y
          ? J
          : new Y(function (C) {
              C(J);
            });
      }
      return new (Y || (Y = Promise))(function (J, C) {
        function X(U) {
          try {
            K(W.next(U));
          } catch (N) {
            C(N);
          }
        }
        function V(U) {
          try {
            K(W.throw(U));
          } catch (N) {
            C(N);
          }
        }
        function K(U) {
          U.done ? J(U.value) : F(U.value).then(X, V);
        }
        K((W = W.apply(D, Z || [])).next());
      });
    }),
    (jE0 = function (D, Z) {
      var Y = {
          label: 0,
          sent: function () {
            if (J[0] & 1) throw J[1];
            return J[1];
          },
          trys: [],
          ops: [],
        },
        W,
        F,
        J,
        C = Object.create((typeof Iterator === 'function' ? Iterator : Object).prototype);
      return (
        (C.next = X(0)),
        (C.throw = X(1)),
        (C.return = X(2)),
        typeof Symbol === 'function' &&
          (C[Symbol.iterator] = function () {
            return this;
          }),
        C
      );
      function X(K) {
        return function (U) {
          return V([K, U]);
        };
      }
      function V(K) {
        if (W) throw new TypeError('Generator is already executing.');
        while ((C && ((C = 0), K[0] && (Y = 0)), Y))
          try {
            if (
              ((W = 1),
              F &&
                (J =
                  K[0] & 2
                    ? F.return
                    : K[0]
                      ? F.throw || ((J = F.return) && J.call(F), 0)
                      : F.next) &&
                !(J = J.call(F, K[1])).done)
            )
              return J;
            if (((F = 0), J)) K = [K[0] & 2, J.value];
            switch (K[0]) {
              case 0:
              case 1:
                J = K;
                break;
              case 4:
                return (Y.label++, { value: K[1], done: !1 });
              case 5:
                (Y.label++, (F = K[1]), (K = [0]));
                continue;
              case 7:
                ((K = Y.ops.pop()), Y.trys.pop());
                continue;
              default:
                if (
                  ((J = Y.trys), !(J = J.length > 0 && J[J.length - 1])) &&
                  (K[0] === 6 || K[0] === 2)
                ) {
                  Y = 0;
                  continue;
                }
                if (K[0] === 3 && (!J || (K[1] > J[0] && K[1] < J[3]))) {
                  Y.label = K[1];
                  break;
                }
                if (K[0] === 6 && Y.label < J[1]) {
                  ((Y.label = J[1]), (J = K));
                  break;
                }
                if (J && Y.label < J[2]) {
                  ((Y.label = J[2]), Y.ops.push(K));
                  break;
                }
                if (J[2]) Y.ops.pop();
                Y.trys.pop();
                continue;
            }
            K = Z.call(D, Y);
          } catch (U) {
            ((K = [6, U]), (F = 0));
          } finally {
            W = J = 0;
          }
        if (K[0] & 5) throw K[1];
        return { value: K[0] ? K[1] : void 0, done: !0 };
      }
    }),
    (yE0 = function (D, Z) {
      for (var Y in D)
        if (Y !== 'default' && !Object.prototype.hasOwnProperty.call(Z, Y)) yD1(Z, D, Y);
    }),
    (yD1 = Object.create
      ? function (D, Z, Y, W) {
          if (W === void 0) W = Y;
          var F = Object.getOwnPropertyDescriptor(Z, Y);
          if (!F || ('get' in F ? !Z.__esModule : F.writable || F.configurable))
            F = {
              enumerable: !0,
              get: function () {
                return Z[Y];
              },
            };
          Object.defineProperty(D, W, F);
        }
      : function (D, Z, Y, W) {
          if (W === void 0) W = Y;
          D[W] = Z[Y];
        }),
    (jD1 = function (D) {
      var Z = typeof Symbol === 'function' && Symbol.iterator,
        Y = Z && D[Z],
        W = 0;
      if (Y) return Y.call(D);
      if (D && typeof D.length === 'number')
        return {
          next: function () {
            if (D && W >= D.length) D = void 0;
            return { value: D && D[W++], done: !D };
          },
        };
      throw new TypeError(Z ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
    }),
    (iv1 = function (D, Z) {
      var Y = typeof Symbol === 'function' && D[Symbol.iterator];
      if (!Y) return D;
      var W = Y.call(D),
        F,
        J = [],
        C;
      try {
        while ((Z === void 0 || Z-- > 0) && !(F = W.next()).done) J.push(F.value);
      } catch (X) {
        C = { error: X };
      } finally {
        try {
          if (F && !F.done && (Y = W.return)) Y.call(W);
        } finally {
          if (C) throw C.error;
        }
      }
      return J;
    }),
    (kE0 = function () {
      for (var D = [], Z = 0; Z < arguments.length; Z++) D = D.concat(iv1(arguments[Z]));
      return D;
    }),
    (xE0 = function () {
      for (var D = 0, Z = 0, Y = arguments.length; Z < Y; Z++) D += arguments[Z].length;
      for (var W = Array(D), F = 0, Z = 0; Z < Y; Z++)
        for (var J = arguments[Z], C = 0, X = J.length; C < X; C++, F++) W[F] = J[C];
      return W;
    }),
    (fE0 = function (D, Z, Y) {
      if (Y || arguments.length === 2) {
        for (var W = 0, F = Z.length, J; W < F; W++)
          if (J || !(W in Z)) {
            if (!J) J = Array.prototype.slice.call(Z, 0, W);
            J[W] = Z[W];
          }
      }
      return D.concat(J || Array.prototype.slice.call(Z));
    }),
    (ab = function (D) {
      return this instanceof ab ? ((this.v = D), this) : new ab(D);
    }),
    (vE0 = function (D, Z, Y) {
      if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
      var W = Y.apply(D, Z || []),
        F,
        J = [];
      return (
        (F = Object.create(
          (typeof AsyncIterator === 'function' ? AsyncIterator : Object).prototype
        )),
        X('next'),
        X('throw'),
        X('return', C),
        (F[Symbol.asyncIterator] = function () {
          return this;
        }),
        F
      );
      function C(M) {
        return function (R) {
          return Promise.resolve(R).then(M, N);
        };
      }
      function X(M, R) {
        if (W[M]) {
          if (
            ((F[M] = function (T) {
              return new Promise(function (O, S) {
                J.push([M, T, O, S]) > 1 || V(M, T);
              });
            }),
            R)
          )
            F[M] = R(F[M]);
        }
      }
      function V(M, R) {
        try {
          K(W[M](R));
        } catch (T) {
          q(J[0][3], T);
        }
      }
      function K(M) {
        M.value instanceof ab ? Promise.resolve(M.value.v).then(U, N) : q(J[0][2], M);
      }
      function U(M) {
        V('next', M);
      }
      function N(M) {
        V('throw', M);
      }
      function q(M, R) {
        if ((M(R), J.shift(), J.length)) V(J[0][0], J[0][1]);
      }
    }),
    (bE0 = function (D) {
      var Z, Y;
      return (
        (Z = {}),
        W('next'),
        W('throw', function (F) {
          throw F;
        }),
        W('return'),
        (Z[Symbol.iterator] = function () {
          return this;
        }),
        Z
      );
      function W(F, J) {
        Z[F] = D[F]
          ? function (C) {
              return (Y = !Y) ? { value: ab(D[F](C)), done: !1 } : J ? J(C) : C;
            }
          : J;
      }
    }),
    (gE0 = function (D) {
      if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
      var Z = D[Symbol.asyncIterator],
        Y;
      return Z
        ? Z.call(D)
        : ((D = typeof jD1 === 'function' ? jD1(D) : D[Symbol.iterator]()),
          (Y = {}),
          W('next'),
          W('throw'),
          W('return'),
          (Y[Symbol.asyncIterator] = function () {
            return this;
          }),
          Y);
      function W(J) {
        Y[J] =
          D[J] &&
          function (C) {
            return new Promise(function (X, V) {
              ((C = D[J](C)), F(X, V, C.done, C.value));
            });
          };
      }
      function F(J, C, X, V) {
        Promise.resolve(V).then(function (K) {
          J({ value: K, done: X });
        }, C);
      }
    }),
    (hE0 = function (D, Z) {
      if (Object.defineProperty) Object.defineProperty(D, 'raw', { value: Z });
      else D.raw = Z;
      return D;
    }));
  var Q = Object.create
      ? function (D, Z) {
          Object.defineProperty(D, 'default', { enumerable: !0, value: Z });
        }
      : function (D, Z) {
          D.default = Z;
        },
    I = function (D) {
      return (
        (I =
          Object.getOwnPropertyNames ||
          function (Z) {
            var Y = [];
            for (var W in Z) if (Object.prototype.hasOwnProperty.call(Z, W)) Y[Y.length] = W;
            return Y;
          }),
        I(D)
      );
    };
  ((mE0 = function (D) {
    if (D && D.__esModule) return D;
    var Z = {};
    if (D != null) {
      for (var Y = I(D), W = 0; W < Y.length; W++) if (Y[W] !== 'default') yD1(Z, D, Y[W]);
    }
    return (Q(Z, D), Z);
  }),
    (dE0 = function (D) {
      return D && D.__esModule ? D : { default: D };
    }),
    (uE0 = function (D, Z, Y, W) {
      if (Y === 'a' && !W) throw new TypeError('Private accessor was defined without a getter');
      if (typeof Z === 'function' ? D !== Z || !W : !Z.has(D))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        );
      return Y === 'm' ? W : Y === 'a' ? W.call(D) : W ? W.value : Z.get(D);
    }),
    (pE0 = function (D, Z, Y, W, F) {
      if (W === 'm') throw new TypeError('Private method is not writable');
      if (W === 'a' && !F) throw new TypeError('Private accessor was defined without a setter');
      if (typeof Z === 'function' ? D !== Z || !F : !Z.has(D))
        throw new TypeError(
          'Cannot write private member to an object whose class did not declare it'
        );
      return (W === 'a' ? F.call(D, Y) : F ? (F.value = Y) : Z.set(D, Y), Y);
    }),
    (cE0 = function (D, Z) {
      if (Z === null || (typeof Z !== 'object' && typeof Z !== 'function'))
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof D === 'function' ? Z === D : D.has(Z);
    }),
    (lE0 = function (D, Z, Y) {
      if (Z !== null && Z !== void 0) {
        if (typeof Z !== 'object' && typeof Z !== 'function')
          throw new TypeError('Object expected.');
        var W, F;
        if (Y) {
          if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
          W = Z[Symbol.asyncDispose];
        }
        if (W === void 0) {
          if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
          if (((W = Z[Symbol.dispose]), Y)) F = W;
        }
        if (typeof W !== 'function') throw new TypeError('Object not disposable.');
        if (F)
          W = function () {
            try {
              F.call(this);
            } catch (J) {
              return Promise.reject(J);
            }
          };
        D.stack.push({ value: Z, dispose: W, async: Y });
      } else if (Y) D.stack.push({ async: !0 });
      return Z;
    }));
  var G =
    typeof SuppressedError === 'function'
      ? SuppressedError
      : function (D, Z, Y) {
          var W = new Error(Y);
          return ((W.name = 'SuppressedError'), (W.error = D), (W.suppressed = Z), W);
        };
  ((iE0 = function (D) {
    function Z(J) {
      ((D.error = D.hasError ? new G(J, D.error, 'An error was suppressed during disposal.') : J),
        (D.hasError = !0));
    }
    var Y,
      W = 0;
    function F() {
      while ((Y = D.stack.pop()))
        try {
          if (!Y.async && W === 1) return ((W = 0), D.stack.push(Y), Promise.resolve().then(F));
          if (Y.dispose) {
            var J = Y.dispose.call(Y.value);
            if (Y.async)
              return (
                (W |= 2),
                Promise.resolve(J).then(F, function (C) {
                  return (Z(C), F());
                })
              );
          } else W |= 1;
        } catch (C) {
          Z(C);
        }
      if (W === 1) return D.hasError ? Promise.reject(D.error) : Promise.resolve();
      if (D.hasError) throw D.error;
    }
    return F();
  }),
    (nE0 = function (D, Z) {
      if (typeof D === 'string' && /^\.\.?\//.test(D))
        return D.replace(
          /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
          function (Y, W, F, J, C) {
            return W
              ? Z
                ? '.jsx'
                : '.js'
              : F && (!J || !C)
                ? Y
                : F + J + '.' + C.toLowerCase() + 'js';
          }
        );
      return D;
    }),
    A('__extends', NE0),
    A('__assign', $E0),
    A('__rest', qE0),
    A('__decorate', ME0),
    A('__param', LE0),
    A('__esDecorate', RE0),
    A('__runInitializers', OE0),
    A('__propKey', TE0),
    A('__setFunctionName', PE0),
    A('__metadata', SE0),
    A('__awaiter', _E0),
    A('__generator', jE0),
    A('__exportStar', yE0),
    A('__createBinding', yD1),
    A('__values', jD1),
    A('__read', iv1),
    A('__spread', kE0),
    A('__spreadArrays', xE0),
    A('__spreadArray', fE0),
    A('__await', ab),
    A('__asyncGenerator', vE0),
    A('__asyncDelegator', bE0),
    A('__asyncValues', gE0),
    A('__makeTemplateObject', hE0),
    A('__importStar', mE0),
    A('__importDefault', dE0),
    A('__classPrivateFieldGet', uE0),
    A('__classPrivateFieldSet', pE0),
    A('__classPrivateFieldIn', cE0),
    A('__addDisposableResource', lE0),
    A('__disposeResources', iE0),
    A('__rewriteRelativeImportExtension', nE0));
});
