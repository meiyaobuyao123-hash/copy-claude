// Module: $B2
// Params: UB2

Object.defineProperty(UB2, '__esModule', { value: !0 });
UB2.createRetryingTransport = void 0;
var _h6 = 5,
  jh6 = 1000,
  yh6 = 5000,
  kh6 = 1.5,
  wB2 = 0.2;
function xh6() {
  return Math.random() * (2 * wB2) - wB2;
}
class EB2 {
  _transport;
  constructor(A) {
    this._transport = A;
  }
  retry(A, B, Q) {
    return new Promise((I, G) => {
      setTimeout(() => {
        this._transport.send(A, B).then(I, G);
      }, Q);
    });
  }
  async send(A, B) {
    let Q = Date.now() + B,
      I = await this._transport.send(A, B),
      G = _h6,
      D = jh6;
    while (I.status === 'retryable' && G > 0) {
      G--;
      let Z = Math.max(Math.min(D, yh6) + xh6(), 0);
      D = D * kh6;
      let Y = I.retryInMillis ?? Z,
        W = Q - Date.now();
      if (Y > W) return I;
      I = await this.retry(A, W, Y);
    }
    return I;
  }
  shutdown() {
    return this._transport.shutdown();
  }
}
function fh6(A) {
  return new EB2(A.transport);
}
UB2.createRetryingTransport = fh6;
