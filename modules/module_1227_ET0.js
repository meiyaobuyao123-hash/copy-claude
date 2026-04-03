// Module: ET0
// Params: $L

var qV =
    ($L && $L.__classPrivateFieldGet) ||
    function (A, B, Q, I) {
      if (Q === 'a' && !I) throw new TypeError('Private accessor was defined without a getter');
      if (typeof B === 'function' ? A !== B || !I : !B.has(A))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        );
      return Q === 'm' ? I : Q === 'a' ? I.call(A) : I ? I.value : B.get(A);
    },
  JT0 =
    ($L && $L.__classPrivateFieldSet) ||
    function (A, B, Q, I, G) {
      if (I === 'm') throw new TypeError('Private method is not writable');
      if (I === 'a' && !G) throw new TypeError('Private accessor was defined without a setter');
      if (typeof B === 'function' ? A !== B || !G : !B.has(A))
        throw new TypeError(
          'Cannot write private member to an object whose class did not declare it'
        );
      return (I === 'a' ? G.call(A, Q) : G ? (G.value = Q) : B.set(A, Q), Q);
    },
  MV,
  $g,
  pg1,
  CT0,
  XT0,
  cg1,
  lg1,
  VT0;
Object.defineProperty($L, '__esModule', { value: !0 });
$L.GoogleToken = void 0;
var KT0 = D1('fs'),
  L26 = EV(),
  R26 = ug1(),
  O26 = D1('path'),
  T26 = D1('util'),
  HT0 = KT0.readFile
    ? T26.promisify(KT0.readFile)
    : async () => {
        throw new qg('use key rather than keyFile.', 'MISSING_CREDENTIALS');
      },
  zT0 = 'https://www.googleapis.com/oauth2/v4/token',
  P26 = 'https://accounts.google.com/o/oauth2/revoke?token=';
