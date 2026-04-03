// Module: AL1
// Params: ty5,FTA

FTA.exports = function A() {
  if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') return !1;
  if (typeof Symbol.iterator === 'symbol') return !0;
  var B = {},
    Q = Symbol('test'),
    I = Object(Q);
  if (typeof Q === 'string') return !1;
  if (Object.prototype.toString.call(Q) !== '[object Symbol]') return !1;
  if (Object.prototype.toString.call(I) !== '[object Symbol]') return !1;
  var G = 42;
  B[Q] = G;
  for (var D in B) return !1;
  if (typeof Object.keys === 'function' && Object.keys(B).length !== 0) return !1;
  if (
    typeof Object.getOwnPropertyNames === 'function' &&
    Object.getOwnPropertyNames(B).length !== 0
  )
    return !1;
  var Z = Object.getOwnPropertySymbols(B);
  if (Z.length !== 1 || Z[0] !== Q) return !1;
  if (!Object.prototype.propertyIsEnumerable.call(B, Q)) return !1;
  if (typeof Object.getOwnPropertyDescriptor === 'function') {
    var Y = Object.getOwnPropertyDescriptor(B, Q);
    if (Y.value !== G || Y.enumerable !== !0) return !1;
  }
  return !0;
};
