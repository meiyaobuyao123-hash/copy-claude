// Module: NR1
// Params: P_A

Object.defineProperty(P_A, '__esModule', { value: !0 });
P_A.SDKFlags = void 0;
var T_A = {};
P_A.SDKFlags = {
  setFlags: (A, B) => {
    T_A[A] = B;
  },
  get: (A, B) => {
    var Q, I;
    return (I = (Q = T_A[A]) === null || Q === void 0 ? void 0 : Q[B]) !== null && I !== void 0
      ? I
      : !1;
  },
};
