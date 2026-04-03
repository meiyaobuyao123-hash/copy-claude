// Module: jc0
// Params: Sc0

Object.defineProperty(Sc0, '__esModule', { value: !0 });
Sc0.validateValue = Sc0.validateKey = void 0;
var ap1 = '[_0-9a-z-*/]',
  NU6 = `[a-z]${ap1}{0,255}`,
  $U6 = `[a-z0-9]${ap1}{0,240}@[a-z]${ap1}{0,13}`,
  qU6 = new RegExp(`^(?:${NU6}|${$U6})$`),
  MU6 = /^[ -~]{0,255}[!-~]$/,
  LU6 = /,|=/;
function RU6(A) {
  return qU6.test(A);
}
Sc0.validateKey = RU6;
function OU6(A) {
  return MU6.test(A) && !LU6.test(A);
}
Sc0.validateValue = OU6;
