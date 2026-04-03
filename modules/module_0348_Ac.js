// Module: Ac
// Params: WXA

Object.defineProperty(WXA, '__esModule', { value: !0 });
WXA.connect = void 0;
var jC9 = iI(),
  yC9 = j4(),
  kC9 = w2(),
  xC9 = YXA(),
  fC9 = {
    connector: function () {
      return new jC9.Subject();
    },
  };
function vC9(A, B) {
  if (B === void 0) B = fC9;
  var Q = B.connector;
  return kC9.operate(function (I, G) {
    var D = Q();
    (yC9.innerFrom(A(xC9.fromSubscribable(D))).subscribe(G), G.add(I.subscribe(D)));
  });
}
WXA.connect = vC9;
