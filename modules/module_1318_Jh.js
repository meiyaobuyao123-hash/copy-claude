// Module: Jh
// Params: JK8,af0

var { extractBody: gG6, mixinBody: hG6, cloneBody: mG6, bodyUnusable: xf0 } = lg(),
  {
    Headers: pf0,
    fill: dG6,
    HeadersList: EW1,
    setHeadersGuard: kd1,
    getHeadersGuard: uG6,
    setHeadersList: cf0,
    getHeadersList: ff0,
  } = dS(),
  { FinalizationRegistry: pG6 } = kf0()(),
  zW1 = I6(),
  vf0 = D1('node:util'),
  { isValidHTTPToken: cG6, sameOrigin: bf0, environmentSettingsObject: HW1 } = GF(),
  {
    forbiddenMethodsSet: lG6,
    corsSafeListedMethodsSet: iG6,
    referrerPolicy: nG6,
    requestRedirect: aG6,
    requestMode: sG6,
    requestCredentials: rG6,
    requestCache: oG6,
    requestDuplex: tG6,
  } = $s(),
  { kEnumerableProperty: rQ, normalizedMethodRecordsBase: eG6, normalizedMethodRecords: AD6 } = zW1,
  { kHeaders: FF, kSignal: wW1, kState: XB, kDispatcher: yd1 } = OL(),
  { webidl: u9 } = WG(),
  { URLSerializer: BD6 } = $Y(),
  { kConstruct: UW1 } = uB(),
  QD6 = D1('node:assert'),
  {
    getMaxListeners: gf0,
    setMaxListeners: hf0,
    getEventListeners: ID6,
    defaultMaxListeners: mf0,
  } = D1('node:events'),
  GD6 = Symbol('abortController'),
  lf0 = new pG6(({ signal: A, abort: B }) => {
    A.removeEventListener('abort', B);
  }),
  NW1 = new WeakMap();
