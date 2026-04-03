// Module: AE1
// Params: y2A

Object.defineProperty(y2A, '__esModule', { value: !0 });
var C5 = tA(),
  Zg2 = cA1(),
  eK = vQ(),
  O2A = sw1(),
  Yg2 = DJ(),
  Wg2 = oK(),
  iA1 = qE(),
  Fg2 = R2A(),
  T2A = $y(),
  Jg2 = sO(),
  Cg2 = qA1(),
  P2A = "Not capturing exception because it's already been captured.";
class S2A {
  constructor(A) {
    if (
      ((this._options = A),
      (this._integrations = {}),
      (this._integrationsInitialized = !1),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      A.dsn)
    )
      this._dsn = C5.makeDsn(A.dsn);
    else eK.DEBUG_BUILD && C5.logger.warn('No DSN provided, client will not send events.');
    if (this._dsn) {
      let B = Zg2.getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, A);
      this._transport = A.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...A.transportOptions,
        url: B,
      });
    }
  }
  captureException(A, B, Q) {
    if (C5.checkOrSetAlreadyCaught(A)) {
      eK.DEBUG_BUILD && C5.logger.log(P2A);
      return;
    }
    let I = B && B.event_id;
    return (
      this._process(
        this.eventFromException(A, B)
          .then((G) => this._captureEvent(G, B, Q))
          .then((G) => {
            I = G;
          })
      ),
      I
    );
  }
  captureMessage(A, B, Q, I) {
    let G = Q && Q.event_id,
      D = C5.isParameterizedString(A) ? A : String(A),
      Z = C5.isPrimitive(A) ? this.eventFromMessage(D, B, Q) : this.eventFromException(A, Q);
    return (
      this._process(
        Z.then((Y) => this._captureEvent(Y, Q, I)).then((Y) => {
          G = Y;
        })
      ),
      G
    );
  }
  captureEvent(A, B, Q) {
    if (B && B.originalException && C5.checkOrSetAlreadyCaught(B.originalException)) {
      eK.DEBUG_BUILD && C5.logger.log(P2A);
      return;
    }
    let I = B && B.event_id,
      D = (A.sdkProcessingMetadata || {}).capturedSpanScope;
    return (
      this._process(
        this._captureEvent(A, B, D || Q).then((Z) => {
          I = Z;
        })
      ),
      I
    );
  }
  captureSession(A) {
    if (typeof A.release !== 'string')
      eK.DEBUG_BUILD &&
        C5.logger.warn('Discarded session because of missing or non-string release');
    else (this.sendSession(A), T2A.updateSession(A, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(A) {
    let B = this._transport;
    if (B) {
      if (this.metricsAggregator) this.metricsAggregator.flush();
      return this._isClientDoneProcessing(A).then((Q) => {
        return B.flush(A).then((I) => Q && I);
      });
    } else return C5.resolvedSyncPromise(!0);
  }
  close(A) {
    return this.flush(A).then((B) => {
      if (((this.getOptions().enabled = !1), this.metricsAggregator))
        this.metricsAggregator.close();
      return B;
    });
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(A) {
    this._eventProcessors.push(A);
  }
  setupIntegrations(A) {
    if (
      (A && !this._integrationsInitialized) ||
      (this._isEnabled() && !this._integrationsInitialized)
    )
      this._setupIntegrations();
  }
  init() {
    if (this._isEnabled()) this._setupIntegrations();
  }
  getIntegrationById(A) {
    return this.getIntegrationByName(A);
  }
  getIntegrationByName(A) {
    return this._integrations[A];
  }
  getIntegration(A) {
    try {
      return this._integrations[A.id] || null;
    } catch (B) {
      return (
        eK.DEBUG_BUILD &&
          C5.logger.warn(`Cannot retrieve integration ${A.id} from the current Client`),
        null
      );
    }
  }
  addIntegration(A) {
    let B = this._integrations[A.name];
    if ((iA1.setupIntegration(this, A, this._integrations), !B))
      iA1.afterSetupIntegrations(this, [A]);
  }
  sendEvent(A, B = {}) {
    this.emit('beforeSendEvent', A, B);
    let Q = O2A.createEventEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
    for (let G of B.attachments || [])
      Q = C5.addItemToEnvelope(
        Q,
        C5.createAttachmentEnvelopeItem(
          G,
          this._options.transportOptions && this._options.transportOptions.textEncoder
        )
      );
    let I = this._sendEnvelope(Q);
    if (I) I.then((G) => this.emit('afterSendEvent', A, G), null);
  }
  sendSession(A) {
    let B = O2A.createSessionEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
    this._sendEnvelope(B);
  }
  recordDroppedEvent(A, B, Q) {
    if (this._options.sendClientReports) {
      let I = typeof Q === 'number' ? Q : 1,
        G = `${A}:${B}`;
      (eK.DEBUG_BUILD && C5.logger.log(`Recording outcome: "${G}"${I > 1 ? ` (${I} times)` : ''}`),
        (this._outcomes[G] = (this._outcomes[G] || 0) + I));
    }
  }
  captureAggregateMetrics(A) {
    eK.DEBUG_BUILD && C5.logger.log(`Flushing aggregated metrics, number of metrics: ${A.length}`);
    let B = Fg2.createMetricEnvelope(A, this._dsn, this._options._metadata, this._options.tunnel);
    this._sendEnvelope(B);
  }
  on(A, B) {
    if (!this._hooks[A]) this._hooks[A] = [];
    this._hooks[A].push(B);
  }
  emit(A, ...B) {
    if (this._hooks[A]) this._hooks[A].forEach((Q) => Q(...B));
  }
  _setupIntegrations() {
    let { integrations: A } = this._options;
    ((this._integrations = iA1.setupIntegrations(this, A)),
      iA1.afterSetupIntegrations(this, A),
      (this._integrationsInitialized = !0));
  }
  _updateSessionFromEvent(A, B) {
    let Q = !1,
      I = !1,
      G = B.exception && B.exception.values;
    if (G) {
      I = !0;
      for (let Y of G) {
        let W = Y.mechanism;
        if (W && W.handled === !1) {
          Q = !0;
          break;
        }
      }
    }
    let D = A.status === 'ok';
    if ((D && A.errors === 0) || (D && Q))
      (T2A.updateSession(A, {
        ...(Q && { status: 'crashed' }),
        errors: A.errors || Number(I || Q),
      }),
        this.captureSession(A));
  }
  _isClientDoneProcessing(A) {
    return new C5.SyncPromise((B) => {
      let Q = 0,
        I = 1,
        G = setInterval(() => {
          if (this._numProcessing == 0) (clearInterval(G), B(!0));
          else if (((Q += I), A && Q >= A)) (clearInterval(G), B(!1));
        }, I);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(A, B, Q, I = Wg2.getIsolationScope()) {
    let G = this.getOptions(),
      D = Object.keys(this._integrations);
    if (!B.integrations && D.length > 0) B.integrations = D;
    return (
      this.emit('preprocessEvent', A, B),
      Cg2.prepareEvent(G, A, B, Q, this, I).then((Z) => {
        if (Z === null) return Z;
        let Y = { ...I.getPropagationContext(), ...(Q ? Q.getPropagationContext() : void 0) };
        if (!(Z.contexts && Z.contexts.trace) && Y) {
          let { traceId: F, spanId: J, parentSpanId: C, dsc: X } = Y;
          Z.contexts = { trace: { trace_id: F, span_id: J, parent_span_id: C }, ...Z.contexts };
          let V = X ? X : Jg2.getDynamicSamplingContextFromClient(F, this, Q);
          Z.sdkProcessingMetadata = { dynamicSamplingContext: V, ...Z.sdkProcessingMetadata };
        }
        return Z;
      })
    );
  }
  _captureEvent(A, B = {}, Q) {
    return this._processEvent(A, B, Q).then(
      (I) => {
        return I.event_id;
      },
      (I) => {
        if (eK.DEBUG_BUILD) {
          let G = I;
          if (G.logLevel === 'log') C5.logger.log(G.message);
          else C5.logger.warn(G);
        }
        return;
      }
    );
  }
  _processEvent(A, B, Q) {
    let I = this.getOptions(),
      { sampleRate: G } = I,
      D = j2A(A),
      Z = _2A(A),
      Y = A.type || 'error',
      W = `before send for type \`${Y}\``;
    if (Z && typeof G === 'number' && Math.random() > G)
      return (
        this.recordDroppedEvent('sample_rate', 'error', A),
        C5.rejectedSyncPromise(
          new C5.SentryError(
            `Discarding event because it's not included in the random sample (sampling rate = ${G})`,
            'log'
          )
        )
      );
    let F = Y === 'replay_event' ? 'replay' : Y,
      C = (A.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(A, B, Q, C)
      .then((X) => {
        if (X === null)
          throw (
            this.recordDroppedEvent('event_processor', F, A),
            new C5.SentryError('An event processor returned `null`, will not send event.', 'log')
          );
        if (B.data && B.data.__sentry__ === !0) return X;
        let K = Vg2(I, X, B);
        return Xg2(K, W);
      })
      .then((X) => {
        if (X === null) {
          if ((this.recordDroppedEvent('before_send', F, A), D)) {
            let N = 1 + (A.spans || []).length;
            this.recordDroppedEvent('before_send', 'span', N);
          }
          throw new C5.SentryError(`${W} returned \`null\`, will not send event.`, 'log');
        }
        let V = Q && Q.getSession();
        if (!D && V) this._updateSessionFromEvent(V, X);
        if (D) {
          let U =
              (X.sdkProcessingMetadata && X.sdkProcessingMetadata.spanCountBeforeProcessing) || 0,
            N = X.spans ? X.spans.length : 0,
            q = U - N;
          if (q > 0) this.recordDroppedEvent('before_send', 'span', q);
        }
        let K = X.transaction_info;
        if (D && K && X.transaction !== A.transaction)
          X.transaction_info = { ...K, source: 'custom' };
        return (this.sendEvent(X, B), X);
      })
      .then(null, (X) => {
        if (X instanceof C5.SentryError) throw X;
        throw (
          this.captureException(X, { data: { __sentry__: !0 }, originalException: X }),
          new C5.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${X}`)
        );
      });
  }
  _process(A) {
    (this._numProcessing++,
      A.then(
        (B) => {
          return (this._numProcessing--, B);
        },
        (B) => {
          return (this._numProcessing--, B);
        }
      ));
  }
  _sendEnvelope(A) {
    if ((this.emit('beforeEnvelope', A), this._isEnabled() && this._transport))
      return this._transport.send(A).then(null, (B) => {
        eK.DEBUG_BUILD && C5.logger.error('Error while sending event:', B);
      });
    else eK.DEBUG_BUILD && C5.logger.error('Transport disabled');
  }
  _clearOutcomes() {
    let A = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.keys(A).map((B) => {
        let [Q, I] = B.split(':');
        return { reason: Q, category: I, quantity: A[B] };
      })
    );
  }
}
function Xg2(A, B) {
  let Q = `${B} must return \`null\` or a valid event.`;
  if (C5.isThenable(A))
    return A.then(
      (I) => {
        if (!C5.isPlainObject(I) && I !== null) throw new C5.SentryError(Q);
        return I;
      },
      (I) => {
        throw new C5.SentryError(`${B} rejected with ${I}`);
      }
    );
  else if (!C5.isPlainObject(A) && A !== null) throw new C5.SentryError(Q);
  return A;
}
function Vg2(A, B, Q) {
  let { beforeSend: I, beforeSendTransaction: G } = A;
  if (_2A(B) && I) return I(B, Q);
  if (j2A(B) && G) {
    if (B.spans) {
      let D = B.spans.length;
      B.sdkProcessingMetadata = { ...B.sdkProcessingMetadata, spanCountBeforeProcessing: D };
    }
    return G(B, Q);
  }
  return B;
}
function _2A(A) {
  return A.type === void 0;
}
function j2A(A) {
  return A.type === 'transaction';
}
function Kg2(A) {
  let B = Yg2.getClient();
  if (!B || !B.addEventProcessor) return;
  B.addEventProcessor(A);
}
y2A.BaseClient = S2A;
y2A.addEventProcessor = Kg2;
