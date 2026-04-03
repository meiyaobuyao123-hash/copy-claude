// Module: RS
// Params: qO0

Object.defineProperty(qO0, '__esModule', { value: !0 });
qO0.OAuth2Client =
  qO0.ClientAuthentication =
  qO0.CertificateFormat =
  qO0.CodeChallengeMethod =
    void 0;
var U06 = EV(),
  _g1 = D1('querystring'),
  N06 = D1('stream'),
  $06 = Rg1(),
  jg1 = Kg(),
  q06 = Tz(),
  M06 = Sg1(),
  $O0;
(function (A) {
  ((A.Plain = 'plain'), (A.S256 = 'S256'));
})($O0 || (qO0.CodeChallengeMethod = $O0 = {}));
var lU;
(function (A) {
  ((A.PEM = 'PEM'), (A.JWK = 'JWK'));
})(lU || (qO0.CertificateFormat = lU = {}));
var Zs;
(function (A) {
  ((A.ClientSecretPost = 'ClientSecretPost'),
    (A.ClientSecretBasic = 'ClientSecretBasic'),
    (A.None = 'None'));
})(Zs || (qO0.ClientAuthentication = Zs = {}));
class JZ extends q06.AuthClient {
  constructor(A, B, Q) {
    let I = A && typeof A === 'object' ? A : { clientId: A, clientSecret: B, redirectUri: Q };
    super(I);
    ((this.certificateCache = {}),
      (this.certificateExpiry = null),
      (this.certificateCacheFormat = lU.PEM),
      (this.refreshTokenPromises = new Map()),
      (this._clientId = I.clientId),
      (this._clientSecret = I.clientSecret),
      (this.redirectUri = I.redirectUri),
      (this.endpoints = {
        tokenInfoUrl: 'https://oauth2.googleapis.com/tokeninfo',
        oauth2AuthBaseUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
        oauth2TokenUrl: 'https://oauth2.googleapis.com/token',
        oauth2RevokeUrl: 'https://oauth2.googleapis.com/revoke',
        oauth2FederatedSignonPemCertsUrl: 'https://www.googleapis.com/oauth2/v1/certs',
        oauth2FederatedSignonJwkCertsUrl: 'https://www.googleapis.com/oauth2/v3/certs',
        oauth2IapPublicKeyUrl: 'https://www.gstatic.com/iap/verify/public_key',
        ...I.endpoints,
      }),
      (this.clientAuthentication = I.clientAuthentication || Zs.ClientSecretPost),
      (this.issuers = I.issuers || [
        'accounts.google.com',
        'https://accounts.google.com',
        this.universeDomain,
      ]));
  }
  generateAuthUrl(A = {}) {
    if (A.code_challenge_method && !A.code_challenge)
      throw new Error('If a code_challenge_method is provided, code_challenge must be included.');
    if (
      ((A.response_type = A.response_type || 'code'),
      (A.client_id = A.client_id || this._clientId),
      (A.redirect_uri = A.redirect_uri || this.redirectUri),
      Array.isArray(A.scope))
    )
      A.scope = A.scope.join(' ');
    return this.endpoints.oauth2AuthBaseUrl.toString() + '?' + _g1.stringify(A);
  }
  generateCodeVerifier() {
    throw new Error(
      'generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.'
    );
  }
  async generateCodeVerifierAsync() {
    let A = jg1.createCrypto(),
      Q = A.randomBytesBase64(96).replace(/\+/g, '~').replace(/=/g, '_').replace(/\//g, '-'),
      G = (await A.sha256DigestBase64(Q)).split('=')[0].replace(/\+/g, '-').replace(/\//g, '_');
    return { codeVerifier: Q, codeChallenge: G };
  }
  getToken(A, B) {
    let Q = typeof A === 'string' ? { code: A } : A;
    if (B)
      this.getTokenAsync(Q).then(
        (I) => B(null, I.tokens, I.res),
        (I) => B(I, null, I.response)
      );
    else return this.getTokenAsync(Q);
  }
  async getTokenAsync(A) {
    let B = this.endpoints.oauth2TokenUrl.toString(),
      Q = { 'Content-Type': 'application/x-www-form-urlencoded' },
      I = {
        client_id: A.client_id || this._clientId,
        code_verifier: A.codeVerifier,
        code: A.code,
        grant_type: 'authorization_code',
        redirect_uri: A.redirect_uri || this.redirectUri,
      };
    if (this.clientAuthentication === Zs.ClientSecretBasic) {
      let Z = Buffer.from(`${this._clientId}:${this._clientSecret}`);
      Q.Authorization = `Basic ${Z.toString('base64')}`;
    }
    if (this.clientAuthentication === Zs.ClientSecretPost) I.client_secret = this._clientSecret;
    let G = await this.transporter.request({
        ...JZ.RETRY_CONFIG,
        method: 'POST',
        url: B,
        data: _g1.stringify(I),
        headers: Q,
      }),
      D = G.data;
    if (G.data && G.data.expires_in)
      ((D.expiry_date = new Date().getTime() + G.data.expires_in * 1000), delete D.expires_in);
    return (this.emit('tokens', D), { tokens: D, res: G });
  }
  async refreshToken(A) {
    if (!A) return this.refreshTokenNoCache(A);
    if (this.refreshTokenPromises.has(A)) return this.refreshTokenPromises.get(A);
    let B = this.refreshTokenNoCache(A).then(
      (Q) => {
        return (this.refreshTokenPromises.delete(A), Q);
      },
      (Q) => {
        throw (this.refreshTokenPromises.delete(A), Q);
      }
    );
    return (this.refreshTokenPromises.set(A, B), B);
  }
  async refreshTokenNoCache(A) {
    var B;
    if (!A) throw new Error('No refresh token is set.');
    let Q = this.endpoints.oauth2TokenUrl.toString(),
      I = {
        refresh_token: A,
        client_id: this._clientId,
        client_secret: this._clientSecret,
        grant_type: 'refresh_token',
      },
      G;
    try {
      G = await this.transporter.request({
        ...JZ.RETRY_CONFIG,
        method: 'POST',
        url: Q,
        data: _g1.stringify(I),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
    } catch (Z) {
      if (
        Z instanceof U06.GaxiosError &&
        Z.message === 'invalid_grant' &&
        ((B = Z.response) === null || B === void 0 ? void 0 : B.data) &&
        /ReAuth/i.test(Z.response.data.error_description)
      )
        Z.message = JSON.stringify(Z.response.data);
      throw Z;
    }
    let D = G.data;
    if (G.data && G.data.expires_in)
      ((D.expiry_date = new Date().getTime() + G.data.expires_in * 1000), delete D.expires_in);
    return (this.emit('tokens', D), { tokens: D, res: G });
  }
  refreshAccessToken(A) {
    if (A) this.refreshAccessTokenAsync().then((B) => A(null, B.credentials, B.res), A);
    else return this.refreshAccessTokenAsync();
  }
  async refreshAccessTokenAsync() {
    let A = await this.refreshToken(this.credentials.refresh_token),
      B = A.tokens;
    return (
      (B.refresh_token = this.credentials.refresh_token),
      (this.credentials = B),
      { credentials: this.credentials, res: A.res }
    );
  }
  getAccessToken(A) {
    if (A) this.getAccessTokenAsync().then((B) => A(null, B.token, B.res), A);
    else return this.getAccessTokenAsync();
  }
  async getAccessTokenAsync() {
    if (!this.credentials.access_token || this.isTokenExpiring()) {
      if (!this.credentials.refresh_token)
        if (this.refreshHandler) {
          let Q = await this.processAndValidateRefreshHandler();
          if (Q === null || Q === void 0 ? void 0 : Q.access_token)
            return (this.setCredentials(Q), { token: this.credentials.access_token });
        } else throw new Error('No refresh token or refresh handler callback is set.');
      let B = await this.refreshAccessTokenAsync();
      if (!B.credentials || (B.credentials && !B.credentials.access_token))
        throw new Error('Could not refresh access token.');
      return { token: B.credentials.access_token, res: B.res };
    } else return { token: this.credentials.access_token };
  }
  async getRequestHeaders(A) {
    return (await this.getRequestMetadataAsync(A)).headers;
  }
  async getRequestMetadataAsync(A) {
    let B = this.credentials;
    if (!B.access_token && !B.refresh_token && !this.apiKey && !this.refreshHandler)
      throw new Error('No access, refresh token, API key or refresh handler callback is set.');
    if (B.access_token && !this.isTokenExpiring()) {
      B.token_type = B.token_type || 'Bearer';
      let Z = { Authorization: B.token_type + ' ' + B.access_token };
      return { headers: this.addSharedMetadataHeaders(Z) };
    }
    if (this.refreshHandler) {
      let Z = await this.processAndValidateRefreshHandler();
      if (Z === null || Z === void 0 ? void 0 : Z.access_token) {
        this.setCredentials(Z);
        let Y = { Authorization: 'Bearer ' + this.credentials.access_token };
        return { headers: this.addSharedMetadataHeaders(Y) };
      }
    }
    if (this.apiKey) return { headers: { 'X-Goog-Api-Key': this.apiKey } };
    let Q = null,
      I = null;
    try {
      ((Q = await this.refreshToken(B.refresh_token)), (I = Q.tokens));
    } catch (Z) {
      let Y = Z;
      if (Y.response && (Y.response.status === 403 || Y.response.status === 404))
        Y.message = `Could not refresh access token: ${Y.message}`;
      throw Y;
    }
    let G = this.credentials;
    ((G.token_type = G.token_type || 'Bearer'),
      (I.refresh_token = G.refresh_token),
      (this.credentials = I));
    let D = { Authorization: G.token_type + ' ' + I.access_token };
    return { headers: this.addSharedMetadataHeaders(D), res: Q.res };
  }
  static getRevokeTokenUrl(A) {
    return new JZ().getRevokeTokenURL(A).toString();
  }
  getRevokeTokenURL(A) {
    let B = new URL(this.endpoints.oauth2RevokeUrl);
    return (B.searchParams.append('token', A), B);
  }
  revokeToken(A, B) {
    let Q = { ...JZ.RETRY_CONFIG, url: this.getRevokeTokenURL(A).toString(), method: 'POST' };
    if (B) this.transporter.request(Q).then((I) => B(null, I), B);
    else return this.transporter.request(Q);
  }
  revokeCredentials(A) {
    if (A) this.revokeCredentialsAsync().then((B) => A(null, B), A);
    else return this.revokeCredentialsAsync();
  }
  async revokeCredentialsAsync() {
    let A = this.credentials.access_token;
    if (((this.credentials = {}), A)) return this.revokeToken(A);
    else throw new Error('No access token to revoke.');
  }
  request(A, B) {
    if (B)
      this.requestAsync(A).then(
        (Q) => B(null, Q),
        (Q) => {
          return B(Q, Q.response);
        }
      );
    else return this.requestAsync(A);
  }
  async requestAsync(A, B = !1) {
    let Q;
    try {
      let I = await this.getRequestMetadataAsync(A.url);
      if (((A.headers = A.headers || {}), I.headers && I.headers['x-goog-user-project']))
        A.headers['x-goog-user-project'] = I.headers['x-goog-user-project'];
      if (I.headers && I.headers.Authorization) A.headers.Authorization = I.headers.Authorization;
      if (this.apiKey) A.headers['X-Goog-Api-Key'] = this.apiKey;
      Q = await this.transporter.request(A);
    } catch (I) {
      let G = I.response;
      if (G) {
        let D = G.status,
          Z =
            this.credentials &&
            this.credentials.access_token &&
            this.credentials.refresh_token &&
            (!this.credentials.expiry_date || this.forceRefreshOnFailure),
          Y =
            this.credentials &&
            this.credentials.access_token &&
            !this.credentials.refresh_token &&
            (!this.credentials.expiry_date || this.forceRefreshOnFailure) &&
            this.refreshHandler,
          W = G.config.data instanceof N06.Readable,
          F = D === 401 || D === 403;
        if (!B && F && !W && Z)
          return (await this.refreshAccessTokenAsync(), this.requestAsync(A, !0));
        else if (!B && F && !W && Y) {
          let J = await this.processAndValidateRefreshHandler();
          if (J === null || J === void 0 ? void 0 : J.access_token) this.setCredentials(J);
          return this.requestAsync(A, !0);
        }
      }
      throw I;
    }
    return Q;
  }
  verifyIdToken(A, B) {
    if (B && typeof B !== 'function')
      throw new Error(
        'This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.'
      );
    if (B) this.verifyIdTokenAsync(A).then((Q) => B(null, Q), B);
    else return this.verifyIdTokenAsync(A);
  }
  async verifyIdTokenAsync(A) {
    if (!A.idToken) throw new Error('The verifyIdToken method requires an ID Token');
    let B = await this.getFederatedSignonCertsAsync();
    return await this.verifySignedJwtWithCertsAsync(
      A.idToken,
      B.certs,
      A.audience,
      this.issuers,
      A.maxExpiry
    );
  }
  async getTokenInfo(A) {
    let { data: B } = await this.transporter.request({
        ...JZ.RETRY_CONFIG,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${A}`,
        },
        url: this.endpoints.tokenInfoUrl.toString(),
      }),
      Q = Object.assign(
        { expiry_date: new Date().getTime() + B.expires_in * 1000, scopes: B.scope.split(' ') },
        B
      );
    return (delete Q.expires_in, delete Q.scope, Q);
  }
  getFederatedSignonCerts(A) {
    if (A) this.getFederatedSignonCertsAsync().then((B) => A(null, B.certs, B.res), A);
    else return this.getFederatedSignonCertsAsync();
  }
  async getFederatedSignonCertsAsync() {
    let A = new Date().getTime(),
      B = jg1.hasBrowserCrypto() ? lU.JWK : lU.PEM;
    if (
      this.certificateExpiry &&
      A < this.certificateExpiry.getTime() &&
      this.certificateCacheFormat === B
    )
      return { certs: this.certificateCache, format: B };
    let Q, I;
    switch (B) {
      case lU.PEM:
        I = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
        break;
      case lU.JWK:
        I = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
        break;
      default:
        throw new Error(`Unsupported certificate format ${B}`);
    }
    try {
      Q = await this.transporter.request({ ...JZ.RETRY_CONFIG, url: I });
    } catch (W) {
      if (W instanceof Error)
        W.message = `Failed to retrieve verification certificates: ${W.message}`;
      throw W;
    }
    let G = Q ? Q.headers['cache-control'] : void 0,
      D = -1;
    if (G) {
      let F = new RegExp('max-age=([0-9]*)').exec(G);
      if (F && F.length === 2) D = Number(F[1]) * 1000;
    }
    let Z = {};
    switch (B) {
      case lU.PEM:
        Z = Q.data;
        break;
      case lU.JWK:
        for (let W of Q.data.keys) Z[W.kid] = W;
        break;
      default:
        throw new Error(`Unsupported certificate format ${B}`);
    }
    let Y = new Date();
    return (
      (this.certificateExpiry = D === -1 ? null : new Date(Y.getTime() + D)),
      (this.certificateCache = Z),
      (this.certificateCacheFormat = B),
      { certs: Z, format: B, res: Q }
    );
  }
  getIapPublicKeys(A) {
    if (A) this.getIapPublicKeysAsync().then((B) => A(null, B.pubkeys, B.res), A);
    else return this.getIapPublicKeysAsync();
  }
  async getIapPublicKeysAsync() {
    let A,
      B = this.endpoints.oauth2IapPublicKeyUrl.toString();
    try {
      A = await this.transporter.request({ ...JZ.RETRY_CONFIG, url: B });
    } catch (Q) {
      if (Q instanceof Error)
        Q.message = `Failed to retrieve verification certificates: ${Q.message}`;
      throw Q;
    }
    return { pubkeys: A.data, res: A };
  }
  verifySignedJwtWithCerts() {
    throw new Error(
      'verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.'
    );
  }
  async verifySignedJwtWithCertsAsync(A, B, Q, I, G) {
    let D = jg1.createCrypto();
    if (!G) G = JZ.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
    let Z = A.split('.');
    if (Z.length !== 3) throw new Error('Wrong number of segments in token: ' + A);
    let Y = Z[0] + '.' + Z[1],
      W = Z[2],
      F,
      J;
    try {
      F = JSON.parse(D.decodeBase64StringUtf8(Z[0]));
    } catch (M) {
      if (M instanceof Error) M.message = `Can't parse token envelope: ${Z[0]}': ${M.message}`;
      throw M;
    }
    if (!F) throw new Error("Can't parse token envelope: " + Z[0]);
    try {
      J = JSON.parse(D.decodeBase64StringUtf8(Z[1]));
    } catch (M) {
      if (M instanceof Error) M.message = `Can't parse token payload '${Z[0]}`;
      throw M;
    }
    if (!J) throw new Error("Can't parse token payload: " + Z[1]);
    if (!Object.prototype.hasOwnProperty.call(B, F.kid))
      throw new Error('No pem found for envelope: ' + JSON.stringify(F));
    let C = B[F.kid];
    if (F.alg === 'ES256') W = $06.joseToDer(W, 'ES256').toString('base64');
    if (!(await D.verify(C, Y, W))) throw new Error('Invalid token signature: ' + A);
    if (!J.iat) throw new Error('No issue time in token: ' + JSON.stringify(J));
    if (!J.exp) throw new Error('No expiration time in token: ' + JSON.stringify(J));
    let V = Number(J.iat);
    if (isNaN(V)) throw new Error('iat field using invalid format');
    let K = Number(J.exp);
    if (isNaN(K)) throw new Error('exp field using invalid format');
    let U = new Date().getTime() / 1000;
    if (K >= U + G) throw new Error('Expiration time too far in future: ' + JSON.stringify(J));
    let N = V - JZ.CLOCK_SKEW_SECS_,
      q = K + JZ.CLOCK_SKEW_SECS_;
    if (U < N) throw new Error('Token used too early, ' + U + ' < ' + N + ': ' + JSON.stringify(J));
    if (U > q) throw new Error('Token used too late, ' + U + ' > ' + q + ': ' + JSON.stringify(J));
    if (I && I.indexOf(J.iss) < 0)
      throw new Error('Invalid issuer, expected one of [' + I + '], but got ' + J.iss);
    if (typeof Q !== 'undefined' && Q !== null) {
      let M = J.aud,
        R = !1;
      if (Q.constructor === Array) R = Q.indexOf(M) > -1;
      else R = M === Q;
      if (!R) throw new Error('Wrong recipient, payload audience != requiredAudience');
    }
    return new M06.LoginTicket(F, J);
  }
  async processAndValidateRefreshHandler() {
    if (this.refreshHandler) {
      let A = await this.refreshHandler();
      if (!A.access_token)
        throw new Error('No access token is returned by the refreshHandler callback.');
      return A;
    }
    return;
  }
  isTokenExpiring() {
    let A = this.credentials.expiry_date;
    return A ? A <= new Date().getTime() + this.eagerRefreshThresholdMillis : !1;
  }
}
qO0.OAuth2Client = JZ;
JZ.GOOGLE_TOKEN_INFO_URL = 'https://oauth2.googleapis.com/tokeninfo';
JZ.CLOCK_SKEW_SECS_ = 300;
JZ.DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400;
