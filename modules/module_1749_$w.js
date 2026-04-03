// Module: $w
// Params: BC2,bR

(function () {
  var A,
    B,
    Q,
    I,
    G,
    D,
    Z,
    Y = {}.hasOwnProperty;
  ((A = function (W, ...F) {
    var J, C, X, V;
    if (G(Object.assign)) Object.assign.apply(null, arguments);
    else
      for (J = 0, X = F.length; J < X; J++)
        if (((V = F[J]), V != null))
          for (C in V) {
            if (!Y.call(V, C)) continue;
            W[C] = V[C];
          }
    return W;
  }),
    (G = function (W) {
      return !!W && Object.prototype.toString.call(W) === '[object Function]';
    }),
    (D = function (W) {
      var F;
      return !!W && ((F = typeof W) === 'function' || F === 'object');
    }),
    (Q = function (W) {
      if (G(Array.isArray)) return Array.isArray(W);
      else return Object.prototype.toString.call(W) === '[object Array]';
    }),
    (I = function (W) {
      var F;
      if (Q(W)) return !W.length;
      else {
        for (F in W) {
          if (!Y.call(W, F)) continue;
          return !1;
        }
        return !0;
      }
    }),
    (Z = function (W) {
      var F, J;
      return (
        D(W) &&
        (J = Object.getPrototypeOf(W)) &&
        (F = J.constructor) &&
        typeof F === 'function' &&
        F instanceof F &&
        Function.prototype.toString.call(F) === Function.prototype.toString.call(Object)
      );
    }),
    (B = function (W) {
      if (G(W.valueOf)) return W.valueOf();
      else return W;
    }),
    (BC2.assign = A),
    (BC2.isFunction = G),
    (BC2.isObject = D),
    (BC2.isArray = Q),
    (BC2.isEmpty = I),
    (BC2.isPlainObject = Z),
    (BC2.getValue = B));
}).call(BC2);
