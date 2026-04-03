// Module: yTA
// Params: Fk5,jTA

var Xf9 = OTA(),
  TTA = eM1(),
  STA;
try {
  STA = [].__proto__ === Array.prototype;
} catch (A) {
  if (!A || typeof A !== 'object' || !('code' in A) || A.code !== 'ERR_PROTO_ACCESS') throw A;
}
var GL1 = !!STA && TTA && TTA(Object.prototype, '__proto__'),
  _TA = Object,
  PTA = _TA.getPrototypeOf;
jTA.exports =
  GL1 && typeof GL1.get === 'function'
    ? Xf9([GL1.get])
    : typeof PTA === 'function'
      ? function A(B) {
          return PTA(B == null ? B : _TA(B));
        }
      : !1;
