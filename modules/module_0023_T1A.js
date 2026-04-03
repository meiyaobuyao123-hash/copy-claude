// Module: T1A
// Params: O1A

Object.defineProperty(O1A, '__esModule', { value: !0 });
var uR2 = aK(),
  pR2 = CX(),
  N1A = kz1(),
  $1A = gz1(),
  q1A = pz1(),
  M1A = iz1(),
  L1A = sz1(),
  R1A = oz1(),
  ez1 = tz1();
function cR2(A, B) {
  switch (A) {
    case 'console':
      return N1A.addConsoleInstrumentationHandler(B);
    case 'dom':
      return $1A.addClickKeypressInstrumentationHandler(B);
    case 'xhr':
      return ez1.addXhrInstrumentationHandler(B);
    case 'fetch':
      return q1A.addFetchInstrumentationHandler(B);
    case 'history':
      return R1A.addHistoryInstrumentationHandler(B);
    case 'error':
      return M1A.addGlobalErrorInstrumentationHandler(B);
    case 'unhandledrejection':
      return L1A.addGlobalUnhandledRejectionInstrumentationHandler(B);
    default:
      uR2.DEBUG_BUILD && pR2.logger.warn('unknown instrumentation type:', A);
  }
}
O1A.addConsoleInstrumentationHandler = N1A.addConsoleInstrumentationHandler;
O1A.addClickKeypressInstrumentationHandler = $1A.addClickKeypressInstrumentationHandler;
O1A.addFetchInstrumentationHandler = q1A.addFetchInstrumentationHandler;
O1A.addGlobalErrorInstrumentationHandler = M1A.addGlobalErrorInstrumentationHandler;
O1A.addGlobalUnhandledRejectionInstrumentationHandler =
  L1A.addGlobalUnhandledRejectionInstrumentationHandler;
O1A.addHistoryInstrumentationHandler = R1A.addHistoryInstrumentationHandler;
O1A.SENTRY_XHR_DATA_KEY = ez1.SENTRY_XHR_DATA_KEY;
O1A.addXhrInstrumentationHandler = ez1.addXhrInstrumentationHandler;
O1A.addInstrumentationHandler = cR2;
