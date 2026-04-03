// Module: rg1
// Params: RT0

Object.defineProperty(RT0, '__esModule', { value: !0 });
RT0.UserRefreshClient = RT0.USER_REFRESH_ACCOUNT_TYPE = void 0;
var k26 = RS(),
  x26 = D1('querystring');
RT0.USER_REFRESH_ACCOUNT_TYPE = 'authorized_user';
class BY1 extends k26.OAuth2Client {
  constructor(A, B, Q, I, G) {
    let D =
      A && typeof A === 'object'
        ? A
        : {
            clientId: A,
            clientSecret: B,
            refreshToken: Q,
            eagerRefreshThresholdMillis: I,
            forceRefreshOnFailure: G,
          };
    super(D);
    ((this._refreshToken = D.refreshToken), (this.credentials.refresh_token = D.refreshToken));
  }
  async refreshTokenNoCache(A) {
    return super.refreshTokenNoCache(this._refreshToken);
  }
  async fetchIdToken(A) {
    return (
      await this.transporter.request({
        ...BY1.RETRY_CONFIG,
        url: this.endpoints.oauth2TokenUrl,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'POST',
        data: x26.stringify({
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: 'refresh_token',
          refresh_token: this._refreshToken,
          target_audience: A,
        }),
      })
    ).data.id_token;
  }
  fromJSON(A) {
    if (!A) throw new Error('Must pass in a JSON object containing the user refresh token');
    if (A.type !== 'authorized_user')
      throw new Error('The incoming JSON object does not have the "authorized_user" type');
    if (!A.client_id)
      throw new Error('The incoming JSON object does not contain a client_id field');
    if (!A.client_secret)
      throw new Error('The incoming JSON object does not contain a client_secret field');
    if (!A.refresh_token)
      throw new Error('The incoming JSON object does not contain a refresh_token field');
    ((this._clientId = A.client_id),
      (this._clientSecret = A.client_secret),
      (this._refreshToken = A.refresh_token),
      (this.credentials.refresh_token = A.refresh_token),
      (this.quotaProjectId = A.quota_project_id),
      (this.universeDomain = A.universe_domain || this.universeDomain));
  }
  fromStream(A, B) {
    if (B) this.fromStreamAsync(A).then(() => B(), B);
    else return this.fromStreamAsync(A);
  }
  async fromStreamAsync(A) {
    return new Promise((B, Q) => {
      if (!A) return Q(new Error('Must pass in a stream containing the user refresh token.'));
      let I = '';
      A.setEncoding('utf8')
        .on('error', Q)
        .on('data', (G) => (I += G))
        .on('end', () => {
          try {
            let G = JSON.parse(I);
            return (this.fromJSON(G), B());
          } catch (G) {
            return Q(G);
          }
        });
    });
  }
  static fromJSON(A) {
    let B = new BY1();
    return (B.fromJSON(A), B);
  }
}
RT0.UserRefreshClient = BY1;
