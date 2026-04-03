// Module: ui0
// Params: mi0

Object.defineProperty(mi0, '__esModule', { value: !0 });
mi0.AnchoredClock = void 0;
class hi0 {
  _monotonicClock;
  _epochMillis;
  _performanceMillis;
  constructor(A, B) {
    ((this._monotonicClock = B),
      (this._epochMillis = A.now()),
      (this._performanceMillis = B.now()));
  }
  now() {
    let A = this._monotonicClock.now() - this._performanceMillis;
    return this._epochMillis + A;
  }
}
mi0.AnchoredClock = hi0;
