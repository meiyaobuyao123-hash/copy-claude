// Module: kjA
// Params: Yl

var SR1 =
  (Yl && Yl.__awaiter) ||
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
Object.defineProperty(Yl, '__esModule', { value: !0 });
var B6 = cq(),
  Rm9 = UjA(),
  Om9 = TR1(),
  yjA = SjA(),
  Tm9 = jjA();
class g61 extends B6.StatsigClientBase {
  static instance(A) {
    let B = B6._getStatsigGlobal().instance(A);
    if (B instanceof g61) return B;
    return (
      B6.Log.warn(
        B6._isServerEnv()
          ? 'StatsigClient.instance is not supported in server environments'
          : 'Unable to find StatsigClient instance'
      ),
      new g61(A !== null && A !== void 0 ? A : '', {})
    );
  }
  constructor(A, B, Q = null) {
    var I, G;
    B6.SDKType._setClientType(A, 'javascript-client');
    let D = new Om9.default(Q, (Y) => {
      this.$emt(Y);
    });
    super(
      A,
      (I = Q === null || Q === void 0 ? void 0 : Q.dataAdapter) !== null && I !== void 0
        ? I
        : new Tm9.StatsigEvaluationsDataAdapter(),
      D,
      Q
    );
    ((this.getFeatureGate = this._memoize(
      B6.MemoPrefix._gate,
      this._getFeatureGateImpl.bind(this)
    )),
      (this.getDynamicConfig = this._memoize(
        B6.MemoPrefix._dynamicConfig,
        this._getDynamicConfigImpl.bind(this)
      )),
      (this.getExperiment = this._memoize(
        B6.MemoPrefix._experiment,
        this._getExperimentImpl.bind(this)
      )),
      (this.getLayer = this._memoize(B6.MemoPrefix._layer, this._getLayerImpl.bind(this))),
      (this.getParameterStore = this._memoize(
        B6.MemoPrefix._paramStore,
        this._getParameterStoreImpl.bind(this)
      )),
      (this._store = new Rm9.default(A)),
      (this._network = D),
      (this._user = this._configureUser(B, Q)));
    let Z = (G = Q === null || Q === void 0 ? void 0 : Q.plugins) !== null && G !== void 0 ? G : [];
    for (let Y of Z) Y.bind(this);
  }
  initializeSync(A) {
    var B;
    if (this.loadingStatus !== 'Uninitialized')
      return B6.createUpdateDetails(!0, this._store.getSource(), -1, null, null, [
        'MultipleInitializations',
        ...((B = this._store.getWarnings()) !== null && B !== void 0 ? B : []),
      ]);
    return (this._logger.start(), this.updateUserSync(this._user, A));
  }
  initializeAsync(A) {
    return SR1(this, void 0, void 0, function* () {
      if (this._initializePromise) return this._initializePromise;
      return ((this._initializePromise = this._initializeAsyncImpl(A)), this._initializePromise);
    });
  }
  updateUserSync(A, B) {
    var Q;
    let I = performance.now(),
      G = [...((Q = this._store.getWarnings()) !== null && Q !== void 0 ? Q : [])];
    this._resetForUser(A);
    let D = this.dataAdapter.getDataSync(this._user);
    if (D == null) G.push('NoCachedValues');
    (this._store.setValues(D, this._user), this._finalizeUpdate(D));
    let Z = B === null || B === void 0 ? void 0 : B.disableBackgroundCacheRefresh;
    if (Z === !0 || (Z == null && (D === null || D === void 0 ? void 0 : D.source) === 'Bootstrap'))
      return B6.createUpdateDetails(
        !0,
        this._store.getSource(),
        performance.now() - I,
        this._errorBoundary.getLastSeenErrorAndReset(),
        this._network.getLastUsedInitUrlAndReset(),
        G
      );
    return (
      this._runPostUpdate(D !== null && D !== void 0 ? D : null, this._user),
      B6.createUpdateDetails(
        !0,
        this._store.getSource(),
        performance.now() - I,
        this._errorBoundary.getLastSeenErrorAndReset(),
        this._network.getLastUsedInitUrlAndReset(),
        G
      )
    );
  }
  updateUserAsync(A, B) {
    return SR1(this, void 0, void 0, function* () {
      this._resetForUser(A);
      let Q = this._user;
      B6.Diagnostics._markInitOverallStart(this._sdkKey);
      let I = this.dataAdapter.getDataSync(Q);
      if (
        (this._store.setValues(I, this._user),
        this._setStatus('Loading', I),
        (I = yield this.dataAdapter.getDataAsync(I, Q, B)),
        Q !== this._user)
      )
        return B6.createUpdateDetails(
          !1,
          this._store.getSource(),
          -1,
          new Error('User changed during update'),
          this._network.getLastUsedInitUrlAndReset()
        );
      let G = !1;
      if (I != null)
        (B6.Diagnostics._markInitProcessStart(this._sdkKey),
          (G = this._store.setValues(I, this._user)),
          B6.Diagnostics._markInitProcessEnd(this._sdkKey, { success: G }));
      if ((this._finalizeUpdate(I), !G))
        (this._errorBoundary.attachErrorIfNoneExists(
          B6.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA
        ),
          this.$emt({ name: 'initialization_failure' }));
      B6.Diagnostics._markInitOverallEnd(this._sdkKey, G, this._store.getCurrentSourceDetails());
      let D = B6.Diagnostics._enqueueDiagnosticsEvent(
        this._user,
        this._logger,
        this._sdkKey,
        this._options
      );
      return B6.createUpdateDetails(
        G,
        this._store.getSource(),
        D,
        this._errorBoundary.getLastSeenErrorAndReset(),
        this._network.getLastUsedInitUrlAndReset(),
        this._store.getWarnings()
      );
    });
  }
  getContext() {
    return {
      sdkKey: this._sdkKey,
      options: this._options,
      values: this._store.getValues(),
      user: JSON.parse(JSON.stringify(this._user)),
      errorBoundary: this._errorBoundary,
      session: B6.StatsigSession.get(this._sdkKey),
      stableID: B6.StableID.get(this._sdkKey),
    };
  }
  checkGate(A, B) {
    return this.getFeatureGate(A, B).value;
  }
  logEvent(A, B, Q) {
    let I = typeof A === 'string' ? { eventName: A, value: B, metadata: Q } : A;
    this._logger.enqueue(
      Object.assign(Object.assign({}, I), { user: this._user, time: Date.now() })
    );
  }
  _primeReadyRipcord() {
    this.$on('error', () => {
      this.loadingStatus === 'Loading' && this._finalizeUpdate(null);
    });
  }
  _initializeAsyncImpl(A) {
    return SR1(this, void 0, void 0, function* () {
      if (!B6.Storage.isReady()) yield B6.Storage.isReadyResolver();
      return (this._logger.start(), this.updateUserAsync(this._user, A));
    });
  }
  _finalizeUpdate(A) {
    (this._store.finalize(), this._setStatus('Ready', A));
  }
  _runPostUpdate(A, B) {
    this.dataAdapter.getDataAsync(A, B, { priority: 'low' }).catch((Q) => {
      B6.Log.error('An error occurred after update.', Q);
    });
  }
  _resetForUser(A) {
    (this._logger.reset(),
      this._store.reset(),
      (this._user = this._configureUser(A, this._options)));
  }
  _configureUser(A, B) {
    var Q;
    let I = B6._normalizeUser(A, B),
      G = (Q = I.customIDs) === null || Q === void 0 ? void 0 : Q.stableID;
    if (G) B6.StableID.setOverride(G, this._sdkKey);
    return I;
  }
  _getFeatureGateImpl(A, B) {
    var Q, I;
    let { result: G, details: D } = this._store.getGate(A),
      Z = B6._makeFeatureGate(A, D, G),
      Y =
        (I = (Q = this.overrideAdapter) === null || Q === void 0 ? void 0 : Q.getGateOverride) ===
          null || I === void 0
          ? void 0
          : I.call(Q, Z, this._user, B),
      W = Y !== null && Y !== void 0 ? Y : Z;
    return (
      this._enqueueExposure(
        A,
        B6._createGateExposure(this._user, W, this._store.getExposureMapping()),
        B
      ),
      this.$emt({ name: 'gate_evaluation', gate: W }),
      W
    );
  }
  _getDynamicConfigImpl(A, B) {
    var Q, I;
    let { result: G, details: D } = this._store.getConfig(A),
      Z = B6._makeDynamicConfig(A, D, G),
      Y =
        (I =
          (Q = this.overrideAdapter) === null || Q === void 0
            ? void 0
            : Q.getDynamicConfigOverride) === null || I === void 0
          ? void 0
          : I.call(Q, Z, this._user, B),
      W = Y !== null && Y !== void 0 ? Y : Z;
    return (
      this._enqueueExposure(
        A,
        B6._createConfigExposure(this._user, W, this._store.getExposureMapping()),
        B
      ),
      this.$emt({ name: 'dynamic_config_evaluation', dynamicConfig: W }),
      W
    );
  }
  _getExperimentImpl(A, B) {
    var Q, I, G, D;
    let { result: Z, details: Y } = this._store.getConfig(A),
      W = B6._makeExperiment(A, Y, Z);
    if (W.__evaluation != null)
      W.__evaluation.secondary_exposures = B6._mapExposures(
        (I = (Q = W.__evaluation) === null || Q === void 0 ? void 0 : Q.secondary_exposures) !==
          null && I !== void 0
          ? I
          : [],
        this._store.getExposureMapping()
      );
    let F =
        (D =
          (G = this.overrideAdapter) === null || G === void 0
            ? void 0
            : G.getExperimentOverride) === null || D === void 0
          ? void 0
          : D.call(G, W, this._user, B),
      J = F !== null && F !== void 0 ? F : W;
    return (
      this._enqueueExposure(
        A,
        B6._createConfigExposure(this._user, J, this._store.getExposureMapping()),
        B
      ),
      this.$emt({ name: 'experiment_evaluation', experiment: J }),
      J
    );
  }
  _getLayerImpl(A, B) {
    var Q, I, G;
    let { result: D, details: Z } = this._store.getLayer(A),
      Y = B6._makeLayer(A, Z, D),
      W =
        (I = (Q = this.overrideAdapter) === null || Q === void 0 ? void 0 : Q.getLayerOverride) ===
          null || I === void 0
          ? void 0
          : I.call(Q, Y, this._user, B);
    if (B === null || B === void 0 ? void 0 : B.disableExposureLog)
      this._logger.incrementNonExposureCount(A);
    let F = B6._mergeOverride(
      Y,
      W,
      (G = W === null || W === void 0 ? void 0 : W.__value) !== null && G !== void 0
        ? G
        : Y.__value,
      (J) => {
        if (B === null || B === void 0 ? void 0 : B.disableExposureLog) return;
        this._enqueueExposure(
          A,
          B6._createLayerParameterExposure(this._user, F, J, this._store.getExposureMapping()),
          B
        );
      }
    );
    return (this.$emt({ name: 'layer_evaluation', layer: F }), F);
  }
  _getParameterStoreImpl(A, B) {
    var Q, I;
    let { result: G, details: D } = this._store.getParamStore(A);
    this._logger.incrementNonExposureCount(A);
    let Z = { name: A, details: D, __configuration: G, get: yjA._makeParamStoreGetter(this, G, B) },
      Y =
        (I =
          (Q = this.overrideAdapter) === null || Q === void 0
            ? void 0
            : Q.getParamStoreOverride) === null || I === void 0
          ? void 0
          : I.call(Q, Z, B);
    if (Y != null)
      ((Z.__configuration = Y.config),
        (Z.details = Y.details),
        (Z.get = yjA._makeParamStoreGetter(this, Y.config, B)));
    return Z;
  }
}
Yl.default = g61;
