// Module: baA
// Params: Xp5,TB1

var { defineProperty: faA, getOwnPropertyDescriptor: M74, getOwnPropertyNames: L74 } = Object,
  R74 = Object.prototype.hasOwnProperty,
  cP1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of L74(B))
        if (!R74.call(A, G) && G !== Q)
          faA(A, G, { get: () => B[G], enumerable: !(I = M74(B, G)) || I.enumerable });
    }
    return A;
  },
  vaA = (A, B, Q) => (cP1(A, B, 'default'), Q && cP1(Q, B, 'default')),
  O74 = (A) => cP1(faA({}, '__esModule', { value: !0 }), A),
  lP1 = {};
TB1.exports = O74(lP1);
vaA(lP1, jaA(), TB1.exports);
vaA(lP1, xaA(), TB1.exports);
