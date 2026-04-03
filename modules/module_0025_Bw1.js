// Module: Bw1
// Params: S1A,VA1

Object.defineProperty(S1A, '__esModule', { value: !0 });
var GO2 = Aw1();
function DO2() {
  return (
    !GO2.isBrowserBundle() &&
    Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) ===
      '[object process]'
  );
}
function XA1(A, B) {
  return A.require(B);
}
function ZO2(A) {
  let B;
  try {
    B = XA1(VA1, A);
  } catch (Q) {}
  try {
    let { cwd: Q } = XA1(VA1, 'process');
    B = XA1(VA1, `${Q()}/node_modules/${A}`);
  } catch (Q) {}
  return B;
}
S1A.dynamicRequire = XA1;
S1A.isNodeEnv = DO2;
S1A.loadModule = ZO2;
