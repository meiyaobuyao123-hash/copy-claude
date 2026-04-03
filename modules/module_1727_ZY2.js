// Module: ZY2
// Params: GY2

var Ua1;
Object.defineProperty(GY2, '__esModule', { value: !0 });
GY2.OutlierDetectionLoadBalancer = GY2.OutlierDetectionLoadBalancingConfig = void 0;
GY2.setup = fr6;
var Rr6 = $C(),
  eZ2 = O6(),
  u_ = Ya1(),
  AY2 = Ca1(),
  Or6 = j_(),
  Tr6 = GC1(),
  Pr6 = ER(),
  Na1 = qC(),
  Sr6 = nC1(),
  _r6 = r8(),
  jr6 = 'outlier_detection';
function KI(A) {
  _r6.trace(eZ2.LogVerbosity.DEBUG, jr6, A);
}
var Ma1 = 'outlier_detection',
  yr6 =
    ((Ua1 = process.env.GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION) !== null && Ua1 !== void 0
      ? Ua1
      : 'true') === 'true',
  kr6 = { stdev_factor: 1900, enforcement_percentage: 100, minimum_hosts: 5, request_volume: 100 },
  xr6 = { threshold: 85, enforcement_percentage: 100, minimum_hosts: 5, request_volume: 50 };
