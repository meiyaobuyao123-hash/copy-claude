// Module: AZ0
// Params: XG8,eD0

var CG8 = D1('fs'),
  lI1;
if (process.platform === 'win32' || global.TESTING_WINDOWS) lI1 = nD0();
else lI1 = tD0();
eD0.exports = Sx1;
Sx1.sync = sS4;
function Sx1(A, B, Q) {
  if (typeof B === 'function') ((Q = B), (B = {}));
  if (!Q) {
    if (typeof Promise !== 'function') throw new TypeError('callback not provided');
    return new Promise(function (I, G) {
      Sx1(A, B || {}, function (D, Z) {
        if (D) G(D);
        else I(Z);
      });
    });
  }
  lI1(A, B || {}, function (I, G) {
    if (I) {
      if (I.code === 'EACCES' || (B && B.ignoreErrors)) ((I = null), (G = !1));
    }
    Q(I, G);
  });
}
function sS4(A, B) {
  try {
    return lI1.sync(A, B || {});
  } catch (Q) {
    if ((B && B.ignoreErrors) || Q.code === 'EACCES') return !1;
    else throw Q;
  }
}
