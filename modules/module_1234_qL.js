// Module: qL
// Params: ZI

var Bh1 =
    (ZI && ZI.__classPrivateFieldGet) ||
    function (A, B, Q, I) {
      if (Q === 'a' && !I) throw new TypeError('Private accessor was defined without a getter');
      if (typeof B === 'function' ? A !== B || !I : !B.has(A))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        );
      return Q === 'm' ? I : Q === 'a' ? I.call(A) : I ? I.value : B.get(A);
    },
  bT0 =
    (ZI && ZI.__classPrivateFieldSet) ||
    function (A, B, Q, I, G) {
      if (I === 'm') throw new TypeError('Private method is not writable');
      if (I === 'a' && !G) throw new TypeError('Private accessor was defined without a setter');
      if (typeof B === 'function' ? A !== B || !G : !B.has(A))
        throw new TypeError(
          'Cannot write private member to an object whose class did not declare it'
        );
      return (I === 'a' ? G.call(A, Q) : G ? (G.value = Q) : B.set(A, Q), Q);
    },
  Qh1,
  Mg,
  hT0;
Object.defineProperty(ZI, '__esModule', { value: !0 });
ZI.BaseExternalAccountClient =
  ZI.DEFAULT_UNIVERSE =
  ZI.CLOUD_RESOURCE_MANAGER =
  ZI.EXTERNAL_ACCOUNT_TYPE =
  ZI.EXPIRATION_TIME_OFFSET =
    void 0;
var i26 = D1('stream'),
  n26 = Tz(),
  a26 = Ah1(),
  gT0 = NL(),
  s26 = 'urn:ietf:params:oauth:grant-type:token-exchange',
  r26 = 'urn:ietf:params:oauth:token-type:access_token',
  Ih1 = 'https://www.googleapis.com/auth/cloud-platform',
  o26 = 3600;
ZI.EXPIRATION_TIME_OFFSET = 300000;
ZI.EXTERNAL_ACCOUNT_TYPE = 'external_account';
ZI.CLOUD_RESOURCE_MANAGER = 'https://cloudresourcemanager.googleapis.com/v1/projects/';
var t26 = '//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+',
  e26 = 'https://sts.{universeDomain}/v1/token',
  A96 = qg1(),
  B96 = Tz();
