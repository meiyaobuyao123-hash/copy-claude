// Module: qJ
// Params: _h5,ukA

var { defineProperty: H51, getOwnPropertyDescriptor: Mp9, getOwnPropertyNames: Lp9 } = Object,
  Rp9 = Object.prototype.hasOwnProperty,
  mkA = (A, B) => H51(A, 'name', { value: B, configurable: !0 }),
  Op9 = (A, B) => {
    for (var Q in B) H51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Tp9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Lp9(B))
        if (!Rp9.call(A, G) && G !== Q)
          H51(A, G, { get: () => B[G], enumerable: !(I = Mp9(B, G)) || I.enumerable });
    }
    return A;
  },
  Pp9 = (A) => Tp9(H51({}, '__esModule', { value: !0 }), A),
  dkA = {};
Op9(dkA, { getSmithyContext: () => Sp9, normalizeProvider: () => _p9 });
ukA.exports = Pp9(dkA);
var hkA = gkA(),
  Sp9 = mkA(
    (A) => A[hkA.SMITHY_CONTEXT_KEY] || (A[hkA.SMITHY_CONTEXT_KEY] = {}),
    'getSmithyContext'
  ),
  _p9 = mkA((A) => {
    if (typeof A === 'function') return A;
    let B = Promise.resolve(A);
    return () => B;
  }, 'normalizeProvider');
