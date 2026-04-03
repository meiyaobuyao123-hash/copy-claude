// Module: cs1
// Params: HC2,zC2

(function () {
  var A, B, Q;
  ((A = LQ()),
    (Q = EF()),
    (zC2.exports = B =
      function () {
        class I {
          constructor(G, D, Z) {
            if (((this.parent = G), this.parent))
              ((this.options = this.parent.options), (this.stringify = this.parent.stringify));
            if (D == null) throw new Error('Missing attribute name. ' + this.debugInfo(D));
            ((this.name = this.stringify.name(D)),
              (this.value = this.stringify.attValue(Z)),
              (this.type = A.Attribute),
              (this.isId = !1),
              (this.schemaTypeInfo = null));
          }
          clone() {
            return Object.create(this);
          }
          toString(G) {
            return this.options.writer.attribute(this, this.options.writer.filterOptions(G));
          }
          debugInfo(G) {
            if (((G = G || this.name), G == null)) return 'parent: <' + this.parent.name + '>';
            else return 'attribute: {' + G + '}, parent: <' + this.parent.name + '>';
          }
          isEqualNode(G) {
            if (G.namespaceURI !== this.namespaceURI) return !1;
            if (G.prefix !== this.prefix) return !1;
            if (G.localName !== this.localName) return !1;
            if (G.value !== this.value) return !1;
            return !0;
          }
        }
        return (
          Object.defineProperty(I.prototype, 'nodeType', {
            get: function () {
              return this.type;
            },
          }),
          Object.defineProperty(I.prototype, 'ownerElement', {
            get: function () {
              return this.parent;
            },
          }),
          Object.defineProperty(I.prototype, 'textContent', {
            get: function () {
              return this.value;
            },
            set: function (G) {
              return (this.value = G || '');
            },
          }),
          Object.defineProperty(I.prototype, 'namespaceURI', {
            get: function () {
              return '';
            },
          }),
          Object.defineProperty(I.prototype, 'prefix', {
            get: function () {
              return '';
            },
          }),
          Object.defineProperty(I.prototype, 'localName', {
            get: function () {
              return this.name;
            },
          }),
          Object.defineProperty(I.prototype, 'specified', {
            get: function () {
              return !0;
            },
          }),
          I
        );
      }.call(this)));
}).call(HC2);
