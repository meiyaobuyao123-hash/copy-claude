// Module: Bc
// Params: fVA

Object.defineProperty(fVA, '__esModule', { value: !0 });
fVA.multicast = void 0;
var JK9 = ap(),
  xVA = l5(),
  CK9 = Ac();
function XK9(A, B) {
  var Q = xVA.isFunction(A)
    ? A
    : function () {
        return A;
      };
  if (xVA.isFunction(B)) return CK9.connect(B, { connector: Q });
  return function (I) {
    return new JK9.ConnectableObservable(I, Q);
  };
}
fVA.multicast = XK9;
