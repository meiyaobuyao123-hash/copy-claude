// Module: y91
// Params: TXA

Object.defineProperty(TXA, '__esModule', { value: !0 });
TXA.delayWhen = void 0;
var ZX9 = tp(),
  RXA = ek(),
  YX9 = _91(),
  WX9 = j91(),
  FX9 = RH(),
  JX9 = j4();
function OXA(A, B) {
  if (B)
    return function (Q) {
      return ZX9.concat(B.pipe(RXA.take(1), YX9.ignoreElements()), Q.pipe(OXA(A)));
    };
  return FX9.mergeMap(function (Q, I) {
    return JX9.innerFrom(A(Q, I)).pipe(RXA.take(1), WX9.mapTo(Q));
  });
}
TXA.delayWhen = OXA;
