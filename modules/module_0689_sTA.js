// Module: sTA
// Params: Kk5,aTA

var pf9 = cTA(),
  nTA = pf9('%Object.defineProperty%', !0),
  cf9 = iTA()(),
  lf9 = DL1(),
  if9 = l41(),
  o41 = cf9 ? Symbol.toStringTag : null;
aTA.exports = function A(B, Q) {
  var I = arguments.length > 2 && !!arguments[2] && arguments[2].force,
    G = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (
    (typeof I !== 'undefined' && typeof I !== 'boolean') ||
    (typeof G !== 'undefined' && typeof G !== 'boolean')
  )
    throw new if9(
      'if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans'
    );
  if (o41 && (I || !lf9(B, o41)))
    if (nTA) nTA(B, o41, { configurable: !G, enumerable: !1, value: Q, writable: !1 });
    else B[o41] = Q;
};
