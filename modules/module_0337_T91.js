// Module: T91
// Params: uCA

Object.defineProperty(uCA, '__esModule', { value: !0 });
uCA.toArray = void 0;
var cJ9 = PT(),
  lJ9 = w2(),
  iJ9 = function (A, B) {
    return (A.push(B), A);
  };
function nJ9() {
  return lJ9.operate(function (A, B) {
    cJ9.reduce(iJ9, [])(A).subscribe(B);
  });
}
uCA.toArray = nJ9;
