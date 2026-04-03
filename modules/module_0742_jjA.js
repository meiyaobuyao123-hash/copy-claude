// Module: jjA
// Params: Vf

var Mm9 =
  (Vf && Vf.__awaiter) ||
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
Object.defineProperty(Vf, '__esModule', { value: !0 });
Vf.StatsigEvaluationsDataAdapter = void 0;
var oT = cq(),
  Lm9 = TR1();
class _jA extends oT.DataAdapterCore {
  constructor() {
    super('EvaluationsDataAdapter', 'evaluations');
    ((this._network = null), (this._options = null));
  }
  attach(A, B) {
    (super.attach(A, B), (this._network = new Lm9.default(B !== null && B !== void 0 ? B : {})));
  }
  getDataAsync(A, B, Q) {
    return this._getDataAsyncImpl(A, oT._normalizeUser(B, this._options), Q);
  }
  prefetchData(A, B) {
    return this._prefetchDataImpl(A, B);
  }
  setData(A) {
    let B = oT._typedJsonParse(A, 'has_updates', 'data');
    if (B && 'user' in B) super.setData(A, B.user);
    else
      oT.Log.error(
        'StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.'
      );
  }
  setDataLegacy(A, B) {
    super.setData(A, B);
  }
  _fetchFromNetwork(A, B, Q, I) {
    var G;
    return Mm9(this, void 0, void 0, function* () {
      let D = yield (G = this._network) === null || G === void 0
        ? void 0
        : G.fetchEvaluations(
            this._getSdkKey(),
            A,
            Q === null || Q === void 0 ? void 0 : Q.priority,
            B,
            I
          );
      return D !== null && D !== void 0 ? D : null;
    });
  }
  _getCacheKey(A) {
    var B;
    let Q = oT._getStorageKey(
      this._getSdkKey(),
      A,
      (B = this._options) === null || B === void 0 ? void 0 : B.customUserCacheKeyFunc
    );
    return `${oT.DataAdapterCachePrefix}.${this._cacheSuffix}.${Q}`;
  }
  _isCachedResultValidFor204(A, B) {
    return A.fullUserHash != null && A.fullUserHash === oT._getFullUserHash(B);
  }
}
Vf.StatsigEvaluationsDataAdapter = _jA;
