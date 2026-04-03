// Module: np
// Params: lZA

Object.defineProperty(lZA, '__esModule', { value: !0 });
lZA.pipeFromArray = lZA.pipe = void 0;
var _I9 = lI();
function jI9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  return cZA(A);
}
lZA.pipe = jI9;
function cZA(A) {
  if (A.length === 0) return _I9.identity;
  if (A.length === 1) return A[0];
  return function B(Q) {
    return A.reduce(function (I, G) {
      return G(I);
    }, Q);
  };
}
lZA.pipeFromArray = cZA;
