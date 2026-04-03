// Module: l$1
// Params: mVA

Object.defineProperty(mVA, '__esModule', { value: !0 });
mVA.pluck = void 0;
var NK9 = dE();
function $K9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = A.length;
  if (Q === 0) throw new Error('list of properties cannot be empty.');
  return NK9.map(function (I) {
    var G = I;
    for (var D = 0; D < Q; D++) {
      var Z = G === null || G === void 0 ? void 0 : G[A[D]];
      if (typeof Z !== 'undefined') G = Z;
      else return;
    }
    return G;
  });
}
mVA.pluck = $K9;
