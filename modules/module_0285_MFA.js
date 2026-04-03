// Module: MFA
// Params: $FA

Object.defineProperty($FA, '__esModule', { value: !0 });
$FA.lastValueFrom = void 0;
var ZY9 = Wq();
function YY9(A, B) {
  var Q = typeof B === 'object';
  return new Promise(function (I, G) {
    var D = !1,
      Z;
    A.subscribe({
      next: function (Y) {
        ((Z = Y), (D = !0));
      },
      error: G,
      complete: function () {
        if (D) I(Z);
        else if (Q) I(B.defaultValue);
        else G(new ZY9.EmptyError());
      },
    });
  });
}
$FA.lastValueFrom = YY9;
