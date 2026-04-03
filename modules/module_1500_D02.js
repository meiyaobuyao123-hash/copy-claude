// Module: D02
// Params: I02

Object.defineProperty(I02, '__esModule', { value: !0 });
I02.isUrlIgnored = I02.urlMatches = void 0;
function Q02(A, B) {
  if (typeof B === 'string') return A === B;
  else return !!A.match(B);
}
I02.urlMatches = Q02;
function pk6(A, B) {
  if (!B) return !1;
  for (let Q of B) if (Q02(A, Q)) return !0;
  return !1;
}
I02.isUrlIgnored = pk6;
