// Module: zi0
// Params: Ki0

Object.defineProperty(Ki0, '__esModule', { value: !0 });
Ki0.LogarithmMapping = void 0;
var th = Hc1(),
  Ci0 = AJ1(),
  Xi0 = BJ1();
class Vi0 {
  _scale;
  _scaleFactor;
  _inverseFactor;
  constructor(A) {
    ((this._scale = A),
      (this._scaleFactor = Ci0.ldexp(Math.LOG2E, A)),
      (this._inverseFactor = Ci0.ldexp(Math.LN2, -A)));
  }
  mapToIndex(A) {
    if (A <= th.MIN_VALUE) return this._minNormalLowerBoundaryIndex() - 1;
    if (th.getSignificand(A) === 0) return (th.getNormalBase2(A) << this._scale) - 1;
    let B = Math.floor(Math.log(A) * this._scaleFactor),
      Q = this._maxNormalLowerBoundaryIndex();
    if (B >= Q) return Q;
    return B;
  }
  lowerBoundary(A) {
    let B = this._maxNormalLowerBoundaryIndex();
    if (A >= B) {
      if (A === B) return 2 * Math.exp((A - (1 << this._scale)) / this._scaleFactor);
      throw new Xi0.MappingError(`overflow: ${A} is > maximum lower boundary: ${B}`);
    }
    let Q = this._minNormalLowerBoundaryIndex();
    if (A <= Q) {
      if (A === Q) return th.MIN_VALUE;
      else if (A === Q - 1) return Math.exp((A + (1 << this._scale)) / this._scaleFactor) / 2;
      throw new Xi0.MappingError(`overflow: ${A} is < minimum lower boundary: ${Q}`);
    }
    return Math.exp(A * this._inverseFactor);
  }
  get scale() {
    return this._scale;
  }
  _minNormalLowerBoundaryIndex() {
    return th.MIN_NORMAL_EXPONENT << this._scale;
  }
  _maxNormalLowerBoundaryIndex() {
    return ((th.MAX_NORMAL_EXPONENT + 1) << this._scale) - 1;
  }
}
Ki0.LogarithmMapping = Vi0;
