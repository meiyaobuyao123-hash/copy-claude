// Module: oTA
// Params: Hk5,rTA

rTA.exports = function (A, B) {
  return (
    Object.keys(B).forEach(function (Q) {
      A[Q] = A[Q] || B[Q];
    }),
    A
  );
};
