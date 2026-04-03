// Module: bN1
// Params: tWA

Object.defineProperty(tWA, '__esModule', { value: !0 });
tWA.scheduleAsyncIterable = void 0;
var qZ9 = G8(),
  oWA = hE();
function MZ9(A, B) {
  if (!A) throw new Error('Iterable cannot be null');
  return new qZ9.Observable(function (Q) {
    oWA.executeSchedule(Q, B, function () {
      var I = A[Symbol.asyncIterator]();
      oWA.executeSchedule(
        Q,
        B,
        function () {
          I.next().then(function (G) {
            if (G.done) Q.complete();
            else Q.next(G.value);
          });
        },
        0,
        !0
      );
    });
  });
}
tWA.scheduleAsyncIterable = MZ9;
