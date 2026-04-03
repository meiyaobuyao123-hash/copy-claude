// Module: HV1
// Params: pC2,cC2

(function () {
  var A, B, Q;
  ((A = LQ()),
    (B = Qe()),
    (cC2.exports = Q =
      class I extends B {
        constructor(G, D, Z) {
          super(G);
          if (D == null) throw new Error('Missing instruction target. ' + this.debugInfo());
          if (
            ((this.type = A.ProcessingInstruction),
            (this.target = this.stringify.insTarget(D)),
            (this.name = this.target),
            Z)
          )
            this.value = this.stringify.insValue(Z);
        }
        clone() {
          return Object.create(this);
        }
        toString(G) {
          return this.options.writer.processingInstruction(
            this,
            this.options.writer.filterOptions(G)
          );
        }
        isEqualNode(G) {
          if (!super.isEqualNode(G)) return !1;
          if (G.target !== this.target) return !1;
          return !0;
        }
      }));
}).call(pC2);
