// Module: hHA
// Params: bHA

Object.defineProperty(bHA, '__esModule', { value: !0 });
bHA.partition = void 0;
var _N9 = oN1(),
  vHA = uE();
function jN9(A, B) {
  return function (Q) {
    return [vHA.filter(A, B)(Q), vHA.filter(_N9.not(A, B))(Q)];
  };
}
bHA.partition = jN9;
