// Module: El1
// Params: BR8,Z52

Z52.exports = nb6;
function nb6(A, B) {
  var Q = new Array(arguments.length - 1),
    I = 0,
    G = 2,
    D = !0;
  while (G < arguments.length) Q[I++] = arguments[G++];
  return new Promise(function Z(Y, W) {
    Q[I] = function F(J) {
      if (D)
        if (((D = !1), J)) W(J);
        else {
          var C = new Array(arguments.length - 1),
            X = 0;
          while (X < C.length) C[X++] = arguments[X];
          Y.apply(null, C);
        }
    };
    try {
      A.apply(B || null, Q);
    } catch (F) {
      if (D) ((D = !1), W(F));
    }
  });
}
