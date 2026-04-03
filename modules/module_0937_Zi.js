// Module: Zi
// Params: Nc5,Z31

var { defineProperty: x10, getOwnPropertyDescriptor: JJ4, getOwnPropertyNames: CJ4 } = Object,
  XJ4 = Object.prototype.hasOwnProperty,
  K_1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of CJ4(B))
        if (!XJ4.call(A, G) && G !== Q)
          x10(A, G, { get: () => B[G], enumerable: !(I = JJ4(B, G)) || I.enumerable });
    }
    return A;
  },
  f10 = (A, B, Q) => (K_1(A, B, 'default'), Q && K_1(Q, B, 'default')),
  VJ4 = (A) => K_1(x10({}, '__esModule', { value: !0 }), A),
  H_1 = {};
Z31.exports = VJ4(H_1);
f10(H_1, k10(), Z31.exports);
f10(H_1, V_1(), Z31.exports);
