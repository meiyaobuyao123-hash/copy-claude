// Module: k$1
// Params: EVA

Object.defineProperty(EVA, '__esModule', { value: !0 });
EVA.last = void 0;
var yV9 = Wq(),
  kV9 = uE(),
  xV9 = b91(),
  fV9 = Ax(),
  vV9 = tk(),
  bV9 = lI();
function gV9(A, B) {
  var Q = arguments.length >= 2;
  return function (I) {
    return I.pipe(
      A
        ? kV9.filter(function (G, D) {
            return A(G, D, I);
          })
        : bV9.identity,
      xV9.takeLast(1),
      Q
        ? vV9.defaultIfEmpty(B)
        : fV9.throwIfEmpty(function () {
            return new yV9.EmptyError();
          })
    );
  };
}
EVA.last = gV9;
