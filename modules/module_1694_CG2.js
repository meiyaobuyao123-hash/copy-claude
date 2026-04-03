// Module: CG2
// Params: FG2

Object.defineProperty(FG2, '__esModule', { value: !0 });
FG2.Subchannel = void 0;
var C8 = $C(),
  pi6 = So(),
  $n1 = r8(),
  vC1 = O6(),
  ci6 = xY(),
  li6 = qC(),
  Xw = b_(),
  ii6 = 'subchannel',
  ni6 = 2147483647;
class WG2 {
  constructor(A, B, Q, I, G) {
    var D;
    ((this.channelTarget = A),
      (this.subchannelAddress = B),
      (this.options = Q),
      (this.connector = G),
      (this.connectivityState = C8.ConnectivityState.IDLE),
      (this.transport = null),
      (this.continueConnecting = !1),
      (this.stateListeners = new Set()),
      (this.refcount = 0),
      (this.channelzEnabled = !0));
    let Z = {
      initialDelay: Q['grpc.initial_reconnect_backoff_ms'],
      maxDelay: Q['grpc.max_reconnect_backoff_ms'],
    };
    if (
      ((this.backoffTimeout = new pi6.BackoffTimeout(() => {
        this.handleBackoffTimer();
      }, Z)),
      this.backoffTimeout.unref(),
      (this.subchannelAddressString = li6.subchannelAddressToString(B)),
      (this.keepaliveTime = (D = Q['grpc.keepalive_time_ms']) !== null && D !== void 0 ? D : -1),
      Q['grpc.enable_channelz'] === 0)
    )
      ((this.channelzEnabled = !1),
        (this.channelzTrace = new Xw.ChannelzTraceStub()),
        (this.callTracker = new Xw.ChannelzCallTrackerStub()),
        (this.childrenTracker = new Xw.ChannelzChildrenTrackerStub()),
        (this.streamTracker = new Xw.ChannelzCallTrackerStub()));
    else
      ((this.channelzTrace = new Xw.ChannelzTrace()),
        (this.callTracker = new Xw.ChannelzCallTracker()),
        (this.childrenTracker = new Xw.ChannelzChildrenTracker()),
        (this.streamTracker = new Xw.ChannelzCallTracker()));
    ((this.channelzRef = Xw.registerChannelzSubchannel(
      this.subchannelAddressString,
      () => this.getChannelzInfo(),
      this.channelzEnabled
    )),
      this.channelzTrace.addTrace('CT_INFO', 'Subchannel created'),
      this.trace('Subchannel constructed with options ' + JSON.stringify(Q, void 0, 2)),
      (this.secureConnector = I._createSecureConnector(A, Q)));
  }
  getChannelzInfo() {
    return {
      state: this.connectivityState,
      trace: this.channelzTrace,
      callTracker: this.callTracker,
      children: this.childrenTracker.getChildLists(),
      target: this.subchannelAddressString,
    };
  }
  trace(A) {
    $n1.trace(
      vC1.LogVerbosity.DEBUG,
      ii6,
      '(' + this.channelzRef.id + ') ' + this.subchannelAddressString + ' ' + A
    );
  }
  refTrace(A) {
    $n1.trace(
      vC1.LogVerbosity.DEBUG,
      'subchannel_refcount',
      '(' + this.channelzRef.id + ') ' + this.subchannelAddressString + ' ' + A
    );
  }
  handleBackoffTimer() {
    if (this.continueConnecting)
      this.transitionToState(
        [C8.ConnectivityState.TRANSIENT_FAILURE],
        C8.ConnectivityState.CONNECTING
      );
    else
      this.transitionToState([C8.ConnectivityState.TRANSIENT_FAILURE], C8.ConnectivityState.IDLE);
  }
  startBackoff() {
    this.backoffTimeout.runOnce();
  }
  stopBackoff() {
    (this.backoffTimeout.stop(), this.backoffTimeout.reset());
  }
  startConnectingInternal() {
    let A = this.options;
    if (A['grpc.keepalive_time_ms']) {
      let B = Math.min(this.keepaliveTime, ni6);
      A = Object.assign(Object.assign({}, A), { 'grpc.keepalive_time_ms': B });
    }
    this.connector.connect(this.subchannelAddress, this.secureConnector, A).then(
      (B) => {
        if (this.transitionToState([C8.ConnectivityState.CONNECTING], C8.ConnectivityState.READY)) {
          if (((this.transport = B), this.channelzEnabled))
            this.childrenTracker.refChild(B.getChannelzRef());
          B.addDisconnectListener((Q) => {
            if (
              (this.transitionToState([C8.ConnectivityState.READY], C8.ConnectivityState.IDLE),
              Q && this.keepaliveTime > 0)
            )
              ((this.keepaliveTime *= 2),
                $n1.log(
                  vC1.LogVerbosity.ERROR,
                  `Connection to ${ci6.uriToString(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTime} ms`
                ));
          });
        } else B.shutdown();
      },
      (B) => {
        this.transitionToState(
          [C8.ConnectivityState.CONNECTING],
          C8.ConnectivityState.TRANSIENT_FAILURE,
          `${B}`
        );
      }
    );
  }
  transitionToState(A, B, Q) {
    var I, G;
    if (A.indexOf(this.connectivityState) === -1) return !1;
    if (Q)
      this.trace(
        C8.ConnectivityState[this.connectivityState] +
          ' -> ' +
          C8.ConnectivityState[B] +
          ' with error "' +
          Q +
          '"'
      );
    else
      this.trace(C8.ConnectivityState[this.connectivityState] + ' -> ' + C8.ConnectivityState[B]);
    if (this.channelzEnabled)
      this.channelzTrace.addTrace(
        'CT_INFO',
        'Connectivity state change to ' + C8.ConnectivityState[B]
      );
    let D = this.connectivityState;
    switch (((this.connectivityState = B), B)) {
      case C8.ConnectivityState.READY:
        this.stopBackoff();
        break;
      case C8.ConnectivityState.CONNECTING:
        (this.startBackoff(), this.startConnectingInternal(), (this.continueConnecting = !1));
        break;
      case C8.ConnectivityState.TRANSIENT_FAILURE:
        if (this.channelzEnabled && this.transport)
          this.childrenTracker.unrefChild(this.transport.getChannelzRef());
        if (
          ((I = this.transport) === null || I === void 0 || I.shutdown(),
          (this.transport = null),
          !this.backoffTimeout.isRunning())
        )
          process.nextTick(() => {
            this.handleBackoffTimer();
          });
        break;
      case C8.ConnectivityState.IDLE:
        if (this.channelzEnabled && this.transport)
          this.childrenTracker.unrefChild(this.transport.getChannelzRef());
        ((G = this.transport) === null || G === void 0 || G.shutdown(), (this.transport = null));
        break;
      default:
        throw new Error(`Invalid state: unknown ConnectivityState ${B}`);
    }
    for (let Z of this.stateListeners) Z(this, D, B, this.keepaliveTime, Q);
    return !0;
  }
  ref() {
    (this.refTrace('refcount ' + this.refcount + ' -> ' + (this.refcount + 1)),
      (this.refcount += 1));
  }
  unref() {
    if (
      (this.refTrace('refcount ' + this.refcount + ' -> ' + (this.refcount - 1)),
      (this.refcount -= 1),
      this.refcount === 0)
    )
      (this.channelzTrace.addTrace('CT_INFO', 'Shutting down'),
        Xw.unregisterChannelzRef(this.channelzRef),
        this.secureConnector.destroy(),
        process.nextTick(() => {
          this.transitionToState(
            [C8.ConnectivityState.CONNECTING, C8.ConnectivityState.READY],
            C8.ConnectivityState.IDLE
          );
        }));
  }
  unrefIfOneRef() {
    if (this.refcount === 1) return (this.unref(), !0);
    return !1;
  }
  createCall(A, B, Q, I) {
    if (!this.transport) throw new Error('Cannot create call, subchannel not READY');
    let G;
    if (this.channelzEnabled)
      (this.callTracker.addCallStarted(),
        this.streamTracker.addCallStarted(),
        (G = {
          onCallEnd: (D) => {
            if (D.code === vC1.Status.OK) this.callTracker.addCallSucceeded();
            else this.callTracker.addCallFailed();
          },
        }));
    else G = {};
    return this.transport.createCall(A, B, Q, I, G);
  }
  startConnecting() {
    process.nextTick(() => {
      if (!this.transitionToState([C8.ConnectivityState.IDLE], C8.ConnectivityState.CONNECTING)) {
        if (this.connectivityState === C8.ConnectivityState.TRANSIENT_FAILURE)
          this.continueConnecting = !0;
      }
    });
  }
  getConnectivityState() {
    return this.connectivityState;
  }
  addConnectivityStateListener(A) {
    this.stateListeners.add(A);
  }
  removeConnectivityStateListener(A) {
    this.stateListeners.delete(A);
  }
  resetBackoff() {
    process.nextTick(() => {
      (this.backoffTimeout.reset(),
        this.transitionToState(
          [C8.ConnectivityState.TRANSIENT_FAILURE],
          C8.ConnectivityState.CONNECTING
        ));
    });
  }
  getAddress() {
    return this.subchannelAddressString;
  }
  getChannelzRef() {
    return this.channelzRef;
  }
  isHealthy() {
    return !0;
  }
  addHealthStateWatcher(A) {}
  removeHealthStateWatcher(A) {}
  getRealSubchannel() {
    return this;
  }
  realSubchannelEquals(A) {
    return A.getRealSubchannel() === this;
  }
  throttleKeepalive(A) {
    if (A > this.keepaliveTime) this.keepaliveTime = A;
  }
  getCallCredentials() {
    return this.secureConnector.getCallCredentials();
  }
}
FG2.Subchannel = WG2;
