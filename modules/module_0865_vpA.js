// Module: vpA
// Params: xpA

Object.defineProperty(xpA, '__esModule', { value: !0 });
xpA.default = void 0;
var x94 = f94(D1('crypto'));
function f94(A) {
  return A && A.__esModule ? A : { default: A };
}
function v94(A) {
  if (Array.isArray(A)) A = Buffer.from(A);
  else if (typeof A === 'string') A = Buffer.from(A, 'utf8');
  return x94.default.createHash('sha1').update(A).digest();
}
var b94 = v94;
xpA.default = b94;
