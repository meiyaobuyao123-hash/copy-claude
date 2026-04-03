// Module: WW1
// Params: BK8,ox0

var ax0 = Symbol.for('undici.globalDispatcher.1'),
  { InvalidArgumentError: eI6 } = y5(),
  AG6 = eg();
if (rx0() === void 0) sx0(new AG6());
function sx0(A) {
  if (!A || typeof A.dispatch !== 'function') throw new eI6('Argument agent must implement Agent');
  Object.defineProperty(globalThis, ax0, {
    value: A,
    writable: !0,
    enumerable: !1,
    configurable: !1,
  });
}
function rx0() {
  return globalThis[ax0];
}
ox0.exports = { setGlobalDispatcher: sx0, getGlobalDispatcher: rx0 };
