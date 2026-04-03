// Module: bA1
// Params: Q2A

Object.defineProperty(Q2A, '__esModule', { value: !0 });
var oO = tA(),
  e0A = vQ(),
  Lv2 = uu(),
  $E = pu(),
  A2A = qy(),
  Ty = iZ(),
  Rv2 = Ry();
class B2A {
  constructor(A = 1000) {
    ((this._maxlen = A), (this.spans = []));
  }
  add(A) {
    if (this.spans.length > this._maxlen) A.spanRecorder = void 0;
    else this.spans.push(A);
  }
}
class cw1 {
  constructor(A = {}) {
    if (
      ((this._traceId = A.traceId || oO.uuid4()),
      (this._spanId = A.spanId || oO.uuid4().substring(16)),
      (this._startTime = A.startTimestamp || oO.timestampInSeconds()),
      (this.tags = A.tags ? { ...A.tags } : {}),
      (this.data = A.data ? { ...A.data } : {}),
      (this.instrumenter = A.instrumenter || 'sentry'),
      (this._attributes = {}),
      this.setAttributes({
        [$E.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: A.origin || 'manual',
        [$E.SEMANTIC_ATTRIBUTE_SENTRY_OP]: A.op,
        ...A.attributes,
      }),
      (this._name = A.name || A.description),
      A.parentSpanId)
    )
      this._parentSpanId = A.parentSpanId;
    if ('sampled' in A) this._sampled = A.sampled;
    if (A.status) this._status = A.status;
    if (A.endTimestamp) this._endTime = A.endTimestamp;
    if (A.exclusiveTime !== void 0) this._exclusiveTime = A.exclusiveTime;
    this._measurements = A.measurements ? { ...A.measurements } : {};
  }
  get name() {
    return this._name || '';
  }
  set name(A) {
    this.updateName(A);
  }
  get description() {
    return this._name;
  }
  set description(A) {
    this._name = A;
  }
  get traceId() {
    return this._traceId;
  }
  set traceId(A) {
    this._traceId = A;
  }
  get spanId() {
    return this._spanId;
  }
  set spanId(A) {
    this._spanId = A;
  }
  set parentSpanId(A) {
    this._parentSpanId = A;
  }
  get parentSpanId() {
    return this._parentSpanId;
  }
  get sampled() {
    return this._sampled;
  }
  set sampled(A) {
    this._sampled = A;
  }
  get attributes() {
    return this._attributes;
  }
  set attributes(A) {
    this._attributes = A;
  }
  get startTimestamp() {
    return this._startTime;
  }
  set startTimestamp(A) {
    this._startTime = A;
  }
  get endTimestamp() {
    return this._endTime;
  }
  set endTimestamp(A) {
    this._endTime = A;
  }
  get status() {
    return this._status;
  }
  set status(A) {
    this._status = A;
  }
  get op() {
    return this._attributes[$E.SEMANTIC_ATTRIBUTE_SENTRY_OP];
  }
  set op(A) {
    this.setAttribute($E.SEMANTIC_ATTRIBUTE_SENTRY_OP, A);
  }
  get origin() {
    return this._attributes[$E.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
  }
  set origin(A) {
    this.setAttribute($E.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, A);
  }
  spanContext() {
    let { _spanId: A, _traceId: B, _sampled: Q } = this;
    return { spanId: A, traceId: B, traceFlags: Q ? Ty.TRACE_FLAG_SAMPLED : Ty.TRACE_FLAG_NONE };
  }
  startChild(A) {
    let B = new cw1({
      ...A,
      parentSpanId: this._spanId,
      sampled: this._sampled,
      traceId: this._traceId,
    });
    if (((B.spanRecorder = this.spanRecorder), B.spanRecorder)) B.spanRecorder.add(B);
    let Q = A2A.getRootSpan(this);
    if (((B.transaction = Q), e0A.DEBUG_BUILD && Q)) {
      let I = (A && A.op) || '< unknown op >',
        G = Ty.spanToJSON(B).description || '< unknown name >',
        D = Q.spanContext().spanId,
        Z = `[Tracing] Starting '${I}' span on transaction '${G}' (${D}).`;
      (oO.logger.log(Z), (this._logMessage = Z));
    }
    return B;
  }
  setTag(A, B) {
    return ((this.tags = { ...this.tags, [A]: B }), this);
  }
  setData(A, B) {
    return ((this.data = { ...this.data, [A]: B }), this);
  }
  setAttribute(A, B) {
    if (B === void 0) delete this._attributes[A];
    else this._attributes[A] = B;
  }
  setAttributes(A) {
    Object.keys(A).forEach((B) => this.setAttribute(B, A[B]));
  }
  setStatus(A) {
    return ((this._status = A), this);
  }
  setHttpStatus(A) {
    return (Rv2.setHttpStatus(this, A), this);
  }
  setName(A) {
    this.updateName(A);
  }
  updateName(A) {
    return ((this._name = A), this);
  }
  isSuccess() {
    return this._status === 'ok';
  }
  finish(A) {
    return this.end(A);
  }
  end(A) {
    if (this._endTime) return;
    let B = A2A.getRootSpan(this);
    if (e0A.DEBUG_BUILD && B && B.spanContext().spanId !== this._spanId) {
      let Q = this._logMessage;
      if (Q) oO.logger.log(Q.replace('Starting', 'Finishing'));
    }
    this._endTime = Ty.spanTimeInputToSeconds(A);
  }
  toTraceparent() {
    return Ty.spanToTraceHeader(this);
  }
  toContext() {
    return oO.dropUndefinedKeys({
      data: this._getData(),
      description: this._name,
      endTimestamp: this._endTime,
      op: this.op,
      parentSpanId: this._parentSpanId,
      sampled: this._sampled,
      spanId: this._spanId,
      startTimestamp: this._startTime,
      status: this._status,
      tags: this.tags,
      traceId: this._traceId,
    });
  }
  updateWithContext(A) {
    return (
      (this.data = A.data || {}),
      (this._name = A.name || A.description),
      (this._endTime = A.endTimestamp),
      (this.op = A.op),
      (this._parentSpanId = A.parentSpanId),
      (this._sampled = A.sampled),
      (this._spanId = A.spanId || this._spanId),
      (this._startTime = A.startTimestamp || this._startTime),
      (this._status = A.status),
      (this.tags = A.tags || {}),
      (this._traceId = A.traceId || this._traceId),
      this
    );
  }
  getTraceContext() {
    return Ty.spanToTraceContext(this);
  }
  getSpanJSON() {
    return oO.dropUndefinedKeys({
      data: this._getData(),
      description: this._name,
      op: this._attributes[$E.SEMANTIC_ATTRIBUTE_SENTRY_OP],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: this._status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[$E.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      _metrics_summary: Lv2.getMetricSummaryJsonForSpan(this),
      profile_id: this._attributes[$E.SEMANTIC_ATTRIBUTE_PROFILE_ID],
      exclusive_time: this._exclusiveTime,
      measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0,
    });
  }
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  toJSON() {
    return this.getSpanJSON();
  }
  _getData() {
    let { data: A, _attributes: B } = this,
      Q = Object.keys(A).length > 0,
      I = Object.keys(B).length > 0;
    if (!Q && !I) return;
    if (Q && I) return { ...A, ...B };
    return Q ? A : B;
  }
}
Q2A.Span = cw1;
Q2A.SpanRecorder = B2A;
