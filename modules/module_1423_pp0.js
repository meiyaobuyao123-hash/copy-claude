// Module: pp0
// Params: dp0

Object.defineProperty(dp0, '__esModule', { value: !0 });
dp0.NoopContextManager = void 0;
var vE6 = or();
class mp0 {
  active() {
    return vE6.ROOT_CONTEXT;
  }
  with(A, B, Q, ...I) {
    return B.call(Q, ...I);
  }
  bind(A, B) {
    return B;
  }
  enable() {
    return this;
  }
  disable() {
    return this;
  }
}
dp0.NoopContextManager = mp0;
