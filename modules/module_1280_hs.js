// Module: hs
// Params: PV8,Hy0

var BN = D1('node:assert'),
  Jy0 = D1('node:net'),
  R36 = D1('node:http'),
  yS = I6(),
  { channels: rg } = yg(),
  O36 = rS0(),
  T36 = vg(),
  { InvalidArgumentError: KQ, InformationalError: P36, ClientDestroyedError: S36 } = y5(),
  _36 = Ns(),
  {
    kUrl: gz,
    kServerName: jL,
    kClient: j36,
    kBusy: xm1,
    kConnect: y36,
    kResuming: kS,
    kRunning: bs,
    kPending: gs,
    kSize: vs,
    kQueue: SV,
    kConnected: k36,
    kConnecting: og,
    kNeedDrain: kL,
    kKeepAliveDefaultTimeout: Dy0,
    kHostHeader: x36,
    kPendingIdx: _V,
    kRunningIdx: QN,
    kError: f36,
    kPipelining: lY1,
    kKeepAliveTimeoutValue: v36,
    kMaxHeadersSize: b36,
    kKeepAliveMaxTimeout: g36,
    kKeepAliveTimeoutThreshold: h36,
    kHeadersTimeout: m36,
    kBodyTimeout: d36,
    kStrictContentLength: u36,
    kConnector: ks,
    kMaxRedirections: p36,
    kMaxRequests: fm1,
    kCounter: c36,
    kClose: l36,
    kDestroy: i36,
    kDispatch: n36,
    kInterceptors: Zy0,
    kLocalAddress: xs,
    kMaxResponseSize: a36,
    kOnError: s36,
    kHTTPContext: HQ,
    kMaxConcurrentStreams: r36,
    kResume: fs,
  } = uB(),
  o36 = lj0(),
  t36 = ej0(),
  Yy0 = !1,
  yL = Symbol('kClosedResolve'),
  Wy0 = () => {};
