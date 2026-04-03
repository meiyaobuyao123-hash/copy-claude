// Module: Nf
// Params: dh5,$51

var { defineProperty: wxA, getOwnPropertyDescriptor: Oc9, getOwnPropertyNames: Tc9 } = Object,
  Pc9 = Object.prototype.hasOwnProperty,
  ZO1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Tc9(B))
        if (!Pc9.call(A, G) && G !== Q)
          wxA(A, G, { get: () => B[G], enumerable: !(I = Oc9(B, G)) || I.enumerable });
    }
    return A;
  },
  ExA = (A, B, Q) => (ZO1(A, B, 'default'), Q && ZO1(Q, B, 'default')),
  Sc9 = (A) => ZO1(wxA({}, '__esModule', { value: !0 }), A),
  YO1 = {};
$51.exports = Sc9(YO1);
ExA(YO1, FxA(), $51.exports);
ExA(YO1, zxA(), $51.exports);
