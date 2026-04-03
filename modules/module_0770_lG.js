// Module: lG
// Params: bh5,ZxA

var { defineProperty: U51, getOwnPropertyDescriptor: Ic9, getOwnPropertyNames: Gc9 } = Object,
  Dc9 = Object.prototype.hasOwnProperty,
  GxA = (A, B) => U51(A, 'name', { value: B, configurable: !0 }),
  Zc9 = (A, B) => {
    for (var Q in B) U51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Yc9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Gc9(B))
        if (!Dc9.call(A, G) && G !== Q)
          U51(A, G, { get: () => B[G], enumerable: !(I = Ic9(B, G)) || I.enumerable });
    }
    return A;
  },
  Wc9 = (A) => Yc9(U51({}, '__esModule', { value: !0 }), A),
  DxA = {};
Zc9(DxA, { fromArrayBuffer: () => Jc9, fromString: () => Cc9 });
ZxA.exports = Wc9(DxA);
var Fc9 = IxA(),
  GO1 = D1('buffer'),
  Jc9 = GxA((A, B = 0, Q = A.byteLength - B) => {
    if (!Fc9.isArrayBuffer(A))
      throw new TypeError(
        `The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`
      );
    return GO1.Buffer.from(A, B, Q);
  }, 'fromArrayBuffer'),
  Cc9 = GxA((A, B) => {
    if (typeof A !== 'string')
      throw new TypeError(
        `The "input" argument must be of type string. Received type ${typeof A} (${A})`
      );
    return B ? GO1.Buffer.from(A, B) : GO1.Buffer.from(A);
  }, 'fromString');
