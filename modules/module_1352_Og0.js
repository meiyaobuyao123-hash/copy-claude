// Module: Og0
// Params: Yz8,Rg0

var Mg0 = iL(),
  j0 = Mg0.TAG_NAMES,
  F8 = Mg0.NAMESPACES;
function qg0(A) {
  switch (A.length) {
    case 1:
      return A === j0.P;
    case 2:
      return A === j0.RB || A === j0.RP || A === j0.RT || A === j0.DD || A === j0.DT || A === j0.LI;
    case 3:
      return A === j0.RTC;
    case 6:
      return A === j0.OPTION;
    case 8:
      return A === j0.OPTGROUP;
  }
  return !1;
}
function LF6(A) {
  switch (A.length) {
    case 1:
      return A === j0.P;
    case 2:
      return (
        A === j0.RB ||
        A === j0.RP ||
        A === j0.RT ||
        A === j0.DD ||
        A === j0.DT ||
        A === j0.LI ||
        A === j0.TD ||
        A === j0.TH ||
        A === j0.TR
      );
    case 3:
      return A === j0.RTC;
    case 5:
      return A === j0.TBODY || A === j0.TFOOT || A === j0.THEAD;
    case 6:
      return A === j0.OPTION;
    case 7:
      return A === j0.CAPTION;
    case 8:
      return A === j0.OPTGROUP || A === j0.COLGROUP;
  }
  return !1;
}
function sW1(A, B) {
  switch (A.length) {
    case 2:
      if (A === j0.TD || A === j0.TH) return B === F8.HTML;
      else if (A === j0.MI || A === j0.MO || A === j0.MN || A === j0.MS) return B === F8.MATHML;
      break;
    case 4:
      if (A === j0.HTML) return B === F8.HTML;
      else if (A === j0.DESC) return B === F8.SVG;
      break;
    case 5:
      if (A === j0.TABLE) return B === F8.HTML;
      else if (A === j0.MTEXT) return B === F8.MATHML;
      else if (A === j0.TITLE) return B === F8.SVG;
      break;
    case 6:
      return (A === j0.APPLET || A === j0.OBJECT) && B === F8.HTML;
    case 7:
      return (A === j0.CAPTION || A === j0.MARQUEE) && B === F8.HTML;
    case 8:
      return A === j0.TEMPLATE && B === F8.HTML;
    case 13:
      return A === j0.FOREIGN_OBJECT && B === F8.SVG;
    case 14:
      return A === j0.ANNOTATION_XML && B === F8.MATHML;
  }
  return !1;
}
class Lg0 {
  constructor(A, B) {
    ((this.stackTop = -1),
      (this.items = []),
      (this.current = A),
      (this.currentTagName = null),
      (this.currentTmplContent = null),
      (this.tmplCount = 0),
      (this.treeAdapter = B));
  }
  _indexOf(A) {
    let B = -1;
    for (let Q = this.stackTop; Q >= 0; Q--)
      if (this.items[Q] === A) {
        B = Q;
        break;
      }
    return B;
  }
  _isInTemplate() {
    return (
      this.currentTagName === j0.TEMPLATE &&
      this.treeAdapter.getNamespaceURI(this.current) === F8.HTML
    );
  }
  _updateCurrentElement() {
    ((this.current = this.items[this.stackTop]),
      (this.currentTagName = this.current && this.treeAdapter.getTagName(this.current)),
      (this.currentTmplContent = this._isInTemplate()
        ? this.treeAdapter.getTemplateContent(this.current)
        : null));
  }
  push(A) {
    if (((this.items[++this.stackTop] = A), this._updateCurrentElement(), this._isInTemplate()))
      this.tmplCount++;
  }
  pop() {
    if ((this.stackTop--, this.tmplCount > 0 && this._isInTemplate())) this.tmplCount--;
    this._updateCurrentElement();
  }
  replace(A, B) {
    let Q = this._indexOf(A);
    if (((this.items[Q] = B), Q === this.stackTop)) this._updateCurrentElement();
  }
  insertAfter(A, B) {
    let Q = this._indexOf(A) + 1;
    if ((this.items.splice(Q, 0, B), Q === ++this.stackTop)) this._updateCurrentElement();
  }
  popUntilTagNamePopped(A) {
    while (this.stackTop > -1) {
      let B = this.currentTagName,
        Q = this.treeAdapter.getNamespaceURI(this.current);
      if ((this.pop(), B === A && Q === F8.HTML)) break;
    }
  }
  popUntilElementPopped(A) {
    while (this.stackTop > -1) {
      let B = this.current;
      if ((this.pop(), B === A)) break;
    }
  }
  popUntilNumberedHeaderPopped() {
    while (this.stackTop > -1) {
      let A = this.currentTagName,
        B = this.treeAdapter.getNamespaceURI(this.current);
      if (
        (this.pop(),
        A === j0.H1 ||
          A === j0.H2 ||
          A === j0.H3 ||
          A === j0.H4 ||
          A === j0.H5 ||
          (A === j0.H6 && B === F8.HTML))
      )
        break;
    }
  }
  popUntilTableCellPopped() {
    while (this.stackTop > -1) {
      let A = this.currentTagName,
        B = this.treeAdapter.getNamespaceURI(this.current);
      if ((this.pop(), A === j0.TD || (A === j0.TH && B === F8.HTML))) break;
    }
  }
  popAllUpToHtmlElement() {
    ((this.stackTop = 0), this._updateCurrentElement());
  }
  clearBackToTableContext() {
    while (
      (this.currentTagName !== j0.TABLE &&
        this.currentTagName !== j0.TEMPLATE &&
        this.currentTagName !== j0.HTML) ||
      this.treeAdapter.getNamespaceURI(this.current) !== F8.HTML
    )
      this.pop();
  }
  clearBackToTableBodyContext() {
    while (
      (this.currentTagName !== j0.TBODY &&
        this.currentTagName !== j0.TFOOT &&
        this.currentTagName !== j0.THEAD &&
        this.currentTagName !== j0.TEMPLATE &&
        this.currentTagName !== j0.HTML) ||
      this.treeAdapter.getNamespaceURI(this.current) !== F8.HTML
    )
      this.pop();
  }
  clearBackToTableRowContext() {
    while (
      (this.currentTagName !== j0.TR &&
        this.currentTagName !== j0.TEMPLATE &&
        this.currentTagName !== j0.HTML) ||
      this.treeAdapter.getNamespaceURI(this.current) !== F8.HTML
    )
      this.pop();
  }
  remove(A) {
    for (let B = this.stackTop; B >= 0; B--)
      if (this.items[B] === A) {
        (this.items.splice(B, 1), this.stackTop--, this._updateCurrentElement());
        break;
      }
  }
  tryPeekProperlyNestedBodyElement() {
    let A = this.items[1];
    return A && this.treeAdapter.getTagName(A) === j0.BODY ? A : null;
  }
  contains(A) {
    return this._indexOf(A) > -1;
  }
  getCommonAncestor(A) {
    let B = this._indexOf(A);
    return --B >= 0 ? this.items[B] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.currentTagName === j0.HTML;
  }
  hasInScope(A) {
    for (let B = this.stackTop; B >= 0; B--) {
      let Q = this.treeAdapter.getTagName(this.items[B]),
        I = this.treeAdapter.getNamespaceURI(this.items[B]);
      if (Q === A && I === F8.HTML) return !0;
      if (sW1(Q, I)) return !1;
    }
    return !0;
  }
  hasNumberedHeaderInScope() {
    for (let A = this.stackTop; A >= 0; A--) {
      let B = this.treeAdapter.getTagName(this.items[A]),
        Q = this.treeAdapter.getNamespaceURI(this.items[A]);
      if (
        (B === j0.H1 || B === j0.H2 || B === j0.H3 || B === j0.H4 || B === j0.H5 || B === j0.H6) &&
        Q === F8.HTML
      )
        return !0;
      if (sW1(B, Q)) return !1;
    }
    return !0;
  }
  hasInListItemScope(A) {
    for (let B = this.stackTop; B >= 0; B--) {
      let Q = this.treeAdapter.getTagName(this.items[B]),
        I = this.treeAdapter.getNamespaceURI(this.items[B]);
      if (Q === A && I === F8.HTML) return !0;
      if (((Q === j0.UL || Q === j0.OL) && I === F8.HTML) || sW1(Q, I)) return !1;
    }
    return !0;
  }
  hasInButtonScope(A) {
    for (let B = this.stackTop; B >= 0; B--) {
      let Q = this.treeAdapter.getTagName(this.items[B]),
        I = this.treeAdapter.getNamespaceURI(this.items[B]);
      if (Q === A && I === F8.HTML) return !0;
      if ((Q === j0.BUTTON && I === F8.HTML) || sW1(Q, I)) return !1;
    }
    return !0;
  }
  hasInTableScope(A) {
    for (let B = this.stackTop; B >= 0; B--) {
      let Q = this.treeAdapter.getTagName(this.items[B]);
      if (this.treeAdapter.getNamespaceURI(this.items[B]) !== F8.HTML) continue;
      if (Q === A) return !0;
      if (Q === j0.TABLE || Q === j0.TEMPLATE || Q === j0.HTML) return !1;
    }
    return !0;
  }
  hasTableBodyContextInTableScope() {
    for (let A = this.stackTop; A >= 0; A--) {
      let B = this.treeAdapter.getTagName(this.items[A]);
      if (this.treeAdapter.getNamespaceURI(this.items[A]) !== F8.HTML) continue;
      if (B === j0.TBODY || B === j0.THEAD || B === j0.TFOOT) return !0;
      if (B === j0.TABLE || B === j0.HTML) return !1;
    }
    return !0;
  }
  hasInSelectScope(A) {
    for (let B = this.stackTop; B >= 0; B--) {
      let Q = this.treeAdapter.getTagName(this.items[B]);
      if (this.treeAdapter.getNamespaceURI(this.items[B]) !== F8.HTML) continue;
      if (Q === A) return !0;
      if (Q !== j0.OPTION && Q !== j0.OPTGROUP) return !1;
    }
    return !0;
  }
  generateImpliedEndTags() {
    while (qg0(this.currentTagName)) this.pop();
  }
  generateImpliedEndTagsThoroughly() {
    while (LF6(this.currentTagName)) this.pop();
  }
  generateImpliedEndTagsWithExclusion(A) {
    while (qg0(this.currentTagName) && this.currentTagName !== A) this.pop();
  }
}
Rg0.exports = Lg0;
