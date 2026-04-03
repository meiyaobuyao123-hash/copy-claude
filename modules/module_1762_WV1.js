// Module: WV1
// Params: SC2,_C2

(function () {
  var A, B, Q;
  ((Q = EF()),
    (A = LQ()),
    (_C2.exports = B =
      class I extends Q {
        constructor(G, D, Z, Y, W, F) {
          super(G);
          if (D == null) throw new Error('Missing DTD element name. ' + this.debugInfo());
          if (Z == null) throw new Error('Missing DTD attribute name. ' + this.debugInfo(D));
          if (!Y) throw new Error('Missing DTD attribute type. ' + this.debugInfo(D));
          if (!W) throw new Error('Missing DTD attribute default. ' + this.debugInfo(D));
          if (W.indexOf('#') !== 0) W = '#' + W;
          if (!W.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))
            throw new Error(
              'Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. ' +
                this.debugInfo(D)
            );
          if (F && !W.match(/^(#FIXED|#DEFAULT)$/))
            throw new Error(
              'Default value only applies to #FIXED or #DEFAULT. ' + this.debugInfo(D)
            );
          if (
            ((this.elementName = this.stringify.name(D)),
            (this.type = A.AttributeDeclaration),
            (this.attributeName = this.stringify.name(Z)),
            (this.attributeType = this.stringify.dtdAttType(Y)),
            F)
          )
            this.defaultValue = this.stringify.dtdAttDefault(F);
          this.defaultValueType = W;
        }
        toString(G) {
          return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(G));
        }
      }));
}).call(SC2);
