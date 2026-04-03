// Module: lJ1
// Params: K32

Object.defineProperty(K32, '__esModule', { value: !0 });
K32.getErrorMessage = tm6;
K32.getErrorCode = em6;
function tm6(A) {
  if (A instanceof Error) return A.message;
  else return String(A);
}
function em6(A) {
  if (typeof A === 'object' && A !== null && 'code' in A && typeof A.code === 'number')
    return A.code;
  else return null;
}
