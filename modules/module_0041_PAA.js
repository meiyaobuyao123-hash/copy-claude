// Module: PAA
// Params: TAA

Object.defineProperty(TAA, '__esModule', { value: !0 });
var LAA = 60000;
function RAA(A, B = Date.now()) {
  let Q = parseInt(`${A}`, 10);
  if (!isNaN(Q)) return Q * 1000;
  let I = Date.parse(`${A}`);
  if (!isNaN(I)) return I - B;
  return LAA;
}
function OAA(A, B) {
  return A[B] || A.all || 0;
}
function SP2(A, B, Q = Date.now()) {
  return OAA(A, B) > Q;
}
function _P2(A, { statusCode: B, headers: Q }, I = Date.now()) {
  let G = { ...A },
    D = Q && Q['x-sentry-rate-limits'],
    Z = Q && Q['retry-after'];
  if (D)
    for (let Y of D.trim().split(',')) {
      let [W, F, , , J] = Y.split(':', 5),
        C = parseInt(W, 10),
        X = (!isNaN(C) ? C : 60) * 1000;
      if (!F) G.all = I + X;
      else
        for (let V of F.split(';'))
          if (V === 'metric_bucket') {
            if (!J || J.split(';').includes('custom')) G[V] = I + X;
          } else G[V] = I + X;
    }
  else if (Z) G.all = I + RAA(Z, I);
  else if (B === 429) G.all = I + 60000;
  return G;
}
TAA.DEFAULT_RETRY_AFTER = LAA;
TAA.disabledUntil = OAA;
TAA.isRateLimited = SP2;
TAA.parseRetryAfterHeader = RAA;
TAA.updateRateLimits = _P2;
