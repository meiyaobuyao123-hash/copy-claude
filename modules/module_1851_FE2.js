// Module: FE2
// Params: rs8,WE2

WE2.exports = function (A) {
  return function (B, Q, I) {
    if (B === ' ') return B;
    switch (Q % 3) {
      case 0:
        return A.red(B);
      case 1:
        return A.white(B);
      case 2:
        return A.blue(B);
    }
  };
};
