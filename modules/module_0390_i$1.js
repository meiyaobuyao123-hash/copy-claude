// Module: i$1
// Params: uVA

Object.defineProperty(uVA, '__esModule', { value: !0 });
uVA.publish = void 0;
var qK9 = iI(),
  MK9 = Bc(),
  LK9 = Ac();
function RK9(A) {
  return A
    ? function (B) {
        return LK9.connect(A)(B);
      }
    : function (B) {
        return MK9.multicast(new qK9.Subject())(B);
      };
}
uVA.publish = RK9;
