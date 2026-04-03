// Module: BAA
// Params: AAA

Object.defineProperty(AAA, '__esModule', { value: !0 });
var DT2 = a1A(),
  ZT2 = aK(),
  r1A = QJ(),
  YT2 = CX(),
  WT2 = Tu(),
  FT2 = Yw1(),
  JT2 = { ip: !1, request: !0, transaction: !0, user: !0 },
  CT2 = ['cookies', 'data', 'headers', 'method', 'query_string', 'url'],
  o1A = ['id', 'username', 'email'];
function XT2(A, B, Q) {
  if (!A) return;
  if (!A.metadata.source || A.metadata.source === 'url') {
    let [I, G] = HA1(B, { path: !0, method: !0 });
    (A.updateName(I), A.setMetadata({ source: G }));
  }
  if ((A.setAttribute('url', B.originalUrl || B.url), B.baseUrl))
    A.setAttribute('baseUrl', B.baseUrl);
  A.setData('query', t1A(B, Q));
}
function HA1(A, B = {}) {
  let Q = A.method && A.method.toUpperCase(),
    I = '',
    G = 'url';
  if (B.customRoute || A.route)
    ((I = B.customRoute || `${A.baseUrl || ''}${A.route && A.route.path}`), (G = 'route'));
  else if (A.originalUrl || A.url) I = FT2.stripUrlQueryAndFragment(A.originalUrl || A.url || '');
  let D = '';
  if (B.method && Q) D += Q;
  if (B.method && B.path) D += ' ';
  if (B.path && I) D += I;
  return [D, G];
}
function VT2(A, B) {
  switch (B) {
    case 'path':
      return HA1(A, { path: !0 })[0];
    case 'handler':
      return (
        (A.route && A.route.stack && A.route.stack[0] && A.route.stack[0].name) || '<anonymous>'
      );
    case 'methodPath':
    default: {
      let Q = A._reconstructedRoute ? A._reconstructedRoute : void 0;
      return HA1(A, { path: !0, method: !0, customRoute: Q })[0];
    }
  }
}
function KT2(A, B) {
  let Q = {};
  return (
    (Array.isArray(B) ? B : o1A).forEach((G) => {
      if (A && G in A) Q[G] = A[G];
    }),
    Q
  );
}
function Ww1(A, B) {
  let { include: Q = CT2, deps: I } = B || {},
    G = {},
    D = A.headers || {},
    Z = A.method,
    Y = D.host || A.hostname || A.host || '<no host>',
    W = A.protocol === 'https' || (A.socket && A.socket.encrypted) ? 'https' : 'http',
    F = A.originalUrl || A.url || '',
    J = F.startsWith(W) ? F : `${W}://${Y}${F}`;
  return (
    Q.forEach((C) => {
      switch (C) {
        case 'headers': {
          if (((G.headers = D), !Q.includes('cookies'))) delete G.headers.cookie;
          break;
        }
        case 'method': {
          G.method = Z;
          break;
        }
        case 'url': {
          G.url = J;
          break;
        }
        case 'cookies': {
          G.cookies = A.cookies || (D.cookie && DT2.parseCookie(D.cookie)) || {};
          break;
        }
        case 'query_string': {
          G.query_string = t1A(A, I);
          break;
        }
        case 'data': {
          if (Z === 'GET' || Z === 'HEAD') break;
          if (A.body !== void 0)
            G.data = r1A.isString(A.body) ? A.body : JSON.stringify(WT2.normalize(A.body));
          break;
        }
        default:
          if ({}.hasOwnProperty.call(A, C)) G[C] = A[C];
      }
    }),
    G
  );
}
function HT2(A, B, Q) {
  let I = { ...JT2, ...(Q && Q.include) };
  if (I.request) {
    let G = Array.isArray(I.request)
      ? Ww1(B, { include: I.request, deps: Q && Q.deps })
      : Ww1(B, { deps: Q && Q.deps });
    A.request = { ...A.request, ...G };
  }
  if (I.user) {
    let G = B.user && r1A.isPlainObject(B.user) ? KT2(B.user, I.user) : {};
    if (Object.keys(G).length) A.user = { ...A.user, ...G };
  }
  if (I.ip) {
    let G = B.ip || (B.socket && B.socket.remoteAddress);
    if (G) A.user = { ...A.user, ip_address: G };
  }
  if (I.transaction && !A.transaction) A.transaction = VT2(B, I.transaction);
  return A;
}
function t1A(A, B) {
  let Q = A.originalUrl || A.url || '';
  if (!Q) return;
  if (Q.startsWith('/')) Q = `http://dogs.are.great${Q}`;
  try {
    return (
      A.query ||
      (typeof URL !== 'undefined' && new URL(Q).search.slice(1)) ||
      (B && B.url && B.url.parse(Q).query) ||
      void 0
    );
  } catch (I) {
    return;
  }
}
function e1A(A) {
  let B = {};
  try {
    A.forEach((Q, I) => {
      if (typeof Q === 'string') B[I] = Q;
    });
  } catch (Q) {
    ZT2.DEBUG_BUILD &&
      YT2.logger.warn(
        'Sentry failed extracting headers from a request object. If you see this, please file an issue.'
      );
  }
  return B;
}
function zT2(A) {
  let B = e1A(A.headers);
  return { method: A.method, url: A.url, headers: B };
}
AAA.DEFAULT_USER_INCLUDES = o1A;
AAA.addRequestDataToEvent = HT2;
AAA.addRequestDataToTransaction = XT2;
AAA.extractPathForTransaction = HA1;
AAA.extractRequestData = Ww1;
AAA.winterCGHeadersToDict = e1A;
AAA.winterCGRequestToRequestData = zT2;
