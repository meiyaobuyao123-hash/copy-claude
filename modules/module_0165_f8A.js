// Module: f8A
// Params: x8A

Object.defineProperty(x8A, '__esModule', { value: !0 });
function os2(A, B, Q) {
  let I = 0,
    G = 5,
    D = 0;
  return (
    setInterval(() => {
      if (D === 0) {
        if (I > A) {
          if (((G *= 2), Q(G), G > 86400)) G = 86400;
          D = G;
        }
      } else if (((D -= 1), D === 0)) B();
      I = 0;
    }, 1000).unref(),
    () => {
      I += 1;
    }
  );
}
function oE1(A) {
  return A !== void 0 && (A.length === 0 || A === '?' || A === '<anonymous>');
}
function ts2(A, B) {
  return A === B || (oE1(A) && oE1(B));
}
function k8A(A) {
  if (A === void 0) return;
  return A.slice(-10).reduce((B, Q) => `${B},${Q.function},${Q.lineno},${Q.colno}`, '');
}
function es2(A, B) {
  if (B === void 0) return;
  return k8A(A(B, 1));
}
x8A.createRateLimiter = os2;
x8A.functionNamesMatch = ts2;
x8A.hashFrames = k8A;
x8A.hashFromStack = es2;
x8A.isAnonymous = oE1;
