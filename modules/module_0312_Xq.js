// Module: Xq
// Params: fJA

Object.defineProperty(fJA, '__esModule', { value: !0 });
fJA.timer = void 0;
var ZF9 = G8(),
  YF9 = QY(),
  WF9 = sp(),
  FF9 = q91();
function JF9(A, B, Q) {
  if (A === void 0) A = 0;
  if (Q === void 0) Q = YF9.async;
  var I = -1;
  if (B != null)
    if (WF9.isScheduler(B)) Q = B;
    else I = B;
  return new ZF9.Observable(function (G) {
    var D = FF9.isValidDate(A) ? +A - Q.now() : A;
    if (D < 0) D = 0;
    var Z = 0;
    return Q.schedule(function () {
      if (!G.closed)
        if ((G.next(Z++), 0 <= I)) this.schedule(void 0, I);
        else G.complete();
    }, D);
  });
}
fJA.timer = JF9;
