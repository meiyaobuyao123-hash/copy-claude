// Module: DN1
// Params: XZA

Object.defineProperty(XZA, '__esModule', { value: !0 });
XZA.UnsubscriptionError = void 0;
var YI9 = Dq();
XZA.UnsubscriptionError = YI9.createErrorClass(function (A) {
  return function B(Q) {
    (A(this),
      (this.message = Q
        ? Q.length +
          ` errors occurred during unsubscription:
` +
          Q.map(function (I, G) {
            return G + 1 + ') ' + I.toString();
          }).join(`
  `)
        : ''),
      (this.name = 'UnsubscriptionError'),
      (this.errors = Q));
  };
});
