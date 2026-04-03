// Module: I6
// Params: IV8,uS0

var ws = D1('node:assert'),
  { kDestroyed: PS0, kBodyUsed: jg, kListeners: gh1, kBody: TS0 } = uB(),
  { IncomingMessage: y46 } = D1('node:http'),
  KY1 = D1('node:stream'),
  k46 = D1('node:net'),
  { Blob: x46 } = D1('node:buffer'),
  f46 = D1('node:util'),
  { stringify: v46 } = D1('node:querystring'),
  { EventEmitter: b46 } = D1('node:events'),
  { InvalidArgumentError: YI } = y5(),
  { headerNameLowerCasedRecord: g46 } = XY1(),
  { tree: SS0 } = OS0(),
  [h46, m46] = process.versions.node.split('.').map((A) => Number(A));
class hh1 {
  constructor(A) {
    ((this[TS0] = A), (this[jg] = !1));
  }
  async *[Symbol.asyncIterator]() {
    (ws(!this[jg], 'disturbed'), (this[jg] = !0), yield* this[TS0]);
  }
}
function d46(A) {
  if (HY1(A)) {
    if (xS0(A) === 0)
      A.on('data', function () {
        ws(!1);
      });
    if (typeof A.readableDidRead !== 'boolean')
      ((A[jg] = !1),
        b46.prototype.on.call(A, 'data', function () {
          this[jg] = !0;
        }));
    return A;
  } else if (A && typeof A.pipeTo === 'function') return new hh1(A);
  else if (A && typeof A !== 'string' && !ArrayBuffer.isView(A) && kS0(A)) return new hh1(A);
  else return A;
}
function u46() {}
function HY1(A) {
  return A && typeof A === 'object' && typeof A.pipe === 'function' && typeof A.on === 'function';
}
function _S0(A) {
  if (A === null) return !1;
  else if (A instanceof x46) return !0;
  else if (typeof A !== 'object') return !1;
  else {
    let B = A[Symbol.toStringTag];
    return (
      (B === 'Blob' || B === 'File') &&
      (('stream' in A && typeof A.stream === 'function') ||
        ('arrayBuffer' in A && typeof A.arrayBuffer === 'function'))
    );
  }
}
function p46(A, B) {
  if (A.includes('?') || A.includes('#'))
    throw new Error('Query params cannot be passed when url already contains "?" or "#".');
  let Q = v46(B);
  if (Q) A += '?' + Q;
  return A;
}
function jS0(A) {
  let B = parseInt(A, 10);
  return B === Number(A) && B >= 0 && B <= 65535;
}
function VY1(A) {
  return (
    A != null &&
    A[0] === 'h' &&
    A[1] === 't' &&
    A[2] === 't' &&
    A[3] === 'p' &&
    (A[4] === ':' || (A[4] === 's' && A[5] === ':'))
  );
}
function yS0(A) {
  if (typeof A === 'string') {
    if (((A = new URL(A)), !VY1(A.origin || A.protocol)))
      throw new YI('Invalid URL protocol: the URL must start with `http:` or `https:`.');
    return A;
  }
  if (!A || typeof A !== 'object')
    throw new YI('Invalid URL: The URL argument must be a non-null object.');
  if (!(A instanceof URL)) {
    if (A.port != null && A.port !== '' && jS0(A.port) === !1)
      throw new YI(
        'Invalid URL: port must be a valid integer or a string representation of an integer.'
      );
    if (A.path != null && typeof A.path !== 'string')
      throw new YI('Invalid URL path: the path must be a string or null/undefined.');
    if (A.pathname != null && typeof A.pathname !== 'string')
      throw new YI('Invalid URL pathname: the pathname must be a string or null/undefined.');
    if (A.hostname != null && typeof A.hostname !== 'string')
      throw new YI('Invalid URL hostname: the hostname must be a string or null/undefined.');
    if (A.origin != null && typeof A.origin !== 'string')
      throw new YI('Invalid URL origin: the origin must be a string or null/undefined.');
    if (!VY1(A.origin || A.protocol))
      throw new YI('Invalid URL protocol: the URL must start with `http:` or `https:`.');
    let B = A.port != null ? A.port : A.protocol === 'https:' ? 443 : 80,
      Q = A.origin != null ? A.origin : `${A.protocol || ''}//${A.hostname || ''}:${B}`,
      I = A.path != null ? A.path : `${A.pathname || ''}${A.search || ''}`;
    if (Q[Q.length - 1] === '/') Q = Q.slice(0, Q.length - 1);
    if (I && I[0] !== '/') I = `/${I}`;
    return new URL(`${Q}${I}`);
  }
  if (!VY1(A.origin || A.protocol))
    throw new YI('Invalid URL protocol: the URL must start with `http:` or `https:`.');
  return A;
}
function c46(A) {
  if (((A = yS0(A)), A.pathname !== '/' || A.search || A.hash)) throw new YI('invalid url');
  return A;
}
function l46(A) {
  if (A[0] === '[') {
    let Q = A.indexOf(']');
    return (ws(Q !== -1), A.substring(1, Q));
  }
  let B = A.indexOf(':');
  if (B === -1) return A;
  return A.substring(0, B);
}
function i46(A) {
  if (!A) return null;
  ws(typeof A === 'string');
  let B = l46(A);
  if (k46.isIP(B)) return '';
  return B;
}
function n46(A) {
  return JSON.parse(JSON.stringify(A));
}
function a46(A) {
  return A != null && typeof A[Symbol.asyncIterator] === 'function';
}
function kS0(A) {
  return (
    A != null &&
    (typeof A[Symbol.iterator] === 'function' || typeof A[Symbol.asyncIterator] === 'function')
  );
}
function xS0(A) {
  if (A == null) return 0;
  else if (HY1(A)) {
    let B = A._readableState;
    return B && B.objectMode === !1 && B.ended === !0 && Number.isFinite(B.length)
      ? B.length
      : null;
  } else if (_S0(A)) return A.size != null ? A.size : null;
  else if (bS0(A)) return A.byteLength;
  return null;
}
function fS0(A) {
  return A && !!(A.destroyed || A[PS0] || KY1.isDestroyed?.(A));
}
function s46(A, B) {
  if (A == null || !HY1(A) || fS0(A)) return;
  if (typeof A.destroy === 'function') {
    if (Object.getPrototypeOf(A).constructor === y46) A.socket = null;
    A.destroy(B);
  } else if (B)
    queueMicrotask(() => {
      A.emit('error', B);
    });
  if (A.destroyed !== !0) A[PS0] = !0;
}
var r46 = /timeout=(\d+)/;
function o46(A) {
  let B = A.toString().match(r46);
  return B ? parseInt(B[1], 10) * 1000 : null;
}
function vS0(A) {
  return typeof A === 'string'
    ? (g46[A] ?? A.toLowerCase())
    : (SS0.lookup(A) ?? A.toString('latin1').toLowerCase());
}
function t46(A) {
  return SS0.lookup(A) ?? A.toString('latin1').toLowerCase();
}
function e46(A, B) {
  if (B === void 0) B = {};
  for (let Q = 0; Q < A.length; Q += 2) {
    let I = vS0(A[Q]),
      G = B[I];
    if (G) {
      if (typeof G === 'string') ((G = [G]), (B[I] = G));
      G.push(A[Q + 1].toString('utf8'));
    } else {
      let D = A[Q + 1];
      if (typeof D === 'string') B[I] = D;
      else B[I] = Array.isArray(D) ? D.map((Z) => Z.toString('utf8')) : D.toString('utf8');
    }
  }
  if ('content-length' in B && 'content-disposition' in B)
    B['content-disposition'] = Buffer.from(B['content-disposition']).toString('latin1');
  return B;
}
function A66(A) {
  let B = A.length,
    Q = new Array(B),
    I = !1,
    G = -1,
    D,
    Z,
    Y = 0;
  for (let W = 0; W < A.length; W += 2) {
    if (
      ((D = A[W]),
      (Z = A[W + 1]),
      typeof D !== 'string' && (D = D.toString()),
      typeof Z !== 'string' && (Z = Z.toString('utf8')),
      (Y = D.length),
      Y === 14 && D[7] === '-' && (D === 'content-length' || D.toLowerCase() === 'content-length'))
    )
      I = !0;
    else if (
      Y === 19 &&
      D[7] === '-' &&
      (D === 'content-disposition' || D.toLowerCase() === 'content-disposition')
    )
      G = W + 1;
    ((Q[W] = D), (Q[W + 1] = Z));
  }
  if (I && G !== -1) Q[G] = Buffer.from(Q[G]).toString('latin1');
  return Q;
}
function bS0(A) {
  return A instanceof Uint8Array || Buffer.isBuffer(A);
}
function B66(A, B, Q) {
  if (!A || typeof A !== 'object') throw new YI('handler must be an object');
  if (typeof A.onConnect !== 'function') throw new YI('invalid onConnect method');
  if (typeof A.onError !== 'function') throw new YI('invalid onError method');
  if (typeof A.onBodySent !== 'function' && A.onBodySent !== void 0)
    throw new YI('invalid onBodySent method');
  if (Q || B === 'CONNECT') {
    if (typeof A.onUpgrade !== 'function') throw new YI('invalid onUpgrade method');
  } else {
    if (typeof A.onHeaders !== 'function') throw new YI('invalid onHeaders method');
    if (typeof A.onData !== 'function') throw new YI('invalid onData method');
    if (typeof A.onComplete !== 'function') throw new YI('invalid onComplete method');
  }
}
function Q66(A) {
  return !!(A && (KY1.isDisturbed(A) || A[jg]));
}
function I66(A) {
  return !!(A && KY1.isErrored(A));
}
function G66(A) {
  return !!(A && KY1.isReadable(A));
}
function D66(A) {
  return {
    localAddress: A.localAddress,
    localPort: A.localPort,
    remoteAddress: A.remoteAddress,
    remotePort: A.remotePort,
    remoteFamily: A.remoteFamily,
    timeout: A.timeout,
    bytesWritten: A.bytesWritten,
    bytesRead: A.bytesRead,
  };
}
function Z66(A) {
  let B;
  return new ReadableStream({
    async start() {
      B = A[Symbol.asyncIterator]();
    },
    async pull(Q) {
      let { done: I, value: G } = await B.next();
      if (I)
        queueMicrotask(() => {
          (Q.close(), Q.byobRequest?.respond(0));
        });
      else {
        let D = Buffer.isBuffer(G) ? G : Buffer.from(G);
        if (D.byteLength) Q.enqueue(new Uint8Array(D));
      }
      return Q.desiredSize > 0;
    },
    async cancel(Q) {
      await B.return();
    },
    type: 'bytes',
  });
}
function Y66(A) {
  return (
    A &&
    typeof A === 'object' &&
    typeof A.append === 'function' &&
    typeof A.delete === 'function' &&
    typeof A.get === 'function' &&
    typeof A.getAll === 'function' &&
    typeof A.has === 'function' &&
    typeof A.set === 'function' &&
    A[Symbol.toStringTag] === 'FormData'
  );
}
function W66(A, B) {
  if ('addEventListener' in A)
    return (A.addEventListener('abort', B, { once: !0 }), () => A.removeEventListener('abort', B));
  return (A.addListener('abort', B), () => A.removeListener('abort', B));
}
var F66 = typeof String.prototype.toWellFormed === 'function',
  J66 = typeof String.prototype.isWellFormed === 'function';
