// Module: SBA
// Params: PBA

Object.defineProperty(PBA, '__esModule', { value: !0 });
var ro2 = I4(),
  oo2 = c01();
function to2(A) {
  let B = ro2.getClient();
  return (new oo2.Anr(A).setup(B), Promise.resolve());
}
PBA.enableAnrDetection = to2;
