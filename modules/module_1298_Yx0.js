// Module: Yx0
// Params: iV8,Zx0

var r76 = D1('node:assert'),
  { AsyncResource: o76 } = D1('node:async_hooks'),
  { InvalidArgumentError: Wd1, SocketError: t76 } = y5(),
  Qx0 = I6(),
  { addSignal: e76, removeSignal: Ix0 } = ss();
class Gx0 extends o76 {
  constructor(A, B) {
    if (!A || typeof A !== 'object') throw new Wd1('invalid opts');
    if (typeof B !== 'function') throw new Wd1('invalid callback');
    let { signal: Q, opaque: I, responseHeaders: G } = A;
    if (Q && typeof Q.on !== 'function' && typeof Q.addEventListener !== 'function')
      throw new Wd1('signal must be an EventEmitter or EventTarget');
    super('UNDICI_CONNECT');
    ((this.opaque = I || null),
      (this.responseHeaders = G || null),
      (this.callback = B),
      (this.abort = null),
      e76(this, Q));
  }
  onConnect(A, B) {
    if (this.reason) {
      A(this.reason);
      return;
    }
    (r76(this.callback), (this.abort = A), (this.context = B));
  }
  onHeaders() {
    throw new t76('bad connect', null);
  }
  onUpgrade(A, B, Q) {
    let { callback: I, opaque: G, context: D } = this;
    (Ix0(this), (this.callback = null));
    let Z = B;
    if (Z != null)
      Z = this.responseHeaders === 'raw' ? Qx0.parseRawHeaders(B) : Qx0.parseHeaders(B);
    this.runInAsyncScope(I, null, null, {
      statusCode: A,
      headers: Z,
      socket: Q,
      opaque: G,
      context: D,
    });
  }
  onError(A) {
    let { callback: B, opaque: Q } = this;
    if ((Ix0(this), B))
      ((this.callback = null),
        queueMicrotask(() => {
          this.runInAsyncScope(B, null, A, { opaque: Q });
        }));
  }
}
function Dx0(A, B) {
  if (B === void 0)
    return new Promise((Q, I) => {
      Dx0.call(this, A, (G, D) => {
        return G ? I(G) : Q(D);
      });
    });
  try {
    let Q = new Gx0(A, B);
    this.dispatch({ ...A, method: 'CONNECT' }, Q);
  } catch (Q) {
    if (typeof B !== 'function') throw Q;
    let I = A?.opaque;
    queueMicrotask(() => B(Q, { opaque: I }));
  }
}
Zx0.exports = Dx0;
