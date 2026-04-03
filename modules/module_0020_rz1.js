// Module: rz1
// Params: H1A

Object.defineProperty(H1A, '__esModule', { value: !0 });
var TR2 = fG(),
  ZA1 = TR2.getGlobalObject();
function PR2() {
  let A = ZA1.chrome,
    B = A && A.app && A.app.runtime,
    Q = 'history' in ZA1 && !!ZA1.history.pushState && !!ZA1.history.replaceState;
  return !B && Q;
}
H1A.supportsHistory = PR2;
