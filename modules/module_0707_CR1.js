// Module: CR1
// Params: Yf

var Df =
  (Yf && Yf.__awaiter) ||
  function (A, B, Q, I) {
    function G(D) {
      return D instanceof Q
        ? D
        : new Q(function (Z) {
            Z(D);
          });
    }
    return new (Q || (Q = Promise))(function (D, Z) {
      function Y(J) {
        try {
          F(I.next(J));
        } catch (C) {
          Z(C);
        }
      }
      function W(J) {
        try {
          F(I.throw(J));
        } catch (C) {
          Z(C);
        }
      }
      function F(J) {
        J.done ? D(J.value) : G(J.value).then(Y, W);
      }
      F((I = I.apply(A, B || [])).next());
    });
  };
Object.defineProperty(Yf, '__esModule', { value: !0 });
Yf.EventLogger = void 0;
var Ng9 = Al(),
  $g9 = If(),
  Il = pG(),
  ySA = Bl(),
  JR1 = nT(),
  qg9 = IR1(),
  Zf = tE(),
  Mg9 = ZR1(),
  kSA = q61(),
  Lg9 = 100,
  Rg9 = 1e4,
  Og9 = 1000,
  Tg9 = 600000,
  Pg9 = 500,
  xSA = 200,
  Gl = {},
  M61 = { Startup: 'startup', GainedFocus: 'gained_focus' };
