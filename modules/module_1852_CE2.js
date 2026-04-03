// Module: CE2
// Params: os8,JE2

JE2.exports = function (A) {
  return function (B, Q, I) {
    return Q % 2 === 0 ? B : A.inverse(B);
  };
};