function gS0(A) {
  return F66 ? `${A}`.toWellFormed() : f46.toUSVString(A);
}
function C66(A) {
  return J66 ? `${A}`.isWellFormed() : gS0(A) === `${A}`;
}
function hS0(A) {
  switch (A) {
    case 34:
    case 40:
    case 41:
    case 44:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 123:
    case 125:
      return !1;
    default:
      return A >= 33 && A <= 126;
  }
}
function X66(A) {
  if (A.length === 0) return !1;
  for (let B = 0; B < A.length; ++B) if (!hS0(A.charCodeAt(B))) return !1;
  return !0;
}
var V66 = /[^\t\x20-\x7e\x80-\xff]/;
function K66(A) {
  return !V66.test(A);
}
function H66(A) {
  if (A == null || A === '') return { start: 0, end: null, size: null };
  let B = A ? A.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
  return B
    ? {
        start: parseInt(B[1]),
        end: B[2] ? parseInt(B[2]) : null,
        size: B[3] ? parseInt(B[3]) : null,
      }
    : null;
}
function z66(A, B, Q) {
  return ((A[gh1] ??= []).push([B, Q]), A.on(B, Q), A);
}
function w66(A) {
  for (let [B, Q] of A[gh1] ?? []) A.removeListener(B, Q);
  A[gh1] = null;
}
function E66(A, B, Q) {
  try {
    (B.onError(Q), ws(B.aborted));
  } catch (I) {
    A.emit('error', I);
  }
}
var mS0 = Object.create(null);
mS0.enumerable = !0;
var mh1 = {
    delete: 'DELETE',
    DELETE: 'DELETE',
    get: 'GET',
    GET: 'GET',
    head: 'HEAD',
    HEAD: 'HEAD',
    options: 'OPTIONS',
    OPTIONS: 'OPTIONS',
    post: 'POST',
    POST: 'POST',
    put: 'PUT',
    PUT: 'PUT',
  },
  dS0 = { ...mh1, patch: 'patch', PATCH: 'PATCH' };
