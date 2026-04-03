// Module: n_A
// Params: Cf

var Jf =
  (Cf && Cf.__awaiter) ||
  function (A, B, Q, I) {
    function G(D) {
      return D instanceof Q
        ? D
        : new Q(function (Z) {
            Z(D);
          });
    }
    return new (Q || (Q = Promise))(function (D, Z) {
      function Y(J) {
        try {
          F(I.next(J));
        } catch (C) {
          Z(C);
        }
      }
      function W(J) {
        try {
          F(I.throw(J));
        } catch (C) {
          Z(C);
        }
      }
      function F(J) {
        J.done ? D(J.value) : G(J.value).then(Y, W);
      }
      F((I = I.apply(A, B || [])).next());
    });
  };
Object.defineProperty(Cf, '__esModule', { value: !0 });
Cf.NetworkCore = void 0;
iT();
var h_A = iT(),
  MR1 = C61(),
  sT = pG(),
  xX = Bl(),
  Nh9 = O_A(),
  $h9 = NR1(),
  u_A = _61(),
  qh9 = nT(),
  p_A = y61(),
  Mh9 = O61(),
  Lh9 = qR1(),
  c_A = Dl(),
  Rh9 = q61(),
  Oh9 = 1e4,
  Th9 = 500,
  Ph9 = 30000,
  Sh9 = 1000,
  l_A = 50,
  _h9 = l_A / Sh9,
  jh9 = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
