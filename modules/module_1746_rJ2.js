// Module: rJ2
// Params: K05

var W05 = lt(),
  F05 = hs1(),
  cJ2 = fJ2(),
  nJ2 = pJ2(),
  J05 = F05.DOMImplementation,
  lJ2 = W05.NAMESPACE,
  C05 = nJ2.ParseError,
  X05 = nJ2.XMLReader;
function aJ2(A) {
  return A.replace(
    /\r[\n\u0085]/g,
    `
`
  ).replace(
    /[\r\u0085\u2028]/g,
    `
`
  );
}
function sJ2(A) {
  this.options = A || { locator: {} };
}
sJ2.prototype.parseFromString = function (A, B) {
  var Q = this.options,
    I = new X05(),
    G = Q.domBuilder || new Be(),
    D = Q.errorHandler,
    Z = Q.locator,
    Y = Q.xmlns || {},
    W = /\/x?html?$/.test(B),
    F = W ? cJ2.HTML_ENTITIES : cJ2.XML_ENTITIES;
  if (Z) G.setDocumentLocator(Z);
  if (((I.errorHandler = V05(D, G, Z)), (I.domBuilder = Q.domBuilder || G), W)) Y[''] = lJ2.HTML;
  Y.xml = Y.xml || lJ2.XML;
  var J = Q.normalizeLineEndings || aJ2;
  if (A && typeof A === 'string') I.parse(J(A), Y, F);
  else I.errorHandler.error('invalid doc source');
  return G.doc;
};
function V05(A, B, Q) {
  if (!A) {
    if (B instanceof Be) return B;
    A = B;
  }
  var I = {},
    G = A instanceof Function;
  Q = Q || {};
  function D(Z) {
    var Y = A[Z];
    if (!Y && G)
      Y =
        A.length == 2
          ? function (W) {
              A(Z, W);
            }
          : A;
    I[Z] =
      (Y &&
        function (W) {
          Y('[xmldom ' + Z + ']\t' + W + ds1(Q));
        }) ||
      function () {};
  }
  return (D('warning'), D('error'), D('fatalError'), I);
}
function Be() {
  this.cdata = !1;
}
function tm(A, B) {
  ((B.lineNumber = A.lineNumber), (B.columnNumber = A.columnNumber));
}
Be.prototype = {
  startDocument: function () {
    if (((this.doc = new J05().createDocument(null, null, null)), this.locator))
      this.doc.documentURI = this.locator.systemId;
  },
  startElement: function (A, B, Q, I) {
    var G = this.doc,
      D = G.createElementNS(A, Q || B),
      Z = I.length;
    (BV1(this, D), (this.currentElement = D), this.locator && tm(this.locator, D));
    for (var Y = 0; Y < Z; Y++) {
      var A = I.getURI(Y),
        W = I.getValue(Y),
        Q = I.getQName(Y),
        F = G.createAttributeNS(A, Q);
      (this.locator && tm(I.getLocator(Y), F), (F.value = F.nodeValue = W), D.setAttributeNode(F));
    }
  },
  endElement: function (A, B, Q) {
    var I = this.currentElement,
      G = I.tagName;
    this.currentElement = I.parentNode;
  },
  startPrefixMapping: function (A, B) {},
  endPrefixMapping: function (A) {},
  processingInstruction: function (A, B) {
    var Q = this.doc.createProcessingInstruction(A, B);
    (this.locator && tm(this.locator, Q), BV1(this, Q));
  },
  ignorableWhitespace: function (A, B, Q) {},
  characters: function (A, B, Q) {
    if (((A = iJ2.apply(this, arguments)), A)) {
      if (this.cdata) var I = this.doc.createCDATASection(A);
      else var I = this.doc.createTextNode(A);
      if (this.currentElement) this.currentElement.appendChild(I);
      else if (/^\s*$/.test(A)) this.doc.appendChild(I);
      this.locator && tm(this.locator, I);
    }
  },
  skippedEntity: function (A) {},
  endDocument: function () {
    this.doc.normalize();
  },
  setDocumentLocator: function (A) {
    if ((this.locator = A)) A.lineNumber = 0;
  },
  comment: function (A, B, Q) {
    A = iJ2.apply(this, arguments);
    var I = this.doc.createComment(A);
    (this.locator && tm(this.locator, I), BV1(this, I));
  },
  startCDATA: function () {
    this.cdata = !0;
  },
  endCDATA: function () {
    this.cdata = !1;
  },
  startDTD: function (A, B, Q) {
    var I = this.doc.implementation;
    if (I && I.createDocumentType) {
      var G = I.createDocumentType(A, B, Q);
      (this.locator && tm(this.locator, G), BV1(this, G), (this.doc.doctype = G));
    }
  },
  warning: function (A) {
    console.warn('[xmldom warning]\t' + A, ds1(this.locator));
  },
  error: function (A) {
    console.error('[xmldom error]\t' + A, ds1(this.locator));
  },
  fatalError: function (A) {
    throw new C05(A, this.locator);
  },
};
function ds1(A) {
  if (A)
    return (
      `
@` +
      (A.systemId || '') +
      '#[line:' +
      A.lineNumber +
      ',col:' +
      A.columnNumber +
      ']'
    );
}
function iJ2(A, B, Q) {
  if (typeof A == 'string') return A.substr(B, Q);
  else {
    if (A.length >= B + Q || B) return new java.lang.String(A, B, Q) + '';
    return A;
  }
}
'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'.replace(
  /\w+/g,
  function (A) {
    Be.prototype[A] = function () {
      return null;
    };
  }
);
function BV1(A, B) {
  if (!A.currentElement) A.doc.appendChild(B);
  else A.currentElement.appendChild(B);
}
K05.__DOMHandler = Be;
K05.normalizeLineEndings = aJ2;
K05.DOMParser = sJ2;