function Cy0(A) {
  return A[lY1] ?? A[HQ]?.defaultPipelining ?? 1;
}
class Xy0 extends T36 {
  constructor(
    A,
    {
      interceptors: B,
      maxHeaderSize: Q,
      headersTimeout: I,
      socketTimeout: G,
      requestTimeout: D,
      connectTimeout: Z,
      bodyTimeout: Y,
      idleTimeout: W,
      keepAlive: F,
      keepAliveTimeout: J,
      maxKeepAliveTimeout: C,
      keepAliveMaxTimeout: X,
      keepAliveTimeoutThreshold: V,
      socketPath: K,
      pipelining: U,
      tls: N,
      strictContentLength: q,
      maxCachedSessions: M,
      maxRedirections: R,
      connect: T,
      maxRequestsPerClient: O,
      localAddress: S,
      maxResponseSize: f,
      autoSelectFamily: a,
      autoSelectFamilyAttemptTimeout: g,
      maxConcurrentStreams: Y1,
      allowH2: r,
    } = {}
  ) {
    super();
    if (F !== void 0) throw new KQ('unsupported keepAlive, use pipelining=0 instead');
    if (G !== void 0)
      throw new KQ('unsupported socketTimeout, use headersTimeout & bodyTimeout instead');
    if (D !== void 0)
      throw new KQ('unsupported requestTimeout, use headersTimeout & bodyTimeout instead');
    if (W !== void 0) throw new KQ('unsupported idleTimeout, use keepAliveTimeout instead');
    if (C !== void 0)
      throw new KQ('unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead');
    if (Q != null && !Number.isFinite(Q)) throw new KQ('invalid maxHeaderSize');
    if (K != null && typeof K !== 'string') throw new KQ('invalid socketPath');
    if (Z != null && (!Number.isFinite(Z) || Z < 0)) throw new KQ('invalid connectTimeout');
    if (J != null && (!Number.isFinite(J) || J <= 0)) throw new KQ('invalid keepAliveTimeout');
    if (X != null && (!Number.isFinite(X) || X <= 0)) throw new KQ('invalid keepAliveMaxTimeout');
    if (V != null && !Number.isFinite(V)) throw new KQ('invalid keepAliveTimeoutThreshold');
    if (I != null && (!Number.isInteger(I) || I < 0))
      throw new KQ('headersTimeout must be a positive integer or zero');
    if (Y != null && (!Number.isInteger(Y) || Y < 0))
      throw new KQ('bodyTimeout must be a positive integer or zero');
    if (T != null && typeof T !== 'function' && typeof T !== 'object')
      throw new KQ('connect must be a function or an object');
    if (R != null && (!Number.isInteger(R) || R < 0))
      throw new KQ('maxRedirections must be a positive number');
    if (O != null && (!Number.isInteger(O) || O < 0))
      throw new KQ('maxRequestsPerClient must be a positive number');
    if (S != null && (typeof S !== 'string' || Jy0.isIP(S) === 0))
      throw new KQ('localAddress must be valid string IP address');
    if (f != null && (!Number.isInteger(f) || f < -1))
      throw new KQ('maxResponseSize must be a positive number');
    if (g != null && (!Number.isInteger(g) || g < -1))
      throw new KQ('autoSelectFamilyAttemptTimeout must be a positive number');
    if (r != null && typeof r !== 'boolean') throw new KQ('allowH2 must be a valid boolean value');
    if (Y1 != null && (typeof Y1 !== 'number' || Y1 < 1))
      throw new KQ('maxConcurrentStreams must be a positive integer, greater than 0');
    if (typeof T !== 'function')
      T = _36({
        ...N,
        maxCachedSessions: M,
        allowH2: r,
        socketPath: K,
        timeout: Z,
        ...(a ? { autoSelectFamily: a, autoSelectFamilyAttemptTimeout: g } : void 0),
        ...T,
      });
    if (B?.Client && Array.isArray(B.Client)) {
      if (((this[Zy0] = B.Client), !Yy0))
        ((Yy0 = !0),
          process.emitWarning(
            'Client.Options#interceptor is deprecated. Use Dispatcher#compose instead.',
            { code: 'UNDICI-CLIENT-INTERCEPTOR-DEPRECATED' }
          ));
    } else this[Zy0] = [e36({ maxRedirections: R })];
    ((this[gz] = yS.parseOrigin(A)),
      (this[ks] = T),
      (this[lY1] = U != null ? U : 1),
      (this[b36] = Q || R36.maxHeaderSize),
      (this[Dy0] = J == null ? 4000 : J),
      (this[g36] = X == null ? 600000 : X),
      (this[h36] = V == null ? 2000 : V),
      (this[v36] = this[Dy0]),
      (this[jL] = null),
      (this[xs] = S != null ? S : null),
      (this[kS] = 0),
      (this[kL] = 0),
      (this[x36] = `host: ${this[gz].hostname}${this[gz].port ? `:${this[gz].port}` : ''}\r
`),
      (this[d36] = Y != null ? Y : 300000),
      (this[m36] = I != null ? I : 300000),
      (this[u36] = q == null ? !0 : q),
      (this[p36] = R),
      (this[fm1] = O),
      (this[yL] = null),
      (this[a36] = f > -1 ? f : -1),
      (this[r36] = Y1 != null ? Y1 : 100),
      (this[HQ] = null),
      (this[SV] = []),
      (this[QN] = 0),
      (this[_V] = 0),
      (this[fs] = (w1) => vm1(this, w1)),
      (this[s36] = (w1) => Vy0(this, w1)));
  }
  get pipelining() {
    return this[lY1];
  }
  set pipelining(A) {
    ((this[lY1] = A), this[fs](!0));
  }
  get [gs]() {
    return this[SV].length - this[_V];
  }
  get [bs]() {
    return this[_V] - this[QN];
  }
  get [vs]() {
    return this[SV].length - this[QN];
  }
  get [k36]() {
    return !!this[HQ] && !this[og] && !this[HQ].destroyed;
  }
  get [xm1]() {
    return Boolean(this[HQ]?.busy(null) || this[vs] >= (Cy0(this) || 1) || this[gs] > 0);
  }
  [y36](A) {
    (Ky0(this), this.once('connect', A));
  }
  [n36](A, B) {
    let Q = A.origin || this[gz].origin,
      I = new O36(Q, A, B);
    if ((this[SV].push(I), this[kS]));
    else if (yS.bodyLength(I.body) == null && yS.isIterable(I.body))
      ((this[kS] = 1), queueMicrotask(() => vm1(this)));
    else this[fs](!0);
    if (this[kS] && this[kL] !== 2 && this[xm1]) this[kL] = 2;
    return this[kL] < 2;
  }
  async [l36]() {
    return new Promise((A) => {
      if (this[vs]) this[yL] = A;
      else A(null);
    });
  }
  async [i36](A) {
    return new Promise((B) => {
      let Q = this[SV].splice(this[_V]);
      for (let G = 0; G < Q.length; G++) {
        let D = Q[G];
        yS.errorRequest(this, D, A);
      }
      let I = () => {
        if (this[yL]) (this[yL](), (this[yL] = null));
        B(null);
      };
      if (this[HQ]) (this[HQ].destroy(A, I), (this[HQ] = null));
      else queueMicrotask(I);
      this[fs]();
    });
  }
}
var e36 = cY1();
function Vy0(A, B) {
  if (A[bs] === 0 && B.code !== 'UND_ERR_INFO' && B.code !== 'UND_ERR_SOCKET') {
    BN(A[_V] === A[QN]);
    let Q = A[SV].splice(A[QN]);
    for (let I = 0; I < Q.length; I++) {
      let G = Q[I];
      yS.errorRequest(A, G, B);
    }
    BN(A[vs] === 0);
  }
}
async function Ky0(A) {
  (BN(!A[og]), BN(!A[HQ]));
  let { host: B, hostname: Q, protocol: I, port: G } = A[gz];
  if (Q[0] === '[') {
    let D = Q.indexOf(']');
    BN(D !== -1);
    let Z = Q.substring(1, D);
    (BN(Jy0.isIP(Z)), (Q = Z));
  }
  if (((A[og] = !0), rg.beforeConnect.hasSubscribers))
    rg.beforeConnect.publish({
      connectParams: {
        host: B,
        hostname: Q,
        protocol: I,
        port: G,
        version: A[HQ]?.version,
        servername: A[jL],
        localAddress: A[xs],
      },
      connector: A[ks],
    });
  try {
    let D = await new Promise((Z, Y) => {
      A[ks](
        { host: B, hostname: Q, protocol: I, port: G, servername: A[jL], localAddress: A[xs] },
        (W, F) => {
          if (W) Y(W);
          else Z(F);
        }
      );
    });
    if (A.destroyed) {
      yS.destroy(D.on('error', Wy0), new S36());
      return;
    }
    BN(D);
    try {
      A[HQ] = D.alpnProtocol === 'h2' ? await t36(A, D) : await o36(A, D);
    } catch (Z) {
      throw (D.destroy().on('error', Wy0), Z);
    }
    if (
      ((A[og] = !1),
      (D[c36] = 0),
      (D[fm1] = A[fm1]),
      (D[j36] = A),
      (D[f36] = null),
      rg.connected.hasSubscribers)
    )
      rg.connected.publish({
        connectParams: {
          host: B,
          hostname: Q,
          protocol: I,
          port: G,
          version: A[HQ]?.version,
          servername: A[jL],
          localAddress: A[xs],
        },
        connector: A[ks],
        socket: D,
      });
    A.emit('connect', A[gz], [A]);
  } catch (D) {
    if (A.destroyed) return;
    if (((A[og] = !1), rg.connectError.hasSubscribers))
      rg.connectError.publish({
        connectParams: {
          host: B,
          hostname: Q,
          protocol: I,
          port: G,
          version: A[HQ]?.version,
          servername: A[jL],
          localAddress: A[xs],
        },
        connector: A[ks],
        error: D,
      });
    if (D.code === 'ERR_TLS_CERT_ALTNAME_INVALID') {
      BN(A[bs] === 0);
      while (A[gs] > 0 && A[SV][A[_V]].servername === A[jL]) {
        let Z = A[SV][A[_V]++];
        yS.errorRequest(A, Z, D);
      }
    } else Vy0(A, D);
    A.emit('connectionError', A[gz], [A], D);
  }
  A[fs]();
}
function Fy0(A) {
  ((A[kL] = 0), A.emit('drain', A[gz], [A]));
}
function vm1(A, B) {
  if (A[kS] === 2) return;
  if (((A[kS] = 2), AQ6(A, B), (A[kS] = 0), A[QN] > 256))
    (A[SV].splice(0, A[QN]), (A[_V] -= A[QN]), (A[QN] = 0));
}
function AQ6(A, B) {
  while (!0) {
    if (A.destroyed) {
      BN(A[gs] === 0);
      return;
    }
    if (A[yL] && !A[vs]) {
      (A[yL](), (A[yL] = null));
      return;
    }
    if (A[HQ]) A[HQ].resume();
    if (A[xm1]) A[kL] = 2;
    else if (A[kL] === 2) {
      if (B) ((A[kL] = 1), queueMicrotask(() => Fy0(A)));
      else Fy0(A);
      continue;
    }
    if (A[gs] === 0) return;
    if (A[bs] >= (Cy0(A) || 1)) return;
    let Q = A[SV][A[_V]];
    if (A[gz].protocol === 'https:' && A[jL] !== Q.servername) {
      if (A[bs] > 0) return;
      ((A[jL] = Q.servername),
        A[HQ]?.destroy(new P36('servername changed'), () => {
          ((A[HQ] = null), vm1(A));
        }));
    }
    if (A[og]) return;
    if (!A[HQ]) {
      Ky0(A);
      return;
    }
    if (A[HQ].destroyed) return;
    if (A[HQ].busy(Q)) return;
    if (!Q.aborted && A[HQ].write(Q)) A[_V]++;
    else A[SV].splice(A[_V], 1);
  }
}
Hy0.exports = Xy0;
