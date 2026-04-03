// Module: nWA
// Params: lWA

Object.defineProperty(lWA, '__esModule', { value: !0 });
lWA.scheduleArray = void 0;
var zZ9 = G8();
function wZ9(A, B) {
  return new zZ9.Observable(function (Q) {
    var I = 0;
    return B.schedule(function () {
      if (I === A.length) Q.complete();
      else if ((Q.next(A[I++]), !Q.closed)) this.schedule();
    });
  });
}
lWA.scheduleArray = wZ9;
