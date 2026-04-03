// Module: CV1
// Params: fC2,vC2

(function () {
  var A, B, Q;
  ((Q = EF()),
    (A = LQ()),
    (vC2.exports = B =
      function () {
        class I extends Q {
          constructor(G, D, Z) {
            super(G);
            if (D == null) throw new Error('Missing DTD notation name. ' + this.debugInfo(D));
            if (!Z.pubID && !Z.sysID)
              throw new Error(
                'Public or system identifiers are required for an external entity. ' +
                  this.debugInfo(D)
              );
            if (
              ((this.name = this.stringify.name(D)),
              (this.type = A.NotationDeclaration),
              Z.pubID != null)
            )
              this.pubID = this.stringify.dtdPubID(Z.pubID);
            if (Z.sysID != null) this.sysID = this.stringify.dtdSysID(Z.sysID);
          }
          toString(G) {
            return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(G));
          }
        }
        return (
          Object.defineProperty(I.prototype, 'publicId', {
            get: function () {
              return this.pubID;
            },
          }),
          Object.defineProperty(I.prototype, 'systemId', {
            get: function () {
              return this.sysID;
            },
          }),
          I
        );
      }.call(this)));
}).call(fC2);
