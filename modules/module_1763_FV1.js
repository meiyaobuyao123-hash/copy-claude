// Module: FV1
// Params: jC2,yC2

(function () {
  var A, B, Q, I;
  (({ isObject: I } = $w()),
    (Q = EF()),
    (A = LQ()),
    (yC2.exports = B =
      function () {
        class G extends Q {
          constructor(D, Z, Y, W) {
            super(D);
            if (Y == null) throw new Error('Missing DTD entity name. ' + this.debugInfo(Y));
            if (W == null) throw new Error('Missing DTD entity value. ' + this.debugInfo(Y));
            if (
              ((this.pe = !!Z),
              (this.name = this.stringify.name(Y)),
              (this.type = A.EntityDeclaration),
              !I(W))
            )
              ((this.value = this.stringify.dtdEntityValue(W)), (this.internal = !0));
            else {
              if (!W.pubID && !W.sysID)
                throw new Error(
                  'Public and/or system identifiers are required for an external entity. ' +
                    this.debugInfo(Y)
                );
              if (W.pubID && !W.sysID)
                throw new Error(
                  'System identifier is required for a public external entity. ' + this.debugInfo(Y)
                );
              if (((this.internal = !1), W.pubID != null))
                this.pubID = this.stringify.dtdPubID(W.pubID);
              if (W.sysID != null) this.sysID = this.stringify.dtdSysID(W.sysID);
              if (W.nData != null) this.nData = this.stringify.dtdNData(W.nData);
              if (this.pe && this.nData)
                throw new Error(
                  'Notation declaration is not allowed in a parameter entity. ' + this.debugInfo(Y)
                );
            }
          }
          toString(D) {
            return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(D));
          }
        }
        return (
          Object.defineProperty(G.prototype, 'publicId', {
            get: function () {
              return this.pubID;
            },
          }),
          Object.defineProperty(G.prototype, 'systemId', {
            get: function () {
              return this.sysID;
            },
          }),
          Object.defineProperty(G.prototype, 'notationName', {
            get: function () {
              return this.nData || null;
            },
          }),
          Object.defineProperty(G.prototype, 'inputEncoding', {
            get: function () {
              return null;
            },
          }),
          Object.defineProperty(G.prototype, 'xmlEncoding', {
            get: function () {
              return null;
            },
          }),
          Object.defineProperty(G.prototype, 'xmlVersion', {
            get: function () {
              return null;
            },
          }),
          G
        );
      }.call(this)));
}).call(jC2);
