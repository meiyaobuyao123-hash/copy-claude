// Module: VA2
// Params: CA2

Object.defineProperty(CA2, '__esModule', { value: !0 });
CA2.addHrTimes =
  CA2.isTimeInput =
  CA2.isTimeInputHrTime =
  CA2.hrTimeToMicroseconds =
  CA2.hrTimeToMilliseconds =
  CA2.hrTimeToNanoseconds =
  CA2.hrTimeToTimeStamp =
  CA2.hrTimeDuration =
  CA2.timeInputToHrTime =
  CA2.hrTime =
  CA2.getTimeOrigin =
  CA2.millisToHrTime =
    void 0;
var Rc1 = Lc1(),
  WA2 = 9,
  fy6 = 6,
  vy6 = Math.pow(10, fy6),
  DJ1 = Math.pow(10, WA2);
function Do(A) {
  let B = A / 1000,
    Q = Math.trunc(B),
    I = Math.round((A % 1000) * vy6);
  return [Q, I];
}
CA2.millisToHrTime = Do;
function Oc1() {
  let A = Rc1.otperformance.timeOrigin;
  if (typeof A !== 'number') {
    let B = Rc1.otperformance;
    A = B.timing && B.timing.fetchStart;
  }
  return A;
}
CA2.getTimeOrigin = Oc1;
function FA2(A) {
  let B = Do(Oc1()),
    Q = Do(typeof A === 'number' ? A : Rc1.otperformance.now());
  return JA2(B, Q);
}
CA2.hrTime = FA2;
function by6(A) {
  if (Tc1(A)) return A;
  else if (typeof A === 'number')
    if (A < Oc1()) return FA2(A);
    else return Do(A);
  else if (A instanceof Date) return Do(A.getTime());
  else throw TypeError('Invalid input type');
}
CA2.timeInputToHrTime = by6;
function gy6(A, B) {
  let Q = B[0] - A[0],
    I = B[1] - A[1];
  if (I < 0) ((Q -= 1), (I += DJ1));
  return [Q, I];
}
CA2.hrTimeDuration = gy6;
function hy6(A) {
  let B = WA2,
    Q = `${'0'.repeat(B)}${A[1]}Z`,
    I = Q.substring(Q.length - B - 1);
  return new Date(A[0] * 1000).toISOString().replace('000Z', I);
}
CA2.hrTimeToTimeStamp = hy6;
function my6(A) {
  return A[0] * DJ1 + A[1];
}
CA2.hrTimeToNanoseconds = my6;
function dy6(A) {
  return A[0] * 1000 + A[1] / 1e6;
}
CA2.hrTimeToMilliseconds = dy6;
function uy6(A) {
  return A[0] * 1e6 + A[1] / 1000;
}
CA2.hrTimeToMicroseconds = uy6;
function Tc1(A) {
  return Array.isArray(A) && A.length === 2 && typeof A[0] === 'number' && typeof A[1] === 'number';
}
CA2.isTimeInputHrTime = Tc1;
function py6(A) {
  return Tc1(A) || typeof A === 'number' || A instanceof Date;
}
CA2.isTimeInput = py6;
function JA2(A, B) {
  let Q = [A[0] + B[0], A[1] + B[1]];
  if (Q[1] >= DJ1) ((Q[1] -= DJ1), (Q[0] += 1));
  return Q;
}
CA2.addHrTimes = JA2;
