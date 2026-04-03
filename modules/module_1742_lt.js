// Module: lt
// Params: qA5

function NA5(A, B, Q) {
  if (Q === void 0) Q = Array.prototype;
  if (A && typeof Q.find === 'function') return Q.find.call(A, B);
  for (var I = 0; I < A.length; I++)
    if (Object.prototype.hasOwnProperty.call(A, I)) {
      var G = A[I];
      if (B.call(void 0, G, I, A)) return G;
    }
}
function Ps1(A, B) {
  if (B === void 0) B = Object;
  return B && typeof B.freeze === 'function' ? B.freeze(A) : A;
}
function $A5(A, B) {
  if (A === null || typeof A !== 'object') throw new TypeError('target is not an object');
  for (var Q in B) if (Object.prototype.hasOwnProperty.call(B, Q)) A[Q] = B[Q];
  return A;
}
var GJ2 = Ps1({
    HTML: 'text/html',
    isHTML: function (A) {
      return A === GJ2.HTML;
    },
    XML_APPLICATION: 'application/xml',
    XML_TEXT: 'text/xml',
    XML_XHTML_APPLICATION: 'application/xhtml+xml',
    XML_SVG_IMAGE: 'image/svg+xml',
  }),
  DJ2 = Ps1({
    HTML: 'http://www.w3.org/1999/xhtml',
    isHTML: function (A) {
      return A === DJ2.HTML;
    },
    SVG: 'http://www.w3.org/2000/svg',
    XML: 'http://www.w3.org/XML/1998/namespace',
    XMLNS: 'http://www.w3.org/2000/xmlns/',
  });
qA5.assign = $A5;
qA5.find = NA5;
qA5.freeze = Ps1;
qA5.MIME_TYPE = GJ2;
qA5.NAMESPACE = DJ2;
