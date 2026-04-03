// Module: Hd
// Params: Wl8,LK2

LK2.exports = pR;
var ur1 = xV1(),
  V3 = h3(),
  Mw = V3.NAMESPACE,
  dV1 = kr1(),
  IK = HG(),
  pr1 = Zj(),
  a45 = $r1(),
  mV1 = DK2(),
  Kd = SV1(),
  s45 = fr1(),
  cr1 = gV1(),
  $K2 = kV1(),
  r45 = hV1(),
  o45 = mr1(),
  qK2 = dr1(),
  NK2 = Object.create(null);
function pR(A, B, Q, I) {
  ($K2.call(this),
    (this.nodeType = IK.ELEMENT_NODE),
    (this.ownerDocument = A),
    (this.localName = B),
    (this.namespaceURI = Q),
    (this.prefix = I),
    (this._tagName = void 0),
    (this._attrsByQName = Object.create(null)),
    (this._attrsByLName = Object.create(null)),
    (this._attrKeys = []));
}
function lr1(A, B) {
  if (A.nodeType === IK.TEXT_NODE) B.push(A._data);
  else for (var Q = 0, I = A.childNodes.length; Q < I; Q++) lr1(A.childNodes[Q], B);
}
pR.prototype = Object.create($K2.prototype, {
  isHTML: {
    get: function A() {
      return this.namespaceURI === Mw.HTML && this.ownerDocument.isHTML;
    },
  },
  tagName: {
    get: function A() {
      if (this._tagName === void 0) {
        var B;
        if (this.prefix === null) B = this.localName;
        else B = this.prefix + ':' + this.localName;
        if (this.isHTML) {
          var Q = NK2[B];
          if (!Q) NK2[B] = Q = V3.toASCIIUpperCase(B);
          B = Q;
        }
        this._tagName = B;
      }
      return this._tagName;
    },
  },
  nodeName: {
    get: function () {
      return this.tagName;
    },
  },
  nodeValue: {
    get: function () {
      return null;
    },
    set: function () {},
  },
  textContent: {
    get: function () {
      var A = [];
      return (lr1(this, A), A.join(''));
    },
    set: function (A) {
      if ((this.removeChildren(), A !== null && A !== void 0 && A !== ''))
        this._appendChild(this.ownerDocument.createTextNode(A));
    },
  },
  innerText: {
    get: function () {
      var A = [];
      return (
        lr1(this, A),
        A.join('')
          .replace(/[ \t\n\f\r]+/g, ' ')
          .trim()
      );
    },
    set: function (A) {
      if ((this.removeChildren(), A !== null && A !== void 0 && A !== ''))
        this._appendChild(this.ownerDocument.createTextNode(A));
    },
  },
  innerHTML: {
    get: function () {
      return this.serialize();
    },
    set: V3.nyi,
  },
  outerHTML: {
    get: function () {
      return a45.serializeOne(this, { nodeType: 0 });
    },
    set: function (A) {
      var B = this.ownerDocument,
        Q = this.parentNode;
      if (Q === null) return;
      if (Q.nodeType === IK.DOCUMENT_NODE) V3.NoModificationAllowedError();
      if (Q.nodeType === IK.DOCUMENT_FRAGMENT_NODE) Q = Q.ownerDocument.createElement('body');
      var I = B.implementation.mozHTMLParser(B._address, Q);
      (I.parse(A === null ? '' : String(A), !0), this.replaceWith(I._asDocumentFragment()));
    },
  },
  _insertAdjacent: {
    value: function A(B, Q) {
      var I = !1;
      switch (B) {
        case 'beforebegin':
          I = !0;
        case 'afterend':
          var G = this.parentNode;
          if (G === null) return null;
          return G.insertBefore(Q, I ? this : this.nextSibling);
        case 'afterbegin':
          I = !0;
        case 'beforeend':
          return this.insertBefore(Q, I ? this.firstChild : null);
        default:
          return V3.SyntaxError();
      }
    },
  },
  insertAdjacentElement: {
    value: function A(B, Q) {
      if (Q.nodeType !== IK.ELEMENT_NODE) throw new TypeError('not an element');
      return ((B = V3.toASCIILowerCase(String(B))), this._insertAdjacent(B, Q));
    },
  },
  insertAdjacentText: {
    value: function A(B, Q) {
      var I = this.ownerDocument.createTextNode(Q);
      ((B = V3.toASCIILowerCase(String(B))), this._insertAdjacent(B, I));
    },
  },
  insertAdjacentHTML: {
    value: function A(B, Q) {
      ((B = V3.toASCIILowerCase(String(B))), (Q = String(Q)));
      var I;
      switch (B) {
        case 'beforebegin':
        case 'afterend':
          if (((I = this.parentNode), I === null || I.nodeType === IK.DOCUMENT_NODE))
            V3.NoModificationAllowedError();
          break;
        case 'afterbegin':
        case 'beforeend':
          I = this;
          break;
        default:
          V3.SyntaxError();
      }
      if (
        !(I instanceof pR) ||
        (I.ownerDocument.isHTML && I.localName === 'html' && I.namespaceURI === Mw.HTML)
      )
        I = I.ownerDocument.createElementNS(Mw.HTML, 'body');
      var G = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, I);
      (G.parse(Q, !0), this._insertAdjacent(B, G._asDocumentFragment()));
    },
  },
  children: {
    get: function () {
      if (!this._children) this._children = new MK2(this);
      return this._children;
    },
  },
  attributes: {
    get: function () {
      if (!this._attributes) this._attributes = new nr1(this);
      return this._attributes;
    },
  },
  firstElementChild: {
    get: function () {
      for (var A = this.firstChild; A !== null; A = A.nextSibling)
        if (A.nodeType === IK.ELEMENT_NODE) return A;
      return null;
    },
  },
  lastElementChild: {
    get: function () {
      for (var A = this.lastChild; A !== null; A = A.previousSibling)
        if (A.nodeType === IK.ELEMENT_NODE) return A;
      return null;
    },
  },
  childElementCount: {
    get: function () {
      return this.children.length;
    },
  },
  nextElement: {
    value: function (A) {
      if (!A) A = this.ownerDocument.documentElement;
      var B = this.firstElementChild;
      if (!B) {
        if (this === A) return null;
        B = this.nextElementSibling;
      }
      if (B) return B;
      for (var Q = this.parentElement; Q && Q !== A; Q = Q.parentElement)
        if (((B = Q.nextElementSibling), B)) return B;
      return null;
    },
  },
  getElementsByTagName: {
    value: function A(B) {
      var Q;
      if (!B) return new pr1();
      if (B === '*')
        Q = function () {
          return !0;
        };
      else if (this.isHTML) Q = t45(B);
      else Q = ir1(B);
      return new mV1(this, Q);
    },
  },
  getElementsByTagNameNS: {
    value: function A(B, Q) {
      var I;
      if (B === '*' && Q === '*')
        I = function () {
          return !0;
        };
      else if (B === '*') I = ir1(Q);
      else if (Q === '*') I = e45(B);
      else I = A65(B, Q);
      return new mV1(this, I);
    },
  },
  getElementsByClassName: {
    value: function A(B) {
      if (((B = String(B).trim()), B === '')) {
        var Q = new pr1();
        return Q;
      }
      return ((B = B.split(/[ \t\r\n\f]+/)), new mV1(this, B65(B)));
    },
  },
  getElementsByName: {
    value: function A(B) {
      return new mV1(this, Q65(String(B)));
    },
  },
  clone: {
    value: function A() {
      var B;
      if (this.namespaceURI !== Mw.HTML || this.prefix || !this.ownerDocument.isHTML)
        B = this.ownerDocument.createElementNS(
          this.namespaceURI,
          this.prefix !== null ? this.prefix + ':' + this.localName : this.localName
        );
      else B = this.ownerDocument.createElement(this.localName);
      for (var Q = 0, I = this._attrKeys.length; Q < I; Q++) {
        var G = this._attrKeys[Q],
          D = this._attrsByLName[G],
          Z = D.cloneNode();
        (Z._setOwnerElement(B), (B._attrsByLName[G] = Z), B._addQName(Z));
      }
      return ((B._attrKeys = this._attrKeys.concat()), B);
    },
  },
  isEqual: {
    value: function A(B) {
      if (
        this.localName !== B.localName ||
        this.namespaceURI !== B.namespaceURI ||
        this.prefix !== B.prefix ||
        this._numattrs !== B._numattrs
      )
        return !1;
      for (var Q = 0, I = this._numattrs; Q < I; Q++) {
        var G = this._attr(Q);
        if (!B.hasAttributeNS(G.namespaceURI, G.localName)) return !1;
        if (B.getAttributeNS(G.namespaceURI, G.localName) !== G.value) return !1;
      }
      return !0;
    },
  },
  _lookupNamespacePrefix: {
    value: function A(B, Q) {
      if (
        this.namespaceURI &&
        this.namespaceURI === B &&
        this.prefix !== null &&
        Q.lookupNamespaceURI(this.prefix) === B
      )
        return this.prefix;
      for (var I = 0, G = this._numattrs; I < G; I++) {
        var D = this._attr(I);
        if (D.prefix === 'xmlns' && D.value === B && Q.lookupNamespaceURI(D.localName) === B)
          return D.localName;
      }
      var Z = this.parentElement;
      return Z ? Z._lookupNamespacePrefix(B, Q) : null;
    },
  },
  lookupNamespaceURI: {
    value: function A(B) {
      if (B === '' || B === void 0) B = null;
      if (this.namespaceURI !== null && this.prefix === B) return this.namespaceURI;
      for (var Q = 0, I = this._numattrs; Q < I; Q++) {
        var G = this._attr(Q);
        if (G.namespaceURI === Mw.XMLNS) {
          if (
            (G.prefix === 'xmlns' && G.localName === B) ||
            (B === null && G.prefix === null && G.localName === 'xmlns')
          )
            return G.value || null;
        }
      }
      var D = this.parentElement;
      return D ? D.lookupNamespaceURI(B) : null;
    },
  },
  getAttribute: {
    value: function A(B) {
      var Q = this.getAttributeNode(B);
      return Q ? Q.value : null;
    },
  },
  getAttributeNS: {
    value: function A(B, Q) {
      var I = this.getAttributeNodeNS(B, Q);
      return I ? I.value : null;
    },
  },
  getAttributeNode: {
    value: function A(B) {
      if (((B = String(B)), /[A-Z]/.test(B) && this.isHTML)) B = V3.toASCIILowerCase(B);
      var Q = this._attrsByQName[B];
      if (!Q) return null;
      if (Array.isArray(Q)) Q = Q[0];
      return Q;
    },
  },
  getAttributeNodeNS: {
    value: function A(B, Q) {
      ((B = B === void 0 || B === null ? '' : String(B)), (Q = String(Q)));
      var I = this._attrsByLName[B + '|' + Q];
      return I ? I : null;
    },
  },
  hasAttribute: {
    value: function A(B) {
      if (((B = String(B)), /[A-Z]/.test(B) && this.isHTML)) B = V3.toASCIILowerCase(B);
      return this._attrsByQName[B] !== void 0;
    },
  },
  hasAttributeNS: {
    value: function A(B, Q) {
      ((B = B === void 0 || B === null ? '' : String(B)), (Q = String(Q)));
      var I = B + '|' + Q;
      return this._attrsByLName[I] !== void 0;
    },
  },
  hasAttributes: {
    value: function A() {
      return this._numattrs > 0;
    },
  },
  toggleAttribute: {
    value: function A(B, Q) {
      if (((B = String(B)), !ur1.isValidName(B))) V3.InvalidCharacterError();
      if (/[A-Z]/.test(B) && this.isHTML) B = V3.toASCIILowerCase(B);
      var I = this._attrsByQName[B];
      if (I === void 0) {
        if (Q === void 0 || Q === !0) return (this._setAttribute(B, ''), !0);
        return !1;
      } else {
        if (Q === void 0 || Q === !1) return (this.removeAttribute(B), !1);
        return !0;
      }
    },
  },
  _setAttribute: {
    value: function A(B, Q) {
      var I = this._attrsByQName[B],
        G;
      if (!I) ((I = this._newattr(B)), (G = !0));
      else if (Array.isArray(I)) I = I[0];
      if (((I.value = Q), this._attributes)) this._attributes[B] = I;
      if (G && this._newattrhook) this._newattrhook(B, Q);
    },
  },
  setAttribute: {
    value: function A(B, Q) {
      if (((B = String(B)), !ur1.isValidName(B))) V3.InvalidCharacterError();
      if (/[A-Z]/.test(B) && this.isHTML) B = V3.toASCIILowerCase(B);
      this._setAttribute(B, String(Q));
    },
  },
  _setAttributeNS: {
    value: function A(B, Q, I) {
      var G = Q.indexOf(':'),
        D,
        Z;
      if (G < 0) ((D = null), (Z = Q));
      else ((D = Q.substring(0, G)), (Z = Q.substring(G + 1)));
      if (B === '' || B === void 0) B = null;
      var Y = (B === null ? '' : B) + '|' + Z,
        W = this._attrsByLName[Y],
        F;
      if (!W) {
        if (((W = new Ne(this, Z, D, B)), (F = !0), (this._attrsByLName[Y] = W), this._attributes))
          this._attributes[this._attrKeys.length] = W;
        (this._attrKeys.push(Y), this._addQName(W));
      }
      if (((W.value = I), F && this._newattrhook)) this._newattrhook(Q, I);
    },
  },
  setAttributeNS: {
    value: function A(B, Q, I) {
      if (
        ((B = B === null || B === void 0 || B === '' ? null : String(B)),
        (Q = String(Q)),
        !ur1.isValidQName(Q))
      )
        V3.InvalidCharacterError();
      var G = Q.indexOf(':'),
        D = G < 0 ? null : Q.substring(0, G);
      if (
        (D !== null && B === null) ||
        (D === 'xml' && B !== Mw.XML) ||
        ((Q === 'xmlns' || D === 'xmlns') && B !== Mw.XMLNS) ||
        (B === Mw.XMLNS && !(Q === 'xmlns' || D === 'xmlns'))
      )
        V3.NamespaceError();
      this._setAttributeNS(B, Q, String(I));
    },
  },
  setAttributeNode: {
    value: function A(B) {
      if (B.ownerElement !== null && B.ownerElement !== this) throw new Kd(Kd.INUSE_ATTRIBUTE_ERR);
      var Q = null,
        I = this._attrsByQName[B.name];
      if (I) {
        if (!Array.isArray(I)) I = [I];
        if (
          I.some(function (G) {
            return G === B;
          })
        )
          return B;
        else if (B.ownerElement !== null) throw new Kd(Kd.INUSE_ATTRIBUTE_ERR);
        (I.forEach(function (G) {
          this.removeAttributeNode(G);
        }, this),
          (Q = I[0]));
      }
      return (this.setAttributeNodeNS(B), Q);
    },
  },
  setAttributeNodeNS: {
    value: function A(B) {
      if (B.ownerElement !== null) throw new Kd(Kd.INUSE_ATTRIBUTE_ERR);
      var Q = B.namespaceURI,
        I = (Q === null ? '' : Q) + '|' + B.localName,
        G = this._attrsByLName[I];
      if (G) this.removeAttributeNode(G);
      if ((B._setOwnerElement(this), (this._attrsByLName[I] = B), this._attributes))
        this._attributes[this._attrKeys.length] = B;
      if ((this._attrKeys.push(I), this._addQName(B), this._newattrhook))
        this._newattrhook(B.name, B.value);
      return G || null;
    },
  },
  removeAttribute: {
    value: function A(B) {
      if (((B = String(B)), /[A-Z]/.test(B) && this.isHTML)) B = V3.toASCIILowerCase(B);
      var Q = this._attrsByQName[B];
      if (!Q) return;
      if (Array.isArray(Q))
        if (Q.length > 2) Q = Q.shift();
        else ((this._attrsByQName[B] = Q[1]), (Q = Q[0]));
      else this._attrsByQName[B] = void 0;
      var I = Q.namespaceURI,
        G = (I === null ? '' : I) + '|' + Q.localName;
      this._attrsByLName[G] = void 0;
      var D = this._attrKeys.indexOf(G);
      if (this._attributes)
        (Array.prototype.splice.call(this._attributes, D, 1), (this._attributes[B] = void 0));
      this._attrKeys.splice(D, 1);
      var Z = Q.onchange;
      if ((Q._setOwnerElement(null), Z)) Z.call(Q, this, Q.localName, Q.value, null);
      if (this.rooted) this.ownerDocument.mutateRemoveAttr(Q);
    },
  },
  removeAttributeNS: {
    value: function A(B, Q) {
      ((B = B === void 0 || B === null ? '' : String(B)), (Q = String(Q)));
      var I = B + '|' + Q,
        G = this._attrsByLName[I];
      if (!G) return;
      this._attrsByLName[I] = void 0;
      var D = this._attrKeys.indexOf(I);
      if (this._attributes) Array.prototype.splice.call(this._attributes, D, 1);
      (this._attrKeys.splice(D, 1), this._removeQName(G));
      var Z = G.onchange;
      if ((G._setOwnerElement(null), Z)) Z.call(G, this, G.localName, G.value, null);
      if (this.rooted) this.ownerDocument.mutateRemoveAttr(G);
    },
  },
  removeAttributeNode: {
    value: function A(B) {
      var Q = B.namespaceURI,
        I = (Q === null ? '' : Q) + '|' + B.localName;
      if (this._attrsByLName[I] !== B) V3.NotFoundError();
      return (this.removeAttributeNS(Q, B.localName), B);
    },
  },
  getAttributeNames: {
    value: function A() {
      var B = this;
      return this._attrKeys.map(function (Q) {
        return B._attrsByLName[Q].name;
      });
    },
  },
  _getattr: {
    value: function A(B) {
      var Q = this._attrsByQName[B];
      return Q ? Q.value : null;
    },
  },
  _setattr: {
    value: function A(B, Q) {
      var I = this._attrsByQName[B],
        G;
      if (!I) ((I = this._newattr(B)), (G = !0));
      if (((I.value = String(Q)), this._attributes)) this._attributes[B] = I;
      if (G && this._newattrhook) this._newattrhook(B, Q);
    },
  },
  _newattr: {
    value: function A(B) {
      var Q = new Ne(this, B, null, null),
        I = '|' + B;
      if (((this._attrsByQName[B] = Q), (this._attrsByLName[I] = Q), this._attributes))
        this._attributes[this._attrKeys.length] = Q;
      return (this._attrKeys.push(I), Q);
    },
  },
  _addQName: {
    value: function (A) {
      var B = A.name,
        Q = this._attrsByQName[B];
      if (!Q) this._attrsByQName[B] = A;
      else if (Array.isArray(Q)) Q.push(A);
      else this._attrsByQName[B] = [Q, A];
      if (this._attributes) this._attributes[B] = A;
    },
  },
  _removeQName: {
    value: function (A) {
      var B = A.name,
        Q = this._attrsByQName[B];
      if (Array.isArray(Q)) {
        var I = Q.indexOf(A);
        if ((V3.assert(I !== -1), Q.length === 2)) {
          if (((this._attrsByQName[B] = Q[1 - I]), this._attributes))
            this._attributes[B] = this._attrsByQName[B];
        } else if ((Q.splice(I, 1), this._attributes && this._attributes[B] === A))
          this._attributes[B] = Q[0];
      } else if ((V3.assert(Q === A), (this._attrsByQName[B] = void 0), this._attributes))
        this._attributes[B] = void 0;
    },
  },
  _numattrs: {
    get: function () {
      return this._attrKeys.length;
    },
  },
  _attr: {
    value: function (A) {
      return this._attrsByLName[this._attrKeys[A]];
    },
  },
  id: dV1.property({ name: 'id' }),
  className: dV1.property({ name: 'class' }),
  classList: {
    get: function () {
      var A = this;
      if (this._classList) return this._classList;
      var B = new s45(
        function () {
          return A.className || '';
        },
        function (Q) {
          A.className = Q;
        }
      );
      return ((this._classList = B), B);
    },
    set: function (A) {
      this.className = A;
    },
  },
  matches: {
    value: function (A) {
      return cr1.matches(this, A);
    },
  },
  closest: {
    value: function (A) {
      var B = this;
      do {
        if (B.matches && B.matches(A)) return B;
        B = B.parentElement || B.parentNode;
      } while (B !== null && B.nodeType === IK.ELEMENT_NODE);
      return null;
    },
  },
  querySelector: {
    value: function (A) {
      return cr1(A, this)[0];
    },
  },
  querySelectorAll: {
    value: function (A) {
      var B = cr1(A, this);
      return B.item ? B : new pr1(B);
    },
  },
});
Object.defineProperties(pR.prototype, r45);
Object.defineProperties(pR.prototype, o45);
dV1.registerChangeHandler(pR, 'id', function (A, B, Q, I) {
  if (A.rooted) {
    if (Q) A.ownerDocument.delId(Q, A);
    if (I) A.ownerDocument.addId(I, A);
  }
});
dV1.registerChangeHandler(pR, 'class', function (A, B, Q, I) {
  if (A._classList) A._classList._update();
});
function Ne(A, B, Q, I, G) {
  ((this.localName = B),
    (this.prefix = Q === null || Q === '' ? null : '' + Q),
    (this.namespaceURI = I === null || I === '' ? null : '' + I),
    (this.data = G),
    this._setOwnerElement(A));
}
Ne.prototype = Object.create(Object.prototype, {
  ownerElement: {
    get: function () {
      return this._ownerElement;
    },
  },
  _setOwnerElement: {
    value: function A(B) {
      if (((this._ownerElement = B), this.prefix === null && this.namespaceURI === null && B))
        this.onchange = B._attributeChangeHandlers[this.localName];
      else this.onchange = null;
    },
  },
  name: {
    get: function () {
      return this.prefix ? this.prefix + ':' + this.localName : this.localName;
    },
  },
  specified: {
    get: function () {
      return !0;
    },
  },
  value: {
    get: function () {
      return this.data;
    },
    set: function (A) {
      var B = this.data;
      if (((A = A === void 0 ? '' : A + ''), A === B)) return;
      if (((this.data = A), this.ownerElement)) {
        if (this.onchange) this.onchange(this.ownerElement, this.localName, B, A);
        if (this.ownerElement.rooted) this.ownerElement.ownerDocument.mutateAttr(this, B);
      }
    },
  },
  cloneNode: {
    value: function A(B) {
      return new Ne(null, this.localName, this.prefix, this.namespaceURI, this.data);
    },
  },
  nodeType: {
    get: function () {
      return IK.ATTRIBUTE_NODE;
    },
  },
  nodeName: {
    get: function () {
      return this.name;
    },
  },
  nodeValue: {
    get: function () {
      return this.value;
    },
    set: function (A) {
      this.value = A;
    },
  },
  textContent: {
    get: function () {
      return this.value;
    },
    set: function (A) {
      if (A === null || A === void 0) A = '';
      this.value = A;
    },
  },
  innerText: {
    get: function () {
      return this.value;
    },
    set: function (A) {
      if (A === null || A === void 0) A = '';
      this.value = A;
    },
  },
});
pR._Attr = Ne;
function nr1(A) {
  qK2.call(this, A);
  for (var B in A._attrsByQName) this[B] = A._attrsByQName[B];
  for (var Q = 0; Q < A._attrKeys.length; Q++) this[Q] = A._attrsByLName[A._attrKeys[Q]];
}
nr1.prototype = Object.create(qK2.prototype, {
  length: {
    get: function () {
      return this.element._attrKeys.length;
    },
    set: function () {},
  },
  item: {
    value: function (A) {
      if (((A = A >>> 0), A >= this.length)) return null;
      return this.element._attrsByLName[this.element._attrKeys[A]];
    },
  },
});
if (globalThis.Symbol?.iterator)
  nr1.prototype[globalThis.Symbol.iterator] = function () {
    var A = 0,
      B = this.length,
      Q = this;
    return {
      next: function () {
        if (A < B) return { value: Q.item(A++) };
        return { done: !0 };
      },
    };
  };
