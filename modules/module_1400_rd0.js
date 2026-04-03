// Module: rd0
// Params: lw8,sd0

var Hz6 = RF1(),
  XN = iz(),
  ad0 = { multiband: 'multiband', 'b-w': 'b-w', bw: 'b-w', cmyk: 'cmyk', srgb: 'srgb' };
function zz6(A) {
  return (this._setBackgroundColourOption('tint', A), this);
}
function wz6(A) {
  return ((this.options.greyscale = XN.bool(A) ? A : !0), this);
}
function Ez6(A) {
  return this.greyscale(A);
}
function Uz6(A) {
  if (!XN.string(A)) throw XN.invalidParameterError('colourspace', 'string', A);
  return ((this.options.colourspacePipeline = A), this);
}
function Nz6(A) {
  return this.pipelineColourspace(A);
}
function $z6(A) {
  if (!XN.string(A)) throw XN.invalidParameterError('colourspace', 'string', A);
  return ((this.options.colourspace = A), this);
}
function qz6(A) {
  return this.toColourspace(A);
}
function Mz6(A, B) {
  if (XN.defined(B))
    if (XN.object(B) || XN.string(B)) {
      let Q = Hz6(B);
      this.options[A] = [Q.red(), Q.green(), Q.blue(), Math.round(Q.alpha() * 255)];
    } else throw XN.invalidParameterError('background', 'object or string', B);
}
sd0.exports = function (A) {
  (Object.assign(A.prototype, {
    tint: zz6,
    greyscale: wz6,
    grayscale: Ez6,
    pipelineColourspace: Uz6,
    pipelineColorspace: Nz6,
    toColourspace: $z6,
    toColorspace: qz6,
    _setBackgroundColourOption: Mz6,
  }),
    (A.colourspace = ad0),
    (A.colorspace = ad0));
};
