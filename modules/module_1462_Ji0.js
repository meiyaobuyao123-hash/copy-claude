// Module: Ji0
// Params: Wi0

Object.defineProperty(Wi0, '__esModule', { value: !0 });
Wi0.ExponentMapping = void 0;
var oh = Hc1(),
  oN6 = AJ1(),
  Zi0 = BJ1();
class Yi0 {
  _shift;
  constructor(A) {
    this._shift = -A;
  }
  mapToIndex(A) {
    if (A < oh.MIN_VALUE) return this._minNormalLowerBoundaryIndex();
    let B = oh.getNormalBase2(A),
      Q = this._rightShift(oh.getSignificand(A) - 1, oh.SIGNIFICAND_WIDTH);
    return (B + Q) >> this._shift;
  }
  lowerBoundary(A) {
    let B = this._minNormalLowerBoundaryIndex();
    if (A < B) throw new Zi0.MappingError(`underflow: ${A} is < minimum lower boundary: ${B}`);
    let Q = this._maxNormalLowerBoundaryIndex();
    if (A > Q) throw new Zi0.MappingError(`overflow: ${A} is > maximum lower boundary: ${Q}`);
    return oN6.ldexp(1, A << this._shift);
  }
  get scale() {
    if (this._shift === 0) return 0;
    return -this._shift;
  }
  _minNormalLowerBoundaryIndex() {
    let A = oh.MIN_NORMAL_EXPONENT >> this._shift;
    if (this._shift < 2) A--;
    return A;
  }
  _maxNormalLowerBoundaryIndex() {
    return oh.MAX_NORMAL_EXPONENT >> this._shift;
  }
  _rightShift(A, B) {
    return Math.floor(A * Math.pow(2, -B));
  }
}
Wi0.ExponentMapping = Yi0;
