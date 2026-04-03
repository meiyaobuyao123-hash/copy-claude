// Module: AW2
// Params: tY2

Object.defineProperty(tY2, '__esModule', { value: !0 });
tY2.PrometheusExporter = void 0;
var Xt = C4(),
  Ct6 = CD(),
  fa1 = O_(),
  Xt6 = D1('http'),
  Vt6 = xa1(),
  Kt6 = D1('url');
class _R extends fa1.MetricReader {
  static DEFAULT_OPTIONS = {
    host: void 0,
    port: 9464,
    endpoint: '/metrics',
    prefix: '',
    appendTimestamp: !1,
    withResourceConstantLabels: void 0,
  };
  _host;
  _port;
  _baseUrl;
  _endpoint;
  _server;
  _prefix;
  _appendTimestamp;
  _serializer;
  _startServerPromise;
  constructor(A = {}, B = () => {}) {
    super({
      aggregationSelector: (I) => {
        return { type: fa1.AggregationType.DEFAULT };
      },
      aggregationTemporalitySelector: (I) => fa1.AggregationTemporality.CUMULATIVE,
      metricProducers: A.metricProducers,
    });
    ((this._host = A.host || process.env.OTEL_EXPORTER_PROMETHEUS_HOST || _R.DEFAULT_OPTIONS.host),
      (this._port =
        A.port || Number(process.env.OTEL_EXPORTER_PROMETHEUS_PORT) || _R.DEFAULT_OPTIONS.port),
      (this._prefix = A.prefix || _R.DEFAULT_OPTIONS.prefix),
      (this._appendTimestamp =
        typeof A.appendTimestamp === 'boolean'
          ? A.appendTimestamp
          : _R.DEFAULT_OPTIONS.appendTimestamp));
    let Q = A.withResourceConstantLabels || _R.DEFAULT_OPTIONS.withResourceConstantLabels;
    if (
      ((this._server = Xt6.createServer(this._requestHandler).unref()),
      (this._serializer = new Vt6.PrometheusSerializer(this._prefix, this._appendTimestamp, Q)),
      (this._baseUrl = `http://${this._host}:${this._port}/`),
      (this._endpoint = (A.endpoint || _R.DEFAULT_OPTIONS.endpoint).replace(/^([^/])/, '/$1')),
      A.preventServerStart !== !0)
    )
      this.startServer().then(B, (I) => {
        (Xt.diag.error(I), B(I));
      });
    else if (B) queueMicrotask(B);
  }
  async onForceFlush() {}
  onShutdown() {
    return this.stopServer();
  }
  stopServer() {
    if (!this._server)
      return (
        Xt.diag.debug('Prometheus stopServer() was called but server was never started.'),
        Promise.resolve()
      );
    else
      return new Promise((A) => {
        this._server.close((B) => {
          if (!B) Xt.diag.debug('Prometheus exporter was stopped');
          else if (B.code !== 'ERR_SERVER_NOT_RUNNING') Ct6.globalErrorHandler(B);
          A();
        });
      });
  }
  startServer() {
    return (
      (this._startServerPromise ??= new Promise((A, B) => {
        (this._server.once('error', B),
          this._server.listen({ port: this._port, host: this._host }, () => {
            (Xt.diag.debug(
              `Prometheus exporter server started: ${this._host}:${this._port}/${this._endpoint}`
            ),
              A());
          }));
      })),
      this._startServerPromise
    );
  }
  getMetricsRequestHandler(A, B) {
    this._exportMetrics(B);
  }
  _requestHandler = (A, B) => {
    if (A.url != null && new Kt6.URL(A.url, this._baseUrl).pathname === this._endpoint)
      this._exportMetrics(B);
    else this._notFound(B);
  };
  _exportMetrics = (A) => {
    ((A.statusCode = 200),
      A.setHeader('content-type', 'text/plain'),
      this.collect().then(
        (B) => {
          let { resourceMetrics: Q, errors: I } = B;
          if (I.length) Xt.diag.error('PrometheusExporter: metrics collection errors', ...I);
          A.end(this._serializer.serialize(Q));
        },
        (B) => {
          A.end(`# failed to export metrics: ${B}`);
        }
      ));
  };
  _notFound = (A) => {
    ((A.statusCode = 404), A.end());
  };
}
tY2.PrometheusExporter = _R;
