// Module: $i0
// Params: Ui0

Object.defineProperty(Ui0, '__esModule', { value: !0 });
Ui0.getMapping = void 0;
var tN6 = Ji0(),
  eN6 = zi0(),
  A$6 = BJ1(),
  wi0 = -10,
  Ei0 = 20,
  B$6 = Array.from({ length: 31 }, (A, B) => {
    if (B > 10) return new eN6.LogarithmMapping(B - 10);
    return new tN6.ExponentMapping(B - 10);
  });
function Q$6(A) {
  if (A > Ei0 || A < wi0)
    throw new A$6.MappingError(`expected scale >= ${wi0} && <= ${Ei0}, got: ${A}`);
  return B$6[A + 10];
}
Ui0.getMapping = Q$6;
