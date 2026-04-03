// Module: Tn1
// Params: LG2

Object.defineProperty(LG2, '__esModule', { value: !0 });
LG2.parseCIDR = qG2;
LG2.mapProxyName = Cn6;
LG2.getProxiedConnection = Xn6;
var oo = r8(),
  Om = O6(),
  $G2 = D1('net'),
  Qn6 = D1('http'),
  In6 = r8(),
  NG2 = qC(),
  to = xY(),
  Gn6 = D1('url'),
  Dn6 = On1(),
  Zn6 = 'proxy';
function Tm(A) {
  In6.trace(Om.LogVerbosity.DEBUG, Zn6, A);
}
function Yn6() {
  let A = '',
    B = '';
  if (process.env.grpc_proxy) ((B = 'grpc_proxy'), (A = process.env.grpc_proxy));
  else if (process.env.https_proxy) ((B = 'https_proxy'), (A = process.env.https_proxy));
  else if (process.env.http_proxy) ((B = 'http_proxy'), (A = process.env.http_proxy));
  else return {};
  let Q;
  try {
    Q = new Gn6.URL(A);
  } catch (Y) {
    return (oo.log(Om.LogVerbosity.ERROR, `cannot parse value of "${B}" env var`), {});
  }
  if (Q.protocol !== 'http:')
    return (oo.log(Om.LogVerbosity.ERROR, `"${Q.protocol}" scheme not supported in proxy URI`), {});
  let I = null;
  if (Q.username)
    if (Q.password)
      (oo.log(Om.LogVerbosity.INFO, 'userinfo found in proxy URI'),
        (I = decodeURIComponent(`${Q.username}:${Q.password}`)));
    else I = Q.username;
  let { hostname: G, port: D } = Q;
  if (D === '') D = '80';
  let Z = { address: `${G}:${D}` };
  if (I) Z.creds = I;
  return (Tm('Proxy server ' + Z.address + ' set by environment variable ' + B), Z);
}
function Wn6() {
  let A = process.env.no_grpc_proxy,
    B = 'no_grpc_proxy';
  if (!A) ((A = process.env.no_proxy), (B = 'no_proxy'));
  if (A) return (Tm('No proxy server list set by environment variable ' + B), A.split(','));
  else return [];
}
function qG2(A) {
  let B = A.split('/');
  if (B.length !== 2) return null;
  let Q = parseInt(B[1], 10);
  if (!$G2.isIPv4(B[0]) || Number.isNaN(Q) || Q < 0 || Q > 32) return null;
  return { ip: MG2(B[0]), prefixLength: Q };
}
function MG2(A) {
  return A.split('.').reduce((B, Q) => (B << 8) + parseInt(Q, 10), 0);
}
function Fn6(A, B) {
  let Q = A.ip,
    I = -1 << (32 - A.prefixLength);
  return (MG2(B) & I) === (Q & I);
}
function Jn6(A) {
  for (let B of Wn6()) {
    let Q = qG2(B);
    if ($G2.isIPv4(A) && Q && Fn6(Q, A)) return !0;
    else if (A.endsWith(B)) return !0;
  }
  return !1;
}
function Cn6(A, B) {
  var Q;
  let I = { target: A, extraOptions: {} };
  if (((Q = B['grpc.enable_http_proxy']) !== null && Q !== void 0 ? Q : 1) === 0) return I;
  if (A.scheme === 'unix') return I;
  let G = Yn6();
  if (!G.address) return I;
  let D = to.splitHostPort(A.path);
  if (!D) return I;
  let Z = D.host;
  if (Jn6(Z)) return (Tm('Not using proxy for target in no_proxy list: ' + to.uriToString(A)), I);
  let Y = { 'grpc.http_connect_target': to.uriToString(A) };
  if (G.creds) Y['grpc.http_connect_creds'] = G.creds;
  return { target: { scheme: 'dns', path: G.address }, extraOptions: Y };
}
function Xn6(A, B) {
  var Q;
  if (!('grpc.http_connect_target' in B)) return Promise.resolve(null);
  let I = B['grpc.http_connect_target'],
    G = to.parseUri(I);
  if (G === null) return Promise.resolve(null);
  let D = to.splitHostPort(G.path);
  if (D === null) return Promise.resolve(null);
  let Z = `${D.host}:${(Q = D.port) !== null && Q !== void 0 ? Q : Dn6.DEFAULT_PORT}`,
    Y = { method: 'CONNECT', path: Z },
    W = { Host: Z };
  if (NG2.isTcpSubchannelAddress(A)) ((Y.host = A.host), (Y.port = A.port));
  else Y.socketPath = A.path;
  if ('grpc.http_connect_creds' in B)
    W['Proxy-Authorization'] =
      'Basic ' + Buffer.from(B['grpc.http_connect_creds']).toString('base64');
  Y.headers = W;
  let F = NG2.subchannelAddressToString(A);
  return (
    Tm('Using proxy ' + F + ' to connect to ' + Y.path),
    new Promise((J, C) => {
      let X = Qn6.request(Y);
      (X.once('connect', (V, K, U) => {
        if ((X.removeAllListeners(), K.removeAllListeners(), V.statusCode === 200)) {
          if ((Tm('Successfully connected to ' + Y.path + ' through proxy ' + F), U.length > 0))
            K.unshift(U);
          (Tm(
            'Successfully established a plaintext connection to ' + Y.path + ' through proxy ' + F
          ),
            J(K));
        } else
          (oo.log(
            Om.LogVerbosity.ERROR,
            'Failed to connect to ' +
              Y.path +
              ' through proxy ' +
              F +
              ' with status ' +
              V.statusCode
          ),
            C());
      }),
        X.once('error', (V) => {
          (X.removeAllListeners(),
            oo.log(
              Om.LogVerbosity.ERROR,
              'Failed to connect to proxy ' + F + ' with error ' + V.message
            ),
            C());
        }),
        X.end());
    })
  );
}
