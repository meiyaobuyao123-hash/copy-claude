// Module: ak0
// Params: cV8,nk0

var { Readable: pk0, Duplex: m76, PassThrough: d76 } = D1('node:stream'),
  { InvalidArgumentError: rs, InvalidReturnValueError: u76, RequestAbortedError: Zd1 } = y5(),
  DC = I6(),
  { AsyncResource: p76 } = D1('node:async_hooks'),
  { addSignal: c76, removeSignal: l76 } = ss(),
  uk0 = D1('node:assert'),
  Gh = Symbol('resume');
class ck0 extends pk0 {
  constructor() {
    super({ autoDestroy: !0 });
    this[Gh] = null;
  }
  _read() {
    let { [Gh]: A } = this;
    if (A) ((this[Gh] = null), A());
  }
  _destroy(A, B) {
    (this._read(), B(A));
  }
}
class lk0 extends pk0 {
  constructor(A) {
    super({ autoDestroy: !0 });
    this[Gh] = A;
  }
  _read() {
    this[Gh]();
  }
  _destroy(A, B) {
    if (!A && !this._readableState.endEmitted) A = new Zd1();
    B(A);
  }
}
class ik0 extends p76 {
  constructor(A, B) {
    if (!A || typeof A !== 'object') throw new rs('invalid opts');
    if (typeof B !== 'function') throw new rs('invalid handler');
    let { signal: Q, method: I, opaque: G, onInfo: D, responseHeaders: Z } = A;
    if (Q && typeof Q.on !== 'function' && typeof Q.addEventListener !== 'function')
      throw new rs('signal must be an EventEmitter or EventTarget');
    if (I === 'CONNECT') throw new rs('invalid method');
    if (D && typeof D !== 'function') throw new rs('invalid onInfo callback');
    super('UNDICI_PIPELINE');
    ((this.opaque = G || null),
      (this.responseHeaders = Z || null),
      (this.handler = B),
      (this.abort = null),
      (this.context = null),
      (this.onInfo = D || null),
      (this.req = new ck0().on('error', DC.nop)),
      (this.ret = new m76({
        readableObjectMode: A.objectMode,
        autoDestroy: !0,
        read: () => {
          let { body: Y } = this;
          if (Y?.resume) Y.resume();
        },
        write: (Y, W, F) => {
          let { req: J } = this;
          if (J.push(Y, W) || J._readableState.destroyed) F();
          else J[Gh] = F;
        },
        destroy: (Y, W) => {
          let { body: F, req: J, res: C, ret: X, abort: V } = this;
          if (!Y && !X._readableState.endEmitted) Y = new Zd1();
          if (V && Y) V();
          (DC.destroy(F, Y), DC.destroy(J, Y), DC.destroy(C, Y), l76(this), W(Y));
        },
      }).on('prefinish', () => {
        let { req: Y } = this;
        Y.push(null);
      })),
      (this.res = null),
      c76(this, Q));
  }
  onConnect(A, B) {
    let { ret: Q, res: I } = this;
    if (this.reason) {
      A(this.reason);
      return;
    }
    (uk0(!I, 'pipeline cannot be retried'),
      uk0(!Q.destroyed),
      (this.abort = A),
      (this.context = B));
  }
  onHeaders(A, B, Q) {
    let { opaque: I, handler: G, context: D } = this;
    if (A < 200) {
      if (this.onInfo) {
        let Y = this.responseHeaders === 'raw' ? DC.parseRawHeaders(B) : DC.parseHeaders(B);
        this.onInfo({ statusCode: A, headers: Y });
      }
      return;
    }
    this.res = new lk0(Q);
    let Z;
    try {
      this.handler = null;
      let Y = this.responseHeaders === 'raw' ? DC.parseRawHeaders(B) : DC.parseHeaders(B);
      Z = this.runInAsyncScope(G, null, {
        statusCode: A,
        headers: Y,
        opaque: I,
        body: this.res,
        context: D,
      });
    } catch (Y) {
      throw (this.res.on('error', DC.nop), Y);
    }
    if (!Z || typeof Z.on !== 'function') throw new u76('expected Readable');
    (Z.on('data', (Y) => {
      let { ret: W, body: F } = this;
      if (!W.push(Y) && F.pause) F.pause();
    })
      .on('error', (Y) => {
        let { ret: W } = this;
        DC.destroy(W, Y);
      })
      .on('end', () => {
        let { ret: Y } = this;
        Y.push(null);
      })
      .on('close', () => {
        let { ret: Y } = this;
        if (!Y._readableState.ended) DC.destroy(Y, new Zd1());
      }),
      (this.body = Z));
  }
  onData(A) {
    let { res: B } = this;
    return B.push(A);
  }
  onComplete(A) {
    let { res: B } = this;
    B.push(null);
  }
  onError(A) {
    let { ret: B } = this;
    ((this.handler = null), DC.destroy(B, A));
  }
}
function i76(A, B) {
  try {
    let Q = new ik0(A, B);
    return (this.dispatch({ ...A, body: Q.req }, Q), Q.ret);
  } catch (Q) {
    return new d76().destroy(Q);
  }
}
nk0.exports = i76;
