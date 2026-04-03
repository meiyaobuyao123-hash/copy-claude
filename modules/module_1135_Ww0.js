// Module: Ww0
// Params: eW8,Yw0

var {
    create: pu4,
    defineProperty: _a,
    getOwnPropertyDescriptor: cu4,
    getOwnPropertyNames: lu4,
    getPrototypeOf: iu4,
  } = Object,
  nu4 = Object.prototype.hasOwnProperty,
  II = (A, B) => _a(A, 'name', { value: B, configurable: !0 }),
  au4 = (A, B) => {
    for (var Q in B) _a(A, Q, { get: B[Q], enumerable: !0 });
  },
  sz0 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of lu4(B))
        if (!nu4.call(A, G) && G !== Q)
          _a(A, G, { get: () => B[G], enumerable: !(I = cu4(B, G)) || I.enumerable });
    }
    return A;
  },
  su4 = (A, B, Q) => (
    (Q = A != null ? pu4(iu4(A)) : {}),
    sz0(B || !A || !A.__esModule ? _a(Q, 'default', { value: A, enumerable: !0 }) : Q, A)
  ),
  ru4 = (A) => sz0(_a({}, '__esModule', { value: !0 }), A),
  rz0 = {};
au4(rz0, {
  DEFAULT_REQUEST_TIMEOUT: () => Bp4,
  NodeHttp2Handler: () => Zp4,
  NodeHttpHandler: () => Qp4,
  streamCollector: () => Wp4,
});
Yw0.exports = ru4(rz0);
var oz0 = nG1(),
  tz0 = Nv1(),
  Rv1 = D1('http'),
  Ov1 = D1('https'),
  ou4 = ['ECONNRESET', 'EPIPE', 'ETIMEDOUT'],
  ez0 = II((A) => {
    let B = {};
    for (let Q of Object.keys(A)) {
      let I = A[Q];
      B[Q] = Array.isArray(I) ? I.join(',') : I;
    }
    return B;
  }, 'getTransformedHeaders'),
  tu4 = II((A, B, Q = 0) => {
    if (!Q) return;
    let I = setTimeout(() => {
      (A.destroy(),
        B(
          Object.assign(
            new Error(`Socket timed out without establishing a connection within ${Q} ms`),
            { name: 'TimeoutError' }
          )
        ));
    }, Q);
    A.on('socket', (G) => {
      if (G.connecting)
        G.on('connect', () => {
          clearTimeout(I);
        });
      else clearTimeout(I);
    });
  }, 'setConnectionTimeout'),
  eu4 = II((A, { keepAlive: B, keepAliveMsecs: Q }) => {
    if (B !== !0) return;
    A.on('socket', (I) => {
      I.setKeepAlive(B, Q || 0);
    });
  }, 'setSocketKeepAlive'),
  Ap4 = II((A, B, Q = 0) => {
    A.setTimeout(Q, () => {
      (A.destroy(),
        B(
          Object.assign(new Error(`Connection timed out after ${Q} ms`), { name: 'TimeoutError' })
        ));
    });
  }, 'setSocketTimeout'),
  Aw0 = D1('stream'),
  nz0 = 1000;
