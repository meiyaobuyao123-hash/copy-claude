// Module: MP
// Params: Qp5,BaA

var { defineProperty: $B1, getOwnPropertyDescriptor: d34, getOwnPropertyNames: u34 } = Object,
  p34 = Object.prototype.hasOwnProperty,
  c34 = (A, B) => $B1(A, 'name', { value: B, configurable: !0 }),
  l34 = (A, B) => {
    for (var Q in B) $B1(A, Q, { get: B[Q], enumerable: !0 });
  },
  i34 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of u34(B))
        if (!p34.call(A, G) && G !== Q)
          $B1(A, G, { get: () => B[G], enumerable: !(I = d34(B, G)) || I.enumerable });
    }
    return A;
  },
  n34 = (A) => i34($B1({}, '__esModule', { value: !0 }), A),
  AaA = {};
l34(AaA, { calculateBodyLength: () => a34 });
BaA.exports = n34(AaA);
var enA = D1('fs'),
  a34 = c34((A) => {
    if (!A) return 0;
    if (typeof A === 'string') return Buffer.byteLength(A);
    else if (typeof A.byteLength === 'number') return A.byteLength;
    else if (typeof A.size === 'number') return A.size;
    else if (typeof A.start === 'number' && typeof A.end === 'number') return A.end + 1 - A.start;
    else if (typeof A.path === 'string' || Buffer.isBuffer(A.path))
      return enA.lstatSync(A.path).size;
    else if (typeof A.fd === 'number') return enA.fstatSync(A.fd).size;
    throw new Error(`Body Length computation failed for ${A}`);
  }, 'calculateBodyLength');
