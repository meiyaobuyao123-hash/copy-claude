// Module: CYA
// Params: FYA

Object.defineProperty(FYA, '__esModule', { value: !0 });
FYA.animationFrames = void 0;
var IG9 = G8(),
  GG9 = GYA(),
  YYA = wN1();
function DG9(A) {
  return A ? WYA(A) : ZG9;
}
FYA.animationFrames = DG9;
function WYA(A) {
  return new IG9.Observable(function (B) {
    var Q = A || GG9.performanceTimestampProvider,
      I = Q.now(),
      G = 0,
      D = function () {
        if (!B.closed)
          G = YYA.animationFrameProvider.requestAnimationFrame(function (Z) {
            G = 0;
            var Y = Q.now();
            (B.next({ timestamp: A ? Y : Z, elapsed: Y - I }), D());
          });
      };
    return (
      D(),
      function () {
        if (G) YYA.animationFrameProvider.cancelAnimationFrame(G);
      }
    );
  });
}
var ZG9 = WYA();
