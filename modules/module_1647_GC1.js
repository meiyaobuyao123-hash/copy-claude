// Module: GC1
// Params: n32

Object.defineProperty(n32, '__esModule', { value: !0 });
n32.ChildLoadBalancerHandler = void 0;
var Ou6 = j_(),
  Tu6 = $C(),
  Pu6 = 'child_load_balancer_helper';
class i32 {
  constructor(A) {
    ((this.channelControlHelper = A),
      (this.currentChild = null),
      (this.pendingChild = null),
      (this.latestConfig = null),
      (this.ChildPolicyHelper = class {
        constructor(B) {
          ((this.parent = B), (this.child = null));
        }
        createSubchannel(B, Q) {
          return this.parent.channelControlHelper.createSubchannel(B, Q);
        }
        updateState(B, Q, I) {
          var G;
          if (this.calledByPendingChild()) {
            if (B === Tu6.ConnectivityState.CONNECTING) return;
            ((G = this.parent.currentChild) === null || G === void 0 || G.destroy(),
              (this.parent.currentChild = this.parent.pendingChild),
              (this.parent.pendingChild = null));
          } else if (!this.calledByCurrentChild()) return;
          this.parent.channelControlHelper.updateState(B, Q, I);
        }
        requestReresolution() {
          var B;
          let Q =
            (B = this.parent.pendingChild) !== null && B !== void 0 ? B : this.parent.currentChild;
          if (this.child === Q) this.parent.channelControlHelper.requestReresolution();
        }
        setChild(B) {
          this.child = B;
        }
        addChannelzChild(B) {
          this.parent.channelControlHelper.addChannelzChild(B);
        }
        removeChannelzChild(B) {
          this.parent.channelControlHelper.removeChannelzChild(B);
        }
        calledByPendingChild() {
          return this.child === this.parent.pendingChild;
        }
        calledByCurrentChild() {
          return this.child === this.parent.currentChild;
        }
      }));
  }
  configUpdateRequiresNewPolicyInstance(A, B) {
    return A.getLoadBalancerName() !== B.getLoadBalancerName();
  }
  updateAddressList(A, B, Q) {
    let I;
    if (
      this.currentChild === null ||
      this.latestConfig === null ||
      this.configUpdateRequiresNewPolicyInstance(this.latestConfig, B)
    ) {
      let G = new this.ChildPolicyHelper(this),
        D = Ou6.createLoadBalancer(B, G);
      if ((G.setChild(D), this.currentChild === null))
        ((this.currentChild = D), (I = this.currentChild));
      else {
        if (this.pendingChild) this.pendingChild.destroy();
        ((this.pendingChild = D), (I = this.pendingChild));
      }
    } else if (this.pendingChild === null) I = this.currentChild;
    else I = this.pendingChild;
    ((this.latestConfig = B), I.updateAddressList(A, B, Q));
  }
  exitIdle() {
    if (this.currentChild) {
      if ((this.currentChild.exitIdle(), this.pendingChild)) this.pendingChild.exitIdle();
    }
  }
  resetBackoff() {
    if (this.currentChild) {
      if ((this.currentChild.resetBackoff(), this.pendingChild)) this.pendingChild.resetBackoff();
    }
  }
  destroy() {
    if (this.currentChild) (this.currentChild.destroy(), (this.currentChild = null));
    if (this.pendingChild) (this.pendingChild.destroy(), (this.pendingChild = null));
  }
  getTypeName() {
    return Pu6;
  }
}
n32.ChildLoadBalancerHandler = i32;
