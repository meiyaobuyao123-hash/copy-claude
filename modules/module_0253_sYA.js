// Module: sYA
// Params: mk

var QD9 =
  (mk && mk.__extends) ||
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
Object.defineProperty(mk, '__esModule', { value: !0 });
mk.AnimationFrameAction = void 0;
var ID9 = kk(),
  aYA = wN1(),
  GD9 = (function (A) {
    QD9(B, A);
    function B(Q, I) {
      var G = A.call(this, Q, I) || this;
      return ((G.scheduler = Q), (G.work = I), G);
    }
    return (
      (B.prototype.requestAsyncId = function (Q, I, G) {
        if (G === void 0) G = 0;
        if (G !== null && G > 0) return A.prototype.requestAsyncId.call(this, Q, I, G);
        return (
          Q.actions.push(this),
          Q._scheduled ||
            (Q._scheduled = aYA.animationFrameProvider.requestAnimationFrame(function () {
              return Q.flush(void 0);
            }))
        );
      }),
      (B.prototype.recycleAsyncId = function (Q, I, G) {
        var D;
        if (G === void 0) G = 0;
        if (G != null ? G > 0 : this.delay > 0)
          return A.prototype.recycleAsyncId.call(this, Q, I, G);
        var Z = Q.actions;
        if (
          I != null &&
          I === Q._scheduled &&
          ((D = Z[Z.length - 1]) === null || D === void 0 ? void 0 : D.id) !== I
        )
          (aYA.animationFrameProvider.cancelAnimationFrame(I), (Q._scheduled = void 0));
        return;
      }),
      B
    );
  })(ID9.AsyncAction);
mk.AnimationFrameAction = GD9;
