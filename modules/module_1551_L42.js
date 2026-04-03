// Module: L42
// Params: q42

Object.defineProperty(q42, '__esModule', { value: !0 });
q42.MultiMetricStorage = void 0;
class $42 {
  _backingStorages;
  constructor(A) {
    this._backingStorages = A;
  }
  record(A, B, Q, I) {
    this._backingStorages.forEach((G) => {
      G.record(A, B, Q, I);
    });
  }
}
q42.MultiMetricStorage = $42;
