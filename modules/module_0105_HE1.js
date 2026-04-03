// Module: HE1
// Params: f9A

Object.defineProperty(f9A, '__esModule', { value: !0 });
var u7 = tA(),
  eO = vQ(),
  y9A = qE(),
  oh2 = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
  ],
  th2 = [
    /^.*\/healthcheck$/,
    /^.*\/healthy$/,
    /^.*\/live$/,
    /^.*\/ready$/,
    /^.*\/heartbeat$/,
    /^.*\/health$/,
    /^.*\/healthz$/,
  ],
  k9A = 'InboundFilters',
  eh2 = (A = {}) => {
    return {
      name: k9A,
      setupOnce() {},
      processEvent(B, Q, I) {
        let G = I.getOptions(),
          D = Bm2(A, G);
        return Qm2(B, D) ? null : B;
      },
    };
  },
  x9A = y9A.defineIntegration(eh2),
  Am2 = y9A.convertIntegrationFnToClass(k9A, x9A);
function Bm2(A = {}, B = {}) {
  return {
    allowUrls: [...(A.allowUrls || []), ...(B.allowUrls || [])],
    denyUrls: [...(A.denyUrls || []), ...(B.denyUrls || [])],
    ignoreErrors: [
      ...(A.ignoreErrors || []),
      ...(B.ignoreErrors || []),
      ...(A.disableErrorDefaults ? [] : oh2),
    ],
    ignoreTransactions: [
      ...(A.ignoreTransactions || []),
      ...(B.ignoreTransactions || []),
      ...(A.disableTransactionDefaults ? [] : th2),
    ],
    ignoreInternal: A.ignoreInternal !== void 0 ? A.ignoreInternal : !0,
  };
}
function Qm2(A, B) {
  if (B.ignoreInternal && Wm2(A))
    return (
      eO.DEBUG_BUILD &&
        u7.logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${u7.getEventDescription(A)}`),
      !0
    );
  if (Im2(A, B.ignoreErrors))
    return (
      eO.DEBUG_BUILD &&
        u7.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${u7.getEventDescription(A)}`),
      !0
    );
  if (Gm2(A, B.ignoreTransactions))
    return (
      eO.DEBUG_BUILD &&
        u7.logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${u7.getEventDescription(A)}`),
      !0
    );
  if (Dm2(A, B.denyUrls))
    return (
      eO.DEBUG_BUILD &&
        u7.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${u7.getEventDescription(A)}.
Url: ${rA1(A)}`),
      !0
    );
  if (!Zm2(A, B.allowUrls))
    return (
      eO.DEBUG_BUILD &&
        u7.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${u7.getEventDescription(A)}.
Url: ${rA1(A)}`),
      !0
    );
  return !1;
}
function Im2(A, B) {
  if (A.type || !B || !B.length) return !1;
  return Ym2(A).some((Q) => u7.stringMatchesSomePattern(Q, B));
}
function Gm2(A, B) {
  if (A.type !== 'transaction' || !B || !B.length) return !1;
  let Q = A.transaction;
  return Q ? u7.stringMatchesSomePattern(Q, B) : !1;
}
function Dm2(A, B) {
  if (!B || !B.length) return !1;
  let Q = rA1(A);
  return !Q ? !1 : u7.stringMatchesSomePattern(Q, B);
}
function Zm2(A, B) {
  if (!B || !B.length) return !0;
  let Q = rA1(A);
  return !Q ? !0 : u7.stringMatchesSomePattern(Q, B);
}
function Ym2(A) {
  let B = [];
  if (A.message) B.push(A.message);
  let Q;
  try {
    Q = A.exception.values[A.exception.values.length - 1];
  } catch (I) {}
  if (Q) {
    if (Q.value) {
      if ((B.push(Q.value), Q.type)) B.push(`${Q.type}: ${Q.value}`);
    }
  }
  if (eO.DEBUG_BUILD && B.length === 0)
    u7.logger.error(`Could not extract message for event ${u7.getEventDescription(A)}`);
  return B;
}
function Wm2(A) {
  try {
    return A.exception.values[0].type === 'SentryError';
  } catch (B) {}
  return !1;
}
function Fm2(A = []) {
  for (let B = A.length - 1; B >= 0; B--) {
    let Q = A[B];
    if (Q && Q.filename !== '<anonymous>' && Q.filename !== '[native code]')
      return Q.filename || null;
  }
  return null;
}
function rA1(A) {
  try {
    let B;
    try {
      B = A.exception.values[0].stacktrace.frames;
    } catch (Q) {}
    return B ? Fm2(B) : null;
  } catch (B) {
    return (
      eO.DEBUG_BUILD &&
        u7.logger.error(`Cannot extract url for event ${u7.getEventDescription(A)}`),
      null
    );
  }
}
f9A.InboundFilters = Am2;
f9A.inboundFiltersIntegration = x9A;
