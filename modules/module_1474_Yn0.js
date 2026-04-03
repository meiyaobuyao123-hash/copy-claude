// Module: Yn0
// Params: Dn0

Object.defineProperty(Dn0, '__esModule', { value: !0 });
Dn0.getStringListFromEnv =
  Dn0.getBooleanFromEnv =
  Dn0.getStringFromEnv =
  Dn0.getNumberFromEnv =
    void 0;
var Qn0 = C4(),
  In0 = D1('util');
function d$6(A) {
  let B = process.env[A];
  if (B == null || B.trim() === '') return;
  let Q = Number(B);
  if (isNaN(Q)) {
    Qn0.diag.warn(`Unknown value ${In0.inspect(B)} for ${A}, expected a number, using defaults`);
    return;
  }
  return Q;
}
Dn0.getNumberFromEnv = d$6;
function Gn0(A) {
  let B = process.env[A];
  if (B == null || B.trim() === '') return;
  return B;
}
Dn0.getStringFromEnv = Gn0;
function u$6(A) {
  let B = process.env[A]?.trim().toLowerCase();
  if (B == null || B === '') return !1;
  if (B === 'true') return !0;
  else if (B === 'false') return !1;
  else
    return (
      Qn0.diag.warn(
        `Unknown value ${In0.inspect(B)} for ${A}, expected 'true' or 'false', falling back to 'false' (default)`
      ),
      !1
    );
}
Dn0.getBooleanFromEnv = u$6;
function p$6(A) {
  return Gn0(A)
    ?.split(',')
    .map((B) => B.trim())
    .filter((B) => B !== '');
}
Dn0.getStringListFromEnv = p$6;
