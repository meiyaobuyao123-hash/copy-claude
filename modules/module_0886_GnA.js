// Module: GnA
// Params: QnA

Object.defineProperty(QnA, '__esModule', { value: !0 });
QnA.retryWrapper = void 0;
var tB4 = (A, B, Q) => {
  return async () => {
    for (let I = 0; I < B; ++I)
      try {
        return await A();
      } catch (G) {
        await new Promise((D) => setTimeout(D, Q));
      }
    return await A();
  };
};
QnA.retryWrapper = tB4;
