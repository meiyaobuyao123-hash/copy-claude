// Module: VY0
// Params: tG8,XY0

var tj4 = QG1().FilterCSS,
  cJ = If1(),
  JY0 = Gf1(),
  ej4 = JY0.parseTag,
  Ay4 = JY0.parseAttr,
  YG1 = IG1();
function ZG1(A) {
  return A === void 0 || A === null;
}
function By4(A) {
  var B = YG1.spaceIndex(A);
  if (B === -1) return { html: '', closing: A[A.length - 2] === '/' };
  A = YG1.trim(A.slice(B + 1, -1));
  var Q = A[A.length - 1] === '/';
  if (Q) A = YG1.trim(A.slice(0, -1));
  return { html: A, closing: Q };
}
function Qy4(A) {
  var B = {};
  for (var Q in A) B[Q] = A[Q];
  return B;
}
function Iy4(A) {
  var B = {};
  for (var Q in A)
    if (Array.isArray(A[Q]))
      B[Q.toLowerCase()] = A[Q].map(function (I) {
        return I.toLowerCase();
      });
    else B[Q.toLowerCase()] = A[Q];
  return B;
}
function CY0(A) {
  if (((A = Qy4(A || {})), A.stripIgnoreTag)) {
    if (A.onIgnoreTag)
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    A.onIgnoreTag = cJ.onIgnoreTagStripAll;
  }
  if (A.whiteList || A.allowList) A.whiteList = Iy4(A.whiteList || A.allowList);
  else A.whiteList = cJ.whiteList;
  if (
    ((this.attributeWrapSign = A.singleQuotedAttributeValue === !0 ? "'" : cJ.attributeWrapSign),
    (A.onTag = A.onTag || cJ.onTag),
    (A.onTagAttr = A.onTagAttr || cJ.onTagAttr),
    (A.onIgnoreTag = A.onIgnoreTag || cJ.onIgnoreTag),
    (A.onIgnoreTagAttr = A.onIgnoreTagAttr || cJ.onIgnoreTagAttr),
    (A.safeAttrValue = A.safeAttrValue || cJ.safeAttrValue),
    (A.escapeHtml = A.escapeHtml || cJ.escapeHtml),
    (this.options = A),
    A.css === !1)
  )
    this.cssFilter = !1;
  else ((A.css = A.css || {}), (this.cssFilter = new tj4(A.css)));
}
CY0.prototype.process = function (A) {
  if (((A = A || ''), (A = A.toString()), !A)) return '';
  var B = this,
    Q = B.options,
    I = Q.whiteList,
    G = Q.onTag,
    D = Q.onIgnoreTag,
    Z = Q.onTagAttr,
    Y = Q.onIgnoreTagAttr,
    W = Q.safeAttrValue,
    F = Q.escapeHtml,
    J = B.attributeWrapSign,
    C = B.cssFilter;
  if (Q.stripBlankChar) A = cJ.stripBlankChar(A);
  if (!Q.allowCommentTag) A = cJ.stripCommentTag(A);
  var X = !1;
  if (Q.stripIgnoreTagBody) ((X = cJ.StripTagBody(Q.stripIgnoreTagBody, D)), (D = X.onIgnoreTag));
  var V = ej4(
    A,
    function (K, U, N, q, M) {
      var R = {
          sourcePosition: K,
          position: U,
          isClosing: M,
          isWhite: Object.prototype.hasOwnProperty.call(I, N),
        },
        T = G(N, q, R);
      if (!ZG1(T)) return T;
      if (R.isWhite) {
        if (R.isClosing) return '</' + N + '>';
        var O = By4(q),
          S = I[N],
          f = Ay4(O.html, function (a, g) {
            var Y1 = YG1.indexOf(S, a) !== -1,
              r = Z(N, a, g, Y1);
            if (!ZG1(r)) return r;
            if (Y1)
              if (((g = W(N, a, g, C)), g)) return a + '=' + J + g + J;
              else return a;
            else {
              if (((r = Y(N, a, g, Y1)), !ZG1(r))) return r;
              return;
            }
          });
        if (((q = '<' + N), f)) q += ' ' + f;
        if (O.closing) q += ' /';
        return ((q += '>'), q);
      } else {
        if (((T = D(N, q, R)), !ZG1(T))) return T;
        return F(q);
      }
    },
    F
  );
  if (X) V = X.remove(V);
  return V;
};
XY0.exports = CY0;
