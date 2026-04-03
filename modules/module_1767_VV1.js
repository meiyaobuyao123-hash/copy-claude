// Module: VV1
// Params: hC2,mC2

(function () {
  var A, B, Q;
  ((A = LQ()),
    (B = EF()),
    (mC2.exports = Q =
      class I extends B {
        constructor(G, D) {
          super(G);
          if (D == null) throw new Error('Missing raw text. ' + this.debugInfo());
          ((this.type = A.Raw), (this.value = this.stringify.raw(D)));
        }
        clone() {
          return Object.create(this);
        }
        toString(G) {
          return this.options.writer.raw(this, this.options.writer.filterOptions(G));
        }
      }));
}).call(hC2);
