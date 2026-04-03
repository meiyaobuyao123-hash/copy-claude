// Module: Ym1
// Params: HV8,d_0

var Zm1 = Symbol.for('undici.globalOrigin.1');
function N56() {
  return globalThis[Zm1];
}
function $56(A) {
  if (A === void 0) {
    Object.defineProperty(globalThis, Zm1, {
      value: void 0,
      writable: !0,
      enumerable: !1,
      configurable: !1,
    });
    return;
  }
  let B = new URL(A);
  if (B.protocol !== 'http:' && B.protocol !== 'https:')
    throw new TypeError(`Only http & https urls are allowed, received ${B.protocol}`);
  Object.defineProperty(globalThis, Zm1, {
    value: B,
    writable: !0,
    enumerable: !1,
    configurable: !1,
  });
}
d_0.exports = { getGlobalOrigin: N56, setGlobalOrigin: $56 };
