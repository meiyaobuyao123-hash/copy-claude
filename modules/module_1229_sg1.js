// Module: sg1
// Params: MT0

Object.defineProperty(MT0, '__esModule', { value: !0 });
MT0.JWT = void 0;
var qT0 = ET0(),
  j26 = ng1(),
  y26 = RS(),
  AY1 = Tz();
class ag1 extends y26.OAuth2Client {
  constructor(A, B, Q, I, G, D) {
    let Z =
      A && typeof A === 'object'
        ? A
        : { email: A, keyFile: B, key: Q, keyId: D, scopes: I, subject: G };
    super(Z);
    ((this.email = Z.email),
      (this.keyFile = Z.keyFile),
      (this.key = Z.key),
      (this.keyId = Z.keyId),
      (this.scopes = Z.scopes),
      (this.subject = Z.subject),
      (this.additionalClaims = Z.additionalClaims),
      (this.credentials = { refresh_token: 'jwt-placeholder', expiry_date: 1 }));
  }
  createScoped(A) {
    let B = new ag1(this);
    return ((B.scopes = A), B);
  }
  async getRequestMetadataAsync(A) {
    A = this.defaultServicePath ? `https://${this.defaultServicePath}/` : A;
    let B =
      (!this.hasUserScopes() && A) ||
      (this.useJWTAccessWithScope && this.hasAnyScopes()) ||
      this.universeDomain !== AY1.DEFAULT_UNIVERSE;
    if (this.subject && this.universeDomain !== AY1.DEFAULT_UNIVERSE)
      throw new RangeError(
        `Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${AY1.DEFAULT_UNIVERSE}`
      );
    if (!this.apiKey && B)
      if (this.additionalClaims && this.additionalClaims.target_audience) {
        let { tokens: Q } = await this.refreshToken();
        return {
          headers: this.addSharedMetadataHeaders({ Authorization: `Bearer ${Q.id_token}` }),
        };
      } else {
        if (!this.access)
          this.access = new j26.JWTAccess(
            this.email,
            this.key,
            this.keyId,
            this.eagerRefreshThresholdMillis
          );
        let Q;
        if (this.hasUserScopes()) Q = this.scopes;
        else if (!A) Q = this.defaultScopes;
        let I = this.useJWTAccessWithScope || this.universeDomain !== AY1.DEFAULT_UNIVERSE,
          G = await this.access.getRequestHeaders(
            A !== null && A !== void 0 ? A : void 0,
            this.additionalClaims,
            I ? Q : void 0
          );
        return { headers: this.addSharedMetadataHeaders(G) };
      }
    else if (this.hasAnyScopes() || this.apiKey) return super.getRequestMetadataAsync(A);
    else return { headers: {} };
  }
  async fetchIdToken(A) {
    let B = new qT0.GoogleToken({
      iss: this.email,
      sub: this.subject,
      scope: this.scopes || this.defaultScopes,
      keyFile: this.keyFile,
      key: this.key,
      additionalClaims: { target_audience: A },
      transporter: this.transporter,
    });
    if ((await B.getToken({ forceRefresh: !0 }), !B.idToken))
      throw new Error('Unknown error: Failed to fetch ID token');
    return B.idToken;
  }
  hasUserScopes() {
    if (!this.scopes) return !1;
    return this.scopes.length > 0;
  }
  hasAnyScopes() {
    if (this.scopes && this.scopes.length > 0) return !0;
    if (this.defaultScopes && this.defaultScopes.length > 0) return !0;
    return !1;
  }
  authorize(A) {
    if (A) this.authorizeAsync().then((B) => A(null, B), A);
    else return this.authorizeAsync();
  }
  async authorizeAsync() {
    let A = await this.refreshToken();
    if (!A) throw new Error('No result returned');
    return (
      (this.credentials = A.tokens),
      (this.credentials.refresh_token = 'jwt-placeholder'),
      (this.key = this.gtoken.key),
      (this.email = this.gtoken.iss),
      A.tokens
    );
  }
  async refreshTokenNoCache(A) {
    let B = this.createGToken(),
      I = {
        access_token: (await B.getToken({ forceRefresh: this.isTokenExpiring() })).access_token,
        token_type: 'Bearer',
        expiry_date: B.expiresAt,
        id_token: B.idToken,
      };
    return (this.emit('tokens', I), { res: null, tokens: I });
  }
  createGToken() {
    if (!this.gtoken)
      this.gtoken = new qT0.GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: this.additionalClaims,
        transporter: this.transporter,
      });
    return this.gtoken;
  }
  fromJSON(A) {
    if (!A)
      throw new Error('Must pass in a JSON object containing the service account auth settings.');
    if (!A.client_email)
      throw new Error('The incoming JSON object does not contain a client_email field');
    if (!A.private_key)
      throw new Error('The incoming JSON object does not contain a private_key field');
    ((this.email = A.client_email),
      (this.key = A.private_key),
      (this.keyId = A.private_key_id),
      (this.projectId = A.project_id),
      (this.quotaProjectId = A.quota_project_id),
      (this.universeDomain = A.universe_domain || this.universeDomain));
  }
  fromStream(A, B) {
    if (B) this.fromStreamAsync(A).then(() => B(), B);
    else return this.fromStreamAsync(A);
  }
  fromStreamAsync(A) {
    return new Promise((B, Q) => {
      if (!A)
        throw new Error('Must pass in a stream containing the service account auth settings.');
      let I = '';
      A.setEncoding('utf8')
        .on('error', Q)
        .on('data', (G) => (I += G))
        .on('end', () => {
          try {
            let G = JSON.parse(I);
            (this.fromJSON(G), B());
          } catch (G) {
            Q(G);
          }
        });
    });
  }
  fromAPIKey(A) {
    if (typeof A !== 'string') throw new Error('Must provide an API Key string.');
    this.apiKey = A;
  }
  async getCredentials() {
    if (this.key) return { private_key: this.key, client_email: this.email };
    else if (this.keyFile) {
      let B = await this.createGToken().getCredentials(this.keyFile);
      return { private_key: B.privateKey, client_email: B.clientEmail };
    }
    throw new Error('A key or a keyFile must be provided to getCredentials.');
  }
}
MT0.JWT = ag1;
