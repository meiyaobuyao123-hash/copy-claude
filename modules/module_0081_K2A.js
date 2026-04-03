// Module: K2A
// Params: V2A

Object.defineProperty(V2A, '__esModule', { value: !0 });
var Qb2 = _A1();
function Ib2(A, B, Q) {
  let I = Qb2.getActiveTransaction();
  if (I) I.setMeasurement(A, B, Q);
}
V2A.setMeasurement = Ib2;
