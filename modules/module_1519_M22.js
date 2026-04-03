// Module: M22
// Params: $22

Object.defineProperty($22, '__esModule', { value: !0 });
$22.identity = $22.isPromiseLike = void 0;
var vx6 = (A) => {
  return A !== null && typeof A === 'object' && typeof A.then === 'function';
};
$22.isPromiseLike = vx6;
function bx6(A) {
  return A;
}
$22.identity = bx6;
