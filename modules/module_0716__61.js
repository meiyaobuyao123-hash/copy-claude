// Module: _61
// Params: Z_A

Object.defineProperty(Z_A, '__esModule', { value: !0 });
Z_A.SDKType = void 0;
var D_A = {},
  Wf;
Z_A.SDKType = {
  _get: (A) => {
    var B;
    return (
      ((B = D_A[A]) !== null && B !== void 0 ? B : 'js-mono') +
      (Wf !== null && Wf !== void 0 ? Wf : '')
    );
  },
  _setClientType(A, B) {
    D_A[A] = B;
  },
  _setBindingType(A) {
    if (!Wf || Wf === '-react') Wf = '-' + A;
  },
};