function MK2(A) {
  ((this.element = A), this.updateCache());
}
MK2.prototype = Object.create(Object.prototype, {
  length: {
    get: function () {
      return (this.updateCache(), this.childrenByNumber.length);
    },
  },
  item: {
    value: function A(B) {
      return (this.updateCache(), this.childrenByNumber[B] || null);
    },
  },
  namedItem: {
    value: function A(B) {
      return (this.updateCache(), this.childrenByName[B] || null);
    },
  },
  namedItems: {
    get: function () {
      return (this.updateCache(), this.childrenByName);
    },
  },
  updateCache: {
    value: function A() {
      var B = /^(a|applet|area|embed|form|frame|frameset|iframe|img|object)$/;
      if (this.lastModTime !== this.element.lastModTime) {
        this.lastModTime = this.element.lastModTime;
        var Q = (this.childrenByNumber && this.childrenByNumber.length) || 0;
        for (var I = 0; I < Q; I++) this[I] = void 0;
        ((this.childrenByNumber = []), (this.childrenByName = Object.create(null)));
        for (var G = this.element.firstChild; G !== null; G = G.nextSibling)
          if (G.nodeType === IK.ELEMENT_NODE) {
            ((this[this.childrenByNumber.length] = G), this.childrenByNumber.push(G));
            var D = G.getAttribute('id');
            if (D && !this.childrenByName[D]) this.childrenByName[D] = G;
            var Z = G.getAttribute('name');
            if (
              Z &&
              this.element.namespaceURI === Mw.HTML &&
              B.test(this.element.localName) &&
              !this.childrenByName[Z]
            )
              this.childrenByName[D] = G;
          }
      }
    },
  },
});
function ir1(A) {
  return function (B) {
    return B.localName === A;
  };
}
function t45(A) {
  var B = V3.toASCIILowerCase(A);
  if (B === A) return ir1(A);
  return function (Q) {
    return Q.isHTML ? Q.localName === B : Q.localName === A;
  };
}
function e45(A) {
  return function (B) {
    return B.namespaceURI === A;
  };
}
function A65(A, B) {
  return function (Q) {
    return Q.namespaceURI === A && Q.localName === B;
  };
}
function B65(A) {
  return function (B) {
    return A.every(function (Q) {
      return B.classList.contains(Q);
    });
  };
}
function Q65(A) {
  return function (B) {
    if (B.namespaceURI !== Mw.HTML) return !1;
    return B.getAttribute('name') === A;
  };
}
