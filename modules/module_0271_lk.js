// Module: lk
// Params: bWA

Object.defineProperty(bWA, '__esModule', { value: !0 });
bWA.subscribeOn = void 0;
var ZZ9 = w2();
function YZ9(A, B) {
  if (B === void 0) B = 0;
  return ZZ9.operate(function (Q, I) {
    I.add(
      A.schedule(function () {
        return Q.subscribe(I);
      }, B)
    );
  });
}
bWA.subscribeOn = YZ9;
