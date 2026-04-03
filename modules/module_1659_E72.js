// Module: E72
// Params: uO8,w72

w72.exports = ki1;
function ki1(A, B) {
  if (typeof A === 'string') ((B = A), (A = void 0));
  var Q = [];
  function I(D) {
    if (typeof D !== 'string') {
      var Z = G();
      if (ki1.verbose) console.log('codegen: ' + Z);
      if (((Z = 'return ' + Z), D)) {
        var Y = Object.keys(D),
          W = new Array(Y.length + 1),
          F = new Array(Y.length),
          J = 0;
        while (J < Y.length) ((W[J] = Y[J]), (F[J] = D[Y[J++]]));
        return ((W[J] = Z), Function.apply(null, W).apply(null, F));
      }
      return Function(Z)();
    }
    var C = new Array(arguments.length - 1),
      X = 0;
    while (X < C.length) C[X] = arguments[++X];
    if (
      ((X = 0),
      (D = D.replace(/%([%dfijs])/g, function V(K, U) {
        var N = C[X++];
        switch (U) {
          case 'd':
          case 'f':
            return String(Number(N));
          case 'i':
            return String(Math.floor(N));
          case 'j':
            return JSON.stringify(N);
          case 's':
            return String(N);
        }
        return '%';
      })),
      X !== C.length)
    )
      throw Error('parameter count mismatch');
    return (Q.push(D), I);
  }
  function G(D) {
    return (
      'function ' +
      (D || B || '') +
      '(' +
      ((A && A.join(',')) || '') +
      `){
  ` +
      Q.join(`
  `) +
      `
}`
    );
  }
  return ((I.toString = G), I);
}
ki1.verbose = !1;
