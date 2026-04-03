// Module: H3A
// Params: K3A

Object.defineProperty(K3A, '__esModule', { value: !0 });
var W3A = I4(),
  Ne2 = tA(),
  $e2 = Xp(),
  F3A = 'Dedupe',
  qe2 = () => {
    let A;
    return {
      name: F3A,
      setupOnce() {},
      processEvent(B) {
        if (B.type) return B;
        try {
          if (C3A(B, A))
            return (
              $e2.DEBUG_BUILD &&
                Ne2.logger.warn(
                  'Event dropped due to being a duplicate of previously captured event.'
                ),
              null
            );
        } catch (Q) {}
        return (A = B);
      },
    };
  },
  J3A = W3A.defineIntegration(qe2),
  Me2 = W3A.convertIntegrationFnToClass(F3A, J3A);
function C3A(A, B) {
  if (!B) return !1;
  if (Le2(A, B)) return !0;
  if (Re2(A, B)) return !0;
  return !1;
}
function Le2(A, B) {
  let Q = A.message,
    I = B.message;
  if (!Q && !I) return !1;
  if ((Q && !I) || (!Q && I)) return !1;
  if (Q !== I) return !1;
  if (!V3A(A, B)) return !1;
  if (!X3A(A, B)) return !1;
  return !0;
}
function Re2(A, B) {
  let Q = Z3A(B),
    I = Z3A(A);
  if (!Q || !I) return !1;
  if (Q.type !== I.type || Q.value !== I.value) return !1;
  if (!V3A(A, B)) return !1;
  if (!X3A(A, B)) return !1;
  return !0;
}
function X3A(A, B) {
  let Q = Y3A(A),
    I = Y3A(B);
  if (!Q && !I) return !0;
  if ((Q && !I) || (!Q && I)) return !1;
  if (((Q = Q), (I = I), I.length !== Q.length)) return !1;
  for (let G = 0; G < I.length; G++) {
    let D = I[G],
      Z = Q[G];
    if (
      D.filename !== Z.filename ||
      D.lineno !== Z.lineno ||
      D.colno !== Z.colno ||
      D.function !== Z.function
    )
      return !1;
  }
  return !0;
}
function V3A(A, B) {
  let Q = A.fingerprint,
    I = B.fingerprint;
  if (!Q && !I) return !0;
  if ((Q && !I) || (!Q && I)) return !1;
  ((Q = Q), (I = I));
  try {
    return Q.join('') === I.join('');
  } catch (G) {
    return !1;
  }
}
function Z3A(A) {
  return A.exception && A.exception.values && A.exception.values[0];
}
function Y3A(A) {
  let B = A.exception;
  if (B)
    try {
      return B.values[0].stacktrace.frames;
    } catch (Q) {
      return;
    }
  return;
}
K3A.Dedupe = Me2;
K3A._shouldDropEvent = C3A;
K3A.dedupeIntegration = J3A;
