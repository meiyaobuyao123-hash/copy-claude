// Module: dN1
// Params: SFA

Object.defineProperty(SFA, '__esModule', { value: !0 });
SFA.NotFoundError = void 0;
var XY9 = Dq();
SFA.NotFoundError = XY9.createErrorClass(function (A) {
  return function B(Q) {
    (A(this), (this.name = 'NotFoundError'), (this.message = Q));
  };
});
