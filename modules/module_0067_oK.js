// Module: oK
// Params: v0A

Object.defineProperty(v0A, '__esModule', { value: !0 });
var iD = tA(),
  Df2 = Ny(),
  fw1 = vQ(),
  y0A = LA1(),
  vw1 = $y(),
  Zf2 = TA1(),
  PA1 = parseFloat(Zf2.SDK_VERSION),
  Yf2 = 100;
class hu {
  constructor(A, B, Q, I = PA1) {
    this._version = I;
    let G;
    if (!B) ((G = new y0A.Scope()), G.setClient(A));
    else G = B;
    let D;
    if (!Q) ((D = new y0A.Scope()), D.setClient(A));
    else D = Q;
    if (((this._stack = [{ scope: G }]), A)) this.bindClient(A);
    this._isolationScope = D;
  }
  isOlderThan(A) {
    return this._version < A;
  }
  bindClient(A) {
    let B = this.getStackTop();
    if (((B.client = A), B.scope.setClient(A), A && A.setupIntegrations)) A.setupIntegrations();
  }
  pushScope() {
    let A = this.getScope().clone();
    return (this.getStack().push({ client: this.getClient(), scope: A }), A);
  }
  popScope() {
    if (this.getStack().length <= 1) return !1;
    return !!this.getStack().pop();
  }
  withScope(A) {
    let B = this.pushScope(),
      Q;
    try {
      Q = A(B);
    } catch (I) {
      throw (this.popScope(), I);
    }
    if (iD.isThenable(Q))
      return Q.then(
        (I) => {
          return (this.popScope(), I);
        },
        (I) => {
          throw (this.popScope(), I);
        }
      );
    return (this.popScope(), Q);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStack() {
    return this._stack;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  captureException(A, B) {
    let Q = (this._lastEventId = B && B.event_id ? B.event_id : iD.uuid4()),
      I = new Error('Sentry syntheticException');
    return (
      this.getScope().captureException(A, {
        originalException: A,
        syntheticException: I,
        ...B,
        event_id: Q,
      }),
      Q
    );
  }
  captureMessage(A, B, Q) {
    let I = (this._lastEventId = Q && Q.event_id ? Q.event_id : iD.uuid4()),
      G = new Error(A);
    return (
      this.getScope().captureMessage(A, B, {
        originalException: A,
        syntheticException: G,
        ...Q,
        event_id: I,
      }),
      I
    );
  }
  captureEvent(A, B) {
    let Q = B && B.event_id ? B.event_id : iD.uuid4();
    if (!A.type) this._lastEventId = Q;
    return (this.getScope().captureEvent(A, { ...B, event_id: Q }), Q);
  }
  lastEventId() {
    return this._lastEventId;
  }
  addBreadcrumb(A, B) {
    let { scope: Q, client: I } = this.getStackTop();
    if (!I) return;
    let { beforeBreadcrumb: G = null, maxBreadcrumbs: D = Yf2 } =
      (I.getOptions && I.getOptions()) || {};
    if (D <= 0) return;
    let Y = { timestamp: iD.dateTimestampInSeconds(), ...A },
      W = G ? iD.consoleSandbox(() => G(Y, B)) : Y;
    if (W === null) return;
    if (I.emit) I.emit('beforeAddBreadcrumb', W, B);
    Q.addBreadcrumb(W, D);
  }
  setUser(A) {
    (this.getScope().setUser(A), this.getIsolationScope().setUser(A));
  }
  setTags(A) {
    (this.getScope().setTags(A), this.getIsolationScope().setTags(A));
  }
  setExtras(A) {
    (this.getScope().setExtras(A), this.getIsolationScope().setExtras(A));
  }
  setTag(A, B) {
    (this.getScope().setTag(A, B), this.getIsolationScope().setTag(A, B));
  }
  setExtra(A, B) {
    (this.getScope().setExtra(A, B), this.getIsolationScope().setExtra(A, B));
  }
  setContext(A, B) {
    (this.getScope().setContext(A, B), this.getIsolationScope().setContext(A, B));
  }
  configureScope(A) {
    let { scope: B, client: Q } = this.getStackTop();
    if (Q) A(B);
  }
  run(A) {
    let B = bw1(this);
    try {
      A(this);
    } finally {
      bw1(B);
    }
  }
  getIntegration(A) {
    let B = this.getClient();
    if (!B) return null;
    try {
      return B.getIntegration(A);
    } catch (Q) {
      return (
        fw1.DEBUG_BUILD &&
          iD.logger.warn(`Cannot retrieve integration ${A.id} from the current Hub`),
        null
      );
    }
  }
  startTransaction(A, B) {
    let Q = this._callExtensionMethod('startTransaction', A, B);
    if (fw1.DEBUG_BUILD && !Q)
      if (!this.getClient())
        iD.logger.warn(
          "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
        );
      else
        iD.logger
          .warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`);
    return Q;
  }
  traceHeaders() {
    return this._callExtensionMethod('traceHeaders');
  }
  captureSession(A = !1) {
    if (A) return this.endSession();
    this._sendSessionUpdate();
  }
  endSession() {
    let B = this.getStackTop().scope,
      Q = B.getSession();
    if (Q) vw1.closeSession(Q);
    (this._sendSessionUpdate(), B.setSession());
  }
  startSession(A) {
    let { scope: B, client: Q } = this.getStackTop(),
      { release: I, environment: G = Df2.DEFAULT_ENVIRONMENT } = (Q && Q.getOptions()) || {},
      { userAgent: D } = iD.GLOBAL_OBJ.navigator || {},
      Z = vw1.makeSession({
        release: I,
        environment: G,
        user: B.getUser(),
        ...(D && { userAgent: D }),
        ...A,
      }),
      Y = B.getSession && B.getSession();
    if (Y && Y.status === 'ok') vw1.updateSession(Y, { status: 'exited' });
    return (this.endSession(), B.setSession(Z), Z);
  }
  shouldSendDefaultPii() {
    let A = this.getClient(),
      B = A && A.getOptions();
    return Boolean(B && B.sendDefaultPii);
  }
  _sendSessionUpdate() {
    let { scope: A, client: B } = this.getStackTop(),
      Q = A.getSession();
    if (Q && B && B.captureSession) B.captureSession(Q);
  }
  _callExtensionMethod(A, ...B) {
    let I = rO().__SENTRY__;
    if (I && I.extensions && typeof I.extensions[A] === 'function')
      return I.extensions[A].apply(this, B);
    fw1.DEBUG_BUILD && iD.logger.warn(`Extension method ${A} couldn't be found, doing nothing.`);
  }
}
function rO() {
  return (
    (iD.GLOBAL_OBJ.__SENTRY__ = iD.GLOBAL_OBJ.__SENTRY__ || { extensions: {}, hub: void 0 }),
    iD.GLOBAL_OBJ
  );
}
function bw1(A) {
  let B = rO(),
    Q = gu(B);
  return (SA1(B, A), Q);
}
function k0A() {
  let A = rO();
  if (A.__SENTRY__ && A.__SENTRY__.acs) {
    let B = A.__SENTRY__.acs.getCurrentHub();
    if (B) return B;
  }
  return x0A(A);
}
function Wf2() {
  return k0A().getIsolationScope();
}
function x0A(A = rO()) {
  if (!f0A(A) || gu(A).isOlderThan(PA1)) SA1(A, new hu());
  return gu(A);
}
function Ff2(A, B = x0A()) {
  if (!f0A(A) || gu(A).isOlderThan(PA1)) {
    let Q = B.getClient(),
      I = B.getScope(),
      G = B.getIsolationScope();
    SA1(A, new hu(Q, I.clone(), G.clone()));
  }
}
function Jf2(A) {
  let B = rO();
  ((B.__SENTRY__ = B.__SENTRY__ || {}), (B.__SENTRY__.acs = A));
}
function Cf2(A, B = {}) {
  let Q = rO();
  if (Q.__SENTRY__ && Q.__SENTRY__.acs) return Q.__SENTRY__.acs.runWithAsyncContext(A, B);
  return A();
}
function f0A(A) {
  return !!(A && A.__SENTRY__ && A.__SENTRY__.hub);
}
function gu(A) {
  return iD.getGlobalSingleton('hub', () => new hu(), A);
}
function SA1(A, B) {
  if (!A) return !1;
  let Q = (A.__SENTRY__ = A.__SENTRY__ || {});
  return ((Q.hub = B), !0);
}
v0A.API_VERSION = PA1;
v0A.Hub = hu;
v0A.ensureHubOnCarrier = Ff2;
v0A.getCurrentHub = k0A;
v0A.getHubFromCarrier = gu;
v0A.getIsolationScope = Wf2;
v0A.getMainCarrier = rO;
v0A.makeMain = bw1;
v0A.runWithAsyncContext = Cf2;
v0A.setAsyncContextStrategy = Jf2;
v0A.setHubOnCarrier = SA1;
