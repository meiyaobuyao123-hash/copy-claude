// Module: xYA
// Params: bk

var dG9 =
  (bk && bk.__extends) ||
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
Object.defineProperty(bk, '__esModule', { value: !0 });
bk.AsapScheduler = void 0;
var uG9 = vk(),
  pG9 = (function (A) {
    dG9(B, A);
    function B() {
      return (A !== null && A.apply(this, arguments)) || this;
    }
    return (
      (B.prototype.flush = function (Q) {
        this._active = !0;
        var I = this._scheduled;
        this._scheduled = void 0;
        var G = this.actions,
          D;
        Q = Q || G.shift();
        do if ((D = Q.execute(Q.state, Q.delay))) break;
        while ((Q = G[0]) && Q.id === I && G.shift());
        if (((this._active = !1), D)) {
          while ((Q = G[0]) && Q.id === I && G.shift()) Q.unsubscribe();
          throw D;
        }
      }),
      B
    );
  })(uG9.AsyncScheduler);
bk.AsapScheduler = pG9;
