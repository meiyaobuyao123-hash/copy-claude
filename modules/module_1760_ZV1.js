// Module: ZV1
// Params: RC2,OC2

(function () {
  var A, B, Q;
  ((A = LQ()),
    (B = Qe()),
    (OC2.exports = Q =
      class I extends B {
        constructor(G, D) {
          super(G);
          if (D == null) throw new Error('Missing comment text. ' + this.debugInfo());
          ((this.name = '#comment'),
            (this.type = A.Comment),
            (this.value = this.stringify.comment(D)));
        }
        clone() {
          return Object.create(this);
        }
        toString(G) {
          return this.options.writer.comment(this, this.options.writer.filterOptions(G));
        }
      }));
}).call(RC2);
