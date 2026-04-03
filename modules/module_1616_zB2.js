// Module: zB2
// Params: KB2

Object.defineProperty(KB2, '__esModule', { value: !0 });
KB2.createHttpExporterTransport = void 0;
class VB2 {
  _parameters;
  _utils = null;
  constructor(A) {
    this._parameters = A;
  }
  async send(A, B) {
    let { agent: Q, send: I } = this._loadUtils();
    return new Promise((G) => {
      I(
        this._parameters,
        Q,
        A,
        (D) => {
          G(D);
        },
        B
      );
    });
  }
  shutdown() {}
  _loadUtils() {
    let A = this._utils;
    if (A === null) {
      let { sendWithHttp: B, createHttpAgent: Q } = XB2();
      A = this._utils = { agent: Q(this._parameters.url, this._parameters.agentOptions), send: B };
    }
    return A;
  }
}
function Sh6(A) {
  return new VB2(A);
}
KB2.createHttpExporterTransport = Sh6;
