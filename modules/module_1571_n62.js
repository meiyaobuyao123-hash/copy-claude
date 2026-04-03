// Module: n62
// Params: l62

Object.defineProperty(l62, '__esModule', { value: !0 });
l62.createLoggingPartialSuccessResponseHandler = void 0;
var Mb6 = C4();
function Lb6(A) {
  return Object.prototype.hasOwnProperty.call(A, 'partialSuccess');
}
function Rb6() {
  return {
    handleResponse(A) {
      if (
        A == null ||
        !Lb6(A) ||
        A.partialSuccess == null ||
        Object.keys(A.partialSuccess).length === 0
      )
        return;
      Mb6.diag.warn('Received Partial Success response:', JSON.stringify(A.partialSuccess));
    },
  };
}
l62.createLoggingPartialSuccessResponseHandler = Rb6;
