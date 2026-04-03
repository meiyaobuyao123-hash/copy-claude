// Module: _YA
// Params: xk

var xG9 =
  (xk && xk.__extends) ||
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
Object.defineProperty(xk, '__esModule', { value: !0 });
xk.AsapAction = void 0;
var fG9 = kk(),
  SYA = PYA(),
  vG9 = (function (A) {
    xG9(B, A);
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
            (Q._scheduled = SYA.immediateProvider.setImmediate(Q.flush.bind(Q, void 0)))
        );
      }),
      (B.prototype.recycleAsyncId = function (Q, I, G) {
        var D;
        if (G === void 0) G = 0;
        if (G != null ? G > 0 : this.delay > 0)
          return A.prototype.recycleAsyncId.call(this, Q, I, G);
        var Z = Q.actions;
        if (I != null && ((D = Z[Z.length - 1]) === null || D === void 0 ? void 0 : D.id) !== I) {
          if ((SYA.immediateProvider.clearImmediate(I), Q._scheduled === I)) Q._scheduled = void 0;
        }
        return;
      }),
      B
    );
  })(fG9.AsyncAction);
xk.AsapAction = vG9;
