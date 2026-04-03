// Module: og1
// Params: PT0

Object.defineProperty(PT0, '__esModule', { value: !0 });
PT0.Impersonated = PT0.IMPERSONATED_ACCOUNT_TYPE = void 0;
var TT0 = RS(),
  v26 = EV(),
  b26 = NL();
PT0.IMPERSONATED_ACCOUNT_TYPE = 'impersonated_service_account';
class Cs extends TT0.OAuth2Client {
  constructor(A = {}) {
    var B, Q, I, G, D, Z;
    super(A);
    if (
      ((this.credentials = { expiry_date: 1, refresh_token: 'impersonated-placeholder' }),
      (this.sourceClient =
        (B = A.sourceClient) !== null && B !== void 0 ? B : new TT0.OAuth2Client()),
      (this.targetPrincipal = (Q = A.targetPrincipal) !== null && Q !== void 0 ? Q : ''),
      (this.delegates = (I = A.delegates) !== null && I !== void 0 ? I : []),
      (this.targetScopes = (G = A.targetScopes) !== null && G !== void 0 ? G : []),
      (this.lifetime = (D = A.lifetime) !== null && D !== void 0 ? D : 3600),
      !b26.originalOrCamelOptions(A).get('universe_domain'))
    )
      this.universeDomain = this.sourceClient.universeDomain;
    else if (this.sourceClient.universeDomain !== this.universeDomain)
      throw new RangeError(
        `Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`
      );
    this.endpoint =
      (Z = A.endpoint) !== null && Z !== void 0
        ? Z
        : `https://iamcredentials.${this.universeDomain}`;
  }
  async sign(A) {
    await this.sourceClient.getAccessToken();
    let B = `projects/-/serviceAccounts/${this.targetPrincipal}`,
      Q = `${this.endpoint}/v1/${B}:signBlob`,
      I = { delegates: this.delegates, payload: Buffer.from(A).toString('base64') };
    return (
      await this.sourceClient.request({ ...Cs.RETRY_CONFIG, url: Q, data: I, method: 'POST' })
    ).data;
  }
  getTargetPrincipal() {
    return this.targetPrincipal;
  }
  async refreshToken() {
    var A, B, Q, I, G, D;
    try {
      await this.sourceClient.getAccessToken();
      let Z = 'projects/-/serviceAccounts/' + this.targetPrincipal,
        Y = `${this.endpoint}/v1/${Z}:generateAccessToken`,
        W = { delegates: this.delegates, scope: this.targetScopes, lifetime: this.lifetime + 's' },
        F = await this.sourceClient.request({
          ...Cs.RETRY_CONFIG,
          url: Y,
          data: W,
          method: 'POST',
        }),
        J = F.data;
      return (
        (this.credentials.access_token = J.accessToken),
        (this.credentials.expiry_date = Date.parse(J.expireTime)),
        { tokens: this.credentials, res: F }
      );
    } catch (Z) {
      if (!(Z instanceof Error)) throw Z;
      let Y = 0,
        W = '';
      if (Z instanceof v26.GaxiosError)
        ((Y =
          (Q =
            (B =
              (A = Z === null || Z === void 0 ? void 0 : Z.response) === null || A === void 0
                ? void 0
                : A.data) === null || B === void 0
              ? void 0
              : B.error) === null || Q === void 0
            ? void 0
            : Q.status),
          (W =
            (D =
              (G =
                (I = Z === null || Z === void 0 ? void 0 : Z.response) === null || I === void 0
                  ? void 0
                  : I.data) === null || G === void 0
                ? void 0
                : G.error) === null || D === void 0
              ? void 0
              : D.message));
      if (Y && W) throw ((Z.message = `${Y}: unable to impersonate: ${W}`), Z);
      else throw ((Z.message = `unable to impersonate: ${Z}`), Z);
    }
  }
  async fetchIdToken(A, B) {
    var Q, I;
    await this.sourceClient.getAccessToken();
    let G = `projects/-/serviceAccounts/${this.targetPrincipal}`,
      D = `${this.endpoint}/v1/${G}:generateIdToken`,
      Z = {
        delegates: this.delegates,
        audience: A,
        includeEmail:
          (Q = B === null || B === void 0 ? void 0 : B.includeEmail) !== null && Q !== void 0
            ? Q
            : !0,
        useEmailAzp:
          (I = B === null || B === void 0 ? void 0 : B.includeEmail) !== null && I !== void 0
            ? I
            : !0,
      };
    return (
      await this.sourceClient.request({ ...Cs.RETRY_CONFIG, url: D, data: Z, method: 'POST' })
    ).data.token;
  }
}
PT0.Impersonated = Cs;
