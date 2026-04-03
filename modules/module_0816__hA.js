// Module: _hA
// Params: om5,ShA

var { defineProperty: C81, getOwnPropertyDescriptor: Or9, getOwnPropertyNames: Tr9 } = Object,
  Pr9 = Object.prototype.hasOwnProperty,
  rI = (A, B) => C81(A, 'name', { value: B, configurable: !0 }),
  Sr9 = (A, B) => {
    for (var Q in B) C81(A, Q, { get: B[Q], enumerable: !0 });
  },
  _r9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Tr9(B))
        if (!Pr9.call(A, G) && G !== Q)
          C81(A, G, { get: () => B[G], enumerable: !(I = Or9(B, G)) || I.enumerable });
    }
    return A;
  },
  jr9 = (A) => _r9(C81({}, '__esModule', { value: !0 }), A),
  YhA = {};
Sr9(YhA, {
  ALGORITHM_IDENTIFIER: () => D81,
  ALGORITHM_IDENTIFIER_V4A: () => fr9,
  ALGORITHM_QUERY_PARAM: () => WhA,
  ALWAYS_UNSIGNABLE_HEADERS: () => zhA,
  AMZ_DATE_HEADER: () => iO1,
  AMZ_DATE_QUERY_PARAM: () => uO1,
  AUTH_HEADER: () => lO1,
  CREDENTIAL_QUERY_PARAM: () => FhA,
  DATE_HEADER: () => XhA,
  EVENT_ALGORITHM_IDENTIFIER: () => UhA,
  EXPIRES_QUERY_PARAM: () => ChA,
  GENERATED_HEADERS: () => VhA,
  HOST_HEADER: () => kr9,
  KEY_TYPE_IDENTIFIER: () => nO1,
  MAX_CACHE_SIZE: () => $hA,
  MAX_PRESIGNED_TTL: () => qhA,
  PROXY_HEADER_PATTERN: () => whA,
  REGION_SET_PARAM: () => yr9,
  SEC_HEADER_PATTERN: () => EhA,
  SHA256_HEADER: () => J81,
  SIGNATURE_HEADER: () => KhA,
  SIGNATURE_QUERY_PARAM: () => pO1,
  SIGNED_HEADERS_QUERY_PARAM: () => JhA,
  SignatureV4: () => ir9,
  SignatureV4Base: () => PhA,
  TOKEN_HEADER: () => HhA,
  TOKEN_QUERY_PARAM: () => cO1,
  UNSIGNABLE_PATTERNS: () => xr9,
  UNSIGNED_PAYLOAD: () => NhA,
  clearCredentialCache: () => br9,
  createScope: () => Y81,
  getCanonicalHeaders: () => hO1,
  getCanonicalQuery: () => ThA,
  getPayloadHash: () => W81,
  getSigningKey: () => MhA,
  hasHeader: () => LhA,
  moveHeadersToQuery: () => OhA,
  prepareRequest: () => dO1,
  signatureV4aContainer: () => nr9,
});
ShA.exports = jr9(YhA);
var IhA = DQ(),
  WhA = 'X-Amz-Algorithm',
  FhA = 'X-Amz-Credential',
  uO1 = 'X-Amz-Date',
  JhA = 'X-Amz-SignedHeaders',
  ChA = 'X-Amz-Expires',
  pO1 = 'X-Amz-Signature',
  cO1 = 'X-Amz-Security-Token',
  yr9 = 'X-Amz-Region-Set',
  lO1 = 'authorization',
  iO1 = uO1.toLowerCase(),
  XhA = 'date',
  VhA = [lO1, iO1, XhA],
  KhA = pO1.toLowerCase(),
  J81 = 'x-amz-content-sha256',
  HhA = cO1.toLowerCase(),
  kr9 = 'host',
  zhA = {
    authorization: !0,
    'cache-control': !0,
    connection: !0,
    expect: !0,
    from: !0,
    'keep-alive': !0,
    'max-forwards': !0,
    pragma: !0,
    referer: !0,
    te: !0,
    trailer: !0,
    'transfer-encoding': !0,
    upgrade: !0,
    'user-agent': !0,
    'x-amzn-trace-id': !0,
  },
  whA = /^proxy-/,
  EhA = /^sec-/,
  xr9 = [/^proxy-/i, /^sec-/i],
  D81 = 'AWS4-HMAC-SHA256',
  fr9 = 'AWS4-ECDSA-P256-SHA256',
  UhA = 'AWS4-HMAC-SHA256-PAYLOAD',
  NhA = 'UNSIGNED-PAYLOAD',
  $hA = 50,
  nO1 = 'aws4_request',
  qhA = 604800,
  ZM = v51(),
  vr9 = DQ(),
  Lf = {},
  Z81 = [],
  Y81 = rI((A, B, Q) => `${A}/${B}/${Q}/${nO1}`, 'createScope'),
  MhA = rI(async (A, B, Q, I, G) => {
    let D = await GhA(A, B.secretAccessKey, B.accessKeyId),
      Z = `${Q}:${I}:${G}:${ZM.toHex(D)}:${B.sessionToken}`;
    if (Z in Lf) return Lf[Z];
    Z81.push(Z);
    while (Z81.length > $hA) delete Lf[Z81.shift()];
    let Y = `AWS4${B.secretAccessKey}`;
    for (let W of [Q, I, G, nO1]) Y = await GhA(A, Y, W);
    return (Lf[Z] = Y);
  }, 'getSigningKey'),
  br9 = rI(() => {
    ((Z81.length = 0),
      Object.keys(Lf).forEach((A) => {
        delete Lf[A];
      }));
  }, 'clearCredentialCache'),
  GhA = rI((A, B, Q) => {
    let I = new A(B);
    return (I.update(vr9.toUint8Array(Q)), I.digest());
  }, 'hmac'),
  hO1 = rI(({ headers: A }, B, Q) => {
    let I = {};
    for (let G of Object.keys(A).sort()) {
      if (A[G] == null) continue;
      let D = G.toLowerCase();
      if (D in zhA || B?.has(D) || whA.test(D) || EhA.test(D)) {
        if (!Q || (Q && !Q.has(D))) continue;
      }
      I[D] = A[G].trim().replace(/\s+/g, ' ');
    }
    return I;
  }, 'getCanonicalHeaders'),
  gr9 = tgA(),
  hr9 = DQ(),
  W81 = rI(async ({ headers: A, body: B }, Q) => {
    for (let I of Object.keys(A)) if (I.toLowerCase() === J81) return A[I];
    if (B == null) return 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    else if (typeof B === 'string' || ArrayBuffer.isView(B) || gr9.isArrayBuffer(B)) {
      let I = new Q();
      return (I.update(hr9.toUint8Array(B)), ZM.toHex(await I.digest()));
    }
    return NhA;
  }, 'getPayloadHash'),
  DhA = DQ(),
  mr9 = class {
    static {
      rI(this, 'HeaderFormatter');
    }
    format(A) {
      let B = [];
      for (let G of Object.keys(A)) {
        let D = DhA.fromUtf8(G);
        B.push(Uint8Array.from([D.byteLength]), D, this.formatHeaderValue(A[G]));
      }
      let Q = new Uint8Array(B.reduce((G, D) => G + D.byteLength, 0)),
        I = 0;
      for (let G of B) (Q.set(G, I), (I += G.byteLength));
      return Q;
    }
    formatHeaderValue(A) {
      switch (A.type) {
        case 'boolean':
          return Uint8Array.from([A.value ? 0 : 1]);
        case 'byte':
          return Uint8Array.from([2, A.value]);
        case 'short':
          let B = new DataView(new ArrayBuffer(3));
          return (B.setUint8(0, 3), B.setInt16(1, A.value, !1), new Uint8Array(B.buffer));
        case 'integer':
          let Q = new DataView(new ArrayBuffer(5));
          return (Q.setUint8(0, 4), Q.setInt32(1, A.value, !1), new Uint8Array(Q.buffer));
        case 'long':
          let I = new Uint8Array(9);
          return ((I[0] = 5), I.set(A.value.bytes, 1), I);
        case 'binary':
          let G = new DataView(new ArrayBuffer(3 + A.value.byteLength));
          (G.setUint8(0, 6), G.setUint16(1, A.value.byteLength, !1));
          let D = new Uint8Array(G.buffer);
          return (D.set(A.value, 3), D);
        case 'string':
          let Z = DhA.fromUtf8(A.value),
            Y = new DataView(new ArrayBuffer(3 + Z.byteLength));
          (Y.setUint8(0, 7), Y.setUint16(1, Z.byteLength, !1));
          let W = new Uint8Array(Y.buffer);
          return (W.set(Z, 3), W);
        case 'timestamp':
          let F = new Uint8Array(9);
          return ((F[0] = 8), F.set(ur9.fromNumber(A.value.valueOf()).bytes, 1), F);
        case 'uuid':
          if (!dr9.test(A.value)) throw new Error(`Invalid UUID received: ${A.value}`);
          let J = new Uint8Array(17);
          return ((J[0] = 9), J.set(ZM.fromHex(A.value.replace(/\-/g, '')), 1), J);
      }
    }
  },
  dr9 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
  ur9 = class A {
    constructor(B) {
      if (((this.bytes = B), B.byteLength !== 8))
        throw new Error('Int64 buffers must be exactly 8 bytes');
    }
    static {
      rI(this, 'Int64');
    }
    static fromNumber(B) {
      if (B > 9223372036854776000 || B < -9223372036854776000)
        throw new Error(`${B} is too large (or, if negative, too small) to represent as an Int64`);
      let Q = new Uint8Array(8);
      for (let I = 7, G = Math.abs(Math.round(B)); I > -1 && G > 0; I--, G /= 256) Q[I] = G;
      if (B < 0) mO1(Q);
      return new A(Q);
    }
    valueOf() {
      let B = this.bytes.slice(0),
        Q = B[0] & 128;
      if (Q) mO1(B);
      return parseInt(ZM.toHex(B), 16) * (Q ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  };
function mO1(A) {
  for (let B = 0; B < 8; B++) A[B] ^= 255;
  for (let B = 7; B > -1; B--) if ((A[B]++, A[B] !== 0)) break;
}
rI(mO1, 'negate');
var LhA = rI((A, B) => {
    A = A.toLowerCase();
    for (let Q of Object.keys(B)) if (A === Q.toLowerCase()) return !0;
    return !1;
  }, 'hasHeader'),
  RhA = wl(),
  OhA = rI((A, B = {}) => {
    let { headers: Q, query: I = {} } = RhA.HttpRequest.clone(A);
    for (let G of Object.keys(Q)) {
      let D = G.toLowerCase();
      if (
        (D.slice(0, 6) === 'x-amz-' && !B.unhoistableHeaders?.has(D)) ||
        B.hoistableHeaders?.has(D)
      )
        ((I[G] = Q[G]), delete Q[G]);
    }
    return { ...A, headers: Q, query: I };
  }, 'moveHeadersToQuery'),
  dO1 = rI((A) => {
    A = RhA.HttpRequest.clone(A);
    for (let B of Object.keys(A.headers))
      if (VhA.indexOf(B.toLowerCase()) > -1) delete A.headers[B];
    return A;
  }, 'prepareRequest'),
  ZhA = qJ(),
  pr9 = DQ(),
  F81 = QhA(),
  ThA = rI(({ query: A = {} }) => {
    let B = [],
      Q = {};
    for (let I of Object.keys(A)) {
      if (I.toLowerCase() === KhA) continue;
      let G = F81.escapeUri(I);
      B.push(G);
      let D = A[I];
      if (typeof D === 'string') Q[G] = `${G}=${F81.escapeUri(D)}`;
      else if (Array.isArray(D))
        Q[G] = D.slice(0)
          .reduce((Z, Y) => Z.concat([`${G}=${F81.escapeUri(Y)}`]), [])
          .sort()
          .join('&');
    }
    return B.sort()
      .map((I) => Q[I])
      .filter((I) => I)
      .join('&');
  }, 'getCanonicalQuery'),
  cr9 = rI(
    (A) =>
      lr9(A)
        .toISOString()
        .replace(/\.\d{3}Z$/, 'Z'),
    'iso8601'
  ),
  lr9 = rI((A) => {
    if (typeof A === 'number') return new Date(A * 1000);
    if (typeof A === 'string') {
      if (Number(A)) return new Date(Number(A) * 1000);
      return new Date(A);
    }
    return A;
  }, 'toDate'),
  PhA = class {
    static {
      rI(this, 'SignatureV4Base');
    }
    constructor({
      applyChecksum: A,
      credentials: B,
      region: Q,
      service: I,
      sha256: G,
      uriEscapePath: D = !0,
    }) {
      ((this.service = I),
        (this.sha256 = G),
        (this.uriEscapePath = D),
        (this.applyChecksum = typeof A === 'boolean' ? A : !0),
        (this.regionProvider = ZhA.normalizeProvider(Q)),
        (this.credentialProvider = ZhA.normalizeProvider(B)));
    }
    createCanonicalRequest(A, B, Q) {
      let I = Object.keys(B).sort();
      return `${A.method}
${this.getCanonicalPath(A)}
${ThA(A)}
${I.map((G) => `${G}:${B[G]}`).join(`
`)}

${I.join(';')}
${Q}`;
    }
    async createStringToSign(A, B, Q, I) {
      let G = new this.sha256();
      G.update(pr9.toUint8Array(Q));
      let D = await G.digest();
      return `${I}
${A}
${B}
${ZM.toHex(D)}`;
    }
    getCanonicalPath({ path: A }) {
      if (this.uriEscapePath) {
        let B = [];
        for (let G of A.split('/')) {
          if (G?.length === 0) continue;
          if (G === '.') continue;
          if (G === '..') B.pop();
          else B.push(G);
        }
        let Q = `${A?.startsWith('/') ? '/' : ''}${B.join('/')}${B.length > 0 && A?.endsWith('/') ? '/' : ''}`;
        return F81.escapeUri(Q).replace(/%2F/g, '/');
      }
      return A;
    }
    validateResolvedCredentials(A) {
      if (
        typeof A !== 'object' ||
        typeof A.accessKeyId !== 'string' ||
        typeof A.secretAccessKey !== 'string'
      )
        throw new Error('Resolved credential object is not valid');
    }
    formatDate(A) {
      let B = cr9(A).replace(/[\-:]/g, '');
      return { longDate: B, shortDate: B.slice(0, 8) };
    }
    getCanonicalHeaderList(A) {
      return Object.keys(A).sort().join(';');
    }
  },
  ir9 = class extends PhA {
    constructor({
      applyChecksum: A,
      credentials: B,
      region: Q,
      service: I,
      sha256: G,
      uriEscapePath: D = !0,
    }) {
      super({
        applyChecksum: A,
        credentials: B,
        region: Q,
        service: I,
        sha256: G,
        uriEscapePath: D,
      });
      this.headerFormatter = new mr9();
    }
    static {
      rI(this, 'SignatureV4');
    }
    async presign(A, B = {}) {
      let {
          signingDate: Q = new Date(),
          expiresIn: I = 3600,
          unsignableHeaders: G,
          unhoistableHeaders: D,
          signableHeaders: Z,
          hoistableHeaders: Y,
          signingRegion: W,
          signingService: F,
        } = B,
        J = await this.credentialProvider();
      this.validateResolvedCredentials(J);
      let C = W ?? (await this.regionProvider()),
        { longDate: X, shortDate: V } = this.formatDate(Q);
      if (I > qhA)
        return Promise.reject(
          'Signature version 4 presigned URLs must have an expiration date less than one week in the future'
        );
      let K = Y81(V, C, F ?? this.service),
        U = OhA(dO1(A), { unhoistableHeaders: D, hoistableHeaders: Y });
      if (J.sessionToken) U.query[cO1] = J.sessionToken;
      ((U.query[WhA] = D81),
        (U.query[FhA] = `${J.accessKeyId}/${K}`),
        (U.query[uO1] = X),
        (U.query[ChA] = I.toString(10)));
      let N = hO1(U, G, Z);
      return (
        (U.query[JhA] = this.getCanonicalHeaderList(N)),
        (U.query[pO1] = await this.getSignature(
          X,
          K,
          this.getSigningKey(J, C, V, F),
          this.createCanonicalRequest(U, N, await W81(A, this.sha256))
        )),
        U
      );
    }
    async sign(A, B) {
      if (typeof A === 'string') return this.signString(A, B);
      else if (A.headers && A.payload) return this.signEvent(A, B);
      else if (A.message) return this.signMessage(A, B);
      else return this.signRequest(A, B);
    }
    async signEvent(
      { headers: A, payload: B },
      { signingDate: Q = new Date(), priorSignature: I, signingRegion: G, signingService: D }
    ) {
      let Z = G ?? (await this.regionProvider()),
        { shortDate: Y, longDate: W } = this.formatDate(Q),
        F = Y81(Y, Z, D ?? this.service),
        J = await W81({ headers: {}, body: B }, this.sha256),
        C = new this.sha256();
      C.update(A);
      let X = ZM.toHex(await C.digest()),
        V = [UhA, W, F, I, X, J].join(`
`);
      return this.signString(V, { signingDate: Q, signingRegion: Z, signingService: D });
    }
    async signMessage(A, { signingDate: B = new Date(), signingRegion: Q, signingService: I }) {
      return this.signEvent(
        { headers: this.headerFormatter.format(A.message.headers), payload: A.message.body },
        { signingDate: B, signingRegion: Q, signingService: I, priorSignature: A.priorSignature }
      ).then((D) => {
        return { message: A.message, signature: D };
      });
    }
    async signString(A, { signingDate: B = new Date(), signingRegion: Q, signingService: I } = {}) {
      let G = await this.credentialProvider();
      this.validateResolvedCredentials(G);
      let D = Q ?? (await this.regionProvider()),
        { shortDate: Z } = this.formatDate(B),
        Y = new this.sha256(await this.getSigningKey(G, D, Z, I));
      return (Y.update(IhA.toUint8Array(A)), ZM.toHex(await Y.digest()));
    }
    async signRequest(
      A,
      {
        signingDate: B = new Date(),
        signableHeaders: Q,
        unsignableHeaders: I,
        signingRegion: G,
        signingService: D,
      } = {}
    ) {
      let Z = await this.credentialProvider();
      this.validateResolvedCredentials(Z);
      let Y = G ?? (await this.regionProvider()),
        W = dO1(A),
        { longDate: F, shortDate: J } = this.formatDate(B),
        C = Y81(J, Y, D ?? this.service);
      if (((W.headers[iO1] = F), Z.sessionToken)) W.headers[HhA] = Z.sessionToken;
      let X = await W81(W, this.sha256);
      if (!LhA(J81, W.headers) && this.applyChecksum) W.headers[J81] = X;
      let V = hO1(W, I, Q),
        K = await this.getSignature(
          F,
          C,
          this.getSigningKey(Z, Y, J, D),
          this.createCanonicalRequest(W, V, X)
        );
      return (
        (W.headers[lO1] =
          `${D81} Credential=${Z.accessKeyId}/${C}, SignedHeaders=${this.getCanonicalHeaderList(V)}, Signature=${K}`),
        W
      );
    }
    async getSignature(A, B, Q, I) {
      let G = await this.createStringToSign(A, B, I, D81),
        D = new this.sha256(await Q);
      return (D.update(IhA.toUint8Array(G)), ZM.toHex(await D.digest()));
    }
    getSigningKey(A, B, Q, I) {
      return MhA(this.sha256, A, Q, B, I || this.service);
    }
  },
  nr9 = { SignatureV4a: null };
