// Module: p2A
// Params: u2A

Object.defineProperty(u2A, '__esModule', { value: !0 });
var ME = tA(),
  cg2 = AE1(),
  lg2 = QE1(),
  sA1 = vQ(),
  ig2 = DJ(),
  ng2 = h2A(),
  ag2 = rw1(),
  sg2 = aw1(),
  rg2 = iZ(),
  og2 = qy();
Ry();
var m2A = sO();
class d2A extends cg2.BaseClient {
  constructor(A) {
    sg2.addTracingExtensions();
    super(A);
    if (A._experiments && A._experiments.metricsAggregator)
      this.metricsAggregator = new ng2.MetricsAggregator(this);
  }
  eventFromException(A, B) {
    return ME.resolvedSyncPromise(
      ME.eventFromUnknownInput(ig2.getClient(), this._options.stackParser, A, B)
    );
  }
  eventFromMessage(A, B = 'info', Q) {
    return ME.resolvedSyncPromise(
      ME.eventFromMessage(this._options.stackParser, A, B, Q, this._options.attachStacktrace)
    );
  }
  captureException(A, B, Q) {
    if (this._options.autoSessionTracking && this._sessionFlusher && Q) {
      let I = Q.getRequestSession();
      if (I && I.status === 'ok') I.status = 'errored';
    }
    return super.captureException(A, B, Q);
  }
  captureEvent(A, B, Q) {
    if (this._options.autoSessionTracking && this._sessionFlusher && Q) {
      if (
        (A.type || 'exception') === 'exception' &&
        A.exception &&
        A.exception.values &&
        A.exception.values.length > 0
      ) {
        let D = Q.getRequestSession();
        if (D && D.status === 'ok') D.status = 'errored';
      }
    }
    return super.captureEvent(A, B, Q);
  }
  close(A) {
    if (this._sessionFlusher) this._sessionFlusher.close();
    return super.close(A);
  }
  initSessionFlusher() {
    let { release: A, environment: B } = this._options;
    if (!A)
      sA1.DEBUG_BUILD &&
        ME.logger.warn(
          'Cannot initialise an instance of SessionFlusher if no release is provided!'
        );
    else this._sessionFlusher = new ag2.SessionFlusher(this, { release: A, environment: B });
  }
  captureCheckIn(A, B, Q) {
    let I = 'checkInId' in A && A.checkInId ? A.checkInId : ME.uuid4();
    if (!this._isEnabled())
      return (sA1.DEBUG_BUILD && ME.logger.warn('SDK not enabled, will not capture checkin.'), I);
    let G = this.getOptions(),
      { release: D, environment: Z, tunnel: Y } = G,
      W = {
        check_in_id: I,
        monitor_slug: A.monitorSlug,
        status: A.status,
        release: D,
        environment: Z,
      };
    if ('duration' in A) W.duration = A.duration;
    if (B)
      W.monitor_config = {
        schedule: B.schedule,
        checkin_margin: B.checkinMargin,
        max_runtime: B.maxRuntime,
        timezone: B.timezone,
      };
    let [F, J] = this._getTraceInfoFromScope(Q);
    if (J) W.contexts = { trace: J };
    let C = lg2.createCheckInEnvelope(W, F, this.getSdkMetadata(), Y, this.getDsn());
    return (
      sA1.DEBUG_BUILD && ME.logger.info('Sending checkin:', A.monitorSlug, A.status),
      this._sendEnvelope(C),
      I
    );
  }
  _captureRequestSession() {
    if (!this._sessionFlusher)
      sA1.DEBUG_BUILD &&
        ME.logger.warn(
          'Discarded request mode session because autoSessionTracking option was disabled'
        );
    else this._sessionFlusher.incrementSessionStatusCount();
  }
  _prepareEvent(A, B, Q, I) {
    if (this._options.platform) A.platform = A.platform || this._options.platform;
    if (this._options.runtime)
      A.contexts = { ...A.contexts, runtime: (A.contexts || {}).runtime || this._options.runtime };
    if (this._options.serverName) A.server_name = A.server_name || this._options.serverName;
    return super._prepareEvent(A, B, Q, I);
  }
  _getTraceInfoFromScope(A) {
    if (!A) return [void 0, void 0];
    let B = A.getSpan();
    if (B)
      return [
        og2.getRootSpan(B) ? m2A.getDynamicSamplingContextFromSpan(B) : void 0,
        rg2.spanToTraceContext(B),
      ];
    let { traceId: Q, spanId: I, parentSpanId: G, dsc: D } = A.getPropagationContext(),
      Z = { trace_id: Q, span_id: I, parent_span_id: G };
    if (D) return [D, Z];
    return [m2A.getDynamicSamplingContextFromClient(Q, this, A), Z];
  }
}
u2A.ServerRuntimeClient = d2A;
