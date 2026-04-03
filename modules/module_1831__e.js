// Module: _e
// Params: vl8,Hz2

Hz2.exports = Kz2;
var Xz2 = sV1(),
  Vz2 = oV1(),
  E55 = GK1(),
  DK1 = h3(),
  U55 = xV1();
function Kz2(A) {
  this.contextObject = A;
}
var N55 = {
  xml: { '': !0, '1.0': !0, '2.0': !0 },
  core: { '': !0, '2.0': !0 },
  html: { '': !0, '1.0': !0, '2.0': !0 },
  xhtml: { '': !0, '1.0': !0, '2.0': !0 },
};
Kz2.prototype = {
  hasFeature: function A(B, Q) {
    var I = N55[(B || '').toLowerCase()];
    return (I && I[Q || '']) || !1;
  },
  createDocumentType: function A(B, Q, I) {
    if (!U55.isValidQName(B)) DK1.InvalidCharacterError();
    return new Vz2(this.contextObject, B, Q, I);
  },
  createDocument: function A(B, Q, I) {
    var G = new Xz2(!1, null),
      D;
    if (Q) D = G.createElementNS(B, Q);
    else D = null;
    if (I) G.appendChild(I);
    if (D) G.appendChild(D);
    if (B === DK1.NAMESPACE.HTML) G._contentType = 'application/xhtml+xml';
    else if (B === DK1.NAMESPACE.SVG) G._contentType = 'image/svg+xml';
    else G._contentType = 'application/xml';
    return G;
  },
  createHTMLDocument: function A(B) {
    var Q = new Xz2(!0, null);
    Q.appendChild(new Vz2(Q, 'html'));
    var I = Q.createElement('html');
    Q.appendChild(I);
    var G = Q.createElement('head');
    if ((I.appendChild(G), B !== void 0)) {
      var D = Q.createElement('title');
      (G.appendChild(D), D.appendChild(Q.createTextNode(B)));
    }
    return (I.appendChild(Q.createElement('body')), (Q.modclock = 1), Q);
  },
  mozSetOutputMutationHandler: function (A, B) {
    A.mutationHandler = B;
  },
  mozGetInputMutationHandler: function (A) {
    DK1.nyi();
  },
  mozHTMLParser: E55,
};
