// Module: _$1
// Params: CVA

Object.defineProperty(CVA, '__esModule', { value: !0 });
CVA.first = void 0;
var XV9 = Wq(),
  VV9 = uE(),
  KV9 = ek(),
  HV9 = tk(),
  zV9 = Ax(),
  wV9 = lI();
function EV9(A, B) {
  var Q = arguments.length >= 2;
  return function (I) {
    return I.pipe(
      A
        ? VV9.filter(function (G, D) {
            return A(G, D, I);
          })
        : wV9.identity,
      KV9.take(1),
      Q
        ? HV9.defaultIfEmpty(B)
        : zV9.throwIfEmpty(function () {
            return new XV9.EmptyError();
          })
    );
  };
}
CVA.first = EV9;
