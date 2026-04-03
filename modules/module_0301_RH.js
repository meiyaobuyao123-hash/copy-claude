// Module: RH
// Params: WJA

Object.defineProperty(WJA, '__esModule', { value: !0 });
WJA.mergeMap = void 0;
var WW9 = dE(),
  FW9 = j4(),
  JW9 = w2(),
  CW9 = L91(),
  XW9 = l5();
function YJA(A, B, Q) {
  if (Q === void 0) Q = 1 / 0;
  if (XW9.isFunction(B))
    return YJA(function (I, G) {
      return WW9.map(function (D, Z) {
        return B(I, D, G, Z);
      })(FW9.innerFrom(A(I, G)));
    }, Q);
  else if (typeof B === 'number') Q = B;
  return JW9.operate(function (I, G) {
    return CW9.mergeInternals(I, G, A, Q);
  });
}
WJA.mergeMap = YJA;
