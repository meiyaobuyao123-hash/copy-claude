// Module: pY1
// Params: OV8,Iy0

var bz = I6(),
  { kBodyUsed: ys } = uB(),
  km1 = D1('node:assert'),
  { InvalidArgumentError: E36 } = y5(),
  U36 = D1('node:events'),
  N36 = [300, 301, 302, 303, 307, 308],
  Ay0 = Symbol('body');
class ym1 {
  constructor(A) {
    ((this[Ay0] = A), (this[ys] = !1));
  }
  async *[Symbol.asyncIterator]() {
    (km1(!this[ys], 'disturbed'), (this[ys] = !0), yield* this[Ay0]);
  }
}
class Qy0 {
  constructor(A, B, Q, I) {
    if (B != null && (!Number.isInteger(B) || B < 0))
      throw new E36('maxRedirections must be a positive number');
    if (
      (bz.validateHandler(I, Q.method, Q.upgrade),
      (this.dispatch = A),
      (this.location = null),
      (this.abort = null),
      (this.opts = { ...Q, maxRedirections: 0 }),
      (this.maxRedirections = B),
      (this.handler = I),
      (this.history = []),
      (this.redirectionLimitReached = !1),
      bz.isStream(this.opts.body))
    ) {
      if (bz.bodyLength(this.opts.body) === 0)
        this.opts.body.on('data', function () {
          km1(!1);
        });
      if (typeof this.opts.body.readableDidRead !== 'boolean')
        ((this.opts.body[ys] = !1),
          U36.prototype.on.call(this.opts.body, 'data', function () {
            this[ys] = !0;
          }));
    } else if (this.opts.body && typeof this.opts.body.pipeTo === 'function')
      this.opts.body = new ym1(this.opts.body);
    else if (
      this.opts.body &&
      typeof this.opts.body !== 'string' &&
      !ArrayBuffer.isView(this.opts.body) &&
      bz.isIterable(this.opts.body)
    )
      this.opts.body = new ym1(this.opts.body);
  }
  onConnect(A) {
    ((this.abort = A), this.handler.onConnect(A, { history: this.history }));
  }
  onUpgrade(A, B, Q) {
    this.handler.onUpgrade(A, B, Q);
  }
  onError(A) {
    this.handler.onError(A);
  }
  onHeaders(A, B, Q, I) {
    if (
      ((this.location =
        this.history.length >= this.maxRedirections || bz.isDisturbed(this.opts.body)
          ? null
          : $36(A, B)),
      this.opts.throwOnMaxRedirect && this.history.length >= this.maxRedirections)
    ) {
      if (this.request) this.request.abort(new Error('max redirects'));
      ((this.redirectionLimitReached = !0), this.abort(new Error('max redirects')));
      return;
    }
    if (this.opts.origin) this.history.push(new URL(this.opts.path, this.opts.origin));
    if (!this.location) return this.handler.onHeaders(A, B, Q, I);
    let {
        origin: G,
        pathname: D,
        search: Z,
      } = bz.parseURL(
        new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))
      ),
      Y = Z ? `${D}${Z}` : D;
    if (
      ((this.opts.headers = q36(this.opts.headers, A === 303, this.opts.origin !== G)),
      (this.opts.path = Y),
      (this.opts.origin = G),
      (this.opts.maxRedirections = 0),
      (this.opts.query = null),
      A === 303 && this.opts.method !== 'HEAD')
    )
      ((this.opts.method = 'GET'), (this.opts.body = null));
  }
  onData(A) {
    if (this.location);
    else return this.handler.onData(A);
  }
  onComplete(A) {
    if (this.location)
      ((this.location = null), (this.abort = null), this.dispatch(this.opts, this));
    else this.handler.onComplete(A);
  }
  onBodySent(A) {
    if (this.handler.onBodySent) this.handler.onBodySent(A);
  }
}
function $36(A, B) {
  if (N36.indexOf(A) === -1) return null;
  for (let Q = 0; Q < B.length; Q += 2)
    if (B[Q].length === 8 && bz.headerNameToString(B[Q]) === 'location') return B[Q + 1];
}
function By0(A, B, Q) {
  if (A.length === 4) return bz.headerNameToString(A) === 'host';
  if (B && bz.headerNameToString(A).startsWith('content-')) return !0;
  if (Q && (A.length === 13 || A.length === 6 || A.length === 19)) {
    let I = bz.headerNameToString(A);
    return I === 'authorization' || I === 'cookie' || I === 'proxy-authorization';
  }
  return !1;
}
function q36(A, B, Q) {
  let I = [];
  if (Array.isArray(A)) {
    for (let G = 0; G < A.length; G += 2) if (!By0(A[G], B, Q)) I.push(A[G], A[G + 1]);
  } else if (A && typeof A === 'object') {
    for (let G of Object.keys(A)) if (!By0(G, B, Q)) I.push(G, A[G]);
  } else km1(A == null, 'headers must be an object or an array');
  return I;
}
Iy0.exports = Qy0;
