// Module: mh0
// Params: eX6

var rX6 = vh0(),
  { DOCUMENT_MODE: oX6 } = Ou1(),
  bh0 = { element: 1, text: 3, cdata: 4, comment: 8 },
  gh0 = {
    tagName: 'name',
    childNodes: 'children',
    parentNode: 'parent',
    previousSibling: 'prev',
    nextSibling: 'next',
    nodeValue: 'data',
  };
class sL {
  constructor(A) {
    for (let B of Object.keys(A)) this[B] = A[B];
  }
  get firstChild() {
    let A = this.children;
    return (A && A[0]) || null;
  }
  get lastChild() {
    let A = this.children;
    return (A && A[A.length - 1]) || null;
  }
  get nodeType() {
    return bh0[this.type] || bh0.element;
  }
}
Object.keys(gh0).forEach((A) => {
  let B = gh0[A];
  Object.defineProperty(sL.prototype, A, {
    get: function () {
      return this[B] || null;
    },
    set: function (Q) {
      return ((this[B] = Q), Q);
    },
  });
});
eX6.createDocument = function () {
  return new sL({
    type: 'root',
    name: 'root',
    parent: null,
    prev: null,
    next: null,
    children: [],
    'x-mode': oX6.NO_QUIRKS,
  });
};
eX6.createDocumentFragment = function () {
  return new sL({ type: 'root', name: 'root', parent: null, prev: null, next: null, children: [] });
};
eX6.createElement = function (A, B, Q) {
  let I = Object.create(null),
    G = Object.create(null),
    D = Object.create(null);
  for (let Z = 0; Z < Q.length; Z++) {
    let Y = Q[Z].name;
    ((I[Y] = Q[Z].value), (G[Y] = Q[Z].namespace), (D[Y] = Q[Z].prefix));
  }
  return new sL({
    type: A === 'script' || A === 'style' ? A : 'tag',
    name: A,
    namespace: B,
    attribs: I,
    'x-attribsNamespace': G,
    'x-attribsPrefix': D,
    children: [],
    parent: null,
    prev: null,
    next: null,
  });
};
eX6.createCommentNode = function (A) {
  return new sL({ type: 'comment', data: A, parent: null, prev: null, next: null });
};
var hh0 = function (A) {
    return new sL({ type: 'text', data: A, parent: null, prev: null, next: null });
  },
  Tu1 = (eX6.appendChild = function (A, B) {
    let Q = A.children[A.children.length - 1];
    if (Q) ((Q.next = B), (B.prev = Q));
    (A.children.push(B), (B.parent = A));
  }),
  tX6 = (eX6.insertBefore = function (A, B, Q) {
    let I = A.children.indexOf(Q),
      G = Q.prev;
    if (G) ((G.next = B), (B.prev = G));
    ((Q.prev = B), (B.next = Q), A.children.splice(I, 0, B), (B.parent = A));
  });
eX6.setTemplateContent = function (A, B) {
  Tu1(A, B);
};
eX6.getTemplateContent = function (A) {
  return A.children[0];
};
eX6.setDocumentType = function (A, B, Q, I) {
  let G = rX6.serializeContent(B, Q, I),
    D = null;
  for (let Z = 0; Z < A.children.length; Z++)
    if (A.children[Z].type === 'directive' && A.children[Z].name === '!doctype') {
      D = A.children[Z];
      break;
    }
  if (D) ((D.data = G), (D['x-name'] = B), (D['x-publicId'] = Q), (D['x-systemId'] = I));
  else
    Tu1(
      A,
      new sL({
        type: 'directive',
        name: '!doctype',
        data: G,
        'x-name': B,
        'x-publicId': Q,
        'x-systemId': I,
      })
    );
};
eX6.setDocumentMode = function (A, B) {
  A['x-mode'] = B;
};
eX6.getDocumentMode = function (A) {
  return A['x-mode'];
};
eX6.detachNode = function (A) {
  if (A.parent) {
    let B = A.parent.children.indexOf(A),
      Q = A.prev,
      I = A.next;
    if (((A.prev = null), (A.next = null), Q)) Q.next = I;
    if (I) I.prev = Q;
    (A.parent.children.splice(B, 1), (A.parent = null));
  }
};
eX6.insertText = function (A, B) {
  let Q = A.children[A.children.length - 1];
  if (Q && Q.type === 'text') Q.data += B;
  else Tu1(A, hh0(B));
};
eX6.insertTextBefore = function (A, B, Q) {
  let I = A.children[A.children.indexOf(Q) - 1];
  if (I && I.type === 'text') I.data += B;
  else tX6(A, hh0(B), Q);
};
eX6.adoptAttributes = function (A, B) {
  for (let Q = 0; Q < B.length; Q++) {
    let I = B[Q].name;
    if (typeof A.attribs[I] === 'undefined')
      ((A.attribs[I] = B[Q].value),
        (A['x-attribsNamespace'][I] = B[Q].namespace),
        (A['x-attribsPrefix'][I] = B[Q].prefix));
  }
};
eX6.getFirstChild = function (A) {
  return A.children[0];
};
eX6.getChildNodes = function (A) {
  return A.children;
};
eX6.getParentNode = function (A) {
  return A.parent;
};
eX6.getAttrList = function (A) {
  let B = [];
  for (let Q in A.attribs)
    B.push({
      name: Q,
      value: A.attribs[Q],
      namespace: A['x-attribsNamespace'][Q],
      prefix: A['x-attribsPrefix'][Q],
    });
  return B;
};
eX6.getTagName = function (A) {
  return A.name;
};
eX6.getNamespaceURI = function (A) {
  return A.namespace;
};
eX6.getTextNodeContent = function (A) {
  return A.data;
};
eX6.getCommentNodeContent = function (A) {
  return A.data;
};
eX6.getDocumentTypeNodeName = function (A) {
  return A['x-name'];
};
eX6.getDocumentTypeNodePublicId = function (A) {
  return A['x-publicId'];
};
eX6.getDocumentTypeNodeSystemId = function (A) {
  return A['x-systemId'];
};
eX6.isTextNode = function (A) {
  return A.type === 'text';
};
eX6.isCommentNode = function (A) {
  return A.type === 'comment';
};
eX6.isDocumentTypeNode = function (A) {
  return A.type === 'directive' && A.name === '!doctype';
};
eX6.isElementNode = function (A) {
  return !!A.attribs;
};
eX6.setNodeSourceCodeLocation = function (A, B) {
  A.sourceCodeLocation = B;
};
eX6.getNodeSourceCodeLocation = function (A) {
  return A.sourceCodeLocation;
};
eX6.updateNodeSourceCodeLocation = function (A, B) {
  A.sourceCodeLocation = Object.assign(A.sourceCodeLocation, B);
};
