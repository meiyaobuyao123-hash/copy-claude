// Module: Ns
// Params: FV8,F_0

var b66 = D1('node:net'),
  D_0 = D1('node:assert'),
  W_0 = I6(),
  { InvalidArgumentError: g66, ConnectTimeoutError: h66 } = y5(),
  UY1 = eh1();
function Z_0() {}
var Am1, Bm1;
if (global.FinalizationRegistry && !(process.env.NODE_V8_COVERAGE || process.env.UNDICI_NO_FG))
  Bm1 = class A {
    constructor(B) {
      ((this._maxCachedSessions = B),
        (this._sessionCache = new Map()),
        (this._sessionRegistry = new global.FinalizationRegistry((Q) => {
          if (this._sessionCache.size < this._maxCachedSessions) return;
          let I = this._sessionCache.get(Q);
          if (I !== void 0 && I.deref() === void 0) this._sessionCache.delete(Q);
        })));
    }
    get(B) {
      let Q = this._sessionCache.get(B);
      return Q ? Q.deref() : null;
    }
    set(B, Q) {
      if (this._maxCachedSessions === 0) return;
      (this._sessionCache.set(B, new WeakRef(Q)), this._sessionRegistry.register(Q, B));
    }
  };
else
  Bm1 = class A {
    constructor(B) {
      ((this._maxCachedSessions = B), (this._sessionCache = new Map()));
    }
    get(B) {
      return this._sessionCache.get(B);
    }
    set(B, Q) {
      if (this._maxCachedSessions === 0) return;
      if (this._sessionCache.size >= this._maxCachedSessions) {
        let { value: I } = this._sessionCache.keys().next();
        this._sessionCache.delete(I);
      }
      this._sessionCache.set(B, Q);
    }
  };
function m66({ allowH2: A, maxCachedSessions: B, socketPath: Q, timeout: I, session: G, ...D }) {
  if (B != null && (!Number.isInteger(B) || B < 0))
    throw new g66('maxCachedSessions must be a positive integer or zero');
  let Z = { path: Q, ...D },
    Y = new Bm1(B == null ? 100 : B);
  return (
    (I = I == null ? 1e4 : I),
    (A = A != null ? A : !1),
    function W(
      { hostname: F, host: J, protocol: C, port: X, servername: V, localAddress: K, httpSocket: U },
      N
    ) {
      let q;
      if (C === 'https:') {
        if (!Am1) Am1 = D1('node:tls');
        V = V || Z.servername || W_0.getServerName(J) || null;
        let R = V || F;
        D_0(R);
        let T = G || Y.get(R) || null;
        ((X = X || 443),
          (q = Am1.connect({
            highWaterMark: 16384,
            ...Z,
            servername: V,
            session: T,
            localAddress: K,
            ALPNProtocols: A ? ['http/1.1', 'h2'] : ['http/1.1'],
            socket: U,
            port: X,
            host: F,
          })),
          q.on('session', function (O) {
            Y.set(R, O);
          }));
      } else
        (D_0(!U, 'httpSocket can only be sent on TLS update'),
          (X = X || 80),
          (q = b66.connect({ highWaterMark: 65536, ...Z, localAddress: K, port: X, host: F })));
      if (Z.keepAlive == null || Z.keepAlive) {
        let R = Z.keepAliveInitialDelay === void 0 ? 60000 : Z.keepAliveInitialDelay;
        q.setKeepAlive(!0, R);
      }
      let M = d66(new WeakRef(q), { timeout: I, hostname: F, port: X });
      return (
        q
          .setNoDelay(!0)
          .once(C === 'https:' ? 'secureConnect' : 'connect', function () {
            if ((queueMicrotask(M), N)) {
              let R = N;
              ((N = null), R(null, this));
            }
          })
          .on('error', function (R) {
            if ((queueMicrotask(M), N)) {
              let T = N;
              ((N = null), T(R));
            }
          }),
        q
      );
    }
  );
}
var d66 =
  process.platform === 'win32'
    ? (A, B) => {
        if (!B.timeout) return Z_0;
        let Q = null,
          I = null,
          G = UY1.setFastTimeout(() => {
            Q = setImmediate(() => {
              I = setImmediate(() => Y_0(A.deref(), B));
            });
          }, B.timeout);
        return () => {
          (UY1.clearFastTimeout(G), clearImmediate(Q), clearImmediate(I));
        };
      }
    : (A, B) => {
        if (!B.timeout) return Z_0;
        let Q = null,
          I = UY1.setFastTimeout(() => {
            Q = setImmediate(() => {
              Y_0(A.deref(), B);
            });
          }, B.timeout);
        return () => {
          (UY1.clearFastTimeout(I), clearImmediate(Q));
        };
      };
function Y_0(A, B) {
  if (A == null) return;
  let Q = 'Connect Timeout Error';
  if (Array.isArray(A.autoSelectFamilyAttemptedAddresses))
    Q += ` (attempted addresses: ${A.autoSelectFamilyAttemptedAddresses.join(', ')},`;
  else Q += ` (attempted address: ${B.hostname}:${B.port},`;
  ((Q += ` timeout: ${B.timeout}ms)`), W_0.destroy(A, new h66(Q)));
}
F_0.exports = m66;
