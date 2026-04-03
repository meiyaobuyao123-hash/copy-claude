// Module: RN1
// Params: jYA

Object.defineProperty(jYA, '__esModule', { value: !0 });
jYA.Scheduler = void 0;
var bG9 = K91(),
  gG9 = (function () {
    function A(B, Q) {
      if (Q === void 0) Q = A.now;
      ((this.schedulerActionCtor = B), (this.now = Q));
    }
    return (
      (A.prototype.schedule = function (B, Q, I) {
        if (Q === void 0) Q = 0;
        return new this.schedulerActionCtor(this, B).schedule(I, Q);
      }),
      (A.now = bG9.dateTimestampProvider.now),
      A
    );
  })();
jYA.Scheduler = gG9;
