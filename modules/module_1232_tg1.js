// Module: tg1
// Params: yT0

Object.defineProperty(yT0, '__esModule', { value: !0 });
yT0.OAuthClientAuthHandler = void 0;
yT0.getErrorFromOAuthErrorResponse = d26;
var _T0 = D1('querystring'),
  h26 = Kg(),
  m26 = ['PUT', 'POST', 'PATCH'];
class jT0 {
  constructor(A) {
    ((this.clientAuthentication = A), (this.crypto = h26.createCrypto()));
  }
  applyClientAuthenticationOptions(A, B) {
    if ((this.injectAuthenticatedHeaders(A, B), !B)) this.injectAuthenticatedRequestBody(A);
  }
  injectAuthenticatedHeaders(A, B) {
    var Q;
    if (B)
      ((A.headers = A.headers || {}), Object.assign(A.headers, { Authorization: `Bearer ${B}}` }));
    else if (
      ((Q = this.clientAuthentication) === null || Q === void 0
        ? void 0
        : Q.confidentialClientType) === 'basic'
    ) {
      A.headers = A.headers || {};
      let I = this.clientAuthentication.clientId,
        G = this.clientAuthentication.clientSecret || '',
        D = this.crypto.encodeBase64StringUtf8(`${I}:${G}`);
      Object.assign(A.headers, { Authorization: `Basic ${D}` });
    }
  }
  injectAuthenticatedRequestBody(A) {
    var B;
    if (
      ((B = this.clientAuthentication) === null || B === void 0
        ? void 0
        : B.confidentialClientType) === 'request-body'
    ) {
      let Q = (A.method || 'GET').toUpperCase();
      if (m26.indexOf(Q) !== -1) {
        let I,
          G = A.headers || {};
        for (let D in G)
          if (D.toLowerCase() === 'content-type' && G[D]) {
            I = G[D].toLowerCase();
            break;
          }
        if (I === 'application/x-www-form-urlencoded') {
          A.data = A.data || '';
          let D = _T0.parse(A.data);
          (Object.assign(D, {
            client_id: this.clientAuthentication.clientId,
            client_secret: this.clientAuthentication.clientSecret || '',
          }),
            (A.data = _T0.stringify(D)));
        } else if (I === 'application/json')
          ((A.data = A.data || {}),
            Object.assign(A.data, {
              client_id: this.clientAuthentication.clientId,
              client_secret: this.clientAuthentication.clientSecret || '',
            }));
        else
          throw new Error(
            `${I} content-types are not supported with ${this.clientAuthentication.confidentialClientType} client authentication`
          );
      } else
        throw new Error(
          `${Q} HTTP method does not support ${this.clientAuthentication.confidentialClientType} client authentication`
        );
    }
  }
  static get RETRY_CONFIG() {
    return {
      retry: !0,
      retryConfig: { httpMethodsToRetry: ['GET', 'PUT', 'POST', 'HEAD', 'OPTIONS', 'DELETE'] },
    };
  }
}
yT0.OAuthClientAuthHandler = jT0;
function d26(A, B) {
  let { error: Q, error_description: I, error_uri: G } = A,
    D = `Error code ${Q}`;
  if (typeof I !== 'undefined') D += `: ${I}`;
  if (typeof G !== 'undefined') D += ` - ${G}`;
  let Z = new Error(D);
  if (B) {
    let Y = Object.keys(B);
    if (B.stack) Y.push('stack');
    Y.forEach((W) => {
      if (W !== 'message')
        Object.defineProperty(Z, W, { value: B[W], writable: !1, enumerable: !0 });
    });
  }
  return Z;
}
