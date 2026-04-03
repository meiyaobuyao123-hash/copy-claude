// Module: wTA
// Params: Qk5,zTA

var ox9 = 'Function.prototype.bind called on incompatible ',
  tx9 = Object.prototype.toString,
  ex9 = Math.max,
  Af9 = '[object Function]',
  HTA = function A(B, Q) {
    var I = [];
    for (var G = 0; G < B.length; G += 1) I[G] = B[G];
    for (var D = 0; D < Q.length; D += 1) I[D + B.length] = Q[D];
    return I;
  },
  Bf9 = function A(B, Q) {
    var I = [];
    for (var G = Q || 0, D = 0; G < B.length; G += 1, D += 1) I[D] = B[G];
    return I;
  },
  Qf9 = function (A, B) {
    var Q = '';
    for (var I = 0; I < A.length; I += 1) if (((Q += A[I]), I + 1 < A.length)) Q += B;
    return Q;
  };
zTA.exports = function A(B) {
  var Q = this;
  if (typeof Q !== 'function' || tx9.apply(Q) !== Af9) throw new TypeError(ox9 + Q);
  var I = Bf9(arguments, 1),
    G,
    D = function () {
      if (this instanceof G) {
        var J = Q.apply(this, HTA(I, arguments));
        if (Object(J) === J) return J;
        return this;
      }
      return Q.apply(B, HTA(I, arguments));
    },
    Z = ex9(0, Q.length - I.length),
    Y = [];
  for (var W = 0; W < Z; W++) Y[W] = '$' + W;
  if (
    ((G = Function(
      'binder',
      'return function (' + Qf9(Y, ',') + '){ return binder.apply(this,arguments); }'
    )(D)),
    Q.prototype)
  ) {
    var F = function J() {};
    ((F.prototype = Q.prototype), (G.prototype = new F()), (F.prototype = null));
  }
  return G;
};
