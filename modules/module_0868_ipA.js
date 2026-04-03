// Module: ipA
// Params: cpA

Object.defineProperty(cpA, '__esModule', { value: !0 });
cpA.default = void 0;
var p94 = c94(Sl());
function c94(A) {
  return A && A.__esModule ? A : { default: A };
}
function l94(A) {
  if (!p94.default(A)) throw TypeError('Invalid UUID');
  return parseInt(A.slice(14, 15), 16);
}
var i94 = l94;
cpA.default = i94;
