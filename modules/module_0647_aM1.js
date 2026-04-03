// Module: aM1
// Params: Oy5,wOA

var zOA = iM1(),
  jx9 = nM1();
wOA.exports = yx9;
function yx9(A, B, Q, I) {
  var G = Q.keyedList ? Q.keyedList[Q.index] : Q.index;
  Q.jobs[G] = kx9(B, G, A[G], function (D, Z) {
    if (!(G in Q.jobs)) return;
    if ((delete Q.jobs[G], D)) jx9(Q);
    else Q.results[G] = Z;
    I(D, Q.results);
  });
}
function kx9(A, B, Q, I) {
  var G;
  if (A.length == 2) G = A(Q, zOA(I));
  else G = A(Q, B, zOA(I));
  return G;
}
