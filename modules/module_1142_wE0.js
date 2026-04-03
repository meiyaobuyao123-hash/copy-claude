// Module: wE0
// Params: JF8,zE0

var { defineProperty: _D1, getOwnPropertyDescriptor: Dl4, getOwnPropertyNames: Zl4 } = Object,
  Yl4 = Object.prototype.hasOwnProperty,
  Wl4 = (A, B) => _D1(A, 'name', { value: B, configurable: !0 }),
  Fl4 = (A, B) => {
    for (var Q in B) _D1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Jl4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Zl4(B))
        if (!Yl4.call(A, G) && G !== Q)
          _D1(A, G, { get: () => B[G], enumerable: !(I = Dl4(B, G)) || I.enumerable });
    }
    return A;
  },
  Cl4 = (A) => Jl4(_D1({}, '__esModule', { value: !0 }), A),
  HE0 = {};
Fl4(HE0, { resolveEventStreamSerdeConfig: () => Xl4 });
zE0.exports = Cl4(HE0);
var Xl4 = Wl4(
  (A) => Object.assign(A, { eventStreamMarshaller: A.eventStreamSerdeProvider(A) }),
  'resolveEventStreamSerdeConfig'
);
