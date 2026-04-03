// Module: m8A
// Params: h8A

var { _optionalChain: L3 } = tA();
Object.defineProperty(h8A, '__esModule', { value: !0 });
var tE1 = I4(),
  _01 = tA(),
  Dr2 = ZT(),
  j01 = f8A();
function eE1(A) {
  let B = [],
    Q = !1;
  function I(Z) {
    if (((B = []), Q)) return;
    ((Q = !0), A(Z));
  }
  B.push(I);
  function G(Z) {
    B.push(Z);
  }
  function D(Z) {
    let Y = B.pop() || I;
    try {
      Y(Z);
    } catch (W) {
      I(Z);
    }
  }
  return { add: G, next: D };
}
class v8A {
  constructor() {
    let { Session: A } = D1('inspector');
    this._session = new A();
  }
  configureAndConnect(A, B) {
    (this._session.connect(),
      this._session.on('Debugger.paused', (Q) => {
        A(Q, () => {
          this._session.post('Debugger.resume');
        });
      }),
      this._session.post('Debugger.enable'),
      this._session.post('Debugger.setPauseOnExceptions', { state: B ? 'all' : 'uncaught' }));
  }
  setPauseOnExceptions(A) {
    this._session.post('Debugger.setPauseOnExceptions', { state: A ? 'all' : 'uncaught' });
  }
  getLocalVariables(A, B) {
    this._getProperties(A, (Q) => {
      let { add: I, next: G } = eE1(B);
      for (let D of Q)
        if (
          L3([D, 'optionalAccess', (Z) => Z.value, 'optionalAccess', (Z) => Z.objectId]) &&
          L3([D, 'optionalAccess', (Z) => Z.value, 'access', (Z) => Z.className]) === 'Array'
        ) {
          let Z = D.value.objectId;
          I((Y) => this._unrollArray(Z, D.name, Y, G));
        } else if (
          L3([D, 'optionalAccess', (Z) => Z.value, 'optionalAccess', (Z) => Z.objectId]) &&
          L3([D, 'optionalAccess', (Z) => Z.value, 'optionalAccess', (Z) => Z.className]) ===
            'Object'
        ) {
          let Z = D.value.objectId;
          I((Y) => this._unrollObject(Z, D.name, Y, G));
        } else if (
          L3([D, 'optionalAccess', (Z) => Z.value, 'optionalAccess', (Z) => Z.value]) != null ||
          L3([D, 'optionalAccess', (Z) => Z.value, 'optionalAccess', (Z) => Z.description]) != null
        )
          I((Z) => this._unrollOther(D, Z, G));
      G({});
    });
  }
  _getProperties(A, B) {
    this._session.post('Runtime.getProperties', { objectId: A, ownProperties: !0 }, (Q, I) => {
      if (Q) B([]);
      else B(I.result);
    });
  }
  _unrollArray(A, B, Q, I) {
    this._getProperties(A, (G) => {
      ((Q[B] = G.filter((D) => D.name !== 'length' && !isNaN(parseInt(D.name, 10)))
        .sort((D, Z) => parseInt(D.name, 10) - parseInt(Z.name, 10))
        .map((D) => L3([D, 'optionalAccess', (Z) => Z.value, 'optionalAccess', (Z) => Z.value]))),
        I(Q));
    });
  }
  _unrollObject(A, B, Q, I) {
    this._getProperties(A, (G) => {
      ((Q[B] = G.map((D) => [
        D.name,
        L3([D, 'optionalAccess', (Z) => Z.value, 'optionalAccess', (Z) => Z.value]),
      ]).reduce((D, [Z, Y]) => {
        return ((D[Z] = Y), D);
      }, {})),
        I(Q));
    });
  }
  _unrollOther(A, B, Q) {
    if (L3([A, 'optionalAccess', (I) => I.value, 'optionalAccess', (I) => I.value]) != null)
      B[A.name] = A.value.value;
    else if (
      L3([A, 'optionalAccess', (I) => I.value, 'optionalAccess', (I) => I.description]) != null &&
      L3([A, 'optionalAccess', (I) => I.value, 'optionalAccess', (I) => I.type]) !== 'function'
    )
      B[A.name] = `<${A.value.description}>`;
    Q(B);
  }
}
function Zr2() {
  try {
    return new v8A();
  } catch (A) {
    return;
  }
}
var b8A = 'LocalVariables',
  Yr2 = (A = {}, B = Zr2()) => {
    let Q = new _01.LRUMap(20),
      I,
      G = !1;
    function D(W, { params: { reason: F, data: J, callFrames: C } }, X) {
      if (F !== 'exception' && F !== 'promiseRejection') {
        X();
        return;
      }
      L3([I, 'optionalCall', (N) => N()]);
      let V = j01.hashFromStack(W, L3([J, 'optionalAccess', (N) => N.description]));
      if (V == null) {
        X();
        return;
      }
      let { add: K, next: U } = eE1((N) => {
        (Q.set(V, N), X());
      });
      for (let N = 0; N < Math.min(C.length, 5); N++) {
        let { scopeChain: q, functionName: M, this: R } = C[N],
          T = q.find((S) => S.type === 'local'),
          O = R.className === 'global' || !R.className ? M : `${R.className}.${M}`;
        if (L3([T, 'optionalAccess', (S) => S.object, 'access', (S) => S.objectId]) === void 0)
          K((S) => {
            ((S[N] = { function: O }), U(S));
          });
        else {
          let S = T.object.objectId;
          K((f) =>
            L3([
              B,
              'optionalAccess',
              (a) => a.getLocalVariables,
              'call',
              (a) =>
                a(S, (g) => {
                  ((f[N] = { function: O, vars: g }), U(f));
                }),
            ])
          );
        }
      }
      U([]);
    }
    function Z(W) {
      let F = j01.hashFrames(
        L3([W, 'optionalAccess', (X) => X.stacktrace, 'optionalAccess', (X) => X.frames])
      );
      if (F === void 0) return;
      let J = Q.remove(F);
      if (J === void 0) return;
      let C = (
        L3([W, 'access', (X) => X.stacktrace, 'optionalAccess', (X) => X.frames]) || []
      ).filter((X) => X.function !== 'new Promise');
      for (let X = 0; X < C.length; X++) {
        let V = C.length - X - 1;
        if (!C[V] || !J[X]) break;
        if (
          J[X].vars === void 0 ||
          C[V].in_app === !1 ||
          !j01.functionNamesMatch(C[V].function, J[X].function)
        )
          continue;
        C[V].vars = J[X].vars;
      }
    }
    function Y(W) {
      for (let F of L3([
        W,
        'optionalAccess',
        (J) => J.exception,
        'optionalAccess',
        (J) => J.values,
      ]) || [])
        Z(F);
      return W;
    }
    return {
      name: b8A,
      setupOnce() {
        let W = tE1.getClient(),
          F = L3([W, 'optionalAccess', (J) => J.getOptions, 'call', (J) => J()]);
        if (B && L3([F, 'optionalAccess', (J) => J.includeLocalVariables])) {
          if (Dr2.NODE_VERSION.major < 18) {
            _01.logger.log('The `LocalVariables` integration is only supported on Node >= v18.');
            return;
          }
          let C = A.captureAllExceptions !== !1;
          if ((B.configureAndConnect((X, V) => D(F.stackParser, X, V), C), C)) {
            let X = A.maxExceptionsPerSecond || 50;
            I = j01.createRateLimiter(
              X,
              () => {
                (_01.logger.log('Local variables rate-limit lifted.'),
                  L3([B, 'optionalAccess', (V) => V.setPauseOnExceptions, 'call', (V) => V(!0)]));
              },
              (V) => {
                (_01.logger.log(
                  `Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${V} seconds.`
                ),
                  L3([B, 'optionalAccess', (K) => K.setPauseOnExceptions, 'call', (K) => K(!1)]));
              }
            );
          }
          G = !0;
        }
      },
      processEvent(W) {
        if (G) return Y(W);
        return W;
      },
      _getCachedFramesCount() {
        return Q.size;
      },
      _getFirstCachedFrame() {
        return Q.values()[0];
      },
    };
  },
  g8A = tE1.defineIntegration(Yr2),
  Wr2 = tE1.convertIntegrationFnToClass(b8A, g8A);
h8A.LocalVariablesSync = Wr2;
h8A.createCallbackList = eE1;
h8A.localVariablesSyncIntegration = g8A;
