// Module: gAA
// Params: bAA

Object.defineProperty(bAA, '__esModule', { value: !0 });
var Hw1 = QJ(),
  fAA = Mu(),
  dP2 = Tu(),
  uP2 = IJ();
function zw1(A, B) {
  return A(B.stack || '', 1);
}
function vAA(A, B) {
  let Q = { type: B.name || B.constructor.name, value: B.message },
    I = zw1(A, B);
  if (I.length) Q.stacktrace = { frames: I };
  return Q;
}
function pP2(A) {
  if ('name' in A && typeof A.name === 'string') {
    let B = `'${A.name}' captured as exception`;
    if ('message' in A && typeof A.message === 'string') B += ` with message '${A.message}'`;
    return B;
  } else if ('message' in A && typeof A.message === 'string') return A.message;
  else return `Object captured as exception with keys: ${uP2.extractExceptionKeysForMessage(A)}`;
}
function cP2(A, B, Q, I) {
  let G = typeof A === 'function' ? A().getClient() : A,
    D = Q,
    Y = (I && I.data && I.data.mechanism) || { handled: !0, type: 'generic' },
    W;
  if (!Hw1.isError(Q)) {
    if (Hw1.isPlainObject(Q)) {
      let J = G && G.getOptions().normalizeDepth;
      W = { ['__serialized__']: dP2.normalizeToSize(Q, J) };
      let C = pP2(Q);
      ((D = (I && I.syntheticException) || new Error(C)), (D.message = C));
    } else ((D = (I && I.syntheticException) || new Error(Q)), (D.message = Q));
    Y.synthetic = !0;
  }
  let F = { exception: { values: [vAA(B, D)] } };
  if (W) F.extra = W;
  return (
    fAA.addExceptionTypeValue(F, void 0, void 0),
    fAA.addExceptionMechanism(F, Y),
    { ...F, event_id: I && I.event_id }
  );
}
function lP2(A, B, Q = 'info', I, G) {
  let D = { event_id: I && I.event_id, level: Q };
  if (G && I && I.syntheticException) {
    let Z = zw1(A, I.syntheticException);
    if (Z.length) D.exception = { values: [{ value: B, stacktrace: { frames: Z } }] };
  }
  if (Hw1.isParameterizedString(B)) {
    let { __sentry_template_string__: Z, __sentry_template_values__: Y } = B;
    return ((D.logentry = { message: Z, params: Y }), D);
  }
  return ((D.message = B), D);
}
bAA.eventFromMessage = lP2;
bAA.eventFromUnknownInput = cP2;
bAA.exceptionFromError = vAA;
bAA.parseStackFrames = zw1;
