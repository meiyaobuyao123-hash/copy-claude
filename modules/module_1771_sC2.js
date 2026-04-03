// Module: sC2
// Params: nC2,aC2

(function () {
  var A;
  aC2.exports = A = function () {
    class B {
      constructor(Q) {
        this.nodes = Q;
      }
      clone() {
        return (this.nodes = null);
      }
      item(Q) {
        return this.nodes[Q] || null;
      }
    }
    return (
      Object.defineProperty(B.prototype, 'length', {
        get: function () {
          return this.nodes.length || 0;
        },
      }),
      B
    );
  }.call(this);
}).call(nC2);
