// Module: mA1
// Params: Z2A

Object.defineProperty(Z2A, '__esModule', { value: !0 });
var Py = tA(),
  gA1 = vQ(),
  Pv2 = oK(),
  Sv2 = uu(),
  cu = pu(),
  hA1 = iZ(),
  I2A = sO(),
  G2A = bA1(),
  _v2 = vA1();
class D2A extends G2A.Span {
  constructor(A, B) {
    super(A);
    ((this._contexts = {}),
      (this._hub = B || Pv2.getCurrentHub()),
      (this._name = A.name || ''),
      (this._metadata = { ...A.metadata }),
      (this._trimEnd = A.trimEnd),
      (this.transaction = this));
    let Q = this._metadata.dynamicSamplingContext;
    if (Q) this._frozenDynamicSamplingContext = { ...Q };
  }
  get name() {
    return this._name;
  }
  set name(A) {
    this.setName(A);
  }
  get metadata() {
    return {
      source: 'custom',
      spanMetadata: {},
      ...this._metadata,
      ...(this._attributes[cu.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && {
        source: this._attributes[cu.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      }),
      ...(this._attributes[cu.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] && {
        sampleRate: this._attributes[cu.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE],
      }),
    };
  }
  set metadata(A) {
    this._metadata = A;
  }
  setName(A, B = 'custom') {
    ((this._name = A), this.setAttribute(cu.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, B));
  }
  updateName(A) {
    return ((this._name = A), this);
  }
  initSpanRecorder(A = 1000) {
    if (!this.spanRecorder) this.spanRecorder = new G2A.SpanRecorder(A);
    this.spanRecorder.add(this);
  }
  setContext(A, B) {
    if (B === null) delete this._contexts[A];
    else this._contexts[A] = B;
  }
  setMeasurement(A, B, Q = '') {
    this._measurements[A] = { value: B, unit: Q };
  }
  setMetadata(A) {
    this._metadata = { ...this._metadata, ...A };
  }
  end(A) {
    let B = hA1.spanTimeInputToSeconds(A),
      Q = this._finishTransaction(B);
    if (!Q) return;
    return this._hub.captureEvent(Q);
  }
  toContext() {
    let A = super.toContext();
    return Py.dropUndefinedKeys({ ...A, name: this._name, trimEnd: this._trimEnd });
  }
  updateWithContext(A) {
    return (
      super.updateWithContext(A),
      (this._name = A.name || ''),
      (this._trimEnd = A.trimEnd),
      this
    );
  }
  getDynamicSamplingContext() {
    return I2A.getDynamicSamplingContextFromSpan(this);
  }
  setHub(A) {
    this._hub = A;
  }
  getProfileId() {
    if (this._contexts !== void 0 && this._contexts.profile !== void 0)
      return this._contexts.profile.profile_id;
    return;
  }
  _finishTransaction(A) {
    if (this._endTime !== void 0) return;
    if (!this._name)
      (gA1.DEBUG_BUILD &&
        Py.logger.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'),
        (this._name = '<unlabeled transaction>'));
    super.end(A);
    let B = this._hub.getClient();
    if (B && B.emit) B.emit('finishTransaction', this);
    if (this._sampled !== !0) {
      if (
        (gA1.DEBUG_BUILD &&
          Py.logger.log(
            '[Tracing] Discarding transaction because its trace was not chosen to be sampled.'
          ),
        B)
      )
        B.recordDroppedEvent('sample_rate', 'transaction');
      return;
    }
    let Q = this.spanRecorder
      ? this.spanRecorder.spans.filter((F) => F !== this && hA1.spanToJSON(F).timestamp)
      : [];
    if (this._trimEnd && Q.length > 0) {
      let F = Q.map((J) => hA1.spanToJSON(J).timestamp).filter(Boolean);
      this._endTime = F.reduce((J, C) => {
        return J > C ? J : C;
      });
    }
    let { scope: I, isolationScope: G } = _v2.getCapturedScopesOnSpan(this),
      { metadata: D } = this,
      { source: Z } = D,
      Y = {
        contexts: { ...this._contexts, trace: hA1.spanToTraceContext(this) },
        spans: Q,
        start_timestamp: this._startTime,
        tags: this.tags,
        timestamp: this._endTime,
        transaction: this._name,
        type: 'transaction',
        sdkProcessingMetadata: {
          ...D,
          capturedSpanScope: I,
          capturedSpanIsolationScope: G,
          ...Py.dropUndefinedKeys({
            dynamicSamplingContext: I2A.getDynamicSamplingContextFromSpan(this),
          }),
        },
        _metrics_summary: Sv2.getMetricSummaryJsonForSpan(this),
        ...(Z && { transaction_info: { source: Z } }),
      };
    if (Object.keys(this._measurements).length > 0)
      (gA1.DEBUG_BUILD &&
        Py.logger.log(
          '[Measurements] Adding measurements to transaction',
          JSON.stringify(this._measurements, void 0, 2)
        ),
        (Y.measurements = this._measurements));
    return (
      gA1.DEBUG_BUILD &&
        Py.logger.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`),
      Y
    );
  }
}
Z2A.Transaction = D2A;
