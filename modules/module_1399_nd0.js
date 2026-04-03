// Module: nd0
// Params: cw8,id0

var aH6 = RF1(),
  SA = iz(),
  ld0 = { integer: 'integer', float: 'float', approximate: 'approximate' };
function sH6(A, B) {
  if (this.options.useExifOrientation || this.options.angle || this.options.rotationAngle)
    this.options.debuglog('ignoring previous rotate options');
  if (!SA.defined(A)) this.options.useExifOrientation = !0;
  else if (SA.integer(A) && !(A % 90)) this.options.angle = A;
  else if (SA.number(A)) {
    if (((this.options.rotationAngle = A), SA.object(B) && B.background)) {
      let Q = aH6(B.background);
      this.options.rotationBackground = [Q.red(), Q.green(), Q.blue(), Math.round(Q.alpha() * 255)];
    }
  } else throw SA.invalidParameterError('angle', 'numeric', A);
  return this;
}
function rH6(A) {
  return ((this.options.flip = SA.bool(A) ? A : !0), this);
}
function oH6(A) {
  return ((this.options.flop = SA.bool(A) ? A : !0), this);
}
function tH6(A, B) {
  let Q = [].concat(...A);
  if (Q.length === 4 && Q.every(SA.number)) this.options.affineMatrix = Q;
  else throw SA.invalidParameterError('matrix', '1x4 or 2x2 array', A);
  if (SA.defined(B))
    if (SA.object(B)) {
      if ((this._setBackgroundColourOption('affineBackground', B.background), SA.defined(B.idx)))
        if (SA.number(B.idx)) this.options.affineIdx = B.idx;
        else throw SA.invalidParameterError('options.idx', 'number', B.idx);
      if (SA.defined(B.idy))
        if (SA.number(B.idy)) this.options.affineIdy = B.idy;
        else throw SA.invalidParameterError('options.idy', 'number', B.idy);
      if (SA.defined(B.odx))
        if (SA.number(B.odx)) this.options.affineOdx = B.odx;
        else throw SA.invalidParameterError('options.odx', 'number', B.odx);
      if (SA.defined(B.ody))
        if (SA.number(B.ody)) this.options.affineOdy = B.ody;
        else throw SA.invalidParameterError('options.ody', 'number', B.ody);
      if (SA.defined(B.interpolator))
        if (SA.inArray(B.interpolator, Object.values(this.constructor.interpolators)))
          this.options.affineInterpolator = B.interpolator;
        else
          throw SA.invalidParameterError(
            'options.interpolator',
            'valid interpolator name',
            B.interpolator
          );
    } else throw SA.invalidParameterError('options', 'object', B);
  return this;
}
function eH6(A, B, Q) {
  if (!SA.defined(A)) this.options.sharpenSigma = -1;
  else if (SA.bool(A)) this.options.sharpenSigma = A ? -1 : 0;
  else if (SA.number(A) && SA.inRange(A, 0.01, 1e4)) {
    if (((this.options.sharpenSigma = A), SA.defined(B)))
      if (SA.number(B) && SA.inRange(B, 0, 1e4)) this.options.sharpenM1 = B;
      else throw SA.invalidParameterError('flat', 'number between 0 and 10000', B);
    if (SA.defined(Q))
      if (SA.number(Q) && SA.inRange(Q, 0, 1e4)) this.options.sharpenM2 = Q;
      else throw SA.invalidParameterError('jagged', 'number between 0 and 10000', Q);
  } else if (SA.plainObject(A)) {
    if (SA.number(A.sigma) && SA.inRange(A.sigma, 0.000001, 10))
      this.options.sharpenSigma = A.sigma;
    else throw SA.invalidParameterError('options.sigma', 'number between 0.000001 and 10', A.sigma);
    if (SA.defined(A.m1))
      if (SA.number(A.m1) && SA.inRange(A.m1, 0, 1e6)) this.options.sharpenM1 = A.m1;
      else throw SA.invalidParameterError('options.m1', 'number between 0 and 1000000', A.m1);
    if (SA.defined(A.m2))
      if (SA.number(A.m2) && SA.inRange(A.m2, 0, 1e6)) this.options.sharpenM2 = A.m2;
      else throw SA.invalidParameterError('options.m2', 'number between 0 and 1000000', A.m2);
    if (SA.defined(A.x1))
      if (SA.number(A.x1) && SA.inRange(A.x1, 0, 1e6)) this.options.sharpenX1 = A.x1;
      else throw SA.invalidParameterError('options.x1', 'number between 0 and 1000000', A.x1);
    if (SA.defined(A.y2))
      if (SA.number(A.y2) && SA.inRange(A.y2, 0, 1e6)) this.options.sharpenY2 = A.y2;
      else throw SA.invalidParameterError('options.y2', 'number between 0 and 1000000', A.y2);
    if (SA.defined(A.y3))
      if (SA.number(A.y3) && SA.inRange(A.y3, 0, 1e6)) this.options.sharpenY3 = A.y3;
      else throw SA.invalidParameterError('options.y3', 'number between 0 and 1000000', A.y3);
  } else throw SA.invalidParameterError('sigma', 'number between 0.01 and 10000', A);
  return this;
}
function Az6(A) {
  if (!SA.defined(A)) this.options.medianSize = 3;
  else if (SA.integer(A) && SA.inRange(A, 1, 1000)) this.options.medianSize = A;
  else throw SA.invalidParameterError('size', 'integer between 1 and 1000', A);
  return this;
}
function Bz6(A) {
  let B;
  if (SA.number(A)) B = A;
  else if (SA.plainObject(A)) {
    if (!SA.number(A.sigma))
      throw SA.invalidParameterError('options.sigma', 'number between 0.3 and 1000', B);
    if (((B = A.sigma), 'precision' in A))
      if (SA.string(ld0[A.precision])) this.options.precision = ld0[A.precision];
      else
        throw SA.invalidParameterError(
          'precision',
          'one of: integer, float, approximate',
          A.precision
        );
    if ('minAmplitude' in A)
      if (SA.number(A.minAmplitude) && SA.inRange(A.minAmplitude, 0.001, 1))
        this.options.minAmpl = A.minAmplitude;
      else
        throw SA.invalidParameterError(
          'minAmplitude',
          'number between 0.001 and 1',
          A.minAmplitude
        );
  }
  if (!SA.defined(A)) this.options.blurSigma = -1;
  else if (SA.bool(A)) this.options.blurSigma = A ? -1 : 0;
  else if (SA.number(B) && SA.inRange(B, 0.3, 1000)) this.options.blurSigma = B;
  else throw SA.invalidParameterError('sigma', 'number between 0.3 and 1000', B);
  return this;
}
function Qz6(A) {
  if (((this.options.flatten = SA.bool(A) ? A : !0), SA.object(A)))
    this._setBackgroundColourOption('flattenBackground', A.background);
  return this;
}
function Iz6() {
  return ((this.options.unflatten = !0), this);
}
function Gz6(A, B) {
  if (!SA.defined(A)) this.options.gamma = 2.2;
  else if (SA.number(A) && SA.inRange(A, 1, 3)) this.options.gamma = A;
  else throw SA.invalidParameterError('gamma', 'number between 1.0 and 3.0', A);
  if (!SA.defined(B)) this.options.gammaOut = this.options.gamma;
  else if (SA.number(B) && SA.inRange(B, 1, 3)) this.options.gammaOut = B;
  else throw SA.invalidParameterError('gammaOut', 'number between 1.0 and 3.0', B);
  return this;
}
function Dz6(A) {
  if (((this.options.negate = SA.bool(A) ? A : !0), SA.plainObject(A) && 'alpha' in A))
    if (!SA.bool(A.alpha))
      throw SA.invalidParameterError('alpha', 'should be boolean value', A.alpha);
    else this.options.negateAlpha = A.alpha;
  return this;
}
function Zz6(A) {
  if (SA.plainObject(A)) {
    if (SA.defined(A.lower))
      if (SA.number(A.lower) && SA.inRange(A.lower, 0, 99)) this.options.normaliseLower = A.lower;
      else throw SA.invalidParameterError('lower', 'number between 0 and 99', A.lower);
    if (SA.defined(A.upper))
      if (SA.number(A.upper) && SA.inRange(A.upper, 1, 100)) this.options.normaliseUpper = A.upper;
      else throw SA.invalidParameterError('upper', 'number between 1 and 100', A.upper);
  }
  if (this.options.normaliseLower >= this.options.normaliseUpper)
    throw SA.invalidParameterError(
      'range',
      'lower to be less than upper',
      `${this.options.normaliseLower} >= ${this.options.normaliseUpper}`
    );
  return ((this.options.normalise = !0), this);
}
function Yz6(A) {
  return this.normalise(A);
}
function Wz6(A) {
  if (SA.plainObject(A)) {
    if (SA.integer(A.width) && A.width > 0) this.options.claheWidth = A.width;
    else throw SA.invalidParameterError('width', 'integer greater than zero', A.width);
    if (SA.integer(A.height) && A.height > 0) this.options.claheHeight = A.height;
    else throw SA.invalidParameterError('height', 'integer greater than zero', A.height);
    if (SA.defined(A.maxSlope))
      if (SA.integer(A.maxSlope) && SA.inRange(A.maxSlope, 0, 100))
        this.options.claheMaxSlope = A.maxSlope;
      else throw SA.invalidParameterError('maxSlope', 'integer between 0 and 100', A.maxSlope);
  } else throw SA.invalidParameterError('options', 'plain object', A);
  return this;
}
function Fz6(A) {
  if (
    !SA.object(A) ||
    !Array.isArray(A.kernel) ||
    !SA.integer(A.width) ||
    !SA.integer(A.height) ||
    !SA.inRange(A.width, 3, 1001) ||
    !SA.inRange(A.height, 3, 1001) ||
    A.height * A.width !== A.kernel.length
  )
    throw new Error('Invalid convolution kernel');
  if (!SA.integer(A.scale))
    A.scale = A.kernel.reduce(function (B, Q) {
      return B + Q;
    }, 0);
  if (A.scale < 1) A.scale = 1;
  if (!SA.integer(A.offset)) A.offset = 0;
  return ((this.options.convKernel = A), this);
}
function Jz6(A, B) {
  if (!SA.defined(A)) this.options.threshold = 128;
  else if (SA.bool(A)) this.options.threshold = A ? 128 : 0;
  else if (SA.integer(A) && SA.inRange(A, 0, 255)) this.options.threshold = A;
  else throw SA.invalidParameterError('threshold', 'integer between 0 and 255', A);
  if (!SA.object(B) || B.greyscale === !0 || B.grayscale === !0)
    this.options.thresholdGrayscale = !0;
  else this.options.thresholdGrayscale = !1;
  return this;
}
function Cz6(A, B, Q) {
  if (
    ((this.options.boolean = this._createInputDescriptor(A, Q)),
    SA.string(B) && SA.inArray(B, ['and', 'or', 'eor']))
  )
    this.options.booleanOp = B;
  else throw SA.invalidParameterError('operator', 'one of: and, or, eor', B);
  return this;
}
function Xz6(A, B) {
  if (!SA.defined(A) && SA.number(B)) A = 1;
  else if (SA.number(A) && !SA.defined(B)) B = 0;
  if (!SA.defined(A)) this.options.linearA = [];
  else if (SA.number(A)) this.options.linearA = [A];
  else if (Array.isArray(A) && A.length && A.every(SA.number)) this.options.linearA = A;
  else throw SA.invalidParameterError('a', 'number or array of numbers', A);
  if (!SA.defined(B)) this.options.linearB = [];
  else if (SA.number(B)) this.options.linearB = [B];
  else if (Array.isArray(B) && B.length && B.every(SA.number)) this.options.linearB = B;
  else throw SA.invalidParameterError('b', 'number or array of numbers', B);
  if (this.options.linearA.length !== this.options.linearB.length)
    throw new Error('Expected a and b to be arrays of the same length');
  return this;
}
function Vz6(A) {
  if (!Array.isArray(A)) throw SA.invalidParameterError('inputMatrix', 'array', A);
  if (A.length !== 3 && A.length !== 4)
    throw SA.invalidParameterError('inputMatrix', '3x3 or 4x4 array', A.length);
  let B = A.flat().map(Number);
  if (B.length !== 9 && B.length !== 16)
    throw SA.invalidParameterError('inputMatrix', 'cardinality of 9 or 16', B.length);
  return ((this.options.recombMatrix = B), this);
}
function Kz6(A) {
  if (!SA.plainObject(A)) throw SA.invalidParameterError('options', 'plain object', A);
  if ('brightness' in A)
    if (SA.number(A.brightness) && A.brightness >= 0) this.options.brightness = A.brightness;
    else throw SA.invalidParameterError('brightness', 'number above zero', A.brightness);
  if ('saturation' in A)
    if (SA.number(A.saturation) && A.saturation >= 0) this.options.saturation = A.saturation;
    else throw SA.invalidParameterError('saturation', 'number above zero', A.saturation);
  if ('hue' in A)
    if (SA.integer(A.hue)) this.options.hue = A.hue % 360;
    else throw SA.invalidParameterError('hue', 'number', A.hue);
  if ('lightness' in A)
    if (SA.number(A.lightness)) this.options.lightness = A.lightness;
    else throw SA.invalidParameterError('lightness', 'number', A.lightness);
  return this;
}
id0.exports = function (A) {
  Object.assign(A.prototype, {
    rotate: sH6,
    flip: rH6,
    flop: oH6,
    affine: tH6,
    sharpen: eH6,
    median: Az6,
    blur: Bz6,
    flatten: Qz6,
    unflatten: Iz6,
    gamma: Gz6,
    negate: Dz6,
    normalise: Zz6,
    normalize: Yz6,
    clahe: Wz6,
    convolve: Fz6,
    threshold: Jz6,
    boolean: Cz6,
    linear: Xz6,
    recomb: Vz6,
    modulate: Kz6,
  });
};
