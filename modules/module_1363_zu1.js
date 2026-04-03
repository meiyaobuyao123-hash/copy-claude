// Module: zu1
// Params: pF6

var { DOCUMENT_MODE: dF6 } = iL();
pF6.createDocument = function () {
  return { nodeName: '#document', mode: dF6.NO_QUIRKS, childNodes: [] };
};
pF6.createDocumentFragment = function () {
  return { nodeName: '#document-fragment', childNodes: [] };
};
pF6.createElement = function (A, B, Q) {
  return { nodeName: A, tagName: A, attrs: Q, namespaceURI: B, childNodes: [], parentNode: null };
};
pF6.createCommentNode = function (A) {
  return { nodeName: '#comment', data: A, parentNode: null };
};
var Ah0 = function (A) {
    return { nodeName: '#text', value: A, parentNode: null };
  },
  Bh0 = (pF6.appendChild = function (A, B) {
    (A.childNodes.push(B), (B.parentNode = A));
  }),
  uF6 = (pF6.insertBefore = function (A, B, Q) {
    let I = A.childNodes.indexOf(Q);
    (A.childNodes.splice(I, 0, B), (B.parentNode = A));
  });
pF6.setTemplateContent = function (A, B) {
  A.content = B;
};
pF6.getTemplateContent = function (A) {
  return A.content;
};
pF6.setDocumentType = function (A, B, Q, I) {
  let G = null;
  for (let D = 0; D < A.childNodes.length; D++)
    if (A.childNodes[D].nodeName === '#documentType') {
      G = A.childNodes[D];
      break;
    }
  if (G) ((G.name = B), (G.publicId = Q), (G.systemId = I));
  else Bh0(A, { nodeName: '#documentType', name: B, publicId: Q, systemId: I });
};
pF6.setDocumentMode = function (A, B) {
  A.mode = B;
};
pF6.getDocumentMode = function (A) {
  return A.mode;
};
pF6.detachNode = function (A) {
  if (A.parentNode) {
    let B = A.parentNode.childNodes.indexOf(A);
    (A.parentNode.childNodes.splice(B, 1), (A.parentNode = null));
  }
};
pF6.insertText = function (A, B) {
  if (A.childNodes.length) {
    let Q = A.childNodes[A.childNodes.length - 1];
    if (Q.nodeName === '#text') {
      Q.value += B;
      return;
    }
  }
  Bh0(A, Ah0(B));
};
pF6.insertTextBefore = function (A, B, Q) {
  let I = A.childNodes[A.childNodes.indexOf(Q) - 1];
  if (I && I.nodeName === '#text') I.value += B;
  else uF6(A, Ah0(B), Q);
};
pF6.adoptAttributes = function (A, B) {
  let Q = [];
  for (let I = 0; I < A.attrs.length; I++) Q.push(A.attrs[I].name);
  for (let I = 0; I < B.length; I++) if (Q.indexOf(B[I].name) === -1) A.attrs.push(B[I]);
};
pF6.getFirstChild = function (A) {
  return A.childNodes[0];
};
pF6.getChildNodes = function (A) {
  return A.childNodes;
};
pF6.getParentNode = function (A) {
  return A.parentNode;
};
pF6.getAttrList = function (A) {
  return A.attrs;
};
pF6.getTagName = function (A) {
  return A.tagName;
};
pF6.getNamespaceURI = function (A) {
  return A.namespaceURI;
};
pF6.getTextNodeContent = function (A) {
  return A.value;
};
pF6.getCommentNodeContent = function (A) {
  return A.data;
};
pF6.getDocumentTypeNodeName = function (A) {
  return A.name;
};
pF6.getDocumentTypeNodePublicId = function (A) {
  return A.publicId;
};
pF6.getDocumentTypeNodeSystemId = function (A) {
  return A.systemId;
};
pF6.isTextNode = function (A) {
  return A.nodeName === '#text';
};
pF6.isCommentNode = function (A) {
  return A.nodeName === '#comment';
};
pF6.isDocumentTypeNode = function (A) {
  return A.nodeName === '#documentType';
};
pF6.isElementNode = function (A) {
  return !!A.tagName;
};
pF6.setNodeSourceCodeLocation = function (A, B) {
  A.sourceCodeLocation = B;
};
pF6.getNodeSourceCodeLocation = function (A) {
  return A.sourceCodeLocation;
};