Object.defineProperty(ZI, 'DEFAULT_UNIVERSE', {
  enumerable: !0,
  get: function () {
    return B96.DEFAULT_UNIVERSE;
  },
});
class QY1 extends n26.AuthClient {
  constructor(A, B) {
    var Q;
    super({ ...A, ...B });
    (Qh1.add(this), Mg.set(this, null));
    let I = gT0.originalOrCamelOptions(A),
      G = I.get('type');
    if (G && G !== ZI.EXTERNAL_ACCOUNT_TYPE)
      throw new Error(`Expected "${ZI.EXTERNAL_ACCOUNT_TYPE}" type but received "${A.type}"`);
    let D = I.get('client_id'),
      Z = I.get('client_secret'),
      Y =
        (Q = I.get('token_url')) !== null && Q !== void 0
          ? Q
          : e26.replace('{universeDomain}', this.universeDomain),
      W = I.get('subject_token_type'),
      F = I.get('workforce_pool_user_project'),
      J = I.get('service_account_impersonation_url'),
      C = I.get('service_account_impersonation'),
      X = gT0.originalOrCamelOptions(C).get('token_lifetime_seconds');
    if (
      ((this.cloudResourceManagerURL = new URL(
        I.get('cloud_resource_manager_url') ||
          `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`
      )),
      D)
    )
      this.clientAuth = { confidentialClientType: 'basic', clientId: D, clientSecret: Z };
    ((this.stsCredential = new a26.StsCredentials(Y, this.clientAuth)),
      (this.scopes = I.get('scopes') || [Ih1]),
      (this.cachedAccessToken = null),
      (this.audience = I.get('audience')),
      (this.subjectTokenType = W),
      (this.workforcePoolUserProject = F));
    let V = new RegExp(t26);
    if (this.workforcePoolUserProject && !this.audience.match(V))
      throw new Error(
        'workforcePoolUserProject should not be set for non-workforce pool credentials.'
      );
    if (
      ((this.serviceAccountImpersonationUrl = J),
      (this.serviceAccountImpersonationLifetime = X),
      this.serviceAccountImpersonationLifetime)
    )
      this.configLifetimeRequested = !0;
    else ((this.configLifetimeRequested = !1), (this.serviceAccountImpersonationLifetime = o26));
    ((this.projectNumber = this.getProjectNumber(this.audience)),
      (this.supplierContext = {
        audience: this.audience,
        subjectTokenType: this.subjectTokenType,
        transporter: this.transporter,
      }));
  }
  getServiceAccountEmail() {
    var A;
    if (this.serviceAccountImpersonationUrl) {
      if (this.serviceAccountImpersonationUrl.length > 256)
        throw new RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
      let Q = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/.exec(
        this.serviceAccountImpersonationUrl
      );
      return (
        ((A = Q === null || Q === void 0 ? void 0 : Q.groups) === null || A === void 0
          ? void 0
          : A.email) || null
      );
    }
    return null;
  }
  setCredentials(A) {
    (super.setCredentials(A), (this.cachedAccessToken = A));
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
  async getProjectId() {
    let A = this.projectNumber || this.workforcePoolUserProject;
    if (this.projectId) return this.projectId;
    else if (A) {
      let B = await this.getRequestHeaders(),
        Q = await this.transporter.request({
          ...QY1.RETRY_CONFIG,
          headers: B,
          url: `${this.cloudResourceManagerURL.toString()}${A}`,
          responseType: 'json',
        });
      return ((this.projectId = Q.data.projectId), this.projectId);
    }
    return null;
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
          Z = G.config.data instanceof i26.Readable;
        if (!B && (D === 401 || D === 403) && !Z && this.forceRefreshOnFailure)
          return (await this.refreshAccessTokenAsync(), await this.requestAsync(A, !0));
      }
      throw I;
    }
    return Q;
  }
  async refreshAccessTokenAsync() {
    bT0(this, Mg, Bh1(this, Mg, 'f') || Bh1(this, Qh1, 'm', hT0).call(this), 'f');
    try {
      return await Bh1(this, Mg, 'f');
    } finally {
      bT0(this, Mg, null, 'f');
    }
  }
  getProjectNumber(A) {
    let B = A.match(/\/projects\/([^/]+)/);
    if (!B) return null;
    return B[1];
  }
  async getImpersonatedAccessToken(A) {
    let B = {
        ...QY1.RETRY_CONFIG,
        url: this.serviceAccountImpersonationUrl,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${A}` },
        data: {
          scope: this.getScopesArray(),
          lifetime: this.serviceAccountImpersonationLifetime + 's',
        },
        responseType: 'json',
      },
      Q = await this.transporter.request(B),
      I = Q.data;
    return { access_token: I.accessToken, expiry_date: new Date(I.expireTime).getTime(), res: Q };
  }
  isExpired(A) {
    let B = new Date().getTime();
    return A.expiry_date ? B >= A.expiry_date - this.eagerRefreshThresholdMillis : !1;
  }
  getScopesArray() {
    if (typeof this.scopes === 'string') return [this.scopes];
    return this.scopes || [Ih1];
  }
  getMetricsHeaderValue() {
    let A = process.version.replace(/^v/, ''),
      B = this.serviceAccountImpersonationUrl !== void 0,
      Q = this.credentialSourceType ? this.credentialSourceType : 'unknown';
    return `gl-node/${A} auth/${A96.version} google-byoid-sdk source/${Q} sa-impersonation/${B} config-lifetime/${this.configLifetimeRequested}`;
  }
}
ZI.BaseExternalAccountClient = QY1;
((Mg = new WeakMap()),
  (Qh1 = new WeakSet()),
  (hT0 = async function A() {
    let B = await this.retrieveSubjectToken(),
      Q = {
        grantType: s26,
        audience: this.audience,
        requestedTokenType: r26,
        subjectToken: B,
        subjectTokenType: this.subjectTokenType,
        scope: this.serviceAccountImpersonationUrl ? [Ih1] : this.getScopesArray(),
      },
      I =
        !this.clientAuth && this.workforcePoolUserProject
          ? { userProject: this.workforcePoolUserProject }
          : void 0,
      G = { 'x-goog-api-client': this.getMetricsHeaderValue() },
      D = await this.stsCredential.exchangeToken(Q, G, I);
    if (this.serviceAccountImpersonationUrl)
      this.cachedAccessToken = await this.getImpersonatedAccessToken(D.access_token);
    else if (D.expires_in)
      this.cachedAccessToken = {
        access_token: D.access_token,
        expiry_date: new Date().getTime() + D.expires_in * 1000,
        res: D.res,
      };
    else this.cachedAccessToken = { access_token: D.access_token, res: D.res };
    return (
      (this.credentials = {}),
      Object.assign(this.credentials, this.cachedAccessToken),
      delete this.credentials.res,
      this.emit('tokens', {
        refresh_token: null,
        expiry_date: this.cachedAccessToken.expiry_date,
        access_token: this.cachedAccessToken.access_token,
        token_type: 'Bearer',
        id_token: null,
      }),
      this.cachedAccessToken
    );
  }));
