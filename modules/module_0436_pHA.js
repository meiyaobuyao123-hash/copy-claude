// Module: pHA
// Params: pO5,uHA

var Dx = 1000,
  Zx = Dx * 60,
  Yx = Zx * 60,
  ST = Yx * 24,
  lq9 = ST * 7,
  iq9 = ST * 365.25;
uHA.exports = function (A, B) {
  B = B || {};
  var Q = typeof A;
  if (Q === 'string' && A.length > 0) return nq9(A);
  else if (Q === 'number' && isFinite(A)) return B.long ? sq9(A) : aq9(A);
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(A));
};
function nq9(A) {
  if (((A = String(A)), A.length > 100)) return;
  var B =
    /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      A
    );
  if (!B) return;
  var Q = parseFloat(B[1]),
    I = (B[2] || 'ms').toLowerCase();
  switch (I) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return Q * iq9;
    case 'weeks':
    case 'week':
    case 'w':
      return Q * lq9;
    case 'days':
    case 'day':
    case 'd':
      return Q * ST;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return Q * Yx;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return Q * Zx;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return Q * Dx;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return Q;
    default:
      return;
  }
}
function aq9(A) {
  var B = Math.abs(A);
  if (B >= ST) return Math.round(A / ST) + 'd';
  if (B >= Yx) return Math.round(A / Yx) + 'h';
  if (B >= Zx) return Math.round(A / Zx) + 'm';
  if (B >= Dx) return Math.round(A / Dx) + 's';
  return A + 'ms';
}
function sq9(A) {
  var B = Math.abs(A);
  if (B >= ST) return u91(A, B, ST, 'day');
  if (B >= Yx) return u91(A, B, Yx, 'hour');
  if (B >= Zx) return u91(A, B, Zx, 'minute');
  if (B >= Dx) return u91(A, B, Dx, 'second');
  return A + ' ms';
}
function u91(A, B, Q, I) {
  var G = B >= Q * 1.5;
  return Math.round(A / Q) + ' ' + I + (G ? 's' : '');
}
