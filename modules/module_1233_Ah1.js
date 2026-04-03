// Module: Ah1
// Params: fT0

Object.defineProperty(fT0, '__esModule', { value: !0 });
fT0.StsCredentials = void 0;
var p26 = EV(),
  c26 = D1('querystring'),
  l26 = Ds(),
  xT0 = tg1();
class eg1 extends xT0.OAuthClientAuthHandler {
  constructor(A, B) {
    super(B);
    ((this.tokenExchangeEndpoint = A), (this.transporter = new l26.DefaultTransporter()));
  }
  async exchangeToken(A, B, Q) {
    var I, G, D;
    let Z = {
      grant_type: A.grantType,
      resource: A.resource,
      audience: A.audience,
      scope: (I = A.scope) === null || I === void 0 ? void 0 : I.join(' '),
      requested_token_type: A.requestedTokenType,
      subject_token: A.subjectToken,
      subject_token_type: A.subjectTokenType,
      actor_token: (G = A.actingParty) === null || G === void 0 ? void 0 : G.actorToken,
      actor_token_type: (D = A.actingParty) === null || D === void 0 ? void 0 : D.actorTokenType,
      options: Q && JSON.stringify(Q),
    };
    Object.keys(Z).forEach((F) => {
      if (typeof Z[F] === 'undefined') delete Z[F];
    });
    let Y = { 'Content-Type': 'application/x-www-form-urlencoded' };
    Object.assign(Y, B || {});
    let W = {
      ...eg1.RETRY_CONFIG,
      url: this.tokenExchangeEndpoint.toString(),
      method: 'POST',
      headers: Y,
      data: c26.stringify(Z),
      responseType: 'json',
    };
    this.applyClientAuthenticationOptions(W);
    try {
      let F = await this.transporter.request(W),
        J = F.data;
      return ((J.res = F), J);
    } catch (F) {
      if (F instanceof p26.GaxiosError && F.response)
        throw xT0.getErrorFromOAuthErrorResponse(F.response.data, F);
      throw F;
    }
  }
}
fT0.StsCredentials = eg1;
