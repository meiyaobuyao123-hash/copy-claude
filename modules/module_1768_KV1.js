// Module: KV1
// Params: dC2,uC2

(function () {
  var A, B, Q;
  ((A = LQ()),
    (B = Qe()),
    (uC2.exports = Q =
      function () {
        class I extends B {
          constructor(G, D) {
            super(G);
            if (D == null) throw new Error('Missing element text. ' + this.debugInfo());
            ((this.name = '#text'), (this.type = A.Text), (this.value = this.stringify.text(D)));
          }
          clone() {
            return Object.create(this);
          }
          toString(G) {
            return this.options.writer.text(this, this.options.writer.filterOptions(G));
          }
          splitText(G) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          replaceWholeText(G) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
        }
        return (
          Object.defineProperty(I.prototype, 'isElementContentWhitespace', {
            get: function () {
              throw new Error('This DOM method is not implemented.' + this.debugInfo());
            },
          }),
          Object.defineProperty(I.prototype, 'wholeText', {
            get: function () {
              var G, D, Z;
              ((Z = ''), (D = this.previousSibling));
              while (D) ((Z = D.data + Z), (D = D.previousSibling));
              ((Z += this.data), (G = this.nextSibling));
              while (G) ((Z = Z + G.data), (G = G.nextSibling));
              return Z;
            },
          }),
          I
        );
      }.call(this)));
}).call(dC2);
