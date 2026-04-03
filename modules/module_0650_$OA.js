// Module: $OA
// Params: Sy5,NOA

var gx9 = aM1(),
  hx9 = sM1(),
  mx9 = rM1();
NOA.exports = dx9;
function dx9(A, B, Q) {
  var I = hx9(A);
  while (I.index < (I.keyedList || A).length)
    (gx9(A, B, I, function (G, D) {
      if (G) {
        Q(G, D);
        return;
      }
      if (Object.keys(I.jobs).length === 0) {
        Q(null, I.results);
        return;
      }
    }),
      I.index++);
  return mx9.bind(I, Q);
}
