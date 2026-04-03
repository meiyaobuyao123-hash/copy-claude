// Module: yg1
// Params: OO0

Object.defineProperty(OO0, '__esModule', { value: !0 });
OO0.Compute = void 0;
var T06 = EV(),
  LO0 = Is(),
  P06 = RS();
class RO0 extends P06.OAuth2Client {
  constructor(A = {}) {
    super(A);
    ((this.credentials = { expiry_date: 1, refresh_token: 'compute-placeholder' }),
      (this.serviceAccountEmail = A.serviceAccountEmail || 'default'),
      (this.scopes = Array.isArray(A.scopes) ? A.scopes : A.scopes ? [A.scopes] : []));
  }
  async refreshTokenNoCache(A) {
    let B = `service-accounts/${this.serviceAccountEmail}/token`,
      Q;
    try {
      let G = { property: B };
      if (this.scopes.length > 0) G.params = { scopes: this.scopes.join(',') };
      Q = await LO0.instance(G);
    } catch (G) {
      if (G instanceof T06.GaxiosError)
        ((G.message = `Could not refresh access token: ${G.message}`), this.wrapError(G));
      throw G;
    }
    let I = Q;
    if (Q && Q.expires_in)
      ((I.expiry_date = new Date().getTime() + Q.expires_in * 1000), delete I.expires_in);
    return (this.emit('tokens', I), { tokens: I, res: null });
  }
  async fetchIdToken(A) {
    let B = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${A}`,
      Q;
    try {
      let I = { property: B };
      Q = await LO0.instance(I);
    } catch (I) {
      if (I instanceof Error) I.message = `Could not fetch ID token: ${I.message}`;
      throw I;
    }
    return Q;
  }
  wrapError(A) {
    let B = A.response;
    if (B && B.status) {
      if (((A.status = B.status), B.status === 403))
        A.message =
          'A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: ' +
          A.message;
      else if (B.status === 404)
        A.message =
          'A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: ' +
          A.message;
    }
  }
}
OO0.Compute = RO0;
