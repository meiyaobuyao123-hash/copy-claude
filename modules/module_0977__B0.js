// Module: _B0
// Params: xo5,SB0

var dq4 = /[|\\{}()[\]^$+*?.-]/g;
SB0.exports = (A) => {
  if (typeof A !== 'string') throw new TypeError('Expected a string');
  return A.replace(dq4, '\\$&');
};
