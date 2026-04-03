// Module: ST1
// Params: ApA

Object.defineProperty(ApA, '__esModule', { value: !0 });
ApA.default = l24;
var p24 = c24(D1('crypto'));
function c24(A) {
  return A && A.__esModule ? A : { default: A };
}
var p81 = new Uint8Array(256),
  u81 = p81.length;
function l24() {
  if (u81 > p81.length - 16) (p24.default.randomFillSync(p81), (u81 = 0));
  return p81.slice(u81, (u81 += 16));
}
