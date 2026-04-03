// Module: vT1
// Params: Vu5,spA

var { defineProperty: c81, getOwnPropertyDescriptor: Q44, getOwnPropertyNames: I44 } = Object,
  G44 = Object.prototype.hasOwnProperty,
  _f = (A, B) => c81(A, 'name', { value: B, configurable: !0 }),
  D44 = (A, B) => {
    for (var Q in B) c81(A, Q, { get: B[Q], enumerable: !0 });
  },
  Z44 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of I44(B))
        if (!G44.call(A, G) && G !== Q)
          c81(A, G, { get: () => B[G], enumerable: !(I = Q44(B, G)) || I.enumerable });
    }
    return A;
  },
  Y44 = (A) => Z44(c81({}, '__esModule', { value: !0 }), A),
  npA = {};
D44(npA, {
  isClockSkewCorrectedError: () => apA,
  isClockSkewError: () => K44,
  isRetryableByTrait: () => V44,
  isServerError: () => z44,
  isThrottlingError: () => H44,
  isTransientError: () => fT1,
});
spA.exports = Y44(npA);
var W44 = [
    'AuthFailure',
    'InvalidSignatureException',
    'RequestExpired',
    'RequestInTheFuture',
    'RequestTimeTooSkewed',
    'SignatureDoesNotMatch',
  ],
  F44 = [
    'BandwidthLimitExceeded',
    'EC2ThrottledException',
    'LimitExceededException',
    'PriorRequestNotComplete',
    'ProvisionedThroughputExceededException',
    'RequestLimitExceeded',
    'RequestThrottled',
    'RequestThrottledException',
    'SlowDown',
    'ThrottledException',
    'Throttling',
    'ThrottlingException',
    'TooManyRequestsException',
    'TransactionInProgressException',
  ],
  J44 = ['TimeoutError', 'RequestTimeout', 'RequestTimeoutException'],
  C44 = [500, 502, 503, 504],
  X44 = ['ECONNRESET', 'ECONNREFUSED', 'EPIPE', 'ETIMEDOUT'],
  V44 = _f((A) => A.$retryable !== void 0, 'isRetryableByTrait'),
  K44 = _f((A) => W44.includes(A.name), 'isClockSkewError'),
  apA = _f((A) => A.$metadata?.clockSkewCorrected, 'isClockSkewCorrectedError'),
  H44 = _f(
    (A) =>
      A.$metadata?.httpStatusCode === 429 || F44.includes(A.name) || A.$retryable?.throttling == !0,
    'isThrottlingError'
  ),
  fT1 = _f(
    (A, B = 0) =>
      apA(A) ||
      J44.includes(A.name) ||
      X44.includes(A?.code || '') ||
      C44.includes(A.$metadata?.httpStatusCode || 0) ||
      (A.cause !== void 0 && B <= 10 && fT1(A.cause, B + 1)),
    'isTransientError'
  ),
  z44 = _f((A) => {
    if (A.$metadata?.httpStatusCode !== void 0) {
      let B = A.$metadata.httpStatusCode;
      if (500 <= B && B <= 599 && !fT1(A)) return !0;
      return !1;
    }
    return !1;
  }, 'isServerError');
