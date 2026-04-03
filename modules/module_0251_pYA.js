// Module: pYA
// Params: hk

var oG9 =
  (hk && hk.__extends) ||
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
Object.defineProperty(hk, '__esModule', { value: !0 });
hk.QueueScheduler = void 0;
var tG9 = vk(),
  eG9 = (function (A) {
    oG9(B, A);
    function B() {
      return (A !== null && A.apply(this, arguments)) || this;
    }
    return B;
  })(tG9.AsyncScheduler);
hk.QueueScheduler = eG9;
