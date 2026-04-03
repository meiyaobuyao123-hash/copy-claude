// Module: Uq1
// Params: YHA

Object.defineProperty(YHA, '__esModule', { value: !0 });
YHA.timeoutWith = void 0;
var yz9 = QY(),
  kz9 = q91(),
  xz9 = rp();
function fz9(A, B, Q) {
  var I, G, D;
  if (((Q = Q !== null && Q !== void 0 ? Q : yz9.async), kz9.isValidDate(A))) I = A;
  else if (typeof A === 'number') G = A;
  if (B)
    D = function () {
      return B;
    };
  else throw new TypeError('No observable provided to switch to');
  if (I == null && G == null) throw new TypeError('No timeout provided.');
  return xz9.timeout({ first: I, each: G, scheduler: Q, with: D });
}
YHA.timeoutWith = fz9;
