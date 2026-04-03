// Module: Tz0
// Params: nW8,Oz0

var { defineProperty: KD1, getOwnPropertyDescriptor: Au4, getOwnPropertyNames: Bu4 } = Object,
  Qu4 = Object.prototype.hasOwnProperty,
  cb = (A, B) => KD1(A, 'name', { value: B, configurable: !0 }),
  Iu4 = (A, B) => {
    for (var Q in B) KD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Gu4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Bu4(B))
        if (!Qu4.call(A, G) && G !== Q)
          KD1(A, G, { get: () => B[G], enumerable: !(I = Au4(B, G)) || I.enumerable });
    }
    return A;
  },
  Du4 = (A) => Gu4(KD1({}, '__esModule', { value: !0 }), A),
  Uz0 = {};
Iu4(Uz0, { FetchHttpHandler: () => Yu4, keepAliveSupport: () => $z0, streamCollector: () => Fu4 });
Oz0.exports = Du4(Uz0);
var Ez0 = nG1(),
  Zu4 = Nv1();
function Nz0(A = 0) {
  return new Promise((B, Q) => {
    if (A)
      setTimeout(() => {
        let I = new Error(`Request did not complete within ${A} ms`);
        ((I.name = 'TimeoutError'), Q(I));
      }, A);
  });
}
cb(Nz0, 'requestTimeout');
var $z0 = {
    supported: Boolean(
      typeof Request !== 'undefined' && 'keepalive' in new Request('https://[::1]')
    ),
  },
  qz0 = class A {
    static create(B) {
      if (typeof (B == null ? void 0 : B.handle) === 'function') return B;
      return new A(B);
    }
    constructor(B) {
      if (typeof B === 'function') this.configProvider = B().then((Q) => Q || {});
      else ((this.config = B ?? {}), (this.configProvider = Promise.resolve(this.config)));
    }
    destroy() {}
    async handle(B, { abortSignal: Q } = {}) {
      if (!this.config) this.config = await this.configProvider;
      let I = this.config.requestTimeout,
        G = this.config.keepAlive === !0;
      if (Q == null ? void 0 : Q.aborted) {
        let U = new Error('Request aborted');
        return ((U.name = 'AbortError'), Promise.reject(U));
      }
      let D = B.path,
        Z = Zu4.buildQueryString(B.query || {});
      if (Z) D += `?${Z}`;
      if (B.fragment) D += `#${B.fragment}`;
      let Y = '';
      if (B.username != null || B.password != null) {
        let U = B.username ?? '',
          N = B.password ?? '';
        Y = `${U}:${N}@`;
      }
      let { port: W, method: F } = B,
        J = `${B.protocol}//${Y}${B.hostname}${W ? `:${W}` : ''}${D}`,
        X = {
          body: F === 'GET' || F === 'HEAD' ? void 0 : B.body,
          headers: new Headers(B.headers),
          method: F,
        };
      if (typeof AbortController !== 'undefined') X.signal = Q;
      if ($z0.supported) X.keepalive = G;
      let V = new Request(J, X),
        K = [
          fetch(V).then((U) => {
            let N = U.headers,
              q = {};
            for (let R of N.entries()) q[R[0]] = R[1];
            if (U.body == null)
              return U.blob().then((R) => ({
                response: new Ez0.HttpResponse({
                  headers: q,
                  reason: U.statusText,
                  statusCode: U.status,
                  body: R,
                }),
              }));
            return {
              response: new Ez0.HttpResponse({
                headers: q,
                reason: U.statusText,
                statusCode: U.status,
                body: U.body,
              }),
            };
          }),
          Nz0(I),
        ];
      if (Q)
        K.push(
          new Promise((U, N) => {
            Q.onabort = () => {
              let q = new Error('Request aborted');
              ((q.name = 'AbortError'), N(q));
            };
          })
        );
      return Promise.race(K);
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
  };
cb(qz0, 'FetchHttpHandler');
var Yu4 = qz0,
  Wu4 = CD1(),
  Fu4 = cb((A) => {
    if (typeof Blob === 'function' && A instanceof Blob) return Mz0(A);
    return Lz0(A);
  }, 'streamCollector');
async function Mz0(A) {
  let B = await Rz0(A),
    Q = Wu4.fromBase64(B);
  return new Uint8Array(Q);
}
cb(Mz0, 'collectBlob');
async function Lz0(A) {
  let B = new Uint8Array(0),
    Q = A.getReader(),
    I = !1;
  while (!I) {
    let { done: G, value: D } = await Q.read();
    if (D) {
      let Z = B;
      ((B = new Uint8Array(Z.length + D.length)), B.set(Z), B.set(D, Z.length));
    }
    I = G;
  }
  return B;
}
cb(Lz0, 'collectStream');
function Rz0(A) {
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
cb(Rz0, 'readToBase64');