Object.setPrototypeOf(mh1, null);
Object.setPrototypeOf(dS0, null);
uS0.exports = {
  kEnumerableProperty: mS0,
  nop: u46,
  isDisturbed: Q66,
  isErrored: I66,
  isReadable: G66,
  toUSVString: gS0,
  isUSVString: C66,
  isBlobLike: _S0,
  parseOrigin: c46,
  parseURL: yS0,
  getServerName: i46,
  isStream: HY1,
  isIterable: kS0,
  isAsyncIterable: a46,
  isDestroyed: fS0,
  headerNameToString: vS0,
  bufferToLowerCasedHeaderName: t46,
  addListener: z66,
  removeAllListeners: w66,
  errorRequest: E66,
  parseRawHeaders: A66,
  parseHeaders: e46,
  parseKeepAliveTimeout: o46,
  destroy: s46,
  bodyLength: xS0,
  deepClone: n46,
  ReadableStreamFrom: Z66,
  isBuffer: bS0,
  validateHandler: B66,
  getSocketInfo: D66,
  isFormDataLike: Y66,
  buildURL: p46,
  addAbortListener: W66,
  isValidHTTPToken: X66,
  isValidHeaderValue: K66,
  isTokenCharCode: hS0,
  parseRangeHeader: H66,
  normalizedMethodRecordsBase: mh1,
  normalizedMethodRecords: dS0,
  isValidPort: jS0,
  isHttpOrHttpsPrefixed: VY1,
  nodeMajor: h46,
  nodeMinor: m46,
  safeHTTPMethods: ['GET', 'HEAD', 'OPTIONS', 'TRACE'],
  wrapRequestBody: d46,
};
