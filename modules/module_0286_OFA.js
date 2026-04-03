// Module: OFA
// Params: LFA

Object.defineProperty(LFA, '__esModule', { value: !0 });
LFA.firstValueFrom = void 0;
var WY9 = Wq(),
  FY9 = Ok();
function JY9(A, B) {
  var Q = typeof B === 'object';
  return new Promise(function (I, G) {
    var D = new FY9.SafeSubscriber({
      next: function (Z) {
        (I(Z), D.unsubscribe());
      },
      error: G,
      complete: function () {
        if (Q) I(B.defaultValue);
        else G(new WY9.EmptyError());
      },
    });
    A.subscribe(D);
  });
}
LFA.firstValueFrom = JY9;
