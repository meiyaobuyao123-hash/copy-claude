// Module: GV1
// Params: UC2,NC2

(function () {
  var A,
    B,
    Q,
    I,
    G,
    D,
    Z,
    Y,
    W = {}.hasOwnProperty;
  (({ isObject: Y, isFunction: Z, getValue: D } = $w()),
    (G = EF()),
    (A = LQ()),
    (B = cs1()),
    (I = IV1()),
    (NC2.exports = Q =
      function () {
        class F extends G {
          constructor(J, C, X) {
            var V, K, U, N;
            super(J);
            if (C == null) throw new Error('Missing element name. ' + this.debugInfo());
            if (
              ((this.name = this.stringify.name(C)),
              (this.type = A.Element),
              (this.attribs = {}),
              (this.schemaTypeInfo = null),
              X != null)
            )
              this.attribute(X);
            if (J.type === A.Document) {
              if (
                ((this.isRoot = !0), (this.documentObject = J), (J.rootObject = this), J.children)
              ) {
                N = J.children;
                for (K = 0, U = N.length; K < U; K++)
                  if (((V = N[K]), V.type === A.DocType)) {
                    V.name = this.name;
                    break;
                  }
              }
            }
          }
          clone() {
            var J, C, X, V;
            if (((X = Object.create(this)), X.isRoot)) X.documentObject = null;
            ((X.attribs = {}), (V = this.attribs));
            for (C in V) {
              if (!W.call(V, C)) continue;
              ((J = V[C]), (X.attribs[C] = J.clone()));
            }
            return (
              (X.children = []),
              this.children.forEach(function (K) {
                var U = K.clone();
                return ((U.parent = X), X.children.push(U));
              }),
              X
            );
          }
          attribute(J, C) {
            var X, V;
            if (J != null) J = D(J);
            if (Y(J))
              for (X in J) {
                if (!W.call(J, X)) continue;
                ((V = J[X]), this.attribute(X, V));
              }
            else {
              if (Z(C)) C = C.apply();
              if (this.options.keepNullAttributes && C == null)
                this.attribs[J] = new B(this, J, '');
              else if (C != null) this.attribs[J] = new B(this, J, C);
            }
            return this;
          }
          removeAttribute(J) {
            var C, X, V;
            if (J == null) throw new Error('Missing attribute name. ' + this.debugInfo());
            if (((J = D(J)), Array.isArray(J)))
              for (X = 0, V = J.length; X < V; X++) ((C = J[X]), delete this.attribs[C]);
            else delete this.attribs[J];
            return this;
          }
          toString(J) {
            return this.options.writer.element(this, this.options.writer.filterOptions(J));
          }
          att(J, C) {
            return this.attribute(J, C);
          }
          a(J, C) {
            return this.attribute(J, C);
          }
          getAttribute(J) {
            if (this.attribs.hasOwnProperty(J)) return this.attribs[J].value;
            else return null;
          }
          setAttribute(J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getAttributeNode(J) {
            if (this.attribs.hasOwnProperty(J)) return this.attribs[J];
            else return null;
          }
          setAttributeNode(J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          removeAttributeNode(J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getElementsByTagName(J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getAttributeNS(J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          setAttributeNS(J, C, X) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          removeAttributeNS(J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getAttributeNodeNS(J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          setAttributeNodeNS(J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getElementsByTagNameNS(J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          hasAttribute(J) {
            return this.attribs.hasOwnProperty(J);
          }
          hasAttributeNS(J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          setIdAttribute(J, C) {
            if (this.attribs.hasOwnProperty(J)) return this.attribs[J].isId;
            else return C;
          }
          setIdAttributeNS(J, C, X) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          setIdAttributeNode(J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getElementsByTagName(J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getElementsByTagNameNS(J, C) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          getElementsByClassName(J) {
            throw new Error('This DOM method is not implemented.' + this.debugInfo());
          }
          isEqualNode(J) {
            var C, X, V;
            if (!super.isEqualNode(J)) return !1;
            if (J.namespaceURI !== this.namespaceURI) return !1;
            if (J.prefix !== this.prefix) return !1;
            if (J.localName !== this.localName) return !1;
            if (J.attribs.length !== this.attribs.length) return !1;
            for (
              C = X = 0, V = this.attribs.length - 1;
              0 <= V ? X <= V : X >= V;
              C = 0 <= V ? ++X : --X
            )
              if (!this.attribs[C].isEqualNode(J.attribs[C])) return !1;
            return !0;
          }
        }
        return (
          Object.defineProperty(F.prototype, 'tagName', {
            get: function () {
              return this.name;
            },
          }),
          Object.defineProperty(F.prototype, 'namespaceURI', {
            get: function () {
              return '';
            },
          }),
          Object.defineProperty(F.prototype, 'prefix', {
            get: function () {
              return '';
            },
          }),
          Object.defineProperty(F.prototype, 'localName', {
            get: function () {
              return this.name;
            },
          }),
          Object.defineProperty(F.prototype, 'id', {
            get: function () {
              throw new Error('This DOM method is not implemented.' + this.debugInfo());
            },
          }),
          Object.defineProperty(F.prototype, 'className', {
            get: function () {
              throw new Error('This DOM method is not implemented.' + this.debugInfo());
            },
          }),
          Object.defineProperty(F.prototype, 'classList', {
            get: function () {
              throw new Error('This DOM method is not implemented.' + this.debugInfo());
            },
          }),
          Object.defineProperty(F.prototype, 'attributes', {
            get: function () {
              if (!this.attributeMap || !this.attributeMap.nodes)
                this.attributeMap = new I(this.attribs);
              return this.attributeMap;
            },
          }),
          F
        );
      }.call(this)));
}).call(UC2);
