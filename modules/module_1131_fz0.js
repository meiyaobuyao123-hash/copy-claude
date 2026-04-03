// Module: fz0
// Params: sW8,xz0

var { defineProperty: zD1, getOwnPropertyDescriptor: zu4, getOwnPropertyNames: wu4 } = Object,
  Eu4 = Object.prototype.hasOwnProperty,
  Uu4 = (A, B) => zD1(A, 'name', { value: B, configurable: !0 }),
  Nu4 = (A, B) => {
    for (var Q in B) zD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  $u4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of wu4(B))
        if (!Eu4.call(A, G) && G !== Q)
          zD1(A, G, { get: () => B[G], enumerable: !(I = zu4(B, G)) || I.enumerable });
    }
    return A;
  },
  qu4 = (A) => $u4(zD1({}, '__esModule', { value: !0 }), A),
  kz0 = {};
Nu4(kz0, { isArrayBuffer: () => Mu4 });
xz0.exports = qu4(kz0);
var Mu4 = Uu4(
  (A) =>
    (typeof ArrayBuffer === 'function' && A instanceof ArrayBuffer) ||
    Object.prototype.toString.call(A) === '[object ArrayBuffer]',
  'isArrayBuffer'
);
