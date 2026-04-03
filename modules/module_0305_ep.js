// Module: ep
// Params: zJA

Object.defineProperty(zJA, '__esModule', { value: !0 });
zJA.defer = void 0;
var qW9 = G8(),
  MW9 = j4();
function LW9(A) {
  return new qW9.Observable(function (B) {
    MW9.innerFrom(A()).subscribe(B);
  });
}
zJA.defer = LW9;
