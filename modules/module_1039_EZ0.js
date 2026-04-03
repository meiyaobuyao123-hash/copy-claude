// Module: EZ0
// Params: wG8,wZ0

var Z_4 = zZ0();
wZ0.exports = (A = '') => {
  let B = A.match(Z_4);
  if (!B) return null;
  let [Q, I] = B[0].replace(/#! ?/, '').split(' '),
    G = Q.split('/').pop();
  if (G === 'env') return I;
  return I ? `${G} ${I}` : G;
};
