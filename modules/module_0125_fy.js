// Module: fy
// Params: Z6A

Object.defineProperty(Z6A, '__esModule', { value: !0 });
var Cc2 = (A, B, Q) => {
  let I, G;
  return (D) => {
    if (B.value >= 0) {
      if (D || Q) {
        if (((G = B.value - (I || 0)), G || I === void 0)) ((I = B.value), (B.delta = G), A(B));
      }
    }
  };
};
Z6A.bindReporter = Cc2;
