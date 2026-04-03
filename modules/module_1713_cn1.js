// Module: cn1
// Params: jD2

Object.defineProperty(jD2, '__esModule', { value: !0 });
jD2.InternalChannel = jD2.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = void 0;
var _a6 = To(),
  ja6 = e32(),
  ya6 = mG2(),
  pn1 = ER(),
  ka6 = XD(),
  TR = O6(),
  xa6 = fn1(),
  fa6 = ID2(),
  OD2 = Iw(),
  aC1 = r8(),
  va6 = Tn1(),
  sC1 = xY(),
  TC = $C(),
  It = b_(),
  ba6 = CD2(),
  ga6 = Bt(),
  ha6 = zD2(),
  dn1 = _n1(),
  ma6 = pC1(),
  un1 = qD2(),
  da6 = nC1(),
  ua6 = 2147483647,
  pa6 = 1000,
  ca6 = 1800000,
  rC1 = new Map(),
  la6 = 16777216,
  ia6 = 1048576;
class TD2 extends da6.BaseSubchannelWrapper {
  constructor(A, B) {
    super(A);
    ((this.channel = B),
      (this.refCount = 0),
      (this.subchannelStateListener = (Q, I, G, D) => {
        B.throttleKeepalive(D);
      }));
  }
  ref() {
    if (this.refCount === 0)
      (this.child.addConnectivityStateListener(this.subchannelStateListener),
        this.channel.addWrappedSubchannel(this));
    (this.child.ref(), (this.refCount += 1));
  }
  unref() {
    if ((this.child.unref(), (this.refCount -= 1), this.refCount <= 0))
      (this.child.removeConnectivityStateListener(this.subchannelStateListener),
        this.channel.removeWrappedSubchannel(this));
  }
}
class PD2 {
  pick(A) {
    return {
      pickResultType: pn1.PickResultType.DROP,
      status: {
        code: TR.Status.UNAVAILABLE,
        details: 'Channel closed before call started',
        metadata: new ka6.Metadata(),
      },
      subchannel: null,
      onCallStarted: null,
      onCallEnded: null,
    };
  }
}
jD2.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = 'grpc.internal.no_subchannel';
class SD2 {
  constructor(A) {
    ((this.target = A),
      (this.trace = new It.ChannelzTrace()),
      (this.callTracker = new It.ChannelzCallTracker()),
      (this.childrenTracker = new It.ChannelzChildrenTracker()),
      (this.state = TC.ConnectivityState.IDLE));
  }
  getChannelzInfoCallback() {
    return () => {
      return {
        target: this.target,
        state: this.state,
        trace: this.trace,
        callTracker: this.callTracker,
        children: this.childrenTracker.getChildLists(),
      };
    };
  }
}
class _D2 {
  constructor(A, B, Q) {
    var I, G, D, Z, Y, W;
    if (
      ((this.credentials = B),
      (this.options = Q),
      (this.connectivityState = TC.ConnectivityState.IDLE),
      (this.currentPicker = new pn1.UnavailablePicker()),
      (this.configSelectionQueue = []),
      (this.pickQueue = []),
      (this.connectivityStateWatchers = []),
      (this.callRefTimer = null),
      (this.configSelector = null),
      (this.currentResolutionError = null),
      (this.wrappedSubchannels = new Set()),
      (this.callCount = 0),
      (this.idleTimer = null),
      (this.channelzEnabled = !0),
      (this.randomChannelId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
      typeof A !== 'string')
    )
      throw new TypeError('Channel target must be a string');
    if (!(B instanceof _a6.ChannelCredentials))
      throw new TypeError('Channel credentials must be a ChannelCredentials object');
    if (Q) {
      if (typeof Q !== 'object') throw new TypeError('Channel options must be an object');
    }
    this.channelzInfoTracker = new SD2(A);
    let F = sC1.parseUri(A);
    if (F === null) throw new Error(`Could not parse target name "${A}"`);
    let J = OD2.mapUriDefaultScheme(F);
    if (J === null) throw new Error(`Could not find a default scheme for target name "${A}"`);
    if (this.options['grpc.enable_channelz'] === 0) this.channelzEnabled = !1;
    if (
      ((this.channelzRef = It.registerChannelzChannel(
        A,
        this.channelzInfoTracker.getChannelzInfoCallback(),
        this.channelzEnabled
      )),
      this.channelzEnabled)
    )
      this.channelzInfoTracker.trace.addTrace('CT_INFO', 'Channel created');
    if (this.options['grpc.default_authority'])
      this.defaultAuthority = this.options['grpc.default_authority'];
    else this.defaultAuthority = OD2.getDefaultAuthority(J);
    let C = va6.mapProxyName(J, Q);
    ((this.target = C.target),
      (this.options = Object.assign({}, this.options, C.extraOptions)),
      (this.subchannelPool = ya6.getSubchannelPool(
        ((I = Q['grpc.use_local_subchannel_pool']) !== null && I !== void 0 ? I : 0) === 0
      )),
      (this.retryBufferTracker = new un1.MessageBufferTracker(
        (G = Q['grpc.retry_buffer_size']) !== null && G !== void 0 ? G : la6,
        (D = Q['grpc.per_rpc_retry_buffer_size']) !== null && D !== void 0 ? D : ia6
      )),
      (this.keepaliveTime = (Z = Q['grpc.keepalive_time_ms']) !== null && Z !== void 0 ? Z : -1),
      (this.idleTimeoutMs = Math.max(
        (Y = Q['grpc.client_idle_timeout_ms']) !== null && Y !== void 0 ? Y : ca6,
        pa6
      )));
    let X = {
      createSubchannel: (K, U) => {
        let N = {};
        for (let [R, T] of Object.entries(U))
          if (!R.startsWith(jD2.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX)) N[R] = T;
        let q = this.subchannelPool.getOrCreateSubchannel(this.target, K, N, this.credentials);
        if ((q.throttleKeepalive(this.keepaliveTime), this.channelzEnabled))
          this.channelzInfoTracker.trace.addTrace(
            'CT_INFO',
            'Created subchannel or used existing subchannel',
            q.getChannelzRef()
          );
        return new TD2(q, this);
      },
      updateState: (K, U) => {
        this.currentPicker = U;
        let N = this.pickQueue.slice();
        if (((this.pickQueue = []), N.length > 0)) this.callRefTimerUnref();
        for (let q of N) q.doPick();
        this.updateState(K);
      },
      requestReresolution: () => {
        throw new Error('Resolving load balancer should never call requestReresolution');
      },
      addChannelzChild: (K) => {
        if (this.channelzEnabled) this.channelzInfoTracker.childrenTracker.refChild(K);
      },
      removeChannelzChild: (K) => {
        if (this.channelzEnabled) this.channelzInfoTracker.childrenTracker.unrefChild(K);
      },
    };
    ((this.resolvingLoadBalancer = new ja6.ResolvingLoadBalancer(
      this.target,
      X,
      Q,
      (K, U) => {
        var N;
        if (K.retryThrottling)
          rC1.set(
            this.getTarget(),
            new un1.RetryThrottler(
              K.retryThrottling.maxTokens,
              K.retryThrottling.tokenRatio,
              rC1.get(this.getTarget())
            )
          );
        else rC1.delete(this.getTarget());
        if (this.channelzEnabled)
          this.channelzInfoTracker.trace.addTrace('CT_INFO', 'Address resolution succeeded');
        ((N = this.configSelector) === null || N === void 0 || N.unref(),
          (this.configSelector = U),
          (this.currentResolutionError = null),
          process.nextTick(() => {
            let q = this.configSelectionQueue;
            if (((this.configSelectionQueue = []), q.length > 0)) this.callRefTimerUnref();
            for (let M of q) M.getConfig();
          }));
      },
      (K) => {
        if (this.channelzEnabled)
          this.channelzInfoTracker.trace.addTrace(
            'CT_WARNING',
            'Address resolution failed with code ' + K.code + ' and details "' + K.details + '"'
          );
        if (this.configSelectionQueue.length > 0)
          this.trace('Name resolution failed with calls queued for config selection');
        if (this.configSelector === null)
          this.currentResolutionError = Object.assign(
            Object.assign({}, ma6.restrictControlPlaneStatusCode(K.code, K.details)),
            { metadata: K.metadata }
          );
        let U = this.configSelectionQueue;
        if (((this.configSelectionQueue = []), U.length > 0)) this.callRefTimerUnref();
        for (let N of U) N.reportResolverError(K);
      }
    )),
      (this.filterStackFactory = new xa6.FilterStackFactory([
        new fa6.CompressionFilterFactory(this, this.options),
      ])),
      this.trace('Channel constructed with options ' + JSON.stringify(Q, void 0, 2)));
    let V = new Error();
    if (aC1.isTracerEnabled('channel_stacktrace'))
      aC1.trace(
        TR.LogVerbosity.DEBUG,
        'channel_stacktrace',
        '(' +
          this.channelzRef.id +
          `) Channel constructed 
` +
          ((W = V.stack) === null || W === void 0
            ? void 0
            : W.substring(
                V.stack.indexOf(`
`) + 1
              ))
      );
    this.lastActivityTimestamp = new Date();
  }
  trace(A, B) {
    aC1.trace(
      B !== null && B !== void 0 ? B : TR.LogVerbosity.DEBUG,
      'channel',
      '(' + this.channelzRef.id + ') ' + sC1.uriToString(this.target) + ' ' + A
    );
  }
  callRefTimerRef() {
    var A, B, Q, I;
    if (!this.callRefTimer) this.callRefTimer = setInterval(() => {}, ua6);
    if (!((B = (A = this.callRefTimer).hasRef) === null || B === void 0 ? void 0 : B.call(A)))
      (this.trace(
        'callRefTimer.ref | configSelectionQueue.length=' +
          this.configSelectionQueue.length +
          ' pickQueue.length=' +
          this.pickQueue.length
      ),
        (I = (Q = this.callRefTimer).ref) === null || I === void 0 || I.call(Q));
  }
  callRefTimerUnref() {
    var A, B, Q;
    if (
      !((A = this.callRefTimer) === null || A === void 0 ? void 0 : A.hasRef) ||
      this.callRefTimer.hasRef()
    )
      (this.trace(
        'callRefTimer.unref | configSelectionQueue.length=' +
          this.configSelectionQueue.length +
          ' pickQueue.length=' +
          this.pickQueue.length
      ),
        (Q = (B = this.callRefTimer) === null || B === void 0 ? void 0 : B.unref) === null ||
          Q === void 0 ||
          Q.call(B));
  }
  removeConnectivityStateWatcher(A) {
    let B = this.connectivityStateWatchers.findIndex((Q) => Q === A);
    if (B >= 0) this.connectivityStateWatchers.splice(B, 1);
  }
  updateState(A) {
    if (
      (aC1.trace(
        TR.LogVerbosity.DEBUG,
        'connectivity_state',
        '(' +
          this.channelzRef.id +
          ') ' +
          sC1.uriToString(this.target) +
          ' ' +
          TC.ConnectivityState[this.connectivityState] +
          ' -> ' +
          TC.ConnectivityState[A]
      ),
      this.channelzEnabled)
    )
      this.channelzInfoTracker.trace.addTrace(
        'CT_INFO',
        'Connectivity state change to ' + TC.ConnectivityState[A]
      );
    ((this.connectivityState = A), (this.channelzInfoTracker.state = A));
    let B = this.connectivityStateWatchers.slice();
    for (let Q of B)
      if (A !== Q.currentState) {
        if (Q.timer) clearTimeout(Q.timer);
        (this.removeConnectivityStateWatcher(Q), Q.callback());
      }
    if (A !== TC.ConnectivityState.TRANSIENT_FAILURE) this.currentResolutionError = null;
  }
  throttleKeepalive(A) {
    if (A > this.keepaliveTime) {
      this.keepaliveTime = A;
      for (let B of this.wrappedSubchannels) B.throttleKeepalive(A);
    }
  }
  addWrappedSubchannel(A) {
    this.wrappedSubchannels.add(A);
  }
  removeWrappedSubchannel(A) {
    this.wrappedSubchannels.delete(A);
  }
  doPick(A, B) {
    return this.currentPicker.pick({ metadata: A, extraPickInfo: B });
  }
  queueCallForPick(A) {
    (this.pickQueue.push(A), this.callRefTimerRef());
  }
  getConfig(A, B) {
    if (this.connectivityState !== TC.ConnectivityState.SHUTDOWN)
      this.resolvingLoadBalancer.exitIdle();
    if (this.configSelector)
      return { type: 'SUCCESS', config: this.configSelector.invoke(A, B, this.randomChannelId) };
    else if (this.currentResolutionError)
      return { type: 'ERROR', error: this.currentResolutionError };
    else return { type: 'NONE' };
  }
  queueCallForConfig(A) {
    (this.configSelectionQueue.push(A), this.callRefTimerRef());
  }
  enterIdle() {
    if (
      (this.resolvingLoadBalancer.destroy(),
      this.updateState(TC.ConnectivityState.IDLE),
      (this.currentPicker = new pn1.QueuePicker(this.resolvingLoadBalancer)),
      this.idleTimer)
    )
      (clearTimeout(this.idleTimer), (this.idleTimer = null));
    if (this.callRefTimer) (clearInterval(this.callRefTimer), (this.callRefTimer = null));
  }
  startIdleTimeout(A) {
    var B, Q;
    ((this.idleTimer = setTimeout(() => {
      if (this.callCount > 0) {
        this.startIdleTimeout(this.idleTimeoutMs);
        return;
      }
      let G = new Date().valueOf() - this.lastActivityTimestamp.valueOf();
      if (G >= this.idleTimeoutMs)
        (this.trace('Idle timer triggered after ' + this.idleTimeoutMs + 'ms of inactivity'),
          this.enterIdle());
      else this.startIdleTimeout(this.idleTimeoutMs - G);
    }, A)),
      (Q = (B = this.idleTimer).unref) === null || Q === void 0 || Q.call(B));
  }
  maybeStartIdleTimer() {
    if (this.connectivityState !== TC.ConnectivityState.SHUTDOWN && !this.idleTimer)
      this.startIdleTimeout(this.idleTimeoutMs);
  }
  onCallStart() {
    if (this.channelzEnabled) this.channelzInfoTracker.callTracker.addCallStarted();
    this.callCount += 1;
  }
  onCallEnd(A) {
    if (this.channelzEnabled)
      if (A.code === TR.Status.OK) this.channelzInfoTracker.callTracker.addCallSucceeded();
      else this.channelzInfoTracker.callTracker.addCallFailed();
    ((this.callCount -= 1), (this.lastActivityTimestamp = new Date()), this.maybeStartIdleTimer());
  }
  createLoadBalancingCall(A, B, Q, I, G) {
    let D = dn1.getNextCallNumber();
    return (
      this.trace('createLoadBalancingCall [' + D + '] method="' + B + '"'),
      new ba6.LoadBalancingCall(this, A, B, Q, I, G, D)
    );
  }
  createRetryingCall(A, B, Q, I, G) {
    let D = dn1.getNextCallNumber();
    return (
      this.trace('createRetryingCall [' + D + '] method="' + B + '"'),
      new un1.RetryingCall(
        this,
        A,
        B,
        Q,
        I,
        G,
        D,
        this.retryBufferTracker,
        rC1.get(this.getTarget())
      )
    );
  }
  createResolvingCall(A, B, Q, I, G) {
    let D = dn1.getNextCallNumber();
    this.trace(
      'createResolvingCall [' + D + '] method="' + A + '", deadline=' + ga6.deadlineToString(B)
    );
    let Z = {
        deadline: B,
        flags: G !== null && G !== void 0 ? G : TR.Propagate.DEFAULTS,
        host: Q !== null && Q !== void 0 ? Q : this.defaultAuthority,
        parentCall: I,
      },
      Y = new ha6.ResolvingCall(this, A, Z, this.filterStackFactory.clone(), D);
    return (
      this.onCallStart(),
      Y.addStatusWatcher((W) => {
        this.onCallEnd(W);
      }),
      Y
    );
  }
  close() {
    var A;
    (this.resolvingLoadBalancer.destroy(),
      this.updateState(TC.ConnectivityState.SHUTDOWN),
      (this.currentPicker = new PD2()));
    for (let B of this.configSelectionQueue)
      B.cancelWithStatus(TR.Status.UNAVAILABLE, 'Channel closed before call started');
    this.configSelectionQueue = [];
    for (let B of this.pickQueue)
      B.cancelWithStatus(TR.Status.UNAVAILABLE, 'Channel closed before call started');
    if (((this.pickQueue = []), this.callRefTimer)) clearInterval(this.callRefTimer);
    if (this.idleTimer) clearTimeout(this.idleTimer);
    if (this.channelzEnabled) It.unregisterChannelzRef(this.channelzRef);
    (this.subchannelPool.unrefUnusedSubchannels(),
      (A = this.configSelector) === null || A === void 0 || A.unref(),
      (this.configSelector = null));
  }
  getTarget() {
    return sC1.uriToString(this.target);
  }
  getConnectivityState(A) {
    let B = this.connectivityState;
    if (A)
      (this.resolvingLoadBalancer.exitIdle(),
        (this.lastActivityTimestamp = new Date()),
        this.maybeStartIdleTimer());
    return B;
  }
  watchConnectivityState(A, B, Q) {
    if (this.connectivityState === TC.ConnectivityState.SHUTDOWN)
      throw new Error('Channel has been shut down');
    let I = null;
    if (B !== 1 / 0) {
      let D = B instanceof Date ? B : new Date(B),
        Z = new Date();
      if (B === -1 / 0 || D <= Z) {
        process.nextTick(Q, new Error('Deadline passed without connectivity state change'));
        return;
      }
      I = setTimeout(() => {
        (this.removeConnectivityStateWatcher(G),
          Q(new Error('Deadline passed without connectivity state change')));
      }, D.getTime() - Z.getTime());
    }
    let G = { currentState: A, callback: Q, timer: I };
    this.connectivityStateWatchers.push(G);
  }
  getChannelzRef() {
    return this.channelzRef;
  }
  createCall(A, B, Q, I, G) {
    if (typeof A !== 'string') throw new TypeError('Channel#createCall: method must be a string');
    if (!(typeof B === 'number' || B instanceof Date))
      throw new TypeError('Channel#createCall: deadline must be a number or Date');
    if (this.connectivityState === TC.ConnectivityState.SHUTDOWN)
      throw new Error('Channel has been shut down');
    return this.createResolvingCall(A, B, Q, I, G);
  }
  getOptions() {
    return this.options;
  }
}
jD2.InternalChannel = _D2;
