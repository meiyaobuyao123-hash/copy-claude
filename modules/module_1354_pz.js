// Module: pz
// Params: Fz8,Sg0

class Ju1 {
  constructor(A) {
    let B = {},
      Q = this._getOverriddenMethods(this, B);
    for (let I of Object.keys(Q)) if (typeof Q[I] === 'function') ((B[I] = A[I]), (A[I] = Q[I]));
  }
  _getOverriddenMethods() {
    throw new Error('Not implemented');
  }
}
Ju1.install = function (A, B, Q) {
  if (!A.__mixins) A.__mixins = [];
  for (let G = 0; G < A.__mixins.length; G++)
    if (A.__mixins[G].constructor === B) return A.__mixins[G];
  let I = new B(A, Q);
  return (A.__mixins.push(I), I);
};
Sg0.exports = Ju1;
