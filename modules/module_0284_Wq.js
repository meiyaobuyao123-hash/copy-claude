// Module: Wq
// Params: UFA

Object.defineProperty(UFA, '__esModule', { value: !0 });
UFA.EmptyError = void 0;
var DY9 = Dq();
UFA.EmptyError = DY9.createErrorClass(function (A) {
  return function B() {
    (A(this), (this.name = 'EmptyError'), (this.message = 'no elements in sequence'));
  };
});
