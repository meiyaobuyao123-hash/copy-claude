// Module: MA2
// Params: $A2

Object.defineProperty($A2, '__esModule', { value: !0 });
$A2.validateValue = $A2.validateKey = void 0;
var Sc1 = '[_0-9a-z-*/]',
  Qk6 = `[a-z]${Sc1}{0,255}`,
  Ik6 = `[a-z0-9]${Sc1}{0,240}@[a-z]${Sc1}{0,13}`,
  Gk6 = new RegExp(`^(?:${Qk6}|${Ik6})$`),
  Dk6 = /^[ -~]{0,255}[!-~]$/,
  Zk6 = /,|=/;
function Yk6(A) {
  return Gk6.test(A);
}
$A2.validateKey = Yk6;
function Wk6(A) {
  return Dk6.test(A) && !Zk6.test(A);
}
$A2.validateValue = Wk6;
