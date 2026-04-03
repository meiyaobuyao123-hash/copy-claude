// Module: OYA
// Params: LYA

Object.defineProperty(LYA, '__esModule', { value: !0 });
LYA.TestTools = LYA.Immediate = void 0;
var PG9 = 1,
  LN1,
  w91 = {};
function MYA(A) {
  if (A in w91) return (delete w91[A], !0);
  return !1;
}
LYA.Immediate = {
  setImmediate: function (A) {
    var B = PG9++;
    if (((w91[B] = !0), !LN1)) LN1 = Promise.resolve();
    return (
      LN1.then(function () {
        return MYA(B) && A();
      }),
      B
    );
  },
  clearImmediate: function (A) {
    MYA(A);
  },
};
LYA.TestTools = {
  pending: function () {
    return Object.keys(w91).length;
  },
};
