// Module: bP0
// Params: fP0

Object.defineProperty(fP0, '__esModule', { value: !0 });
fP0.IAMAuth = void 0;
class xP0 {
  constructor(A, B) {
    ((this.selector = A), (this.token = B), (this.selector = A), (this.token = B));
  }
  getRequestHeaders() {
    return {
      'x-goog-iam-authority-selector': this.selector,
      'x-goog-iam-authorization-token': this.token,
    };
  }
}
fP0.IAMAuth = xP0;
