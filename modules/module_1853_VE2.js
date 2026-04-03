// Module: VE2
// Params: ts8,XE2

XE2.exports = function (A) {
  var B = ['red', 'yellow', 'green', 'blue', 'magenta'];
  return function (Q, I, G) {
    if (Q === ' ') return Q;
    else return A[B[I++ % B.length]](Q);
  };
};
