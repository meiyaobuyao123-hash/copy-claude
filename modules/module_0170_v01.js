// Module: v01
// Params: ABA

Object.defineProperty(ABA, '__esModule', { value: !0 });
var f01 = I4(),
  Tr2 = tA(),
  Pr2 = Jp(),
  r8A = QU1(),
  o8A = 'OnUncaughtException',
  Sr2 = (A = {}) => {
    let B = { exitEvenIfOtherHandlersAreRegistered: !0, ...A };
    return {
      name: o8A,
      setupOnce() {},
      setup(Q) {
        global.process.on('uncaughtException', e8A(Q, B));
      },
    };
  },
  t8A = f01.defineIntegration(Sr2),
  _r2 = f01.convertIntegrationFnToClass(o8A, t8A);
function e8A(A, B) {
  let I = !1,
    G = !1,
    D = !1,
    Z,
    Y = A.getOptions();
  return Object.assign(
    (W) => {
      let F = r8A.logAndExitProcess;
      if (B.onFatalError) F = B.onFatalError;
      else if (Y.onFatalError) F = Y.onFatalError;
      let C =
          global.process.listeners('uncaughtException').reduce((V, K) => {
            if (
              K.name === 'domainUncaughtExceptionClear' ||
              (K.tag && K.tag === 'sentry_tracingErrorCallback') ||
              K._errorHandler
            )
              return V;
            else return V + 1;
          }, 0) === 0,
        X = B.exitEvenIfOtherHandlersAreRegistered || C;
      if (!I) {
        if (((Z = W), (I = !0), f01.getClient() === A))
          f01.captureException(W, {
            originalException: W,
            captureContext: { level: 'fatal' },
            mechanism: { handled: !1, type: 'onuncaughtexception' },
          });
        if (!D && X) ((D = !0), F(W));
      } else if (X) {
        if (D)
          (Pr2.DEBUG_BUILD &&
            Tr2.logger.warn(
              'uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown'
            ),
            r8A.logAndExitProcess(W));
        else if (!G)
          ((G = !0),
            setTimeout(() => {
              if (!D) ((D = !0), F(Z, W));
            }, 2000));
      }
    },
    { _errorHandler: !0 }
  );
}
ABA.OnUncaughtException = _r2;
ABA.makeErrorHandler = e8A;
ABA.onUncaughtExceptionIntegration = t8A;
