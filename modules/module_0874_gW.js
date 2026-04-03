// Module: gW
// Params: Ru5,dcA

var { defineProperty: s81, getOwnPropertyDescriptor: p64, getOwnPropertyNames: c64 } = Object,
  l64 = Object.prototype.hasOwnProperty,
  dQ = (A, B) => s81(A, 'name', { value: B, configurable: !0 }),
  i64 = (A, B) => {
    for (var Q in B) s81(A, Q, { get: B[Q], enumerable: !0 });
  },
  n64 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of c64(B))
        if (!l64.call(A, G) && G !== Q)
          s81(A, G, { get: () => B[G], enumerable: !(I = p64(B, G)) || I.enumerable });
    }
    return A;
  },
  a64 = (A) => n64(s81({}, '__esModule', { value: !0 }), A),
  PcA = {};
i64(PcA, {
  AdaptiveRetryStrategy: () => o64,
  CONFIG_MAX_ATTEMPTS: () => AP1,
  CONFIG_RETRY_MODE: () => fcA,
  ENV_MAX_ATTEMPTS: () => eT1,
  ENV_RETRY_MODE: () => xcA,
  NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => t64,
  NODE_RETRY_MODE_CONFIG_OPTIONS: () => A54,
  StandardRetryStrategy: () => kcA,
  defaultDelayDecider: () => _cA,
  defaultRetryDecider: () => jcA,
  getOmitRetryHeadersPlugin: () => B54,
  getRetryAfterHint: () => mcA,
  getRetryPlugin: () => Y54,
  omitRetryHeadersMiddleware: () => vcA,
  omitRetryHeadersMiddlewareOptions: () => bcA,
  resolveRetryConfig: () => e64,
  retryMiddleware: () => gcA,
  retryMiddlewareOptions: () => hcA,
});
dcA.exports = a64(PcA);
var xf = euA(),
  ScA = jl(),
  I3 = KM(),
  s64 = dQ((A, B) => {
    let Q = A,
      I = B?.noRetryIncrement ?? I3.NO_RETRY_INCREMENT,
      G = B?.retryCost ?? I3.RETRY_COST,
      D = B?.timeoutRetryCost ?? I3.TIMEOUT_RETRY_COST,
      Z = A,
      Y = dQ((C) => (C.name === 'TimeoutError' ? D : G), 'getCapacityAmount'),
      W = dQ((C) => Y(C) <= Z, 'hasRetryTokens');
    return Object.freeze({
      hasRetryTokens: W,
      retrieveRetryTokens: dQ((C) => {
        if (!W(C)) throw new Error('No retry token available');
        let X = Y(C);
        return ((Z -= X), X);
      }, 'retrieveRetryTokens'),
      releaseRetryTokens: dQ((C) => {
        ((Z += C ?? I), (Z = Math.min(Z, Q)));
      }, 'releaseRetryTokens'),
    });
  }, 'getDefaultRetryQuota'),
  _cA = dQ(
    (A, B) => Math.floor(Math.min(I3.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** B * A)),
    'defaultDelayDecider'
  ),
  HM = vT1(),
  jcA = dQ((A) => {
    if (!A) return !1;
    return (
      HM.isRetryableByTrait(A) ||
      HM.isClockSkewError(A) ||
      HM.isThrottlingError(A) ||
      HM.isTransientError(A)
    );
  }, 'defaultRetryDecider'),
  ycA = dQ((A) => {
    if (A instanceof Error) return A;
    if (A instanceof Object) return Object.assign(new Error(), A);
    if (typeof A === 'string') return new Error(A);
    return new Error(`AWS SDK error wrapper for ${A}`);
  }, 'asSdkError'),
  kcA = class {
    constructor(A, B) {
      ((this.maxAttemptsProvider = A),
        (this.mode = I3.RETRY_MODES.STANDARD),
        (this.retryDecider = B?.retryDecider ?? jcA),
        (this.delayDecider = B?.delayDecider ?? _cA),
        (this.retryQuota = B?.retryQuota ?? s64(I3.INITIAL_RETRY_TOKENS)));
    }
    static {
      dQ(this, 'StandardRetryStrategy');
    }
    shouldRetry(A, B, Q) {
      return B < Q && this.retryDecider(A) && this.retryQuota.hasRetryTokens(A);
    }
    async getMaxAttempts() {
      let A;
      try {
        A = await this.maxAttemptsProvider();
      } catch (B) {
        A = I3.DEFAULT_MAX_ATTEMPTS;
      }
      return A;
    }
    async retry(A, B, Q) {
      let I,
        G = 0,
        D = 0,
        Z = await this.getMaxAttempts(),
        { request: Y } = B;
      if (xf.HttpRequest.isInstance(Y)) Y.headers[I3.INVOCATION_ID_HEADER] = ScA.v4();
      while (!0)
        try {
          if (xf.HttpRequest.isInstance(Y))
            Y.headers[I3.REQUEST_HEADER] = `attempt=${G + 1}; max=${Z}`;
          if (Q?.beforeRequest) await Q.beforeRequest();
          let { response: W, output: F } = await A(B);
          if (Q?.afterRequest) Q.afterRequest(W);
          return (
            this.retryQuota.releaseRetryTokens(I),
            (F.$metadata.attempts = G + 1),
            (F.$metadata.totalRetryDelay = D),
            { response: W, output: F }
          );
        } catch (W) {
          let F = ycA(W);
          if ((G++, this.shouldRetry(F, G, Z))) {
            I = this.retryQuota.retrieveRetryTokens(F);
            let J = this.delayDecider(
                HM.isThrottlingError(F)
                  ? I3.THROTTLING_RETRY_DELAY_BASE
                  : I3.DEFAULT_RETRY_DELAY_BASE,
                G
              ),
              C = r64(F.$response),
              X = Math.max(C || 0, J);
            ((D += X), await new Promise((V) => setTimeout(V, X)));
            continue;
          }
          if (!F.$metadata) F.$metadata = {};
          throw ((F.$metadata.attempts = G), (F.$metadata.totalRetryDelay = D), F);
        }
    }
  },
  r64 = dQ((A) => {
    if (!xf.HttpResponse.isInstance(A)) return;
    let B = Object.keys(A.headers).find((D) => D.toLowerCase() === 'retry-after');
    if (!B) return;
    let Q = A.headers[B],
      I = Number(Q);
    if (!Number.isNaN(I)) return I * 1000;
    return new Date(Q).getTime() - Date.now();
  }, 'getDelayFromRetryAfterHeader'),
  o64 = class extends kcA {
    static {
      dQ(this, 'AdaptiveRetryStrategy');
    }
    constructor(A, B) {
      let { rateLimiter: Q, ...I } = B ?? {};
      super(A, I);
      ((this.rateLimiter = Q ?? new I3.DefaultRateLimiter()),
        (this.mode = I3.RETRY_MODES.ADAPTIVE));
    }
    async retry(A, B) {
      return super.retry(A, B, {
        beforeRequest: async () => {
          return this.rateLimiter.getSendToken();
        },
        afterRequest: (Q) => {
          this.rateLimiter.updateClientSendingRate(Q);
        },
      });
    }
  },
  TcA = qJ(),
  eT1 = 'AWS_MAX_ATTEMPTS',
  AP1 = 'max_attempts',
  t64 = {
    environmentVariableSelector: (A) => {
      let B = A[eT1];
      if (!B) return;
      let Q = parseInt(B);
      if (Number.isNaN(Q))
        throw new Error(`Environment variable ${eT1} mast be a number, got "${B}"`);
      return Q;
    },
    configFileSelector: (A) => {
      let B = A[AP1];
      if (!B) return;
      let Q = parseInt(B);
      if (Number.isNaN(Q))
        throw new Error(`Shared config file entry ${AP1} mast be a number, got "${B}"`);
      return Q;
    },
    default: I3.DEFAULT_MAX_ATTEMPTS,
  },
  e64 = dQ((A) => {
    let { retryStrategy: B, retryMode: Q, maxAttempts: I } = A,
      G = TcA.normalizeProvider(I ?? I3.DEFAULT_MAX_ATTEMPTS);
    return Object.assign(A, {
      maxAttempts: G,
      retryStrategy: async () => {
        if (B) return B;
        if ((await TcA.normalizeProvider(Q)()) === I3.RETRY_MODES.ADAPTIVE)
          return new I3.AdaptiveRetryStrategy(G);
        return new I3.StandardRetryStrategy(G);
      },
    });
  }, 'resolveRetryConfig'),
  xcA = 'AWS_RETRY_MODE',
  fcA = 'retry_mode',
  A54 = {
    environmentVariableSelector: (A) => A[xcA],
    configFileSelector: (A) => A[fcA],
    default: I3.DEFAULT_RETRY_MODE,
  },
  vcA = dQ(
    () => (A) => async (B) => {
      let { request: Q } = B;
      if (xf.HttpRequest.isInstance(Q))
        (delete Q.headers[I3.INVOCATION_ID_HEADER], delete Q.headers[I3.REQUEST_HEADER]);
      return A(B);
    },
    'omitRetryHeadersMiddleware'
  ),
  bcA = {
    name: 'omitRetryHeadersMiddleware',
    tags: ['RETRY', 'HEADERS', 'OMIT_RETRY_HEADERS'],
    relation: 'before',
    toMiddleware: 'awsAuthMiddleware',
    override: !0,
  },
  B54 = dQ(
    (A) => ({
      applyToStack: (B) => {
        B.addRelativeTo(vcA(), bcA);
      },
    }),
    'getOmitRetryHeadersPlugin'
  ),
  Q54 = McA(),
  I54 = OcA(),
  gcA = dQ(
    (A) => (B, Q) => async (I) => {
      let G = await A.retryStrategy(),
        D = await A.maxAttempts();
      if (G54(G)) {
        G = G;
        let Z = await G.acquireInitialRetryToken(Q.partition_id),
          Y = new Error(),
          W = 0,
          F = 0,
          { request: J } = I,
          C = xf.HttpRequest.isInstance(J);
        if (C) J.headers[I3.INVOCATION_ID_HEADER] = ScA.v4();
        while (!0)
          try {
            if (C) J.headers[I3.REQUEST_HEADER] = `attempt=${W + 1}; max=${D}`;
            let { response: X, output: V } = await B(I);
            return (
              G.recordSuccess(Z),
              (V.$metadata.attempts = W + 1),
              (V.$metadata.totalRetryDelay = F),
              { response: X, output: V }
            );
          } catch (X) {
            let V = D54(X);
            if (((Y = ycA(X)), C && I54.isStreamingPayload(J)))
              throw (
                (Q.logger instanceof Q54.NoOpLogger ? console : Q.logger)?.warn(
                  'An error was encountered in a non-retryable streaming request.'
                ),
                Y
              );
            try {
              Z = await G.refreshRetryTokenForRetry(Z, V);
            } catch (U) {
              if (!Y.$metadata) Y.$metadata = {};
              throw ((Y.$metadata.attempts = W + 1), (Y.$metadata.totalRetryDelay = F), Y);
            }
            W = Z.getRetryCount();
            let K = Z.getRetryDelay();
            ((F += K), await new Promise((U) => setTimeout(U, K)));
          }
      } else {
        if (((G = G), G?.mode)) Q.userAgent = [...(Q.userAgent || []), ['cfg/retry-mode', G.mode]];
        return G.retry(B, I);
      }
    },
    'retryMiddleware'
  ),
  G54 = dQ(
    (A) =>
      typeof A.acquireInitialRetryToken !== 'undefined' &&
      typeof A.refreshRetryTokenForRetry !== 'undefined' &&
      typeof A.recordSuccess !== 'undefined',
    'isRetryStrategyV2'
  ),
  D54 = dQ((A) => {
    let B = { error: A, errorType: Z54(A) },
      Q = mcA(A.$response);
    if (Q) B.retryAfterHint = Q;
    return B;
  }, 'getRetryErrorInfo'),
  Z54 = dQ((A) => {
    if (HM.isThrottlingError(A)) return 'THROTTLING';
    if (HM.isTransientError(A)) return 'TRANSIENT';
    if (HM.isServerError(A)) return 'SERVER_ERROR';
    return 'CLIENT_ERROR';
  }, 'getRetryErrorType'),
  hcA = {
    name: 'retryMiddleware',
    tags: ['RETRY'],
    step: 'finalizeRequest',
    priority: 'high',
    override: !0,
  },
  Y54 = dQ(
    (A) => ({
      applyToStack: (B) => {
        B.add(gcA(A), hcA);
      },
    }),
    'getRetryPlugin'
  ),
  mcA = dQ((A) => {
    if (!xf.HttpResponse.isInstance(A)) return;
    let B = Object.keys(A.headers).find((D) => D.toLowerCase() === 'retry-after');
    if (!B) return;
    let Q = A.headers[B],
      I = Number(Q);
    if (!Number.isNaN(I)) return new Date(I * 1000);
    return new Date(Q);
  }, 'getRetryAfterHint');
