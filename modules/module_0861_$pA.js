// Module: $pA
// Params: UpA

Object.defineProperty(UpA, '__esModule', { value: !0 });
UpA.default = void 0;
var U94 = N94(D1('crypto'));
function N94(A) {
  return A && A.__esModule ? A : { default: A };
}
function $94(A) {
  if (Array.isArray(A)) A = Buffer.from(A);
  else if (typeof A === 'string') A = Buffer.from(A, 'utf8');
  return U94.default.createHash('md5').update(A).digest();
}
var q94 = $94;
UpA.default = q94;
