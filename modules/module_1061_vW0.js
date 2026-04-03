// Module: vW0
// Params: pZ8,fW0

var { defineProperty: $G1, getOwnPropertyDescriptor: $k4, getOwnPropertyNames: qk4 } = Object,
  Mk4 = Object.prototype.hasOwnProperty,
  nQ = (A, B) => $G1(A, 'name', { value: B, configurable: !0 }),
  Lk4 = (A, B) => {
    for (var Q in B) $G1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Rk4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of qk4(B))
        if (!Mk4.call(A, G) && G !== Q)
          $G1(A, G, { get: () => B[G], enumerable: !(I = $k4(B, G)) || I.enumerable });
    }
    return A;
  },
  Ok4 = (A) => Rk4($G1({}, '__esModule', { value: !0 }), A),
  $W0 = {};
Lk4($W0, {
  SignatureV4: () => ek4,
  clearCredentialCache: () => pk4,
  createScope: () => UG1,
  getCanonicalHeaders: () => Ef1,
  getCanonicalQuery: () => SW0,
  getPayloadHash: () => NG1,
  getSigningKey: () => PW0,
  moveHeadersToQuery: () => kW0,
  prepareRequest: () => Nf1,
});
fW0.exports = Ok4($W0);
var wW0 = sY0(),
  Hf1 = Ua(),
  Tk4 = 'X-Amz-Algorithm',
  Pk4 = 'X-Amz-Credential',
  qW0 = 'X-Amz-Date',
  Sk4 = 'X-Amz-SignedHeaders',
  _k4 = 'X-Amz-Expires',
  MW0 = 'X-Amz-Signature',
  LW0 = 'X-Amz-Security-Token',
  RW0 = 'authorization',
  OW0 = qW0.toLowerCase(),
  jk4 = 'date',
  yk4 = [RW0, OW0, jk4],
  kk4 = MW0.toLowerCase(),
  wf1 = 'x-amz-content-sha256',
  xk4 = LW0.toLowerCase(),
  fk4 = {
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
  vk4 = /^proxy-/,
  bk4 = /^sec-/,
  zf1 = 'AWS4-HMAC-SHA256',
  gk4 = 'AWS4-HMAC-SHA256-PAYLOAD',
  hk4 = 'UNSIGNED-PAYLOAD',
  mk4 = 50,
  TW0 = 'aws4_request',
  dk4 = 604800,
  GL = XW0(),
  uk4 = Ua(),
  _b = {},
  EG1 = [],
  UG1 = nQ((A, B, Q) => `${A}/${B}/${Q}/${TW0}`, 'createScope'),
  PW0 = nQ(async (A, B, Q, I, G) => {
    let D = await EW0(A, B.secretAccessKey, B.accessKeyId),
      Z = `${Q}:${I}:${G}:${GL.toHex(D)}:${B.sessionToken}`;
    if (Z in _b) return _b[Z];
    EG1.push(Z);
    while (EG1.length > mk4) delete _b[EG1.shift()];
    let Y = `AWS4${B.secretAccessKey}`;
    for (let W of [Q, I, G, TW0]) Y = await EW0(A, Y, W);
    return (_b[Z] = Y);
  }, 'getSigningKey'),
  pk4 = nQ(() => {
    ((EG1.length = 0),
      Object.keys(_b).forEach((A) => {
        delete _b[A];
      }));
  }, 'clearCredentialCache'),
  EW0 = nQ((A, B, Q) => {
    let I = new A(B);
    return (I.update(uk4.toUint8Array(Q)), I.digest());
  }, 'hmac'),
  Ef1 = nQ(({ headers: A }, B, Q) => {
    let I = {};
    for (let G of Object.keys(A).sort()) {
      if (A[G] == null) continue;
      let D = G.toLowerCase();
      if (D in fk4 || (B == null ? void 0 : B.has(D)) || vk4.test(D) || bk4.test(D)) {
        if (!Q || (Q && !Q.has(D))) continue;
      }
      I[D] = A[G].trim().replace(/\s+/g, ' ');
    }
    return I;
  }, 'getCanonicalHeaders'),
  Na = zW0(),
  SW0 = nQ(({ query: A = {} }) => {
    let B = [],
      Q = {};
    for (let I of Object.keys(A).sort()) {
      if (I.toLowerCase() === kk4) continue;
      B.push(I);
      let G = A[I];
      if (typeof G === 'string') Q[I] = `${Na.escapeUri(I)}=${Na.escapeUri(G)}`;
      else if (Array.isArray(G))
        Q[I] = G.slice(0)
          .reduce((D, Z) => D.concat([`${Na.escapeUri(I)}=${Na.escapeUri(Z)}`]), [])
          .sort()
          .join('&');
    }
    return B.map((I) => Q[I])
      .filter((I) => I)
      .join('&');
  }, 'getCanonicalQuery'),
  ck4 = Jf1(),
  lk4 = Ua(),
  NG1 = nQ(async ({ headers: A, body: B }, Q) => {
    for (let I of Object.keys(A)) if (I.toLowerCase() === wf1) return A[I];
    if (B == null) return 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    else if (typeof B === 'string' || ArrayBuffer.isView(B) || ck4.isArrayBuffer(B)) {
      let I = new Q();
      return (I.update(lk4.toUint8Array(B)), GL.toHex(await I.digest()));
    }
    return hk4;
  }, 'getPayloadHash'),
  UW0 = Ua(),
  _W0 = class A {
    format(B) {
      let Q = [];
      for (let D of Object.keys(B)) {
        let Z = UW0.fromUtf8(D);
        Q.push(Uint8Array.from([Z.byteLength]), Z, this.formatHeaderValue(B[D]));
      }
      let I = new Uint8Array(Q.reduce((D, Z) => D + Z.byteLength, 0)),
        G = 0;
      for (let D of Q) (I.set(D, G), (G += D.byteLength));
      return I;
    }
    formatHeaderValue(B) {
      switch (B.type) {
        case 'boolean':
          return Uint8Array.from([B.value ? 0 : 1]);
        case 'byte':
          return Uint8Array.from([2, B.value]);
        case 'short':
          let Q = new DataView(new ArrayBuffer(3));
          return (Q.setUint8(0, 3), Q.setInt16(1, B.value, !1), new Uint8Array(Q.buffer));
        case 'integer':
          let I = new DataView(new ArrayBuffer(5));
          return (I.setUint8(0, 4), I.setInt32(1, B.value, !1), new Uint8Array(I.buffer));
        case 'long':
          let G = new Uint8Array(9);
          return ((G[0] = 5), G.set(B.value.bytes, 1), G);
        case 'binary':
          let D = new DataView(new ArrayBuffer(3 + B.value.byteLength));
          (D.setUint8(0, 6), D.setUint16(1, B.value.byteLength, !1));
          let Z = new Uint8Array(D.buffer);
          return (Z.set(B.value, 3), Z);
        case 'string':
          let Y = UW0.fromUtf8(B.value),
            W = new DataView(new ArrayBuffer(3 + Y.byteLength));
          (W.setUint8(0, 7), W.setUint16(1, Y.byteLength, !1));
          let F = new Uint8Array(W.buffer);
          return (F.set(Y, 3), F);
        case 'timestamp':
          let J = new Uint8Array(9);
          return ((J[0] = 8), J.set(ak4.fromNumber(B.value.valueOf()).bytes, 1), J);
        case 'uuid':
          if (!nk4.test(B.value)) throw new Error(`Invalid UUID received: ${B.value}`);
          let C = new Uint8Array(17);
          return ((C[0] = 9), C.set(GL.fromHex(B.value.replace(/\-/g, '')), 1), C);
      }
    }
  };
nQ(_W0, 'HeaderFormatter');
var ik4 = _W0,
  nk4 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
  jW0 = class A {
    constructor(B) {
      if (((this.bytes = B), B.byteLength !== 8))
        throw new Error('Int64 buffers must be exactly 8 bytes');
    }
    static fromNumber(B) {
      if (B > 9223372036854776000 || B < -9223372036854776000)
        throw new Error(`${B} is too large (or, if negative, too small) to represent as an Int64`);
      let Q = new Uint8Array(8);
      for (let I = 7, G = Math.abs(Math.round(B)); I > -1 && G > 0; I--, G /= 256) Q[I] = G;
      if (B < 0) Uf1(Q);
      return new A(Q);
    }
    valueOf() {
      let B = this.bytes.slice(0),
        Q = B[0] & 128;
      if (Q) Uf1(B);
      return parseInt(GL.toHex(B), 16) * (Q ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  };
nQ(jW0, 'Int64');
var ak4 = jW0;
function Uf1(A) {
  for (let B = 0; B < 8; B++) A[B] ^= 255;
  for (let B = 7; B > -1; B--) if ((A[B]++, A[B] !== 0)) break;
}
nQ(Uf1, 'negate');
var sk4 = nQ((A, B) => {
    A = A.toLowerCase();
    for (let Q of Object.keys(B)) if (A === Q.toLowerCase()) return !0;
    return !1;
  }, 'hasHeader'),
  yW0 = nQ(
    ({ headers: A, query: B, ...Q }) => ({ ...Q, headers: { ...A }, query: B ? rk4(B) : void 0 }),
    'cloneRequest'
  ),
  rk4 = nQ(
    (A) =>
      Object.keys(A).reduce((B, Q) => {
        let I = A[Q];
        return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
      }, {}),
    'cloneQuery'
  ),
  kW0 = nQ((A, B = {}) => {
    var Q;
    let { headers: I, query: G = {} } = typeof A.clone === 'function' ? A.clone() : yW0(A);
    for (let D of Object.keys(I)) {
      let Z = D.toLowerCase();
      if (Z.slice(0, 6) === 'x-amz-' && !((Q = B.unhoistableHeaders) == null ? void 0 : Q.has(Z)))
        ((G[D] = I[D]), delete I[D]);
    }
    return { ...A, headers: I, query: G };
  }, 'moveHeadersToQuery'),
  Nf1 = nQ((A) => {
    A = typeof A.clone === 'function' ? A.clone() : yW0(A);
    for (let B of Object.keys(A.headers))
      if (yk4.indexOf(B.toLowerCase()) > -1) delete A.headers[B];
    return A;
  }, 'prepareRequest'),
  ok4 = nQ(
    (A) =>
      tk4(A)
        .toISOString()
        .replace(/\.\d{3}Z$/, 'Z'),
    'iso8601'
  ),
  tk4 = nQ((A) => {
    if (typeof A === 'number') return new Date(A * 1000);
    if (typeof A === 'string') {
      if (Number(A)) return new Date(Number(A) * 1000);
      return new Date(A);
    }
    return A;
  }, 'toDate'),
  xW0 = class A {
    constructor({
      applyChecksum: B,
      credentials: Q,
      region: I,
      service: G,
      sha256: D,
      uriEscapePath: Z = !0,
    }) {
      ((this.headerFormatter = new ik4()),
        (this.service = G),
        (this.sha256 = D),
        (this.uriEscapePath = Z),
        (this.applyChecksum = typeof B === 'boolean' ? B : !0),
        (this.regionProvider = wW0.normalizeProvider(I)),
        (this.credentialProvider = wW0.normalizeProvider(Q)));
    }
    async presign(B, Q = {}) {
      let {
          signingDate: I = new Date(),
          expiresIn: G = 3600,
          unsignableHeaders: D,
          unhoistableHeaders: Z,
          signableHeaders: Y,
          signingRegion: W,
          signingService: F,
        } = Q,
        J = await this.credentialProvider();
      this.validateResolvedCredentials(J);
      let C = W ?? (await this.regionProvider()),
        { longDate: X, shortDate: V } = wG1(I);
      if (G > dk4)
        return Promise.reject(
          'Signature version 4 presigned URLs must have an expiration date less than one week in the future'
        );
      let K = UG1(V, C, F ?? this.service),
        U = kW0(Nf1(B), { unhoistableHeaders: Z });
      if (J.sessionToken) U.query[LW0] = J.sessionToken;
      ((U.query[Tk4] = zf1),
        (U.query[Pk4] = `${J.accessKeyId}/${K}`),
        (U.query[qW0] = X),
        (U.query[_k4] = G.toString(10)));
      let N = Ef1(U, D, Y);
      return (
        (U.query[Sk4] = NW0(N)),
        (U.query[MW0] = await this.getSignature(
          X,
          K,
          this.getSigningKey(J, C, V, F),
          this.createCanonicalRequest(U, N, await NG1(B, this.sha256))
        )),
        U
      );
    }
    async sign(B, Q) {
      if (typeof B === 'string') return this.signString(B, Q);
      else if (B.headers && B.payload) return this.signEvent(B, Q);
      else if (B.message) return this.signMessage(B, Q);
      else return this.signRequest(B, Q);
    }
    async signEvent(
      { headers: B, payload: Q },
      { signingDate: I = new Date(), priorSignature: G, signingRegion: D, signingService: Z }
    ) {
      let Y = D ?? (await this.regionProvider()),
        { shortDate: W, longDate: F } = wG1(I),
        J = UG1(W, Y, Z ?? this.service),
        C = await NG1({ headers: {}, body: Q }, this.sha256),
        X = new this.sha256();
      X.update(B);
      let V = GL.toHex(await X.digest()),
        K = [gk4, F, J, G, V, C].join(`
`);
      return this.signString(K, { signingDate: I, signingRegion: Y, signingService: Z });
    }
    async signMessage(B, { signingDate: Q = new Date(), signingRegion: I, signingService: G }) {
      return this.signEvent(
        { headers: this.headerFormatter.format(B.message.headers), payload: B.message.body },
        { signingDate: Q, signingRegion: I, signingService: G, priorSignature: B.priorSignature }
      ).then((Z) => {
        return { message: B.message, signature: Z };
      });
    }
    async signString(B, { signingDate: Q = new Date(), signingRegion: I, signingService: G } = {}) {
      let D = await this.credentialProvider();
      this.validateResolvedCredentials(D);
      let Z = I ?? (await this.regionProvider()),
        { shortDate: Y } = wG1(Q),
        W = new this.sha256(await this.getSigningKey(D, Z, Y, G));
      return (W.update(Hf1.toUint8Array(B)), GL.toHex(await W.digest()));
    }
    async signRequest(
      B,
      {
        signingDate: Q = new Date(),
        signableHeaders: I,
        unsignableHeaders: G,
        signingRegion: D,
        signingService: Z,
      } = {}
    ) {
      let Y = await this.credentialProvider();
      this.validateResolvedCredentials(Y);
      let W = D ?? (await this.regionProvider()),
        F = Nf1(B),
        { longDate: J, shortDate: C } = wG1(Q),
        X = UG1(C, W, Z ?? this.service);
      if (((F.headers[OW0] = J), Y.sessionToken)) F.headers[xk4] = Y.sessionToken;
      let V = await NG1(F, this.sha256);
      if (!sk4(wf1, F.headers) && this.applyChecksum) F.headers[wf1] = V;
      let K = Ef1(F, G, I),
        U = await this.getSignature(
          J,
          X,
          this.getSigningKey(Y, W, C, Z),
          this.createCanonicalRequest(F, K, V)
        );
      return (
        (F.headers[RW0] =
          `${zf1} Credential=${Y.accessKeyId}/${X}, SignedHeaders=${NW0(K)}, Signature=${U}`),
        F
      );
    }
    createCanonicalRequest(B, Q, I) {
      let G = Object.keys(Q).sort();
      return `${B.method}
${this.getCanonicalPath(B)}
${SW0(B)}
${G.map((D) => `${D}:${Q[D]}`).join(`
`)}

${G.join(';')}
${I}`;
    }
    async createStringToSign(B, Q, I) {
      let G = new this.sha256();
      G.update(Hf1.toUint8Array(I));
      let D = await G.digest();
      return `${zf1}
${B}
${Q}
${GL.toHex(D)}`;
    }
    getCanonicalPath({ path: B }) {
      if (this.uriEscapePath) {
        let Q = [];
        for (let D of B.split('/')) {
          if ((D == null ? void 0 : D.length) === 0) continue;
          if (D === '.') continue;
          if (D === '..') Q.pop();
          else Q.push(D);
        }
        let I = `${(B == null ? void 0 : B.startsWith('/')) ? '/' : ''}${Q.join('/')}${Q.length > 0 && (B == null ? void 0 : B.endsWith('/')) ? '/' : ''}`;
        return Na.escapeUri(I).replace(/%2F/g, '/');
      }
      return B;
    }
    async getSignature(B, Q, I, G) {
      let D = await this.createStringToSign(B, Q, G),
        Z = new this.sha256(await I);
      return (Z.update(Hf1.toUint8Array(D)), GL.toHex(await Z.digest()));
    }
    getSigningKey(B, Q, I, G) {
      return PW0(this.sha256, B, I, Q, G || this.service);
    }
    validateResolvedCredentials(B) {
      if (
        typeof B !== 'object' ||
        typeof B.accessKeyId !== 'string' ||
        typeof B.secretAccessKey !== 'string'
      )
        throw new Error('Resolved credential object is not valid');
    }
  };
nQ(xW0, 'SignatureV4');
var ek4 = xW0,
  wG1 = nQ((A) => {
    let B = ok4(A).replace(/[\-:]/g, '');
    return { longDate: B, shortDate: B.slice(0, 8) };
  }, 'formatDate'),
  NW0 = nQ((A) => Object.keys(A).sort().join(';'), 'getCanonicalHeaderList');
