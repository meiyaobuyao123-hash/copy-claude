// Module: Q_A
// Params: uq

var HR1 =
  (uq && uq.__awaiter) ||
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
Object.defineProperty(uq, '__esModule', { value: !0 });
uq._makeDataAdapterResult = uq.DataAdapterCore = void 0;
var T61 = pG(),
  dg9 = O61(),
  P61 = VR1(),
  dq = tE(),
  oSA = KR1(),
  tSA = 10;
class eSA {
  constructor(A, B) {
    ((this._adapterName = A),
      (this._cacheSuffix = B),
      (this._options = null),
      (this._sdkKey = null),
      (this._lastModifiedStoreKey = `statsig.last_modified_time.${B}`),
      (this._inMemoryCache = new A_A()));
  }
  attach(A, B) {
    ((this._sdkKey = A), (this._options = B));
  }
  getDataSync(A) {
    let B = A && P61._normalizeUser(A, this._options),
      Q = this._getCacheKey(B),
      I = this._inMemoryCache.get(Q, B);
    if (I) return I;
    let G = this._loadFromCache(Q);
    if (G) return (this._inMemoryCache.add(Q, G), this._inMemoryCache.get(Q, B));
    return null;
  }
  setData(A, B) {
    let Q = B && P61._normalizeUser(B, this._options),
      I = this._getCacheKey(Q);
    this._inMemoryCache.add(I, S61('Bootstrap', A, null, Q));
  }
  _getDataAsyncImpl(A, B, Q) {
    return HR1(this, void 0, void 0, function* () {
      if (!dq.Storage.isReady()) yield dq.Storage.isReadyResolver();
      let I = A !== null && A !== void 0 ? A : this.getDataSync(B),
        G = [this._fetchAndPrepFromNetwork(I, B, Q)];
      if (Q === null || Q === void 0 ? void 0 : Q.timeoutMs)
        G.push(
          new Promise((D) => setTimeout(D, Q.timeoutMs)).then(() => {
            return (T61.Log.debug('Fetching latest value timed out'), null);
          })
        );
      return yield Promise.race(G);
    });
  }
  _prefetchDataImpl(A, B) {
    return HR1(this, void 0, void 0, function* () {
      let Q = A && P61._normalizeUser(A, this._options),
        I = this._getCacheKey(Q),
        G = yield this._getDataAsyncImpl(null, Q, B);
      if (G)
        this._inMemoryCache.add(I, Object.assign(Object.assign({}, G), { source: 'Prefetch' }));
    });
  }
  _fetchAndPrepFromNetwork(A, B, Q) {
    var I;
    return HR1(this, void 0, void 0, function* () {
      let G =
          (I = A === null || A === void 0 ? void 0 : A.data) !== null && I !== void 0 ? I : null,
        D = A != null && this._isCachedResultValidFor204(A, B),
        Z = yield this._fetchFromNetwork(G, B, Q, D);
      if (!Z) return (T61.Log.debug('No response returned for latest value'), null);
      let Y = oSA._typedJsonParse(Z, 'has_updates', 'Response'),
        W = this._getSdkKey(),
        F = dg9.StableID.get(W),
        J = null;
      if ((Y === null || Y === void 0 ? void 0 : Y.has_updates) === !0) J = S61('Network', Z, F, B);
      else if (G && (Y === null || Y === void 0 ? void 0 : Y.has_updates) === !1)
        J = S61('NetworkNotModified', G, F, B);
      else return null;
      let C = this._getCacheKey(B);
      return (this._inMemoryCache.add(C, J), this._writeToCache(C, J), J);
    });
  }
  _getSdkKey() {
    if (this._sdkKey != null) return this._sdkKey;
    return (T61.Log.error(`${this._adapterName} is not attached to a Client`), '');
  }
  _loadFromCache(A) {
    var B;
    let Q = (B = dq.Storage.getItem) === null || B === void 0 ? void 0 : B.call(dq.Storage, A);
    if (Q == null) return null;
    let I = oSA._typedJsonParse(Q, 'source', 'Cached Result');
    return I ? Object.assign(Object.assign({}, I), { source: 'Cache' }) : null;
  }
  _writeToCache(A, B) {
    (dq.Storage.setItem(A, JSON.stringify(B)), this._runLocalStorageCacheEviction(A));
  }
  _runLocalStorageCacheEviction(A) {
    var B;
    let Q =
      (B = dq._getObjectFromStorage(this._lastModifiedStoreKey)) !== null && B !== void 0 ? B : {};
    Q[A] = Date.now();
    let I = B_A(Q, tSA);
    if (I) (delete Q[I], dq.Storage.removeItem(I));
    dq._setObjectInStorage(this._lastModifiedStoreKey, Q);
  }
}
uq.DataAdapterCore = eSA;
function S61(A, B, Q, I) {
  return {
    source: A,
    data: B,
    receivedAt: Date.now(),
    stableID: Q,
    fullUserHash: P61._getFullUserHash(I),
  };
}
uq._makeDataAdapterResult = S61;
class A_A {
  constructor() {
    this._data = {};
  }
  get(A, B) {
    var Q;
    let I = this._data[A],
      G = I === null || I === void 0 ? void 0 : I.stableID,
      D =
        (Q = B === null || B === void 0 ? void 0 : B.customIDs) === null || Q === void 0
          ? void 0
          : Q.stableID;
    if (D && G && D !== G) return (T61.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null);
    return I;
  }
  add(A, B) {
    let Q = B_A(this._data, tSA - 1);
    if (Q) delete this._data[Q];
    this._data[A] = B;
  }
  merge(A) {
    this._data = Object.assign(Object.assign({}, this._data), A);
  }
}
function B_A(A, B) {
  let Q = Object.keys(A);
  if (Q.length <= B) return null;
  return Q.reduce((I, G) => {
    let D = A[I],
      Z = A[G];
    if (typeof D === 'object' && typeof Z === 'object') return Z.receivedAt < D.receivedAt ? G : I;
    return Z < D ? G : I;
  });
}
