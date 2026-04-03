// Module: IY
// Params: JWA

Object.defineProperty(JWA, '__esModule', { value: !0 });
JWA.popNumber = JWA.popScheduler = JWA.popResultSelector = void 0;
var ED9 = l5(),
  UD9 = sp();
function ON1(A) {
  return A[A.length - 1];
}
function ND9(A) {
  return ED9.isFunction(ON1(A)) ? A.pop() : void 0;
}
JWA.popResultSelector = ND9;
function $D9(A) {
  return UD9.isScheduler(ON1(A)) ? A.pop() : void 0;
}
JWA.popScheduler = $D9;
function qD9(A, B) {
  return typeof ON1(A) === 'number' ? A.pop() : B;
}
JWA.popNumber = qD9;
