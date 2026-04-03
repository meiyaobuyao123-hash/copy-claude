// Module: Bt
// Params: GD2

Object.defineProperty(GD2, '__esModule', { value: !0 });
GD2.minDeadline = Aa6;
GD2.getDeadlineTimeoutString = Qa6;
GD2.getRelativeTimeout = Ga6;
GD2.deadlineToString = Da6;
GD2.formatDateDifference = Za6;
function Aa6(...A) {
  let B = 1 / 0;
  for (let Q of A) {
    let I = Q instanceof Date ? Q.getTime() : Q;
    if (I < B) B = I;
  }
  return B;
}
var Ba6 = [
  ['m', 1],
  ['S', 1000],
  ['M', 60000],
  ['H', 3600000],
];
function Qa6(A) {
  let B = new Date().getTime();
  if (A instanceof Date) A = A.getTime();
  let Q = Math.max(A - B, 0);
  for (let [I, G] of Ba6) {
    let D = Q / G;
    if (D < 1e8) return String(Math.ceil(D)) + I;
  }
  throw new Error('Deadline is too far in the future');
}
var Ia6 = 2147483647;
function Ga6(A) {
  let B = A instanceof Date ? A.getTime() : A,
    Q = new Date().getTime(),
    I = B - Q;
  if (I < 0) return 0;
  else if (I > Ia6) return 1 / 0;
  else return I;
}
function Da6(A) {
  if (A instanceof Date) return A.toISOString();
  else {
    let B = new Date(A);
    if (Number.isNaN(B.getTime())) return '' + A;
    else return B.toISOString();
  }
}
function Za6(A, B) {
  return ((B.getTime() - A.getTime()) / 1000).toFixed(3) + 's';
}
