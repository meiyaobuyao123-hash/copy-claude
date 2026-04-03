// Module: Qc
// Params: iO5,nHA

nHA.exports = (A, B = process.argv) => {
  let Q = A.startsWith('-') ? '' : A.length === 1 ? '-' : '--',
    I = B.indexOf(Q + A),
    G = B.indexOf('--');
  return I !== -1 && (G === -1 || I < G);
};
