// Module: FN1
// Params: RZA

Object.defineProperty(RZA, '__esModule', { value: !0 });
RZA.reportUnhandledError = void 0;
var JI9 = Rk(),
  CI9 = WN1();
function XI9(A) {
  CI9.timeoutProvider.setTimeout(function () {
    var B = JI9.config.onUnhandledError;
    if (B) B(A);
    else throw A;
  });
}
RZA.reportUnhandledError = XI9;
