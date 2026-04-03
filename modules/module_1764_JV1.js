// Module: JV1
// Params: kC2,xC2

(function () {
  var A, B, Q;
  ((Q = EF()),
    (A = LQ()),
    (xC2.exports = B =
      class I extends Q {
        constructor(G, D, Z) {
          super(G);
          if (D == null) throw new Error('Missing DTD element name. ' + this.debugInfo());
          if (!Z) Z = '(#PCDATA)';
          if (Array.isArray(Z)) Z = '(' + Z.join(',') + ')';
          ((this.name = this.stringify.name(D)),
            (this.type = A.ElementDeclaration),
            (this.value = this.stringify.dtdElementValue(Z)));
        }
        toString(G) {
          return this.options.writer.dtdElement(this, this.options.writer.filterOptions(G));
        }
      }));
}).call(kC2);
