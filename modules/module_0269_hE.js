// Module: hE
// Params: kWA

Object.defineProperty(kWA, '__esModule', { value: !0 });
kWA.executeSchedule = void 0;
function QZ9(A, B, Q, I, G) {
  if (I === void 0) I = 0;
  if (G === void 0) G = !1;
  var D = B.schedule(function () {
    if ((Q(), G)) A.add(this.schedule(null, I));
    else this.unsubscribe();
  }, I);
  if ((A.add(D), !G)) return D;
}
kWA.executeSchedule = QZ9;
