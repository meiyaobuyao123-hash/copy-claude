// Module: CyA
// Params: Bd9

var Ad9 = FyA();
Bd9.operation = function (A) {
  var B = Bd9.timeouts(A);
  return new Ad9(B, {
    forever: A && A.forever,
    unref: A && A.unref,
    maxRetryTime: A && A.maxRetryTime,
  });
};
Bd9.timeouts = function (A) {
  if (A instanceof Array) return [].concat(A);
  var B = { retries: 10, factor: 2, minTimeout: 1000, maxTimeout: 1 / 0, randomize: !1 };
  for (var Q in A) B[Q] = A[Q];
  if (B.minTimeout > B.maxTimeout) throw new Error('minTimeout is greater than maxTimeout');
  var I = [];
  for (var G = 0; G < B.retries; G++) I.push(this.createTimeout(G, B));
  if (A && A.forever && !I.length) I.push(this.createTimeout(G, B));
  return (
    I.sort(function (D, Z) {
      return D - Z;
    }),
    I
  );
};
Bd9.createTimeout = function (A, B) {
  var Q = B.randomize ? Math.random() + 1 : 1,
    I = Math.round(Q * B.minTimeout * Math.pow(B.factor, A));
  return ((I = Math.min(I, B.maxTimeout)), I);
};
Bd9.wrap = function (A, B, Q) {
  if (B instanceof Array) ((Q = B), (B = null));
  if (!Q) {
    Q = [];
    for (var I in A) if (typeof A[I] === 'function') Q.push(I);
  }
  for (var G = 0; G < Q.length; G++) {
    var D = Q[G],
      Z = A[D];
    ((A[D] = function Y(W) {
      var F = Bd9.operation(B),
        J = Array.prototype.slice.call(arguments, 1),
        C = J.pop();
      (J.push(function (X) {
        if (F.retry(X)) return;
        if (X) arguments[0] = F.mainError();
        C.apply(this, arguments);
      }),
        F.attempt(function () {
          W.apply(A, J);
        }));
    }.bind(A, Z)),
      (A[D].options = B));
  }
};
