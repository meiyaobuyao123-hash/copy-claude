// Module: Kl1
// Params: r62

Object.defineProperty(r62, '__esModule', { value: !0 });
r62.createOtlpExportDelegate = void 0;
var T_ = CD(),
  a62 = TJ1(),
  Ob6 = n62(),
  Tb6 = C4();
class s62 {
  _transport;
  _serializer;
  _responseHandler;
  _promiseQueue;
  _timeout;
  _diagLogger;
  constructor(A, B, Q, I, G) {
    ((this._transport = A),
      (this._serializer = B),
      (this._responseHandler = Q),
      (this._promiseQueue = I),
      (this._timeout = G),
      (this._diagLogger = Tb6.diag.createComponentLogger({ namespace: 'OTLPExportDelegate' })));
  }
  export(A, B) {
    if ((this._diagLogger.debug('items to be sent', A), this._promiseQueue.hasReachedLimit())) {
      B({ code: T_.ExportResultCode.FAILED, error: new Error('Concurrent export limit reached') });
      return;
    }
    let Q = this._serializer.serializeRequest(A);
    if (Q == null) {
      B({ code: T_.ExportResultCode.FAILED, error: new Error('Nothing to send') });
      return;
    }
    this._promiseQueue.pushPromise(
      this._transport.send(Q, this._timeout).then(
        (I) => {
          if (I.status === 'success') {
            if (I.data != null)
              try {
                this._responseHandler.handleResponse(this._serializer.deserializeResponse(I.data));
              } catch (G) {
                this._diagLogger.warn(
                  'Export succeeded but could not deserialize response - is the response specification compliant?',
                  G,
                  I.data
                );
              }
            B({ code: T_.ExportResultCode.SUCCESS });
            return;
          } else if (I.status === 'failure' && I.error) {
            B({ code: T_.ExportResultCode.FAILED, error: I.error });
            return;
          } else if (I.status === 'retryable')
            B({
              code: T_.ExportResultCode.FAILED,
              error: new a62.OTLPExporterError('Export failed with retryable status'),
            });
          else
            B({
              code: T_.ExportResultCode.FAILED,
              error: new a62.OTLPExporterError('Export failed with unknown error'),
            });
        },
        (I) => B({ code: T_.ExportResultCode.FAILED, error: I })
      )
    );
  }
  forceFlush() {
    return this._promiseQueue.awaitAll();
  }
  async shutdown() {
    (this._diagLogger.debug('shutdown started'),
      await this.forceFlush(),
      this._transport.shutdown());
  }
}
function Pb6(A, B) {
  return new s62(
    A.transport,
    A.serializer,
    Ob6.createLoggingPartialSuccessResponseHandler(),
    A.promiseHandler,
    B.timeout
  );
}
r62.createOtlpExportDelegate = Pb6;
