// Module: XTA
// Params: ey5,CTA

var JTA = typeof Symbol !== 'undefined' && Symbol,
  sx9 = AL1();
CTA.exports = function A() {
  if (typeof JTA !== 'function') return !1;
  if (typeof Symbol !== 'function') return !1;
  if (typeof JTA('foo') !== 'symbol') return !1;
  if (typeof Symbol('bar') !== 'symbol') return !1;
  return sx9();
};
