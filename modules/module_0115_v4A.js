// Module: v4A
// Params: f4A

var { _optionalChain: XX } = tA();
Object.defineProperty(f4A, '__esModule', { value: !0 });
var $E1 = I4(),
  rZ = tA(),
  I01 = sZ(),
  Pp2 = b$();
class G01 {
  static __initStatic() {
    this.id = 'Express';
  }
  constructor(A = {}) {
    ((this.name = G01.id),
      (this._router = A.router || A.app),
      (this._methods = (Array.isArray(A.methods) ? A.methods : []).concat('use')));
  }
  setupOnce(A, B) {
    if (!this._router) {
      I01.DEBUG_BUILD && rZ.logger.error('ExpressIntegration is missing an Express instance');
      return;
    }
    if (Pp2.shouldDisableAutoInstrumentation(B)) {
      I01.DEBUG_BUILD &&
        rZ.logger.log('Express Integration is skipped because of instrumenter configuration.');
      return;
    }
    (jp2(this._router, this._methods), yp2(this._router));
  }
}
G01.__initStatic();
function y4A(A, B) {
  let Q = A.length;
  switch (Q) {
    case 2:
      return function (I, G) {
        let D = G.__sentry_transaction;
        if (D) {
          let Z = D.startChild({
            description: A.name,
            op: `middleware.express.${B}`,
            origin: 'auto.middleware.express',
          });
          G.once('finish', () => {
            Z.end();
          });
        }
        return A.call(this, I, G);
      };
    case 3:
      return function (I, G, D) {
        let Z = G.__sentry_transaction,
          Y = XX([
            Z,
            'optionalAccess',
            (W) => W.startChild,
            'call',
            (W) =>
              W({
                description: A.name,
                op: `middleware.express.${B}`,
                origin: 'auto.middleware.express',
              }),
          ]);
        A.call(this, I, G, function (...W) {
          (XX([Y, 'optionalAccess', (F) => F.end, 'call', (F) => F()]), D.call(this, ...W));
        });
      };
    case 4:
      return function (I, G, D, Z) {
        let Y = D.__sentry_transaction,
          W = XX([
            Y,
            'optionalAccess',
            (F) => F.startChild,
            'call',
            (F) =>
              F({
                description: A.name,
                op: `middleware.express.${B}`,
                origin: 'auto.middleware.express',
              }),
          ]);
        A.call(this, I, G, D, function (...F) {
          (XX([W, 'optionalAccess', (J) => J.end, 'call', (J) => J()]), Z.call(this, ...F));
        });
      };
    default:
      throw new Error(`Express middleware takes 2-4 arguments. Got: ${Q}`);
  }
}
function Sp2(A, B) {
  return A.map((Q) => {
    if (typeof Q === 'function') return y4A(Q, B);
    if (Array.isArray(Q))
      return Q.map((I) => {
        if (typeof I === 'function') return y4A(I, B);
        return I;
      });
    return Q;
  });
}
function _p2(A, B) {
  let Q = A[B];
  return (
    (A[B] = function (...I) {
      return Q.call(this, ...Sp2(I, B));
    }),
    A
  );
}
function jp2(A, B = []) {
  B.forEach((Q) => _p2(A, Q));
}
function yp2(A) {
  let B = 'settings' in A;
  if (B && A._router === void 0 && A.lazyrouter) A.lazyrouter();
  let Q = B ? A._router : A;
  if (!Q) {
    (I01.DEBUG_BUILD &&
      rZ.logger.debug(
        'Cannot instrument router for URL Parameterization (did not find a valid router).'
      ),
      I01.DEBUG_BUILD &&
        rZ.logger.debug('Routing instrumentation is currently only supported in Express 4.'));
    return;
  }
  let I = Object.getPrototypeOf(Q),
    G = I.process_params;
  I.process_params = function D(Z, Y, W, F, J) {
    if (!W._reconstructedRoute) W._reconstructedRoute = '';
    let { layerRoutePath: C, isRegex: X, isArray: V, numExtraSegments: K } = kp2(Z);
    if (C || X || V) W._hasParameters = !0;
    let U;
    if (C) U = C;
    else U = x4A(W.originalUrl, W._reconstructedRoute, Z.path) || '';
    let N = U.split('/')
      .filter((R) => R.length > 0 && (X || V || !R.includes('*')))
      .join('/');
    if (N && N.length > 0) W._reconstructedRoute += `/${N}${X ? '/' : ''}`;
    let q = rZ.getNumberOfUrlSegments(rZ.stripUrlQueryAndFragment(W.originalUrl || '')) + K,
      M = rZ.getNumberOfUrlSegments(W._reconstructedRoute);
    if (q === M) {
      if (!W._hasParameters) {
        if (W._reconstructedRoute !== W.originalUrl)
          W._reconstructedRoute = W.originalUrl
            ? rZ.stripUrlQueryAndFragment(W.originalUrl)
            : W.originalUrl;
      }
      let R = F.__sentry_transaction,
        T = (R && $E1.spanToJSON(R).data) || {};
      if (R && T[$E1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] !== 'custom') {
        let O = W._reconstructedRoute || '/',
          [S, f] = rZ.extractPathForTransaction(W, { path: !0, method: !0, customRoute: O });
        (R.updateName(S), R.setAttribute($E1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, f));
      }
    }
    return G.call(this, Z, Y, W, F, J);
  };
}
var k4A = (A, B, Q) => {
  if (
    !A ||
    !B ||
    !Q ||
    Object.keys(Q).length === 0 ||
    XX([Q, 'access', (F) => F[0], 'optionalAccess', (F) => F.offset]) === void 0 ||
    XX([Q, 'access', (F) => F[0], 'optionalAccess', (F) => F.offset]) === null
  )
    return;
  let I = Q.sort((F, J) => F.offset - J.offset),
    D = new RegExp(B, `${B.flags}d`).exec(A);
  if (!D || !D.indices) return;
  let [, ...Z] = D.indices;
  if (Z.length !== I.length) return;
  let Y = A,
    W = 0;
  return (
    Z.forEach((F, J) => {
      if (F) {
        let [C, X] = F,
          V = Y.substring(0, C - W),
          K = `:${I[J].name}`,
          U = Y.substring(X - W);
        ((Y = V + K + U), (W = W + (X - C - K.length)));
      }
    }),
    Y
  );
};
function kp2(A) {
  let B = XX([A, 'access', (Z) => Z.route, 'optionalAccess', (Z) => Z.path]),
    Q = rZ.isRegExp(B),
    I = Array.isArray(B);
  if (!B) {
    let [Z] = rZ.GLOBAL_OBJ.process.versions.node.split('.').map(Number);
    if (Z >= 16) B = k4A(A.path, A.regexp, A.keys);
  }
  if (!B) return { isRegex: Q, isArray: I, numExtraSegments: 0 };
  let G = I ? Math.max(xp2(B) - rZ.getNumberOfUrlSegments(A.path || ''), 0) : 0;
  return { layerRoutePath: fp2(I, B), isRegex: Q, isArray: I, numExtraSegments: G };
}
function xp2(A) {
  return A.reduce((B, Q) => {
    return B + rZ.getNumberOfUrlSegments(Q.toString());
  }, 0);
}
function fp2(A, B) {
  if (A) return B.map((Q) => Q.toString()).join(',');
  return B && B.toString();
}
function x4A(A, B, Q) {
  let I = rZ.stripUrlQueryAndFragment(A || ''),
    G = XX([
      I,
      'optionalAccess',
      (W) => W.split,
      'call',
      (W) => W('/'),
      'access',
      (W) => W.filter,
      'call',
      (W) => W((F) => !!F),
    ]),
    D = 0,
    Z =
      XX([
        B,
        'optionalAccess',
        (W) => W.split,
        'call',
        (W) => W('/'),
        'access',
        (W) => W.filter,
        'call',
        (W) => W((F) => !!F),
        'access',
        (W) => W.length,
      ]) || 0;
  return XX([
    Q,
    'optionalAccess',
    (W) => W.split,
    'call',
    (W) => W('/'),
    'access',
    (W) => W.filter,
    'call',
    (W) =>
      W((F) => {
        if (XX([G, 'optionalAccess', (J) => J[Z + D]]) === F) return ((D += 1), !0);
        return !1;
      }),
    'access',
    (W) => W.join,
    'call',
    (W) => W('/'),
  ]);
}
f4A.Express = G01;
f4A.extractOriginalRoute = k4A;
f4A.preventDuplicateSegments = x4A;
