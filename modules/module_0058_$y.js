// Module: $y
// Params: W0A

Object.defineProperty(W0A, '__esModule', { value: !0 });
var fu = tA();
function Bk2(A) {
  let B = fu.timestampInSeconds(),
    Q = {
      sid: fu.uuid4(),
      init: !0,
      timestamp: B,
      started: B,
      duration: 0,
      status: 'ok',
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => Ik2(Q),
    };
  if (A) Tw1(Q, A);
  return Q;
}
function Tw1(A, B = {}) {
  if (B.user) {
    if (!A.ipAddress && B.user.ip_address) A.ipAddress = B.user.ip_address;
    if (!A.did && !B.did) A.did = B.user.id || B.user.email || B.user.username;
  }
  if (((A.timestamp = B.timestamp || fu.timestampInSeconds()), B.abnormal_mechanism))
    A.abnormal_mechanism = B.abnormal_mechanism;
  if (B.ignoreDuration) A.ignoreDuration = B.ignoreDuration;
  if (B.sid) A.sid = B.sid.length === 32 ? B.sid : fu.uuid4();
  if (B.init !== void 0) A.init = B.init;
  if (!A.did && B.did) A.did = `${B.did}`;
  if (typeof B.started === 'number') A.started = B.started;
  if (A.ignoreDuration) A.duration = void 0;
  else if (typeof B.duration === 'number') A.duration = B.duration;
  else {
    let Q = A.timestamp - A.started;
    A.duration = Q >= 0 ? Q : 0;
  }
  if (B.release) A.release = B.release;
  if (B.environment) A.environment = B.environment;
  if (!A.ipAddress && B.ipAddress) A.ipAddress = B.ipAddress;
  if (!A.userAgent && B.userAgent) A.userAgent = B.userAgent;
  if (typeof B.errors === 'number') A.errors = B.errors;
  if (B.status) A.status = B.status;
}
function Qk2(A, B) {
  let Q = {};
  if (B) Q = { status: B };
  else if (A.status === 'ok') Q = { status: 'exited' };
  Tw1(A, Q);
}
function Ik2(A) {
  return fu.dropUndefinedKeys({
    sid: `${A.sid}`,
    init: A.init,
    started: new Date(A.started * 1000).toISOString(),
    timestamp: new Date(A.timestamp * 1000).toISOString(),
    status: A.status,
    errors: A.errors,
    did: typeof A.did === 'number' || typeof A.did === 'string' ? `${A.did}` : void 0,
    duration: A.duration,
    abnormal_mechanism: A.abnormal_mechanism,
    attrs: {
      release: A.release,
      environment: A.environment,
      ip_address: A.ipAddress,
      user_agent: A.userAgent,
    },
  });
}
W0A.closeSession = Qk2;
W0A.makeSession = Bk2;
W0A.updateSession = Tw1;