class aT {
  static _safeFlushAndForget(A) {
    var B;
    (B = Gl[A]) === null || B === void 0 || B.flush().catch(() => {});
  }
  static _safeRetryFailedLogs(A) {
    var B;
    (B = Gl[A]) === null || B === void 0 || B._retryFailedLogs(M61.GainedFocus);
  }
  constructor(A, B, Q, I) {
    var G;
    ((this._sdkKey = A),
      (this._emitter = B),
      (this._network = Q),
      (this._options = I),
      (this._queue = []),
      (this._lastExposureTimeMap = {}),
      (this._nonExposedChecks = {}),
      (this._hasRunQuickFlush = !1),
      (this._creationTime = Date.now()),
      (this._isLoggingDisabled = (I === null || I === void 0 ? void 0 : I.disableLogging) === !0),
      (this._maxQueueSize =
        (G = I === null || I === void 0 ? void 0 : I.loggingBufferMaxSize) !== null && G !== void 0
          ? G
          : Lg9));
    let D = I === null || I === void 0 ? void 0 : I.networkConfig;
    this._logEventUrlConfig = new Mg9.UrlConfiguration(
      ySA.Endpoint._rgstr,
      D === null || D === void 0 ? void 0 : D.logEventUrl,
      D === null || D === void 0 ? void 0 : D.api,
      D === null || D === void 0 ? void 0 : D.logEventFallbackUrls
    );
  }
  setLoggingDisabled(A) {
    this._isLoggingDisabled = A;
  }
  enqueue(A) {
    if (!this._shouldLogEvent(A)) return;
    if (
      (this._normalizeAndAppendEvent(A),
      this._quickFlushIfNeeded(),
      this._queue.length > this._maxQueueSize)
    )
      aT._safeFlushAndForget(this._sdkKey);
  }
  incrementNonExposureCount(A) {
    var B;
    let Q = (B = this._nonExposedChecks[A]) !== null && B !== void 0 ? B : 0;
    this._nonExposedChecks[A] = Q + 1;
  }
  reset() {
    this._lastExposureTimeMap = {};
  }
  start() {
    if (JR1._isServerEnv()) return;
    ((Gl[this._sdkKey] = this),
      kSA._subscribeToVisiblityChanged((A) => {
        if (A === 'background') aT._safeFlushAndForget(this._sdkKey);
        else if (A === 'foreground') aT._safeRetryFailedLogs(this._sdkKey);
      }),
      this._retryFailedLogs(M61.Startup),
      this._startBackgroundFlushInterval());
  }
  stop() {
    return Df(this, void 0, void 0, function* () {
      if (this._flushIntervalId)
        (clearInterval(this._flushIntervalId), (this._flushIntervalId = null));
      (delete Gl[this._sdkKey], yield this.flush());
    });
  }
  flush() {
    return Df(this, void 0, void 0, function* () {
      if ((this._appendAndResetNonExposedChecks(), this._queue.length === 0)) return;
      let A = this._queue;
      ((this._queue = []), yield this._sendEvents(A));
    });
  }
  _quickFlushIfNeeded() {
    if (this._hasRunQuickFlush) return;
    if (((this._hasRunQuickFlush = !0), Date.now() - this._creationTime > xSA)) return;
    setTimeout(() => aT._safeFlushAndForget(this._sdkKey), xSA);
  }
  _shouldLogEvent(A) {
    if (JR1._isServerEnv()) return !1;
    if (!qg9._isExposureEvent(A)) return !0;
    let B = A.user ? A.user : { statsigEnvironment: void 0 },
      Q = Ng9._getUserStorageKey(this._sdkKey, B),
      I = A.metadata ? A.metadata : {},
      G = [
        A.eventName,
        Q,
        I.gate,
        I.config,
        I.ruleID,
        I.allocatedExperiment,
        I.parameterName,
        String(I.isExplicitParameter),
        I.reason,
      ].join('|'),
      D = this._lastExposureTimeMap[G],
      Z = Date.now();
    if (D && Z - D < Tg9) return !1;
    if (Object.keys(this._lastExposureTimeMap).length > Og9) this._lastExposureTimeMap = {};
    return ((this._lastExposureTimeMap[G] = Z), !0);
  }
  _sendEvents(A) {
    var B, Q;
    return Df(this, void 0, void 0, function* () {
      if (this._isLoggingDisabled) return (this._saveFailedLogsToStorage(A), !1);
      try {
        let G =
          kSA._isUnloading() &&
          this._network.isBeaconSupported() &&
          ((Q = (B = this._options) === null || B === void 0 ? void 0 : B.networkConfig) === null ||
          Q === void 0
            ? void 0
            : Q.networkOverrideFunc) == null;
        if (
          (this._emitter({ name: 'pre_logs_flushed', events: A }),
          (G ? yield this._sendEventsViaBeacon(A) : yield this._sendEventsViaPost(A)).success)
        )
          return (this._emitter({ name: 'logs_flushed', events: A }), !0);
        else return (Il.Log.warn('Failed to flush events.'), this._saveFailedLogsToStorage(A), !1);
      } catch (I) {
        return (Il.Log.warn('Failed to flush events.'), !1);
      }
    });
  }
  _sendEventsViaPost(A) {
    var B;
    return Df(this, void 0, void 0, function* () {
      let Q = yield this._network.post(this._getRequestData(A)),
        I = (B = Q === null || Q === void 0 ? void 0 : Q.code) !== null && B !== void 0 ? B : -1;
      return { success: I >= 200 && I < 300 };
    });
  }
  _sendEventsViaBeacon(A) {
    return Df(this, void 0, void 0, function* () {
      return { success: yield this._network.beacon(this._getRequestData(A)) };
    });
  }
  _getRequestData(A) {
    return {
      sdkKey: this._sdkKey,
      data: { events: A },
      urlConfig: this._logEventUrlConfig,
      retries: 3,
      isCompressable: !0,
      params: { [ySA.NetworkParam.EventCount]: String(A.length) },
    };
  }
  _saveFailedLogsToStorage(A) {
    while (A.length > Pg9) A.shift();
    let B = this._getStorageKey();
    try {
      Zf._setObjectInStorage(B, A);
    } catch (Q) {
      Il.Log.warn('Unable to save failed logs to storage');
    }
  }
  _retryFailedLogs(A) {
    let B = this._getStorageKey();
    (() =>
      Df(this, void 0, void 0, function* () {
        if (!Zf.Storage.isReady()) yield Zf.Storage.isReadyResolver();
        let Q = Zf._getObjectFromStorage(B);
        if (!Q) return;
        if (A === M61.Startup) Zf.Storage.removeItem(B);
        if ((yield this._sendEvents(Q)) && A === M61.GainedFocus) Zf.Storage.removeItem(B);
      }))().catch(() => {
      Il.Log.warn('Failed to flush stored logs');
    });
  }
  _getStorageKey() {
    return `statsig.failed_logs.${$g9._DJB2(this._sdkKey)}`;
  }
  _normalizeAndAppendEvent(A) {
    if (A.user) ((A.user = Object.assign({}, A.user)), delete A.user.privateAttributes);
    let B = {},
      Q = this._getCurrentPageUrl();
    if (Q) B.statsigMetadata = { currentPage: Q };
    let I = Object.assign(Object.assign({}, A), B);
    (Il.Log.debug('Enqueued Event:', I), this._queue.push(I));
  }
  _appendAndResetNonExposedChecks() {
    if (Object.keys(this._nonExposedChecks).length === 0) return;
    (this._normalizeAndAppendEvent({
      eventName: 'statsig::non_exposed_checks',
      user: null,
      time: Date.now(),
      metadata: { checks: Object.assign({}, this._nonExposedChecks) },
    }),
      (this._nonExposedChecks = {}));
  }
  _getCurrentPageUrl() {
    var A;
    if (
      ((A = this._options) === null || A === void 0
        ? void 0
        : A.includeCurrentPageUrlWithEvents) === !1
    )
      return;
    return JR1._getCurrentPageUrlSafe();
  }
  _startBackgroundFlushInterval() {
    var A, B;
    let Q =
        (B = (A = this._options) === null || A === void 0 ? void 0 : A.loggingIntervalMs) !==
          null && B !== void 0
          ? B
          : Rg9,
      I = setInterval(() => {
        let G = Gl[this._sdkKey];
        if (!G || G._flushIntervalId !== I) clearInterval(I);
        else aT._safeFlushAndForget(this._sdkKey);
      }, Q);
    this._flushIntervalId = I;
  }
}
Yf.EventLogger = aT;
