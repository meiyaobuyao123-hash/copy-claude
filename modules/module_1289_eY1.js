// Module: eY1
// Params: bV8,Xk0

var Ah = D1('node:assert'),
  { kRetryHandlerDefaultRetry: Fk0 } = uB(),
  { RequestRetryError: is } = y5(),
  { isDisturbed: Jk0, parseHeaders: C76, parseRangeHeader: Ck0, wrapRequestBody: X76 } = I6();
function V76(A) {
  let B = Date.now();
  return new Date(A).getTime() - B;
}
class om1 {
  constructor(A, B) {
    let { retryOptions: Q, ...I } = A,
      {
        retry: G,
        maxRetries: D,
        maxTimeout: Z,
        minTimeout: Y,
        timeoutFactor: W,
        methods: F,
        errorCodes: J,
        retryAfter: C,
        statusCodes: X,
      } = Q ?? {};
    ((this.dispatch = B.dispatch),
      (this.handler = B.handler),
      (this.opts = { ...I, body: X76(A.body) }),
      (this.abort = null),
      (this.aborted = !1),
      (this.retryOpts = {
        retry: G ?? om1[Fk0],
        retryAfter: C ?? !0,
        maxTimeout: Z ?? 30000,
        minTimeout: Y ?? 500,
        timeoutFactor: W ?? 2,
        maxRetries: D ?? 5,
        methods: F ?? ['GET', 'HEAD', 'OPTIONS', 'PUT', 'DELETE', 'TRACE'],
        statusCodes: X ?? [500, 502, 503, 504, 429],
        errorCodes: J ?? [
          'ECONNRESET',
          'ECONNREFUSED',
          'ENOTFOUND',
          'ENETDOWN',
          'ENETUNREACH',
          'EHOSTDOWN',
          'EHOSTUNREACH',
          'EPIPE',
          'UND_ERR_SOCKET',
        ],
      }),
      (this.retryCount = 0),
      (this.retryCountCheckpoint = 0),
      (this.start = 0),
      (this.end = null),
      (this.etag = null),
      (this.resume = null),
      this.handler.onConnect((V) => {
        if (((this.aborted = !0), this.abort)) this.abort(V);
        else this.reason = V;
      }));
  }
  onRequestSent() {
    if (this.handler.onRequestSent) this.handler.onRequestSent();
  }
  onUpgrade(A, B, Q) {
    if (this.handler.onUpgrade) this.handler.onUpgrade(A, B, Q);
  }
  onConnect(A) {
    if (this.aborted) A(this.reason);
    else this.abort = A;
  }
  onBodySent(A) {
    if (this.handler.onBodySent) return this.handler.onBodySent(A);
  }
  static [Fk0](A, { state: B, opts: Q }, I) {
    let { statusCode: G, code: D, headers: Z } = A,
      { method: Y, retryOptions: W } = Q,
      {
        maxRetries: F,
        minTimeout: J,
        maxTimeout: C,
        timeoutFactor: X,
        statusCodes: V,
        errorCodes: K,
        methods: U,
      } = W,
      { counter: N } = B;
    if (D && D !== 'UND_ERR_REQ_RETRY' && !K.includes(D)) {
      I(A);
      return;
    }
    if (Array.isArray(U) && !U.includes(Y)) {
      I(A);
      return;
    }
    if (G != null && Array.isArray(V) && !V.includes(G)) {
      I(A);
      return;
    }
    if (N > F) {
      I(A);
      return;
    }
    let q = Z?.['retry-after'];
    if (q) ((q = Number(q)), (q = Number.isNaN(q) ? V76(q) : q * 1000));
    let M = q > 0 ? Math.min(q, C) : Math.min(J * X ** (N - 1), C);
    setTimeout(() => I(null), M);
  }
  onHeaders(A, B, Q, I) {
    let G = C76(B);
    if (((this.retryCount += 1), A >= 300))
      if (this.retryOpts.statusCodes.includes(A) === !1) return this.handler.onHeaders(A, B, Q, I);
      else
        return (
          this.abort(new is('Request failed', A, { headers: G, data: { count: this.retryCount } })),
          !1
        );
    if (this.resume != null) {
      if (((this.resume = null), A !== 206 && (this.start > 0 || A !== 200)))
        return (
          this.abort(
            new is(
              'server does not support the range header and the payload was partially consumed',
              A,
              { headers: G, data: { count: this.retryCount } }
            )
          ),
          !1
        );
      let Z = Ck0(G['content-range']);
      if (!Z)
        return (
          this.abort(
            new is('Content-Range mismatch', A, { headers: G, data: { count: this.retryCount } })
          ),
          !1
        );
      if (this.etag != null && this.etag !== G.etag)
        return (
          this.abort(new is('ETag mismatch', A, { headers: G, data: { count: this.retryCount } })),
          !1
        );
      let { start: Y, size: W, end: F = W - 1 } = Z;
      return (
        Ah(this.start === Y, 'content-range mismatch'),
        Ah(this.end == null || this.end === F, 'content-range mismatch'),
        (this.resume = Q),
        !0
      );
    }
    if (this.end == null) {
      if (A === 206) {
        let Z = Ck0(G['content-range']);
        if (Z == null) return this.handler.onHeaders(A, B, Q, I);
        let { start: Y, size: W, end: F = W - 1 } = Z;
        (Ah(Y != null && Number.isFinite(Y), 'content-range mismatch'),
          Ah(F != null && Number.isFinite(F), 'invalid content-length'),
          (this.start = Y),
          (this.end = F));
      }
      if (this.end == null) {
        let Z = G['content-length'];
        this.end = Z != null ? Number(Z) - 1 : null;
      }
      if (
        (Ah(Number.isFinite(this.start)),
        Ah(this.end == null || Number.isFinite(this.end), 'invalid content-length'),
        (this.resume = Q),
        (this.etag = G.etag != null ? G.etag : null),
        this.etag != null && this.etag.startsWith('W/'))
      )
        this.etag = null;
      return this.handler.onHeaders(A, B, Q, I);
    }
    let D = new is('Request failed', A, { headers: G, data: { count: this.retryCount } });
    return (this.abort(D), !1);
  }
  onData(A) {
    return ((this.start += A.length), this.handler.onData(A));
  }
  onComplete(A) {
    return ((this.retryCount = 0), this.handler.onComplete(A));
  }
  onError(A) {
    if (this.aborted || Jk0(this.opts.body)) return this.handler.onError(A);
    if (this.retryCount - this.retryCountCheckpoint > 0)
      this.retryCount = this.retryCountCheckpoint + (this.retryCount - this.retryCountCheckpoint);
    else this.retryCount += 1;
    this.retryOpts.retry(
      A,
      { state: { counter: this.retryCount }, opts: { retryOptions: this.retryOpts, ...this.opts } },
      B.bind(this)
    );
    function B(Q) {
      if (Q != null || this.aborted || Jk0(this.opts.body)) return this.handler.onError(Q);
      if (this.start !== 0) {
        let I = { range: `bytes=${this.start}-${this.end ?? ''}` };
        if (this.etag != null) I['if-match'] = this.etag;
        this.opts = { ...this.opts, headers: { ...this.opts.headers, ...I } };
      }
      try {
        ((this.retryCountCheckpoint = this.retryCount), this.dispatch(this.opts, this));
      } catch (I) {
        this.handler.onError(I);
      }
    }
  }
}
Xk0.exports = om1;
