// Module: FC2
// Params: YC2,WC2

(function () {
  var A;
  WC2.exports = A = function () {
    class B {
      constructor(Q) {
        this.arr = Q || [];
      }
      item(Q) {
        return this.arr[Q] || null;
      }
      contains(Q) {
        return this.arr.indexOf(Q) !== -1;
      }
    }
    return (
      Object.defineProperty(B.prototype, 'length', {
        get: function () {
          return this.arr.length;
        },
      }),
      B
    );
  }.call(this);
}).call(YC2);
