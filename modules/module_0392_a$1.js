// Module: a$1
// Params: iVA

Object.defineProperty(iVA, '__esModule', { value: !0 });
iVA.publishLast = void 0;
var SK9 = z91(),
  _K9 = ap();
function jK9() {
  return function (A) {
    var B = new SK9.AsyncSubject();
    return new _K9.ConnectableObservable(A, function () {
      return B;
    });
  };
}
iVA.publishLast = jK9;
