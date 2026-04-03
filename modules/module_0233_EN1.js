// Module: EN1
// Params: XYA

Object.defineProperty(XYA, '__esModule', { value: !0 });
XYA.ObjectUnsubscribedError = void 0;
var YG9 = Dq();
XYA.ObjectUnsubscribedError = YG9.createErrorClass(function (A) {
  return function B() {
    (A(this), (this.name = 'ObjectUnsubscribedError'), (this.message = 'object unsubscribed'));
  };
});
