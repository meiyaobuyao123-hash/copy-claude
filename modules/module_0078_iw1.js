// Module: iw1
// Params: W2A

Object.defineProperty(W2A, '__esModule', { value: !0 });
var bG = tA(),
  nZ = vQ(),
  dA1 = iZ(),
  yv2 = bA1(),
  kv2 = mA1(),
  uA1 = { idleTimeout: 1000, finalTimeout: 30000, heartbeatInterval: 5000 },
  xv2 = 'finishReason',
  Sy = [
    'heartbeatFailed',
    'idleTimeout',
    'documentHidden',
    'finalTimeout',
    'externalFinish',
    'cancelled',
  ];
class lw1 extends yv2.SpanRecorder {
  constructor(A, B, Q, I) {
    super(I);
    ((this._pushActivity = A), (this._popActivity = B), (this.transactionSpanId = Q));
  }
  add(A) {
    if (A.spanContext().spanId !== this.transactionSpanId) {
      let B = A.end;
      if (
        ((A.end = (...Q) => {
          return (this._popActivity(A.spanContext().spanId), B.apply(A, Q));
        }),
        dA1.spanToJSON(A).timestamp === void 0)
      )
        this._pushActivity(A.spanContext().spanId);
    }
    super.add(A);
  }
}
class Y2A extends kv2.Transaction {
  constructor(
    A,
    B,
    Q = uA1.idleTimeout,
    I = uA1.finalTimeout,
    G = uA1.heartbeatInterval,
    D = !1,
    Z = !1
  ) {
    super(A, B);
    if (
      ((this._idleHub = B),
      (this._idleTimeout = Q),
      (this._finalTimeout = I),
      (this._heartbeatInterval = G),
      (this._onScope = D),
      (this.activities = {}),
      (this._heartbeatCounter = 0),
      (this._finished = !1),
      (this._idleTimeoutCanceledPermanently = !1),
      (this._beforeFinishCallbacks = []),
      (this._finishReason = Sy[4]),
      (this._autoFinishAllowed = !Z),
      D)
    )
      (nZ.DEBUG_BUILD &&
        bG.logger.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`),
        B.getScope().setSpan(this));
    if (!Z) this._restartIdleTimeout();
    setTimeout(() => {
      if (!this._finished)
        (this.setStatus('deadline_exceeded'), (this._finishReason = Sy[3]), this.end());
    }, this._finalTimeout);
  }
  end(A) {
    let B = dA1.spanTimeInputToSeconds(A);
    if (((this._finished = !0), (this.activities = {}), this.op === 'ui.action.click'))
      this.setAttribute(xv2, this._finishReason);
    if (this.spanRecorder) {
      nZ.DEBUG_BUILD &&
        bG.logger.log(
          '[Tracing] finishing IdleTransaction',
          new Date(B * 1000).toISOString(),
          this.op
        );
      for (let Q of this._beforeFinishCallbacks) Q(this, B);
      ((this.spanRecorder.spans = this.spanRecorder.spans.filter((Q) => {
        if (Q.spanContext().spanId === this.spanContext().spanId) return !0;
        if (!dA1.spanToJSON(Q).timestamp)
          (Q.setStatus('cancelled'),
            Q.end(B),
            nZ.DEBUG_BUILD &&
              bG.logger.log(
                '[Tracing] cancelling span since transaction ended early',
                JSON.stringify(Q, void 0, 2)
              ));
        let { start_timestamp: I, timestamp: G } = dA1.spanToJSON(Q),
          D = I && I < B,
          Z = (this._finalTimeout + this._idleTimeout) / 1000,
          Y = G && I && G - I < Z;
        if (nZ.DEBUG_BUILD) {
          let W = JSON.stringify(Q, void 0, 2);
          if (!D)
            bG.logger.log(
              '[Tracing] discarding Span since it happened after Transaction was finished',
              W
            );
          else if (!Y)
            bG.logger.log(
              '[Tracing] discarding Span since it finished after Transaction final timeout',
              W
            );
        }
        return D && Y;
      })),
        nZ.DEBUG_BUILD && bG.logger.log('[Tracing] flushing IdleTransaction'));
    } else nZ.DEBUG_BUILD && bG.logger.log('[Tracing] No active IdleTransaction');
    if (this._onScope) {
      let Q = this._idleHub.getScope();
      if (Q.getTransaction() === this) Q.setSpan(void 0);
    }
    return super.end(A);
  }
  registerBeforeFinishCallback(A) {
    this._beforeFinishCallbacks.push(A);
  }
  initSpanRecorder(A) {
    if (!this.spanRecorder) {
      let B = (I) => {
          if (this._finished) return;
          this._pushActivity(I);
        },
        Q = (I) => {
          if (this._finished) return;
          this._popActivity(I);
        };
      ((this.spanRecorder = new lw1(B, Q, this.spanContext().spanId, A)),
        nZ.DEBUG_BUILD && bG.logger.log('Starting heartbeat'),
        this._pingHeartbeat());
    }
    this.spanRecorder.add(this);
  }
  cancelIdleTimeout(A, { restartOnChildSpanChange: B } = { restartOnChildSpanChange: !0 }) {
    if (((this._idleTimeoutCanceledPermanently = B === !1), this._idleTimeoutID)) {
      if (
        (clearTimeout(this._idleTimeoutID),
        (this._idleTimeoutID = void 0),
        Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently)
      )
        ((this._finishReason = Sy[5]), this.end(A));
    }
  }
  setFinishReason(A) {
    this._finishReason = A;
  }
  sendAutoFinishSignal() {
    if (!this._autoFinishAllowed)
      (nZ.DEBUG_BUILD && bG.logger.log('[Tracing] Received finish signal for idle transaction.'),
        this._restartIdleTimeout(),
        (this._autoFinishAllowed = !0));
  }
  _restartIdleTimeout(A) {
    (this.cancelIdleTimeout(),
      (this._idleTimeoutID = setTimeout(() => {
        if (!this._finished && Object.keys(this.activities).length === 0)
          ((this._finishReason = Sy[1]), this.end(A));
      }, this._idleTimeout)));
  }
  _pushActivity(A) {
    (this.cancelIdleTimeout(void 0, {
      restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
    }),
      nZ.DEBUG_BUILD && bG.logger.log(`[Tracing] pushActivity: ${A}`),
      (this.activities[A] = !0),
      nZ.DEBUG_BUILD &&
        bG.logger.log('[Tracing] new activities count', Object.keys(this.activities).length));
  }
  _popActivity(A) {
    if (this.activities[A])
      (nZ.DEBUG_BUILD && bG.logger.log(`[Tracing] popActivity ${A}`),
        delete this.activities[A],
        nZ.DEBUG_BUILD &&
          bG.logger.log('[Tracing] new activities count', Object.keys(this.activities).length));
    if (Object.keys(this.activities).length === 0) {
      let B = bG.timestampInSeconds();
      if (this._idleTimeoutCanceledPermanently) {
        if (this._autoFinishAllowed) ((this._finishReason = Sy[5]), this.end(B));
      } else this._restartIdleTimeout(B + this._idleTimeout / 1000);
    }
  }
  _beat() {
    if (this._finished) return;
    let A = Object.keys(this.activities).join('');
    if (A === this._prevHeartbeatString) this._heartbeatCounter++;
    else this._heartbeatCounter = 1;
    if (((this._prevHeartbeatString = A), this._heartbeatCounter >= 3)) {
      if (this._autoFinishAllowed)
        (nZ.DEBUG_BUILD &&
          bG.logger.log('[Tracing] Transaction finished because of no change for 3 heart beats'),
          this.setStatus('deadline_exceeded'),
          (this._finishReason = Sy[0]),
          this.end());
    } else this._pingHeartbeat();
  }
  _pingHeartbeat() {
    (nZ.DEBUG_BUILD &&
      bG.logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
      setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval));
  }
}
W2A.IdleTransaction = Y2A;
W2A.IdleTransactionSpanRecorder = lw1;
W2A.TRACING_DEFAULTS = uA1;
