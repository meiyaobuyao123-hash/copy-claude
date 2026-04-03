// Module: Q$0
// Params: oF8,eD1

var { defineProperty: A$0, getOwnPropertyDescriptor: va4, getOwnPropertyNames: ba4 } = Object,
  ga4 = Object.prototype.hasOwnProperty,
  zb1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of ba4(B))
        if (!ga4.call(A, G) && G !== Q)
          A$0(A, G, { get: () => B[G], enumerable: !(I = va4(B, G)) || I.enumerable });
    }
    return A;
  },
  B$0 = (A, B, Q) => (zb1(A, B, 'default'), Q && zb1(Q, B, 'default')),
  ha4 = (A) => zb1(A$0({}, '__esModule', { value: !0 }), A),
  wb1 = {};
eD1.exports = ha4(wb1);
B$0(wb1, rN0(), eD1.exports);
B$0(wb1, eN0(), eD1.exports);
