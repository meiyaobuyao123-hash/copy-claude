// Module: $92
// Params: U92

Object.defineProperty(U92, '__esModule', { value: !0 });
U92.serviceInstanceIdDetector = void 0;
var $f6 = wN(),
  qf6 = D1('crypto');
class E92 {
  detect(A) {
    return { attributes: { [$f6.SEMRESATTRS_SERVICE_INSTANCE_ID]: qf6.randomUUID() } };
  }
}
U92.serviceInstanceIdDetector = new E92();
