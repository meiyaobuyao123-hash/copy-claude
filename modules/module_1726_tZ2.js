// Module: tZ2
// Params: rZ2

Object.defineProperty(rZ2, '__esModule', { value: !0 });
rZ2.RoundRobinLoadBalancer = void 0;
rZ2.setup = Mr6;
var aZ2 = j_(),
  zZ = $C(),
  za1 = ER(),
  Ur6 = r8(),
  Nr6 = O6(),
  iZ2 = qC(),
  $r6 = BX1(),
  qr6 = 'round_robin';
function nZ2(A) {
  Ur6.trace(Nr6.LogVerbosity.DEBUG, qr6, A);
}
var DX1 = 'round_robin';
class wa1 {
  getLoadBalancerName() {
    return DX1;
  }
  constructor() {}
  toJsonObject() {
    return { [DX1]: {} };
  }
  static createFromJson(A) {
    return new wa1();
  }
}
class sZ2 {
  constructor(A, B = 0) {
    ((this.children = A), (this.nextIndex = B));
  }
  pick(A) {
    let B = this.children[this.nextIndex].picker;
    return ((this.nextIndex = (this.nextIndex + 1) % this.children.length), B.pick(A));
  }
  peekNextEndpoint() {
    return this.children[this.nextIndex].endpoint;
  }
}
class Ea1 {
  constructor(A) {
    ((this.channelControlHelper = A),
      (this.children = []),
      (this.currentState = zZ.ConnectivityState.IDLE),
      (this.currentReadyPicker = null),
      (this.updatesPaused = !1),
      (this.lastError = null),
      (this.childChannelControlHelper = aZ2.createChildChannelControlHelper(A, {
        updateState: (B, Q, I) => {
          if (this.currentState === zZ.ConnectivityState.READY && B !== zZ.ConnectivityState.READY)
            this.channelControlHelper.requestReresolution();
          if (I) this.lastError = I;
          this.calculateAndUpdateState();
        },
      })));
  }
  countChildrenWithState(A) {
    return this.children.filter((B) => B.getConnectivityState() === A).length;
  }
  calculateAndUpdateState() {
    if (this.updatesPaused) return;
    if (this.countChildrenWithState(zZ.ConnectivityState.READY) > 0) {
      let A = this.children.filter((Q) => Q.getConnectivityState() === zZ.ConnectivityState.READY),
        B = 0;
      if (this.currentReadyPicker !== null) {
        let Q = this.currentReadyPicker.peekNextEndpoint();
        if (((B = A.findIndex((I) => iZ2.endpointEqual(I.getEndpoint(), Q))), B < 0)) B = 0;
      }
      this.updateState(
        zZ.ConnectivityState.READY,
        new sZ2(
          A.map((Q) => ({ endpoint: Q.getEndpoint(), picker: Q.getPicker() })),
          B
        ),
        null
      );
    } else if (this.countChildrenWithState(zZ.ConnectivityState.CONNECTING) > 0)
      this.updateState(zZ.ConnectivityState.CONNECTING, new za1.QueuePicker(this), null);
    else if (this.countChildrenWithState(zZ.ConnectivityState.TRANSIENT_FAILURE) > 0) {
      let A = `round_robin: No connection established. Last error: ${this.lastError}`;
      this.updateState(
        zZ.ConnectivityState.TRANSIENT_FAILURE,
        new za1.UnavailablePicker({ details: A }),
        A
      );
    } else this.updateState(zZ.ConnectivityState.IDLE, new za1.QueuePicker(this), null);
    for (let A of this.children)
      if (A.getConnectivityState() === zZ.ConnectivityState.IDLE) A.exitIdle();
  }
  updateState(A, B, Q) {
    if (
      (nZ2(zZ.ConnectivityState[this.currentState] + ' -> ' + zZ.ConnectivityState[A]),
      A === zZ.ConnectivityState.READY)
    )
      this.currentReadyPicker = B;
    else this.currentReadyPicker = null;
    ((this.currentState = A), this.channelControlHelper.updateState(A, B, Q));
  }
  resetSubchannelList() {
    for (let A of this.children) A.destroy();
  }
  updateAddressList(A, B, Q) {
    (this.resetSubchannelList(),
      nZ2('Connect to endpoint list ' + A.map(iZ2.endpointToString)),
      (this.updatesPaused = !0),
      (this.children = A.map(
        (I) => new $r6.LeafLoadBalancer(I, this.childChannelControlHelper, Q)
      )));
    for (let I of this.children) I.startConnecting();
    ((this.updatesPaused = !1), this.calculateAndUpdateState());
  }
  exitIdle() {}
  resetBackoff() {}
  destroy() {
    this.resetSubchannelList();
  }
  getTypeName() {
    return DX1;
  }
}
rZ2.RoundRobinLoadBalancer = Ea1;
function Mr6() {
  aZ2.registerLoadBalancerType(DX1, Ea1, wa1);
}
