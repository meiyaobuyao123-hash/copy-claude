// Module: y1A
// Params: j1A

Object.defineProperty(j1A, '__esModule', { value: !0 });
var JO2 = Bw1(),
  _1A = fG();
function CO2() {
  return typeof window !== 'undefined' && (!JO2.isNodeEnv() || XO2());
}
function XO2() {
  return _1A.GLOBAL_OBJ.process !== void 0 && _1A.GLOBAL_OBJ.process.type === 'renderer';
}
j1A.isBrowser = CO2;
