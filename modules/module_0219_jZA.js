// Module: jZA
// Params: SZA

Object.defineProperty(SZA, '__esModule', { value: !0 });
SZA.createNotification =
  SZA.nextNotification =
  SZA.errorNotification =
  SZA.COMPLETE_NOTIFICATION =
    void 0;
SZA.COMPLETE_NOTIFICATION = (function () {
  return J91('C', void 0, void 0);
})();
function KI9(A) {
  return J91('E', void 0, A);
}
SZA.errorNotification = KI9;
function HI9(A) {
  return J91('N', A, void 0);
}
SZA.nextNotification = HI9;
function J91(A, B, Q) {
  return { kind: A, value: B, error: Q };
}
SZA.createNotification = J91;
