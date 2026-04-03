// Module: TP0
// Params: RP0

Object.defineProperty(RP0, '__esModule', { value: !0 });
RP0.ExternalAccountAuthorizedUserClient = RP0.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
var f96 = Tz(),
  MP0 = tg1(),
  v96 = EV(),
  b96 = D1('stream'),
  g96 = qL();
RP0.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = 'external_account_authorized_user';
var h96 = 'https://sts.{universeDomain}/v1/oauthtoken';
class Ph1 extends MP0.OAuthClientAuthHandler {
  constructor(A, B, Q) {
    super(Q);
    ((this.url = A), (this.transporter = B));
  }
  async refreshToken(A, B) {
    let Q = new URLSearchParams({ grant_type: 'refresh_token', refresh_token: A }),
      I = { 'Content-Type': 'application/x-www-form-urlencoded', ...B },
      G = {
        ...Ph1.RETRY_CONFIG,
        url: this.url,
        method: 'POST',
        headers: I,
        data: Q.toString(),
        responseType: 'json',
      };
    this.applyClientAuthenticationOptions(G);
    try {
      let D = await this.transporter.request(G),
        Z = D.data;
      return ((Z.res = D), Z);
    } catch (D) {
      if (D instanceof v96.GaxiosError && D.response)
        throw MP0.getErrorFromOAuthErrorResponse(D.response.data, D);
      throw D;
    }
  }
}
class LP0 extends f96.AuthClient {
  constructor(A, B) {
    var Q;
    super({ ...A, ...B });
    if (A.universe_domain) this.universeDomain = A.universe_domain;
    this.refreshToken = A.refresh_token;
    let I = {
      confidentialClientType: 'basic',
      clientId: A.client_id,
      clientSecret: A.client_secret,
    };
    if (
      ((this.externalAccountAuthorizedUserHandler = new Ph1(
        (Q = A.token_url) !== null && Q !== void 0
          ? Q
          : h96.replace('{universeDomain}', this.universeDomain),
        this.transporter,
        I
      )),
      (this.cachedAccessToken = null),
      (this.quotaProjectId = A.quota_project_id),
      typeof (B === null || B === void 0 ? void 0 : B.eagerRefreshThresholdMillis) !== 'number')
    )
      this.eagerRefreshThresholdMillis = g96.EXPIRATION_TIME_OFFSET;
    else this.eagerRefreshThresholdMillis = B.eagerRefreshThresholdMillis;
    this.forceRefreshOnFailure = !!(B === null || B === void 0 ? void 0 : B.forceRefreshOnFailure);
  }
  async getAccessToken() {
    if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken))
      await this.refreshAccessTokenAsync();
    return { token: this.cachedAccessToken.access_token, res: this.cachedAccessToken.res };
  }
  async getRequestHeaders() {
    let B = { Authorization: `Bearer ${(await this.getAccessToken()).token}` };
    return this.addSharedMetadataHeaders(B);
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
      let I = await this.getRequestHeaders();
      if (((A.headers = A.headers || {}), I && I['x-goog-user-project']))
        A.headers['x-goog-user-project'] = I['x-goog-user-project'];
      if (I && I.Authorization) A.headers.Authorization = I.Authorization;
      Q = await this.transporter.request(A);
    } catch (I) {
      let G = I.response;
      if (G) {
        let D = G.status,
          Z = G.config.data instanceof b96.Readable;
        if (!B && (D === 401 || D === 403) && !Z && this.forceRefreshOnFailure)
          return (await this.refreshAccessTokenAsync(), await this.requestAsync(A, !0));
      }
      throw I;
    }
    return Q;
  }
  async refreshAccessTokenAsync() {
    let A = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
    if (
      ((this.cachedAccessToken = {
        access_token: A.access_token,
        expiry_date: new Date().getTime() + A.expires_in * 1000,
        res: A.res,
      }),
      A.refresh_token !== void 0)
    )
      this.refreshToken = A.refresh_token;
    return this.cachedAccessToken;
  }
  isExpired(A) {
    let B = new Date().getTime();
    return A.expiry_date ? B >= A.expiry_date - this.eagerRefreshThresholdMillis : !1;
  }
}
RP0.ExternalAccountAuthorizedUserClient = LP0;
