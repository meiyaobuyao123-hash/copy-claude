// Module: CD1
// Params: cW8,JD1

var { defineProperty: Fz0, getOwnPropertyDescriptor: fd4, getOwnPropertyNames: vd4 } = Object,
  bd4 = Object.prototype.hasOwnProperty,
  zv1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of vd4(B))
        if (!bd4.call(A, G) && G !== Q)
          Fz0(A, G, { get: () => B[G], enumerable: !(I = fd4(B, G)) || I.enumerable });
    }
    return A;
  },
  Jz0 = (A, B, Q) => (zv1(A, B, 'default'), Q && zv1(Q, B, 'default')),
  gd4 = (A) => zv1(Fz0({}, '__esModule', { value: !0 }), A),
  wv1 = {};
JD1.exports = gd4(wv1);
Jz0(wv1, Az0(), JD1.exports);
Jz0(wv1, Wz0(), JD1.exports);
