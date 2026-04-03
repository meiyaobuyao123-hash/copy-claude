// Module: ud0
// Params: uw8,dd0

var J9 = iz(),
  gd0 = {
    center: 0,
    centre: 0,
    north: 1,
    east: 2,
    south: 3,
    west: 4,
    northeast: 5,
    southeast: 6,
    southwest: 7,
    northwest: 8,
  },
  hd0 = {
    top: 1,
    right: 2,
    bottom: 3,
    left: 4,
    'right top': 5,
    'right bottom': 6,
    'left bottom': 7,
    'left top': 8,
  },
  bd0 = { background: 'background', copy: 'copy', repeat: 'repeat', mirror: 'mirror' },
  md0 = { entropy: 16, attention: 17 },
  eu1 = {
    nearest: 'nearest',
    linear: 'linear',
    cubic: 'cubic',
    mitchell: 'mitchell',
    lanczos2: 'lanczos2',
    lanczos3: 'lanczos3',
  },
  dH6 = { contain: 'contain', cover: 'cover', fill: 'fill', inside: 'inside', outside: 'outside' },
  uH6 = { contain: 'embed', cover: 'crop', fill: 'ignore_aspect', inside: 'max', outside: 'min' };
function Ap1(A) {
  return A.angle % 360 !== 0 || A.useExifOrientation === !0 || A.rotationAngle !== 0;
}
function OF1(A) {
  return A.width !== -1 || A.height !== -1;
}
function pH6(A, B, Q) {
  if (OF1(this.options)) this.options.debuglog('ignoring previous resize options');
  if (this.options.widthPost !== -1)
    this.options.debuglog('operation order will be: extract, resize, extract');
  if (J9.defined(A))
    if (J9.object(A) && !J9.defined(Q)) Q = A;
    else if (J9.integer(A) && A > 0) this.options.width = A;
    else throw J9.invalidParameterError('width', 'positive integer', A);
  else this.options.width = -1;
  if (J9.defined(B))
    if (J9.integer(B) && B > 0) this.options.height = B;
    else throw J9.invalidParameterError('height', 'positive integer', B);
  else this.options.height = -1;
  if (J9.object(Q)) {
    if (J9.defined(Q.width))
      if (J9.integer(Q.width) && Q.width > 0) this.options.width = Q.width;
      else throw J9.invalidParameterError('width', 'positive integer', Q.width);
    if (J9.defined(Q.height))
      if (J9.integer(Q.height) && Q.height > 0) this.options.height = Q.height;
      else throw J9.invalidParameterError('height', 'positive integer', Q.height);
    if (J9.defined(Q.fit)) {
      let I = uH6[Q.fit];
      if (J9.string(I)) this.options.canvas = I;
      else throw J9.invalidParameterError('fit', 'valid fit', Q.fit);
    }
    if (J9.defined(Q.position)) {
      let I = J9.integer(Q.position)
        ? Q.position
        : md0[Q.position] || hd0[Q.position] || gd0[Q.position];
      if (J9.integer(I) && (J9.inRange(I, 0, 8) || J9.inRange(I, 16, 17)))
        this.options.position = I;
      else
        throw J9.invalidParameterError('position', 'valid position/gravity/strategy', Q.position);
    }
    if ((this._setBackgroundColourOption('resizeBackground', Q.background), J9.defined(Q.kernel)))
      if (J9.string(eu1[Q.kernel])) this.options.kernel = eu1[Q.kernel];
      else throw J9.invalidParameterError('kernel', 'valid kernel name', Q.kernel);
    if (J9.defined(Q.withoutEnlargement))
      this._setBooleanOption('withoutEnlargement', Q.withoutEnlargement);
    if (J9.defined(Q.withoutReduction))
      this._setBooleanOption('withoutReduction', Q.withoutReduction);
    if (J9.defined(Q.fastShrinkOnLoad))
      this._setBooleanOption('fastShrinkOnLoad', Q.fastShrinkOnLoad);
  }
  if (Ap1(this.options) && OF1(this.options)) this.options.rotateBeforePreExtract = !0;
  return this;
}
function cH6(A) {
  if (J9.integer(A) && A > 0)
    ((this.options.extendTop = A),
      (this.options.extendBottom = A),
      (this.options.extendLeft = A),
      (this.options.extendRight = A));
  else if (J9.object(A)) {
    if (J9.defined(A.top))
      if (J9.integer(A.top) && A.top >= 0) this.options.extendTop = A.top;
      else throw J9.invalidParameterError('top', 'positive integer', A.top);
    if (J9.defined(A.bottom))
      if (J9.integer(A.bottom) && A.bottom >= 0) this.options.extendBottom = A.bottom;
      else throw J9.invalidParameterError('bottom', 'positive integer', A.bottom);
    if (J9.defined(A.left))
      if (J9.integer(A.left) && A.left >= 0) this.options.extendLeft = A.left;
      else throw J9.invalidParameterError('left', 'positive integer', A.left);
    if (J9.defined(A.right))
      if (J9.integer(A.right) && A.right >= 0) this.options.extendRight = A.right;
      else throw J9.invalidParameterError('right', 'positive integer', A.right);
    if (
      (this._setBackgroundColourOption('extendBackground', A.background), J9.defined(A.extendWith))
    )
      if (J9.string(bd0[A.extendWith])) this.options.extendWith = bd0[A.extendWith];
      else
        throw J9.invalidParameterError(
          'extendWith',
          'one of: background, copy, repeat, mirror',
          A.extendWith
        );
  } else throw J9.invalidParameterError('extend', 'integer or object', A);
  return this;
}
function lH6(A) {
  let B = OF1(this.options) || this.options.widthPre !== -1 ? 'Post' : 'Pre';
  if (this.options[`width${B}`] !== -1) this.options.debuglog('ignoring previous extract options');
  if (
    (['left', 'top', 'width', 'height'].forEach(function (Q) {
      let I = A[Q];
      if (J9.integer(I) && I >= 0)
        this.options[Q + (Q === 'left' || Q === 'top' ? 'Offset' : '') + B] = I;
      else throw J9.invalidParameterError(Q, 'integer', I);
    }, this),
    Ap1(this.options) && !OF1(this.options))
  ) {
    if (this.options.widthPre === -1 || this.options.widthPost === -1)
      this.options.rotateBeforePreExtract = !0;
  }
  return this;
}
function iH6(A) {
  if (((this.options.trimThreshold = 10), J9.defined(A)))
    if (J9.object(A)) {
      if (J9.defined(A.background)) this._setBackgroundColourOption('trimBackground', A.background);
      if (J9.defined(A.threshold))
        if (J9.number(A.threshold) && A.threshold >= 0) this.options.trimThreshold = A.threshold;
        else throw J9.invalidParameterError('threshold', 'positive number', A.threshold);
      if (J9.defined(A.lineArt)) this._setBooleanOption('trimLineArt', A.lineArt);
    } else throw J9.invalidParameterError('trim', 'object', A);
  if (Ap1(this.options)) this.options.rotateBeforePreExtract = !0;
  return this;
}
dd0.exports = function (A) {
  (Object.assign(A.prototype, { resize: pH6, extend: cH6, extract: lH6, trim: iH6 }),
    (A.gravity = gd0),
    (A.strategy = md0),
    (A.kernel = eu1),
    (A.fit = dH6),
    (A.position = hd0));
};
