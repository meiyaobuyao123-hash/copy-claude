// Module: sM1
// Params: Ty5,EOA

EOA.exports = xx9;
function xx9(A, B) {
  var Q = !Array.isArray(A),
    I = {
      index: 0,
      keyedList: Q || B ? Object.keys(A) : null,
      jobs: {},
      results: Q ? {} : [],
      size: Q ? Object.keys(A).length : A.length,
    };
  if (B)
    I.keyedList.sort(
      Q
        ? B
        : function (G, D) {
            return B(A[G], A[D]);
          }
    );
  return I;
}
