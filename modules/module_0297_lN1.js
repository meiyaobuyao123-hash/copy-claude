// Module: lN1
// Params: nFA

Object.defineProperty(nFA, '__esModule', { value: !0 });
nFA.argsArgArrayOrObject = void 0;
var cY9 = Array.isArray,
  lY9 = Object.getPrototypeOf,
  iY9 = Object.prototype,
  nY9 = Object.keys;
function aY9(A) {
  if (A.length === 1) {
    var B = A[0];
    if (cY9(B)) return { args: B, keys: null };
    if (sY9(B)) {
      var Q = nY9(B);
      return {
        args: Q.map(function (I) {
          return B[I];
        }),
        keys: Q,
      };
    }
  }
  return { args: A, keys: null };
}
nFA.argsArgArrayOrObject = aY9;
function sY9(A) {
  return A && typeof A === 'object' && lY9(A) === iY9;
}
