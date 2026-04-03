// Module: V92
// Params: C92

Object.defineProperty(C92, '__esModule', { value: !0 });
C92.osDetector = void 0;
var W92 = wN(),
  F92 = D1('os'),
  Ef6 = oc1();
class J92 {
  detect(A) {
    return {
      attributes: {
        [W92.SEMRESATTRS_OS_TYPE]: Ef6.normalizeType(F92.platform()),
        [W92.SEMRESATTRS_OS_VERSION]: F92.release(),
      },
    };
  }
}
C92.osDetector = new J92();
