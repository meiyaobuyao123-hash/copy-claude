// Module: kk0
// Params: dV8,Dd1

var O76 = D1('node:assert'),
  { Readable: T76 } = Qd1(),
  { InvalidArgumentError: Bh, RequestAbortedError: jk0 } = y5(),
  ZF = I6(),
  { getResolveErrorBodyCallback: P76 } = Id1(),
  { AsyncResource: S76 } = D1('node:async_hooks');
class Gd1 extends S76 {
  constructor(A, B) {
    if (!A || typeof A !== 'object') throw new Bh('invalid opts');
    let {
      signal: Q,
      method: I,
      opaque: G,
      body: D,
      onInfo: Z,
      responseHeaders: Y,
      throwOnError: W,
      highWaterMark: F,
    } = A;
    try {
      if (typeof B !== 'function') throw new Bh('invalid callback');
      if (F && (typeof F !== 'number' || F < 0)) throw new Bh('invalid highWaterMark');
      if (Q && typeof Q.on !== 'function' && typeof Q.addEventListener !== 'function')
        throw new Bh('signal must be an EventEmitter or EventTarget');
      if (I === 'CONNECT') throw new Bh('invalid method');
      if (Z && typeof Z !== 'function') throw new Bh('invalid onInfo callback');
      super('UNDICI_REQUEST');
    } catch (J) {
      if (ZF.isStream(D)) ZF.destroy(D.on('error', ZF.nop), J);
      throw J;
    }
    if (
      ((this.method = I),
      (this.responseHeaders = Y || null),
      (this.opaque = G || null),
      (this.callback = B),
      (this.res = null),
      (this.abort = null),
      (this.body = D),
      (this.trailers = {}),
      (this.context = null),
      (this.onInfo = Z || null),
      (this.throwOnError = W),
      (this.highWaterMark = F),
      (this.signal = Q),
      (this.reason = null),
      (this.removeAbortListener = null),
      ZF.isStream(D))
    )
      D.on('error', (J) => {
        this.onError(J);
      });
    if (this.signal)
      if (this.signal.aborted) this.reason = this.signal.reason ?? new jk0();
      else
        this.removeAbortListener = ZF.addAbortListener(this.signal, () => {
          if (((this.reason = this.signal.reason ?? new jk0()), this.res))
            ZF.destroy(this.res.on('error', ZF.nop), this.reason);
          else if (this.abort) this.abort(this.reason);
          if (this.removeAbortListener)
            (this.res?.off('close', this.removeAbortListener),
              this.removeAbortListener(),
              (this.removeAbortListener = null));
        });
  }
  onConnect(A, B) {
    if (this.reason) {
      A(this.reason);
      return;
    }
    (O76(this.callback), (this.abort = A), (this.context = B));
  }
  onHeaders(A, B, Q, I) {
    let {
        callback: G,
        opaque: D,
        abort: Z,
        context: Y,
        responseHeaders: W,
        highWaterMark: F,
      } = this,
      J = W === 'raw' ? ZF.parseRawHeaders(B) : ZF.parseHeaders(B);
    if (A < 200) {
      if (this.onInfo) this.onInfo({ statusCode: A, headers: J });
      return;
    }
    let C = W === 'raw' ? ZF.parseHeaders(B) : J,
      X = C['content-type'],
      V = C['content-length'],
      K = new T76({
        resume: Q,
        abort: Z,
        contentType: X,
        contentLength: this.method !== 'HEAD' && V ? Number(V) : null,
        highWaterMark: F,
      });
    if (this.removeAbortListener) K.on('close', this.removeAbortListener);
    if (((this.callback = null), (this.res = K), G !== null))
      if (this.throwOnError && A >= 400)
        this.runInAsyncScope(P76, null, {
          callback: G,
          body: K,
          contentType: X,
          statusCode: A,
          statusMessage: I,
          headers: J,
        });
      else
        this.runInAsyncScope(G, null, null, {
          statusCode: A,
          headers: J,
          trailers: this.trailers,
          opaque: D,
          body: K,
          context: Y,
        });
  }
  onData(A) {
    return this.res.push(A);
  }
  onComplete(A) {
    (ZF.parseHeaders(A, this.trailers), this.res.push(null));
  }
  onError(A) {
    let { res: B, callback: Q, body: I, opaque: G } = this;
    if (Q)
      ((this.callback = null),
        queueMicrotask(() => {
          this.runInAsyncScope(Q, null, A, { opaque: G });
        }));
    if (B)
      ((this.res = null),
        queueMicrotask(() => {
          ZF.destroy(B, A);
        }));
    if (I) ((this.body = null), ZF.destroy(I, A));
    if (this.removeAbortListener)
      (B?.off('close', this.removeAbortListener),
        this.removeAbortListener(),
        (this.removeAbortListener = null));
  }
}
function yk0(A, B) {
  if (B === void 0)
    return new Promise((Q, I) => {
      yk0.call(this, A, (G, D) => {
        return G ? I(G) : Q(D);
      });
    });
  try {
    this.dispatch(A, new Gd1(A, B));
  } catch (Q) {
    if (typeof B !== 'function') throw Q;
    let I = A?.opaque;
    queueMicrotask(() => B(Q, { opaque: I }));
  }
}
Dd1.exports = yk0;
Dd1.exports.RequestHandler = Gd1;
