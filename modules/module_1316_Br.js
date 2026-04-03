// Module: Br
// Params: WK8,Tf0

var {
    Headers: Mf0,
    HeadersList: Ef0,
    fill: zG6,
    getHeadersGuard: wG6,
    setHeadersGuard: Lf0,
    setHeadersList: Rf0,
  } = dS(),
  {
    extractBody: Uf0,
    cloneBody: EG6,
    mixinBody: UG6,
    hasFinalizationRegistry: NG6,
    streamRegistry: $G6,
    bodyUnusable: qG6,
  } = lg(),
  Sd1 = I6(),
  Nf0 = D1('node:util'),
  { kEnumerableProperty: WF } = Sd1,
  {
    isValidReasonPhrase: MG6,
    isCancelled: LG6,
    isAborted: RG6,
    isBlobLike: OG6,
    serializeJavascriptValueToJSONString: TG6,
    isErrorLike: PG6,
    isomorphicEncode: SG6,
    environmentSettingsObject: _G6,
  } = GF(),
  { redirectStatusSet: jG6, nullBodyStatus: yG6 } = $s(),
  { kState: k3, kHeaders: GN } = OL(),
  { webidl: g4 } = WG(),
  { FormData: kG6 } = Os(),
  { URLSerializer: $f0 } = $Y(),
  { kConstruct: VW1 } = uB(),
  _d1 = D1('node:assert'),
  { types: xG6 } = D1('node:util'),
  fG6 = new TextEncoder('utf-8');
