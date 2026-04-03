// Module: DB2
// Params: IB2

Object.defineProperty(IB2, '__esModule', { value: !0 });
IB2.parseRetryAfterToMills = IB2.isExportRetryable = void 0;
function Eh6(A) {
  return [429, 502, 503, 504].includes(A);
}
IB2.isExportRetryable = Eh6;
function Uh6(A) {
  if (A == null) return;
  let B = Number.parseInt(A, 10);
  if (Number.isInteger(B)) return B > 0 ? B * 1000 : -1;
  let Q = new Date(A).getTime() - Date.now();
  if (Q >= 0) return Q;
  return 0;
}
IB2.parseRetryAfterToMills = Uh6;
