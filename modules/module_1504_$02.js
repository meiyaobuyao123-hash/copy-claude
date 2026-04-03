// Module: $02
// Params: U02

Object.defineProperty(U02, '__esModule', { value: !0 });
U02._export = void 0;
var E02 = C4(),
  nk6 = Io();
function ak6(A, B) {
  return new Promise((Q) => {
    E02.context.with(nk6.suppressTracing(E02.context.active()), () => {
      A.export(B, (I) => {
        Q(I);
      });
    });
  });
}
U02._export = ak6;
