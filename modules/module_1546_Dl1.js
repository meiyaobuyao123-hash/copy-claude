// Module: Dl1
// Params: Q42

Object.defineProperty(Q42, '__esModule', { value: !0 });
Q42.DeltaMetricProcessor = void 0;
var Gv6 = hV(),
  Gl1 = Ho();
class B42 {
  _aggregator;
  _activeCollectionStorage = new Gl1.AttributeHashMap();
  _cumulativeMemoStorage = new Gl1.AttributeHashMap();
  _cardinalityLimit;
  _overflowAttributes = { 'otel.metric.overflow': !0 };
  _overflowHashCode;
  constructor(A, B) {
    ((this._aggregator = A),
      (this._cardinalityLimit = (B ?? 2000) - 1),
      (this._overflowHashCode = Gv6.hashAttributes(this._overflowAttributes)));
  }
  record(A, B, Q, I) {
    let G = this._activeCollectionStorage.get(B);
    if (!G) {
      if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
        this._activeCollectionStorage
          .getOrDefault(this._overflowAttributes, () => this._aggregator.createAccumulation(I))
          ?.record(A);
        return;
      }
      ((G = this._aggregator.createAccumulation(I)), this._activeCollectionStorage.set(B, G));
    }
    G?.record(A);
  }
  batchCumulate(A, B) {
    Array.from(A.entries()).forEach(([Q, I, G]) => {
      let D = this._aggregator.createAccumulation(B);
      D?.record(I);
      let Z = D;
      if (this._cumulativeMemoStorage.has(Q, G)) {
        let Y = this._cumulativeMemoStorage.get(Q, G);
        Z = this._aggregator.diff(Y, D);
      } else if (this._cumulativeMemoStorage.size >= this._cardinalityLimit) {
        if (
          ((Q = this._overflowAttributes),
          (G = this._overflowHashCode),
          this._cumulativeMemoStorage.has(Q, G))
        ) {
          let Y = this._cumulativeMemoStorage.get(Q, G);
          Z = this._aggregator.diff(Y, D);
        }
      }
      if (this._activeCollectionStorage.has(Q, G)) {
        let Y = this._activeCollectionStorage.get(Q, G);
        Z = this._aggregator.merge(Y, Z);
      }
      (this._cumulativeMemoStorage.set(Q, D, G), this._activeCollectionStorage.set(Q, Z, G));
    });
  }
  collect() {
    let A = this._activeCollectionStorage;
    return ((this._activeCollectionStorage = new Gl1.AttributeHashMap()), A);
  }
}
Q42.DeltaMetricProcessor = B42;
