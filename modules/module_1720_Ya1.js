// Module: Ya1
// Params: EZ2

Object.defineProperty(EZ2, '__esModule', { value: !0 });
EZ2.msToDuration = Ss6;
EZ2.durationToMs = _s6;
EZ2.isDuration = js6;
EZ2.parseDuration = ks6;
function Ss6(A) {
  return { seconds: (A / 1000) | 0, nanos: ((A % 1000) * 1e6) | 0 };
}
function _s6(A) {
  return (A.seconds * 1000 + A.nanos / 1e6) | 0;
}
function js6(A) {
  return typeof A.seconds === 'number' && typeof A.nanos === 'number';
}
var ys6 = /^(\d+)(?:\.(\d+))?s$/;
function ks6(A) {
  let B = A.match(ys6);
  if (!B) return null;
  return {
    seconds: Number.parseInt(B[1], 10),
    nanos: B[2] ? Number.parseInt(B[2].padEnd(9, '0'), 10) : 0,
  };
}
