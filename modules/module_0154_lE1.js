// Module: lE1
// Params: s5A

var { _nullishCoalesce: cE1 } = tA();
Object.defineProperty(s5A, '__esModule', { value: !0 });
var Ua2 = D1('http'),
  Na2 = D1('https'),
  $a2 = D1('stream'),
  a5A = D1('url'),
  qa2 = D1('zlib'),
  n5A = I4(),
  Ma2 = tA(),
  La2 = i5A(),
  Ra2 = 32768;
function Oa2(A) {
  return new $a2.Readable({
    read() {
      (this.push(A), this.push(null));
    },
  });
}
function Ta2(A) {
  let B;
  try {
    B = new a5A.URL(A.url);
  } catch (W) {
    return (
      Ma2.consoleSandbox(() => {
        console.warn(
          '[@sentry/node]: Invalid dsn or tunnel option, will not send any events. The tunnel option must be a full URL when used.'
        );
      }),
      n5A.createTransport(A, () => Promise.resolve({}))
    );
  }
  let Q = B.protocol === 'https:',
    I = Pa2(B, A.proxy || (Q ? process.env.https_proxy : void 0) || process.env.http_proxy),
    G = Q ? Na2 : Ua2,
    D = A.keepAlive === void 0 ? !1 : A.keepAlive,
    Z = I
      ? new La2.HttpsProxyAgent(I)
      : new G.Agent({ keepAlive: D, maxSockets: 30, timeout: 2000 }),
    Y = Sa2(
      A,
      cE1(A.httpModule, () => G),
      Z
    );
  return n5A.createTransport(A, Y);
}
function Pa2(A, B) {
  let { no_proxy: Q } = process.env;
  if (Q && Q.split(',').some((G) => A.host.endsWith(G) || A.hostname.endsWith(G))) return;
  else return B;
}
function Sa2(A, B, Q) {
  let { hostname: I, pathname: G, port: D, protocol: Z, search: Y } = new a5A.URL(A.url);
  return function W(F) {
    return new Promise((J, C) => {
      let X = Oa2(F.body),
        V = { ...A.headers };
      if (F.body.length > Ra2) ((V['content-encoding'] = 'gzip'), (X = X.pipe(qa2.createGzip())));
      let K = B.request(
        {
          method: 'POST',
          agent: Q,
          headers: V,
          hostname: I,
          path: `${G}${Y}`,
          port: D,
          protocol: Z,
          ca: A.caCerts,
        },
        (U) => {
          (U.on('data', () => {}), U.on('end', () => {}), U.setEncoding('utf8'));
          let N = cE1(U.headers['retry-after'], () => null),
            q = cE1(U.headers['x-sentry-rate-limits'], () => null);
          J({
            statusCode: U.statusCode,
            headers: { 'retry-after': N, 'x-sentry-rate-limits': Array.isArray(q) ? q[0] : q },
          });
        }
      );
      (K.on('error', C), X.pipe(K));
    });
  };
}
s5A.makeNodeTransport = Ta2;
