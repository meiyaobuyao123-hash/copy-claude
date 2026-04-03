// Module: Rp0
// Params: Mp0

Object.defineProperty(Mp0, '__esModule', { value: !0 });
Mp0.DiagConsoleLogger = void 0;
var Np1 = [
  { n: 'error', c: 'error' },
  { n: 'warn', c: 'warn' },
  { n: 'info', c: 'info' },
  { n: 'debug', c: 'debug' },
  { n: 'verbose', c: 'trace' },
];
class qp0 {
  constructor() {
    function A(B) {
      return function (...Q) {
        if (console) {
          let I = console[B];
          if (typeof I !== 'function') I = console.log;
          if (typeof I === 'function') return I.apply(console, Q);
        }
      };
    }
    for (let B = 0; B < Np1.length; B++) this[Np1[B].n] = A(Np1[B].c);
  }
}
Mp0.DiagConsoleLogger = qp0;
