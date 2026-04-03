// Module: kP0
// Params: YG

var ML =
    (YG && YG.__classPrivateFieldGet) ||
    function (A, B, Q, I) {
      if (Q === 'a' && !I) throw new TypeError('Private accessor was defined without a getter');
      if (typeof B === 'function' ? A !== B || !I : !B.has(A))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        );
      return Q === 'm' ? I : Q === 'a' ? I.call(A) : I ? I.value : B.get(A);
    },
  PP0 =
    (YG && YG.__classPrivateFieldSet) ||
    function (A, B, Q, I, G) {
      if (I === 'm') throw new TypeError('Private method is not writable');
      if (I === 'a' && !G) throw new TypeError('Private accessor was defined without a setter');
      if (typeof B === 'function' ? A !== B || !G : !B.has(A))
        throw new TypeError(
          'Cannot write private member to an object whose class did not declare it'
        );
      return (I === 'a' ? G.call(A, Q) : G ? (G.value = Q) : B.set(A, Q), Q);
    },
  LL,
  Pg,
  Sg,
  yP0;
Object.defineProperty(YG, '__esModule', { value: !0 });
YG.GoogleAuth = YG.GoogleAuthExceptionMessages = YG.CLOUD_SDK_CLIENT_ID = void 0;
var d96 = D1('child_process'),
  zs = D1('fs'),
  Ks = Is(),
  u96 = D1('os'),
  _h1 = D1('path'),
  p96 = Kg(),
  c96 = Ds(),
  l96 = yg1(),
  i96 = kg1(),
  n96 = xg1(),
  Og = sg1(),
  SP0 = rg1(),
  Tg = og1(),
  a96 = Th1(),
  Hs = qL(),
  Sh1 = Tz(),
  _P0 = TP0(),
  jP0 = NL();
