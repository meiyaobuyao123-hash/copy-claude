// Module: YR0
// Params: GD

var g16 =
    (GD && GD.__createBinding) ||
    (Object.create
      ? function (A, B, Q, I) {
          if (I === void 0) I = Q;
          var G = Object.getOwnPropertyDescriptor(B, Q);
          if (!G || ('get' in G ? !B.__esModule : G.writable || G.configurable))
            G = {
              enumerable: !0,
              get: function () {
                return B[Q];
              },
            };
          Object.defineProperty(A, I, G);
        }
      : function (A, B, Q, I) {
          if (I === void 0) I = Q;
          A[I] = B[Q];
        }),
  h16 =
    (GD && GD.__setModuleDefault) ||
    (Object.create
      ? function (A, B) {
          Object.defineProperty(A, 'default', { enumerable: !0, value: B });
        }
      : function (A, B) {
          A.default = B;
        }),
  m16 =
    (GD && GD.__importStar) ||
    function (A) {
      if (A && A.__esModule) return A;
      var B = {};
      if (A != null) {
        for (var Q in A)
          if (Q !== 'default' && Object.prototype.hasOwnProperty.call(A, Q)) g16(B, A, Q);
      }
      return (h16(B, A), B);
    },
  qS =
    (GD && GD.__classPrivateFieldGet) ||
    function (A, B, Q, I) {
      if (Q === 'a' && !I) throw new TypeError('Private accessor was defined without a getter');
      if (typeof B === 'function' ? A !== B || !I : !B.has(A))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        );
      return Q === 'm' ? I : Q === 'a' ? I.call(A) : I ? I.value : B.get(A);
    },
  d16 =
    (GD && GD.__classPrivateFieldSet) ||
    function (A, B, Q, I, G) {
      if (I === 'm') throw new TypeError('Private method is not writable');
      if (I === 'a' && !G) throw new TypeError('Private accessor was defined without a setter');
      if (typeof B === 'function' ? A !== B || !G : !B.has(A))
        throw new TypeError(
          'Cannot write private member to an object whose class did not declare it'
        );
      return (I === 'a' ? G.call(A, Q) : G ? (G.value = Q) : B.set(A, Q), Q);
    },
  bZ1 =
    (GD && GD.__importDefault) ||
    function (A) {
      return A && A.__esModule ? A : { default: A };
    },
  Xg,
  $S,
  oL0,
  IR0,
  GR0,
  DR0,
  fZ1,
  tL0;
Object.defineProperty(GD, '__esModule', { value: !0 });
GD.Gaxios = void 0;
var u16 = bZ1(lb1()),
  p16 = D1('https'),
  c16 = bZ1(NL0()),
  l16 = bZ1(D1('querystring')),
  i16 = bZ1(qL0()),
  eL0 = D1('url'),
  vZ1 = Yg1(),
  n16 = yL0(),
  AR0 = D1('stream'),
  a16 = jl(),
  BR0 = Wg1(),
  s16 = o16() ? window.fetch : c16.default;
