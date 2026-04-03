// Module: LA1
// Params: _0A

Object.defineProperty(_0A, '__esModule', { value: !0 });
var tK = tA(),
  P0A = xu(),
  sx2 = $y(),
  rx2 = MA1(),
  ox2 = 100,
  OA1;
class Ly {
  constructor() {
    ((this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = S0A()));
  }
  static clone(A) {
    return A ? A.clone() : new Ly();
  }
  clone() {
    let A = new Ly();
    return (
      (A._breadcrumbs = [...this._breadcrumbs]),
      (A._tags = { ...this._tags }),
      (A._extra = { ...this._extra }),
      (A._contexts = { ...this._contexts }),
      (A._user = this._user),
      (A._level = this._level),
      (A._span = this._span),
      (A._session = this._session),
      (A._transactionName = this._transactionName),
      (A._fingerprint = this._fingerprint),
      (A._eventProcessors = [...this._eventProcessors]),
      (A._requestSession = this._requestSession),
      (A._attachments = [...this._attachments]),
      (A._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
      (A._propagationContext = { ...this._propagationContext }),
      (A._client = this._client),
      A
    );
  }
  setClient(A) {
    this._client = A;
  }
  getClient() {
    return this._client;
  }
  addScopeListener(A) {
    this._scopeListeners.push(A);
  }
  addEventProcessor(A) {
    return (this._eventProcessors.push(A), this);
  }
  setUser(A) {
    if (
      ((this._user = A || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        segment: void 0,
        username: void 0,
      }),
      this._session)
    )
      sx2.updateSession(this._session, { user: A });
    return (this._notifyScopeListeners(), this);
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(A) {
    return ((this._requestSession = A), this);
  }
  setTags(A) {
    return ((this._tags = { ...this._tags, ...A }), this._notifyScopeListeners(), this);
  }
  setTag(A, B) {
    return ((this._tags = { ...this._tags, [A]: B }), this._notifyScopeListeners(), this);
  }
  setExtras(A) {
    return ((this._extra = { ...this._extra, ...A }), this._notifyScopeListeners(), this);
  }
  setExtra(A, B) {
    return ((this._extra = { ...this._extra, [A]: B }), this._notifyScopeListeners(), this);
  }
  setFingerprint(A) {
    return ((this._fingerprint = A), this._notifyScopeListeners(), this);
  }
  setLevel(A) {
    return ((this._level = A), this._notifyScopeListeners(), this);
  }
  setTransactionName(A) {
    return ((this._transactionName = A), this._notifyScopeListeners(), this);
  }
  setContext(A, B) {
    if (B === null) delete this._contexts[A];
    else this._contexts[A] = B;
    return (this._notifyScopeListeners(), this);
  }
  setSpan(A) {
    return ((this._span = A), this._notifyScopeListeners(), this);
  }
  getSpan() {
    return this._span;
  }
  getTransaction() {
    let A = this._span;
    return A && A.transaction;
  }
  setSession(A) {
    if (!A) delete this._session;
    else this._session = A;
    return (this._notifyScopeListeners(), this);
  }
  getSession() {
    return this._session;
  }
  update(A) {
    if (!A) return this;
    let B = typeof A === 'function' ? A(this) : A;
    if (B instanceof Ly) {
      let Q = B.getScopeData();
      if (
        ((this._tags = { ...this._tags, ...Q.tags }),
        (this._extra = { ...this._extra, ...Q.extra }),
        (this._contexts = { ...this._contexts, ...Q.contexts }),
        Q.user && Object.keys(Q.user).length)
      )
        this._user = Q.user;
      if (Q.level) this._level = Q.level;
      if (Q.fingerprint.length) this._fingerprint = Q.fingerprint;
      if (B.getRequestSession()) this._requestSession = B.getRequestSession();
      if (Q.propagationContext) this._propagationContext = Q.propagationContext;
    } else if (tK.isPlainObject(B)) {
      let Q = A;
      if (
        ((this._tags = { ...this._tags, ...Q.tags }),
        (this._extra = { ...this._extra, ...Q.extra }),
        (this._contexts = { ...this._contexts, ...Q.contexts }),
        Q.user)
      )
        this._user = Q.user;
      if (Q.level) this._level = Q.level;
      if (Q.fingerprint) this._fingerprint = Q.fingerprint;
      if (Q.requestSession) this._requestSession = Q.requestSession;
      if (Q.propagationContext) this._propagationContext = Q.propagationContext;
    }
    return this;
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._requestSession = void 0),
      (this._span = void 0),
      (this._session = void 0),
      this._notifyScopeListeners(),
      (this._attachments = []),
      (this._propagationContext = S0A()),
      this
    );
  }
  addBreadcrumb(A, B) {
    let Q = typeof B === 'number' ? B : ox2;
    if (Q <= 0) return this;
    let I = { timestamp: tK.dateTimestampInSeconds(), ...A },
      G = this._breadcrumbs;
    return (
      G.push(I),
      (this._breadcrumbs = G.length > Q ? G.slice(-Q) : G),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
  }
  addAttachment(A) {
    return (this._attachments.push(A), this);
  }
  getAttachments() {
    return this.getScopeData().attachments;
  }
  clearAttachments() {
    return ((this._attachments = []), this);
  }
  getScopeData() {
    let {
      _breadcrumbs: A,
      _attachments: B,
      _contexts: Q,
      _tags: I,
      _extra: G,
      _user: D,
      _level: Z,
      _fingerprint: Y,
      _eventProcessors: W,
      _propagationContext: F,
      _sdkProcessingMetadata: J,
      _transactionName: C,
      _span: X,
    } = this;
    return {
      breadcrumbs: A,
      attachments: B,
      contexts: Q,
      tags: I,
      extra: G,
      user: D,
      level: Z,
      fingerprint: Y || [],
      eventProcessors: W,
      propagationContext: F,
      sdkProcessingMetadata: J,
      transactionName: C,
      span: X,
    };
  }
  applyToEvent(A, B = {}, Q = []) {
    rx2.applyScopeDataToEvent(A, this.getScopeData());
    let I = [...Q, ...P0A.getGlobalEventProcessors(), ...this._eventProcessors];
    return P0A.notifyEventProcessors(I, A, B);
  }
  setSDKProcessingMetadata(A) {
    return ((this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...A }), this);
  }
  setPropagationContext(A) {
    return ((this._propagationContext = A), this);
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(A, B) {
    let Q = B && B.event_id ? B.event_id : tK.uuid4();
    if (!this._client)
      return (tK.logger.warn('No client configured on scope - will not capture exception!'), Q);
    let I = new Error('Sentry syntheticException');
    return (
      this._client.captureException(
        A,
        { originalException: A, syntheticException: I, ...B, event_id: Q },
        this
      ),
      Q
    );
  }
  captureMessage(A, B, Q) {
    let I = Q && Q.event_id ? Q.event_id : tK.uuid4();
    if (!this._client)
      return (tK.logger.warn('No client configured on scope - will not capture message!'), I);
    let G = new Error(A);
    return (
      this._client.captureMessage(
        A,
        B,
        { originalException: A, syntheticException: G, ...Q, event_id: I },
        this
      ),
      I
    );
  }
  captureEvent(A, B) {
    let Q = B && B.event_id ? B.event_id : tK.uuid4();
    if (!this._client)
      return (tK.logger.warn('No client configured on scope - will not capture event!'), Q);
    return (this._client.captureEvent(A, { ...B, event_id: Q }, this), Q);
  }
  _notifyScopeListeners() {
    if (!this._notifyingListeners)
      ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((A) => {
          A(this);
        }),
        (this._notifyingListeners = !1));
  }
}
function tx2() {
  if (!OA1) OA1 = new Ly();
  return OA1;
}
function ex2(A) {
  OA1 = A;
}
function S0A() {
  return { traceId: tK.uuid4(), spanId: tK.uuid4().substring(16) };
}
_0A.Scope = Ly;
_0A.getGlobalScope = tx2;
_0A.setGlobalScope = ex2;
