// Module: N3A
// Params: U3A

Object.defineProperty(U3A, '__esModule', { value: !0 });
var z3A = I4(),
  u$ = tA(),
  Se2 = Xp(),
  w3A = 'ExtraErrorData',
  _e2 = (A = {}) => {
    let B = A.depth || 3,
      Q = A.captureErrorCause || !1;
    return {
      name: w3A,
      setupOnce() {},
      processEvent(I, G) {
        return ye2(I, G, B, Q);
      },
    };
  },
  E3A = z3A.defineIntegration(_e2),
  je2 = z3A.convertIntegrationFnToClass(w3A, E3A);
function ye2(A, B = {}, Q, I) {
  if (!B.originalException || !u$.isError(B.originalException)) return A;
  let G = B.originalException.name || B.originalException.constructor.name,
    D = ke2(B.originalException, I);
  if (D) {
    let Z = { ...A.contexts },
      Y = u$.normalize(D, Q);
    if (u$.isPlainObject(Y))
      (u$.addNonEnumerableProperty(Y, '__sentry_skip_normalization__', !0), (Z[G] = Y));
    return { ...A, contexts: Z };
  }
  return A;
}
function ke2(A, B) {
  try {
    let Q = [
        'name',
        'message',
        'stack',
        'line',
        'column',
        'fileName',
        'lineNumber',
        'columnNumber',
        'toJSON',
      ],
      I = {};
    for (let G of Object.keys(A)) {
      if (Q.indexOf(G) !== -1) continue;
      let D = A[G];
      I[G] = u$.isError(D) ? D.toString() : D;
    }
    if (B && A.cause !== void 0) I.cause = u$.isError(A.cause) ? A.cause.toString() : A.cause;
    if (typeof A.toJSON === 'function') {
      let G = A.toJSON();
      for (let D of Object.keys(G)) {
        let Z = G[D];
        I[D] = u$.isError(Z) ? Z.toString() : Z;
      }
    }
    return I;
  } catch (Q) {
    Se2.DEBUG_BUILD && u$.logger.error('Unable to extract extra data from the Error object:', Q);
  }
  return null;
}
U3A.ExtraErrorData = je2;
U3A.extraErrorDataIntegration = E3A;
