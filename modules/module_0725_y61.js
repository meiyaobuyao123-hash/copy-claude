// Module: y61
// Params: v_A

Object.defineProperty(v_A, '__esModule', { value: !0 });
v_A.StatsigSession = v_A.SessionID = void 0;
var Jh9 = Al(),
  Ch9 = pG(),
  j_A = tE(),
  y_A = L61(),
  k_A = 1800000,
  x_A = 14400000,
  j61 = {};
v_A.SessionID = {
  get: (A) => {
    return v_A.StatsigSession.get(A).data.sessionID;
  },
};
v_A.StatsigSession = {
  get: (A) => {
    if (j61[A] == null) j61[A] = Xh9(A);
    let B = j61[A];
    return Kh9(B);
  },
  overrideInitialSessionID: (A, B) => {
    j61[B] = Vh9(A, B);
  },
};
function Xh9(A) {
  let B = Eh9(A),
    Q = Date.now();
  if (!B) B = { sessionID: y_A.getUUID(), startTime: Q, lastUpdate: Q };
  return { data: B, sdkKey: A };
}
function Vh9(A, B) {
  let Q = Date.now();
  return { data: { sessionID: A, startTime: Q, lastUpdate: Q }, sdkKey: B };
}
function Kh9(A) {
  let B = Date.now(),
    Q = A.data;
  if (Hh9(Q) || zh9(Q)) ((Q.sessionID = y_A.getUUID()), (Q.startTime = B));
  ((Q.lastUpdate = B),
    wh9(Q, A.sdkKey),
    clearTimeout(A.idleTimeoutID),
    clearTimeout(A.ageTimeoutID));
  let I = B - Q.startTime,
    G = A.sdkKey;
  return ((A.idleTimeoutID = __A(G, k_A)), (A.ageTimeoutID = __A(G, x_A - I)), A);
}
function __A(A, B) {
  return setTimeout(() => {
    let Q = __STATSIG__ === null || __STATSIG__ === void 0 ? void 0 : __STATSIG__.instance(A);
    if (Q) Q.$emt({ name: 'session_expired' });
  }, B);
}
function Hh9({ lastUpdate: A }) {
  return Date.now() - A > k_A;
}
function zh9({ startTime: A }) {
  return Date.now() - A > x_A;
}
function f_A(A) {
  return `statsig.session_id.${Jh9._getStorageKey(A)}`;
}
function wh9(A, B) {
  let Q = f_A(B);
  try {
    j_A._setObjectInStorage(Q, A);
  } catch (I) {
    Ch9.Log.warn('Failed to save SessionID');
  }
}
function Eh9(A) {
  let B = f_A(A);
  return j_A._getObjectFromStorage(B);
}
