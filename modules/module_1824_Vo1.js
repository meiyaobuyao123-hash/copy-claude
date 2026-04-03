// Module: Vo1
// Params: Ol8,MH2

var $H2 = kr1(),
  N65 = _V1().isApiWritable;
MH2.exports = function (A, B, Q, I) {
  var G = A.ctor;
  if (G) {
    var D = A.props || {};
    if (A.attributes)
      for (var Z in A.attributes) {
        var Y = A.attributes[Z];
        if (typeof Y !== 'object' || Array.isArray(Y)) Y = { type: Y };
        if (!Y.name) Y.name = Z.toLowerCase();
        D[Z] = $H2.property(Y);
      }
    if (
      ((D.constructor = { value: G, writable: N65 }),
      (G.prototype = Object.create((A.superclass || B).prototype, D)),
      A.events)
    )
      q65(G, A.events);
    Q[A.name] = G;
  } else G = B;
  return (
    (A.tags || (A.tag && [A.tag]) || []).forEach(function (W) {
      I[W] = G;
    }),
    G
  );
};
function qH2(A, B, Q, I) {
  ((this.body = A), (this.document = B), (this.form = Q), (this.element = I));
}
qH2.prototype.build = function () {
  return () => {};
};
function $65(A, B, Q, I) {
  var G = A.ownerDocument || Object.create(null),
    D = A.form || Object.create(null);
  A[B] = new qH2(I, G, D, A).build();
}
function q65(A, B) {
  var Q = A.prototype;
  B.forEach(function (I) {
    (Object.defineProperty(Q, 'on' + I, {
      get: function () {
        return this._getEventHandler(I);
      },
      set: function (G) {
        this._setEventHandler(I, G);
      },
    }),
      $H2.registerChangeHandler(A, 'on' + I, $65));
  });
}
