// Module: rS0
// Params: DV8,sS0

var { InvalidArgumentError: J3, NotSupportedError: N66 } = y5(),
  sU = D1('node:assert'),
  {
    isValidHTTPToken: nS0,
    isValidHeaderValue: lS0,
    isStream: $66,
    destroy: q66,
    isBuffer: M66,
    isFormDataLike: L66,
    isIterable: R66,
    isBlobLike: O66,
    buildURL: T66,
    validateHandler: P66,
    getServerName: S66,
    normalizedMethodRecords: _66,
  } = I6(),
  { channels: Sz } = yg(),
  { headerNameLowerCasedRecord: iS0 } = XY1(),
  j66 = /[^\u0021-\u00ff]/,
  AC = Symbol('handler');
class aS0 {
  constructor(
    A,
    {
      path: B,
      method: Q,
      body: I,
      headers: G,
      query: D,
      idempotent: Z,
      blocking: Y,
      upgrade: W,
      headersTimeout: F,
      bodyTimeout: J,
      reset: C,
      throwOnError: X,
      expectContinue: V,
      servername: K,
    },
    U
  ) {
    if (typeof B !== 'string') throw new J3('path must be a string');
    else if (
      B[0] !== '/' &&
      !(B.startsWith('http://') || B.startsWith('https://')) &&
      Q !== 'CONNECT'
    )
      throw new J3('path must be an absolute URL or start with a slash');
    else if (j66.test(B)) throw new J3('invalid request path');
    if (typeof Q !== 'string') throw new J3('method must be a string');
    else if (_66[Q] === void 0 && !nS0(Q)) throw new J3('invalid request method');
    if (W && typeof W !== 'string') throw new J3('upgrade must be a string');
    if (F != null && (!Number.isFinite(F) || F < 0)) throw new J3('invalid headersTimeout');
    if (J != null && (!Number.isFinite(J) || J < 0)) throw new J3('invalid bodyTimeout');
    if (C != null && typeof C !== 'boolean') throw new J3('invalid reset');
    if (V != null && typeof V !== 'boolean') throw new J3('invalid expectContinue');
    if (
      ((this.headersTimeout = F),
      (this.bodyTimeout = J),
      (this.throwOnError = X === !0),
      (this.method = Q),
      (this.abort = null),
      I == null)
    )
      this.body = null;
    else if ($66(I)) {
      this.body = I;
      let N = this.body._readableState;
      if (!N || !N.autoDestroy)
        ((this.endHandler = function q() {
          q66(this);
        }),
          this.body.on('end', this.endHandler));
      ((this.errorHandler = (q) => {
        if (this.abort) this.abort(q);
        else this.error = q;
      }),
        this.body.on('error', this.errorHandler));
    } else if (M66(I)) this.body = I.byteLength ? I : null;
    else if (ArrayBuffer.isView(I))
      this.body = I.buffer.byteLength ? Buffer.from(I.buffer, I.byteOffset, I.byteLength) : null;
    else if (I instanceof ArrayBuffer) this.body = I.byteLength ? Buffer.from(I) : null;
    else if (typeof I === 'string') this.body = I.length ? Buffer.from(I) : null;
    else if (L66(I) || R66(I) || O66(I)) this.body = I;
    else
      throw new J3(
        'body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable'
      );
    if (
      ((this.completed = !1),
      (this.aborted = !1),
      (this.upgrade = W || null),
      (this.path = D ? T66(B, D) : B),
      (this.origin = A),
      (this.idempotent = Z == null ? Q === 'HEAD' || Q === 'GET' : Z),
      (this.blocking = Y == null ? !1 : Y),
      (this.reset = C == null ? null : C),
      (this.host = null),
      (this.contentLength = null),
      (this.contentType = null),
      (this.headers = []),
      (this.expectContinue = V != null ? V : !1),
      Array.isArray(G))
    ) {
      if (G.length % 2 !== 0) throw new J3('headers array must be even');
      for (let N = 0; N < G.length; N += 2) wY1(this, G[N], G[N + 1]);
    } else if (G && typeof G === 'object')
      if (G[Symbol.iterator])
        for (let N of G) {
          if (!Array.isArray(N) || N.length !== 2)
            throw new J3('headers must be in key-value pair format');
          wY1(this, N[0], N[1]);
        }
      else {
        let N = Object.keys(G);
        for (let q = 0; q < N.length; ++q) wY1(this, N[q], G[N[q]]);
      }
    else if (G != null) throw new J3('headers must be an object or an array');
    if (
      (P66(U, Q, W),
      (this.servername = K || S66(this.host)),
      (this[AC] = U),
      Sz.create.hasSubscribers)
    )
      Sz.create.publish({ request: this });
  }
  onBodySent(A) {
    if (this[AC].onBodySent)
      try {
        return this[AC].onBodySent(A);
      } catch (B) {
        this.abort(B);
      }
  }
  onRequestSent() {
    if (Sz.bodySent.hasSubscribers) Sz.bodySent.publish({ request: this });
    if (this[AC].onRequestSent)
      try {
        return this[AC].onRequestSent();
      } catch (A) {
        this.abort(A);
      }
  }
  onConnect(A) {
    if ((sU(!this.aborted), sU(!this.completed), this.error)) A(this.error);
    else return ((this.abort = A), this[AC].onConnect(A));
  }
  onResponseStarted() {
    return this[AC].onResponseStarted?.();
  }
  onHeaders(A, B, Q, I) {
    if ((sU(!this.aborted), sU(!this.completed), Sz.headers.hasSubscribers))
      Sz.headers.publish({ request: this, response: { statusCode: A, headers: B, statusText: I } });
    try {
      return this[AC].onHeaders(A, B, Q, I);
    } catch (G) {
      this.abort(G);
    }
  }
  onData(A) {
    (sU(!this.aborted), sU(!this.completed));
    try {
      return this[AC].onData(A);
    } catch (B) {
      return (this.abort(B), !1);
    }
  }
  onUpgrade(A, B, Q) {
    return (sU(!this.aborted), sU(!this.completed), this[AC].onUpgrade(A, B, Q));
  }
  onComplete(A) {
    if ((this.onFinally(), sU(!this.aborted), (this.completed = !0), Sz.trailers.hasSubscribers))
      Sz.trailers.publish({ request: this, trailers: A });
    try {
      return this[AC].onComplete(A);
    } catch (B) {
      this.onError(B);
    }
  }
  onError(A) {
    if ((this.onFinally(), Sz.error.hasSubscribers)) Sz.error.publish({ request: this, error: A });
    if (this.aborted) return;
    return ((this.aborted = !0), this[AC].onError(A));
  }
  onFinally() {
    if (this.errorHandler) (this.body.off('error', this.errorHandler), (this.errorHandler = null));
    if (this.endHandler) (this.body.off('end', this.endHandler), (this.endHandler = null));
  }
  addHeader(A, B) {
    return (wY1(this, A, B), this);
  }
}
function wY1(A, B, Q) {
  if (Q && typeof Q === 'object' && !Array.isArray(Q)) throw new J3(`invalid ${B} header`);
  else if (Q === void 0) return;
  let I = iS0[B];
  if (I === void 0) {
    if (((I = B.toLowerCase()), iS0[I] === void 0 && !nS0(I))) throw new J3('invalid header key');
  }
  if (Array.isArray(Q)) {
    let G = [];
    for (let D = 0; D < Q.length; D++)
      if (typeof Q[D] === 'string') {
        if (!lS0(Q[D])) throw new J3(`invalid ${B} header`);
        G.push(Q[D]);
      } else if (Q[D] === null) G.push('');
      else if (typeof Q[D] === 'object') throw new J3(`invalid ${B} header`);
      else G.push(`${Q[D]}`);
    Q = G;
  } else if (typeof Q === 'string') {
    if (!lS0(Q)) throw new J3(`invalid ${B} header`);
  } else if (Q === null) Q = '';
  else Q = `${Q}`;
  if (A.host === null && I === 'host') {
    if (typeof Q !== 'string') throw new J3('invalid host header');
    A.host = Q;
  } else if (A.contentLength === null && I === 'content-length') {
    if (((A.contentLength = parseInt(Q, 10)), !Number.isFinite(A.contentLength)))
      throw new J3('invalid content-length header');
  } else if (A.contentType === null && I === 'content-type')
    ((A.contentType = Q), A.headers.push(B, Q));
  else if (I === 'transfer-encoding' || I === 'keep-alive' || I === 'upgrade')
    throw new J3(`invalid ${I} header`);
  else if (I === 'connection') {
    let G = typeof Q === 'string' ? Q.toLowerCase() : null;
    if (G !== 'close' && G !== 'keep-alive') throw new J3('invalid connection header');
    if (G === 'close') A.reset = !0;
  } else if (I === 'expect') throw new N66('expect header not supported');
  else A.headers.push(B, Q);
}
sS0.exports = aS0;
