// Module: AJ1
// Params: Bi0

Object.defineProperty(Bi0, '__esModule', { value: !0 });
Bi0.nextGreaterSquare = Bi0.ldexp = void 0;
function aN6(A, B) {
  if (
    A === 0 ||
    A === Number.POSITIVE_INFINITY ||
    A === Number.NEGATIVE_INFINITY ||
    Number.isNaN(A)
  )
    return A;
  return A * Math.pow(2, B);
}
Bi0.ldexp = aN6;
function sN6(A) {
  return (A--, (A |= A >> 1), (A |= A >> 2), (A |= A >> 4), (A |= A >> 8), (A |= A >> 16), A++, A);
}
Bi0.nextGreaterSquare = sN6;
