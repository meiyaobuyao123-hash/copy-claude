// Module: BX1
// Params: OZ2

Object.defineProperty(OZ2, '__esModule', { value: !0 });
OZ2.LeafLoadBalancer = OZ2.PickFirstLoadBalancer = OZ2.PickFirstLoadBalancingConfig = void 0;
OZ2.shuffled = MZ2;
OZ2.setup = cs6;
var Wa1 = j_(),
  B7 = $C(),
  d_ = ER(),
  UZ2 = qC(),
  gs6 = r8(),
  hs6 = O6(),
  NZ2 = qC(),
  $Z2 = D1('net'),
  ms6 = 'pick_first';
function Gt(A) {
  gs6.trace(hs6.LogVerbosity.DEBUG, ms6, A);
}
var Dt = 'pick_first',
  ds6 = 250;
class vm {
  constructor(A) {
    this.shuffleAddressList = A;
  }
  getLoadBalancerName() {
    return Dt;
  }
  toJsonObject() {
    return { [Dt]: { shuffleAddressList: this.shuffleAddressList } };
  }
  getShuffleAddressList() {
    return this.shuffleAddressList;
  }
  static createFromJson(A) {
    if ('shuffleAddressList' in A && typeof A.shuffleAddressList !== 'boolean')
      throw new Error('pick_first config field shuffleAddressList must be a boolean if provided');
    return new vm(A.shuffleAddressList === !0);
  }
}
OZ2.PickFirstLoadBalancingConfig = vm;
class qZ2 {
  constructor(A) {
    this.subchannel = A;
  }
  pick(A) {
    return {
      pickResultType: d_.PickResultType.COMPLETE,
      subchannel: this.subchannel,
      status: null,
      onCallStarted: null,
      onCallEnded: null,
    };
  }
}
function MZ2(A) {
  let B = A.slice();
  for (let Q = B.length - 1; Q > 1; Q--) {
    let I = Math.floor(Math.random() * (Q + 1)),
      G = B[Q];
    ((B[Q] = B[I]), (B[I] = G));
  }
  return B;
}
function us6(A) {
  if (A.length === 0) return [];
  let B = [],
    Q = [],
    I = [],
    G = NZ2.isTcpSubchannelAddress(A[0]) && $Z2.isIPv6(A[0].host);
  for (let Y of A)
    if (NZ2.isTcpSubchannelAddress(Y) && $Z2.isIPv6(Y.host)) Q.push(Y);
    else I.push(Y);
  let D = G ? Q : I,
    Z = G ? I : Q;
  for (let Y = 0; Y < Math.max(D.length, Z.length); Y++) {
    if (Y < D.length) B.push(D[Y]);
    if (Y < Z.length) B.push(Z[Y]);
  }
  return B;
}
var LZ2 = 'grpc-node.internal.pick-first.report_health_status';
class AX1 {
  constructor(A) {
    ((this.channelControlHelper = A),
      (this.children = []),
      (this.currentState = B7.ConnectivityState.IDLE),
      (this.currentSubchannelIndex = 0),
      (this.currentPick = null),
      (this.subchannelStateListener = (B, Q, I, G, D) => {
        this.onSubchannelStateUpdate(B, Q, I, D);
      }),
      (this.pickedSubchannelHealthListener = () => this.calculateAndReportNewState()),
      (this.stickyTransientFailureMode = !1),
      (this.reportHealthStatus = !1),
      (this.lastError = null),
      (this.latestAddressList = null),
      (this.latestOptions = {}),
      (this.connectionDelayTimeout = setTimeout(() => {}, 0)),
      clearTimeout(this.connectionDelayTimeout));
  }
  allChildrenHaveReportedTF() {
    return this.children.every((A) => A.hasReportedTransientFailure);
  }
  resetChildrenReportedTF() {
    this.children.every((A) => (A.hasReportedTransientFailure = !1));
  }
  calculateAndReportNewState() {
    var A;
    if (this.currentPick)
      if (this.reportHealthStatus && !this.currentPick.isHealthy()) {
        let B = `Picked subchannel ${this.currentPick.getAddress()} is unhealthy`;
        this.updateState(
          B7.ConnectivityState.TRANSIENT_FAILURE,
          new d_.UnavailablePicker({ details: B }),
          B
        );
      } else this.updateState(B7.ConnectivityState.READY, new qZ2(this.currentPick), null);
    else if (((A = this.latestAddressList) === null || A === void 0 ? void 0 : A.length) === 0) {
      let B = `No connection established. Last error: ${this.lastError}`;
      this.updateState(
        B7.ConnectivityState.TRANSIENT_FAILURE,
        new d_.UnavailablePicker({ details: B }),
        B
      );
    } else if (this.children.length === 0)
      this.updateState(B7.ConnectivityState.IDLE, new d_.QueuePicker(this), null);
    else if (this.stickyTransientFailureMode) {
      let B = `No connection established. Last error: ${this.lastError}`;
      this.updateState(
        B7.ConnectivityState.TRANSIENT_FAILURE,
        new d_.UnavailablePicker({ details: B }),
        B
      );
    } else this.updateState(B7.ConnectivityState.CONNECTING, new d_.QueuePicker(this), null);
  }
  requestReresolution() {
    this.channelControlHelper.requestReresolution();
  }
  maybeEnterStickyTransientFailureMode() {
    if (!this.allChildrenHaveReportedTF()) return;
    if (
      (this.requestReresolution(), this.resetChildrenReportedTF(), this.stickyTransientFailureMode)
    ) {
      this.calculateAndReportNewState();
      return;
    }
    this.stickyTransientFailureMode = !0;
    for (let { subchannel: A } of this.children) A.startConnecting();
    this.calculateAndReportNewState();
  }
  removeCurrentPick() {
    if (this.currentPick !== null)
      (this.currentPick.removeConnectivityStateListener(this.subchannelStateListener),
        this.channelControlHelper.removeChannelzChild(this.currentPick.getChannelzRef()),
        this.currentPick.removeHealthStateWatcher(this.pickedSubchannelHealthListener),
        this.currentPick.unref(),
        (this.currentPick = null));
  }
  onSubchannelStateUpdate(A, B, Q, I) {
    var G;
    if ((G = this.currentPick) === null || G === void 0 ? void 0 : G.realSubchannelEquals(A)) {
      if (Q !== B7.ConnectivityState.READY)
        (this.removeCurrentPick(), this.calculateAndReportNewState());
      return;
    }
    for (let [D, Z] of this.children.entries())
      if (A.realSubchannelEquals(Z.subchannel)) {
        if (Q === B7.ConnectivityState.READY) this.pickSubchannel(Z.subchannel);
        if (Q === B7.ConnectivityState.TRANSIENT_FAILURE) {
          if (((Z.hasReportedTransientFailure = !0), I)) this.lastError = I;
          if ((this.maybeEnterStickyTransientFailureMode(), D === this.currentSubchannelIndex))
            this.startNextSubchannelConnecting(D + 1);
        }
        Z.subchannel.startConnecting();
        return;
      }
  }
  startNextSubchannelConnecting(A) {
    clearTimeout(this.connectionDelayTimeout);
    for (let [B, Q] of this.children.entries())
      if (B >= A) {
        let I = Q.subchannel.getConnectivityState();
        if (I === B7.ConnectivityState.IDLE || I === B7.ConnectivityState.CONNECTING) {
          this.startConnecting(B);
          return;
        }
      }
    this.maybeEnterStickyTransientFailureMode();
  }
  startConnecting(A) {
    var B, Q;
    if (
      (clearTimeout(this.connectionDelayTimeout),
      (this.currentSubchannelIndex = A),
      this.children[A].subchannel.getConnectivityState() === B7.ConnectivityState.IDLE)
    )
      (Gt(
        'Start connecting to subchannel with address ' + this.children[A].subchannel.getAddress()
      ),
        process.nextTick(() => {
          var I;
          (I = this.children[A]) === null || I === void 0 || I.subchannel.startConnecting();
        }));
    ((this.connectionDelayTimeout = setTimeout(() => {
      this.startNextSubchannelConnecting(A + 1);
    }, ds6)),
      (Q = (B = this.connectionDelayTimeout).unref) === null || Q === void 0 || Q.call(B));
  }
  pickSubchannel(A) {
    (Gt('Pick subchannel with address ' + A.getAddress()),
      (this.stickyTransientFailureMode = !1),
      A.ref(),
      this.channelControlHelper.addChannelzChild(A.getChannelzRef()),
      this.removeCurrentPick(),
      this.resetSubchannelList(),
      A.addConnectivityStateListener(this.subchannelStateListener),
      A.addHealthStateWatcher(this.pickedSubchannelHealthListener),
      (this.currentPick = A),
      clearTimeout(this.connectionDelayTimeout),
      this.calculateAndReportNewState());
  }
  updateState(A, B, Q) {
    (Gt(B7.ConnectivityState[this.currentState] + ' -> ' + B7.ConnectivityState[A]),
      (this.currentState = A),
      this.channelControlHelper.updateState(A, B, Q));
  }
  resetSubchannelList() {
    for (let A of this.children)
      (A.subchannel.removeConnectivityStateListener(this.subchannelStateListener),
        A.subchannel.unref(),
        this.channelControlHelper.removeChannelzChild(A.subchannel.getChannelzRef()));
    ((this.currentSubchannelIndex = 0), (this.children = []));
  }
  connectToAddressList(A, B) {
    Gt('connectToAddressList([' + A.map((I) => UZ2.subchannelAddressToString(I)) + '])');
    let Q = A.map((I) => ({
      subchannel: this.channelControlHelper.createSubchannel(I, B),
      hasReportedTransientFailure: !1,
    }));
    for (let { subchannel: I } of Q)
      if (I.getConnectivityState() === B7.ConnectivityState.READY) {
        this.pickSubchannel(I);
        return;
      }
    for (let { subchannel: I } of Q)
      (I.ref(), this.channelControlHelper.addChannelzChild(I.getChannelzRef()));
    (this.resetSubchannelList(), (this.children = Q));
    for (let { subchannel: I } of this.children)
      I.addConnectivityStateListener(this.subchannelStateListener);
    for (let I of this.children)
      if (I.subchannel.getConnectivityState() === B7.ConnectivityState.TRANSIENT_FAILURE)
        I.hasReportedTransientFailure = !0;
    (this.startNextSubchannelConnecting(0), this.calculateAndReportNewState());
  }
  updateAddressList(A, B, Q) {
    if (!(B instanceof vm)) return;
    if (((this.reportHealthStatus = Q[LZ2]), B.getShuffleAddressList())) A = MZ2(A);
    let I = [].concat(...A.map((D) => D.addresses));
    if (
      (Gt('updateAddressList([' + I.map((D) => UZ2.subchannelAddressToString(D)) + '])'),
      I.length === 0)
    )
      this.lastError = 'No addresses resolved';
    let G = us6(I);
    ((this.latestAddressList = G), (this.latestOptions = Q), this.connectToAddressList(G, Q));
  }
  exitIdle() {
    if (this.currentState === B7.ConnectivityState.IDLE && this.latestAddressList)
      this.connectToAddressList(this.latestAddressList, this.latestOptions);
  }
  resetBackoff() {}
  destroy() {
    (this.resetSubchannelList(), this.removeCurrentPick());
  }
  getTypeName() {
    return Dt;
  }
}
OZ2.PickFirstLoadBalancer = AX1;
var ps6 = new vm(!1);
class RZ2 {
  constructor(A, B, Q) {
    ((this.endpoint = A), (this.options = Q), (this.latestState = B7.ConnectivityState.IDLE));
    let I = Wa1.createChildChannelControlHelper(B, {
      updateState: (G, D, Z) => {
        ((this.latestState = G), (this.latestPicker = D), B.updateState(G, D, Z));
      },
    });
    ((this.pickFirstBalancer = new AX1(I)),
      (this.latestPicker = new d_.QueuePicker(this.pickFirstBalancer)));
  }
  startConnecting() {
    this.pickFirstBalancer.updateAddressList(
      [this.endpoint],
      ps6,
      Object.assign(Object.assign({}, this.options), { [LZ2]: !0 })
    );
  }
  updateEndpoint(A, B) {
    if (((this.options = B), (this.endpoint = A), this.latestState !== B7.ConnectivityState.IDLE))
      this.startConnecting();
  }
  getConnectivityState() {
    return this.latestState;
  }
  getPicker() {
    return this.latestPicker;
  }
  getEndpoint() {
    return this.endpoint;
  }
  exitIdle() {
    this.pickFirstBalancer.exitIdle();
  }
  destroy() {
    this.pickFirstBalancer.destroy();
  }
}
OZ2.LeafLoadBalancer = RZ2;
function cs6() {
  (Wa1.registerLoadBalancerType(Dt, AX1, vm), Wa1.registerDefaultLoadBalancerType(Dt));
}
