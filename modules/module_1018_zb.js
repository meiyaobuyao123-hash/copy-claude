// Module: zb
// Params: QI8,PG0

var xT4 = pJ(),
  fT4 = (A, B, Q) => {
    try {
      B = new xT4(B, Q);
    } catch (I) {
      return !1;
    }
    return B.test(A);
  };
PG0.exports = fT4;
