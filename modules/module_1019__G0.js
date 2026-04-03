// Module: _G0
// Params: II8,SG0

var vT4 = pJ(),
  bT4 = (A, B) =>
    new vT4(A, B).set.map((Q) =>
      Q.map((I) => I.value)
        .join(' ')
        .trim()
        .split(' ')
    );
SG0.exports = bT4;
