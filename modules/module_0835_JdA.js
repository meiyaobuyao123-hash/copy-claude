// Module: JdA
// Params: Od5,FdA

var { defineProperty: q81, getOwnPropertyDescriptor: T14, getOwnPropertyNames: P14 } = Object,
  S14 = Object.prototype.hasOwnProperty,
  ZdA = (A, B) => q81(A, 'name', { value: B, configurable: !0 }),
  _14 = (A, B) => {
    for (var Q in B) q81(A, Q, { get: B[Q], enumerable: !0 });
  },
  j14 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of P14(B))
        if (!S14.call(A, G) && G !== Q)
          q81(A, G, { get: () => B[G], enumerable: !(I = T14(B, G)) || I.enumerable });
    }
    return A;
  },
  y14 = (A) => j14(q81({}, '__esModule', { value: !0 }), A),
  YdA = {};
_14(YdA, { SelectorType: () => WdA, booleanSelector: () => k14, numberSelector: () => x14 });
FdA.exports = y14(YdA);
var k14 = ZdA((A, B, Q) => {
    if (!(B in A)) return;
    if (A[B] === 'true') return !0;
    if (A[B] === 'false') return !1;
    throw new Error(`Cannot load ${Q} "${B}". Expected "true" or "false", got ${A[B]}.`);
  }, 'booleanSelector'),
  x14 = ZdA((A, B, Q) => {
    if (!(B in A)) return;
    let I = parseInt(A[B], 10);
    if (Number.isNaN(I))
      throw new TypeError(`Cannot load ${Q} '${B}'. Expected number, got '${A[B]}'.`);
    return I;
  }, 'numberSelector'),
  WdA = ((A) => {
    return ((A.ENV = 'env'), (A.CONFIG = 'shared config entry'), A);
  })(WdA || {});