function bm(A, B, Q, I) {
  if (B in A && A[B] !== void 0 && typeof A[B] !== Q) {
    let G = I ? `${I}.${B}` : B;
    throw new Error(`outlier detection config ${G} parse error: expected ${Q}, got ${typeof A[B]}`);
  }
}
function $a1(A, B, Q) {
  let I = Q ? `${Q}.${B}` : B;
  if (B in A && A[B] !== void 0) {
    if (!u_.isDuration(A[B]))
      throw new Error(
        `outlier detection config ${I} parse error: expected Duration, got ${typeof A[B]}`
      );
    if (
      !(
        A[B].seconds >= 0 &&
        A[B].seconds <= 315576000000 &&
        A[B].nanos >= 0 &&
        A[B].nanos <= 999999999
      )
    )
      throw new Error(
        `outlier detection config ${I} parse error: values out of range for non-negative Duaration`
      );
  }
}
function ZX1(A, B, Q) {
  let I = Q ? `${Q}.${B}` : B;
  if ((bm(A, B, 'number', Q), B in A && A[B] !== void 0 && !(A[B] >= 0 && A[B] <= 100)))
    throw new Error(
      `outlier detection config ${I} parse error: value out of range for percentage (0-100)`
    );
}
class Yt {
  constructor(A, B, Q, I, G, D, Z) {
    if (((this.childPolicy = Z), Z.getLoadBalancerName() === 'pick_first'))
      throw new Error('outlier_detection LB policy cannot have a pick_first child policy');
    ((this.intervalMs = A !== null && A !== void 0 ? A : 1e4),
      (this.baseEjectionTimeMs = B !== null && B !== void 0 ? B : 30000),
      (this.maxEjectionTimeMs = Q !== null && Q !== void 0 ? Q : 300000),
      (this.maxEjectionPercent = I !== null && I !== void 0 ? I : 10),
      (this.successRateEjection = G ? Object.assign(Object.assign({}, kr6), G) : null),
      (this.failurePercentageEjection = D ? Object.assign(Object.assign({}, xr6), D) : null));
  }
  getLoadBalancerName() {
    return Ma1;
  }
  toJsonObject() {
    var A, B;
    return {
      outlier_detection: {
        interval: u_.msToDuration(this.intervalMs),
        base_ejection_time: u_.msToDuration(this.baseEjectionTimeMs),
        max_ejection_time: u_.msToDuration(this.maxEjectionTimeMs),
        max_ejection_percent: this.maxEjectionPercent,
        success_rate_ejection: (A = this.successRateEjection) !== null && A !== void 0 ? A : void 0,
        failure_percentage_ejection:
          (B = this.failurePercentageEjection) !== null && B !== void 0 ? B : void 0,
        child_policy: [this.childPolicy.toJsonObject()],
      },
    };
  }
  getIntervalMs() {
    return this.intervalMs;
  }
  getBaseEjectionTimeMs() {
    return this.baseEjectionTimeMs;
  }
  getMaxEjectionTimeMs() {
    return this.maxEjectionTimeMs;
  }
  getMaxEjectionPercent() {
    return this.maxEjectionPercent;
  }
  getSuccessRateEjectionConfig() {
    return this.successRateEjection;
  }
  getFailurePercentageEjectionConfig() {
    return this.failurePercentageEjection;
  }
  getChildPolicy() {
    return this.childPolicy;
  }
  static createFromJson(A) {
    var B;
    if (
      ($a1(A, 'interval'),
      $a1(A, 'base_ejection_time'),
      $a1(A, 'max_ejection_time'),
      ZX1(A, 'max_ejection_percent'),
      'success_rate_ejection' in A && A.success_rate_ejection !== void 0)
    ) {
      if (typeof A.success_rate_ejection !== 'object')
        throw new Error('outlier detection config success_rate_ejection must be an object');
      (bm(A.success_rate_ejection, 'stdev_factor', 'number', 'success_rate_ejection'),
        ZX1(A.success_rate_ejection, 'enforcement_percentage', 'success_rate_ejection'),
        bm(A.success_rate_ejection, 'minimum_hosts', 'number', 'success_rate_ejection'),
        bm(A.success_rate_ejection, 'request_volume', 'number', 'success_rate_ejection'));
    }
    if ('failure_percentage_ejection' in A && A.failure_percentage_ejection !== void 0) {
      if (typeof A.failure_percentage_ejection !== 'object')
        throw new Error('outlier detection config failure_percentage_ejection must be an object');
      (ZX1(A.failure_percentage_ejection, 'threshold', 'failure_percentage_ejection'),
        ZX1(A.failure_percentage_ejection, 'enforcement_percentage', 'failure_percentage_ejection'),
        bm(A.failure_percentage_ejection, 'minimum_hosts', 'number', 'failure_percentage_ejection'),
        bm(
          A.failure_percentage_ejection,
          'request_volume',
          'number',
          'failure_percentage_ejection'
        ));
    }
    if (!('child_policy' in A) || !Array.isArray(A.child_policy))
      throw new Error('outlier detection config child_policy must be an array');
    let Q = Or6.selectLbConfigFromList(A.child_policy);
    if (!Q)
      throw new Error('outlier detection config child_policy: no valid recognized policy found');
    return new Yt(
      A.interval ? u_.durationToMs(A.interval) : null,
      A.base_ejection_time ? u_.durationToMs(A.base_ejection_time) : null,
      A.max_ejection_time ? u_.durationToMs(A.max_ejection_time) : null,
      (B = A.max_ejection_percent) !== null && B !== void 0 ? B : null,
      A.success_rate_ejection,
      A.failure_percentage_ejection,
      Q
    );
  }
}
GY2.OutlierDetectionLoadBalancingConfig = Yt;
class BY2 extends Sr6.BaseSubchannelWrapper {
  constructor(A, B) {
    super(A);
    ((this.mapEntry = B), (this.refCount = 0));
  }
  ref() {
    (this.child.ref(), (this.refCount += 1));
  }
  unref() {
    if ((this.child.unref(), (this.refCount -= 1), this.refCount <= 0)) {
      if (this.mapEntry) {
        let A = this.mapEntry.subchannelWrappers.indexOf(this);
        if (A >= 0) this.mapEntry.subchannelWrappers.splice(A, 1);
      }
    }
  }
  eject() {
    this.setHealthy(!1);
  }
  uneject() {
    this.setHealthy(!0);
  }
  getMapEntry() {
    return this.mapEntry;
  }
  getWrappedSubchannel() {
    return this.child;
  }
}
function qa1() {
  return { success: 0, failure: 0 };
}
class QY2 {
  constructor() {
    ((this.activeBucket = qa1()), (this.inactiveBucket = qa1()));
  }
  addSuccess() {
    this.activeBucket.success += 1;
  }
  addFailure() {
    this.activeBucket.failure += 1;
  }
  switchBuckets() {
    ((this.inactiveBucket = this.activeBucket), (this.activeBucket = qa1()));
  }
  getLastSuccesses() {
    return this.inactiveBucket.success;
  }
  getLastFailures() {
    return this.inactiveBucket.failure;
  }
}
class IY2 {
  constructor(A, B) {
    ((this.wrappedPicker = A), (this.countCalls = B));
  }
  pick(A) {
    let B = this.wrappedPicker.pick(A);
    if (B.pickResultType === Pr6.PickResultType.COMPLETE) {
      let Q = B.subchannel,
        I = Q.getMapEntry();
      if (I) {
        let G = B.onCallEnded;
        if (this.countCalls)
          G = (D) => {
            var Z;
            if (D === eZ2.Status.OK) I.counter.addSuccess();
            else I.counter.addFailure();
            (Z = B.onCallEnded) === null || Z === void 0 || Z.call(B, D);
          };
        return Object.assign(Object.assign({}, B), {
          subchannel: Q.getWrappedSubchannel(),
          onCallEnded: G,
        });
      } else return Object.assign(Object.assign({}, B), { subchannel: Q.getWrappedSubchannel() });
    } else return B;
  }
}
class La1 {
  constructor(A) {
    ((this.entryMap = new Na1.EndpointMap()),
      (this.latestConfig = null),
      (this.timerStartTime = null),
      (this.childBalancer = new Tr6.ChildLoadBalancerHandler(
        AY2.createChildChannelControlHelper(A, {
          createSubchannel: (B, Q) => {
            let I = A.createSubchannel(B, Q),
              G = this.entryMap.getForSubchannelAddress(B),
              D = new BY2(I, G);
            if ((G === null || G === void 0 ? void 0 : G.currentEjectionTimestamp) !== null)
              D.eject();
            return (G === null || G === void 0 || G.subchannelWrappers.push(D), D);
          },
          updateState: (B, Q, I) => {
            if (B === Rr6.ConnectivityState.READY)
              A.updateState(B, new IY2(Q, this.isCountingEnabled()), I);
            else A.updateState(B, Q, I);
          },
        })
      )),
      (this.ejectionTimer = setInterval(() => {}, 0)),
      clearInterval(this.ejectionTimer));
  }
  isCountingEnabled() {
    return (
      this.latestConfig !== null &&
      (this.latestConfig.getSuccessRateEjectionConfig() !== null ||
        this.latestConfig.getFailurePercentageEjectionConfig() !== null)
    );
  }
  getCurrentEjectionPercent() {
    let A = 0;
    for (let B of this.entryMap.values()) if (B.currentEjectionTimestamp !== null) A += 1;
    return (A * 100) / this.entryMap.size;
  }
  runSuccessRateCheck(A) {
    if (!this.latestConfig) return;
    let B = this.latestConfig.getSuccessRateEjectionConfig();
    if (!B) return;
    KI('Running success rate check');
    let Q = B.request_volume,
      I = 0,
      G = [];
    for (let [J, C] of this.entryMap.entries()) {
      let X = C.counter.getLastSuccesses(),
        V = C.counter.getLastFailures();
      if (
        (KI(
          'Stats for ' +
            Na1.endpointToString(J) +
            ': successes=' +
            X +
            ' failures=' +
            V +
            ' targetRequestVolume=' +
            Q
        ),
        X + V >= Q)
      )
        ((I += 1), G.push(X / (X + V)));
    }
    if (
      (KI(
        'Found ' +
          I +
          ' success rate candidates; currentEjectionPercent=' +
          this.getCurrentEjectionPercent() +
          ' successRates=[' +
          G +
          ']'
      ),
      I < B.minimum_hosts)
    )
      return;
    let D = G.reduce((J, C) => J + C) / G.length,
      Z = 0;
    for (let J of G) {
      let C = J - D;
      Z += C * C;
    }
    let Y = Z / G.length,
      W = Math.sqrt(Y),
      F = D - W * (B.stdev_factor / 1000);
    KI('stdev=' + W + ' ejectionThreshold=' + F);
    for (let [J, C] of this.entryMap.entries()) {
      if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
      let X = C.counter.getLastSuccesses(),
        V = C.counter.getLastFailures();
      if (X + V < Q) continue;
      let K = X / (X + V);
      if ((KI('Checking candidate ' + J + ' successRate=' + K), K < F)) {
        let U = Math.random() * 100;
        if (
          (KI(
            'Candidate ' +
              J +
              ' randomNumber=' +
              U +
              ' enforcement_percentage=' +
              B.enforcement_percentage
          ),
          U < B.enforcement_percentage)
        )
          (KI('Ejecting candidate ' + J), this.eject(C, A));
      }
    }
  }
  runFailurePercentageCheck(A) {
    if (!this.latestConfig) return;
    let B = this.latestConfig.getFailurePercentageEjectionConfig();
    if (!B) return;
    KI(
      'Running failure percentage check. threshold=' +
        B.threshold +
        ' request volume threshold=' +
        B.request_volume
    );
    let Q = 0;
    for (let I of this.entryMap.values()) {
      let G = I.counter.getLastSuccesses(),
        D = I.counter.getLastFailures();
      if (G + D >= B.request_volume) Q += 1;
    }
    if (Q < B.minimum_hosts) return;
    for (let [I, G] of this.entryMap.entries()) {
      if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
      let D = G.counter.getLastSuccesses(),
        Z = G.counter.getLastFailures();
      if ((KI('Candidate successes=' + D + ' failures=' + Z), D + Z < B.request_volume)) continue;
      if ((Z * 100) / (Z + D) > B.threshold) {
        let W = Math.random() * 100;
        if (
          (KI(
            'Candidate ' +
              I +
              ' randomNumber=' +
              W +
              ' enforcement_percentage=' +
              B.enforcement_percentage
          ),
          W < B.enforcement_percentage)
        )
          (KI('Ejecting candidate ' + I), this.eject(G, A));
      }
    }
  }
  eject(A, B) {
    ((A.currentEjectionTimestamp = new Date()), (A.ejectionTimeMultiplier += 1));
    for (let Q of A.subchannelWrappers) Q.eject();
  }
  uneject(A) {
    A.currentEjectionTimestamp = null;
    for (let B of A.subchannelWrappers) B.uneject();
  }
  switchAllBuckets() {
    for (let A of this.entryMap.values()) A.counter.switchBuckets();
  }
  startTimer(A) {
    var B, Q;
    ((this.ejectionTimer = setTimeout(() => this.runChecks(), A)),
      (Q = (B = this.ejectionTimer).unref) === null || Q === void 0 || Q.call(B));
  }
  runChecks() {
    let A = new Date();
    if ((KI('Ejection timer running'), this.switchAllBuckets(), !this.latestConfig)) return;
    ((this.timerStartTime = A),
      this.startTimer(this.latestConfig.getIntervalMs()),
      this.runSuccessRateCheck(A),
      this.runFailurePercentageCheck(A));
    for (let [B, Q] of this.entryMap.entries())
      if (Q.currentEjectionTimestamp === null) {
        if (Q.ejectionTimeMultiplier > 0) Q.ejectionTimeMultiplier -= 1;
      } else {
        let I = this.latestConfig.getBaseEjectionTimeMs(),
          G = this.latestConfig.getMaxEjectionTimeMs(),
          D = new Date(Q.currentEjectionTimestamp.getTime());
        if (
          (D.setMilliseconds(
            D.getMilliseconds() + Math.min(I * Q.ejectionTimeMultiplier, Math.max(I, G))
          ),
          D < new Date())
        )
          (KI('Unejecting ' + B), this.uneject(Q));
      }
  }
  updateAddressList(A, B, Q) {
    if (!(B instanceof Yt)) return;
    KI('Received update with config: ' + JSON.stringify(B.toJsonObject(), void 0, 2));
    for (let G of A)
      if (!this.entryMap.has(G))
        (KI('Adding map entry for ' + Na1.endpointToString(G)),
          this.entryMap.set(G, {
            counter: new QY2(),
            currentEjectionTimestamp: null,
            ejectionTimeMultiplier: 0,
            subchannelWrappers: [],
          }));
    this.entryMap.deleteMissing(A);
    let I = B.getChildPolicy();
    if (
      (this.childBalancer.updateAddressList(A, I, Q),
      B.getSuccessRateEjectionConfig() || B.getFailurePercentageEjectionConfig())
    )
      if (this.timerStartTime) {
        (KI('Previous timer existed. Replacing timer'), clearTimeout(this.ejectionTimer));
        let G = B.getIntervalMs() - (new Date().getTime() - this.timerStartTime.getTime());
        this.startTimer(G);
      } else
        (KI('Starting new timer'),
          (this.timerStartTime = new Date()),
          this.startTimer(B.getIntervalMs()),
          this.switchAllBuckets());
    else {
      (KI('Counting disabled. Cancelling timer.'),
        (this.timerStartTime = null),
        clearTimeout(this.ejectionTimer));
      for (let G of this.entryMap.values()) (this.uneject(G), (G.ejectionTimeMultiplier = 0));
    }
    this.latestConfig = B;
  }
  exitIdle() {
    this.childBalancer.exitIdle();
  }
  resetBackoff() {
    this.childBalancer.resetBackoff();
  }
  destroy() {
    (clearTimeout(this.ejectionTimer), this.childBalancer.destroy());
  }
  getTypeName() {
    return Ma1;
  }
}
GY2.OutlierDetectionLoadBalancer = La1;
function fr6() {
  if (yr6) AY2.registerLoadBalancerType(Ma1, La1, Yt);
}
