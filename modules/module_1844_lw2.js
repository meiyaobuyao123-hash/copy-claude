// Module: lw2
// Params: ps8,At1

var XB5 = hw2(),
  VB5 = dw2(),
  KB5 = pw2(),
  cw2 = (A) => {
    if (typeof A !== 'string' || A.length === 0) return 0;
    if (((A = XB5(A)), A.length === 0)) return 0;
    A = A.replace(KB5(), '  ');
    let B = 0;
    for (let Q = 0; Q < A.length; Q++) {
      let I = A.codePointAt(Q);
      if (I <= 31 || (I >= 127 && I <= 159)) continue;
      if (I >= 768 && I <= 879) continue;
      if (I > 65535) Q++;
      B += VB5(I) ? 2 : 1;
    }
    return B;
  };
At1.exports = cw2;
At1.exports.default = cw2;
