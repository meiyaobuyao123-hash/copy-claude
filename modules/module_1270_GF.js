// Module: GF
// Params: EV8,Xj0

var { Transform: b56 } = D1('node:stream'),
  r_0 = D1('node:zlib'),
  { redirectStatusSet: g56, referrerPolicySet: h56, badPortsSet: m56 } = $s(),
  { getGlobalOrigin: o_0 } = Ym1(),
  {
    collectASequenceOfCodePoints: SS,
    collectAnHTTPQuotedString: d56,
    removeChars: u56,
    parseMIMEType: p56,
  } = $Y(),
  { performance: c56 } = D1('node:perf_hooks'),
  {
    isBlobLike: l56,
    ReadableStreamFrom: i56,
    isValidHTTPToken: t_0,
    normalizedMethodRecordsBase: n56,
  } = I6(),
  _S = D1('node:assert'),
  { isUint8Array: a56 } = D1('node:util/types'),
  { webidl: Ms } = WG(),
  e_0 = [],
  OY1;
try {
  OY1 = D1('node:crypto');
  let A = ['sha256', 'sha384', 'sha512'];
  e_0 = OY1.getHashes().filter((B) => A.includes(B));
} catch {}
function Aj0(A) {
  let B = A.urlList,
    Q = B.length;
  return Q === 0 ? null : B[Q - 1].toString();
}
function s56(A, B) {
  if (!g56.has(A.status)) return null;
  let Q = A.headersList.get('location', !0);
  if (Q !== null && Qj0(Q)) {
    if (!Bj0(Q)) Q = r56(Q);
    Q = new URL(Q, Aj0(A));
  }
  if (Q && !Q.hash) Q.hash = B;
  return Q;
}
function Bj0(A) {
  for (let B = 0; B < A.length; ++B) {
    let Q = A.charCodeAt(B);
    if (Q > 126 || Q < 32) return !1;
  }
  return !0;
}
function r56(A) {
  return Buffer.from(A, 'binary').toString('utf8');
}
function Rs(A) {
  return A.urlList[A.urlList.length - 1];
}
function o56(A) {
  let B = Rs(A);
  if (Yj0(B) && m56.has(B.port)) return 'blocked';
  return 'allowed';
}
function t56(A) {
  return (
    A instanceof Error ||
    A?.constructor?.name === 'Error' ||
    A?.constructor?.name === 'DOMException'
  );
}
function e56(A) {
  for (let B = 0; B < A.length; ++B) {
    let Q = A.charCodeAt(B);
    if (!(Q === 9 || (Q >= 32 && Q <= 126) || (Q >= 128 && Q <= 255))) return !1;
  }
  return !0;
}
var A86 = t_0;
function Qj0(A) {
  return (
    (A[0] === '\t' ||
      A[0] === ' ' ||
      A[A.length - 1] === '\t' ||
      A[A.length - 1] === ' ' ||
      A.includes(`
`) ||
      A.includes('\r') ||
      A.includes('\x00')) === !1
  );
}
function B86(A, B) {
  let { headersList: Q } = B,
    I = (Q.get('referrer-policy', !0) ?? '').split(','),
    G = '';
  if (I.length > 0)
    for (let D = I.length; D !== 0; D--) {
      let Z = I[D - 1].trim();
      if (h56.has(Z)) {
        G = Z;
        break;
      }
    }
  if (G !== '') A.referrerPolicy = G;
}
function Q86() {
  return 'allowed';
}
function I86() {
  return 'success';
}
function G86() {
  return 'success';
}
function D86(A) {
  let B = null;
  ((B = A.mode), A.headersList.set('sec-fetch-mode', B, !0));
}
function Z86(A) {
  let B = A.origin;
  if (B === 'client' || B === void 0) return;
  if (A.responseTainting === 'cors' || A.mode === 'websocket')
    A.headersList.append('origin', B, !0);
  else if (A.method !== 'GET' && A.method !== 'HEAD') {
    switch (A.referrerPolicy) {
      case 'no-referrer':
        B = null;
        break;
      case 'no-referrer-when-downgrade':
      case 'strict-origin':
      case 'strict-origin-when-cross-origin':
        if (A.origin && Cm1(A.origin) && !Cm1(Rs(A))) B = null;
        break;
      case 'same-origin':
        if (!TY1(A, Rs(A))) B = null;
        break;
      default:
    }
    A.headersList.append('origin', B, !0);
  }
}
function mg(A, B) {
  return A;
}
function Y86(A, B, Q) {
  if (!A?.startTime || A.startTime < B)
    return {
      domainLookupStartTime: B,
      domainLookupEndTime: B,
      connectionStartTime: B,
      connectionEndTime: B,
      secureConnectionStartTime: B,
      ALPNNegotiatedProtocol: A?.ALPNNegotiatedProtocol,
    };
  return {
    domainLookupStartTime: mg(A.domainLookupStartTime, Q),
    domainLookupEndTime: mg(A.domainLookupEndTime, Q),
    connectionStartTime: mg(A.connectionStartTime, Q),
    connectionEndTime: mg(A.connectionEndTime, Q),
    secureConnectionStartTime: mg(A.secureConnectionStartTime, Q),
    ALPNNegotiatedProtocol: A.ALPNNegotiatedProtocol,
  };
}
function W86(A) {
  return mg(c56.now(), A);
}
function F86(A) {
  return {
    startTime: A.startTime ?? 0,
    redirectStartTime: 0,
    redirectEndTime: 0,
    postRedirectStartTime: A.startTime ?? 0,
    finalServiceWorkerStartTime: 0,
    finalNetworkResponseStartTime: 0,
    finalNetworkRequestStartTime: 0,
    endTime: 0,
    encodedBodySize: 0,
    decodedBodySize: 0,
    finalConnectionTimingInfo: null,
  };
}
function Ij0() {
  return { referrerPolicy: 'strict-origin-when-cross-origin' };
}
function J86(A) {
  return { referrerPolicy: A.referrerPolicy };
}
function C86(A) {
  let B = A.referrerPolicy;
  _S(B);
  let Q = null;
  if (A.referrer === 'client') {
    let Y = o_0();
    if (!Y || Y.origin === 'null') return 'no-referrer';
    Q = new URL(Y);
  } else if (A.referrer instanceof URL) Q = A.referrer;
  let I = Jm1(Q),
    G = Jm1(Q, !0);
  if (I.toString().length > 4096) I = G;
  let D = TY1(A, I),
    Z = Ls(I) && !Ls(A.url);
  switch (B) {
    case 'origin':
      return G != null ? G : Jm1(Q, !0);
    case 'unsafe-url':
      return I;
    case 'same-origin':
      return D ? G : 'no-referrer';
    case 'origin-when-cross-origin':
      return D ? I : G;
    case 'strict-origin-when-cross-origin': {
      let Y = Rs(A);
      if (TY1(I, Y)) return I;
      if (Ls(I) && !Ls(Y)) return 'no-referrer';
      return G;
    }
    case 'strict-origin':
    case 'no-referrer-when-downgrade':
    default:
      return Z ? 'no-referrer' : G;
  }
}
function Jm1(A, B) {
  if (
    (_S(A instanceof URL),
    (A = new URL(A)),
    A.protocol === 'file:' || A.protocol === 'about:' || A.protocol === 'blank:')
  )
    return 'no-referrer';
  if (((A.username = ''), (A.password = ''), (A.hash = ''), B))
    ((A.pathname = ''), (A.search = ''));
  return A;
}
function Ls(A) {
  if (!(A instanceof URL)) return !1;
  if (A.href === 'about:blank' || A.href === 'about:srcdoc') return !0;
  if (A.protocol === 'data:') return !0;
  if (A.protocol === 'file:') return !0;
  return B(A.origin);
  function B(Q) {
    if (Q == null || Q === 'null') return !1;
    let I = new URL(Q);
    if (I.protocol === 'https:' || I.protocol === 'wss:') return !0;
    if (
      /^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(I.hostname) ||
      I.hostname === 'localhost' ||
      I.hostname.includes('localhost.') ||
      I.hostname.endsWith('.localhost')
    )
      return !0;
    return !1;
  }
}
function X86(A, B) {
  if (OY1 === void 0) return !0;
  let Q = Gj0(B);
  if (Q === 'no metadata') return !0;
  if (Q.length === 0) return !0;
  let I = K86(Q),
    G = H86(Q, I);
  for (let D of G) {
    let { algo: Z, hash: Y } = D,
      W = OY1.createHash(Z).update(A).digest('base64');
    if (W[W.length - 1] === '=')
      if (W[W.length - 2] === '=') W = W.slice(0, -2);
      else W = W.slice(0, -1);
    if (z86(W, Y)) return !0;
  }
  return !1;
}
var V86 =
  /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
