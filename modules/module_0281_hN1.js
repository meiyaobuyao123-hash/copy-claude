// Module: hN1
// Params: FFA

Object.defineProperty(FFA, '__esModule', { value: !0 });
FFA.throwError = void 0;
var nZ9 = G8(),
  aZ9 = l5();
function sZ9(A, B) {
  var Q = aZ9.isFunction(A)
      ? A
      : function () {
          return A;
        },
    I = function (G) {
      return G.error(Q());
    };
  return new nZ9.Observable(
    B
      ? function (G) {
          return B.schedule(I, 0, G);
        }
      : I
  );
}
FFA.throwError = sZ9;
