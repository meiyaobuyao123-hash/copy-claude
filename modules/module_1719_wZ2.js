// Module: wZ2
// Params: HZ2

Object.defineProperty(HZ2, '__esModule', { value: !0 });
HZ2.StatusBuilder = void 0;
class KZ2 {
  constructor() {
    ((this.code = null), (this.details = null), (this.metadata = null));
  }
  withCode(A) {
    return ((this.code = A), this);
  }
  withDetails(A) {
    return ((this.details = A), this);
  }
  withMetadata(A) {
    return ((this.metadata = A), this);
  }
  build() {
    let A = {};
    if (this.code !== null) A.code = this.code;
    if (this.details !== null) A.details = this.details;
    if (this.metadata !== null) A.metadata = this.metadata;
    return A;
  }
}
HZ2.StatusBuilder = KZ2;