YG.CLOUD_SDK_CLIENT_ID = '764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com';
YG.GoogleAuthExceptionMessages = {
  API_KEY_WITH_CREDENTIALS:
    'API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.',
  NO_PROJECT_ID_FOUND: `Unable to detect a Project Id in the current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
  NO_CREDENTIALS_FOUND: `Unable to find credentials in current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
  NO_ADC_FOUND:
    'Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.',
  NO_UNIVERSE_DOMAIN_FOUND: `Unable to detect a Universe Domain in the current environment.
To learn more about Universe Domain retrieval, visit: 
https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys`,
};
class jh1 {
  get isGCE() {
    return this.checkIsGCE;
  }
  constructor(A = {}) {
    if (
      (LL.add(this),
      (this.checkIsGCE = void 0),
      (this.jsonContent = null),
      (this.cachedCredential = null),
      Pg.set(this, null),
      (this.clientOptions = {}),
      (this._cachedProjectId = A.projectId || null),
      (this.cachedCredential = A.authClient || null),
      (this.keyFilename = A.keyFilename || A.keyFile),
      (this.scopes = A.scopes),
      (this.clientOptions = A.clientOptions || {}),
      (this.jsonContent = A.credentials || null),
      (this.apiKey = A.apiKey || this.clientOptions.apiKey || null),
      this.apiKey && (this.jsonContent || this.clientOptions.credentials))
    )
      throw new RangeError(YG.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
    if (A.universeDomain) this.clientOptions.universeDomain = A.universeDomain;
  }
  setGapicJWTValues(A) {
    ((A.defaultServicePath = this.defaultServicePath),
      (A.useJWTAccessWithScope = this.useJWTAccessWithScope),
      (A.defaultScopes = this.defaultScopes));
  }
  getProjectId(A) {
    if (A) this.getProjectIdAsync().then((B) => A(null, B), A);
    else return this.getProjectIdAsync();
  }
  async getProjectIdOptional() {
    try {
      return await this.getProjectId();
    } catch (A) {
      if (A instanceof Error && A.message === YG.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND)
        return null;
      else throw A;
    }
  }
  async findAndCacheProjectId() {
    let A = null;
    if (
      (A || (A = await this.getProductionProjectId()),
      A || (A = await this.getFileProjectId()),
      A || (A = await this.getDefaultServiceProjectId()),
      A || (A = await this.getGCEProjectId()),
      A || (A = await this.getExternalAccountClientProjectId()),
      A)
    )
      return ((this._cachedProjectId = A), A);
    else throw new Error(YG.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
  }
  async getProjectIdAsync() {
    if (this._cachedProjectId) return this._cachedProjectId;
    if (!this._findProjectIdPromise) this._findProjectIdPromise = this.findAndCacheProjectId();
    return this._findProjectIdPromise;
  }
  async getUniverseDomainFromMetadataServer() {
    var A;
    let B;
    try {
      ((B = await Ks.universe('universe-domain')), B || (B = Sh1.DEFAULT_UNIVERSE));
    } catch (Q) {
      if (
        Q &&
        ((A = Q === null || Q === void 0 ? void 0 : Q.response) === null || A === void 0
          ? void 0
          : A.status) === 404
      )
        B = Sh1.DEFAULT_UNIVERSE;
      else throw Q;
    }
    return B;
  }
  async getUniverseDomain() {
    let A = jP0.originalOrCamelOptions(this.clientOptions).get('universe_domain');
    try {
      (A !== null && A !== void 0) || (A = (await this.getClient()).universeDomain);
    } catch (B) {
      (A !== null && A !== void 0) || (A = Sh1.DEFAULT_UNIVERSE);
    }
    return A;
  }
  getAnyScopes() {
    return this.scopes || this.defaultScopes;
  }
  getApplicationDefault(A = {}, B) {
    let Q;
    if (typeof A === 'function') B = A;
    else Q = A;
    if (B) this.getApplicationDefaultAsync(Q).then((I) => B(null, I.credential, I.projectId), B);
    else return this.getApplicationDefaultAsync(Q);
  }
  async getApplicationDefaultAsync(A = {}) {
    if (this.cachedCredential)
      return await ML(this, LL, 'm', Sg).call(this, this.cachedCredential, null);
    let B;
    if (((B = await this._tryGetApplicationCredentialsFromEnvironmentVariable(A)), B)) {
      if (B instanceof Og.JWT) B.scopes = this.scopes;
      else if (B instanceof Hs.BaseExternalAccountClient) B.scopes = this.getAnyScopes();
      return await ML(this, LL, 'm', Sg).call(this, B);
    }
    if (((B = await this._tryGetApplicationCredentialsFromWellKnownFile(A)), B)) {
      if (B instanceof Og.JWT) B.scopes = this.scopes;
      else if (B instanceof Hs.BaseExternalAccountClient) B.scopes = this.getAnyScopes();
      return await ML(this, LL, 'm', Sg).call(this, B);
    }
    if (await this._checkIsGCE())
      return (
        (A.scopes = this.getAnyScopes()),
        await ML(this, LL, 'm', Sg).call(this, new l96.Compute(A))
      );
    throw new Error(YG.GoogleAuthExceptionMessages.NO_ADC_FOUND);
  }
  async _checkIsGCE() {
    if (this.checkIsGCE === void 0)
      this.checkIsGCE = Ks.getGCPResidency() || (await Ks.isAvailable());
    return this.checkIsGCE;
  }
  async _tryGetApplicationCredentialsFromEnvironmentVariable(A) {
    let B =
      process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials;
    if (!B || B.length === 0) return null;
    try {
      return this._getApplicationCredentialsFromFilePath(B, A);
    } catch (Q) {
      if (Q instanceof Error)
        Q.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${Q.message}`;
      throw Q;
    }
  }
  async _tryGetApplicationCredentialsFromWellKnownFile(A) {
    let B = null;
    if (this._isWindows()) B = process.env.APPDATA;
    else {
      let I = process.env.HOME;
      if (I) B = _h1.join(I, '.config');
    }
    if (B) {
      if (((B = _h1.join(B, 'gcloud', 'application_default_credentials.json')), !zs.existsSync(B)))
        B = null;
    }
    if (!B) return null;
    return await this._getApplicationCredentialsFromFilePath(B, A);
  }
  async _getApplicationCredentialsFromFilePath(A, B = {}) {
    if (!A || A.length === 0) throw new Error('The file path is invalid.');
    try {
      if (((A = zs.realpathSync(A)), !zs.lstatSync(A).isFile())) throw new Error();
    } catch (I) {
      if (I instanceof Error)
        I.message = `The file at ${A} does not exist, or it is not a file. ${I.message}`;
      throw I;
    }
    let Q = zs.createReadStream(A);
    return this.fromStream(Q, B);
  }
  fromImpersonatedJSON(A) {
    var B, Q, I, G;
    if (!A) throw new Error('Must pass in a JSON object containing an  impersonated refresh token');
    if (A.type !== Tg.IMPERSONATED_ACCOUNT_TYPE)
      throw new Error(
        `The incoming JSON object does not have the "${Tg.IMPERSONATED_ACCOUNT_TYPE}" type`
      );
    if (!A.source_credentials)
      throw new Error('The incoming JSON object does not contain a source_credentials field');
    if (!A.service_account_impersonation_url)
      throw new Error(
        'The incoming JSON object does not contain a service_account_impersonation_url field'
      );
    let D = this.fromJSON(A.source_credentials);
    if (
      ((B = A.service_account_impersonation_url) === null || B === void 0 ? void 0 : B.length) > 256
    )
      throw new RangeError(`Target principal is too long: ${A.service_account_impersonation_url}`);
    let Z =
      (I =
        (Q = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(
          A.service_account_impersonation_url
        )) === null || Q === void 0
          ? void 0
          : Q.groups) === null || I === void 0
        ? void 0
        : I.target;
    if (!Z)
      throw new RangeError(
        `Cannot extract target principal from ${A.service_account_impersonation_url}`
      );
    let Y = (G = this.getAnyScopes()) !== null && G !== void 0 ? G : [];
    return new Tg.Impersonated({
      ...A,
      sourceClient: D,
      targetPrincipal: Z,
      targetScopes: Array.isArray(Y) ? Y : [Y],
    });
  }
  fromJSON(A, B = {}) {
    let Q,
      I = jP0.originalOrCamelOptions(B).get('universe_domain');
    if (A.type === SP0.USER_REFRESH_ACCOUNT_TYPE)
      ((Q = new SP0.UserRefreshClient(B)), Q.fromJSON(A));
    else if (A.type === Tg.IMPERSONATED_ACCOUNT_TYPE) Q = this.fromImpersonatedJSON(A);
    else if (A.type === Hs.EXTERNAL_ACCOUNT_TYPE)
      ((Q = a96.ExternalAccountClient.fromJSON(A, B)), (Q.scopes = this.getAnyScopes()));
    else if (A.type === _P0.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE)
      Q = new _P0.ExternalAccountAuthorizedUserClient(A, B);
    else ((B.scopes = this.scopes), (Q = new Og.JWT(B)), this.setGapicJWTValues(Q), Q.fromJSON(A));
    if (I) Q.universeDomain = I;
    return Q;
  }
  _cacheClientFromJSON(A, B) {
    let Q = this.fromJSON(A, B);
    return ((this.jsonContent = A), (this.cachedCredential = Q), Q);
  }
  fromStream(A, B = {}, Q) {
    let I = {};
    if (typeof B === 'function') Q = B;
    else I = B;
    if (Q) this.fromStreamAsync(A, I).then((G) => Q(null, G), Q);
    else return this.fromStreamAsync(A, I);
  }
  fromStreamAsync(A, B) {
    return new Promise((Q, I) => {
      if (!A) throw new Error('Must pass in a stream containing the Google auth settings.');
      let G = [];
      A.setEncoding('utf8')
        .on('error', I)
        .on('data', (D) => G.push(D))
        .on('end', () => {
          try {
            try {
              let D = JSON.parse(G.join('')),
                Z = this._cacheClientFromJSON(D, B);
              return Q(Z);
            } catch (D) {
              if (!this.keyFilename) throw D;
              let Z = new Og.JWT({ ...this.clientOptions, keyFile: this.keyFilename });
              return ((this.cachedCredential = Z), this.setGapicJWTValues(Z), Q(Z));
            }
          } catch (D) {
            return I(D);
          }
        });
    });
  }
  fromAPIKey(A, B = {}) {
    return new Og.JWT({ ...B, apiKey: A });
  }
  _isWindows() {
    let A = u96.platform();
    if (A && A.length >= 3) {
      if (A.substring(0, 3).toLowerCase() === 'win') return !0;
    }
    return !1;
  }
  async getDefaultServiceProjectId() {
    return new Promise((A) => {
      d96.exec('gcloud config config-helper --format json', (B, Q) => {
        if (!B && Q)
          try {
            let I = JSON.parse(Q).configuration.properties.core.project;
            A(I);
            return;
          } catch (I) {}
        A(null);
      });
    });
  }
  getProductionProjectId() {
    return (
      process.env.GCLOUD_PROJECT ||
      process.env.GOOGLE_CLOUD_PROJECT ||
      process.env.gcloud_project ||
      process.env.google_cloud_project
    );
  }
  async getFileProjectId() {
    if (this.cachedCredential) return this.cachedCredential.projectId;
    if (this.keyFilename) {
      let B = await this.getClient();
      if (B && B.projectId) return B.projectId;
    }
    let A = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
    if (A) return A.projectId;
    else return null;
  }
  async getExternalAccountClientProjectId() {
    if (!this.jsonContent || this.jsonContent.type !== Hs.EXTERNAL_ACCOUNT_TYPE) return null;
    return await (await this.getClient()).getProjectId();
  }
  async getGCEProjectId() {
    try {
      return await Ks.project('project-id');
    } catch (A) {
      return null;
    }
  }
  getCredentials(A) {
    if (A) this.getCredentialsAsync().then((B) => A(null, B), A);
    else return this.getCredentialsAsync();
  }
  async getCredentialsAsync() {
    let A = await this.getClient();
    if (A instanceof Tg.Impersonated) return { client_email: A.getTargetPrincipal() };
    if (A instanceof Hs.BaseExternalAccountClient) {
      let B = A.getServiceAccountEmail();
      if (B) return { client_email: B, universe_domain: A.universeDomain };
    }
    if (this.jsonContent)
      return {
        client_email: this.jsonContent.client_email,
        private_key: this.jsonContent.private_key,
        universe_domain: this.jsonContent.universe_domain,
      };
    if (await this._checkIsGCE()) {
      let [B, Q] = await Promise.all([
        Ks.instance('service-accounts/default/email'),
        this.getUniverseDomain(),
      ]);
      return { client_email: B, universe_domain: Q };
    }
    throw new Error(YG.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
  }
  async getClient() {
    if (this.cachedCredential) return this.cachedCredential;
    PP0(this, Pg, ML(this, Pg, 'f') || ML(this, LL, 'm', yP0).call(this), 'f');
    try {
      return await ML(this, Pg, 'f');
    } finally {
      PP0(this, Pg, null, 'f');
    }
  }
  async getIdTokenClient(A) {
    let B = await this.getClient();
    if (!('fetchIdToken' in B))
      throw new Error(
        'Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.'
      );
    return new i96.IdTokenClient({ targetAudience: A, idTokenProvider: B });
  }
  async getAccessToken() {
    return (await (await this.getClient()).getAccessToken()).token;
  }
  async getRequestHeaders(A) {
    return (await this.getClient()).getRequestHeaders(A);
  }
  async authorizeRequest(A) {
    A = A || {};
    let B = A.url || A.uri,
      I = await (await this.getClient()).getRequestHeaders(B);
    return ((A.headers = Object.assign(A.headers || {}, I)), A);
  }
  async request(A) {
    return (await this.getClient()).request(A);
  }
  getEnv() {
    return n96.getEnv();
  }
  async sign(A, B) {
    let Q = await this.getClient(),
      I = await this.getUniverseDomain();
    if (
      ((B = B || `https://iamcredentials.${I}/v1/projects/-/serviceAccounts/`),
      Q instanceof Tg.Impersonated)
    )
      return (await Q.sign(A)).signedBlob;
    let G = p96.createCrypto();
    if (Q instanceof Og.JWT && Q.key) return await G.sign(Q.key, A);
    let D = await this.getCredentials();
    if (!D.client_email) throw new Error('Cannot sign data without `client_email`.');
    return this.signBlob(G, D.client_email, A, B);
  }
  async signBlob(A, B, Q, I) {
    let G = new URL(I + `${B}:signBlob`);
    return (
      await this.request({
        method: 'POST',
        url: G.href,
        data: { payload: A.encodeBase64StringUtf8(Q) },
        retry: !0,
        retryConfig: { httpMethodsToRetry: ['POST'] },
      })
    ).data.signedBlob;
  }
}
YG.GoogleAuth = jh1;
((Pg = new WeakMap()),
  (LL = new WeakSet()),
  (Sg = async function A(B, Q = process.env.GOOGLE_CLOUD_QUOTA_PROJECT || null) {
    let I = await this.getProjectIdOptional();
    if (Q) B.quotaProjectId = Q;
    return ((this.cachedCredential = B), { credential: B, projectId: I });
  }),
  (yP0 = async function A() {
    if (this.jsonContent) return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
    else if (this.keyFilename) {
      let B = _h1.resolve(this.keyFilename),
        Q = zs.createReadStream(B);
      return await this.fromStreamAsync(Q, this.clientOptions);
    } else if (this.apiKey) {
      let B = await this.fromAPIKey(this.apiKey, this.clientOptions);
      B.scopes = this.scopes;
      let { credential: Q } = await ML(this, LL, 'm', Sg).call(this, B);
      return Q;
    } else {
      let { credential: B } = await this.getApplicationDefaultAsync(this.clientOptions);
      return B;
    }
  }));
jh1.DefaultTransporter = c96.DefaultTransporter;
