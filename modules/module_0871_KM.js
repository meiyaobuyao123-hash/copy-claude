// Module: KM
// Params: Ku5,GcA

var { defineProperty: l81, getOwnPropertyDescriptor: w44, getOwnPropertyNames: E44 } = Object,
  U44 = Object.prototype.hasOwnProperty,
  uX = (A, B) => l81(A, 'name', { value: B, configurable: !0 }),
  N44 = (A, B) => {
    for (var Q in B) l81(A, Q, { get: B[Q], enumerable: !0 });
  },
  $44 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of E44(B))
        if (!U44.call(A, G) && G !== Q)
          l81(A, G, { get: () => B[G], enumerable: !(I = w44(B, G)) || I.enumerable });
    }
    return A;
  },
  q44 = (A) => $44(l81({}, '__esModule', { value: !0 }), A),
  opA = {};
N44(opA, {
  AdaptiveRetryStrategy: () => P44,
  ConfiguredRetryStrategy: () => S44,
  DEFAULT_MAX_ATTEMPTS: () => bT1,
  DEFAULT_RETRY_DELAY_BASE: () => yl,
  DEFAULT_RETRY_MODE: () => M44,
  DefaultRateLimiter: () => epA,
  INITIAL_RETRY_TOKENS: () => gT1,
  INVOCATION_ID_HEADER: () => R44,
  MAXIMUM_RETRY_DELAY: () => hT1,
  NO_RETRY_INCREMENT: () => IcA,
  REQUEST_HEADER: () => O44,
  RETRY_COST: () => BcA,
  RETRY_MODES: () => tpA,
  StandardRetryStrategy: () => mT1,
  THROTTLING_RETRY_DELAY_BASE: () => AcA,
  TIMEOUT_RETRY_COST: () => QcA,
});
GcA.exports = q44(opA);
var tpA = ((A) => {
    return ((A.STANDARD = 'standard'), (A.ADAPTIVE = 'adaptive'), A);
  })(tpA || {}),
  bT1 = 3,
  M44 = 'standard',
  L44 = vT1(),
  epA = class A {
    constructor(B) {
      ((this.currentCapacity = 0),
        (this.enabled = !1),
        (this.lastMaxRate = 0),
        (this.measuredTxRate = 0),
        (this.requestCount = 0),
        (this.lastTimestamp = 0),
        (this.timeWindow = 0),
        (this.beta = B?.beta ?? 0.7),
        (this.minCapacity = B?.minCapacity ?? 1),
        (this.minFillRate = B?.minFillRate ?? 0.5),
        (this.scaleConstant = B?.scaleConstant ?? 0.4),
        (this.smooth = B?.smooth ?? 0.8));
      let Q = this.getCurrentTimeInSeconds();
      ((this.lastThrottleTime = Q),
        (this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds())),
        (this.fillRate = this.minFillRate),
        (this.maxCapacity = this.minCapacity));
    }
    static {
      uX(this, 'DefaultRateLimiter');
    }
    static {
      this.setTimeoutFn = setTimeout;
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1000;
    }
    async getSendToken() {
      return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(B) {
      if (!this.enabled) return;
      if ((this.refillTokenBucket(), B > this.currentCapacity)) {
        let Q = ((B - this.currentCapacity) / this.fillRate) * 1000;
        await new Promise((I) => A.setTimeoutFn(I, Q));
      }
      this.currentCapacity = this.currentCapacity - B;
    }
    refillTokenBucket() {
      let B = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) {
        this.lastTimestamp = B;
        return;
      }
      let Q = (B - this.lastTimestamp) * this.fillRate;
      ((this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + Q)),
        (this.lastTimestamp = B));
    }
    updateClientSendingRate(B) {
      let Q;
      if ((this.updateMeasuredRate(), L44.isThrottlingError(B))) {
        let G = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
        ((this.lastMaxRate = G),
          this.calculateTimeWindow(),
          (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
          (Q = this.cubicThrottle(G)),
          this.enableTokenBucket());
      } else (this.calculateTimeWindow(), (Q = this.cubicSuccess(this.getCurrentTimeInSeconds())));
      let I = Math.min(Q, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(I);
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(
        Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 0.3333333333333333)
      );
    }
    cubicThrottle(B) {
      return this.getPrecise(B * this.beta);
    }
    cubicSuccess(B) {
      return this.getPrecise(
        this.scaleConstant * Math.pow(B - this.lastThrottleTime - this.timeWindow, 3) +
          this.lastMaxRate
      );
    }
    enableTokenBucket() {
      this.enabled = !0;
    }
    updateTokenBucketRate(B) {
      (this.refillTokenBucket(),
        (this.fillRate = Math.max(B, this.minFillRate)),
        (this.maxCapacity = Math.max(B, this.minCapacity)),
        (this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)));
    }
    updateMeasuredRate() {
      let B = this.getCurrentTimeInSeconds(),
        Q = Math.floor(B * 2) / 2;
      if ((this.requestCount++, Q > this.lastTxRateBucket)) {
        let I = this.requestCount / (Q - this.lastTxRateBucket);
        ((this.measuredTxRate = this.getPrecise(
          I * this.smooth + this.measuredTxRate * (1 - this.smooth)
        )),
          (this.requestCount = 0),
          (this.lastTxRateBucket = Q));
      }
    }
    getPrecise(B) {
      return parseFloat(B.toFixed(8));
    }
  },
  yl = 100,
  hT1 = 20000,
  AcA = 500,
  gT1 = 500,
  BcA = 5,
  QcA = 10,
  IcA = 1,
  R44 = 'amz-sdk-invocation-id',
  O44 = 'amz-sdk-request',
  T44 = uX(() => {
    let A = yl;
    return {
      computeNextBackoffDelay: uX((I) => {
        return Math.floor(Math.min(hT1, Math.random() * 2 ** I * A));
      }, 'computeNextBackoffDelay'),
      setDelayBase: uX((I) => {
        A = I;
      }, 'setDelayBase'),
    };
  }, 'getDefaultRetryBackoffStrategy'),
  rpA = uX(({ retryDelay: A, retryCount: B, retryCost: Q }) => {
    return {
      getRetryCount: uX(() => B, 'getRetryCount'),
      getRetryDelay: uX(() => Math.min(hT1, A), 'getRetryDelay'),
      getRetryCost: uX(() => Q, 'getRetryCost'),
    };
  }, 'createDefaultRetryToken'),
  mT1 = class {
    constructor(A) {
      ((this.maxAttempts = A),
        (this.mode = 'standard'),
        (this.capacity = gT1),
        (this.retryBackoffStrategy = T44()),
        (this.maxAttemptsProvider = typeof A === 'function' ? A : async () => A));
    }
    static {
      uX(this, 'StandardRetryStrategy');
    }
    async acquireInitialRetryToken(A) {
      return rpA({ retryDelay: yl, retryCount: 0 });
    }
    async refreshRetryTokenForRetry(A, B) {
      let Q = await this.getMaxAttempts();
      if (this.shouldRetry(A, B, Q)) {
        let I = B.errorType;
        this.retryBackoffStrategy.setDelayBase(I === 'THROTTLING' ? AcA : yl);
        let G = this.retryBackoffStrategy.computeNextBackoffDelay(A.getRetryCount()),
          D = B.retryAfterHint ? Math.max(B.retryAfterHint.getTime() - Date.now() || 0, G) : G,
          Z = this.getCapacityCost(I);
        return (
          (this.capacity -= Z),
          rpA({ retryDelay: D, retryCount: A.getRetryCount() + 1, retryCost: Z })
        );
      }
      throw new Error('No retry token available');
    }
    recordSuccess(A) {
      this.capacity = Math.max(gT1, this.capacity + (A.getRetryCost() ?? IcA));
    }
    getCapacity() {
      return this.capacity;
    }
    async getMaxAttempts() {
      try {
        return await this.maxAttemptsProvider();
      } catch (A) {
        return (
          console.warn(`Max attempts provider could not resolve. Using default of ${bT1}`),
          bT1
        );
      }
    }
    shouldRetry(A, B, Q) {
      return (
        A.getRetryCount() + 1 < Q &&
        this.capacity >= this.getCapacityCost(B.errorType) &&
        this.isRetryableError(B.errorType)
      );
    }
    getCapacityCost(A) {
      return A === 'TRANSIENT' ? QcA : BcA;
    }
    isRetryableError(A) {
      return A === 'THROTTLING' || A === 'TRANSIENT';
    }
  },
  P44 = class {
    constructor(A, B) {
      ((this.maxAttemptsProvider = A), (this.mode = 'adaptive'));
      let { rateLimiter: Q } = B ?? {};
      ((this.rateLimiter = Q ?? new epA()), (this.standardRetryStrategy = new mT1(A)));
    }
    static {
      uX(this, 'AdaptiveRetryStrategy');
    }
    async acquireInitialRetryToken(A) {
      return (
        await this.rateLimiter.getSendToken(),
        this.standardRetryStrategy.acquireInitialRetryToken(A)
      );
    }
    async refreshRetryTokenForRetry(A, B) {
      return (
        this.rateLimiter.updateClientSendingRate(B),
        this.standardRetryStrategy.refreshRetryTokenForRetry(A, B)
      );
    }
    recordSuccess(A) {
      (this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(A));
    }
  },
  S44 = class extends mT1 {
    static {
      uX(this, 'ConfiguredRetryStrategy');
    }
    constructor(A, B = yl) {
      super(typeof A === 'function' ? A : async () => A);
      if (typeof B === 'number') this.computeNextBackoffDelay = () => B;
      else this.computeNextBackoffDelay = B;
    }
    async refreshRetryTokenForRetry(A, B) {
      let Q = await super.refreshRetryTokenForRetry(A, B);
      return ((Q.getRetryDelay = () => this.computeNextBackoffDelay(Q.getRetryCount())), Q);
    }
  };
