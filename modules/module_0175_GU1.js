// Module: GU1
// Params: UBA

var { _optionalChain: Yo2 } = tA();
Object.defineProperty(UBA, '__esModule', { value: !0 });
var WJ = I4(),
  CT = tA(),
  Wo2 = G8A(),
  Fo2 = uE1(),
  Jo2 = R01(),
  Co2 = O01(),
  Xo2 = P01(),
  Vo2 = S01(),
  Ko2 = y01(),
  Ho2 = k01(),
  zo2 = v01(),
  wo2 = g01(),
  Eo2 = h01(),
  Uo2 = d01(),
  No2 = IU1(),
  $o2 = lE1(),
  HBA = [
    WJ.inboundFiltersIntegration(),
    WJ.functionToStringIntegration(),
    WJ.linkedErrorsIntegration(),
    WJ.requestDataIntegration(),
    Jo2.consoleIntegration(),
    Vo2.httpIntegration(),
    Uo2.nativeNodeFetchintegration(),
    zo2.onUncaughtExceptionIntegration(),
    wo2.onUnhandledRejectionIntegration(),
    Xo2.contextLinesIntegration(),
    Ko2.localVariablesIntegration(),
    Co2.nodeContextIntegration(),
    Ho2.modulesIntegration(),
  ];
function zBA(A) {
  let B = WJ.getMainCarrier(),
    Q = Yo2([B, 'access', (I) => I.__SENTRY__, 'optionalAccess', (I) => I.integrations]) || [];
  return [...HBA, ...Q];
}
function qo2(A = {}) {
  if ((Wo2.setNodeAsyncContextStrategy(), A.defaultIntegrations === void 0))
    A.defaultIntegrations = zBA();
  if (A.dsn === void 0 && process.env.SENTRY_DSN) A.dsn = process.env.SENTRY_DSN;
  let B = process.env.SENTRY_TRACES_SAMPLE_RATE;
  if (A.tracesSampleRate === void 0 && B) {
    let I = parseFloat(B);
    if (isFinite(I)) A.tracesSampleRate = I;
  }
  if (A.release === void 0) {
    let I = wBA();
    if (I !== void 0) A.release = I;
    else A.autoSessionTracking = !1;
  }
  if (A.environment === void 0 && process.env.SENTRY_ENVIRONMENT)
    A.environment = process.env.SENTRY_ENVIRONMENT;
  if (A.autoSessionTracking === void 0 && A.dsn !== void 0) A.autoSessionTracking = !0;
  if (A.instrumenter === void 0) A.instrumenter = 'sentry';
  let Q = {
    ...A,
    stackParser: CT.stackParserFromStackParserOptions(A.stackParser || EBA),
    integrations: WJ.getIntegrationsToSetup(A),
    transport: A.transport || $o2.makeNodeTransport,
  };
  if ((WJ.initAndBind(A.clientClass || Fo2.NodeClient, Q), A.autoSessionTracking)) Lo2();
  if ((Ro2(), A.spotlight)) {
    let I = WJ.getClient();
    if (I && I.addIntegration) {
      let G = I.getOptions().integrations;
      for (let D of G) I.addIntegration(D);
      I.addIntegration(
        Eo2.spotlightIntegration({
          sidecarUrl: typeof A.spotlight === 'string' ? A.spotlight : void 0,
        })
      );
    }
  }
}
function Mo2(A) {
  if (A === void 0) return !1;
  let B = A && A.getOptions();
  if (B && B.autoSessionTracking !== void 0) return B.autoSessionTracking;
  return !1;
}
function wBA(A) {
  if (process.env.SENTRY_RELEASE) return process.env.SENTRY_RELEASE;
  if (CT.GLOBAL_OBJ.SENTRY_RELEASE && CT.GLOBAL_OBJ.SENTRY_RELEASE.id)
    return CT.GLOBAL_OBJ.SENTRY_RELEASE.id;
  return (
    process.env.GITHUB_SHA ||
    process.env.COMMIT_REF ||
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.VERCEL_GITHUB_COMMIT_SHA ||
    process.env.VERCEL_GITLAB_COMMIT_SHA ||
    process.env.VERCEL_BITBUCKET_COMMIT_SHA ||
    process.env.ZEIT_GITHUB_COMMIT_SHA ||
    process.env.ZEIT_GITLAB_COMMIT_SHA ||
    process.env.ZEIT_BITBUCKET_COMMIT_SHA ||
    process.env.CF_PAGES_COMMIT_SHA ||
    A
  );
}
var EBA = CT.createStackParser(CT.nodeStackLineParser(No2.createGetModuleFromFilename()));
function Lo2() {
  (WJ.startSession(),
    process.on('beforeExit', () => {
      let A = WJ.getIsolationScope().getSession();
      if (A && !['exited', 'crashed'].includes(A.status)) WJ.endSession();
    }));
}
function Ro2() {
  let A = (process.env.SENTRY_USE_ENVIRONMENT || '').toLowerCase();
  if (!['false', 'n', 'no', 'off', '0'].includes(A)) {
    let B = process.env.SENTRY_TRACE,
      Q = process.env.SENTRY_BAGGAGE,
      I = CT.propagationContextFromHeaders(B, Q);
    WJ.getCurrentScope().setPropagationContext(I);
  }
}
UBA.defaultIntegrations = HBA;
UBA.defaultStackParser = EBA;
UBA.getDefaultIntegrations = zBA;
UBA.getSentryRelease = wBA;
UBA.init = qo2;
UBA.isAutoSessionTrackingEnabled = Mo2;
