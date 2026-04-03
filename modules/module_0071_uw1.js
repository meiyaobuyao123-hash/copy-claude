// Module: uw1
// Params: u0A

Object.defineProperty(u0A, '__esModule', { value: !0 });
var gf2 = tA();
function hf2(A, B, Q = () => {}) {
  let I;
  try {
    I = A();
  } catch (G) {
    throw (B(G), Q(), G);
  }
  return mf2(I, B, Q);
}
function mf2(A, B, Q) {
  if (gf2.isThenable(A))
    return A.then(
      (I) => {
        return (Q(), I);
      },
      (I) => {
        throw (B(I), Q(), I);
      }
    );
  return (Q(), A);
}
u0A.handleCallbackErrors = hf2;
