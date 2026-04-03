// Module: sV1
// Params: kl8,mH2

mH2.exports = Se;
var ED = HG(),
  x65 = Zj(),
  vH2 = kV1(),
  cR = Hd(),
  f65 = rr1(),
  v65 = tr1(),
  Pe = Wd(),
  b65 = Ao1(),
  g65 = Qo1(),
  h65 = _e(),
  m65 = eK2(),
  d65 = DH2(),
  jH2 = Re(),
  yH2 = cV1(),
  kH2 = gV1(),
  u65 = Co1(),
  aV1 = xV1(),
  Eo1 = nV1(),
  p65 = wo1(),
  E5 = h3(),
  Ed = _H2(),
  Nd = E5.NAMESPACE,
  Uo1 = _V1().isApiWritable;
function Se(A, B) {
  (vH2.call(this),
    (this.nodeType = ED.DOCUMENT_NODE),
    (this.isHTML = A),
    (this._address = B || 'about:blank'),
    (this.readyState = 'loading'),
    (this.implementation = new h65(this)),
    (this.ownerDocument = null),
    (this._contentType = A ? 'text/html' : 'application/xml'),
    (this.doctype = null),
    (this.documentElement = null),
    (this._templateDocCache = null),
    (this._nodeIterators = null),
    (this._nid = 1),
    (this._nextnid = 2),
    (this._nodes = [null, this]),
    (this.byId = Object.create(null)),
    (this.modclock = 0));
}
var c65 = {
    event: 'Event',
    customevent: 'CustomEvent',
    uievent: 'UIEvent',
    mouseevent: 'MouseEvent',
  },
  l65 = {
    events: 'event',
    htmlevents: 'event',
    mouseevents: 'mouseevent',
    mutationevents: 'mutationevent',
    uievents: 'uievent',
  },
  Ud = function (A, B, Q) {
    return {
      get: function () {
        var I = A.call(this);
        if (I) return I[B];
        return Q;
      },
      set: function (I) {
        var G = A.call(this);
        if (G) G[B] = I;
      },
    };
  };
