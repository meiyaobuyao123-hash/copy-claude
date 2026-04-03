// Module: ng1
// Params: NT0

Object.defineProperty(NT0, '__esModule', { value: !0 });
NT0.JWTAccess = void 0;
var S26 = ug1(),
  _26 = NL(),
  UT0 = { alg: 'RS256', typ: 'JWT' };
class ig1 {
  constructor(A, B, Q, I) {
    ((this.cache = new _26.LRUCache({ capacity: 500, maxAge: 3600000 })),
      (this.email = A),
      (this.key = B),
      (this.keyId = Q),
      (this.eagerRefreshThresholdMillis = I !== null && I !== void 0 ? I : 300000));
  }
  getCachedKey(A, B) {
    let Q = A;
    if (B && Array.isArray(B) && B.length) Q = A ? `${A}_${B.join('_')}` : `${B.join('_')}`;
    else if (typeof B === 'string') Q = A ? `${A}_${B}` : B;
    if (!Q) throw Error('Scopes or url must be provided');
    return Q;
  }
  getRequestHeaders(A, B, Q) {
    let I = this.getCachedKey(A, Q),
      G = this.cache.get(I),
      D = Date.now();
    if (G && G.expiration - D > this.eagerRefreshThresholdMillis) return G.headers;
    let Z = Math.floor(Date.now() / 1000),
      Y = ig1.getExpirationTime(Z),
      W;
    if (Array.isArray(Q)) Q = Q.join(' ');
    if (Q) W = { iss: this.email, sub: this.email, scope: Q, exp: Y, iat: Z };
    else W = { iss: this.email, sub: this.email, aud: A, exp: Y, iat: Z };
    if (B) {
      for (let V in W)
        if (B[V])
          throw new Error(
            `The '${V}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`
          );
    }
    let F = this.keyId ? { ...UT0, kid: this.keyId } : UT0,
      J = Object.assign(W, B),
      X = { Authorization: `Bearer ${S26.sign({ header: F, payload: J, secret: this.key })}` };
    return (this.cache.set(I, { expiration: Y * 1000, headers: X }), X);
  }
  static getExpirationTime(A) {
    return A + 3600;
  }
  fromJSON(A) {
    if (!A)
      throw new Error('Must pass in a JSON object containing the service account auth settings.');
    if (!A.client_email)
      throw new Error('The incoming JSON object does not contain a client_email field');
    if (!A.private_key)
      throw new Error('The incoming JSON object does not contain a private_key field');
    ((this.email = A.client_email),
      (this.key = A.private_key),
      (this.keyId = A.private_key_id),
      (this.projectId = A.project_id));
  }
  fromStream(A, B) {
    if (B) this.fromStreamAsync(A).then(() => B(), B);
    else return this.fromStreamAsync(A);
  }
  fromStreamAsync(A) {
    return new Promise((B, Q) => {
      if (!A) Q(new Error('Must pass in a stream containing the service account auth settings.'));
      let I = '';
      A.setEncoding('utf8')
        .on('data', (G) => (I += G))
        .on('error', Q)
        .on('end', () => {
          try {
            let G = JSON.parse(I);
            (this.fromJSON(G), B());
          } catch (G) {
            Q(G);
          }
        });
    });
  }
}
NT0.JWTAccess = ig1;
