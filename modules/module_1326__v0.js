// Module: _v0
// Params: EK8,Sv0

var XZ6 = D1('node:assert'),
  { URLSerializer: Pv0 } = $Y(),
  { isValidHeaderName: VZ6 } = GF();
function KZ6(A, B, Q = !1) {
  let I = Pv0(A, Q),
    G = Pv0(B, Q);
  return I === G;
}
function HZ6(A) {
  XZ6(A !== null);
  let B = [];
  for (let Q of A.split(',')) if (((Q = Q.trim()), VZ6(Q))) B.push(Q);
  return B;
}
Sv0.exports = { urlEquals: KZ6, getFieldValues: HZ6 };