class WD {
  static error() {
    return Ar(KW1(), 'immutable');
  }
  static json(A, B = {}) {
    if ((g4.argumentLengthCheck(arguments, 1, 'Response.json'), B !== null))
      B = g4.converters.ResponseInit(B);
    let Q = fG6.encode(TG6(A)),
      I = Uf0(Q),
      G = Ar(Fh({}), 'response');
    return (qf0(G, B, { body: I[0], type: 'application/json' }), G);
  }
  static redirect(A, B = 302) {
    (g4.argumentLengthCheck(arguments, 1, 'Response.redirect'),
      (A = g4.converters.USVString(A)),
      (B = g4.converters['unsigned short'](B)));
    let Q;
    try {
      Q = new URL(A, _G6.settingsObject.baseUrl);
    } catch (D) {
      throw new TypeError(`Failed to parse URL from ${A}`, { cause: D });
    }
    if (!jG6.has(B)) throw new RangeError(`Invalid status code ${B}`);
    let I = Ar(Fh({}), 'immutable');
    I[k3].status = B;
    let G = SG6($f0(Q));
    return (I[k3].headersList.append('location', G, !0), I);
  }
  constructor(A = null, B = {}) {
    if ((g4.util.markAsUncloneable(this), A === VW1)) return;
    if (A !== null) A = g4.converters.BodyInit(A);
    ((B = g4.converters.ResponseInit(B)),
      (this[k3] = Fh({})),
      (this[GN] = new Mf0(VW1)),
      Lf0(this[GN], 'response'),
      Rf0(this[GN], this[k3].headersList));
    let Q = null;
    if (A != null) {
      let [I, G] = Uf0(A);
      Q = { body: I, type: G };
    }
    qf0(this, B, Q);
  }
  get type() {
    return (g4.brandCheck(this, WD), this[k3].type);
  }
  get url() {
    g4.brandCheck(this, WD);
    let A = this[k3].urlList,
      B = A[A.length - 1] ?? null;
    if (B === null) return '';
    return $f0(B, !0);
  }
  get redirected() {
    return (g4.brandCheck(this, WD), this[k3].urlList.length > 1);
  }
  get status() {
    return (g4.brandCheck(this, WD), this[k3].status);
  }
  get ok() {
    return (g4.brandCheck(this, WD), this[k3].status >= 200 && this[k3].status <= 299);
  }
  get statusText() {
    return (g4.brandCheck(this, WD), this[k3].statusText);
  }
  get headers() {
    return (g4.brandCheck(this, WD), this[GN]);
  }
  get body() {
    return (g4.brandCheck(this, WD), this[k3].body ? this[k3].body.stream : null);
  }
  get bodyUsed() {
    return (g4.brandCheck(this, WD), !!this[k3].body && Sd1.isDisturbed(this[k3].body.stream));
  }
  clone() {
    if ((g4.brandCheck(this, WD), qG6(this)))
      throw g4.errors.exception({
        header: 'Response.clone',
        message: 'Body has already been consumed.',
      });
    let A = jd1(this[k3]);
    return Ar(A, wG6(this[GN]));
  }
  [Nf0.inspect.custom](A, B) {
    if (B.depth === null) B.depth = 2;
    B.colors ??= !0;
    let Q = {
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      body: this.body,
      bodyUsed: this.bodyUsed,
      ok: this.ok,
      redirected: this.redirected,
      type: this.type,
      url: this.url,
    };
    return `Response ${Nf0.formatWithOptions(B, Q)}`;
  }
}
UG6(WD);
Object.defineProperties(WD.prototype, {
  type: WF,
  url: WF,
  status: WF,
  ok: WF,
  redirected: WF,
  statusText: WF,
  headers: WF,
  clone: WF,
  body: WF,
  bodyUsed: WF,
  [Symbol.toStringTag]: { value: 'Response', configurable: !0 },
});
Object.defineProperties(WD, { json: WF, redirect: WF, error: WF });
function jd1(A) {
  if (A.internalResponse) return Of0(jd1(A.internalResponse), A.type);
  let B = Fh({ ...A, body: null });
  if (A.body != null) B.body = EG6(B, A.body);
  return B;
}
function Fh(A) {
  return {
    aborted: !1,
    rangeRequested: !1,
    timingAllowPassed: !1,
    requestIncludesCredentials: !1,
    type: 'default',
    status: 200,
    timingInfo: null,
    cacheState: '',
    statusText: '',
    ...A,
    headersList: A?.headersList ? new Ef0(A?.headersList) : new Ef0(),
    urlList: A?.urlList ? [...A.urlList] : [],
  };
}
function KW1(A) {
  let B = PG6(A);
  return Fh({
    type: 'error',
    status: 0,
    error: B ? A : new Error(A ? String(A) : A),
    aborted: A && A.name === 'AbortError',
  });
}
function vG6(A) {
  return A.type === 'error' && A.status === 0;
}
function XW1(A, B) {
  return (
    (B = { internalResponse: A, ...B }),
    new Proxy(A, {
      get(Q, I) {
        return I in B ? B[I] : Q[I];
      },
      set(Q, I, G) {
        return (_d1(!(I in B)), (Q[I] = G), !0);
      },
    })
  );
}
function Of0(A, B) {
  if (B === 'basic') return XW1(A, { type: 'basic', headersList: A.headersList });
  else if (B === 'cors') return XW1(A, { type: 'cors', headersList: A.headersList });
  else if (B === 'opaque')
    return XW1(A, {
      type: 'opaque',
      urlList: Object.freeze([]),
      status: 0,
      statusText: '',
      body: null,
    });
  else if (B === 'opaqueredirect')
    return XW1(A, {
      type: 'opaqueredirect',
      status: 0,
      statusText: '',
      headersList: [],
      body: null,
    });
  else _d1(!1);
}
function bG6(A, B = null) {
  return (
    _d1(LG6(A)),
    RG6(A)
      ? KW1(
          Object.assign(new DOMException('The operation was aborted.', 'AbortError'), { cause: B })
        )
      : KW1(Object.assign(new DOMException('Request was cancelled.'), { cause: B }))
  );
}
function qf0(A, B, Q) {
  if (B.status !== null && (B.status < 200 || B.status > 599))
    throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
  if ('statusText' in B && B.statusText != null) {
    if (!MG6(String(B.statusText))) throw new TypeError('Invalid statusText');
  }
  if ('status' in B && B.status != null) A[k3].status = B.status;
  if ('statusText' in B && B.statusText != null) A[k3].statusText = B.statusText;
  if ('headers' in B && B.headers != null) zG6(A[GN], B.headers);
  if (Q) {
    if (yG6.includes(A.status))
      throw g4.errors.exception({
        header: 'Response constructor',
        message: `Invalid response status code ${A.status}`,
      });
    if (((A[k3].body = Q.body), Q.type != null && !A[k3].headersList.contains('content-type', !0)))
      A[k3].headersList.append('content-type', Q.type, !0);
  }
}
function Ar(A, B) {
  let Q = new WD(VW1);
  if (
    ((Q[k3] = A),
    (Q[GN] = new Mf0(VW1)),
    Rf0(Q[GN], A.headersList),
    Lf0(Q[GN], B),
    NG6 && A.body?.stream)
  )
    $G6.register(Q, new WeakRef(A.body.stream));
  return Q;
}
g4.converters.ReadableStream = g4.interfaceConverter(ReadableStream);
g4.converters.FormData = g4.interfaceConverter(kG6);
g4.converters.URLSearchParams = g4.interfaceConverter(URLSearchParams);
g4.converters.XMLHttpRequestBodyInit = function (A, B, Q) {
  if (typeof A === 'string') return g4.converters.USVString(A, B, Q);
  if (OG6(A)) return g4.converters.Blob(A, B, Q, { strict: !1 });
  if (ArrayBuffer.isView(A) || xG6.isArrayBuffer(A)) return g4.converters.BufferSource(A, B, Q);
  if (Sd1.isFormDataLike(A)) return g4.converters.FormData(A, B, Q, { strict: !1 });
  if (A instanceof URLSearchParams) return g4.converters.URLSearchParams(A, B, Q);
  return g4.converters.DOMString(A, B, Q);
};
g4.converters.BodyInit = function (A, B, Q) {
  if (A instanceof ReadableStream) return g4.converters.ReadableStream(A, B, Q);
  if (A?.[Symbol.asyncIterator]) return A;
  return g4.converters.XMLHttpRequestBodyInit(A, B, Q);
};
g4.converters.ResponseInit = g4.dictionaryConverter([
  { key: 'status', converter: g4.converters['unsigned short'], defaultValue: () => 200 },
  { key: 'statusText', converter: g4.converters.ByteString, defaultValue: () => '' },
  { key: 'headers', converter: g4.converters.HeadersInit },
]);
Tf0.exports = {
  isNetworkError: vG6,
  makeNetworkError: KW1,
  makeResponse: Fh,
  makeAppropriateNetworkError: bG6,
  filterResponse: Of0,
  Response: WD,
  cloneResponse: jd1,
  fromInnerResponse: Ar,
};
