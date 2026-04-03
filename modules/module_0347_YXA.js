// Module: YXA
// Params: DXA

Object.defineProperty(DXA, '__esModule', { value: !0 });
DXA.fromSubscribable = void 0;
var SC9 = G8();
function _C9(A) {
  return new SC9.Observable(function (B) {
    return A.subscribe(B);
  });
}
DXA.fromSubscribable = _C9;
