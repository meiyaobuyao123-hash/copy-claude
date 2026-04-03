// Module: TJ0
// Params: GY8,xG1

var { defineProperty: RJ0, getOwnPropertyDescriptor: mf4, getOwnPropertyNames: df4 } = Object,
  uf4 = Object.prototype.hasOwnProperty,
  hf1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of df4(B))
        if (!uf4.call(A, G) && G !== Q)
          RJ0(A, G, { get: () => B[G], enumerable: !(I = mf4(B, G)) || I.enumerable });
    }
    return A;
  },
  OJ0 = (A, B, Q) => (hf1(A, B, 'default'), Q && hf1(Q, B, 'default')),
  pf4 = (A) => hf1(RJ0({}, '__esModule', { value: !0 }), A),
  mf1 = {};
xG1.exports = pf4(mf1);
OJ0(mf1, $J0(), xG1.exports);
OJ0(mf1, LJ0(), xG1.exports);
