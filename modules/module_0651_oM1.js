// Module: oM1
// Params: _y5,c41

var qOA = aM1(),
  ux9 = sM1(),
  px9 = rM1();
c41.exports = cx9;
c41.exports.ascending = MOA;
c41.exports.descending = lx9;
function cx9(A, B, Q, I) {
  var G = ux9(A, Q);
  return (
    qOA(A, B, G, function D(Z, Y) {
      if (Z) {
        I(Z, Y);
        return;
      }
      if ((G.index++, G.index < (G.keyedList || A).length)) {
        qOA(A, B, G, D);
        return;
      }
      I(null, G.results);
    }),
    px9.bind(G, I)
  );
}
function MOA(A, B) {
  return A < B ? -1 : A > B ? 1 : 0;
}
function lx9(A, B) {
  return -1 * MOA(A, B);
}