class qg extends Error {
  constructor(A, B) {
    super(A);
    this.code = B;
  }
}
class wT0 {
  get accessToken() {
    return this.rawToken ? this.rawToken.access_token : void 0;
  }
  get idToken() {
    return this.rawToken ? this.rawToken.id_token : void 0;
  }
  get tokenType() {
    return this.rawToken ? this.rawToken.token_type : void 0;
  }
  get refreshToken() {
    return this.rawToken ? this.rawToken.refresh_token : void 0;
  }
  constructor(A) {
    (MV.add(this),
      (this.transporter = { request: (B) => L26.request(B) }),
      $g.set(this, void 0),
      qV(this, MV, 'm', lg1).call(this, A));
  }
  hasExpired() {
    let A = new Date().getTime();
    if (this.rawToken && this.expiresAt) return A >= this.expiresAt;
    else return !0;
  }
  isTokenExpiring() {
    var A;
    let B = new Date().getTime(),
      Q = (A = this.eagerRefreshThresholdMillis) !== null && A !== void 0 ? A : 0;
    if (this.rawToken && this.expiresAt) return this.expiresAt <= B + Q;
    else return !0;
  }
  getToken(A, B = {}) {
    if (typeof A === 'object') ((B = A), (A = void 0));
    if (((B = Object.assign({ forceRefresh: !1 }, B)), A)) {
      let Q = A;
      qV(this, MV, 'm', pg1)
        .call(this, B)
        .then((I) => Q(null, I), A);
      return;
    }
    return qV(this, MV, 'm', pg1).call(this, B);
  }
  async getCredentials(A) {
    switch (O26.extname(A)) {
      case '.json': {
        let Q = await HT0(A, 'utf8'),
          I = JSON.parse(Q),
          G = I.private_key,
          D = I.client_email;
        if (!G || !D)
          throw new qg('private_key and client_email are required.', 'MISSING_CREDENTIALS');
        return { privateKey: G, clientEmail: D };
      }
      case '.der':
      case '.crt':
      case '.pem':
        return { privateKey: await HT0(A, 'utf8') };
      case '.p12':
      case '.pfx':
        throw new qg(
          '*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.',
          'UNKNOWN_CERTIFICATE_TYPE'
        );
      default:
        throw new qg(
          'Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.',
          'UNKNOWN_CERTIFICATE_TYPE'
        );
    }
  }
  revokeToken(A) {
    if (A) {
      qV(this, MV, 'm', cg1)
        .call(this)
        .then(() => A(), A);
      return;
    }
    return qV(this, MV, 'm', cg1).call(this);
  }
}
$L.GoogleToken = wT0;
(($g = new WeakMap()),
  (MV = new WeakSet()),
  (pg1 = async function A(B) {
    if (qV(this, $g, 'f') && !B.forceRefresh) return qV(this, $g, 'f');
    try {
      return await JT0(this, $g, qV(this, MV, 'm', CT0).call(this, B), 'f');
    } finally {
      JT0(this, $g, void 0, 'f');
    }
  }),
  (CT0 = async function A(B) {
    if (this.isTokenExpiring() === !1 && B.forceRefresh === !1)
      return Promise.resolve(this.rawToken);
    if (!this.key && !this.keyFile) throw new Error('No key or keyFile set.');
    if (!this.key && this.keyFile) {
      let Q = await this.getCredentials(this.keyFile);
      if (((this.key = Q.privateKey), (this.iss = Q.clientEmail || this.iss), !Q.clientEmail))
        qV(this, MV, 'm', XT0).call(this);
    }
    return qV(this, MV, 'm', VT0).call(this);
  }),
  (XT0 = function A() {
    if (!this.iss) throw new qg('email is required.', 'MISSING_CREDENTIALS');
  }),
  (cg1 = async function A() {
    if (!this.accessToken) throw new Error('No token to revoke.');
    let B = P26 + this.accessToken;
    (await this.transporter.request({ url: B, retry: !0 }),
      qV(this, MV, 'm', lg1).call(this, {
        email: this.iss,
        sub: this.sub,
        key: this.key,
        keyFile: this.keyFile,
        scope: this.scope,
        additionalClaims: this.additionalClaims,
      }));
  }),
  (lg1 = function A(B = {}) {
    if (
      ((this.keyFile = B.keyFile),
      (this.key = B.key),
      (this.rawToken = void 0),
      (this.iss = B.email || B.iss),
      (this.sub = B.sub),
      (this.additionalClaims = B.additionalClaims),
      typeof B.scope === 'object')
    )
      this.scope = B.scope.join(' ');
    else this.scope = B.scope;
    if (((this.eagerRefreshThresholdMillis = B.eagerRefreshThresholdMillis), B.transporter))
      this.transporter = B.transporter;
  }),
  (VT0 = async function A() {
    var B, Q;
    let I = Math.floor(new Date().getTime() / 1000),
      G = this.additionalClaims || {},
      D = Object.assign(
        { iss: this.iss, scope: this.scope, aud: zT0, exp: I + 3600, iat: I, sub: this.sub },
        G
      ),
      Z = R26.sign({ header: { alg: 'RS256' }, payload: D, secret: this.key });
    try {
      let Y = await this.transporter.request({
        method: 'POST',
        url: zT0,
        data: { grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: Z },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'json',
        retryConfig: { httpMethodsToRetry: ['POST'] },
      });
      return (
        (this.rawToken = Y.data),
        (this.expiresAt =
          Y.data.expires_in === null || Y.data.expires_in === void 0
            ? void 0
            : (I + Y.data.expires_in) * 1000),
        this.rawToken
      );
    } catch (Y) {
      ((this.rawToken = void 0), (this.tokenExpires = void 0));
      let W =
        Y.response && ((B = Y.response) === null || B === void 0 ? void 0 : B.data)
          ? (Q = Y.response) === null || Q === void 0
            ? void 0
            : Q.data
          : {};
      if (W.error) {
        let F = W.error_description ? `: ${W.error_description}` : '';
        Y.message = `${W.error}${F}`;
      }
      throw Y;
    }
  }));
