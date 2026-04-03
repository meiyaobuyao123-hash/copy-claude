// Module: yB2
// Params: _B2

Object.defineProperty(_B2, '__esModule', { value: !0 });
_B2.validateAndNormalizeHeaders = void 0;
var ch6 = C4();
function lh6(A) {
  return () => {
    let B = {};
    return (
      Object.entries(A?.() ?? {}).forEach(([Q, I]) => {
        if (typeof I !== 'undefined') B[Q] = String(I);
        else ch6.diag.warn(`Header "${Q}" has invalid value (${I}) and will be ignored`);
      }),
      B
    );
  };
}
_B2.validateAndNormalizeHeaders = lh6;
