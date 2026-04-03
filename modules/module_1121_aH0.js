// Module: aH0
// Params: hW8,nH0

var { defineProperty: ZD1, getOwnPropertyDescriptor: Gd4, getOwnPropertyNames: Dd4 } = Object,
  Zd4 = Object.prototype.hasOwnProperty,
  Yd4 = (A, B) => ZD1(A, 'name', { value: B, configurable: !0 }),
  Wd4 = (A, B) => {
    for (var Q in B) ZD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Fd4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Dd4(B))
        if (!Zd4.call(A, G) && G !== Q)
          ZD1(A, G, { get: () => B[G], enumerable: !(I = Gd4(B, G)) || I.enumerable });
    }
    return A;
  },
  Jd4 = (A) => Fd4(ZD1({}, '__esModule', { value: !0 }), A),
  iH0 = {};
Wd4(iH0, { isArrayBuffer: () => Cd4 });
nH0.exports = Jd4(iH0);
var Cd4 = Yd4(
  (A) =>
    (typeof ArrayBuffer === 'function' && A instanceof ArrayBuffer) ||
    Object.prototype.toString.call(A) === '[object ArrayBuffer]',
  'isArrayBuffer'
);
