// Module: IxA
// Params: vh5,QxA

var { defineProperty: E51, getOwnPropertyDescriptor: sp9, getOwnPropertyNames: rp9 } = Object,
  op9 = Object.prototype.hasOwnProperty,
  tp9 = (A, B) => E51(A, 'name', { value: B, configurable: !0 }),
  ep9 = (A, B) => {
    for (var Q in B) E51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ac9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of rp9(B))
        if (!op9.call(A, G) && G !== Q)
          E51(A, G, { get: () => B[G], enumerable: !(I = sp9(B, G)) || I.enumerable });
    }
    return A;
  },
  Bc9 = (A) => Ac9(E51({}, '__esModule', { value: !0 }), A),
  BxA = {};
ep9(BxA, { isArrayBuffer: () => Qc9 });
QxA.exports = Bc9(BxA);
var Qc9 = tp9(
  (A) =>
    (typeof ArrayBuffer === 'function' && A instanceof ArrayBuffer) ||
    Object.prototype.toString.call(A) === '[object ArrayBuffer]',
  'isArrayBuffer'
);
