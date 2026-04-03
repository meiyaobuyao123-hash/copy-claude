// Module: EvA
// Params: wm5,wvA

var { defineProperty: x51, getOwnPropertyDescriptor: si9, getOwnPropertyNames: ri9 } = Object,
  oi9 = Object.prototype.hasOwnProperty,
  xH = (A, B) => x51(A, 'name', { value: B, configurable: !0 }),
  ti9 = (A, B) => {
    for (var Q in B) x51(A, Q, { get: B[Q], enumerable: !0 });
  },
  ei9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of ri9(B))
        if (!oi9.call(A, G) && G !== Q)
          x51(A, G, { get: () => B[G], enumerable: !(I = si9(B, G)) || I.enumerable });
    }
    return A;
  },
  An9 = (A) => ei9(x51({}, '__esModule', { value: !0 }), A),
  XvA = {};
ti9(XvA, { FetchHttpHandler: () => Qn9, keepAliveSupport: () => k51, streamCollector: () => Gn9 });
wvA.exports = An9(XvA);
var CvA = QvA(),
  Bn9 = JvA();
function wO1(A, B) {
  return new Request(A, B);
}
xH(wO1, 'createRequest');
function VvA(A = 0) {
  return new Promise((B, Q) => {
    if (A)
      setTimeout(() => {
        let I = new Error(`Request did not complete within ${A} ms`);
        ((I.name = 'TimeoutError'), Q(I));
      }, A);
  });
}
xH(VvA, 'requestTimeout');
var k51 = { supported: void 0 },
  Qn9 = class A {
    static {
      xH(this, 'FetchHttpHandler');
    }
    static create(B) {
      if (typeof B?.handle === 'function') return B;
      return new A(B);
    }
    constructor(B) {
      if (typeof B === 'function') this.configProvider = B().then((Q) => Q || {});
      else ((this.config = B ?? {}), (this.configProvider = Promise.resolve(this.config)));
      if (k51.supported === void 0)
        k51.supported = Boolean(
          typeof Request !== 'undefined' && 'keepalive' in wO1('https://[::1]')
        );
    }
    destroy() {}
    async handle(B, { abortSignal: Q } = {}) {
      if (!this.config) this.config = await this.configProvider;
      let I = this.config.requestTimeout,
        G = this.config.keepAlive === !0,
        D = this.config.credentials;
      if (Q?.aborted) {
        let q = new Error('Request aborted');
        return ((q.name = 'AbortError'), Promise.reject(q));
      }
      let Z = B.path,
        Y = Bn9.buildQueryString(B.query || {});
      if (Y) Z += `?${Y}`;
      if (B.fragment) Z += `#${B.fragment}`;
      let W = '';
      if (B.username != null || B.password != null) {
        let q = B.username ?? '',
          M = B.password ?? '';
        W = `${q}:${M}@`;
      }
      let { port: F, method: J } = B,
        C = `${B.protocol}//${W}${B.hostname}${F ? `:${F}` : ''}${Z}`,
        X = J === 'GET' || J === 'HEAD' ? void 0 : B.body,
        V = { body: X, headers: new Headers(B.headers), method: J, credentials: D };
      if (this.config?.cache) V.cache = this.config.cache;
      if (X) V.duplex = 'half';
      if (typeof AbortController !== 'undefined') V.signal = Q;
      if (k51.supported) V.keepalive = G;
      if (typeof this.config.requestInit === 'function')
        Object.assign(V, this.config.requestInit(B));
      let K = xH(() => {}, 'removeSignalEventListener'),
        U = wO1(C, V),
        N = [
          fetch(U).then((q) => {
            let M = q.headers,
              R = {};
            for (let O of M.entries()) R[O[0]] = O[1];
            if (q.body == null)
              return q
                .blob()
                .then((O) => ({
                  response: new CvA.HttpResponse({
                    headers: R,
                    reason: q.statusText,
                    statusCode: q.status,
                    body: O,
                  }),
                }));
            return {
              response: new CvA.HttpResponse({
                headers: R,
                reason: q.statusText,
                statusCode: q.status,
                body: q.body,
              }),
            };
          }),
          VvA(I),
        ];
      if (Q)
        N.push(
          new Promise((q, M) => {
            let R = xH(() => {
              let T = new Error('Request aborted');
              ((T.name = 'AbortError'), M(T));
            }, 'onAbort');
            if (typeof Q.addEventListener === 'function') {
              let T = Q;
              (T.addEventListener('abort', R, { once: !0 }),
                (K = xH(() => T.removeEventListener('abort', R), 'removeSignalEventListener')));
            } else Q.onabort = R;
          })
        );
      return Promise.race(N).finally(K);
    }
    updateHttpClientConfig(B, Q) {
      ((this.config = void 0),
        (this.configProvider = this.configProvider.then((I) => {
          return ((I[B] = Q), I);
        })));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  },
  In9 = Nf(),
  Gn9 = xH(async (A) => {
    if ((typeof Blob === 'function' && A instanceof Blob) || A.constructor?.name === 'Blob') {
      if (Blob.prototype.arrayBuffer !== void 0) return new Uint8Array(await A.arrayBuffer());
      return KvA(A);
    }
    return HvA(A);
  }, 'streamCollector');
async function KvA(A) {
  let B = await zvA(A),
    Q = In9.fromBase64(B);
  return new Uint8Array(Q);
}
xH(KvA, 'collectBlob');
async function HvA(A) {
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
xH(HvA, 'collectStream');
function zvA(A) {
  return new Promise((B, Q) => {
    let I = new FileReader();
    ((I.onloadend = () => {
      if (I.readyState !== 2) return Q(new Error('Reader aborted too early'));
      let G = I.result ?? '',
        D = G.indexOf(','),
        Z = D > -1 ? D + 1 : G.length;
      B(G.substring(Z));
    }),
      (I.onabort = () => Q(new Error('Read aborted'))),
      (I.onerror = () => Q(I.error)),
      I.readAsDataURL(A));
  });
}
xH(zvA, 'readToBase64');