function Gj0(A) {
  let B = [],
    Q = !0;
  for (let I of A.split(' ')) {
    Q = !1;
    let G = V86.exec(I);
    if (G === null || G.groups === void 0 || G.groups.algo === void 0) continue;
    let D = G.groups.algo.toLowerCase();
    if (e_0.includes(D)) B.push(G.groups);
  }
  if (Q === !0) return 'no metadata';
  return B;
}
function K86(A) {
  let B = A[0].algo;
  if (B[3] === '5') return B;
  for (let Q = 1; Q < A.length; ++Q) {
    let I = A[Q];
    if (I.algo[3] === '5') {
      B = 'sha512';
      break;
    } else if (B[3] === '3') continue;
    else if (I.algo[3] === '3') B = 'sha384';
  }
  return B;
}
function H86(A, B) {
  if (A.length === 1) return A;
  let Q = 0;
  for (let I = 0; I < A.length; ++I) if (A[I].algo === B) A[Q++] = A[I];
  return ((A.length = Q), A);
}
function z86(A, B) {
  if (A.length !== B.length) return !1;
  for (let Q = 0; Q < A.length; ++Q)
    if (A[Q] !== B[Q]) {
      if ((A[Q] === '+' && B[Q] === '-') || (A[Q] === '/' && B[Q] === '_')) continue;
      return !1;
    }
  return !0;
}
function w86(A) {}
function TY1(A, B) {
  if (A.origin === B.origin && A.origin === 'null') return !0;
  if (A.protocol === B.protocol && A.hostname === B.hostname && A.port === B.port) return !0;
  return !1;
}
function E86() {
  let A, B;
  return {
    promise: new Promise((I, G) => {
      ((A = I), (B = G));
    }),
    resolve: A,
    reject: B,
  };
}
function U86(A) {
  return A.controller.state === 'aborted';
}
function N86(A) {
  return A.controller.state === 'aborted' || A.controller.state === 'terminated';
}
function $86(A) {
  return n56[A.toLowerCase()] ?? A;
}
function q86(A) {
  let B = JSON.stringify(A);
  if (B === void 0) throw new TypeError('Value is not JSON serializable');
  return (_S(typeof B === 'string'), B);
}
var M86 = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
function Dj0(A, B, Q = 0, I = 1) {
  class G {
    #A;
    #B;
    #Q;
    constructor(D, Z) {
      ((this.#A = D), (this.#B = Z), (this.#Q = 0));
    }
    next() {
      if (typeof this !== 'object' || this === null || !(#A in this))
        throw new TypeError(
          `'next' called on an object that does not implement interface ${A} Iterator.`
        );
      let D = this.#Q,
        Z = this.#A[B],
        Y = Z.length;
      if (D >= Y) return { value: void 0, done: !0 };
      let { [Q]: W, [I]: F } = Z[D];
      this.#Q = D + 1;
      let J;
      switch (this.#B) {
        case 'key':
          J = W;
          break;
        case 'value':
          J = F;
          break;
        case 'key+value':
          J = [W, F];
          break;
      }
      return { value: J, done: !1 };
    }
  }
  return (
    delete G.prototype.constructor,
    Object.setPrototypeOf(G.prototype, M86),
    Object.defineProperties(G.prototype, {
      [Symbol.toStringTag]: {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: `${A} Iterator`,
      },
      next: { writable: !0, enumerable: !0, configurable: !0 },
    }),
    function (D, Z) {
      return new G(D, Z);
    }
  );
}
function L86(A, B, Q, I = 0, G = 1) {
  let D = Dj0(A, Q, I, G),
    Z = {
      keys: {
        writable: !0,
        enumerable: !0,
        configurable: !0,
        value: function Y() {
          return (Ms.brandCheck(this, B), D(this, 'key'));
        },
      },
      values: {
        writable: !0,
        enumerable: !0,
        configurable: !0,
        value: function Y() {
          return (Ms.brandCheck(this, B), D(this, 'value'));
        },
      },
      entries: {
        writable: !0,
        enumerable: !0,
        configurable: !0,
        value: function Y() {
          return (Ms.brandCheck(this, B), D(this, 'key+value'));
        },
      },
      forEach: {
        writable: !0,
        enumerable: !0,
        configurable: !0,
        value: function Y(W, F = globalThis) {
          if (
            (Ms.brandCheck(this, B),
            Ms.argumentLengthCheck(arguments, 1, `${A}.forEach`),
            typeof W !== 'function')
          )
            throw new TypeError(
              `Failed to execute 'forEach' on '${A}': parameter 1 is not of type 'Function'.`
            );
          for (let { 0: J, 1: C } of D(this, 'key+value')) W.call(F, C, J, this);
        },
      },
    };
  return Object.defineProperties(B.prototype, {
    ...Z,
    [Symbol.iterator]: { writable: !0, enumerable: !1, configurable: !0, value: Z.entries.value },
  });
}
async function R86(A, B, Q) {
  let I = B,
    G = Q,
    D;
  try {
    D = A.stream.getReader();
  } catch (Z) {
    G(Z);
    return;
  }
  try {
    I(await Zj0(D));
  } catch (Z) {
    G(Z);
  }
}
function O86(A) {
  return (
    A instanceof ReadableStream ||
    (A[Symbol.toStringTag] === 'ReadableStream' && typeof A.tee === 'function')
  );
}
function T86(A) {
  try {
    (A.close(), A.byobRequest?.respond(0));
  } catch (B) {
    if (
      !B.message.includes('Controller is already closed') &&
      !B.message.includes('ReadableStream is already closed')
    )
      throw B;
  }
}
var P86 = /[^\x00-\xFF]/;
function RY1(A) {
  return (_S(!P86.test(A)), A);
}
async function Zj0(A) {
  let B = [],
    Q = 0;
  while (!0) {
    let { done: I, value: G } = await A.read();
    if (I) return Buffer.concat(B, Q);
    if (!a56(G)) throw new TypeError('Received non-Uint8Array chunk');
    (B.push(G), (Q += G.length));
  }
}
function S86(A) {
  _S('protocol' in A);
  let B = A.protocol;
  return B === 'about:' || B === 'blob:' || B === 'data:';
}
function Cm1(A) {
  return (
    (typeof A === 'string' &&
      A[5] === ':' &&
      A[0] === 'h' &&
      A[1] === 't' &&
      A[2] === 't' &&
      A[3] === 'p' &&
      A[4] === 's') ||
    A.protocol === 'https:'
  );
}
function Yj0(A) {
  _S('protocol' in A);
  let B = A.protocol;
  return B === 'http:' || B === 'https:';
}
function _86(A, B) {
  let Q = A;
  if (!Q.startsWith('bytes')) return 'failure';
  let I = { position: 5 };
  if (B) SS((W) => W === '\t' || W === ' ', Q, I);
  if (Q.charCodeAt(I.position) !== 61) return 'failure';
  if ((I.position++, B)) SS((W) => W === '\t' || W === ' ', Q, I);
  let G = SS(
      (W) => {
        let F = W.charCodeAt(0);
        return F >= 48 && F <= 57;
      },
      Q,
      I
    ),
    D = G.length ? Number(G) : null;
  if (B) SS((W) => W === '\t' || W === ' ', Q, I);
  if (Q.charCodeAt(I.position) !== 45) return 'failure';
  if ((I.position++, B)) SS((W) => W === '\t' || W === ' ', Q, I);
  let Z = SS(
      (W) => {
        let F = W.charCodeAt(0);
        return F >= 48 && F <= 57;
      },
      Q,
      I
    ),
    Y = Z.length ? Number(Z) : null;
  if (I.position < Q.length) return 'failure';
  if (Y === null && D === null) return 'failure';
  if (D > Y) return 'failure';
  return { rangeStartValue: D, rangeEndValue: Y };
}
function j86(A, B, Q) {
  let I = 'bytes ';
  return ((I += RY1(`${A}`)), (I += '-'), (I += RY1(`${B}`)), (I += '/'), (I += RY1(`${Q}`)), I);
}
class Wj0 extends b56 {
  #A;
  constructor(A) {
    super();
    this.#A = A;
  }
  _transform(A, B, Q) {
    if (!this._inflateStream) {
      if (A.length === 0) {
        Q();
        return;
      }
      ((this._inflateStream =
        (A[0] & 15) === 8 ? r_0.createInflate(this.#A) : r_0.createInflateRaw(this.#A)),
        this._inflateStream.on('data', this.push.bind(this)),
        this._inflateStream.on('end', () => this.push(null)),
        this._inflateStream.on('error', (I) => this.destroy(I)));
    }
    this._inflateStream.write(A, B, Q);
  }
  _final(A) {
    if (this._inflateStream) (this._inflateStream.end(), (this._inflateStream = null));
    A();
  }
}
function y86(A) {
  return new Wj0(A);
}
function k86(A) {
  let B = null,
    Q = null,
    I = null,
    G = Fj0('content-type', A);
  if (G === null) return 'failure';
  for (let D of G) {
    let Z = p56(D);
    if (Z === 'failure' || Z.essence === '*/*') continue;
    if (((I = Z), I.essence !== Q)) {
      if (((B = null), I.parameters.has('charset'))) B = I.parameters.get('charset');
      Q = I.essence;
    } else if (!I.parameters.has('charset') && B !== null) I.parameters.set('charset', B);
  }
  if (I == null) return 'failure';
  return I;
}
function x86(A) {
  let B = A,
    Q = { position: 0 },
    I = [],
    G = '';
  while (Q.position < B.length) {
    if (((G += SS((D) => D !== '"' && D !== ',', B, Q)), Q.position < B.length))
      if (B.charCodeAt(Q.position) === 34) {
        if (((G += d56(B, Q)), Q.position < B.length)) continue;
      } else (_S(B.charCodeAt(Q.position) === 44), Q.position++);
    ((G = u56(G, !0, !0, (D) => D === 9 || D === 32)), I.push(G), (G = ''));
  }
  return I;
}
function Fj0(A, B) {
  let Q = B.get(A, !0);
  if (Q === null) return null;
  return x86(Q);
}
var f86 = new TextDecoder();
function v86(A) {
  if (A.length === 0) return '';
  if (A[0] === 239 && A[1] === 187 && A[2] === 191) A = A.subarray(3);
  return f86.decode(A);
}
class Jj0 {
  get baseUrl() {
    return o_0();
  }
  get origin() {
    return this.baseUrl?.origin;
  }
  policyContainer = Ij0();
}
class Cj0 {
  settingsObject = new Jj0();
}
var b86 = new Cj0();
Xj0.exports = {
  isAborted: U86,
  isCancelled: N86,
  isValidEncodedURL: Bj0,
  createDeferredPromise: E86,
  ReadableStreamFrom: i56,
  tryUpgradeRequestToAPotentiallyTrustworthyURL: w86,
  clampAndCoarsenConnectionTimingInfo: Y86,
  coarsenedSharedCurrentTime: W86,
  determineRequestsReferrer: C86,
  makePolicyContainer: Ij0,
  clonePolicyContainer: J86,
  appendFetchMetadata: D86,
  appendRequestOriginHeader: Z86,
  TAOCheck: G86,
  corsCheck: I86,
  crossOriginResourcePolicyCheck: Q86,
  createOpaqueTimingInfo: F86,
  setRequestReferrerPolicyOnRedirect: B86,
  isValidHTTPToken: t_0,
  requestBadPort: o56,
  requestCurrentURL: Rs,
  responseURL: Aj0,
  responseLocationURL: s56,
  isBlobLike: l56,
  isURLPotentiallyTrustworthy: Ls,
  isValidReasonPhrase: e56,
  sameOrigin: TY1,
  normalizeMethod: $86,
  serializeJavascriptValueToJSONString: q86,
  iteratorMixin: L86,
  createIterator: Dj0,
  isValidHeaderName: A86,
  isValidHeaderValue: Qj0,
  isErrorLike: t56,
  fullyReadBody: R86,
  bytesMatch: X86,
  isReadableStreamLike: O86,
  readableStreamClose: T86,
  isomorphicEncode: RY1,
  urlIsLocal: S86,
  urlHasHttpsScheme: Cm1,
  urlIsHttpHttpsScheme: Yj0,
  readAllBytes: Zj0,
  simpleRangeHeaderValue: _86,
  buildContentRange: j86,
  parseMetadata: Gj0,
  createInflate: y86,
  extractMimeType: k86,
  getDecodeSplit: Fj0,
  utf8DecodeBytes: v86,
  environmentSettingsObject: b86,
};
