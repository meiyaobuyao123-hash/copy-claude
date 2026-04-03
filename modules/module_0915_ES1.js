// Module: ES1
// Params: up5,iB1

var { defineProperty: zoA, getOwnPropertyDescriptor: BZ4, getOwnPropertyNames: QZ4 } = Object,
  IZ4 = Object.prototype.hasOwnProperty,
  zS1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of QZ4(B))
        if (!IZ4.call(A, G) && G !== Q)
          zoA(A, G, { get: () => B[G], enumerable: !(I = BZ4(B, G)) || I.enumerable });
    }
    return A;
  },
  woA = (A, B, Q) => (zS1(A, B, 'default'), Q && zS1(Q, B, 'default')),
  GZ4 = (A) => zS1(zoA({}, '__esModule', { value: !0 }), A),
  wS1 = {};
iB1.exports = GZ4(wS1);
woA(wS1, XoA(), iB1.exports);
woA(wS1, HoA(), iB1.exports);
