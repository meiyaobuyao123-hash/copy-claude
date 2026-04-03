// Module: vk
// Params: fk

var hG9 =
  (fk && fk.__extends) ||
  (function () {
    var A = function (B, Q) {
      return (
        (A =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (I, G) {
              I.__proto__ = G;
            }) ||
          function (I, G) {
            for (var D in G) if (Object.prototype.hasOwnProperty.call(G, D)) I[D] = G[D];
          }),
        A(B, Q)
      );
    };
    return function (B, Q) {
      if (typeof Q !== 'function' && Q !== null)
        throw new TypeError('Class extends value ' + String(Q) + ' is not a constructor or null');
      A(B, Q);
      function I() {
        this.constructor = B;
      }
      B.prototype = Q === null ? Object.create(Q) : ((I.prototype = Q.prototype), new I());
    };
  })();
Object.defineProperty(fk, '__esModule', { value: !0 });
fk.AsyncScheduler = void 0;
var kYA = RN1(),
  mG9 = (function (A) {
    hG9(B, A);
    function B(Q, I) {
      if (I === void 0) I = kYA.Scheduler.now;
      var G = A.call(this, Q, I) || this;
      return ((G.actions = []), (G._active = !1), G);
    }
    return (
      (B.prototype.flush = function (Q) {
        var I = this.actions;
        if (this._active) {
          I.push(Q);
          return;
        }
        var G;
        this._active = !0;
        do if ((G = Q.execute(Q.state, Q.delay))) break;
        while ((Q = I.shift()));
        if (((this._active = !1), G)) {
          while ((Q = I.shift())) Q.unsubscribe();
          throw G;
        }
      }),
      B
    );
  })(kYA.Scheduler);
fk.AsyncScheduler = mG9;
