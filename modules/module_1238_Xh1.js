// Module: Xh1
// Params: eT0

Object.defineProperty(eT0, '__esModule', { value: !0 });
eT0.AwsRequestSigner = void 0;
var oT0 = Kg(),
  rT0 = 'AWS4-HMAC-SHA256',
  W96 = 'aws4_request';
class tT0 {
  constructor(A, B) {
    ((this.getCredentials = A), (this.region = B), (this.crypto = oT0.createCrypto()));
  }
  async getRequestOptions(A) {
    if (!A.url) throw new Error('"url" is required in "amzOptions"');
    let B = typeof A.data === 'object' ? JSON.stringify(A.data) : A.data,
      Q = A.url,
      I = A.method || 'GET',
      G = A.body || B,
      D = A.headers,
      Z = await this.getCredentials(),
      Y = new URL(Q),
      W = await J96({
        crypto: this.crypto,
        host: Y.host,
        canonicalUri: Y.pathname,
        canonicalQuerystring: Y.search.substr(1),
        method: I,
        region: this.region,
        securityCredentials: Z,
        requestPayload: G,
        additionalAmzHeaders: D,
      }),
      F = Object.assign(
        W.amzDate ? { 'x-amz-date': W.amzDate } : {},
        { Authorization: W.authorizationHeader, host: Y.host },
        D || {}
      );
    if (Z.token) Object.assign(F, { 'x-amz-security-token': Z.token });
    let J = { url: Q, method: I, headers: F };
    if (typeof G !== 'undefined') J.body = G;
    return J;
  }
}
eT0.AwsRequestSigner = tT0;
async function Xs(A, B, Q) {
  return await A.signWithHmacSha256(B, Q);
}
async function F96(A, B, Q, I, G) {
  let D = await Xs(A, `AWS4${B}`, Q),
    Z = await Xs(A, D, I),
    Y = await Xs(A, Z, G);
  return await Xs(A, Y, 'aws4_request');
}
async function J96(A) {
  let B = A.additionalAmzHeaders || {},
    Q = A.requestPayload || '',
    I = A.host.split('.')[0],
    G = new Date(),
    D = G.toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.[0-9]+/, ''),
    Z = G.toISOString().replace(/[-]/g, '').replace(/T.*/, ''),
    Y = {};
  if (
    (Object.keys(B).forEach((R) => {
      Y[R.toLowerCase()] = B[R];
    }),
    A.securityCredentials.token)
  )
    Y['x-amz-security-token'] = A.securityCredentials.token;
  let W = Object.assign({ host: A.host }, Y.date ? {} : { 'x-amz-date': D }, Y),
    F = '',
    J = Object.keys(W).sort();
  J.forEach((R) => {
    F += `${R}:${W[R]}
`;
  });
  let C = J.join(';'),
    X = await A.crypto.sha256DigestHex(Q),
    V = `${A.method}
${A.canonicalUri}
${A.canonicalQuerystring}
${F}
${C}
${X}`,
    K = `${Z}/${A.region}/${I}/${W96}`,
    U =
      `${rT0}
${D}
${K}
` + (await A.crypto.sha256DigestHex(V)),
    N = await F96(A.crypto, A.securityCredentials.secretAccessKey, Z, A.region, I),
    q = await Xs(A.crypto, N, U),
    M = `${rT0} Credential=${A.securityCredentials.accessKeyId}/${K}, SignedHeaders=${C}, Signature=${oT0.fromArrayBufferToHex(q)}`;
  return {
    amzDate: Y.date ? void 0 : D,
    authorizationHeader: M,
    canonicalQuerystring: A.canonicalQuerystring,
  };
}
