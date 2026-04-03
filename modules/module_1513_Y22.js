// Module: Y22
// Params: D22

Object.defineProperty(D22, '__esModule', { value: !0 });
D22.PeriodicExportingMetricReader = void 0;
var mc1 = C4(),
  Co = CD(),
  Sx6 = hc1(),
  I22 = hV();
class G22 extends Sx6.MetricReader {
  _interval;
  _exporter;
  _exportInterval;
  _exportTimeout;
  constructor(A) {
    super({
      aggregationSelector: A.exporter.selectAggregation?.bind(A.exporter),
      aggregationTemporalitySelector: A.exporter.selectAggregationTemporality?.bind(A.exporter),
      metricProducers: A.metricProducers,
    });
    if (A.exportIntervalMillis !== void 0 && A.exportIntervalMillis <= 0)
      throw Error('exportIntervalMillis must be greater than 0');
    if (A.exportTimeoutMillis !== void 0 && A.exportTimeoutMillis <= 0)
      throw Error('exportTimeoutMillis must be greater than 0');
    if (
      A.exportTimeoutMillis !== void 0 &&
      A.exportIntervalMillis !== void 0 &&
      A.exportIntervalMillis < A.exportTimeoutMillis
    )
      throw Error('exportIntervalMillis must be greater than or equal to exportTimeoutMillis');
    ((this._exportInterval = A.exportIntervalMillis ?? 60000),
      (this._exportTimeout = A.exportTimeoutMillis ?? 30000),
      (this._exporter = A.exporter));
  }
  async _runOnce() {
    try {
      await I22.callWithTimeout(this._doRun(), this._exportTimeout);
    } catch (A) {
      if (A instanceof I22.TimeoutError) {
        mc1.diag.error(
          'Export took longer than %s milliseconds and timed out.',
          this._exportTimeout
        );
        return;
      }
      Co.globalErrorHandler(A);
    }
  }
  async _doRun() {
    let { resourceMetrics: A, errors: B } = await this.collect({
      timeoutMillis: this._exportTimeout,
    });
    if (B.length > 0)
      mc1.diag.error('PeriodicExportingMetricReader: metrics collection errors', ...B);
    if (A.resource.asyncAttributesPending)
      try {
        await A.resource.waitForAsyncAttributes?.();
      } catch (I) {
        (mc1.diag.debug('Error while resolving async portion of resource: ', I),
          Co.globalErrorHandler(I));
      }
    if (A.scopeMetrics.length === 0) return;
    let Q = await Co.internal._export(this._exporter, A);
    if (Q.code !== Co.ExportResultCode.SUCCESS)
      throw new Error(`PeriodicExportingMetricReader: metrics export failed (error ${Q.error})`);
  }
  onInitialized() {
    ((this._interval = setInterval(() => {
      this._runOnce();
    }, this._exportInterval)),
      Co.unrefTimer(this._interval));
  }
  async onForceFlush() {
    (await this._runOnce(), await this._exporter.forceFlush());
  }
  async onShutdown() {
    if (this._interval) clearInterval(this._interval);
    (await this.onForceFlush(), await this._exporter.shutdown());
  }
}
D22.PeriodicExportingMetricReader = G22;
