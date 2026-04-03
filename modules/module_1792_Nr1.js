// Module: Nr1
// Params: ac8,_V2

var vN = h3(),
  kC = (_V2.exports = {
    valid: function (A) {
      return (
        vN.assert(A, 'list falsy'),
        vN.assert(A._previousSibling, 'previous falsy'),
        vN.assert(A._nextSibling, 'next falsy'),
        !0
      );
    },
    insertBefore: function (A, B) {
      vN.assert(kC.valid(A) && kC.valid(B));
      var Q = A,
        I = A._previousSibling,
        G = B,
        D = B._previousSibling;
      ((Q._previousSibling = D),
        (I._nextSibling = G),
        (D._nextSibling = Q),
        (G._previousSibling = I),
        vN.assert(kC.valid(A) && kC.valid(B)));
    },
    replace: function (A, B) {
      if ((vN.assert(kC.valid(A) && (B === null || kC.valid(B))), B !== null))
        kC.insertBefore(B, A);
      (kC.remove(A), vN.assert(kC.valid(A) && (B === null || kC.valid(B))));
    },
    remove: function (A) {
      vN.assert(kC.valid(A));
      var B = A._previousSibling;
      if (B === A) return;
      var Q = A._nextSibling;
      ((B._nextSibling = Q),
        (Q._previousSibling = B),
        (A._previousSibling = A._nextSibling = A),
        vN.assert(kC.valid(A)));
    },
  });
