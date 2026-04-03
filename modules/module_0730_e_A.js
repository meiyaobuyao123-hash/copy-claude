// Module: e_A
// Params: Xf

var bh9 =
  (Xf && Xf.__awaiter) ||
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
Object.defineProperty(Xf, '__esModule', { value: !0 });
Xf.StatsigClientBase = void 0;
iT();
var gh9 = iT(),
  hh9 = zR1(),
  mh9 = CR1(),
  LR1 = pG(),
  dh9 = wR1(),
  uh9 = nT(),
  ph9 = y61(),
  k61 = tE(),
  ch9 = 3000;
class t_A {
  constructor(A, B, Q, I) {
    var G;
    ((this.loadingStatus = 'Uninitialized'),
      (this._initializePromise = null),
      (this._listeners = {}));
    let D = this.$emt.bind(this);
    ((I === null || I === void 0 ? void 0 : I.logLevel) != null && (LR1.Log.level = I.logLevel),
      (I === null || I === void 0 ? void 0 : I.disableStorage) && k61.Storage._setDisabled(!0),
      (I === null || I === void 0 ? void 0 : I.initialSessionID) &&
        ph9.StatsigSession.overrideInitialSessionID(I.initialSessionID, A),
      (I === null || I === void 0 ? void 0 : I.storageProvider) &&
        k61.Storage._setProvider(I.storageProvider),
      (this._sdkKey = A),
      (this._options = I !== null && I !== void 0 ? I : {}),
      (this._memoCache = {}),
      (this.overrideAdapter =
        (G = I === null || I === void 0 ? void 0 : I.overrideAdapter) !== null && G !== void 0
          ? G
          : null),
      (this._logger = new mh9.EventLogger(A, D, Q, I)),
      (this._errorBoundary = new hh9.ErrorBoundary(A, I, D)),
      this._errorBoundary.wrap(this),
      this._errorBoundary.wrap(B),
      this._errorBoundary.wrap(this._logger),
      Q.setErrorBoundary(this._errorBoundary),
      (this.dataAdapter = B),
      this.dataAdapter.attach(A, I),
      (this.storageProvider = k61.Storage),
      this._primeReadyRipcord(),
      lh9(A, this));
  }
  updateRuntimeOptions(A) {
    if (A.disableLogging != null)
      ((this._options.disableLogging = A.disableLogging),
        this._logger.setLoggingDisabled(A.disableLogging));
    if (A.disableStorage != null)
      ((this._options.disableStorage = A.disableStorage),
        k61.Storage._setDisabled(A.disableStorage));
  }
  flush() {
    return this._logger.flush();
  }
  shutdown() {
    return bh9(this, void 0, void 0, function* () {
      (this.$emt({ name: 'pre_shutdown' }),
        this._setStatus('Uninitialized', null),
        (this._initializePromise = null),
        yield this._logger.stop());
    });
  }
  on(A, B) {
    if (!this._listeners[A]) this._listeners[A] = [];
    this._listeners[A].push(B);
  }
  off(A, B) {
    if (this._listeners[A]) {
      let Q = this._listeners[A].indexOf(B);
      if (Q !== -1) this._listeners[A].splice(Q, 1);
    }
  }
  $on(A, B) {
    ((B.__isInternal = !0), this.on(A, B));
  }
  $emt(A) {
    var B;
    let Q = (I) => {
      try {
        I(A);
      } catch (G) {
        if (I.__isInternal === !0) {
          this._errorBoundary.logError(`__emit:${A.name}`, G);
          return;
        }
        LR1.Log.error(
          'An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.',
          A
        );
      }
    };
    if (this._listeners[A.name]) this._listeners[A.name].forEach((I) => Q(I));
    (B = this._listeners['*']) === null || B === void 0 || B.forEach(Q);
  }
  _setStatus(A, B) {
    ((this.loadingStatus = A),
      (this._memoCache = {}),
      this.$emt({ name: 'values_updated', status: A, values: B }));
  }
  _enqueueExposure(A, B, Q) {
    if ((Q === null || Q === void 0 ? void 0 : Q.disableExposureLog) === !0) {
      this._logger.incrementNonExposureCount(A);
      return;
    }
    this._logger.enqueue(B);
  }
  _memoize(A, B) {
    return (Q, I) => {
      if (this._options.disableEvaluationMemoization) return B(Q, I);
      let G = dh9.createMemoKey(A, Q, I);
      if (!G) return B(Q, I);
      if (!(G in this._memoCache)) {
        if (Object.keys(this._memoCache).length >= ch9) this._memoCache = {};
        this._memoCache[G] = B(Q, I);
      }
      return this._memoCache[G];
    };
  }
}
Xf.StatsigClientBase = t_A;
function lh9(A, B) {
  var Q;
  if (uh9._isServerEnv()) return;
  let I = gh9._getStatsigGlobal(),
    G = (Q = I.instances) !== null && Q !== void 0 ? Q : {},
    D = B;
  if (G[A] != null)
    LR1.Log.warn(
      'Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.'
    );
  if (((G[A] = D), !I.firstInstance)) I.firstInstance = D;
  ((I.instances = G), (__STATSIG__ = I));
}
