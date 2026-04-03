// Module: GU
// Params: Zm5,mfA

var {
    create: cl9,
    defineProperty: Hl,
    getOwnPropertyDescriptor: ll9,
    getOwnPropertyNames: il9,
    getPrototypeOf: nl9,
  } = Object,
  al9 = Object.prototype.hasOwnProperty,
  P8 = (A, B) => Hl(A, 'name', { value: B, configurable: !0 }),
  sl9 = (A, B) => {
    for (var Q in B) Hl(A, Q, { get: B[Q], enumerable: !0 });
  },
  jfA = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of il9(B))
        if (!al9.call(A, G) && G !== Q)
          Hl(A, G, { get: () => B[G], enumerable: !(I = ll9(B, G)) || I.enumerable });
    }
    return A;
  },
  rl9 = (A, B, Q) => (
    (Q = A != null ? cl9(nl9(A)) : {}),
    jfA(B || !A || !A.__esModule ? Hl(Q, 'default', { value: A, enumerable: !0 }) : Q, A)
  ),
  ol9 = (A) => jfA(Hl({}, '__esModule', { value: !0 }), A),
  yfA = {};
sl9(yfA, {
  DEFAULT_REQUEST_TIMEOUT: () => gfA,
  NodeHttp2Handler: () => Yi9,
  NodeHttpHandler: () => Ii9,
  streamCollector: () => Fi9,
});
mfA.exports = ol9(yfA);
var kfA = EfA(),
  xfA = OfA(),
  XO1 = D1('http'),
  VO1 = D1('https'),
  tl9 = ['ECONNRESET', 'EPIPE', 'ETIMEDOUT'],
  ffA = P8((A) => {
    let B = {};
    for (let Q of Object.keys(A)) {
      let I = A[Q];
      B[Q] = Array.isArray(I) ? I.join(',') : I;
    }
    return B;
  }, 'getTransformedHeaders'),
  YY = { setTimeout: (A, B) => setTimeout(A, B), clearTimeout: (A) => clearTimeout(A) },
  TfA = 1000,
  el9 = P8((A, B, Q = 0) => {
    if (!Q) return -1;
    let I = P8((G) => {
      let D = YY.setTimeout(() => {
          (A.destroy(),
            B(
              Object.assign(
                new Error(`Socket timed out without establishing a connection within ${Q} ms`),
                { name: 'TimeoutError' }
              )
            ));
        }, Q - G),
        Z = P8((Y) => {
          if (Y?.connecting)
            Y.on('connect', () => {
              YY.clearTimeout(D);
            });
          else YY.clearTimeout(D);
        }, 'doWithSocket');
      if (A.socket) Z(A.socket);
      else A.on('socket', Z);
    }, 'registerTimeout');
    if (Q < 2000) return (I(0), 0);
    return YY.setTimeout(I.bind(null, TfA), TfA);
  }, 'setConnectionTimeout'),
  Ai9 = 3000,
  Bi9 = P8((A, { keepAlive: B, keepAliveMsecs: Q }, I = Ai9) => {
    if (B !== !0) return -1;
    let G = P8(() => {
      if (A.socket) A.socket.setKeepAlive(B, Q || 0);
      else
        A.on('socket', (D) => {
          D.setKeepAlive(B, Q || 0);
        });
    }, 'registerListener');
    if (I === 0) return (G(), 0);
    return YY.setTimeout(G, I);
  }, 'setSocketKeepAlive'),
  PfA = 3000,
  Qi9 = P8((A, B, Q = gfA) => {
    let I = P8((G) => {
      let D = Q - G,
        Z = P8(() => {
          (A.destroy(),
            B(
              Object.assign(new Error(`Connection timed out after ${Q} ms`), {
                name: 'TimeoutError',
              })
            ));
        }, 'onTimeout');
      if (A.socket)
        (A.socket.setTimeout(D, Z), A.on('close', () => A.socket?.removeListener('timeout', Z)));
      else A.setTimeout(D, Z);
    }, 'registerTimeout');
    if (0 < Q && Q < 6000) return (I(0), 0);
    return YY.setTimeout(I.bind(null, Q === 0 ? 0 : PfA), PfA);
  }, 'setSocketTimeout'),
  vfA = D1('stream'),
  SfA = 6000;
