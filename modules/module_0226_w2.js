// Module: w2
// Params: oZA

Object.defineProperty(oZA, '__esModule', { value: !0 });
oZA.operate = oZA.hasLift = void 0;
var dI9 = l5();
function rZA(A) {
  return dI9.isFunction(A === null || A === void 0 ? void 0 : A.lift);
}
oZA.hasLift = rZA;
function uI9(A) {
  return function (B) {
    if (rZA(B))
      return B.lift(function (Q) {
        try {
          return A(Q, this);
        } catch (I) {
          this.error(I);
        }
      });
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
oZA.operate = uI9;
