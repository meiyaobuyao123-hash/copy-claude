// Module: lA2
// Params: pA2

Object.defineProperty(pA2, '__esModule', { value: !0 });
pA2.isPlainObject = void 0;
var Tk6 = '[object Object]',
  Pk6 = '[object Null]',
  Sk6 = '[object Undefined]',
  _k6 = Function.prototype,
  hA2 = _k6.toString,
  jk6 = hA2.call(Object),
  yk6 = Object.getPrototypeOf,
  mA2 = Object.prototype,
  dA2 = mA2.hasOwnProperty,
  z_ = Symbol ? Symbol.toStringTag : void 0,
  uA2 = mA2.toString;
function kk6(A) {
  if (!xk6(A) || fk6(A) !== Tk6) return !1;
  let B = yk6(A);
  if (B === null) return !0;
  let Q = dA2.call(B, 'constructor') && B.constructor;
  return typeof Q == 'function' && Q instanceof Q && hA2.call(Q) === jk6;
}
pA2.isPlainObject = kk6;
function xk6(A) {
  return A != null && typeof A == 'object';
}
function fk6(A) {
  if (A == null) return A === void 0 ? Sk6 : Pk6;
  return z_ && z_ in Object(A) ? vk6(A) : bk6(A);
}
function vk6(A) {
  let B = dA2.call(A, z_),
    Q = A[z_],
    I = !1;
  try {
    ((A[z_] = void 0), (I = !0));
  } catch (D) {}
  let G = uA2.call(A);
  if (I)
    if (B) A[z_] = Q;
    else delete A[z_];
  return G;
}
function bk6(A) {
  return uA2.call(A);
}
