// Module: nC1
// Params: LD2

Object.defineProperty(LD2, '__esModule', { value: !0 });
LD2.BaseSubchannelWrapper = void 0;
class MD2 {
  constructor(A) {
    ((this.child = A),
      (this.healthy = !0),
      (this.healthListeners = new Set()),
      A.addHealthStateWatcher((B) => {
        if (this.healthy) this.updateHealthListeners();
      }));
  }
  updateHealthListeners() {
    for (let A of this.healthListeners) A(this.isHealthy());
  }
  getConnectivityState() {
    return this.child.getConnectivityState();
  }
  addConnectivityStateListener(A) {
    this.child.addConnectivityStateListener(A);
  }
  removeConnectivityStateListener(A) {
    this.child.removeConnectivityStateListener(A);
  }
  startConnecting() {
    this.child.startConnecting();
  }
  getAddress() {
    return this.child.getAddress();
  }
  throttleKeepalive(A) {
    this.child.throttleKeepalive(A);
  }
  ref() {
    this.child.ref();
  }
  unref() {
    this.child.unref();
  }
  getChannelzRef() {
    return this.child.getChannelzRef();
  }
  isHealthy() {
    return this.healthy && this.child.isHealthy();
  }
  addHealthStateWatcher(A) {
    this.healthListeners.add(A);
  }
  removeHealthStateWatcher(A) {
    this.healthListeners.delete(A);
  }
  setHealthy(A) {
    if (A !== this.healthy) {
      if (((this.healthy = A), this.child.isHealthy())) this.updateHealthListeners();
    }
  }
  getRealSubchannel() {
    return this.child.getRealSubchannel();
  }
  realSubchannelEquals(A) {
    return this.getRealSubchannel() === A.getRealSubchannel();
  }
  getCallCredentials() {
    return this.child.getCallCredentials();
  }
}
LD2.BaseSubchannelWrapper = MD2;
