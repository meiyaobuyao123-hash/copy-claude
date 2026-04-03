// Module: ECA
// Params: zCA

Object.defineProperty(zCA, '__esModule', { value: !0 });
zCA.using = void 0;
var lF9 = G8(),
  iF9 = j4(),
  nF9 = qX();
function aF9(A, B) {
  return new lF9.Observable(function (Q) {
    var I = A(),
      G = B(I),
      D = G ? iF9.innerFrom(G) : nF9.EMPTY;
    return (
      D.subscribe(Q),
      function () {
        if (I) I.unsubscribe();
      }
    );
  });
}
zCA.using = aF9;