function xH2(A, B) {
  var Q, I, G;
  if (A === '') A = null;
  if (!aV1.isValidQName(B)) E5.InvalidCharacterError();
  if (((Q = null), (I = B), (G = B.indexOf(':')), G >= 0))
    ((Q = B.substring(0, G)), (I = B.substring(G + 1)));
  if (Q !== null && A === null) E5.NamespaceError();
  if (Q === 'xml' && A !== Nd.XML) E5.NamespaceError();
  if ((Q === 'xmlns' || B === 'xmlns') && A !== Nd.XMLNS) E5.NamespaceError();
  if (A === Nd.XMLNS && !(Q === 'xmlns' || B === 'xmlns')) E5.NamespaceError();
  return { namespace: A, prefix: Q, localName: I };
}
Se.prototype = Object.create(vH2.prototype, {
  _setMutationHandler: {
    value: function (A) {
      this.mutationHandler = A;
    },
  },
  _dispatchRendererEvent: {
    value: function (A, B, Q) {
      var I = this._nodes[A];
      if (!I) return;
      I._dispatchEvent(new Pe(B, Q), !0);
    },
  },
  nodeName: { value: '#document' },
  nodeValue: {
    get: function () {
      return null;
    },
    set: function () {},
  },
  documentURI: {
    get: function () {
      return this._address;
    },
    set: E5.nyi,
  },
  compatMode: {
    get: function () {
      return this._quirks ? 'BackCompat' : 'CSS1Compat';
    },
  },
  createTextNode: {
    value: function (A) {
      return new f65(this, String(A));
    },
  },
  createComment: {
    value: function (A) {
      return new v65(this, A);
    },
  },
  createDocumentFragment: {
    value: function () {
      return new b65(this);
    },
  },
  createProcessingInstruction: {
    value: function (A, B) {
      if (!aV1.isValidName(A) || B.indexOf('?>') !== -1) E5.InvalidCharacterError();
      return new g65(this, A, B);
    },
  },
  createAttribute: {
    value: function (A) {
      if (((A = String(A)), !aV1.isValidName(A))) E5.InvalidCharacterError();
      if (this.isHTML) A = E5.toASCIILowerCase(A);
      return new cR._Attr(null, A, null, null, '');
    },
  },
  createAttributeNS: {
    value: function (A, B) {
      ((A = A === null || A === void 0 || A === '' ? null : String(A)), (B = String(B)));
      var Q = xH2(A, B);
      return new cR._Attr(null, Q.localName, Q.prefix, Q.namespace, '');
    },
  },
  createElement: {
    value: function (A) {
      if (((A = String(A)), !aV1.isValidName(A))) E5.InvalidCharacterError();
      if (this.isHTML) {
        if (/[A-Z]/.test(A)) A = E5.toASCIILowerCase(A);
        return Eo1.createElement(this, A, null);
      } else if (this.contentType === 'application/xhtml+xml')
        return Eo1.createElement(this, A, null);
      else return new cR(this, A, null, null);
    },
    writable: Uo1,
  },
  createElementNS: {
    value: function (A, B) {
      ((A = A === null || A === void 0 || A === '' ? null : String(A)), (B = String(B)));
      var Q = xH2(A, B);
      return this._createElementNS(Q.localName, Q.namespace, Q.prefix);
    },
    writable: Uo1,
  },
  _createElementNS: {
    value: function (A, B, Q) {
      if (B === Nd.HTML) return Eo1.createElement(this, A, Q);
      else if (B === Nd.SVG) return p65.createElement(this, A, Q);
      return new cR(this, A, B, Q);
    },
  },
  createEvent: {
    value: function A(B) {
      B = B.toLowerCase();
      var Q = l65[B] || B,
        I = u65[c65[Q]];
      if (I) {
        var G = new I();
        return ((G._initialized = !1), G);
      } else E5.NotSupportedError();
    },
  },
  createTreeWalker: {
    value: function (A, B, Q) {
      if (!A) throw new TypeError('root argument is required');
      if (!(A instanceof ED)) throw new TypeError('root not a node');
      return (
        (B = B === void 0 ? jH2.SHOW_ALL : +B),
        (Q = Q === void 0 ? null : Q),
        new m65(A, B, Q)
      );
    },
  },
  createNodeIterator: {
    value: function (A, B, Q) {
      if (!A) throw new TypeError('root argument is required');
      if (!(A instanceof ED)) throw new TypeError('root not a node');
      return (
        (B = B === void 0 ? jH2.SHOW_ALL : +B),
        (Q = Q === void 0 ? null : Q),
        new d65(A, B, Q)
      );
    },
  },
  _attachNodeIterator: {
    value: function (A) {
      if (!this._nodeIterators) this._nodeIterators = [];
      this._nodeIterators.push(A);
    },
  },
  _detachNodeIterator: {
    value: function (A) {
      var B = this._nodeIterators.indexOf(A);
      this._nodeIterators.splice(B, 1);
    },
  },
  _preremoveNodeIterators: {
    value: function (A) {
      if (this._nodeIterators)
        this._nodeIterators.forEach(function (B) {
          B._preremove(A);
        });
    },
  },
  _updateDocTypeElement: {
    value: function A() {
      this.doctype = this.documentElement = null;
      for (var B = this.firstChild; B !== null; B = B.nextSibling)
        if (B.nodeType === ED.DOCUMENT_TYPE_NODE) this.doctype = B;
        else if (B.nodeType === ED.ELEMENT_NODE) this.documentElement = B;
    },
  },
  insertBefore: {
    value: function A(B, Q) {
      return (ED.prototype.insertBefore.call(this, B, Q), this._updateDocTypeElement(), B);
    },
  },
  replaceChild: {
    value: function A(B, Q) {
      return (ED.prototype.replaceChild.call(this, B, Q), this._updateDocTypeElement(), Q);
    },
  },
  removeChild: {
    value: function A(B) {
      return (ED.prototype.removeChild.call(this, B), this._updateDocTypeElement(), B);
    },
  },
  getElementById: {
    value: function (A) {
      var B = this.byId[A];
      if (!B) return null;
      if (B instanceof gN) return B.getFirst();
      return B;
    },
  },
  _hasMultipleElementsWithId: {
    value: function (A) {
      return this.byId[A] instanceof gN;
    },
  },
  getElementsByName: { value: cR.prototype.getElementsByName },
  getElementsByTagName: { value: cR.prototype.getElementsByTagName },
  getElementsByTagNameNS: { value: cR.prototype.getElementsByTagNameNS },
  getElementsByClassName: { value: cR.prototype.getElementsByClassName },
  adoptNode: {
    value: function A(B) {
      if (B.nodeType === ED.DOCUMENT_NODE) E5.NotSupportedError();
      if (B.nodeType === ED.ATTRIBUTE_NODE) return B;
      if (B.parentNode) B.parentNode.removeChild(B);
      if (B.ownerDocument !== this) hH2(B, this);
      return B;
    },
  },
  importNode: {
    value: function A(B, Q) {
      return this.adoptNode(B.cloneNode(Q));
    },
    writable: Uo1,
  },
  origin: {
    get: function A() {
      return null;
    },
  },
  characterSet: {
    get: function A() {
      return 'UTF-8';
    },
  },
  contentType: {
    get: function A() {
      return this._contentType;
    },
  },
  URL: {
    get: function A() {
      return this._address;
    },
  },
  domain: { get: E5.nyi, set: E5.nyi },
  referrer: { get: E5.nyi },
  cookie: { get: E5.nyi, set: E5.nyi },
  lastModified: { get: E5.nyi },
  location: {
    get: function () {
      return this.defaultView ? this.defaultView.location : null;
    },
    set: E5.nyi,
  },
  _titleElement: {
    get: function () {
      return this.getElementsByTagName('title').item(0) || null;
    },
  },
  title: {
    get: function () {
      var A = this._titleElement,
        B = A ? A.textContent : '';
      return B.replace(/[ \t\n\r\f]+/g, ' ').replace(/(^ )|( $)/g, '');
    },
    set: function (A) {
      var B = this._titleElement,
        Q = this.head;
      if (!B && !Q) return;
      if (!B) ((B = this.createElement('title')), Q.appendChild(B));
      B.textContent = A;
    },
  },
  dir: Ud(
    function () {
      var A = this.documentElement;
      if (A && A.tagName === 'HTML') return A;
    },
    'dir',
    ''
  ),
  fgColor: Ud(
    function () {
      return this.body;
    },
    'text',
    ''
  ),
  linkColor: Ud(
    function () {
      return this.body;
    },
    'link',
    ''
  ),
  vlinkColor: Ud(
    function () {
      return this.body;
    },
    'vLink',
    ''
  ),
  alinkColor: Ud(
    function () {
      return this.body;
    },
    'aLink',
    ''
  ),
  bgColor: Ud(
    function () {
      return this.body;
    },
    'bgColor',
    ''
  ),
  charset: {
    get: function () {
      return this.characterSet;
    },
  },
  inputEncoding: {
    get: function () {
      return this.characterSet;
    },
  },
  scrollingElement: {
    get: function () {
      return this._quirks ? this.body : this.documentElement;
    },
  },
  body: {
    get: function () {
      return fH2(this.documentElement, 'body');
    },
    set: E5.nyi,
  },
  head: {
    get: function () {
      return fH2(this.documentElement, 'head');
    },
  },
  images: { get: E5.nyi },
  embeds: { get: E5.nyi },
  plugins: { get: E5.nyi },
  links: { get: E5.nyi },
  forms: { get: E5.nyi },
  scripts: { get: E5.nyi },
  applets: {
    get: function () {
      return [];
    },
  },
  activeElement: {
    get: function () {
      return null;
    },
  },
  innerHTML: {
    get: function () {
      return this.serialize();
    },
    set: E5.nyi,
  },
  outerHTML: {
    get: function () {
      return this.serialize();
    },
    set: E5.nyi,
  },
  write: {
    value: function (A) {
      if (!this.isHTML) E5.InvalidStateError();
      if (!this._parser) return;
      if (!this._parser);
      var B = arguments.join('');
      this._parser.parse(B);
    },
  },
  writeln: {
    value: function A(B) {
      this.write(
        Array.prototype.join.call(arguments, '') +
          `
`
      );
    },
  },
  open: {
    value: function () {
      this.documentElement = null;
    },
  },
  close: {
    value: function () {
      if (
        ((this.readyState = 'interactive'),
        this._dispatchEvent(new Pe('readystatechange'), !0),
        this._dispatchEvent(new Pe('DOMContentLoaded'), !0),
        (this.readyState = 'complete'),
        this._dispatchEvent(new Pe('readystatechange'), !0),
        this.defaultView)
      )
        this.defaultView._dispatchEvent(new Pe('load'), !0);
    },
  },
  clone: {
    value: function A() {
      var B = new Se(this.isHTML, this._address);
      return ((B._quirks = this._quirks), (B._contentType = this._contentType), B);
    },
  },
  cloneNode: {
    value: function A(B) {
      var Q = ED.prototype.cloneNode.call(this, !1);
      if (B)
        for (var I = this.firstChild; I !== null; I = I.nextSibling)
          Q._appendChild(Q.importNode(I, !0));
      return (Q._updateDocTypeElement(), Q);
    },
  },
  isEqual: {
    value: function A(B) {
      return !0;
    },
  },
  mutateValue: {
    value: function (A) {
      if (this.mutationHandler) this.mutationHandler({ type: Ed.VALUE, target: A, data: A.data });
    },
  },
  mutateAttr: {
    value: function (A, B) {
      if (this.mutationHandler)
        this.mutationHandler({ type: Ed.ATTR, target: A.ownerElement, attr: A });
    },
  },
  mutateRemoveAttr: {
    value: function (A) {
      if (this.mutationHandler)
        this.mutationHandler({ type: Ed.REMOVE_ATTR, target: A.ownerElement, attr: A });
    },
  },
  mutateRemove: {
    value: function (A) {
      if (this.mutationHandler)
        this.mutationHandler({ type: Ed.REMOVE, target: A.parentNode, node: A });
      gH2(A);
    },
  },
  mutateInsert: {
    value: function (A) {
      if ((bH2(A), this.mutationHandler))
        this.mutationHandler({ type: Ed.INSERT, target: A.parentNode, node: A });
    },
  },
  mutateMove: {
    value: function (A) {
      if (this.mutationHandler) this.mutationHandler({ type: Ed.MOVE, target: A });
    },
  },
  addId: {
    value: function A(B, Q) {
      var I = this.byId[B];
      if (!I) this.byId[B] = Q;
      else {
        if (!(I instanceof gN)) ((I = new gN(I)), (this.byId[B] = I));
        I.add(Q);
      }
    },
  },
  delId: {
    value: function A(B, Q) {
      var I = this.byId[B];
      if ((E5.assert(I), I instanceof gN)) {
        if ((I.del(Q), I.length === 1)) this.byId[B] = I.downgrade();
      } else this.byId[B] = void 0;
    },
  },
  _resolve: {
    value: function (A) {
      return new yH2(this._documentBaseURL).resolve(A);
    },
  },
  _documentBaseURL: {
    get: function () {
      var A = this._address;
      if (A === 'about:blank') A = '/';
      var B = this.querySelector('base[href]');
      if (B) return new yH2(A).resolve(B.getAttribute('href'));
      return A;
    },
  },
  _templateDoc: {
    get: function () {
      if (!this._templateDocCache) {
        var A = new Se(this.isHTML, this._address);
        this._templateDocCache = A._templateDocCache = A;
      }
      return this._templateDocCache;
    },
  },
  querySelector: {
    value: function (A) {
      return kH2(A, this)[0];
    },
  },
  querySelectorAll: {
    value: function (A) {
      var B = kH2(A, this);
      return B.item ? B : new x65(B);
    },
  },
});
var i65 = [
  'abort',
  'canplay',
  'canplaythrough',
  'change',
  'click',
  'contextmenu',
  'cuechange',
  'dblclick',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'dragover',
  'dragstart',
  'drop',
  'durationchange',
  'emptied',
  'ended',
  'input',
  'invalid',
  'keydown',
  'keypress',
  'keyup',
  'loadeddata',
  'loadedmetadata',
  'loadstart',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'mousewheel',
  'pause',
  'play',
  'playing',
  'progress',
  'ratechange',
  'readystatechange',
  'reset',
  'seeked',
  'seeking',
  'select',
  'show',
  'stalled',
  'submit',
  'suspend',
  'timeupdate',
  'volumechange',
  'waiting',
  'blur',
  'error',
  'focus',
  'load',
  'scroll',
];
i65.forEach(function (A) {
  Object.defineProperty(Se.prototype, 'on' + A, {
    get: function () {
      return this._getEventHandler(A);
    },
    set: function (B) {
      this._setEventHandler(A, B);
    },
  });
});
function fH2(A, B) {
  if (A && A.isHTML) {
    for (var Q = A.firstChild; Q !== null; Q = Q.nextSibling)
      if (Q.nodeType === ED.ELEMENT_NODE && Q.localName === B && Q.namespaceURI === Nd.HTML)
        return Q;
  }
  return null;
}
function n65(A) {
  if (
    ((A._nid = A.ownerDocument._nextnid++),
    (A.ownerDocument._nodes[A._nid] = A),
    A.nodeType === ED.ELEMENT_NODE)
  ) {
    var B = A.getAttribute('id');
    if (B) A.ownerDocument.addId(B, A);
    if (A._roothook) A._roothook();
  }
}
function a65(A) {
  if (A.nodeType === ED.ELEMENT_NODE) {
    var B = A.getAttribute('id');
    if (B) A.ownerDocument.delId(B, A);
  }
  ((A.ownerDocument._nodes[A._nid] = void 0), (A._nid = void 0));
}
function bH2(A) {
  if ((n65(A), A.nodeType === ED.ELEMENT_NODE))
    for (var B = A.firstChild; B !== null; B = B.nextSibling) bH2(B);
}
function gH2(A) {
  a65(A);
  for (var B = A.firstChild; B !== null; B = B.nextSibling) gH2(B);
}
function hH2(A, B) {
  if (
    ((A.ownerDocument = B),
    (A._lastModTime = void 0),
    Object.prototype.hasOwnProperty.call(A, '_tagName'))
  )
    A._tagName = void 0;
  for (var Q = A.firstChild; Q !== null; Q = Q.nextSibling) hH2(Q, B);
}
function gN(A) {
  ((this.nodes = Object.create(null)),
    (this.nodes[A._nid] = A),
    (this.length = 1),
    (this.firstNode = void 0));
}
gN.prototype.add = function (A) {
  if (!this.nodes[A._nid]) ((this.nodes[A._nid] = A), this.length++, (this.firstNode = void 0));
};
gN.prototype.del = function (A) {
  if (this.nodes[A._nid]) (delete this.nodes[A._nid], this.length--, (this.firstNode = void 0));
};
gN.prototype.getFirst = function () {
  if (!this.firstNode) {
    var A;
    for (A in this.nodes)
      if (
        this.firstNode === void 0 ||
        this.firstNode.compareDocumentPosition(this.nodes[A]) & ED.DOCUMENT_POSITION_PRECEDING
      )
        this.firstNode = this.nodes[A];
  }
  return this.firstNode;
};
gN.prototype.downgrade = function () {
  if (this.length === 1) {
    var A;
    for (A in this.nodes) return this.nodes[A];
  }
  return this;
};