class i_A {
  constructor(A, B) {
    if (
      ((this._emitter = B),
      (this._errorBoundary = null),
      (this._timeout = Oh9),
      (this._netConfig = {}),
      (this._options = {}),
      (this._leakyBucket = {}),
      (this._lastUsedInitUrl = null),
      A)
    )
      this._options = A;
    if (this._options.networkConfig) this._netConfig = this._options.networkConfig;
    if (this._netConfig.networkTimeoutMs) this._timeout = this._netConfig.networkTimeoutMs;
    this._fallbackResolver = new Nh9.NetworkFallbackResolver(this._options);
  }
  setErrorBoundary(A) {
    ((this._errorBoundary = A),
      this._errorBoundary.wrap(this),
      this._errorBoundary.wrap(this._fallbackResolver),
      this._fallbackResolver.setErrorBoundary(A));
  }
  isBeaconSupported() {
    return typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function';
  }
  getLastUsedInitUrlAndReset() {
    let A = this._lastUsedInitUrl;
    return ((this._lastUsedInitUrl = null), A);
  }
  beacon(A) {
    return Jf(this, void 0, void 0, function* () {
      if (!m_A(A)) return !1;
      let B = this._getInternalRequestArgs('POST', A);
      yield this._tryToCompressBody(B);
      let Q = yield this._getPopulatedURL(B),
        I = navigator;
      return I.sendBeacon.bind(I)(Q, B.body);
    });
  }
  post(A) {
    return Jf(this, void 0, void 0, function* () {
      let B = this._getInternalRequestArgs('POST', A);
      return (this._tryEncodeBody(B), yield this._tryToCompressBody(B), this._sendRequest(B));
    });
  }
  get(A) {
    let B = this._getInternalRequestArgs('GET', A);
    return this._sendRequest(B);
  }
  _sendRequest(A) {
    var B, Q, I, G;
    return Jf(this, void 0, void 0, function* () {
      if (!m_A(A)) return null;
      if (this._netConfig.preventAllNetworkTraffic) return null;
      let { method: D, body: Z, retries: Y, attempt: W } = A,
        F = A.urlConfig.endpoint;
      if (this._isRateLimited(F))
        return (
          sT.Log.warn(
            `Request to ${F} was blocked because you are making requests too frequently.`
          ),
          null
        );
      let J = W !== null && W !== void 0 ? W : 1,
        C = typeof AbortController !== 'undefined' ? new AbortController() : null,
        X = setTimeout(() => {
          C === null || C === void 0 || C.abort(`Timeout of ${this._timeout}ms expired.`);
        }, this._timeout),
        V = yield this._getPopulatedURL(A),
        K = null,
        U = Rh9._isUnloading();
      try {
        let N = {
          method: D,
          body: Z,
          headers: Object.assign({}, A.headers),
          signal: C === null || C === void 0 ? void 0 : C.signal,
          priority: A.priority,
          keepalive: U,
        };
        fh9(A, J);
        let q = this._leakyBucket[F];
        if (q) ((q.lastRequestTime = Date.now()), (this._leakyBucket[F] = q));
        if (
          ((K = yield (
            (B = this._netConfig.networkOverrideFunc) !== null && B !== void 0 ? B : fetch
          )(V, N)),
          clearTimeout(X),
          !K.ok)
        ) {
          let T = yield K.text().catch(() => 'No Text'),
            O = new Error(`NetworkError: ${V} ${T}`);
          throw ((O.name = 'NetworkError'), O);
        }
        let R = yield K.text();
        return (
          d_A(A, K, J, R),
          this._fallbackResolver.tryBumpExpiryTime(A.sdkKey, A.urlConfig),
          { body: R, code: K.status }
        );
      } catch (N) {
        let q = kh9(C, N),
          M = xh9(C);
        if (
          (d_A(A, K, J, '', N),
          yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(A.sdkKey, A.urlConfig, q, M))
        )
          A.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(A.sdkKey, A.urlConfig);
        if (
          !Y ||
          J > Y ||
          !jh9.has(
            (Q = K === null || K === void 0 ? void 0 : K.status) !== null && Q !== void 0 ? Q : 500
          )
        ) {
          (I = this._emitter) === null ||
            I === void 0 ||
            I.call(this, {
              name: 'error',
              error: N,
              tag: Lh9.ErrorTag.NetworkError,
              requestArgs: A,
            });
          let T = `A networking error occurred during ${D} request to ${V}.`;
          return (
            sT.Log.error(T, q, N),
            (G = this._errorBoundary) === null || G === void 0 || G.attachErrorIfNoneExists(T),
            null
          );
        }
        return (
          yield vh9(J),
          this._sendRequest(Object.assign(Object.assign({}, A), { retries: Y, attempt: J + 1 }))
        );
      }
    });
  }
  _isRateLimited(A) {
    var B;
    let Q = Date.now(),
      I =
        (B = this._leakyBucket[A]) !== null && B !== void 0 ? B : { count: 0, lastRequestTime: Q },
      G = Q - I.lastRequestTime,
      D = Math.floor(G * _h9);
    if (((I.count = Math.max(0, I.count - D)), I.count >= l_A)) return !0;
    return ((I.count += 1), (I.lastRequestTime = Q), (this._leakyBucket[A] = I), !1);
  }
  _getPopulatedURL(A) {
    var B;
    return Jf(this, void 0, void 0, function* () {
      let Q = (B = A.fallbackUrl) !== null && B !== void 0 ? B : A.urlConfig.getUrl();
      if (
        A.urlConfig.endpoint === xX.Endpoint._initialize ||
        A.urlConfig.endpoint === xX.Endpoint._download_config_specs
      )
        this._lastUsedInitUrl = Q;
      let I = Object.assign(
          {
            [xX.NetworkParam.SdkKey]: A.sdkKey,
            [xX.NetworkParam.SdkType]: u_A.SDKType._get(A.sdkKey),
            [xX.NetworkParam.SdkVersion]: c_A.SDK_VERSION,
            [xX.NetworkParam.Time]: String(Date.now()),
            [xX.NetworkParam.SessionID]: p_A.SessionID.get(A.sdkKey),
          },
          A.params
        ),
        G = Object.keys(I)
          .map((D) => {
            return `${encodeURIComponent(D)}=${encodeURIComponent(I[D])}`;
          })
          .join('&');
      return `${Q}${G ? `?${G}` : ''}`;
    });
  }
  _tryEncodeBody(A) {
    var B;
    let Q = qh9._getWindowSafe(),
      I = A.body;
    if (
      !A.isStatsigEncodable ||
      this._options.disableStatsigEncoding ||
      typeof I !== 'string' ||
      h_A._getStatsigGlobalFlag('no-encode') != null ||
      !(Q === null || Q === void 0 ? void 0 : Q.btoa)
    )
      return;
    try {
      ((A.body = Q.btoa(I).split('').reverse().join('')),
        (A.params = Object.assign(
          Object.assign({}, (B = A.params) !== null && B !== void 0 ? B : {}),
          { [xX.NetworkParam.StatsigEncoded]: '1' }
        )));
    } catch (G) {
      sT.Log.warn(`Request encoding failed for ${A.urlConfig.getUrl()}`, G);
    }
  }
  _tryToCompressBody(A) {
    var B;
    return Jf(this, void 0, void 0, function* () {
      let Q = A.body;
      if (
        !A.isCompressable ||
        this._options.disableCompression ||
        typeof Q !== 'string' ||
        $h9.SDKFlags.get(A.sdkKey, 'enable_log_event_compression') !== !0 ||
        h_A._getStatsigGlobalFlag('no-compress') != null ||
        typeof CompressionStream === 'undefined' ||
        typeof TextEncoder === 'undefined'
      )
        return;
      try {
        let I = new TextEncoder().encode(Q),
          G = new CompressionStream('gzip'),
          D = G.writable.getWriter();
        (D.write(I).catch(sT.Log.error), D.close().catch(sT.Log.error));
        let Z = G.readable.getReader(),
          Y = [],
          W;
        while (!(W = yield Z.read()).done) Y.push(W.value);
        let F = Y.reduce((X, V) => X + V.length, 0),
          J = new Uint8Array(F),
          C = 0;
        for (let X of Y) (J.set(X, C), (C += X.length));
        ((A.body = J),
          (A.params = Object.assign(
            Object.assign({}, (B = A.params) !== null && B !== void 0 ? B : {}),
            { [xX.NetworkParam.IsGzipped]: '1' }
          )));
      } catch (I) {
        sT.Log.warn(`Request compression failed for ${A.urlConfig.getUrl()}`, I);
      }
    });
  }
  _getInternalRequestArgs(A, B) {
    let Q = this._fallbackResolver.getActiveFallbackUrl(B.sdkKey, B.urlConfig),
      I = Object.assign(Object.assign({}, B), { method: A, fallbackUrl: Q });
    if ('data' in B) yh9(I, B.data);
    return I;
  }
}
Cf.NetworkCore = i_A;
var m_A = (A) => {
    if (!A.sdkKey) return (sT.Log.warn('Unable to make request without an SDK key'), !1);
    return !0;
  },
  yh9 = (A, B) => {
    let { sdkKey: Q, fallbackUrl: I } = A,
      G = Mh9.StableID.get(Q),
      D = p_A.SessionID.get(Q),
      Z = u_A.SDKType._get(Q);
    A.body = JSON.stringify(
      Object.assign(Object.assign({}, B), {
        statsigMetadata: Object.assign(Object.assign({}, c_A.StatsigMetadataProvider.get()), {
          stableID: G,
          sessionID: D,
          sdkType: Z,
          fallbackUrl: I,
        }),
      })
    );
  };
function kh9(A, B) {
  if (
    (A === null || A === void 0 ? void 0 : A.signal.aborted) &&
    typeof A.signal.reason === 'string'
  )
    return A.signal.reason;
  if (typeof B === 'string') return B;
  if (B instanceof Error) return `${B.name}: ${B.message}`;
  return 'Unknown Error';
}
function xh9(A) {
  return (
    ((A === null || A === void 0 ? void 0 : A.signal.aborted) &&
      typeof A.signal.reason === 'string' &&
      A.signal.reason.includes('Timeout')) ||
    !1
  );
}
function fh9(A, B) {
  if (A.urlConfig.endpoint !== xX.Endpoint._initialize) return;
  MR1.Diagnostics._markInitNetworkReqStart(A.sdkKey, { attempt: B });
}
function d_A(A, B, Q, I, G) {
  if (A.urlConfig.endpoint !== xX.Endpoint._initialize) return;
  MR1.Diagnostics._markInitNetworkReqEnd(A.sdkKey, MR1.Diagnostics._getDiagnosticsData(B, Q, I, G));
}
function vh9(A) {
  return Jf(this, void 0, void 0, function* () {
    yield new Promise((B) => setTimeout(B, Math.min(Th9 * (A * A), Ph9)));
  });
}
