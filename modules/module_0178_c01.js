// Module: c01
// Params: OBA,TBA

var { _optionalChain: vo2, _optionalChainDelete: MBA } = tA();
Object.defineProperty(OBA, '__esModule', { value: !0 });
var bo2 = D1('url'),
  _E = I4(),
  p01 = tA(),
  ZU1 = ZT(),
  go2 = qBA(),
  ho2 = 50,
  mo2 = 5000;
function YU1(A, ...B) {
  p01.logger.log(`[ANR] ${A}`, ...B);
}
function do2() {
  return p01.GLOBAL_OBJ;
}
function uo2() {
  let A = _E.getGlobalScope().getScopeData();
  return (
    _E.mergeScopeData(A, _E.getIsolationScope().getScopeData()),
    _E.mergeScopeData(A, _E.getCurrentScope().getScopeData()),
    (A.attachments = []),
    (A.eventProcessors = []),
    A
  );
}
function po2() {
  return p01.dynamicRequire(TBA, 'worker_threads');
}
async function co2(A) {
  let B = { message: 'ANR' },
    Q = {};
  for (let I of A.getEventProcessors()) {
    if (B === null) break;
    B = await I(B, Q);
  }
  return vo2([B, 'optionalAccess', (I) => I.contexts]) || {};
}
var LBA = 'Anr',
  lo2 = (A = {}) => {
    if (
      ZU1.NODE_VERSION.major < 16 ||
      (ZU1.NODE_VERSION.major === 16 && ZU1.NODE_VERSION.minor < 17)
    )
      throw new Error('ANR detection requires Node 16.17.0 or later');
    let B,
      Q,
      I = do2();
    return (
      (I.__SENTRY_GET_SCOPES__ = uo2),
      {
        name: LBA,
        setupOnce() {},
        startWorker: () => {
          if (B) return;
          if (Q) B = no2(Q, A);
        },
        stopWorker: () => {
          if (B)
            B.then((G) => {
              (G(), (B = void 0));
            });
        },
        setup(G) {
          ((Q = G), setImmediate(() => this.startWorker()));
        },
      }
    );
  },
  RBA = _E.defineIntegration(lo2),
  io2 = _E.convertIntegrationFnToClass(LBA, RBA);
async function no2(A, B) {
  let Q = A.getDsn();
  if (!Q) return () => {};
  let I = await co2(A);
  (MBA([I, 'access', (J) => J.app, 'optionalAccess', (J) => delete J.app_memory]),
    MBA([I, 'access', (J) => J.device, 'optionalAccess', (J) => delete J.free_memory]));
  let G = A.getOptions(),
    D = A.getSdkMetadata() || {};
  if (D.sdk) D.sdk.integrations = G.integrations.map((J) => J.name);
  let Z = {
    debug: p01.logger.isEnabled(),
    dsn: Q,
    environment: G.environment || 'production',
    release: G.release,
    dist: G.dist,
    sdkMetadata: D,
    appRootPath: B.appRootPath,
    pollInterval: B.pollInterval || ho2,
    anrThreshold: B.anrThreshold || mo2,
    captureStackTrace: !!B.captureStackTrace,
    staticTags: B.staticTags || {},
    contexts: I,
  };
  if (Z.captureStackTrace) {
    let J = D1('inspector');
    if (!J.url()) J.open(0);
  }
  let { Worker: Y } = po2(),
    W = new Y(new bo2.URL(`data:application/javascript;base64,${go2.base64WorkerScript}`), {
      workerData: Z,
    });
  process.on('exit', () => {
    W.terminate();
  });
  let F = setInterval(() => {
    try {
      let J = _E.getCurrentScope().getSession(),
        C = J ? { ...J, toJSON: void 0 } : void 0;
      W.postMessage({ session: C });
    } catch (J) {}
  }, Z.pollInterval);
  return (
    F.unref(),
    W.on('message', (J) => {
      if (J === 'session-ended')
        (YU1('ANR event sent from ANR worker. Clearing session in this thread.'),
          _E.getCurrentScope().setSession(void 0));
    }),
    W.once('error', (J) => {
      (clearInterval(F), YU1('ANR worker error', J));
    }),
    W.once('exit', (J) => {
      (clearInterval(F), YU1('ANR worker exit', J));
    }),
    W.unref(),
    () => {
      (W.terminate(), clearInterval(F));
    }
  );
}
OBA.Anr = io2;
OBA.anrIntegration = RBA;
