// Module: LB2
// Params: qB2

Object.defineProperty(qB2, '__esModule', { value: !0 });
qB2.createOtlpHttpExportDelegate = void 0;
var vh6 = Kl1(),
  bh6 = zB2(),
  gh6 = Vl1(),
  hh6 = $B2();
function mh6(A, B) {
  return vh6.createOtlpExportDelegate(
    {
      transport: hh6.createRetryingTransport({ transport: bh6.createHttpExporterTransport(A) }),
      serializer: B,
      promiseHandler: gh6.createBoundedQueueExportPromiseHandler(A),
    },
    { timeout: A.timeoutMillis }
  );
}
qB2.createOtlpHttpExportDelegate = mh6;
