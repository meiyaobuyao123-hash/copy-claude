// Module: YV1
// Params: TC2,PC2

(function () {
  var A, B, Q, I;
  (({ isObject: I } = $w()),
    (Q = EF()),
    (A = LQ()),
    (PC2.exports = B =
      class G extends Q {
        constructor(D, Z, Y, W) {
          super(D);
          if (I(Z)) ({ version: Z, encoding: Y, standalone: W } = Z);
          if (!Z) Z = '1.0';
          if (
            ((this.type = A.Declaration), (this.version = this.stringify.xmlVersion(Z)), Y != null)
          )
            this.encoding = this.stringify.xmlEncoding(Y);
          if (W != null) this.standalone = this.stringify.xmlStandalone(W);
        }
        toString(D) {
          return this.options.writer.declaration(this, this.options.writer.filterOptions(D));
        }
      }));
}).call(TC2);
