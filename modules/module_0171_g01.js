// Module: g01
// Params: DBA

Object.defineProperty(DBA, '__esModule', { value: !0 });
var b01 = I4(),
  BBA = tA(),
  xr2 = QU1(),
  QBA = 'OnUnhandledRejection',
  fr2 = (A = {}) => {
    let B = A.mode || 'warn';
    return {
      name: QBA,
      setupOnce() {},
      setup(Q) {
        global.process.on('unhandledRejection', GBA(Q, { mode: B }));
      },
    };
  },
  IBA = b01.defineIntegration(fr2),
  vr2 = b01.convertIntegrationFnToClass(QBA, IBA);
function GBA(A, B) {
  return function Q(I, G) {
    if (b01.getClient() !== A) return;
    (b01.captureException(I, {
      originalException: G,
      captureContext: { extra: { unhandledPromiseRejection: !0 } },
      mechanism: { handled: !1, type: 'onunhandledrejection' },
    }),
      br2(I, B));
  };
}
function br2(A, B) {
  let Q =
    'This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:';
  if (B.mode === 'warn')
    BBA.consoleSandbox(() => {
      (console.warn(Q), console.error(A && A.stack ? A.stack : A));
    });
  else if (B.mode === 'strict')
    (BBA.consoleSandbox(() => {
      console.warn(Q);
    }),
      xr2.logAndExitProcess(A));
}
DBA.OnUnhandledRejection = vr2;
DBA.makeUnhandledPromiseHandler = GBA;
DBA.onUnhandledRejectionIntegration = IBA;
