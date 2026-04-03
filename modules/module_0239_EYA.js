// Module: EYA
// Params: jk

var $G9 =
  (jk && jk.__extends) ||
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
Object.defineProperty(jk, '__esModule', { value: !0 });
jk.Action = void 0;
var qG9 = _W(),
  MG9 = (function (A) {
    $G9(B, A);
    function B(Q, I) {
      return A.call(this) || this;
    }
    return (
      (B.prototype.schedule = function (Q, I) {
        if (I === void 0) I = 0;
        return this;
      }),
      B
    );
  })(qG9.Subscription);
jk.Action = MG9;