function df0(A) {
  return B;
  function B() {
    let Q = A.deref();
    if (Q !== void 0) {
      (lf0.unregister(B), this.removeEventListener('abort', B), Q.abort(this.reason));
      let I = NW1.get(Q.signal);
      if (I !== void 0) {
        if (I.size !== 0) {
          for (let G of I) {
            let D = G.deref();
            if (D !== void 0) D.abort(this.reason);
          }
          I.clear();
        }
        NW1.delete(Q.signal);
      }
    }
  }
}
var uf0 = !1;
class x8 {
  constructor(A, B = {}) {
    if ((u9.util.markAsUncloneable(this), A === UW1)) return;
    let Q = 'Request constructor';
    (u9.argumentLengthCheck(arguments, 1, Q),
      (A = u9.converters.RequestInfo(A, Q, 'input')),
      (B = u9.converters.RequestInit(B, Q, 'init')));
    let I = null,
      G = null,
      D = HW1.settingsObject.baseUrl,
      Z = null;
    if (typeof A === 'string') {
      this[yd1] = B.dispatcher;
      let N;
      try {
        N = new URL(A, D);
      } catch (q) {
        throw new TypeError('Failed to parse URL from ' + A, { cause: q });
      }
      if (N.username || N.password)
        throw new TypeError(
          'Request cannot be constructed from a URL that includes credentials: ' + A
        );
      ((I = $W1({ urlList: [N] })), (G = 'cors'));
    } else ((this[yd1] = B.dispatcher || A[yd1]), QD6(A instanceof x8), (I = A[XB]), (Z = A[wW1]));
    let Y = HW1.settingsObject.origin,
      W = 'client';
    if (I.window?.constructor?.name === 'EnvironmentSettingsObject' && bf0(I.window, Y))
      W = I.window;
    if (B.window != null) throw new TypeError(`'window' option '${W}' must be null`);
    if ('window' in B) W = 'no-window';
    I = $W1({
      method: I.method,
      headersList: I.headersList,
      unsafeRequest: I.unsafeRequest,
      client: HW1.settingsObject,
      window: W,
      priority: I.priority,
      origin: I.origin,
      referrer: I.referrer,
      referrerPolicy: I.referrerPolicy,
      mode: I.mode,
      credentials: I.credentials,
      cache: I.cache,
      redirect: I.redirect,
      integrity: I.integrity,
      keepalive: I.keepalive,
      reloadNavigation: I.reloadNavigation,
      historyNavigation: I.historyNavigation,
      urlList: [...I.urlList],
    });
    let F = Object.keys(B).length !== 0;
    if (F) {
      if (I.mode === 'navigate') I.mode = 'same-origin';
      ((I.reloadNavigation = !1),
        (I.historyNavigation = !1),
        (I.origin = 'client'),
        (I.referrer = 'client'),
        (I.referrerPolicy = ''),
        (I.url = I.urlList[I.urlList.length - 1]),
        (I.urlList = [I.url]));
    }
    if (B.referrer !== void 0) {
      let N = B.referrer;
      if (N === '') I.referrer = 'no-referrer';
      else {
        let q;
        try {
          q = new URL(N, D);
        } catch (M) {
          throw new TypeError(`Referrer "${N}" is not a valid URL.`, { cause: M });
        }
        if (
          (q.protocol === 'about:' && q.hostname === 'client') ||
          (Y && !bf0(q, HW1.settingsObject.baseUrl))
        )
          I.referrer = 'client';
        else I.referrer = q;
      }
    }
    if (B.referrerPolicy !== void 0) I.referrerPolicy = B.referrerPolicy;
    let J;
    if (B.mode !== void 0) J = B.mode;
    else J = G;
    if (J === 'navigate')
      throw u9.errors.exception({
        header: 'Request constructor',
        message: 'invalid request mode navigate.',
      });
    if (J != null) I.mode = J;
    if (B.credentials !== void 0) I.credentials = B.credentials;
    if (B.cache !== void 0) I.cache = B.cache;
    if (I.cache === 'only-if-cached' && I.mode !== 'same-origin')
      throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
    if (B.redirect !== void 0) I.redirect = B.redirect;
    if (B.integrity != null) I.integrity = String(B.integrity);
    if (B.keepalive !== void 0) I.keepalive = Boolean(B.keepalive);
    if (B.method !== void 0) {
      let N = B.method,
        q = AD6[N];
      if (q !== void 0) I.method = q;
      else {
        if (!cG6(N)) throw new TypeError(`'${N}' is not a valid HTTP method.`);
        let M = N.toUpperCase();
        if (lG6.has(M)) throw new TypeError(`'${N}' HTTP method is unsupported.`);
        ((N = eG6[M] ?? N), (I.method = N));
      }
      if (!uf0 && I.method === 'patch')
        (process.emitWarning(
          'Using `patch` is highly likely to result in a `405 Method Not Allowed`. `PATCH` is much more likely to succeed.',
          { code: 'UNDICI-FETCH-patch' }
        ),
          (uf0 = !0));
    }
    if (B.signal !== void 0) Z = B.signal;
    this[XB] = I;
    let C = new AbortController();
    if (((this[wW1] = C.signal), Z != null)) {
      if (!Z || typeof Z.aborted !== 'boolean' || typeof Z.addEventListener !== 'function')
        throw new TypeError(
          "Failed to construct 'Request': member signal is not of type AbortSignal."
        );
      if (Z.aborted) C.abort(Z.reason);
      else {
        this[GD6] = C;
        let N = new WeakRef(C),
          q = df0(N);
        try {
          if (typeof gf0 === 'function' && gf0(Z) === mf0) hf0(1500, Z);
          else if (ID6(Z, 'abort').length >= mf0) hf0(1500, Z);
        } catch {}
        (zW1.addAbortListener(Z, q), lf0.register(C, { signal: Z, abort: q }, q));
      }
    }
    if (
      ((this[FF] = new pf0(UW1)),
      cf0(this[FF], I.headersList),
      kd1(this[FF], 'request'),
      J === 'no-cors')
    ) {
      if (!iG6.has(I.method)) throw new TypeError(`'${I.method} is unsupported in no-cors mode.`);
      kd1(this[FF], 'request-no-cors');
    }
    if (F) {
      let N = ff0(this[FF]),
        q = B.headers !== void 0 ? B.headers : new EW1(N);
      if ((N.clear(), q instanceof EW1)) {
        for (let { name: M, value: R } of q.rawValues()) N.append(M, R, !1);
        N.cookies = q.cookies;
      } else dG6(this[FF], q);
    }
    let X = A instanceof x8 ? A[XB].body : null;
    if ((B.body != null || X != null) && (I.method === 'GET' || I.method === 'HEAD'))
      throw new TypeError('Request with GET/HEAD method cannot have body.');
    let V = null;
    if (B.body != null) {
      let [N, q] = gG6(B.body, I.keepalive);
      if (((V = N), q && !ff0(this[FF]).contains('content-type', !0)))
        this[FF].append('content-type', q);
    }
    let K = V ?? X;
    if (K != null && K.source == null) {
      if (V != null && B.duplex == null)
        throw new TypeError('RequestInit: duplex option is required when sending a body.');
      if (I.mode !== 'same-origin' && I.mode !== 'cors')
        throw new TypeError(
          'If request is made from ReadableStream, mode should be "same-origin" or "cors"'
        );
      I.useCORSPreflightFlag = !0;
    }
    let U = K;
    if (V == null && X != null) {
      if (xf0(A))
        throw new TypeError(
          'Cannot construct a Request with a Request object that has already been used.'
        );
      let N = new TransformStream();
      (X.stream.pipeThrough(N), (U = { source: X.source, length: X.length, stream: N.readable }));
    }
    this[XB].body = U;
  }
  get method() {
    return (u9.brandCheck(this, x8), this[XB].method);
  }
  get url() {
    return (u9.brandCheck(this, x8), BD6(this[XB].url));
  }
  get headers() {
    return (u9.brandCheck(this, x8), this[FF]);
  }
  get destination() {
    return (u9.brandCheck(this, x8), this[XB].destination);
  }
  get referrer() {
    if ((u9.brandCheck(this, x8), this[XB].referrer === 'no-referrer')) return '';
    if (this[XB].referrer === 'client') return 'about:client';
    return this[XB].referrer.toString();
  }
  get referrerPolicy() {
    return (u9.brandCheck(this, x8), this[XB].referrerPolicy);
  }
  get mode() {
    return (u9.brandCheck(this, x8), this[XB].mode);
  }
  get credentials() {
    return this[XB].credentials;
  }
  get cache() {
    return (u9.brandCheck(this, x8), this[XB].cache);
  }
  get redirect() {
    return (u9.brandCheck(this, x8), this[XB].redirect);
  }
  get integrity() {
    return (u9.brandCheck(this, x8), this[XB].integrity);
  }
  get keepalive() {
    return (u9.brandCheck(this, x8), this[XB].keepalive);
  }
  get isReloadNavigation() {
    return (u9.brandCheck(this, x8), this[XB].reloadNavigation);
  }
  get isHistoryNavigation() {
    return (u9.brandCheck(this, x8), this[XB].historyNavigation);
  }
  get signal() {
    return (u9.brandCheck(this, x8), this[wW1]);
  }
  get body() {
    return (u9.brandCheck(this, x8), this[XB].body ? this[XB].body.stream : null);
  }
  get bodyUsed() {
    return (u9.brandCheck(this, x8), !!this[XB].body && zW1.isDisturbed(this[XB].body.stream));
  }
  get duplex() {
    return (u9.brandCheck(this, x8), 'half');
  }
  clone() {
    if ((u9.brandCheck(this, x8), xf0(this))) throw new TypeError('unusable');
    let A = if0(this[XB]),
      B = new AbortController();
    if (this.signal.aborted) B.abort(this.signal.reason);
    else {
      let Q = NW1.get(this.signal);
      if (Q === void 0) ((Q = new Set()), NW1.set(this.signal, Q));
      let I = new WeakRef(B);
      (Q.add(I), zW1.addAbortListener(B.signal, df0(I)));
    }
    return nf0(A, B.signal, uG6(this[FF]));
  }
  [vf0.inspect.custom](A, B) {
    if (B.depth === null) B.depth = 2;
    B.colors ??= !0;
    let Q = {
      method: this.method,
      url: this.url,
      headers: this.headers,
      destination: this.destination,
      referrer: this.referrer,
      referrerPolicy: this.referrerPolicy,
      mode: this.mode,
      credentials: this.credentials,
      cache: this.cache,
      redirect: this.redirect,
      integrity: this.integrity,
      keepalive: this.keepalive,
      isReloadNavigation: this.isReloadNavigation,
      isHistoryNavigation: this.isHistoryNavigation,
      signal: this.signal,
    };
    return `Request ${vf0.formatWithOptions(B, Q)}`;
  }
}
hG6(x8);
function $W1(A) {
  return {
    method: A.method ?? 'GET',
    localURLsOnly: A.localURLsOnly ?? !1,
    unsafeRequest: A.unsafeRequest ?? !1,
    body: A.body ?? null,
    client: A.client ?? null,
    reservedClient: A.reservedClient ?? null,
    replacesClientId: A.replacesClientId ?? '',
    window: A.window ?? 'client',
    keepalive: A.keepalive ?? !1,
    serviceWorkers: A.serviceWorkers ?? 'all',
    initiator: A.initiator ?? '',
    destination: A.destination ?? '',
    priority: A.priority ?? null,
    origin: A.origin ?? 'client',
    policyContainer: A.policyContainer ?? 'client',
    referrer: A.referrer ?? 'client',
    referrerPolicy: A.referrerPolicy ?? '',
    mode: A.mode ?? 'no-cors',
    useCORSPreflightFlag: A.useCORSPreflightFlag ?? !1,
    credentials: A.credentials ?? 'same-origin',
    useCredentials: A.useCredentials ?? !1,
    cache: A.cache ?? 'default',
    redirect: A.redirect ?? 'follow',
    integrity: A.integrity ?? '',
    cryptoGraphicsNonceMetadata: A.cryptoGraphicsNonceMetadata ?? '',
    parserMetadata: A.parserMetadata ?? '',
    reloadNavigation: A.reloadNavigation ?? !1,
    historyNavigation: A.historyNavigation ?? !1,
    userActivation: A.userActivation ?? !1,
    taintedOrigin: A.taintedOrigin ?? !1,
    redirectCount: A.redirectCount ?? 0,
    responseTainting: A.responseTainting ?? 'basic',
    preventNoCacheCacheControlHeaderModification:
      A.preventNoCacheCacheControlHeaderModification ?? !1,
    done: A.done ?? !1,
    timingAllowFailed: A.timingAllowFailed ?? !1,
    urlList: A.urlList,
    url: A.urlList[0],
    headersList: A.headersList ? new EW1(A.headersList) : new EW1(),
  };
}
function if0(A) {
  let B = $W1({ ...A, body: null });
  if (A.body != null) B.body = mG6(B, A.body);
  return B;
}
function nf0(A, B, Q) {
  let I = new x8(UW1);
  return (
    (I[XB] = A),
    (I[wW1] = B),
    (I[FF] = new pf0(UW1)),
    cf0(I[FF], A.headersList),
    kd1(I[FF], Q),
    I
  );
}
Object.defineProperties(x8.prototype, {
  method: rQ,
  url: rQ,
  headers: rQ,
  redirect: rQ,
  clone: rQ,
  signal: rQ,
  duplex: rQ,
  destination: rQ,
  body: rQ,
  bodyUsed: rQ,
  isHistoryNavigation: rQ,
  isReloadNavigation: rQ,
  keepalive: rQ,
  integrity: rQ,
  cache: rQ,
  credentials: rQ,
  attribute: rQ,
  referrerPolicy: rQ,
  referrer: rQ,
  mode: rQ,
  [Symbol.toStringTag]: { value: 'Request', configurable: !0 },
});
u9.converters.Request = u9.interfaceConverter(x8);
u9.converters.RequestInfo = function (A, B, Q) {
  if (typeof A === 'string') return u9.converters.USVString(A, B, Q);
  if (A instanceof x8) return u9.converters.Request(A, B, Q);
  return u9.converters.USVString(A, B, Q);
};
u9.converters.AbortSignal = u9.interfaceConverter(AbortSignal);
u9.converters.RequestInit = u9.dictionaryConverter([
  { key: 'method', converter: u9.converters.ByteString },
  { key: 'headers', converter: u9.converters.HeadersInit },
  { key: 'body', converter: u9.nullableConverter(u9.converters.BodyInit) },
  { key: 'referrer', converter: u9.converters.USVString },
  { key: 'referrerPolicy', converter: u9.converters.DOMString, allowedValues: nG6 },
  { key: 'mode', converter: u9.converters.DOMString, allowedValues: sG6 },
  { key: 'credentials', converter: u9.converters.DOMString, allowedValues: rG6 },
  { key: 'cache', converter: u9.converters.DOMString, allowedValues: oG6 },
  { key: 'redirect', converter: u9.converters.DOMString, allowedValues: aG6 },
  { key: 'integrity', converter: u9.converters.DOMString },
  { key: 'keepalive', converter: u9.converters.boolean },
  {
    key: 'signal',
    converter: u9.nullableConverter((A) =>
      u9.converters.AbortSignal(A, 'RequestInit', 'signal', { strict: !1 })
    ),
  },
  { key: 'window', converter: u9.converters.any },
  { key: 'duplex', converter: u9.converters.DOMString, allowedValues: tG6 },
  { key: 'dispatcher', converter: u9.converters.any },
]);
af0.exports = { Request: x8, makeRequest: $W1, fromInnerRequest: nf0, cloneRequest: if0 };
