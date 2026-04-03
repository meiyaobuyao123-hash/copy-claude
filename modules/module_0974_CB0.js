// Module: CB0
// Params: zo5,aQ1

var xq4 = FB0(),
  nQ1 = new WeakMap(),
  JB0 = (A, B = {}) => {
    if (typeof A !== 'function') throw new TypeError('Expected a function');
    let Q,
      I = 0,
      G = A.displayName || A.name || '<anonymous>',
      D = function (...Z) {
        if ((nQ1.set(D, ++I), I === 1)) ((Q = A.apply(this, Z)), (A = null));
        else if (B.throw === !0) throw new Error(`Function \`${G}\` can only be called once`);
        return Q;
      };
    return (xq4(D, A), nQ1.set(D, I), D);
  };
aQ1.exports = JB0;
aQ1.exports.default = JB0;
aQ1.exports.callCount = (A) => {
  if (!nQ1.has(A))
    throw new Error(`The given function \`${A.name}\` is not wrapped by the \`onetime\` package`);
  return nQ1.get(A);
};
