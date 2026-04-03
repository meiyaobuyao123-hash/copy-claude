// Module: uYA
// Params: gk

var aG9 =
  (gk && gk.__extends) ||
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
Object.defineProperty(gk, '__esModule', { value: !0 });
gk.QueueAction = void 0;
var sG9 = kk(),
  rG9 = (function (A) {
    aG9(B, A);
    function B(Q, I) {
      var G = A.call(this, Q, I) || this;
      return ((G.scheduler = Q), (G.work = I), G);
    }
    return (
      (B.prototype.schedule = function (Q, I) {
        if (I === void 0) I = 0;
        if (I > 0) return A.prototype.schedule.call(this, Q, I);
        return ((this.delay = I), (this.state = Q), this.scheduler.flush(this), this);
      }),
      (B.prototype.execute = function (Q, I) {
        return I > 0 || this.closed ? A.prototype.execute.call(this, Q, I) : this._execute(Q, I);
      }),
      (B.prototype.requestAsyncId = function (Q, I, G) {
        if (G === void 0) G = 0;
        if ((G != null && G > 0) || (G == null && this.delay > 0))
          return A.prototype.requestAsyncId.call(this, Q, I, G);
        return (Q.flush(this), 0);
      }),
      B
    );
  })(sG9.AsyncAction);
gk.QueueAction = rG9;
