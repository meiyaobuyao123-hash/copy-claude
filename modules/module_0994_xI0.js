// Module: xI0
// Params: y78,kI0

var MO4 = WS(),
  LO4 = (A, B) => {
    let Q = MO4(A.trim().replace(/^[=v]+/, ''), B);
    return Q ? Q.version : null;
  };
kI0.exports = LO4;
