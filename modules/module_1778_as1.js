// Module: as1
// Params: FX2,JX2

(function () {
  var A, B, Q, I, G, D, Z, Y;
  (({ isPlainObject: Y } = $w()),
    (Q = ps1()),
    (B = XC2()),
    (G = EF()),
    (A = LQ()),
    (Z = is1()),
    (D = zV1()),
    (JX2.exports = I =
      function () {
        class W extends G {
          constructor(F) {
            super(null);
            if (
              ((this.name = '#document'),
              (this.type = A.Document),
              (this.documentURI = null),
              (this.domConfig = new B()),
              F || (F = {}),
              !F.writer)
            )
              F.writer = new D();
            ((this.options = F), (this.stringify = new Z(F)));
          }
          end(F) {
            var J = {};
            if (!F) F = this.options.writer;
            else if (Y(F)) ((J = F), (F = this.options.writer));
            return F.document(this, F.filterOptions(J));
          }
          toString(F) {
            return this.options.writer.document(this, this.options.writer.filterOptions(F));
          }
          createElement(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createDocumentFragment() {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createTextNode(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createComment(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createCDATASection(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createProcessingInstruction(F, J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createAttribute(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createEntityReference(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getElementsByTagName(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          importNode(F, J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createElementNS(F, J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createAttributeNS(F, J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getElementsByTagNameNS(F, J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getElementById(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          adoptNode(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          normalizeDocument() {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          renameNode(F, J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getElementsByClassName(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createEvent(F) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createRange() {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createNodeIterator(F, J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          createTreeWalker(F, J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
        }
        return (
          Object.defineProperty(W.prototype, 'implementation', { value: new Q() }),
          Object.defineProperty(W.prototype, 'doctype', {
            get: function () {
              var F, J, C, X;
              X = this.children;
              for (J = 0, C = X.length; J < C; J++)
                if (((F = X[J]), F.type === A.DocType)) return F;
              return null;
            },
          }),
          Object.defineProperty(W.prototype, 'documentElement', {
            get: function () {
              return this.rootObject || null;
            },
          }),
          Object.defineProperty(W.prototype, 'inputEncoding', {
            get: function () {
              return null;
            },
          }),
          Object.defineProperty(W.prototype, 'strictErrorChecking', {
            get: function () {
              return !1;
            },
          }),
          Object.defineProperty(W.prototype, 'xmlEncoding', {
            get: function () {
              if (this.children.length !== 0 && this.children[0].type === A.Declaration)
                return this.children[0].encoding;
              else return null;
            },
          }),
          Object.defineProperty(W.prototype, 'xmlStandalone', {
            get: function () {
              if (this.children.length !== 0 && this.children[0].type === A.Declaration)
                return this.children[0].standalone === 'yes';
              else return !1;
            },
          }),
          Object.defineProperty(W.prototype, 'xmlVersion', {
            get: function () {
              if (this.children.length !== 0 && this.children[0].type === A.Declaration)
                return this.children[0].version;
              else return '1.0';
            },
          }),
          Object.defineProperty(W.prototype, 'URL', {
            get: function () {
              return this.documentURI;
            },
          }),
          Object.defineProperty(W.prototype, 'origin', {
            get: function () {
              return null;
            },
          }),
          Object.defineProperty(W.prototype, 'compatMode', {
            get: function () {
              return null;
            },
          }),
          Object.defineProperty(W.prototype, 'characterSet', {
            get: function () {
              return null;
            },
          }),
          Object.defineProperty(W.prototype, 'contentType', {
            get: function () {
              return null;
            },
          }),
          W
        );
      }.call(this)));
}).call(FX2);
