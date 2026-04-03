// Module: Cw1
// Params: KAA

Object.defineProperty(KAA, '__esModule', { value: !0 });
var fT2 = aK(),
  vT2 = QJ(),
  bT2 = CX(),
  gT2 = 'baggage',
  Jw1 = 'sentry-',
  XAA = /^sentry-/,
  VAA = 8192;
function hT2(A) {
  if (!vT2.isString(A) && !Array.isArray(A)) return;
  let B = {};
  if (Array.isArray(A))
    B = A.reduce((I, G) => {
      let D = CAA(G);
      for (let Z of Object.keys(D)) I[Z] = D[Z];
      return I;
    }, {});
  else {
    if (!A) return;
    B = CAA(A);
  }
  let Q = Object.entries(B).reduce((I, [G, D]) => {
    if (G.match(XAA)) {
      let Z = G.slice(Jw1.length);
      I[Z] = D;
    }
    return I;
  }, {});
  if (Object.keys(Q).length > 0) return Q;
  else return;
}
function mT2(A) {
  if (!A) return;
  let B = Object.entries(A).reduce((Q, [I, G]) => {
    if (G) Q[`${Jw1}${I}`] = G;
    return Q;
  }, {});
  return dT2(B);
}
function CAA(A) {
  return A.split(',')
    .map((B) => B.split('=').map((Q) => decodeURIComponent(Q.trim())))
    .reduce((B, [Q, I]) => {
      return ((B[Q] = I), B);
    }, {});
}
function dT2(A) {
  if (Object.keys(A).length === 0) return;
  return Object.entries(A).reduce((B, [Q, I], G) => {
    let D = `${encodeURIComponent(Q)}=${encodeURIComponent(I)}`,
      Z = G === 0 ? D : `${B},${D}`;
    if (Z.length > VAA)
      return (
        fT2.DEBUG_BUILD &&
          bT2.logger.warn(
            `Not adding key: ${Q} with val: ${I} to baggage header due to exceeding baggage size limits.`
          ),
        B
      );
    else return Z;
  }, '');
}
KAA.BAGGAGE_HEADER_NAME = gT2;
KAA.MAX_BAGGAGE_STRING_LENGTH = VAA;
KAA.SENTRY_BAGGAGE_KEY_PREFIX = Jw1;
KAA.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = XAA;
KAA.baggageHeaderToDynamicSamplingContext = hT2;
KAA.dynamicSamplingContextToSentryBaggageHeader = mT2;
