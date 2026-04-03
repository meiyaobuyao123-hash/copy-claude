// Module: Gq1
// Params: $KA

Object.defineProperty($KA, '__esModule', { value: !0 });
$KA.shareReplay = void 0;
var RH9 = H91(),
  OH9 = m91();
function TH9(A, B, Q) {
  var I,
    G,
    D,
    Z,
    Y = !1;
  if (A && typeof A === 'object')
    ((I = A.bufferSize),
      (Z = I === void 0 ? 1 / 0 : I),
      (G = A.windowTime),
      (B = G === void 0 ? 1 / 0 : G),
      (D = A.refCount),
      (Y = D === void 0 ? !1 : D),
      (Q = A.scheduler));
  else Z = A !== null && A !== void 0 ? A : 1 / 0;
  return OH9.share({
    connector: function () {
      return new RH9.ReplaySubject(Z, B, Q);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: Y,
  });
}
$KA.shareReplay = TH9;
