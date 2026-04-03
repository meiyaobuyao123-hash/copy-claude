// Module: DV1
// Params: MC2,LC2

(function () {
  var A, B, Q;
  ((A = LQ()),
    (Q = Qe()),
    (LC2.exports = B =
      class I extends Q {
        constructor(G, D) {
          super(G);
          if (D == null) throw new Error('Missing CDATA text. ' + this.debugInfo());
          ((this.name = '#cdata-section'),
            (this.type = A.CData),
            (this.value = this.stringify.cdata(D)));
        }
        clone() {
          return Object.create(this);
        }
        toString(G) {
          return this.options.writer.cdata(this, this.options.writer.filterOptions(G));
        }
      }));
}).call(MC2);
