// Module: M$1
// Params: pXA

Object.defineProperty(pXA, '__esModule', { value: !0 });
pXA.elementAt = void 0;
var uXA = mN1(),
  fX9 = uE(),
  vX9 = Ax(),
  bX9 = tk(),
  gX9 = ek();
function hX9(A, B) {
  if (A < 0) throw new uXA.ArgumentOutOfRangeError();
  var Q = arguments.length >= 2;
  return function (I) {
    return I.pipe(
      fX9.filter(function (G, D) {
        return D === A;
      }),
      gX9.take(1),
      Q
        ? bX9.defaultIfEmpty(B)
        : vX9.throwIfEmpty(function () {
            return new uXA.ArgumentOutOfRangeError();
          })
    );
  };
}
pXA.elementAt = hX9;
