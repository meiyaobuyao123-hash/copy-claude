// Module: jA0
// Params: yc5,V31

var { defineProperty: SA0, getOwnPropertyDescriptor: wX4, getOwnPropertyNames: EX4 } = Object,
  UX4 = Object.prototype.hasOwnProperty,
  k_1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of EX4(B))
        if (!UX4.call(A, G) && G !== Q)
          SA0(A, G, { get: () => B[G], enumerable: !(I = wX4(B, G)) || I.enumerable });
    }
    return A;
  },
  _A0 = (A, B, Q) => (k_1(A, B, 'default'), Q && k_1(Q, B, 'default')),
  NX4 = (A) => k_1(SA0({}, '__esModule', { value: !0 }), A),
  x_1 = {};
V31.exports = NX4(x_1);
_A0(x_1, RA0(), V31.exports);
_A0(x_1, PA0(), V31.exports);
