// Module: dP0
// Params: hP0

Object.defineProperty(hP0, '__esModule', { value: !0 });
hP0.DownscopedClient = hP0.EXPIRATION_TIME_OFFSET = hP0.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
var s96 = D1('stream'),
  r96 = Tz(),
  o96 = Ah1(),
  t96 = 'urn:ietf:params:oauth:grant-type:token-exchange',
  e96 = 'urn:ietf:params:oauth:token-type:access_token',
  A46 = 'urn:ietf:params:oauth:token-type:access_token';
hP0.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
hP0.EXPIRATION_TIME_OFFSET = 300000;
class gP0 extends r96.AuthClient {
  constructor(A, B, Q, I) {
    super({ ...Q, quotaProjectId: I });
    if (
      ((this.authClient = A),
      (this.credentialAccessBoundary = B),
      B.accessBoundary.accessBoundaryRules.length === 0)
    )
      throw new Error('At least one access boundary rule needs to be defined.');
    else if (B.accessBoundary.accessBoundaryRules.length > hP0.MAX_ACCESS_BOUNDARY_RULES_COUNT)
      throw new Error(
        `The provided access boundary has more than ${hP0.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`
      );
    for (let G of B.accessBoundary.accessBoundaryRules)
      if (G.availablePermissions.length === 0)
        throw new Error('At least one permission should be defined in access boundary rules.');
    ((this.stsCredential = new o96.StsCredentials(`https://sts.${this.universeDomain}/v1/token`)),
      (this.cachedDownscopedAccessToken = null));
  }
  setCredentials(A) {
    if (!A.expiry_date)
      throw new Error('The access token expiry_date field is missing in the provided credentials.');
    (super.setCredentials(A), (this.cachedDownscopedAccessToken = A));
  }
  async getAccessToken() {
    if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken))
      await this.refreshAccessTokenAsync();
    return {
      token: this.cachedDownscopedAccessToken.access_token,
      expirationTime: this.cachedDownscopedAccessToken.expiry_date,
      res: this.cachedDownscopedAccessToken.res,
    };
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
          Z = G.config.data instanceof s96.Readable;
        if (!B && (D === 401 || D === 403) && !Z && this.forceRefreshOnFailure)
          return (await this.refreshAccessTokenAsync(), await this.requestAsync(A, !0));
      }
      throw I;
    }
    return Q;
  }
  async refreshAccessTokenAsync() {
    var A;
    let B = (await this.authClient.getAccessToken()).token,
      Q = { grantType: t96, requestedTokenType: e96, subjectToken: B, subjectTokenType: A46 },
      I = await this.stsCredential.exchangeToken(Q, void 0, this.credentialAccessBoundary),
      G =
        ((A = this.authClient.credentials) === null || A === void 0 ? void 0 : A.expiry_date) ||
        null,
      D = I.expires_in ? new Date().getTime() + I.expires_in * 1000 : G;
    return (
      (this.cachedDownscopedAccessToken = {
        access_token: I.access_token,
        expiry_date: D,
        res: I.res,
      }),
      (this.credentials = {}),
      Object.assign(this.credentials, this.cachedDownscopedAccessToken),
      delete this.credentials.res,
      this.emit('tokens', {
        refresh_token: null,
        expiry_date: this.cachedDownscopedAccessToken.expiry_date,
        access_token: this.cachedDownscopedAccessToken.access_token,
        token_type: 'Bearer',
        id_token: null,
      }),
      this.cachedDownscopedAccessToken
    );
  }
  isExpired(A) {
    let B = new Date().getTime();
    return A.expiry_date ? B >= A.expiry_date - this.eagerRefreshThresholdMillis : !1;
  }
}
hP0.DownscopedClient = gP0;
