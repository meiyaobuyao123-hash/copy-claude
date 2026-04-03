// Module: HCA
// Params: VCA

Object.defineProperty(VCA, '__esModule', { value: !0 });
VCA.range = void 0;
var uF9 = G8(),
  pF9 = qX();
function cF9(A, B, Q) {
  if (B == null) ((B = A), (A = 0));
  if (B <= 0) return pF9.EMPTY;
  var I = B + A;
  return new uF9.Observable(
    Q
      ? function (G) {
          var D = A;
          return Q.schedule(function () {
            if (D < I) (G.next(D++), this.schedule());
            else G.complete();
          });
        }
      : function (G) {
          var D = A;
          while (D < I && !G.closed) G.next(D++);
          G.complete();
        }
  );
}
VCA.range = cF9;
