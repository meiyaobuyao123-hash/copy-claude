// Module: wi1
// Params: v32

Object.defineProperty(v32, '__esModule', { value: !0 });
v32.validateRetryThrottling = x32;
v32.validateServiceConfig = f32;
v32.extractAndSelectServiceConfig = Ju6;
var Bu6 = D1('os'),
  AC1 = O6(),
  BC1 = /^\d+(\.\d{1,9})?s$/,
  Qu6 = 'node';
function Iu6(A) {
  if ('service' in A && A.service !== '') {
    if (typeof A.service !== 'string')
      throw new Error(
        `Invalid method config name: invalid service: expected type string, got ${typeof A.service}`
      );
    if ('method' in A && A.method !== '') {
      if (typeof A.method !== 'string')
        throw new Error(
          `Invalid method config name: invalid method: expected type string, got ${typeof A.service}`
        );
      return { service: A.service, method: A.method };
    } else return { service: A.service };
  } else {
    if ('method' in A && A.method !== void 0)
      throw new Error('Invalid method config name: method set with empty or unset service');
    return {};
  }
}
function Gu6(A) {
  if (!('maxAttempts' in A) || !Number.isInteger(A.maxAttempts) || A.maxAttempts < 2)
    throw new Error(
      'Invalid method config retry policy: maxAttempts must be an integer at least 2'
    );
  if (
    !('initialBackoff' in A) ||
    typeof A.initialBackoff !== 'string' ||
    !BC1.test(A.initialBackoff)
  )
    throw new Error(
      'Invalid method config retry policy: initialBackoff must be a string consisting of a positive integer or decimal followed by s'
    );
  if (!('maxBackoff' in A) || typeof A.maxBackoff !== 'string' || !BC1.test(A.maxBackoff))
    throw new Error(
      'Invalid method config retry policy: maxBackoff must be a string consisting of a positive integer or decimal followed by s'
    );
  if (
    !('backoffMultiplier' in A) ||
    typeof A.backoffMultiplier !== 'number' ||
    A.backoffMultiplier <= 0
  )
    throw new Error(
      'Invalid method config retry policy: backoffMultiplier must be a number greater than 0'
    );
  if (!('retryableStatusCodes' in A && Array.isArray(A.retryableStatusCodes)))
    throw new Error('Invalid method config retry policy: retryableStatusCodes is required');
  if (A.retryableStatusCodes.length === 0)
    throw new Error('Invalid method config retry policy: retryableStatusCodes must be non-empty');
  for (let B of A.retryableStatusCodes)
    if (typeof B === 'number') {
      if (!Object.values(AC1.Status).includes(B))
        throw new Error(
          'Invalid method config retry policy: retryableStatusCodes value not in status code range'
        );
    } else if (typeof B === 'string') {
      if (!Object.values(AC1.Status).includes(B.toUpperCase()))
        throw new Error(
          'Invalid method config retry policy: retryableStatusCodes value not a status code name'
        );
    } else
      throw new Error(
        'Invalid method config retry policy: retryableStatusCodes value must be a string or number'
      );
  return {
    maxAttempts: A.maxAttempts,
    initialBackoff: A.initialBackoff,
    maxBackoff: A.maxBackoff,
    backoffMultiplier: A.backoffMultiplier,
    retryableStatusCodes: A.retryableStatusCodes,
  };
}
function Du6(A) {
  if (!('maxAttempts' in A) || !Number.isInteger(A.maxAttempts) || A.maxAttempts < 2)
    throw new Error(
      'Invalid method config hedging policy: maxAttempts must be an integer at least 2'
    );
  if ('hedgingDelay' in A && (typeof A.hedgingDelay !== 'string' || !BC1.test(A.hedgingDelay)))
    throw new Error(
      'Invalid method config hedging policy: hedgingDelay must be a string consisting of a positive integer followed by s'
    );
  if ('nonFatalStatusCodes' in A && Array.isArray(A.nonFatalStatusCodes))
    for (let Q of A.nonFatalStatusCodes)
      if (typeof Q === 'number') {
        if (!Object.values(AC1.Status).includes(Q))
          throw new Error(
            'Invalid method config hedging policy: nonFatalStatusCodes value not in status code range'
          );
      } else if (typeof Q === 'string') {
        if (!Object.values(AC1.Status).includes(Q.toUpperCase()))
          throw new Error(
            'Invalid method config hedging policy: nonFatalStatusCodes value not a status code name'
          );
      } else
        throw new Error(
          'Invalid method config hedging policy: nonFatalStatusCodes value must be a string or number'
        );
  let B = { maxAttempts: A.maxAttempts };
  if (A.hedgingDelay) B.hedgingDelay = A.hedgingDelay;
  if (A.nonFatalStatusCodes) B.nonFatalStatusCodes = A.nonFatalStatusCodes;
  return B;
}
function Zu6(A) {
  var B;
  let Q = { name: [] };
  if (!('name' in A) || !Array.isArray(A.name))
    throw new Error('Invalid method config: invalid name array');
  for (let I of A.name) Q.name.push(Iu6(I));
  if ('waitForReady' in A) {
    if (typeof A.waitForReady !== 'boolean')
      throw new Error('Invalid method config: invalid waitForReady');
    Q.waitForReady = A.waitForReady;
  }
  if ('timeout' in A)
    if (typeof A.timeout === 'object') {
      if (!('seconds' in A.timeout) || typeof A.timeout.seconds !== 'number')
        throw new Error('Invalid method config: invalid timeout.seconds');
      if (!('nanos' in A.timeout) || typeof A.timeout.nanos !== 'number')
        throw new Error('Invalid method config: invalid timeout.nanos');
      Q.timeout = A.timeout;
    } else if (typeof A.timeout === 'string' && BC1.test(A.timeout)) {
      let I = A.timeout.substring(0, A.timeout.length - 1).split('.');
      Q.timeout = { seconds: I[0] | 0, nanos: ((B = I[1]) !== null && B !== void 0 ? B : 0) | 0 };
    } else throw new Error('Invalid method config: invalid timeout');
  if ('maxRequestBytes' in A) {
    if (typeof A.maxRequestBytes !== 'number')
      throw new Error('Invalid method config: invalid maxRequestBytes');
    Q.maxRequestBytes = A.maxRequestBytes;
  }
  if ('maxResponseBytes' in A) {
    if (typeof A.maxResponseBytes !== 'number')
      throw new Error('Invalid method config: invalid maxRequestBytes');
    Q.maxResponseBytes = A.maxResponseBytes;
  }
  if ('retryPolicy' in A)
    if ('hedgingPolicy' in A)
      throw new Error(
        'Invalid method config: retryPolicy and hedgingPolicy cannot both be specified'
      );
    else Q.retryPolicy = Gu6(A.retryPolicy);
  else if ('hedgingPolicy' in A) Q.hedgingPolicy = Du6(A.hedgingPolicy);
  return Q;
}
function x32(A) {
  if (
    !('maxTokens' in A) ||
    typeof A.maxTokens !== 'number' ||
    A.maxTokens <= 0 ||
    A.maxTokens > 1000
  )
    throw new Error('Invalid retryThrottling: maxTokens must be a number in (0, 1000]');
  if (!('tokenRatio' in A) || typeof A.tokenRatio !== 'number' || A.tokenRatio <= 0)
    throw new Error('Invalid retryThrottling: tokenRatio must be a number greater than 0');
  return { maxTokens: +A.maxTokens.toFixed(3), tokenRatio: +A.tokenRatio.toFixed(3) };
}
function Yu6(A) {
  if (!(typeof A === 'object' && A !== null))
    throw new Error(`Invalid loadBalancingConfig: unexpected type ${typeof A}`);
  let B = Object.keys(A);
  if (B.length > 1) throw new Error(`Invalid loadBalancingConfig: unexpected multiple keys ${B}`);
  if (B.length === 0)
    throw new Error('Invalid loadBalancingConfig: load balancing policy name required');
  return { [B[0]]: A[B[0]] };
}
function f32(A) {
  let B = { loadBalancingConfig: [], methodConfig: [] };
  if ('loadBalancingPolicy' in A)
    if (typeof A.loadBalancingPolicy === 'string') B.loadBalancingPolicy = A.loadBalancingPolicy;
    else throw new Error('Invalid service config: invalid loadBalancingPolicy');
  if ('loadBalancingConfig' in A)
    if (Array.isArray(A.loadBalancingConfig))
      for (let I of A.loadBalancingConfig) B.loadBalancingConfig.push(Yu6(I));
    else throw new Error('Invalid service config: invalid loadBalancingConfig');
  if ('methodConfig' in A) {
    if (Array.isArray(A.methodConfig)) for (let I of A.methodConfig) B.methodConfig.push(Zu6(I));
  }
  if ('retryThrottling' in A) B.retryThrottling = x32(A.retryThrottling);
  let Q = [];
  for (let I of B.methodConfig)
    for (let G of I.name) {
      for (let D of Q)
        if (G.service === D.service && G.method === D.method)
          throw new Error(`Invalid service config: duplicate name ${G.service}/${G.method}`);
      Q.push(G);
    }
  return B;
}
function Wu6(A) {
  if (!('serviceConfig' in A))
    throw new Error('Invalid service config choice: missing service config');
  let B = { serviceConfig: f32(A.serviceConfig) };
  if ('clientLanguage' in A)
    if (Array.isArray(A.clientLanguage)) {
      B.clientLanguage = [];
      for (let I of A.clientLanguage)
        if (typeof I === 'string') B.clientLanguage.push(I);
        else throw new Error('Invalid service config choice: invalid clientLanguage');
    } else throw new Error('Invalid service config choice: invalid clientLanguage');
  if ('clientHostname' in A)
    if (Array.isArray(A.clientHostname)) {
      B.clientHostname = [];
      for (let I of A.clientHostname)
        if (typeof I === 'string') B.clientHostname.push(I);
        else throw new Error('Invalid service config choice: invalid clientHostname');
    } else throw new Error('Invalid service config choice: invalid clientHostname');
  if ('percentage' in A)
    if (typeof A.percentage === 'number' && 0 <= A.percentage && A.percentage <= 100)
      B.percentage = A.percentage;
    else throw new Error('Invalid service config choice: invalid percentage');
  let Q = ['clientLanguage', 'percentage', 'clientHostname', 'serviceConfig'];
  for (let I in A)
    if (!Q.includes(I)) throw new Error(`Invalid service config choice: unexpected field ${I}`);
  return B;
}
function Fu6(A, B) {
  if (!Array.isArray(A)) throw new Error('Invalid service config list');
  for (let Q of A) {
    let I = Wu6(Q);
    if (typeof I.percentage === 'number' && B > I.percentage) continue;
    if (Array.isArray(I.clientHostname)) {
      let G = !1;
      for (let D of I.clientHostname) if (D === Bu6.hostname()) G = !0;
      if (!G) continue;
    }
    if (Array.isArray(I.clientLanguage)) {
      let G = !1;
      for (let D of I.clientLanguage) if (D === Qu6) G = !0;
      if (!G) continue;
    }
    return I.serviceConfig;
  }
  throw new Error('No matching service config found');
}
function Ju6(A, B) {
  for (let Q of A)
    if (Q.length > 0 && Q[0].startsWith('grpc_config=')) {
      let I = Q.join('').substring(12),
        G = JSON.parse(I);
      return Fu6(G, B);
    }
  return null;
}
