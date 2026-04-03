// Module: A52
// Params: t62

Object.defineProperty(t62, '__esModule', { value: !0 });
t62.createOtlpNetworkExportDelegate = void 0;
var Sb6 = Vl1(),
  _b6 = Kl1();
function jb6(A, B, Q) {
  return _b6.createOtlpExportDelegate(
    { transport: Q, serializer: B, promiseHandler: Sb6.createBoundedQueueExportPromiseHandler(A) },
    { timeout: A.timeoutMillis }
  );
}
t62.createOtlpNetworkExportDelegate = jb6;
