// Module: e32
// Params: o32

Object.defineProperty(o32, '__esModule', { value: !0 });
o32.ResolvingLoadBalancer = void 0;
var Su6 = j_(),
  _u6 = wi1(),
  fY = $C(),
  ju6 = Iw(),
  _o = ER(),
  yu6 = So(),
  Ei1 = O6(),
  ku6 = XD(),
  xu6 = r8(),
  fu6 = O6(),
  vu6 = xY(),
  bu6 = GC1(),
  gu6 = 'resolving_load_balancer';
function s32(A) {
  xu6.trace(fu6.LogVerbosity.DEBUG, gu6, A);
}
var hu6 = ['SERVICE_AND_METHOD', 'SERVICE', 'EMPTY'];
function mu6(A, B, Q, I) {
  for (let G of Q.name)
    switch (I) {
      case 'EMPTY':
        if (!G.service && !G.method) return !0;
        break;
      case 'SERVICE':
        if (G.service === A && !G.method) return !0;
        break;
      case 'SERVICE_AND_METHOD':
        if (G.service === A && G.method === B) return !0;
    }
  return !1;
}
function du6(A, B, Q, I) {
  for (let G of Q) if (mu6(A, B, G, I)) return G;
  return null;
}
function uu6(A) {
  return {
    invoke(B, Q) {
      var I, G;
      let D = B.split('/').filter((W) => W.length > 0),
        Z = (I = D[0]) !== null && I !== void 0 ? I : '',
        Y = (G = D[1]) !== null && G !== void 0 ? G : '';
      if (A && A.methodConfig)
        for (let W of hu6) {
          let F = du6(Z, Y, A.methodConfig, W);
          if (F)
            return {
              methodConfig: F,
              pickInformation: {},
              status: Ei1.Status.OK,
              dynamicFilterFactories: [],
            };
        }
      return {
        methodConfig: { name: [] },
        pickInformation: {},
        status: Ei1.Status.OK,
        dynamicFilterFactories: [],
      };
    },
    unref() {},
  };
}
class r32 {
  constructor(A, B, Q, I, G) {
    if (
      ((this.target = A),
      (this.channelControlHelper = B),
      (this.channelOptions = Q),
      (this.onSuccessfulResolution = I),
      (this.onFailedResolution = G),
      (this.latestChildState = fY.ConnectivityState.IDLE),
      (this.latestChildPicker = new _o.QueuePicker(this)),
      (this.latestChildErrorMessage = null),
      (this.currentState = fY.ConnectivityState.IDLE),
      (this.previousServiceConfig = null),
      (this.continueResolving = !1),
      Q['grpc.service_config'])
    )
      this.defaultServiceConfig = _u6.validateServiceConfig(JSON.parse(Q['grpc.service_config']));
    else this.defaultServiceConfig = { loadBalancingConfig: [], methodConfig: [] };
    (this.updateState(fY.ConnectivityState.IDLE, new _o.QueuePicker(this), null),
      (this.childLoadBalancer = new bu6.ChildLoadBalancerHandler({
        createSubchannel: B.createSubchannel.bind(B),
        requestReresolution: () => {
          if (this.backoffTimeout.isRunning())
            (s32(
              'requestReresolution delayed by backoff timer until ' +
                this.backoffTimeout.getEndTime().toISOString()
            ),
              (this.continueResolving = !0));
          else this.updateResolution();
        },
        updateState: (Z, Y, W) => {
          ((this.latestChildState = Z),
            (this.latestChildPicker = Y),
            (this.latestChildErrorMessage = W),
            this.updateState(Z, Y, W));
        },
        addChannelzChild: B.addChannelzChild.bind(B),
        removeChannelzChild: B.removeChannelzChild.bind(B),
      })),
      (this.innerResolver = ju6.createResolver(
        A,
        {
          onSuccessfulResolution: (Z, Y, W, F, J) => {
            var C;
            (this.backoffTimeout.stop(), this.backoffTimeout.reset());
            let X = null;
            if (Y === null)
              if (W === null)
                ((this.previousServiceConfig = null), (X = this.defaultServiceConfig));
              else if (this.previousServiceConfig === null) this.handleResolutionFailure(W);
              else X = this.previousServiceConfig;
            else ((X = Y), (this.previousServiceConfig = Y));
            let V =
                (C = X === null || X === void 0 ? void 0 : X.loadBalancingConfig) !== null &&
                C !== void 0
                  ? C
                  : [],
              K = Su6.selectLbConfigFromList(V, !0);
            if (K === null) {
              (this.handleResolutionFailure({
                code: Ei1.Status.UNAVAILABLE,
                details: 'All load balancer options in service config are not compatible',
                metadata: new ku6.Metadata(),
              }),
                F === null || F === void 0 || F.unref());
              return;
            }
            this.childLoadBalancer.updateAddressList(
              Z,
              K,
              Object.assign(Object.assign({}, this.channelOptions), J)
            );
            let U = X !== null && X !== void 0 ? X : this.defaultServiceConfig;
            this.onSuccessfulResolution(U, F !== null && F !== void 0 ? F : uu6(U));
          },
          onError: (Z) => {
            this.handleResolutionFailure(Z);
          },
        },
        Q
      )));
    let D = {
      initialDelay: Q['grpc.initial_reconnect_backoff_ms'],
      maxDelay: Q['grpc.max_reconnect_backoff_ms'],
    };
    ((this.backoffTimeout = new yu6.BackoffTimeout(() => {
      if (this.continueResolving) (this.updateResolution(), (this.continueResolving = !1));
      else
        this.updateState(
          this.latestChildState,
          this.latestChildPicker,
          this.latestChildErrorMessage
        );
    }, D)),
      this.backoffTimeout.unref());
  }
  updateResolution() {
    if ((this.innerResolver.updateResolution(), this.currentState === fY.ConnectivityState.IDLE))
      this.updateState(
        fY.ConnectivityState.CONNECTING,
        this.latestChildPicker,
        this.latestChildErrorMessage
      );
    this.backoffTimeout.runOnce();
  }
  updateState(A, B, Q) {
    if (
      (s32(
        vu6.uriToString(this.target) +
          ' ' +
          fY.ConnectivityState[this.currentState] +
          ' -> ' +
          fY.ConnectivityState[A]
      ),
      A === fY.ConnectivityState.IDLE)
    )
      B = new _o.QueuePicker(this, B);
    ((this.currentState = A), this.channelControlHelper.updateState(A, B, Q));
  }
  handleResolutionFailure(A) {
    if (this.latestChildState === fY.ConnectivityState.IDLE)
      (this.updateState(
        fY.ConnectivityState.TRANSIENT_FAILURE,
        new _o.UnavailablePicker(A),
        A.details
      ),
        this.onFailedResolution(A));
  }
  exitIdle() {
    if (
      this.currentState === fY.ConnectivityState.IDLE ||
      this.currentState === fY.ConnectivityState.TRANSIENT_FAILURE
    )
      if (this.backoffTimeout.isRunning()) this.continueResolving = !0;
      else this.updateResolution();
    this.childLoadBalancer.exitIdle();
  }
  updateAddressList(A, B) {
    throw new Error('updateAddressList not supported on ResolvingLoadBalancer');
  }
  resetBackoff() {
    (this.backoffTimeout.reset(), this.childLoadBalancer.resetBackoff());
  }
  destroy() {
    (this.childLoadBalancer.destroy(),
      this.innerResolver.destroy(),
      this.backoffTimeout.reset(),
      this.backoffTimeout.stop(),
      (this.latestChildState = fY.ConnectivityState.IDLE),
      (this.latestChildPicker = new _o.QueuePicker(this)),
      (this.currentState = fY.ConnectivityState.IDLE),
      (this.previousServiceConfig = null),
      (this.continueResolving = !1));
  }
  getTypeName() {
    return 'resolving_load_balancer';
  }
}
o32.ResolvingLoadBalancer = r32;