async function KO1(A, B, Q = SfA) {
  let I = B.headers ?? {},
    G = I.Expect || I.expect,
    D = -1,
    Z = !0;
  if (G === '100-continue')
    Z = await Promise.race([
      new Promise((Y) => {
        D = Number(YY.setTimeout(() => Y(!0), Math.max(SfA, Q)));
      }),
      new Promise((Y) => {
        (A.on('continue', () => {
          (YY.clearTimeout(D), Y(!0));
        }),
          A.on('response', () => {
            (YY.clearTimeout(D), Y(!1));
          }),
          A.on('error', () => {
            (YY.clearTimeout(D), Y(!1));
          }));
      }),
    ]);
  if (Z) bfA(A, B.body);
}
P8(KO1, 'writeRequestBody');
function bfA(A, B) {
  if (B instanceof vfA.Readable) {
    B.pipe(A);
    return;
  }
  if (B) {
    if (Buffer.isBuffer(B) || typeof B === 'string') {
      A.end(B);
      return;
    }
    let Q = B;
    if (
      typeof Q === 'object' &&
      Q.buffer &&
      typeof Q.byteOffset === 'number' &&
      typeof Q.byteLength === 'number'
    ) {
      A.end(Buffer.from(Q.buffer, Q.byteOffset, Q.byteLength));
      return;
    }
    A.end(Buffer.from(B));
    return;
  }
  A.end();
}
P8(bfA, 'writeBody');
var gfA = 0,
  Ii9 = class A {
    constructor(B) {
      ((this.socketWarningTimestamp = 0),
        (this.metadata = { handlerProtocol: 'http/1.1' }),
        (this.configProvider = new Promise((Q, I) => {
          if (typeof B === 'function')
            B()
              .then((G) => {
                Q(this.resolveDefaultConfig(G));
              })
              .catch(I);
          else Q(this.resolveDefaultConfig(B));
        })));
    }
    static {
      P8(this, 'NodeHttpHandler');
    }
    static create(B) {
      if (typeof B?.handle === 'function') return B;
      return new A(B);
    }
    static checkSocketUsage(B, Q, I = console) {
      let { sockets: G, requests: D, maxSockets: Z } = B;
      if (typeof Z !== 'number' || Z === 1 / 0) return Q;
      let Y = 15000;
      if (Date.now() - Y < Q) return Q;
      if (G && D)
        for (let W in G) {
          let F = G[W]?.length ?? 0,
            J = D[W]?.length ?? 0;
          if (F >= Z && J >= 2 * Z)
            return (
              I?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${F} and ${J} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`),
              Date.now()
            );
        }
      return Q;
    }
    resolveDefaultConfig(B) {
      let {
          requestTimeout: Q,
          connectionTimeout: I,
          socketTimeout: G,
          socketAcquisitionWarningTimeout: D,
          httpAgent: Z,
          httpsAgent: Y,
        } = B || {},
        W = !0,
        F = 50;
      return {
        connectionTimeout: I,
        requestTimeout: Q ?? G,
        socketAcquisitionWarningTimeout: D,
        httpAgent: (() => {
          if (Z instanceof XO1.Agent || typeof Z?.destroy === 'function') return Z;
          return new XO1.Agent({ keepAlive: !0, maxSockets: 50, ...Z });
        })(),
        httpsAgent: (() => {
          if (Y instanceof VO1.Agent || typeof Y?.destroy === 'function') return Y;
          return new VO1.Agent({ keepAlive: !0, maxSockets: 50, ...Y });
        })(),
        logger: console,
      };
    }
    destroy() {
      (this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy());
    }
    async handle(B, { abortSignal: Q } = {}) {
      if (!this.config) this.config = await this.configProvider;
      return new Promise((I, G) => {
        let D = void 0,
          Z = [],
          Y = P8(async (R) => {
            (await D, Z.forEach(YY.clearTimeout), I(R));
          }, 'resolve'),
          W = P8(async (R) => {
            (await D, Z.forEach(YY.clearTimeout), G(R));
          }, 'reject');
        if (!this.config) throw new Error('Node HTTP request handler config is not resolved');
        if (Q?.aborted) {
          let R = new Error('Request aborted');
          ((R.name = 'AbortError'), W(R));
          return;
        }
        let F = B.protocol === 'https:',
          J = F ? this.config.httpsAgent : this.config.httpAgent;
        Z.push(
          YY.setTimeout(
            () => {
              this.socketWarningTimestamp = A.checkSocketUsage(
                J,
                this.socketWarningTimestamp,
                this.config.logger
              );
            },
            this.config.socketAcquisitionWarningTimeout ??
              (this.config.requestTimeout ?? 2000) + (this.config.connectionTimeout ?? 1000)
          )
        );
        let C = xfA.buildQueryString(B.query || {}),
          X = void 0;
        if (B.username != null || B.password != null) {
          let R = B.username ?? '',
            T = B.password ?? '';
          X = `${R}:${T}`;
        }
        let V = B.path;
        if (C) V += `?${C}`;
        if (B.fragment) V += `#${B.fragment}`;
        let K = B.hostname ?? '';
        if (K[0] === '[' && K.endsWith(']')) K = B.hostname.slice(1, -1);
        else K = B.hostname;
        let U = {
            headers: B.headers,
            host: K,
            method: B.method,
            path: V,
            port: B.port,
            agent: J,
            auth: X,
          },
          q = (F ? VO1.request : XO1.request)(U, (R) => {
            let T = new kfA.HttpResponse({
              statusCode: R.statusCode || -1,
              reason: R.statusMessage,
              headers: ffA(R.headers),
              body: R,
            });
            Y({ response: T });
          });
        if (
          (q.on('error', (R) => {
            if (tl9.includes(R.code)) W(Object.assign(R, { name: 'TimeoutError' }));
            else W(R);
          }),
          Q)
        ) {
          let R = P8(() => {
            q.destroy();
            let T = new Error('Request aborted');
            ((T.name = 'AbortError'), W(T));
          }, 'onAbort');
          if (typeof Q.addEventListener === 'function') {
            let T = Q;
            (T.addEventListener('abort', R, { once: !0 }),
              q.once('close', () => T.removeEventListener('abort', R)));
          } else Q.onabort = R;
        }
        (Z.push(el9(q, W, this.config.connectionTimeout)),
          Z.push(Qi9(q, W, this.config.requestTimeout)));
        let M = U.agent;
        if (typeof M === 'object' && 'keepAlive' in M)
          Z.push(Bi9(q, { keepAlive: M.keepAlive, keepAliveMsecs: M.keepAliveMsecs }));
        D = KO1(q, B, this.config.requestTimeout).catch((R) => {
          return (Z.forEach(YY.clearTimeout), G(R));
        });
      });
    }
    updateHttpClientConfig(B, Q) {
      ((this.config = void 0),
        (this.configProvider = this.configProvider.then((I) => {
          return { ...I, [B]: Q };
        })));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  },
  _fA = D1('http2'),
  Gi9 = rl9(D1('http2')),
  Di9 = class {
    constructor(A) {
      ((this.sessions = []), (this.sessions = A ?? []));
    }
    static {
      P8(this, 'NodeHttp2ConnectionPool');
    }
    poll() {
      if (this.sessions.length > 0) return this.sessions.shift();
    }
    offerLast(A) {
      this.sessions.push(A);
    }
    contains(A) {
      return this.sessions.includes(A);
    }
    remove(A) {
      this.sessions = this.sessions.filter((B) => B !== A);
    }
    [Symbol.iterator]() {
      return this.sessions[Symbol.iterator]();
    }
    destroy(A) {
      for (let B of this.sessions)
        if (B === A) {
          if (!B.destroyed) B.destroy();
        }
    }
  },
  Zi9 = class {
    constructor(A) {
      if (
        ((this.sessionCache = new Map()),
        (this.config = A),
        this.config.maxConcurrency && this.config.maxConcurrency <= 0)
      )
        throw new RangeError('maxConcurrency must be greater than zero.');
    }
    static {
      P8(this, 'NodeHttp2ConnectionManager');
    }
    lease(A, B) {
      let Q = this.getUrlString(A),
        I = this.sessionCache.get(Q);
      if (I) {
        let Y = I.poll();
        if (Y && !this.config.disableConcurrency) return Y;
      }
      let G = Gi9.default.connect(Q);
      if (this.config.maxConcurrency)
        G.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (Y) => {
          if (Y)
            throw new Error(
              'Fail to set maxConcurrentStreams to ' +
                this.config.maxConcurrency +
                'when creating new session for ' +
                A.destination.toString()
            );
        });
      G.unref();
      let D = P8(() => {
        (G.destroy(), this.deleteSession(Q, G));
      }, 'destroySessionCb');
      if (
        (G.on('goaway', D),
        G.on('error', D),
        G.on('frameError', D),
        G.on('close', () => this.deleteSession(Q, G)),
        B.requestTimeout)
      )
        G.setTimeout(B.requestTimeout, D);
      let Z = this.sessionCache.get(Q) || new Di9();
      return (Z.offerLast(G), this.sessionCache.set(Q, Z), G);
    }
    deleteSession(A, B) {
      let Q = this.sessionCache.get(A);
      if (!Q) return;
      if (!Q.contains(B)) return;
      (Q.remove(B), this.sessionCache.set(A, Q));
    }
    release(A, B) {
      let Q = this.getUrlString(A);
      this.sessionCache.get(Q)?.offerLast(B);
    }
    destroy() {
      for (let [A, B] of this.sessionCache) {
        for (let Q of B) {
          if (!Q.destroyed) Q.destroy();
          B.remove(Q);
        }
        this.sessionCache.delete(A);
      }
    }
    setMaxConcurrentStreams(A) {
      if (A && A <= 0) throw new RangeError('maxConcurrentStreams must be greater than zero.');
      this.config.maxConcurrency = A;
    }
    setDisableConcurrentStreams(A) {
      this.config.disableConcurrency = A;
    }
    getUrlString(A) {
      return A.destination.toString();
    }
  },
  Yi9 = class A {
    constructor(B) {
      ((this.metadata = { handlerProtocol: 'h2' }),
        (this.connectionManager = new Zi9({})),
        (this.configProvider = new Promise((Q, I) => {
          if (typeof B === 'function')
            B()
              .then((G) => {
                Q(G || {});
              })
              .catch(I);
          else Q(B || {});
        })));
    }
    static {
      P8(this, 'NodeHttp2Handler');
    }
    static create(B) {
      if (typeof B?.handle === 'function') return B;
      return new A(B);
    }
    destroy() {
      this.connectionManager.destroy();
    }
    async handle(B, { abortSignal: Q } = {}) {
      if (!this.config) {
        if (
          ((this.config = await this.configProvider),
          this.connectionManager.setDisableConcurrentStreams(
            this.config.disableConcurrentStreams || !1
          ),
          this.config.maxConcurrentStreams)
        )
          this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
      }
      let { requestTimeout: I, disableConcurrentStreams: G } = this.config;
      return new Promise((D, Z) => {
        let Y = !1,
          W = void 0,
          F = P8(async (a) => {
            (await W, D(a));
          }, 'resolve'),
          J = P8(async (a) => {
            (await W, Z(a));
          }, 'reject');
        if (Q?.aborted) {
          Y = !0;
          let a = new Error('Request aborted');
          ((a.name = 'AbortError'), J(a));
          return;
        }
        let { hostname: C, method: X, port: V, protocol: K, query: U } = B,
          N = '';
        if (B.username != null || B.password != null) {
          let a = B.username ?? '',
            g = B.password ?? '';
          N = `${a}:${g}@`;
        }
        let q = `${K}//${N}${C}${V ? `:${V}` : ''}`,
          M = { destination: new URL(q) },
          R = this.connectionManager.lease(M, {
            requestTimeout: this.config?.sessionTimeout,
            disableConcurrentStreams: G || !1,
          }),
          T = P8((a) => {
            if (G) this.destroySession(R);
            ((Y = !0), J(a));
          }, 'rejectWithDestroy'),
          O = xfA.buildQueryString(U || {}),
          S = B.path;
        if (O) S += `?${O}`;
        if (B.fragment) S += `#${B.fragment}`;
        let f = R.request({
          ...B.headers,
          [_fA.constants.HTTP2_HEADER_PATH]: S,
          [_fA.constants.HTTP2_HEADER_METHOD]: X,
        });
        if (
          (R.ref(),
          f.on('response', (a) => {
            let g = new kfA.HttpResponse({
              statusCode: a[':status'] || -1,
              headers: ffA(a),
              body: f,
            });
            if (((Y = !0), F({ response: g }), G))
              (R.close(), this.connectionManager.deleteSession(q, R));
          }),
          I)
        )
          f.setTimeout(I, () => {
            f.close();
            let a = new Error(`Stream timed out because of no activity for ${I} ms`);
            ((a.name = 'TimeoutError'), T(a));
          });
        if (Q) {
          let a = P8(() => {
            f.close();
            let g = new Error('Request aborted');
            ((g.name = 'AbortError'), T(g));
          }, 'onAbort');
          if (typeof Q.addEventListener === 'function') {
            let g = Q;
            (g.addEventListener('abort', a, { once: !0 }),
              f.once('close', () => g.removeEventListener('abort', a)));
          } else Q.onabort = a;
        }
        (f.on('frameError', (a, g, Y1) => {
          T(new Error(`Frame type id ${a} in stream id ${Y1} has failed with code ${g}.`));
        }),
          f.on('error', T),
          f.on('aborted', () => {
            T(
              new Error(
                `HTTP/2 stream is abnormally aborted in mid-communication with result code ${f.rstCode}.`
              )
            );
          }),
          f.on('close', () => {
            if ((R.unref(), G)) R.destroy();
            if (!Y) T(new Error('Unexpected error: http2 request did not get a response'));
          }),
          (W = KO1(f, B, I)));
      });
    }
    updateHttpClientConfig(B, Q) {
      ((this.config = void 0),
        (this.configProvider = this.configProvider.then((I) => {
          return { ...I, [B]: Q };
        })));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
    destroySession(B) {
      if (!B.destroyed) B.destroy();
    }
  },
  Wi9 = class extends vfA.Writable {
    constructor() {
      super(...arguments);
      this.bufferedBytes = [];
    }
    static {
      P8(this, 'Collector');
    }
    _write(A, B, Q) {
      (this.bufferedBytes.push(A), Q());
    }
  },
  Fi9 = P8((A) => {
    if (Ji9(A)) return hfA(A);
    return new Promise((B, Q) => {
      let I = new Wi9();
      (A.pipe(I),
        A.on('error', (G) => {
          (I.end(), Q(G));
        }),
        I.on('error', Q),
        I.on('finish', function () {
          let G = new Uint8Array(Buffer.concat(this.bufferedBytes));
          B(G);
        }));
    });
  }, 'streamCollector'),
  Ji9 = P8(
    (A) => typeof ReadableStream === 'function' && A instanceof ReadableStream,
    'isReadableStreamInstance'
  );
async function hfA(A) {
  let B = [],
    Q = A.getReader(),
    I = !1,
    G = 0;
  while (!I) {
    let { done: Y, value: W } = await Q.read();
    if (W) (B.push(W), (G += W.length));
    I = Y;
  }
  let D = new Uint8Array(G),
    Z = 0;
  for (let Y of B) (D.set(Y, Z), (Z += Y.length));
  return D;
}
P8(hfA, 'collectReadableStream');
