// Module: C61
// Params: YSA

Object.defineProperty(YSA, '__esModule', { value: !0 });
YSA.Diagnostics = void 0;
var J61 = new Map(),
  tL1 = 'start',
  eL1 = 'end',
  Sb9 = 'statsig::diagnostics';
YSA.Diagnostics = {
  _getMarkers: (A) => {
    return J61.get(A);
  },
  _markInitOverallStart: (A) => {
    Qf(A, Bf({}, tL1, 'overall'));
  },
  _markInitOverallEnd: (A, B, Q) => {
    Qf(
      A,
      Bf(
        {
          success: B,
          error: B ? void 0 : { name: 'InitializeError', message: 'Failed to initialize' },
          evaluationDetails: Q,
        },
        eL1,
        'overall'
      )
    );
  },
  _markInitNetworkReqStart: (A, B) => {
    Qf(A, Bf(B, tL1, 'initialize', 'network_request'));
  },
  _markInitNetworkReqEnd: (A, B) => {
    Qf(A, Bf(B, eL1, 'initialize', 'network_request'));
  },
  _markInitProcessStart: (A) => {
    Qf(A, Bf({}, tL1, 'initialize', 'process'));
  },
  _markInitProcessEnd: (A, B) => {
    Qf(A, Bf(B, eL1, 'initialize', 'process'));
  },
  _clearMarkers: (A) => {
    J61.delete(A);
  },
  _formatError(A) {
    if (!(A && typeof A === 'object')) return;
    return { code: AR1(A, 'code'), name: AR1(A, 'name'), message: AR1(A, 'message') };
  },
  _getDiagnosticsData(A, B, Q, I) {
    var G;
    return {
      success: (A === null || A === void 0 ? void 0 : A.ok) === !0,
      statusCode: A === null || A === void 0 ? void 0 : A.status,
      sdkRegion:
        (G = A === null || A === void 0 ? void 0 : A.headers) === null || G === void 0
          ? void 0
          : G.get('x-statsig-region'),
      isDelta: Q.includes('"is_delta":true') === !0 ? !0 : void 0,
      attempt: B,
      error: YSA.Diagnostics._formatError(I),
    };
  },
  _enqueueDiagnosticsEvent(A, B, Q, I) {
    let G = YSA.Diagnostics._getMarkers(Q);
    if (G == null || G.length <= 0) return -1;
    let D = G[G.length - 1].timestamp - G[0].timestamp;
    YSA.Diagnostics._clearMarkers(Q);
    let Z = _b9(A, { context: 'initialize', markers: G.slice(), statsigOptions: I });
    return (B.enqueue(Z), D);
  },
};
function Bf(A, B, Q, I) {
  return Object.assign({ key: Q, action: B, step: I, timestamp: Date.now() }, A);
}
function _b9(A, B) {
  return { eventName: Sb9, user: A, value: null, metadata: B, time: Date.now() };
}
function Qf(A, B) {
  var Q;
  let I = (Q = J61.get(A)) !== null && Q !== void 0 ? Q : [];
  (I.push(B), J61.set(A, I));
}
function AR1(A, B) {
  if (B in A) return A[B];
  return;
}