async function Tv1(A, B, Q = nz0) {
  let I = B.headers ?? {},
    G = I.Expect || I.expect,
    D = -1,
    Z = !1;
  if (G === '100-continue')
    await Promise.race([
      new Promise((Y) => {
        D = Number(setTimeout(Y, Math.max(nz0, Q)));
      }),
      new Promise((Y) => {
        (A.on('continue', () => {
          (clearTimeout(D), Y());
        }),
          A.on('error', () => {
            ((Z = !0), clearTimeout(D), Y());
          }));
      }),
    ]);
  if (!Z) Bw0(A, B.body);
}
II(Tv1, 'writeRequestBody');
function Bw0(A, B) {
  if (B instanceof Aw0.Readable) {
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
II(Bw0, 'writeBody');
var Bp4 = 0,
  Qw0 = class A {
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
    static create(B) {
      if (typeof (B == null ? void 0 : B.handle) === 'function') return B;
      return new A(B);
    }
    static checkSocketUsage(B, Q) {
      var I, G;
      let { sockets: D, requests: Z, maxSockets: Y } = B;
      if (typeof Y !== 'number' || Y === 1 / 0) return Q;
      let W = 15000;
      if (Date.now() - W < Q) return Q;
      if (D && Z)
        for (let F in D) {
          let J = ((I = D[F]) == null ? void 0 : I.length) ?? 0,
            C = ((G = Z[F]) == null ? void 0 : G.length) ?? 0;
          if (J >= Y && C >= 2 * Y)
            return (
              console.warn(
                '@smithy/node-http-handler:WARN',
                `socket usage at capacity=${J} and ${C} additional requests are enqueued.`,
                'See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html',
                'or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.'
              ),
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
          httpAgent: D,
          httpsAgent: Z,
        } = B || {},
        Y = !0,
        W = 50;
      return {
        connectionTimeout: I,
        requestTimeout: Q ?? G,
        httpAgent: (() => {
          if (D instanceof Rv1.Agent || typeof (D == null ? void 0 : D.destroy) === 'function')
            return D;
          return new Rv1.Agent({ keepAlive: !0, maxSockets: 50, ...D });
        })(),
        httpsAgent: (() => {
          if (Z instanceof Ov1.Agent || typeof (Z == null ? void 0 : Z.destroy) === 'function')
            return Z;
          return new Ov1.Agent({ keepAlive: !0, maxSockets: 50, ...Z });
        })(),
      };
    }
    destroy() {
      var B, Q, I, G;
      ((Q = (B = this.config) == null ? void 0 : B.httpAgent) == null || Q.destroy(),
        (G = (I = this.config) == null ? void 0 : I.httpsAgent) == null || G.destroy());
    }
    async handle(B, { abortSignal: Q } = {}) {
      if (!this.config) this.config = await this.configProvider;
      let I;
      return new Promise((G, D) => {
        let Z = void 0,
          Y = II(async (M) => {
            (await Z, clearTimeout(I), G(M));
          }, 'resolve'),
          W = II(async (M) => {
            (await Z, D(M));
          }, 'reject');
        if (!this.config) throw new Error('Node HTTP request handler config is not resolved');
        if (Q == null ? void 0 : Q.aborted) {
          let M = new Error('Request aborted');
          ((M.name = 'AbortError'), W(M));
          return;
        }
        let F = B.protocol === 'https:',
          J = F ? this.config.httpsAgent : this.config.httpAgent;
        I = setTimeout(
          () => {
            this.socketWarningTimestamp = A.checkSocketUsage(J, this.socketWarningTimestamp);
          },
          this.config.socketAcquisitionWarningTimeout ??
            (this.config.requestTimeout ?? 2000) + (this.config.connectionTimeout ?? 1000)
        );
        let C = tz0.buildQueryString(B.query || {}),
          X = void 0;
        if (B.username != null || B.password != null) {
          let M = B.username ?? '',
            R = B.password ?? '';
          X = `${M}:${R}`;
        }
        let V = B.path;
        if (C) V += `?${C}`;
        if (B.fragment) V += `#${B.fragment}`;
        let K = {
            headers: B.headers,
            host: B.hostname,
            method: B.method,
            path: V,
            port: B.port,
            agent: J,
            auth: X,
          },
          N = (F ? Ov1.request : Rv1.request)(K, (M) => {
            let R = new oz0.HttpResponse({
              statusCode: M.statusCode || -1,
              reason: M.statusMessage,
              headers: ez0(M.headers),
              body: M,
            });
            Y({ response: R });
          });
        if (
          (N.on('error', (M) => {
            if (ou4.includes(M.code)) W(Object.assign(M, { name: 'TimeoutError' }));
            else W(M);
          }),
          tu4(N, W, this.config.connectionTimeout),
          Ap4(N, W, this.config.requestTimeout),
          Q)
        )
          Q.onabort = () => {
            N.abort();
            let M = new Error('Request aborted');
            ((M.name = 'AbortError'), W(M));
          };
        let q = K.agent;
        if (typeof q === 'object' && 'keepAlive' in q)
          eu4(N, { keepAlive: q.keepAlive, keepAliveMsecs: q.keepAliveMsecs });
        Z = Tv1(N, B, this.config.requestTimeout).catch(D);
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
  };
II(Qw0, 'NodeHttpHandler');
var Qp4 = Qw0,
  az0 = D1('http2'),
  Ip4 = su4(D1('http2')),
  Iw0 = class A {
    constructor(B) {
      ((this.sessions = []), (this.sessions = B ?? []));
    }
    poll() {
      if (this.sessions.length > 0) return this.sessions.shift();
    }
    offerLast(B) {
      this.sessions.push(B);
    }
    contains(B) {
      return this.sessions.includes(B);
    }
    remove(B) {
      this.sessions = this.sessions.filter((Q) => Q !== B);
    }
    [Symbol.iterator]() {
      return this.sessions[Symbol.iterator]();
    }
    destroy(B) {
      for (let Q of this.sessions)
        if (Q === B) {
          if (!Q.destroyed) Q.destroy();
        }
    }
  };
II(Iw0, 'NodeHttp2ConnectionPool');
var Gp4 = Iw0,
  Gw0 = class A {
    constructor(B) {
      if (
        ((this.sessionCache = new Map()),
        (this.config = B),
        this.config.maxConcurrency && this.config.maxConcurrency <= 0)
      )
        throw new RangeError('maxConcurrency must be greater than zero.');
    }
    lease(B, Q) {
      let I = this.getUrlString(B),
        G = this.sessionCache.get(I);
      if (G) {
        let W = G.poll();
        if (W && !this.config.disableConcurrency) return W;
      }
      let D = Ip4.default.connect(I);
      if (this.config.maxConcurrency)
        D.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (W) => {
          if (W)
            throw new Error(
              'Fail to set maxConcurrentStreams to ' +
                this.config.maxConcurrency +
                'when creating new session for ' +
                B.destination.toString()
            );
        });
      D.unref();
      let Z = II(() => {
        (D.destroy(), this.deleteSession(I, D));
      }, 'destroySessionCb');
      if (
        (D.on('goaway', Z),
        D.on('error', Z),
        D.on('frameError', Z),
        D.on('close', () => this.deleteSession(I, D)),
        Q.requestTimeout)
      )
        D.setTimeout(Q.requestTimeout, Z);
      let Y = this.sessionCache.get(I) || new Gp4();
      return (Y.offerLast(D), this.sessionCache.set(I, Y), D);
    }
    deleteSession(B, Q) {
      let I = this.sessionCache.get(B);
      if (!I) return;
      if (!I.contains(Q)) return;
      (I.remove(Q), this.sessionCache.set(B, I));
    }
    release(B, Q) {
      var I;
      let G = this.getUrlString(B);
      (I = this.sessionCache.get(G)) == null || I.offerLast(Q);
    }
    destroy() {
      for (let [B, Q] of this.sessionCache) {
        for (let I of Q) {
          if (!I.destroyed) I.destroy();
          Q.remove(I);
        }
        this.sessionCache.delete(B);
      }
    }
    setMaxConcurrentStreams(B) {
      if (this.config.maxConcurrency && this.config.maxConcurrency <= 0)
        throw new RangeError('maxConcurrentStreams must be greater than zero.');
      this.config.maxConcurrency = B;
    }
    setDisableConcurrentStreams(B) {
      this.config.disableConcurrency = B;
    }
    getUrlString(B) {
      return B.destination.toString();
    }
  };
II(Gw0, 'NodeHttp2ConnectionManager');
var Dp4 = Gw0,
  Dw0 = class A {
    constructor(B) {
      ((this.metadata = { handlerProtocol: 'h2' }),
        (this.connectionManager = new Dp4({})),
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
    static create(B) {
      if (typeof (B == null ? void 0 : B.handle) === 'function') return B;
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
        var Y;
        let W = !1,
          F = void 0,
          J = II(async (g) => {
            (await F, D(g));
          }, 'resolve'),
          C = II(async (g) => {
            (await F, Z(g));
          }, 'reject');
        if (Q == null ? void 0 : Q.aborted) {
          W = !0;
          let g = new Error('Request aborted');
          ((g.name = 'AbortError'), C(g));
          return;
        }
        let { hostname: X, method: V, port: K, protocol: U, query: N } = B,
          q = '';
        if (B.username != null || B.password != null) {
          let g = B.username ?? '',
            Y1 = B.password ?? '';
          q = `${g}:${Y1}@`;
        }
        let M = `${U}//${q}${X}${K ? `:${K}` : ''}`,
          R = { destination: new URL(M) },
          T = this.connectionManager.lease(R, {
            requestTimeout: (Y = this.config) == null ? void 0 : Y.sessionTimeout,
            disableConcurrentStreams: G || !1,
          }),
          O = II((g) => {
            if (G) this.destroySession(T);
            ((W = !0), C(g));
          }, 'rejectWithDestroy'),
          S = tz0.buildQueryString(N || {}),
          f = B.path;
        if (S) f += `?${S}`;
        if (B.fragment) f += `#${B.fragment}`;
        let a = T.request({
          ...B.headers,
          [az0.constants.HTTP2_HEADER_PATH]: f,
          [az0.constants.HTTP2_HEADER_METHOD]: V,
        });
        if (
          (T.ref(),
          a.on('response', (g) => {
            let Y1 = new oz0.HttpResponse({
              statusCode: g[':status'] || -1,
              headers: ez0(g),
              body: a,
            });
            if (((W = !0), J({ response: Y1 }), G))
              (T.close(), this.connectionManager.deleteSession(M, T));
          }),
          I)
        )
          a.setTimeout(I, () => {
            a.close();
            let g = new Error(`Stream timed out because of no activity for ${I} ms`);
            ((g.name = 'TimeoutError'), O(g));
          });
        if (Q)
          Q.onabort = () => {
            a.close();
            let g = new Error('Request aborted');
            ((g.name = 'AbortError'), O(g));
          };
        (a.on('frameError', (g, Y1, r) => {
          O(new Error(`Frame type id ${g} in stream id ${r} has failed with code ${Y1}.`));
        }),
          a.on('error', O),
          a.on('aborted', () => {
            O(
              new Error(
                `HTTP/2 stream is abnormally aborted in mid-communication with result code ${a.rstCode}.`
              )
            );
          }),
          a.on('close', () => {
            if ((T.unref(), G)) T.destroy();
            if (!W) O(new Error('Unexpected error: http2 request did not get a response'));
          }),
          (F = Tv1(a, B, I)));
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
  };
II(Dw0, 'NodeHttp2Handler');
var Zp4 = Dw0,
  Zw0 = class A extends Aw0.Writable {
    constructor() {
      super(...arguments);
      this.bufferedBytes = [];
    }
    _write(B, Q, I) {
      (this.bufferedBytes.push(B), I());
    }
  };
II(Zw0, 'Collector');
var Yp4 = Zw0,
  Wp4 = II(
    (A) =>
      new Promise((B, Q) => {
        let I = new Yp4();
        (A.pipe(I),
          A.on('error', (G) => {
            (I.end(), Q(G));
          }),
          I.on('error', Q),
          I.on('finish', function () {
            let G = new Uint8Array(Buffer.concat(this.bufferedBytes));
            B(G);
          }));
      }),
    'streamCollector'
  );
