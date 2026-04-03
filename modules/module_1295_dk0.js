// Module: dk0
// Params: pV8,mk0

var k76 = D1('node:assert'),
  { finished: x76, PassThrough: f76 } = D1('node:stream'),
  { InvalidArgumentError: Ih, InvalidReturnValueError: v76 } = y5(),
  jV = I6(),
  { getResolveErrorBodyCallback: b76 } = Id1(),
  { AsyncResource: g76 } = D1('node:async_hooks'),
  { addSignal: h76, removeSignal: bk0 } = ss();
class gk0 extends g76 {
  constructor(A, B, Q) {
    if (!A || typeof A !== 'object') throw new Ih('invalid opts');
    let {
      signal: I,
      method: G,
      opaque: D,
      body: Z,
      onInfo: Y,
      responseHeaders: W,
      throwOnError: F,
    } = A;
    try {
      if (typeof Q !== 'function') throw new Ih('invalid callback');
      if (typeof B !== 'function') throw new Ih('invalid factory');
      if (I && typeof I.on !== 'function' && typeof I.addEventListener !== 'function')
        throw new Ih('signal must be an EventEmitter or EventTarget');
      if (G === 'CONNECT') throw new Ih('invalid method');
      if (Y && typeof Y !== 'function') throw new Ih('invalid onInfo callback');
      super('UNDICI_STREAM');
    } catch (J) {
      if (jV.isStream(Z)) jV.destroy(Z.on('error', jV.nop), J);
      throw J;
    }
    if (
      ((this.responseHeaders = W || null),
      (this.opaque = D || null),
      (this.factory = B),
      (this.callback = Q),
      (this.res = null),
      (this.abort = null),
      (this.context = null),
      (this.trailers = null),
      (this.body = Z),
      (this.onInfo = Y || null),
      (this.throwOnError = F || !1),
      jV.isStream(Z))
    )
      Z.on('error', (J) => {
        this.onError(J);
      });
    h76(this, I);
  }
  onConnect(A, B) {
    if (this.reason) {
      A(this.reason);
      return;
    }
    (k76(this.callback), (this.abort = A), (this.context = B));
  }
  onHeaders(A, B, Q, I) {
    let { factory: G, opaque: D, context: Z, callback: Y, responseHeaders: W } = this,
      F = W === 'raw' ? jV.parseRawHeaders(B) : jV.parseHeaders(B);
    if (A < 200) {
      if (this.onInfo) this.onInfo({ statusCode: A, headers: F });
      return;
    }
    this.factory = null;
    let J;
    if (this.throwOnError && A >= 400) {
      let V = (W === 'raw' ? jV.parseHeaders(B) : F)['content-type'];
      ((J = new f76()),
        (this.callback = null),
        this.runInAsyncScope(b76, null, {
          callback: Y,
          body: J,
          contentType: V,
          statusCode: A,
          statusMessage: I,
          headers: F,
        }));
    } else {
      if (G === null) return;
      if (
        ((J = this.runInAsyncScope(G, null, { statusCode: A, headers: F, opaque: D, context: Z })),
        !J ||
          typeof J.write !== 'function' ||
          typeof J.end !== 'function' ||
          typeof J.on !== 'function')
      )
        throw new v76('expected Writable');
      x76(J, { readable: !1 }, (X) => {
        let { callback: V, res: K, opaque: U, trailers: N, abort: q } = this;
        if (((this.res = null), X || !K.readable)) jV.destroy(K, X);
        if (
          ((this.callback = null),
          this.runInAsyncScope(V, null, X || null, { opaque: U, trailers: N }),
          X)
        )
          q();
      });
    }
    return (
      J.on('drain', Q),
      (this.res = J),
      (J.writableNeedDrain !== void 0 ? J.writableNeedDrain : J._writableState?.needDrain) !== !0
    );
  }
  onData(A) {
    let { res: B } = this;
    return B ? B.write(A) : !0;
  }
  onComplete(A) {
    let { res: B } = this;
    if ((bk0(this), !B)) return;
    ((this.trailers = jV.parseHeaders(A)), B.end());
  }
  onError(A) {
    let { res: B, callback: Q, opaque: I, body: G } = this;
    if ((bk0(this), (this.factory = null), B)) ((this.res = null), jV.destroy(B, A));
    else if (Q)
      ((this.callback = null),
        queueMicrotask(() => {
          this.runInAsyncScope(Q, null, A, { opaque: I });
        }));
    if (G) ((this.body = null), jV.destroy(G, A));
  }
}
function hk0(A, B, Q) {
  if (Q === void 0)
    return new Promise((I, G) => {
      hk0.call(this, A, B, (D, Z) => {
        return D ? G(D) : I(Z);
      });
    });
  try {
    this.dispatch(A, new gk0(A, B, Q));
  } catch (I) {
    if (typeof Q !== 'function') throw I;
    let G = A?.opaque;
    queueMicrotask(() => Q(I, { opaque: G }));
  }
}
mk0.exports = hk0;
