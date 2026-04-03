// Module: Mz1
// Params: Pe1

Object.defineProperty(Pe1, '__esModule', { value: !0 });
var AM2 = QJ(),
  BM2 = fG(),
  Hy = BM2.getGlobalObject(),
  QM2 = 80;
function IM2(A, B = {}) {
  if (!A) return '<unknown>';
  try {
    let Q = A,
      I = 5,
      G = [],
      D = 0,
      Z = 0,
      Y = ' > ',
      W = Y.length,
      F,
      J = Array.isArray(B) ? B : B.keyAttrs,
      C = (!Array.isArray(B) && B.maxStringLength) || QM2;
    while (Q && D++ < I) {
      if (((F = GM2(Q, J)), F === 'html' || (D > 1 && Z + G.length * W + F.length >= C))) break;
      (G.push(F), (Z += F.length), (Q = Q.parentNode));
    }
    return G.reverse().join(Y);
  } catch (Q) {
    return '<unknown>';
  }
}
function GM2(A, B) {
  let Q = A,
    I = [],
    G,
    D,
    Z,
    Y,
    W;
  if (!Q || !Q.tagName) return '';
  if (Hy.HTMLElement) {
    if (Q instanceof HTMLElement && Q.dataset && Q.dataset.sentryComponent)
      return Q.dataset.sentryComponent;
  }
  I.push(Q.tagName.toLowerCase());
  let F =
    B && B.length ? B.filter((C) => Q.getAttribute(C)).map((C) => [C, Q.getAttribute(C)]) : null;
  if (F && F.length)
    F.forEach((C) => {
      I.push(`[${C[0]}="${C[1]}"]`);
    });
  else {
    if (Q.id) I.push(`#${Q.id}`);
    if (((G = Q.className), G && AM2.isString(G))) {
      D = G.split(/\s+/);
      for (W = 0; W < D.length; W++) I.push(`.${D[W]}`);
    }
  }
  let J = ['aria-label', 'type', 'name', 'title', 'alt'];
  for (W = 0; W < J.length; W++)
    if (((Z = J[W]), (Y = Q.getAttribute(Z)), Y)) I.push(`[${Z}="${Y}"]`);
  return I.join('');
}
function DM2() {
  try {
    return Hy.document.location.href;
  } catch (A) {
    return '';
  }
}
function ZM2(A) {
  if (Hy.document && Hy.document.querySelector) return Hy.document.querySelector(A);
  return null;
}
function YM2(A) {
  if (!Hy.HTMLElement) return null;
  let B = A,
    Q = 5;
  for (let I = 0; I < Q; I++) {
    if (!B) return null;
    if (B instanceof HTMLElement && B.dataset.sentryComponent) return B.dataset.sentryComponent;
    B = B.parentNode;
  }
  return null;
}
Pe1.getComponentName = YM2;
Pe1.getDomElement = ZM2;
Pe1.getLocationHref = DM2;
Pe1.htmlTreeAsString = IM2;