function r16() {
  return typeof window !== 'undefined' && !!window;
}
function o16() {
  return r16() && !!window.fetch;
}
function t16() {
  return typeof Buffer !== 'undefined';
}
function QR0(A, B) {
  return !!ZR0(A, B);
}
function ZR0(A, B) {
  B = B.toLowerCase();
  for (let Q of Object.keys((A === null || A === void 0 ? void 0 : A.headers) || {}))
    if (B === Q.toLowerCase()) return A.headers[Q];
  return;
}
class Jg1 {
  constructor(A) {
    (Xg.add(this),
      (this.agentCache = new Map()),
      (this.defaults = A || {}),
      (this.interceptors = {
        request: new BR0.GaxiosInterceptorManager(),
        response: new BR0.GaxiosInterceptorManager(),
      }));
  }
  async request(A = {}) {
    return (
      (A = await qS(this, Xg, 'm', DR0).call(this, A)),
      (A = await qS(this, Xg, 'm', IR0).call(this, A)),
      qS(this, Xg, 'm', GR0).call(this, this._request(A))
    );
  }
  async _defaultAdapter(A) {
    let Q = await (A.fetchImplementation || s16)(A.url, A),
      I = await this.getResponseData(A, Q);
    return this.translateResponse(A, Q, I);
  }
  async _request(A = {}) {
    var B;
    try {
      let Q;
      if (A.adapter) Q = await A.adapter(A, this._defaultAdapter.bind(this));
      else Q = await this._defaultAdapter(A);
      if (!A.validateStatus(Q.status)) {
        if (A.responseType === 'stream') {
          let I = '';
          (await new Promise((G) => {
            ((Q === null || Q === void 0 ? void 0 : Q.data).on('data', (D) => {
              I += D;
            }),
              (Q === null || Q === void 0 ? void 0 : Q.data).on('end', G));
          }),
            (Q.data = I));
        }
        throw new vZ1.GaxiosError(`Request failed with status code ${Q.status}`, A, Q);
      }
      return Q;
    } catch (Q) {
      let I = Q instanceof vZ1.GaxiosError ? Q : new vZ1.GaxiosError(Q.message, A, void 0, Q),
        { shouldRetry: G, config: D } = await n16.getRetryConfig(I);
      if (G && D)
        return (
          (I.config.retryConfig.currentRetryAttempt = D.retryConfig.currentRetryAttempt),
          (A.retryConfig = (B = I.config) === null || B === void 0 ? void 0 : B.retryConfig),
          this._request(A)
        );
      throw I;
    }
  }
  async getResponseData(A, B) {
    switch (A.responseType) {
      case 'stream':
        return B.body;
      case 'json': {
        let Q = await B.text();
        try {
          Q = JSON.parse(Q);
        } catch (I) {}
        return Q;
      }
      case 'arraybuffer':
        return B.arrayBuffer();
      case 'blob':
        return B.blob();
      case 'text':
        return B.text();
      default:
        return this.getResponseDataFromContentType(B);
    }
  }
  validateStatus(A) {
    return A >= 200 && A < 300;
  }
  paramsSerializer(A) {
    return l16.default.stringify(A);
  }
  translateResponse(A, B, Q) {
    let I = {};
    return (
      B.headers.forEach((G, D) => {
        I[D] = G;
      }),
      {
        config: A,
        data: Q,
        headers: I,
        status: B.status,
        statusText: B.statusText,
        request: { responseURL: B.url },
      }
    );
  }
  async getResponseDataFromContentType(A) {
    let B = A.headers.get('Content-Type');
    if (B === null) return A.text();
    if (((B = B.toLowerCase()), B.includes('application/json'))) {
      let Q = await A.text();
      try {
        Q = JSON.parse(Q);
      } catch (I) {}
      return Q;
    } else if (B.match(/^text\//)) return A.text();
    else return A.blob();
  }
  async *getMultipartRequest(A, B) {
    let Q = `--${B}--`;
    for (let I of A) {
      let G = I.headers['Content-Type'] || 'application/octet-stream';
      if (
        (yield `--${B}\r
Content-Type: ${G}\r
\r
`,
        typeof I.content === 'string')
      )
        yield I.content;
      else yield* I.content;
      yield `\r
`;
    }
    yield Q;
  }
}
GD.Gaxios = Jg1;
(($S = Jg1),
  (Xg = new WeakSet()),
  (oL0 = function A(B, Q = []) {
    var I, G;
    let D = new eL0.URL(B),
      Z = [...Q],
      Y =
        ((G = (I = process.env.NO_PROXY) !== null && I !== void 0 ? I : process.env.no_proxy) ===
          null || G === void 0
          ? void 0
          : G.split(',')) || [];
    for (let W of Y) Z.push(W.trim());
    for (let W of Z)
      if (W instanceof RegExp) {
        if (W.test(D.toString())) return !1;
      } else if (W instanceof eL0.URL) {
        if (W.origin === D.origin) return !1;
      } else if (W.startsWith('*.') || W.startsWith('.')) {
        let F = W.replace(/^\*\./, '.');
        if (D.hostname.endsWith(F)) return !1;
      } else if (W === D.origin || W === D.hostname || W === D.href) return !1;
    return !0;
  }),
  (IR0 = async function A(B) {
    let Q = Promise.resolve(B);
    for (let I of this.interceptors.request.values()) if (I) Q = Q.then(I.resolved, I.rejected);
    return Q;
  }),
  (GR0 = async function A(B) {
    let Q = Promise.resolve(B);
    for (let I of this.interceptors.response.values()) if (I) Q = Q.then(I.resolved, I.rejected);
    return Q;
  }),
  (DR0 = async function A(B) {
    var Q, I, G, D;
    let Z = u16.default(!0, {}, this.defaults, B);
    if (!Z.url) throw new Error('URL is required.');
    let Y = Z.baseUrl || Z.baseURL;
    if (Y) Z.url = Y.toString() + Z.url;
    if (
      ((Z.paramsSerializer = Z.paramsSerializer || this.paramsSerializer),
      Z.params && Object.keys(Z.params).length > 0)
    ) {
      let J = Z.paramsSerializer(Z.params);
      if (J.startsWith('?')) J = J.slice(1);
      let C = Z.url.toString().includes('?') ? '&' : '?';
      Z.url = Z.url + C + J;
    }
    if (typeof B.maxContentLength === 'number') Z.size = B.maxContentLength;
    if (typeof B.maxRedirects === 'number') Z.follow = B.maxRedirects;
    if (((Z.headers = Z.headers || {}), Z.multipart === void 0 && Z.data)) {
      let J =
        typeof FormData === 'undefined'
          ? !1
          : (Z === null || Z === void 0 ? void 0 : Z.data) instanceof FormData;
      if (i16.default.readable(Z.data)) Z.body = Z.data;
      else if (t16() && Buffer.isBuffer(Z.data)) {
        if (((Z.body = Z.data), !QR0(Z, 'Content-Type')))
          Z.headers['Content-Type'] = 'application/json';
      } else if (typeof Z.data === 'object') {
        if (!J)
          if (ZR0(Z, 'content-type') === 'application/x-www-form-urlencoded')
            Z.body = Z.paramsSerializer(Z.data);
          else {
            if (!QR0(Z, 'Content-Type')) Z.headers['Content-Type'] = 'application/json';
            Z.body = JSON.stringify(Z.data);
          }
      } else Z.body = Z.data;
    } else if (Z.multipart && Z.multipart.length > 0) {
      let J = a16.v4();
      Z.headers['Content-Type'] = `multipart/related; boundary=${J}`;
      let C = new AR0.PassThrough();
      ((Z.body = C), AR0.pipeline(this.getMultipartRequest(Z.multipart, J), C, () => {}));
    }
    if (
      ((Z.validateStatus = Z.validateStatus || this.validateStatus),
      (Z.responseType = Z.responseType || 'unknown'),
      !Z.headers.Accept && Z.responseType === 'json')
    )
      Z.headers.Accept = 'application/json';
    Z.method = Z.method || 'GET';
    let W =
        Z.proxy ||
        ((Q = process === null || process === void 0 ? void 0 : process.env) === null ||
        Q === void 0
          ? void 0
          : Q.HTTPS_PROXY) ||
        ((I = process === null || process === void 0 ? void 0 : process.env) === null ||
        I === void 0
          ? void 0
          : I.https_proxy) ||
        ((G = process === null || process === void 0 ? void 0 : process.env) === null ||
        G === void 0
          ? void 0
          : G.HTTP_PROXY) ||
        ((D = process === null || process === void 0 ? void 0 : process.env) === null ||
        D === void 0
          ? void 0
          : D.http_proxy),
      F = qS(this, Xg, 'm', oL0).call(this, Z.url, Z.noProxy);
    if (Z.agent);
    else if (W && F) {
      let J = await qS($S, $S, 'm', tL0).call($S);
      if (this.agentCache.has(W)) Z.agent = this.agentCache.get(W);
      else ((Z.agent = new J(W, { cert: Z.cert, key: Z.key })), this.agentCache.set(W, Z.agent));
    } else if (Z.cert && Z.key)
      if (this.agentCache.has(Z.key)) Z.agent = this.agentCache.get(Z.key);
      else
        ((Z.agent = new p16.Agent({ cert: Z.cert, key: Z.key })),
          this.agentCache.set(Z.key, Z.agent));
    if (typeof Z.errorRedactor !== 'function' && Z.errorRedactor !== !1)
      Z.errorRedactor = vZ1.defaultErrorRedactor;
    return Z;
  }),
  (tL0 = async function A() {
    return (
      d16(
        this,
        $S,
        qS(this, $S, 'f', fZ1) || (await Promise.resolve().then(() => m16(rL0()))).HttpsProxyAgent,
        'f',
        fZ1
      ),
      qS(this, $S, 'f', fZ1)
    );
  }));
fZ1 = { value: void 0 };
