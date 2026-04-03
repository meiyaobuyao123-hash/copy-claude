// Module: jN1
// Params: MWA

Object.defineProperty(MWA, '__esModule', { value: !0 });
MWA.iterator = MWA.getSymbolIterator = void 0;
function qWA() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) return '@@iterator';
  return Symbol.iterator;
}
MWA.getSymbolIterator = qWA;
MWA.iterator = qWA();
