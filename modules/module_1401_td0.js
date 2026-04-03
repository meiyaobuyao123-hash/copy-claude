// Module: td0
// Params: iw8,od0

var sz = iz(),
  Lz6 = { and: 'and', or: 'or', eor: 'eor' };
function Rz6() {
  return ((this.options.removeAlpha = !0), this);
}
function Oz6(A) {
  if (sz.defined(A))
    if (sz.number(A) && sz.inRange(A, 0, 1)) this.options.ensureAlpha = A;
    else throw sz.invalidParameterError('alpha', 'number between 0 and 1', A);
  else this.options.ensureAlpha = 1;
  return this;
}
function Tz6(A) {
  let B = { red: 0, green: 1, blue: 2, alpha: 3 };
  if (Object.keys(B).includes(A)) A = B[A];
  if (sz.integer(A) && sz.inRange(A, 0, 4)) this.options.extractChannel = A;
  else throw sz.invalidParameterError('channel', 'integer or one of: red, green, blue, alpha', A);
  return this;
}
function Pz6(A, B) {
  if (Array.isArray(A))
    A.forEach(function (Q) {
      this.options.joinChannelIn.push(this._createInputDescriptor(Q, B));
    }, this);
  else this.options.joinChannelIn.push(this._createInputDescriptor(A, B));
  return this;
}
function Sz6(A) {
  if (sz.string(A) && sz.inArray(A, ['and', 'or', 'eor'])) this.options.bandBoolOp = A;
  else throw sz.invalidParameterError('boolOp', 'one of: and, or, eor', A);
  return this;
}
od0.exports = function (A) {
  (Object.assign(A.prototype, {
    removeAlpha: Rz6,
    ensureAlpha: Oz6,
    extractChannel: Tz6,
    joinChannel: Pz6,
    bandbool: Sz6,
  }),
    (A.bool = Lz6));
};
