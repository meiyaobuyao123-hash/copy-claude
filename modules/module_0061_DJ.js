// Module: DJ
// Params: $0A

Object.defineProperty($0A, '__esModule', { value: !0 });
var NE = tA(),
  xk2 = Ny(),
  RA1 = vQ(),
  BQ = oK(),
  jw1 = $y(),
  fk2 = qA1();
function vk2(A, B) {
  return BQ.getCurrentHub().captureException(A, fk2.parseEventHintOrCaptureContext(B));
}
function bk2(A, B) {
  let Q = typeof B === 'string' ? B : void 0,
    I = typeof B !== 'string' ? { captureContext: B } : void 0;
  return BQ.getCurrentHub().captureMessage(A, Q, I);
}
function gk2(A, B) {
  return BQ.getCurrentHub().captureEvent(A, B);
}
function hk2(A) {
  BQ.getCurrentHub().configureScope(A);
}
function mk2(A, B) {
  BQ.getCurrentHub().addBreadcrumb(A, B);
}
function dk2(A, B) {
  BQ.getCurrentHub().setContext(A, B);
}
function uk2(A) {
  BQ.getCurrentHub().setExtras(A);
}
function pk2(A, B) {
  BQ.getCurrentHub().setExtra(A, B);
}
function ck2(A) {
  BQ.getCurrentHub().setTags(A);
}
function lk2(A, B) {
  BQ.getCurrentHub().setTag(A, B);
}
function ik2(A) {
  BQ.getCurrentHub().setUser(A);
}
function U0A(...A) {
  let B = BQ.getCurrentHub();
  if (A.length === 2) {
    let [Q, I] = A;
    if (!Q) return B.withScope(I);
    return B.withScope(() => {
      return ((B.getStackTop().scope = Q), I(Q));
    });
  }
  return B.withScope(A[0]);
}
function nk2(A) {
  return BQ.runWithAsyncContext(() => {
    return A(BQ.getIsolationScope());
  });
}
function ak2(A, B) {
  return U0A((Q) => {
    return (Q.setSpan(A), B(Q));
  });
}
function sk2(A, B) {
  return BQ.getCurrentHub().startTransaction({ ...A }, B);
}
function yw1(A, B) {
  let Q = vu(),
    I = aO();
  if (!I) RA1.DEBUG_BUILD && NE.logger.warn('Cannot capture check-in. No client defined.');
  else if (!I.captureCheckIn)
    RA1.DEBUG_BUILD &&
      NE.logger.warn('Cannot capture check-in. Client does not support sending check-ins.');
  else return I.captureCheckIn(A, B, Q);
  return NE.uuid4();
}
function rk2(A, B, Q) {
  let I = yw1({ monitorSlug: A, status: 'in_progress' }, Q),
    G = NE.timestampInSeconds();
  function D(Y) {
    yw1({ monitorSlug: A, status: Y, checkInId: I, duration: NE.timestampInSeconds() - G });
  }
  let Z;
  try {
    Z = B();
  } catch (Y) {
    throw (D('error'), Y);
  }
  if (NE.isThenable(Z))
    Promise.resolve(Z).then(
      () => {
        D('ok');
      },
      () => {
        D('error');
      }
    );
  else D('ok');
  return Z;
}
async function ok2(A) {
  let B = aO();
  if (B) return B.flush(A);
  return (
    RA1.DEBUG_BUILD && NE.logger.warn('Cannot flush events. No client defined.'),
    Promise.resolve(!1)
  );
}
async function tk2(A) {
  let B = aO();
  if (B) return B.close(A);
  return (
    RA1.DEBUG_BUILD && NE.logger.warn('Cannot flush events and disable SDK. No client defined.'),
    Promise.resolve(!1)
  );
}
function ek2() {
  return BQ.getCurrentHub().lastEventId();
}
function aO() {
  return BQ.getCurrentHub().getClient();
}
function Ax2() {
  return !!aO();
}
function vu() {
  return BQ.getCurrentHub().getScope();
}
function Bx2(A) {
  let B = aO(),
    Q = BQ.getIsolationScope(),
    I = vu(),
    { release: G, environment: D = xk2.DEFAULT_ENVIRONMENT } = (B && B.getOptions()) || {},
    { userAgent: Z } = NE.GLOBAL_OBJ.navigator || {},
    Y = jw1.makeSession({
      release: G,
      environment: D,
      user: I.getUser() || Q.getUser(),
      ...(Z && { userAgent: Z }),
      ...A,
    }),
    W = Q.getSession();
  if (W && W.status === 'ok') jw1.updateSession(W, { status: 'exited' });
  return (kw1(), Q.setSession(Y), I.setSession(Y), Y);
}
function kw1() {
  let A = BQ.getIsolationScope(),
    B = vu(),
    Q = B.getSession() || A.getSession();
  if (Q) jw1.closeSession(Q);
  (N0A(), A.setSession(), B.setSession());
}
function N0A() {
  let A = BQ.getIsolationScope(),
    B = vu(),
    Q = aO(),
    I = B.getSession() || A.getSession();
  if (I && Q && Q.captureSession) Q.captureSession(I);
}
function Qx2(A = !1) {
  if (A) {
    kw1();
    return;
  }
  N0A();
}
$0A.addBreadcrumb = mk2;
$0A.captureCheckIn = yw1;
$0A.captureEvent = gk2;
$0A.captureException = vk2;
$0A.captureMessage = bk2;
$0A.captureSession = Qx2;
$0A.close = tk2;
$0A.configureScope = hk2;
$0A.endSession = kw1;
$0A.flush = ok2;
$0A.getClient = aO;
$0A.getCurrentScope = vu;
$0A.isInitialized = Ax2;
$0A.lastEventId = ek2;
$0A.setContext = dk2;
$0A.setExtra = pk2;
$0A.setExtras = uk2;
$0A.setTag = lk2;
$0A.setTags = ck2;
$0A.setUser = ik2;
$0A.startSession = Bx2;
$0A.startTransaction = sk2;
$0A.withActiveSpan = ak2;
$0A.withIsolationScope = nk2;
$0A.withMonitor = rk2;
$0A.withScope = U0A;
