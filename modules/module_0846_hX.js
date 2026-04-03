// Module: hX
// Params: md5,zuA

var { defineProperty: x81, getOwnPropertyDescriptor: R04, getOwnPropertyNames: O04 } = Object,
  T04 = Object.prototype.hasOwnProperty,
  Sf = (A, B) => x81(A, 'name', { value: B, configurable: !0 }),
  P04 = (A, B) => {
    for (var Q in B) x81(A, Q, { get: B[Q], enumerable: !0 });
  },
  S04 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of O04(B))
        if (!T04.call(A, G) && G !== Q)
          x81(A, G, { get: () => B[G], enumerable: !(I = R04(B, G)) || I.enumerable });
    }
    return A;
  },
  _04 = (A) => S04(x81({}, '__esModule', { value: !0 }), A),
  HuA = {};
P04(HuA, { loadConfig: () => f04 });
zuA.exports = _04(HuA);
var Pl = t7();
function RT1(A) {
  try {
    let B = new Set(Array.from(A.match(/([A-Z_]){3,}/g) ?? []));
    return (
      B.delete('CONFIG'),
      B.delete('CONFIG_PREFIX_SEPARATOR'),
      B.delete('ENV'),
      [...B].join(', ')
    );
  } catch (B) {
    return A;
  }
}
Sf(RT1, 'getSelectorName');
var j04 = Sf(
    (A, B) => async () => {
      try {
        let Q = A(process.env);
        if (Q === void 0) throw new Error();
        return Q;
      } catch (Q) {
        throw new Pl.CredentialsProviderError(
          Q.message || `Not found in ENV: ${RT1(A.toString())}`,
          { logger: B }
        );
      }
    },
    'fromEnv'
  ),
  KuA = XM(),
  y04 = Sf(
    (A, { preferredFile: B = 'config', ...Q } = {}) =>
      async () => {
        let I = KuA.getProfileName(Q),
          { configFile: G, credentialsFile: D } = await KuA.loadSharedConfigFiles(Q),
          Z = D[I] || {},
          Y = G[I] || {},
          W = B === 'config' ? { ...Z, ...Y } : { ...Y, ...Z };
        try {
          let J = A(W, B === 'config' ? G : D);
          if (J === void 0) throw new Error();
          return J;
        } catch (F) {
          throw new Pl.CredentialsProviderError(
            F.message || `Not found in config files w/ profile [${I}]: ${RT1(A.toString())}`,
            { logger: Q.logger }
          );
        }
      },
    'fromSharedConfigFiles'
  ),
  k04 = Sf((A) => typeof A === 'function', 'isFunction'),
  x04 = Sf((A) => (k04(A) ? async () => await A() : Pl.fromStatic(A)), 'fromStatic'),
  f04 = Sf(
    ({ environmentVariableSelector: A, configFileSelector: B, default: Q }, I = {}) =>
      Pl.memoize(Pl.chain(j04(A), y04(B, I), x04(Q))),
    'loadConfig'
  );
