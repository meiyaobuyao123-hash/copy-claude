// Module: Hc1
// Params: el0

Object.defineProperty(el0, '__esModule', { value: !0 });
el0.getSignificand =
  el0.getNormalBase2 =
  el0.MIN_VALUE =
  el0.MAX_NORMAL_EXPONENT =
  el0.MIN_NORMAL_EXPONENT =
  el0.SIGNIFICAND_WIDTH =
    void 0;
el0.SIGNIFICAND_WIDTH = 52;
var hN6 = 2146435072,
  mN6 = 1048575,
  Kc1 = 1023;
el0.MIN_NORMAL_EXPONENT = -Kc1 + 1;
el0.MAX_NORMAL_EXPONENT = Kc1;
el0.MIN_VALUE = Math.pow(2, -1022);
function dN6(A) {
  let B = new DataView(new ArrayBuffer(8));
  return (B.setFloat64(0, A), ((B.getUint32(0) & hN6) >> 20) - Kc1);
}
el0.getNormalBase2 = dN6;
function uN6(A) {
  let B = new DataView(new ArrayBuffer(8));
  B.setFloat64(0, A);
  let Q = B.getUint32(0),
    I = B.getUint32(4);
  return (Q & mN6) * Math.pow(2, 32) + I;
}
el0.getSignificand = uN6;
