// Module: P8A
// Params: T8A

var { _optionalChain: ZH } = tA();
Object.defineProperty(T8A, '__esModule', { value: !0 });
var aE1 = D1('url'),
  js2 = ZT();
function ys2(A) {
  let { protocol: B, hostname: Q, port: I } = O8A(A),
    G = A.path ? A.path : '/';
  return `${B}//${Q}${I}${G}`;
}
function R8A(A) {
  let { protocol: B, hostname: Q, port: I } = O8A(A),
    G = A.pathname || '/',
    D = A.auth ? ks2(A.auth) : '';
  return `${B}//${D}${Q}${I}${G}`;
}
function ks2(A) {
  let [B, Q] = A.split(':');
  return `${B ? '[Filtered]' : ''}:${Q ? '[Filtered]' : ''}@`;
}
function xs2(A, B, Q) {
  if (!A) return A;
  let [I, G] = A.split(' ');
  if (B.host && !B.protocol)
    ((B.protocol = ZH([Q, 'optionalAccess', (D) => D.agent, 'optionalAccess', (D) => D.protocol])),
      (G = R8A(B)));
  if (ZH([G, 'optionalAccess', (D) => D.startsWith, 'call', (D) => D('///')])) G = G.slice(2);
  return `${I} ${G}`;
}
function sE1(A) {
  let B = {
    protocol: A.protocol,
    hostname:
      typeof A.hostname === 'string' && A.hostname.startsWith('[')
        ? A.hostname.slice(1, -1)
        : A.hostname,
    hash: A.hash,
    search: A.search,
    pathname: A.pathname,
    path: `${A.pathname || ''}${A.search || ''}`,
    href: A.href,
  };
  if (A.port !== '') B.port = Number(A.port);
  if (A.username || A.password) B.auth = `${A.username}:${A.password}`;
  return B;
}
function fs2(A, B) {
  let Q, I;
  if (typeof B[B.length - 1] === 'function') Q = B.pop();
  if (typeof B[0] === 'string') I = sE1(new aE1.URL(B[0]));
  else if (B[0] instanceof aE1.URL) I = sE1(B[0]);
  else {
    I = B[0];
    try {
      let G = new aE1.URL(I.path || '', `${I.protocol || 'http:'}//${I.hostname}`);
      I = { pathname: G.pathname, search: G.search, hash: G.hash, ...I };
    } catch (G) {}
  }
  if (B.length === 2) I = { ...I, ...B[1] };
  if (I.protocol === void 0)
    if (js2.NODE_VERSION.major > 8)
      I.protocol =
        ZH([
          ZH([A, 'optionalAccess', (G) => G.globalAgent]),
          'optionalAccess',
          (G) => G.protocol,
        ]) ||
        ZH([I.agent, 'optionalAccess', (G) => G.protocol]) ||
        ZH([I._defaultAgent, 'optionalAccess', (G) => G.protocol]);
    else
      I.protocol =
        ZH([I.agent, 'optionalAccess', (G) => G.protocol]) ||
        ZH([I._defaultAgent, 'optionalAccess', (G) => G.protocol]) ||
        ZH([ZH([A, 'optionalAccess', (G) => G.globalAgent]), 'optionalAccess', (G) => G.protocol]);
  if (Q) return [I, Q];
  else return [I];
}
function O8A(A) {
  let B = A.protocol || '',
    Q = A.hostname || A.host || '',
    I = !A.port || A.port === 80 || A.port === 443 || /^(.*):(\d+)$/.test(Q) ? '' : `:${A.port}`;
  return { protocol: B, hostname: Q, port: I };
}
T8A.cleanSpanDescription = xs2;
T8A.extractRawUrl = ys2;
T8A.extractUrl = R8A;
T8A.normalizeRequestArgs = fs2;
T8A.urlToOptions = sE1;
