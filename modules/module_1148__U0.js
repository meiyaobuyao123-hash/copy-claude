// Module: _U0
// Params: zF8,SU0

var { defineProperty: gD1, getOwnPropertyDescriptor: Sl4, getOwnPropertyNames: _l4 } = Object,
  jl4 = Object.prototype.hasOwnProperty,
  TU0 = (A, B) => gD1(A, 'name', { value: B, configurable: !0 }),
  yl4 = (A, B) => {
    for (var Q in B) gD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  kl4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of _l4(B))
        if (!jl4.call(A, G) && G !== Q)
          gD1(A, G, { get: () => B[G], enumerable: !(I = Sl4(B, G)) || I.enumerable });
    }
    return A;
  },
  xl4 = (A) => kl4(gD1({}, '__esModule', { value: !0 }), A),
  PU0 = {};
yl4(PU0, { fromArrayBuffer: () => vl4, fromString: () => bl4 });
SU0.exports = xl4(PU0);
var fl4 = OU0(),
  sv1 = D1('buffer'),
  vl4 = TU0((A, B = 0, Q = A.byteLength - B) => {
    if (!fl4.isArrayBuffer(A))
      throw new TypeError(
        `The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`
      );
    return sv1.Buffer.from(A, B, Q);
  }, 'fromArrayBuffer'),
  bl4 = TU0((A, B) => {
    if (typeof A !== 'string')
      throw new TypeError(
        `The "input" argument must be of type string. Received type ${typeof A} (${A})`
      );
    return B ? sv1.Buffer.from(A, B) : sv1.Buffer.from(A);
  }, 'fromString');
