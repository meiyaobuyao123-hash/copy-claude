// Module: Bx0
// Params: lV8,Ax0

var { InvalidArgumentError: Yd1, SocketError: n76 } = y5(),
  { AsyncResource: a76 } = D1('node:async_hooks'),
  sk0 = I6(),
  { addSignal: s76, removeSignal: rk0 } = ss(),
  ok0 = D1('node:assert');
class tk0 extends a76 {
  constructor(A, B) {
    if (!A || typeof A !== 'object') throw new Yd1('invalid opts');
    if (typeof B !== 'function') throw new Yd1('invalid callback');
    let { signal: Q, opaque: I, responseHeaders: G } = A;
    if (Q && typeof Q.on !== 'function' && typeof Q.addEventListener !== 'function')
      throw new Yd1('signal must be an EventEmitter or EventTarget');
    super('UNDICI_UPGRADE');
    ((this.responseHeaders = G || null),
      (this.opaque = I || null),
      (this.callback = B),
      (this.abort = null),
      (this.context = null),
      s76(this, Q));
  }
  onConnect(A, B) {
    if (this.reason) {
      A(this.reason);
      return;
    }
    (ok0(this.callback), (this.abort = A), (this.context = null));
  }
  onHeaders() {
    throw new n76('bad upgrade', null);
  }
  onUpgrade(A, B, Q) {
    ok0(A === 101);
    let { callback: I, opaque: G, context: D } = this;
    (rk0(this), (this.callback = null));
    let Z = this.responseHeaders === 'raw' ? sk0.parseRawHeaders(B) : sk0.parseHeaders(B);
    this.runInAsyncScope(I, null, null, { headers: Z, socket: Q, opaque: G, context: D });
  }
  onError(A) {
    let { callback: B, opaque: Q } = this;
    if ((rk0(this), B))
      ((this.callback = null),
        queueMicrotask(() => {
          this.runInAsyncScope(B, null, A, { opaque: Q });
        }));
  }
}
function ek0(A, B) {
  if (B === void 0)
    return new Promise((Q, I) => {
      ek0.call(this, A, (G, D) => {
        return G ? I(G) : Q(D);
      });
    });
  try {
    let Q = new tk0(A, B);
    this.dispatch({ ...A, method: A.method || 'GET', upgrade: A.protocol || 'Websocket' }, Q);
  } catch (Q) {
    if (typeof B !== 'function') throw Q;
    let I = A?.opaque;
    queueMicrotask(() => B(Q, { opaque: I }));
  }
}
Ax0.exports = ek0;
