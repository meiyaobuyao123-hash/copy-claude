// Module: V91
// Params: AYA

Object.defineProperty(AYA, '__esModule', { value: !0 });
AYA.refCount = void 0;
var nI9 = w2(),
  aI9 = t2();
function sI9() {
  return nI9.operate(function (A, B) {
    var Q = null;
    A._refCount++;
    var I = aI9.createOperatorSubscriber(B, void 0, void 0, void 0, function () {
      if (!A || A._refCount <= 0 || 0 < --A._refCount) {
        Q = null;
        return;
      }
      var G = A._connection,
        D = Q;
      if (((Q = null), G && (!D || G === D))) G.unsubscribe();
      B.unsubscribe();
    });
    if ((A.subscribe(I), !I.closed)) Q = A.connect();
  });
}
AYA.refCount = sI9;
