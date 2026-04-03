// Module: mE
// Params: DFA

Object.defineProperty(DFA, '__esModule', { value: !0 });
DFA.from = void 0;
var dZ9 = gN1(),
  uZ9 = j4();
function pZ9(A, B) {
  return B ? dZ9.scheduled(A, B) : uZ9.innerFrom(A);
}
DFA.from = pZ9;
