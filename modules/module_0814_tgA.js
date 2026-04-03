// Module: tgA
// Params: sm5,ogA

var { defineProperty: I81, getOwnPropertyDescriptor: Jr9, getOwnPropertyNames: Cr9 } = Object,
  Xr9 = Object.prototype.hasOwnProperty,
  Vr9 = (A, B) => I81(A, 'name', { value: B, configurable: !0 }),
  Kr9 = (A, B) => {
    for (var Q in B) I81(A, Q, { get: B[Q], enumerable: !0 });
  },
  Hr9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Cr9(B))
        if (!Xr9.call(A, G) && G !== Q)
          I81(A, G, { get: () => B[G], enumerable: !(I = Jr9(B, G)) || I.enumerable });
    }
    return A;
  },
  zr9 = (A) => Hr9(I81({}, '__esModule', { value: !0 }), A),
  rgA = {};
Kr9(rgA, { isArrayBuffer: () => wr9 });
ogA.exports = zr9(rgA);
var wr9 = Vr9(
  (A) =>
    (typeof ArrayBuffer === 'function' && A instanceof ArrayBuffer) ||
    Object.prototype.toString.call(A) === '[object ArrayBuffer]',
  'isArrayBuffer'
);
