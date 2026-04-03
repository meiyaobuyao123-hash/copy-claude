// Module: l6A
// Params: c6A

Object.defineProperty(c6A, '__esModule', { value: !0 });
function nl2(A) {
  return typeof A === 'number' && isFinite(A);
}
function al2(A, { startTimestamp: B, ...Q }) {
  if (B && A.startTimestamp > B) A.startTimestamp = B;
  return A.startChild({ startTimestamp: B, ...Q });
}
c6A._startChild = al2;
c6A.isMeasurementValue = nl2;
