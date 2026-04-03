// Module: jp1
// Params: gp0

Object.defineProperty(gp0, '__esModule', { value: !0 });
gp0.defaultTextMapSetter = gp0.defaultTextMapGetter = void 0;
gp0.defaultTextMapGetter = {
  get(A, B) {
    if (A == null) return;
    return A[B];
  },
  keys(A) {
    if (A == null) return [];
    return Object.keys(A);
  },
};
gp0.defaultTextMapSetter = {
  set(A, B, Q) {
    if (A == null) return;
    A[B] = Q;
  },
};
