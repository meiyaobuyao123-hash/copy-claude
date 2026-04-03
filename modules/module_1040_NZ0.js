// Module: NZ0
// Params: EG8,UZ0

var kx1 = D1('fs'),
  Y_4 = EZ0();
function W_4(A) {
  let Q = Buffer.alloc(150),
    I;
  try {
    ((I = kx1.openSync(A, 'r')), kx1.readSync(I, Q, 0, 150, 0), kx1.closeSync(I));
  } catch (G) {}
  return Y_4(Q.toString());
}
UZ0.exports = W_4;
