// Module: yL0
// Params: jL0

Object.defineProperty(jL0, '__esModule', { value: !0 });
jL0.getRetryConfig = V16;
async function V16(A) {
  let B = _L0(A);
  if (!A || !A.config || (!B && !A.config.retry)) return { shouldRetry: !1 };
  ((B = B || {}),
    (B.currentRetryAttempt = B.currentRetryAttempt || 0),
    (B.retry = B.retry === void 0 || B.retry === null ? 3 : B.retry),
    (B.httpMethodsToRetry = B.httpMethodsToRetry || ['GET', 'HEAD', 'PUT', 'OPTIONS', 'DELETE']),
    (B.noResponseRetries =
      B.noResponseRetries === void 0 || B.noResponseRetries === null ? 2 : B.noResponseRetries),
    (B.retryDelayMultiplier = B.retryDelayMultiplier ? B.retryDelayMultiplier : 2),
    (B.timeOfFirstRequest = B.timeOfFirstRequest ? B.timeOfFirstRequest : Date.now()),
    (B.totalTimeout = B.totalTimeout ? B.totalTimeout : Number.MAX_SAFE_INTEGER),
    (B.maxRetryDelay = B.maxRetryDelay ? B.maxRetryDelay : Number.MAX_SAFE_INTEGER));
  let Q = [
    [100, 199],
    [408, 408],
    [429, 429],
    [500, 599],
  ];
  if (
    ((B.statusCodesToRetry = B.statusCodesToRetry || Q),
    (A.config.retryConfig = B),
    !(await (B.shouldRetry || K16)(A)))
  )
    return { shouldRetry: !1, config: A.config };
  let G = H16(B);
  A.config.retryConfig.currentRetryAttempt += 1;
  let D = B.retryBackoff
    ? B.retryBackoff(A, G)
    : new Promise((Z) => {
        setTimeout(Z, G);
      });
  if (B.onRetryAttempt) B.onRetryAttempt(A);
  return (await D, { shouldRetry: !0, config: A.config });
}
function K16(A) {
  var B;
  let Q = _L0(A);
  if (
    A.name === 'AbortError' ||
    ((B = A.error) === null || B === void 0 ? void 0 : B.name) === 'AbortError'
  )
    return !1;
  if (!Q || Q.retry === 0) return !1;
  if (!A.response && (Q.currentRetryAttempt || 0) >= Q.noResponseRetries) return !1;
  if (!A.config.method || Q.httpMethodsToRetry.indexOf(A.config.method.toUpperCase()) < 0)
    return !1;
  if (A.response && A.response.status) {
    let I = !1;
    for (let [G, D] of Q.statusCodesToRetry) {
      let Z = A.response.status;
      if (Z >= G && Z <= D) {
        I = !0;
        break;
      }
    }
    if (!I) return !1;
  }
  if (((Q.currentRetryAttempt = Q.currentRetryAttempt || 0), Q.currentRetryAttempt >= Q.retry))
    return !1;
  return !0;
}
function _L0(A) {
  if (A && A.config && A.config.retryConfig) return A.config.retryConfig;
  return;
}
function H16(A) {
  var B;
  let I =
      (A.currentRetryAttempt ? 0 : (B = A.retryDelay) !== null && B !== void 0 ? B : 100) +
      ((Math.pow(A.retryDelayMultiplier, A.currentRetryAttempt) - 1) / 2) * 1000,
    G = A.totalTimeout - (Date.now() - A.timeOfFirstRequest);
  return Math.min(I, G, A.maxRetryDelay);
}
