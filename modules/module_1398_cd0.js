// Module: cd0
// Params: pw8,pd0

var J8 = iz(),
  Bp1 = {
    clear: 'clear',
    source: 'source',
    over: 'over',
    in: 'in',
    out: 'out',
    atop: 'atop',
    dest: 'dest',
    'dest-over': 'dest-over',
    'dest-in': 'dest-in',
    'dest-out': 'dest-out',
    'dest-atop': 'dest-atop',
    xor: 'xor',
    add: 'add',
    saturate: 'saturate',
    multiply: 'multiply',
    screen: 'screen',
    overlay: 'overlay',
    darken: 'darken',
    lighten: 'lighten',
    'colour-dodge': 'colour-dodge',
    'color-dodge': 'colour-dodge',
    'colour-burn': 'colour-burn',
    'color-burn': 'colour-burn',
    'hard-light': 'hard-light',
    'soft-light': 'soft-light',
    difference: 'difference',
    exclusion: 'exclusion',
  };
function nH6(A) {
  if (!Array.isArray(A)) throw J8.invalidParameterError('images to composite', 'array', A);
  return (
    (this.options.composite = A.map((B) => {
      if (!J8.object(B)) throw J8.invalidParameterError('image to composite', 'object', B);
      let Q = this._inputOptionsFromObject(B),
        I = {
          input: this._createInputDescriptor(B.input, Q, { allowStream: !1 }),
          blend: 'over',
          tile: !1,
          left: 0,
          top: 0,
          hasOffset: !1,
          gravity: 0,
          premultiplied: !1,
        };
      if (J8.defined(B.blend))
        if (J8.string(Bp1[B.blend])) I.blend = Bp1[B.blend];
        else throw J8.invalidParameterError('blend', 'valid blend name', B.blend);
      if (J8.defined(B.tile))
        if (J8.bool(B.tile)) I.tile = B.tile;
        else throw J8.invalidParameterError('tile', 'boolean', B.tile);
      if (J8.defined(B.left))
        if (J8.integer(B.left)) I.left = B.left;
        else throw J8.invalidParameterError('left', 'integer', B.left);
      if (J8.defined(B.top))
        if (J8.integer(B.top)) I.top = B.top;
        else throw J8.invalidParameterError('top', 'integer', B.top);
      if (J8.defined(B.top) !== J8.defined(B.left))
        throw new Error('Expected both left and top to be set');
      else I.hasOffset = J8.integer(B.top) && J8.integer(B.left);
      if (J8.defined(B.gravity))
        if (J8.integer(B.gravity) && J8.inRange(B.gravity, 0, 8)) I.gravity = B.gravity;
        else if (J8.string(B.gravity) && J8.integer(this.constructor.gravity[B.gravity]))
          I.gravity = this.constructor.gravity[B.gravity];
        else throw J8.invalidParameterError('gravity', 'valid gravity', B.gravity);
      if (J8.defined(B.premultiplied))
        if (J8.bool(B.premultiplied)) I.premultiplied = B.premultiplied;
        else throw J8.invalidParameterError('premultiplied', 'boolean', B.premultiplied);
      return I;
    })),
    this
  );
}
pd0.exports = function (A) {
  ((A.prototype.composite = nH6), (A.blend = Bp1));
};
