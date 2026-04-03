// Module: jh0
// Params: fX6

var _h0 = Oh0(),
  xX6 = Sh0();
fX6.parse = function A(B, Q) {
  return new _h0(Q).parse(B);
};
fX6.parseFragment = function A(B, Q, I) {
  if (typeof B === 'string') ((I = Q), (Q = B), (B = null));
  return new _h0(I).parseFragment(Q, B);
};
fX6.serialize = function (A, B) {
  return new xX6(A, B).serialize();
};
