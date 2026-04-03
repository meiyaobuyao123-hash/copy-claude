// Module: OU0
// Params: HF8,RU0

var { defineProperty: bD1, getOwnPropertyDescriptor: $l4, getOwnPropertyNames: ql4 } = Object,
  Ml4 = Object.prototype.hasOwnProperty,
  Ll4 = (A, B) => bD1(A, 'name', { value: B, configurable: !0 }),
  Rl4 = (A, B) => {
    for (var Q in B) bD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ol4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of ql4(B))
        if (!Ml4.call(A, G) && G !== Q)
          bD1(A, G, { get: () => B[G], enumerable: !(I = $l4(B, G)) || I.enumerable });
    }
    return A;
  },
  Tl4 = (A) => Ol4(bD1({}, '__esModule', { value: !0 }), A),
  LU0 = {};
Rl4(LU0, { isArrayBuffer: () => Pl4 });
RU0.exports = Tl4(LU0);
var Pl4 = Ll4(
  (A) =>
    (typeof ArrayBuffer === 'function' && A instanceof ArrayBuffer) ||
    Object.prototype.toString.call(A) === '[object ArrayBuffer]',
  'isArrayBuffer'
);
