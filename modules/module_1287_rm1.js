// Module: rm1
// Params: fV8,Bk0

var { kProxy: lQ6, kClose: iQ6, kDestroy: nQ6, kInterceptors: aQ6 } = uB(),
  { URL: ps } = D1('node:url'),
  sQ6 = eg(),
  rQ6 = tg(),
  oQ6 = vg(),
  { InvalidArgumentError: tY1, RequestAbortedError: tQ6, SecureProxyConnectionError: eQ6 } = y5(),
  oy0 = Ns(),
  rY1 = Symbol('proxy agent'),
  oY1 = Symbol('proxy client'),
  cs = Symbol('proxy headers'),
  sm1 = Symbol('request tls settings'),
  ty0 = Symbol('proxy tls settings'),
  ey0 = Symbol('connect endpoint function');
function A76(A) {
  return A === 'https:' ? 443 : 80;
}
function B76(A, B) {
  return new rQ6(A, B);
}
var Q76 = () => {};
class Ak0 extends oQ6 {
  constructor(A) {
    super();
    if (!A || (typeof A === 'object' && !(A instanceof ps) && !A.uri))
      throw new tY1('Proxy uri is mandatory');
    let { clientFactory: B = B76 } = A;
    if (typeof B !== 'function') throw new tY1('Proxy opts.clientFactory must be a function.');
    let Q = this.#A(A),
      { href: I, origin: G, port: D, protocol: Z, username: Y, password: W, hostname: F } = Q;
    if (
      ((this[lQ6] = { uri: I, protocol: Z }),
      (this[aQ6] =
        A.interceptors?.ProxyAgent && Array.isArray(A.interceptors.ProxyAgent)
          ? A.interceptors.ProxyAgent
          : []),
      (this[sm1] = A.requestTls),
      (this[ty0] = A.proxyTls),
      (this[cs] = A.headers || {}),
      A.auth && A.token)
    )
      throw new tY1('opts.auth cannot be used in combination with opts.token');
    else if (A.auth) this[cs]['proxy-authorization'] = `Basic ${A.auth}`;
    else if (A.token) this[cs]['proxy-authorization'] = A.token;
    else if (Y && W)
      this[cs]['proxy-authorization'] =
        `Basic ${Buffer.from(`${decodeURIComponent(Y)}:${decodeURIComponent(W)}`).toString('base64')}`;
    let J = oy0({ ...A.proxyTls });
    ((this[ey0] = oy0({ ...A.requestTls })),
      (this[oY1] = B(Q, { connect: J })),
      (this[rY1] = new sQ6({
        ...A,
        connect: async (C, X) => {
          let V = C.host;
          if (!C.port) V += `:${A76(C.protocol)}`;
          try {
            let { socket: K, statusCode: U } = await this[oY1].connect({
              origin: G,
              port: D,
              path: V,
              signal: C.signal,
              headers: { ...this[cs], host: C.host },
              servername: this[ty0]?.servername || F,
            });
            if (U !== 200)
              (K.on('error', Q76).destroy(),
                X(new tQ6(`Proxy response (${U}) !== 200 when HTTP Tunneling`)));
            if (C.protocol !== 'https:') {
              X(null, K);
              return;
            }
            let N;
            if (this[sm1]) N = this[sm1].servername;
            else N = C.servername;
            this[ey0]({ ...C, servername: N, httpSocket: K }, X);
          } catch (K) {
            if (K.code === 'ERR_TLS_CERT_ALTNAME_INVALID') X(new eQ6(K));
            else X(K);
          }
        },
      })));
  }
  dispatch(A, B) {
    let Q = I76(A.headers);
    if ((G76(Q), Q && !('host' in Q) && !('Host' in Q))) {
      let { host: I } = new ps(A.origin);
      Q.host = I;
    }
    return this[rY1].dispatch({ ...A, headers: Q }, B);
  }
  #A(A) {
    if (typeof A === 'string') return new ps(A);
    else if (A instanceof ps) return A;
    else return new ps(A.uri);
  }
  async [iQ6]() {
    (await this[rY1].close(), await this[oY1].close());
  }
  async [nQ6]() {
    (await this[rY1].destroy(), await this[oY1].destroy());
  }
}
function I76(A) {
  if (Array.isArray(A)) {
    let B = {};
    for (let Q = 0; Q < A.length; Q += 2) B[A[Q]] = A[Q + 1];
    return B;
  }
  return A;
}
function G76(A) {
  if (A && Object.keys(A).find((Q) => Q.toLowerCase() === 'proxy-authorization'))
    throw new tY1('Proxy-Authorization should be sent in ProxyAgent constructor');
}
Bk0.exports = Ak0;
