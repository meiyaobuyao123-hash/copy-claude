// Module: Oh0
// Params: Rz8,Rh0

var BA = qr(),
  mJ6 = Og0(),
  Fh0 = Pg0(),
  dJ6 = dg0(),
  uJ6 = eg0(),
  Jh0 = pz(),
  pJ6 = zu1(),
  cJ6 = wu1(),
  Ch0 = Eu1(),
  cz = Wh0(),
  JG = nW1(),
  lJ6 = iW1(),
  eS = iL(),
  l = eS.TAG_NAMES,
  b2 = eS.NAMESPACES,
  Nh0 = eS.ATTRS,
  iJ6 = { scriptingEnabled: !0, sourceCodeLocationInfo: !1, onParseError: null, treeAdapter: pJ6 },
  nJ6 = {
    [l.TR]: 'IN_ROW_MODE',
    [l.TBODY]: 'IN_TABLE_BODY_MODE',
    [l.THEAD]: 'IN_TABLE_BODY_MODE',
    [l.TFOOT]: 'IN_TABLE_BODY_MODE',
    [l.CAPTION]: 'IN_CAPTION_MODE',
    [l.COLGROUP]: 'IN_COLUMN_GROUP_MODE',
    [l.TABLE]: 'IN_TABLE_MODE',
    [l.BODY]: 'IN_BODY_MODE',
    [l.FRAMESET]: 'IN_FRAMESET_MODE',
  },
  aJ6 = {
    [l.CAPTION]: 'IN_TABLE_MODE',
    [l.COLGROUP]: 'IN_TABLE_MODE',
    [l.TBODY]: 'IN_TABLE_MODE',
    [l.TFOOT]: 'IN_TABLE_MODE',
    [l.THEAD]: 'IN_TABLE_MODE',
    [l.COL]: 'IN_COLUMN_GROUP_MODE',
    [l.TR]: 'IN_TABLE_BODY_MODE',
    [l.TD]: 'IN_ROW_MODE',
    [l.TH]: 'IN_ROW_MODE',
  },
  $u1 = {
    ['INITIAL_MODE']: {
      [BA.CHARACTER_TOKEN]: Lr,
      [BA.NULL_CHARACTER_TOKEN]: Lr,
      [BA.WHITESPACE_CHARACTER_TOKEN]: R6,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: QC6,
      [BA.START_TAG_TOKEN]: Lr,
      [BA.END_TAG_TOKEN]: Lr,
      [BA.EOF_TOKEN]: Lr,
    },
    ['BEFORE_HTML_MODE']: {
      [BA.CHARACTER_TOKEN]: Or,
      [BA.NULL_CHARACTER_TOKEN]: Or,
      [BA.WHITESPACE_CHARACTER_TOKEN]: R6,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: IC6,
      [BA.END_TAG_TOKEN]: GC6,
      [BA.EOF_TOKEN]: Or,
    },
    ['BEFORE_HEAD_MODE']: {
      [BA.CHARACTER_TOKEN]: Tr,
      [BA.NULL_CHARACTER_TOKEN]: Tr,
      [BA.WHITESPACE_CHARACTER_TOKEN]: R6,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: tW1,
      [BA.START_TAG_TOKEN]: DC6,
      [BA.END_TAG_TOKEN]: ZC6,
      [BA.EOF_TOKEN]: Tr,
    },
    ['IN_HEAD_MODE']: {
      [BA.CHARACTER_TOKEN]: Pr,
      [BA.NULL_CHARACTER_TOKEN]: Pr,
      [BA.WHITESPACE_CHARACTER_TOKEN]: TY,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: tW1,
      [BA.START_TAG_TOKEN]: FI,
      [BA.END_TAG_TOKEN]: A_,
      [BA.EOF_TOKEN]: Pr,
    },
    ['IN_HEAD_NO_SCRIPT_MODE']: {
      [BA.CHARACTER_TOKEN]: Sr,
      [BA.NULL_CHARACTER_TOKEN]: Sr,
      [BA.WHITESPACE_CHARACTER_TOKEN]: TY,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: tW1,
      [BA.START_TAG_TOKEN]: YC6,
      [BA.END_TAG_TOKEN]: WC6,
      [BA.EOF_TOKEN]: Sr,
    },
    ['AFTER_HEAD_MODE']: {
      [BA.CHARACTER_TOKEN]: _r,
      [BA.NULL_CHARACTER_TOKEN]: _r,
      [BA.WHITESPACE_CHARACTER_TOKEN]: TY,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: tW1,
      [BA.START_TAG_TOKEN]: FC6,
      [BA.END_TAG_TOKEN]: JC6,
      [BA.EOF_TOKEN]: _r,
    },
    ['IN_BODY_MODE']: {
      [BA.CHARACTER_TOKEN]: eW1,
      [BA.NULL_CHARACTER_TOKEN]: R6,
      [BA.WHITESPACE_CHARACTER_TOKEN]: tS,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: PY,
      [BA.END_TAG_TOKEN]: qu1,
      [BA.EOF_TOKEN]: FN,
    },
    ['TEXT_MODE']: {
      [BA.CHARACTER_TOKEN]: TY,
      [BA.NULL_CHARACTER_TOKEN]: TY,
      [BA.WHITESPACE_CHARACTER_TOKEN]: TY,
      [BA.COMMENT_TOKEN]: R6,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: R6,
      [BA.END_TAG_TOKEN]: dC6,
      [BA.EOF_TOKEN]: uC6,
    },
    ['IN_TABLE_MODE']: {
      [BA.CHARACTER_TOKEN]: JN,
      [BA.NULL_CHARACTER_TOKEN]: JN,
      [BA.WHITESPACE_CHARACTER_TOKEN]: JN,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: Mu1,
      [BA.END_TAG_TOKEN]: Lu1,
      [BA.EOF_TOKEN]: FN,
    },
    ['IN_TABLE_TEXT_MODE']: {
      [BA.CHARACTER_TOKEN]: tC6,
      [BA.NULL_CHARACTER_TOKEN]: R6,
      [BA.WHITESPACE_CHARACTER_TOKEN]: oC6,
      [BA.COMMENT_TOKEN]: Rr,
      [BA.DOCTYPE_TOKEN]: Rr,
      [BA.START_TAG_TOKEN]: Rr,
      [BA.END_TAG_TOKEN]: Rr,
      [BA.EOF_TOKEN]: Rr,
    },
    ['IN_CAPTION_MODE']: {
      [BA.CHARACTER_TOKEN]: eW1,
      [BA.NULL_CHARACTER_TOKEN]: R6,
      [BA.WHITESPACE_CHARACTER_TOKEN]: tS,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: eC6,
      [BA.END_TAG_TOKEN]: AX6,
      [BA.EOF_TOKEN]: FN,
    },
    ['IN_COLUMN_GROUP_MODE']: {
      [BA.CHARACTER_TOKEN]: BF1,
      [BA.NULL_CHARACTER_TOKEN]: BF1,
      [BA.WHITESPACE_CHARACTER_TOKEN]: TY,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: BX6,
      [BA.END_TAG_TOKEN]: QX6,
      [BA.EOF_TOKEN]: FN,
    },
    ['IN_TABLE_BODY_MODE']: {
      [BA.CHARACTER_TOKEN]: JN,
      [BA.NULL_CHARACTER_TOKEN]: JN,
      [BA.WHITESPACE_CHARACTER_TOKEN]: JN,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: IX6,
      [BA.END_TAG_TOKEN]: GX6,
      [BA.EOF_TOKEN]: FN,
    },
    ['IN_ROW_MODE']: {
      [BA.CHARACTER_TOKEN]: JN,
      [BA.NULL_CHARACTER_TOKEN]: JN,
      [BA.WHITESPACE_CHARACTER_TOKEN]: JN,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: DX6,
      [BA.END_TAG_TOKEN]: ZX6,
      [BA.EOF_TOKEN]: FN,
    },
    ['IN_CELL_MODE']: {
      [BA.CHARACTER_TOKEN]: eW1,
      [BA.NULL_CHARACTER_TOKEN]: R6,
      [BA.WHITESPACE_CHARACTER_TOKEN]: tS,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: YX6,
      [BA.END_TAG_TOKEN]: WX6,
      [BA.EOF_TOKEN]: FN,
    },
    ['IN_SELECT_MODE']: {
      [BA.CHARACTER_TOKEN]: TY,
      [BA.NULL_CHARACTER_TOKEN]: R6,
      [BA.WHITESPACE_CHARACTER_TOKEN]: TY,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: qh0,
      [BA.END_TAG_TOKEN]: Mh0,
      [BA.EOF_TOKEN]: FN,
    },
    ['IN_SELECT_IN_TABLE_MODE']: {
      [BA.CHARACTER_TOKEN]: TY,
      [BA.NULL_CHARACTER_TOKEN]: R6,
      [BA.WHITESPACE_CHARACTER_TOKEN]: TY,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: FX6,
      [BA.END_TAG_TOKEN]: JX6,
      [BA.EOF_TOKEN]: FN,
    },
    ['IN_TEMPLATE_MODE']: {
      [BA.CHARACTER_TOKEN]: eW1,
      [BA.NULL_CHARACTER_TOKEN]: R6,
      [BA.WHITESPACE_CHARACTER_TOKEN]: tS,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: CX6,
      [BA.END_TAG_TOKEN]: XX6,
      [BA.EOF_TOKEN]: Lh0,
    },
    ['AFTER_BODY_MODE']: {
      [BA.CHARACTER_TOKEN]: QF1,
      [BA.NULL_CHARACTER_TOKEN]: QF1,
      [BA.WHITESPACE_CHARACTER_TOKEN]: tS,
      [BA.COMMENT_TOKEN]: BC6,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: VX6,
      [BA.END_TAG_TOKEN]: KX6,
      [BA.EOF_TOKEN]: Mr,
    },
    ['IN_FRAMESET_MODE']: {
      [BA.CHARACTER_TOKEN]: R6,
      [BA.NULL_CHARACTER_TOKEN]: R6,
      [BA.WHITESPACE_CHARACTER_TOKEN]: TY,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: HX6,
      [BA.END_TAG_TOKEN]: zX6,
      [BA.EOF_TOKEN]: Mr,
    },
    ['AFTER_FRAMESET_MODE']: {
      [BA.CHARACTER_TOKEN]: R6,
      [BA.NULL_CHARACTER_TOKEN]: R6,
      [BA.WHITESPACE_CHARACTER_TOKEN]: TY,
      [BA.COMMENT_TOKEN]: T7,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: wX6,
      [BA.END_TAG_TOKEN]: EX6,
      [BA.EOF_TOKEN]: Mr,
    },
    ['AFTER_AFTER_BODY_MODE']: {
      [BA.CHARACTER_TOKEN]: AF1,
      [BA.NULL_CHARACTER_TOKEN]: AF1,
      [BA.WHITESPACE_CHARACTER_TOKEN]: tS,
      [BA.COMMENT_TOKEN]: Xh0,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: UX6,
      [BA.END_TAG_TOKEN]: AF1,
      [BA.EOF_TOKEN]: Mr,
    },
    ['AFTER_AFTER_FRAMESET_MODE']: {
      [BA.CHARACTER_TOKEN]: R6,
      [BA.NULL_CHARACTER_TOKEN]: R6,
      [BA.WHITESPACE_CHARACTER_TOKEN]: tS,
      [BA.COMMENT_TOKEN]: Xh0,
      [BA.DOCTYPE_TOKEN]: R6,
      [BA.START_TAG_TOKEN]: NX6,
      [BA.END_TAG_TOKEN]: R6,
      [BA.EOF_TOKEN]: Mr,
    },
  };
class $h0 {
  constructor(A) {
    if (
      ((this.options = cJ6(iJ6, A)),
      (this.treeAdapter = this.options.treeAdapter),
      (this.pendingScript = null),
      this.options.sourceCodeLocationInfo)
    )
      Jh0.install(this, dJ6);
    if (this.options.onParseError)
      Jh0.install(this, uJ6, { onParseError: this.options.onParseError });
  }
  parse(A) {
    let B = this.treeAdapter.createDocument();
    return (this._bootstrap(B, null), this.tokenizer.write(A, !0), this._runParsingLoop(null), B);
  }
  parseFragment(A, B) {
    if (!B) B = this.treeAdapter.createElement(l.TEMPLATE, b2.HTML, []);
    let Q = this.treeAdapter.createElement('documentmock', b2.HTML, []);
    if ((this._bootstrap(Q, B), this.treeAdapter.getTagName(B) === l.TEMPLATE))
      this._pushTmplInsertionMode('IN_TEMPLATE_MODE');
    (this._initTokenizerForFragmentParsing(),
      this._insertFakeRootElement(),
      this._resetInsertionMode(),
      this._findFormInFragmentContext(),
      this.tokenizer.write(A, !0),
      this._runParsingLoop(null));
    let I = this.treeAdapter.getFirstChild(Q),
      G = this.treeAdapter.createDocumentFragment();
    return (this._adoptNodes(I, G), G);
  }
  _bootstrap(A, B) {
    ((this.tokenizer = new BA(this.options)),
      (this.stopped = !1),
      (this.insertionMode = 'INITIAL_MODE'),
      (this.originalInsertionMode = ''),
      (this.document = A),
      (this.fragmentContext = B),
      (this.headElement = null),
      (this.formElement = null),
      (this.openElements = new mJ6(this.document, this.treeAdapter)),
      (this.activeFormattingElements = new Fh0(this.treeAdapter)),
      (this.tmplInsertionModeStack = []),
      (this.tmplInsertionModeStackTop = -1),
      (this.currentTmplInsertionMode = null),
      (this.pendingCharacterTokens = []),
      (this.hasNonWhitespacePendingCharacterToken = !1),
      (this.framesetOk = !0),
      (this.skipNextNewLine = !1),
      (this.fosterParentingEnabled = !1));
  }
  _err() {}
  _runParsingLoop(A) {
    while (!this.stopped) {
      this._setupTokenizerCDATAMode();
      let B = this.tokenizer.getNextToken();
      if (B.type === BA.HIBERNATION_TOKEN) break;
      if (this.skipNextNewLine) {
        if (
          ((this.skipNextNewLine = !1),
          B.type === BA.WHITESPACE_CHARACTER_TOKEN &&
            B.chars[0] ===
              `
`)
        ) {
          if (B.chars.length === 1) continue;
          B.chars = B.chars.substr(1);
        }
      }
      if ((this._processInputToken(B), A && this.pendingScript)) break;
    }
  }
  runParsingLoopForCurrentChunk(A, B) {
    if ((this._runParsingLoop(B), B && this.pendingScript)) {
      let Q = this.pendingScript;
      ((this.pendingScript = null), B(Q));
      return;
    }
    if (A) A();
  }
  _setupTokenizerCDATAMode() {
    let A = this._getAdjustedCurrentElement();
    this.tokenizer.allowCDATA =
      A &&
      A !== this.document &&
      this.treeAdapter.getNamespaceURI(A) !== b2.HTML &&
      !this._isIntegrationPoint(A);
  }
  _switchToTextParsing(A, B) {
    (this._insertElement(A, b2.HTML),
      (this.tokenizer.state = B),
      (this.originalInsertionMode = this.insertionMode),
      (this.insertionMode = 'TEXT_MODE'));
  }
  switchToPlaintextParsing() {
    ((this.insertionMode = 'TEXT_MODE'),
      (this.originalInsertionMode = 'IN_BODY_MODE'),
      (this.tokenizer.state = BA.MODE.PLAINTEXT));
  }
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext
      ? this.fragmentContext
      : this.openElements.current;
  }
  _findFormInFragmentContext() {
    let A = this.fragmentContext;
    do {
      if (this.treeAdapter.getTagName(A) === l.FORM) {
        this.formElement = A;
        break;
      }
      A = this.treeAdapter.getParentNode(A);
    } while (A);
  }
  _initTokenizerForFragmentParsing() {
    if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === b2.HTML) {
      let A = this.treeAdapter.getTagName(this.fragmentContext);
      if (A === l.TITLE || A === l.TEXTAREA) this.tokenizer.state = BA.MODE.RCDATA;
      else if (
        A === l.STYLE ||
        A === l.XMP ||
        A === l.IFRAME ||
        A === l.NOEMBED ||
        A === l.NOFRAMES ||
        A === l.NOSCRIPT
      )
        this.tokenizer.state = BA.MODE.RAWTEXT;
      else if (A === l.SCRIPT) this.tokenizer.state = BA.MODE.SCRIPT_DATA;
      else if (A === l.PLAINTEXT) this.tokenizer.state = BA.MODE.PLAINTEXT;
    }
  }
  _setDocumentType(A) {
    let B = A.name || '',
      Q = A.publicId || '',
      I = A.systemId || '';
    this.treeAdapter.setDocumentType(this.document, B, Q, I);
  }
  _attachElementToTree(A) {
    if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(A);
    else {
      let B = this.openElements.currentTmplContent || this.openElements.current;
      this.treeAdapter.appendChild(B, A);
    }
  }
  _appendElement(A, B) {
    let Q = this.treeAdapter.createElement(A.tagName, B, A.attrs);
    this._attachElementToTree(Q);
  }
  _insertElement(A, B) {
    let Q = this.treeAdapter.createElement(A.tagName, B, A.attrs);
    (this._attachElementToTree(Q), this.openElements.push(Q));
  }
  _insertFakeElement(A) {
    let B = this.treeAdapter.createElement(A, b2.HTML, []);
    (this._attachElementToTree(B), this.openElements.push(B));
  }
  _insertTemplate(A) {
    let B = this.treeAdapter.createElement(A.tagName, b2.HTML, A.attrs),
      Q = this.treeAdapter.createDocumentFragment();
    (this.treeAdapter.setTemplateContent(B, Q),
      this._attachElementToTree(B),
      this.openElements.push(B));
  }
  _insertFakeRootElement() {
    let A = this.treeAdapter.createElement(l.HTML, b2.HTML, []);
    (this.treeAdapter.appendChild(this.openElements.current, A), this.openElements.push(A));
  }
  _appendCommentNode(A, B) {
    let Q = this.treeAdapter.createCommentNode(A.data);
    this.treeAdapter.appendChild(B, Q);
  }
  _insertCharacters(A) {
    if (this._shouldFosterParentOnInsertion()) this._fosterParentText(A.chars);
    else {
      let B = this.openElements.currentTmplContent || this.openElements.current;
      this.treeAdapter.insertText(B, A.chars);
    }
  }
  _adoptNodes(A, B) {
    for (let Q = this.treeAdapter.getFirstChild(A); Q; Q = this.treeAdapter.getFirstChild(A))
      (this.treeAdapter.detachNode(Q), this.treeAdapter.appendChild(B, Q));
  }
  _shouldProcessTokenInForeignContent(A) {
    let B = this._getAdjustedCurrentElement();
    if (!B || B === this.document) return !1;
    let Q = this.treeAdapter.getNamespaceURI(B);
    if (Q === b2.HTML) return !1;
    if (
      this.treeAdapter.getTagName(B) === l.ANNOTATION_XML &&
      Q === b2.MATHML &&
      A.type === BA.START_TAG_TOKEN &&
      A.tagName === l.SVG
    )
      return !1;
    let I =
      A.type === BA.CHARACTER_TOKEN ||
      A.type === BA.NULL_CHARACTER_TOKEN ||
      A.type === BA.WHITESPACE_CHARACTER_TOKEN;
    if (
      ((A.type === BA.START_TAG_TOKEN && A.tagName !== l.MGLYPH && A.tagName !== l.MALIGNMARK) ||
        I) &&
      this._isIntegrationPoint(B, b2.MATHML)
    )
      return !1;
    if ((A.type === BA.START_TAG_TOKEN || I) && this._isIntegrationPoint(B, b2.HTML)) return !1;
    return A.type !== BA.EOF_TOKEN;
  }
  _processToken(A) {
    $u1[this.insertionMode][A.type](this, A);
  }
  _processTokenInBodyMode(A) {
    $u1.IN_BODY_MODE[A.type](this, A);
  }
  _processTokenInForeignContent(A) {
    if (A.type === BA.CHARACTER_TOKEN) qX6(this, A);
    else if (A.type === BA.NULL_CHARACTER_TOKEN) $X6(this, A);
    else if (A.type === BA.WHITESPACE_CHARACTER_TOKEN) TY(this, A);
    else if (A.type === BA.COMMENT_TOKEN) T7(this, A);
    else if (A.type === BA.START_TAG_TOKEN) MX6(this, A);
    else if (A.type === BA.END_TAG_TOKEN) LX6(this, A);
  }
  _processInputToken(A) {
    if (this._shouldProcessTokenInForeignContent(A)) this._processTokenInForeignContent(A);
    else this._processToken(A);
    if (A.type === BA.START_TAG_TOKEN && A.selfClosing && !A.ackSelfClosing)
      this._err(JG.nonVoidHtmlElementStartTagWithTrailingSolidus);
  }
  _isIntegrationPoint(A, B) {
    let Q = this.treeAdapter.getTagName(A),
      I = this.treeAdapter.getNamespaceURI(A),
      G = this.treeAdapter.getAttrList(A);
    return cz.isIntegrationPoint(Q, I, G, B);
  }
  _reconstructActiveFormattingElements() {
    let A = this.activeFormattingElements.length;
    if (A) {
      let B = A,
        Q = null;
      do
        if (
          (B--,
          (Q = this.activeFormattingElements.entries[B]),
          Q.type === Fh0.MARKER_ENTRY || this.openElements.contains(Q.element))
        ) {
          B++;
          break;
        }
      while (B > 0);
      for (let I = B; I < A; I++)
        ((Q = this.activeFormattingElements.entries[I]),
          this._insertElement(Q.token, this.treeAdapter.getNamespaceURI(Q.element)),
          (Q.element = this.openElements.current));
    }
  }
  _closeTableCell() {
    (this.openElements.generateImpliedEndTags(),
      this.openElements.popUntilTableCellPopped(),
      this.activeFormattingElements.clearToLastMarker(),
      (this.insertionMode = 'IN_ROW_MODE'));
  }
  _closePElement() {
    (this.openElements.generateImpliedEndTagsWithExclusion(l.P),
      this.openElements.popUntilTagNamePopped(l.P));
  }
  _resetInsertionMode() {
    for (let A = this.openElements.stackTop, B = !1; A >= 0; A--) {
      let Q = this.openElements.items[A];
      if (A === 0) {
        if (((B = !0), this.fragmentContext)) Q = this.fragmentContext;
      }
      let I = this.treeAdapter.getTagName(Q),
        G = nJ6[I];
      if (G) {
        this.insertionMode = G;
        break;
      } else if (!B && (I === l.TD || I === l.TH)) {
        this.insertionMode = 'IN_CELL_MODE';
        break;
      } else if (!B && I === l.HEAD) {
        this.insertionMode = 'IN_HEAD_MODE';
        break;
      } else if (I === l.SELECT) {
        this._resetInsertionModeForSelect(A);
        break;
      } else if (I === l.TEMPLATE) {
        this.insertionMode = this.currentTmplInsertionMode;
        break;
      } else if (I === l.HTML) {
        this.insertionMode = this.headElement ? 'AFTER_HEAD_MODE' : 'BEFORE_HEAD_MODE';
        break;
      } else if (B) {
        this.insertionMode = 'IN_BODY_MODE';
        break;
      }
    }
  }
  _resetInsertionModeForSelect(A) {
    if (A > 0)
      for (let B = A - 1; B > 0; B--) {
        let Q = this.openElements.items[B],
          I = this.treeAdapter.getTagName(Q);
        if (I === l.TEMPLATE) break;
        else if (I === l.TABLE) {
          this.insertionMode = 'IN_SELECT_IN_TABLE_MODE';
          return;
        }
      }
    this.insertionMode = 'IN_SELECT_MODE';
  }
  _pushTmplInsertionMode(A) {
    (this.tmplInsertionModeStack.push(A),
      this.tmplInsertionModeStackTop++,
      (this.currentTmplInsertionMode = A));
  }
  _popTmplInsertionMode() {
    (this.tmplInsertionModeStack.pop(),
      this.tmplInsertionModeStackTop--,
      (this.currentTmplInsertionMode =
        this.tmplInsertionModeStack[this.tmplInsertionModeStackTop]));
  }
  _isElementCausesFosterParenting(A) {
    let B = this.treeAdapter.getTagName(A);
    return B === l.TABLE || B === l.TBODY || B === l.TFOOT || B === l.THEAD || B === l.TR;
  }
  _shouldFosterParentOnInsertion() {
    return (
      this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current)
    );
  }
  _findFosterParentingLocation() {
    let A = { parent: null, beforeElement: null };
    for (let B = this.openElements.stackTop; B >= 0; B--) {
      let Q = this.openElements.items[B],
        I = this.treeAdapter.getTagName(Q),
        G = this.treeAdapter.getNamespaceURI(Q);
      if (I === l.TEMPLATE && G === b2.HTML) {
        A.parent = this.treeAdapter.getTemplateContent(Q);
        break;
      } else if (I === l.TABLE) {
        if (((A.parent = this.treeAdapter.getParentNode(Q)), A.parent)) A.beforeElement = Q;
        else A.parent = this.openElements.items[B - 1];
        break;
      }
    }
    if (!A.parent) A.parent = this.openElements.items[0];
    return A;
  }
  _fosterParentElement(A) {
    let B = this._findFosterParentingLocation();
    if (B.beforeElement) this.treeAdapter.insertBefore(B.parent, A, B.beforeElement);
    else this.treeAdapter.appendChild(B.parent, A);
  }
  _fosterParentText(A) {
    let B = this._findFosterParentingLocation();
    if (B.beforeElement) this.treeAdapter.insertTextBefore(B.parent, A, B.beforeElement);
    else this.treeAdapter.insertText(B.parent, A);
  }
  _isSpecialElement(A) {
    let B = this.treeAdapter.getTagName(A),
      Q = this.treeAdapter.getNamespaceURI(A);
    return eS.SPECIAL_ELEMENTS[Q][B];
  }
}
Rh0.exports = $h0;
function sJ6(A, B) {
  let Q = A.activeFormattingElements.getElementEntryInScopeWithTagName(B.tagName);
  if (Q) {
    if (!A.openElements.contains(Q.element))
      (A.activeFormattingElements.removeEntry(Q), (Q = null));
    else if (!A.openElements.hasInScope(B.tagName)) Q = null;
  } else gV(A, B);
  return Q;
}
function rJ6(A, B) {
  let Q = null;
  for (let I = A.openElements.stackTop; I >= 0; I--) {
    let G = A.openElements.items[I];
    if (G === B.element) break;
    if (A._isSpecialElement(G)) Q = G;
  }
  if (!Q)
    (A.openElements.popUntilElementPopped(B.element), A.activeFormattingElements.removeEntry(B));
  return Q;
}
function oJ6(A, B, Q) {
  let I = B,
    G = A.openElements.getCommonAncestor(B);
  for (let D = 0, Z = G; Z !== Q; D++, Z = G) {
    G = A.openElements.getCommonAncestor(Z);
    let Y = A.activeFormattingElements.getElementEntry(Z),
      W = Y && D >= 3;
    if (!Y || W) {
      if (W) A.activeFormattingElements.removeEntry(Y);
      A.openElements.remove(Z);
    } else {
      if (((Z = tJ6(A, Y)), I === B)) A.activeFormattingElements.bookmark = Y;
      (A.treeAdapter.detachNode(I), A.treeAdapter.appendChild(Z, I), (I = Z));
    }
  }
  return I;
}
function tJ6(A, B) {
  let Q = A.treeAdapter.getNamespaceURI(B.element),
    I = A.treeAdapter.createElement(B.token.tagName, Q, B.token.attrs);
  return (A.openElements.replace(B.element, I), (B.element = I), I);
}
function eJ6(A, B, Q) {
  if (A._isElementCausesFosterParenting(B)) A._fosterParentElement(Q);
  else {
    let I = A.treeAdapter.getTagName(B),
      G = A.treeAdapter.getNamespaceURI(B);
    if (I === l.TEMPLATE && G === b2.HTML) B = A.treeAdapter.getTemplateContent(B);
    A.treeAdapter.appendChild(B, Q);
  }
}
function AC6(A, B, Q) {
  let I = A.treeAdapter.getNamespaceURI(Q.element),
    G = Q.token,
    D = A.treeAdapter.createElement(G.tagName, I, G.attrs);
  (A._adoptNodes(B, D),
    A.treeAdapter.appendChild(B, D),
    A.activeFormattingElements.insertElementAfterBookmark(D, Q.token),
    A.activeFormattingElements.removeEntry(Q),
    A.openElements.remove(Q.element),
    A.openElements.insertAfter(B, D));
}
function aL(A, B) {
  let Q;
  for (let I = 0; I < 8; I++) {
    if (((Q = sJ6(A, B, Q)), !Q)) break;
    let G = rJ6(A, Q);
    if (!G) break;
    A.activeFormattingElements.bookmark = Q;
    let D = oJ6(A, G, Q.element),
      Z = A.openElements.getCommonAncestor(Q.element);
    (A.treeAdapter.detachNode(D), eJ6(A, Z, D), AC6(A, G, Q));
  }
}
function R6() {}
function tW1(A) {
  A._err(JG.misplacedDoctype);
}
function T7(A, B) {
  A._appendCommentNode(B, A.openElements.currentTmplContent || A.openElements.current);
}
function BC6(A, B) {
  A._appendCommentNode(B, A.openElements.items[0]);
}
function Xh0(A, B) {
  A._appendCommentNode(B, A.document);
}
function TY(A, B) {
  A._insertCharacters(B);
}
function Mr(A) {
  A.stopped = !0;
}
function QC6(A, B) {
  A._setDocumentType(B);
  let Q = B.forceQuirks ? eS.DOCUMENT_MODE.QUIRKS : Ch0.getDocumentMode(B);
  if (!Ch0.isConforming(B)) A._err(JG.nonConformingDoctype);
  (A.treeAdapter.setDocumentMode(A.document, Q), (A.insertionMode = 'BEFORE_HTML_MODE'));
}
function Lr(A, B) {
  (A._err(JG.missingDoctype, { beforeToken: !0 }),
    A.treeAdapter.setDocumentMode(A.document, eS.DOCUMENT_MODE.QUIRKS),
    (A.insertionMode = 'BEFORE_HTML_MODE'),
    A._processToken(B));
}
function IC6(A, B) {
  if (B.tagName === l.HTML) (A._insertElement(B, b2.HTML), (A.insertionMode = 'BEFORE_HEAD_MODE'));
  else Or(A, B);
}
function GC6(A, B) {
  let Q = B.tagName;
  if (Q === l.HTML || Q === l.HEAD || Q === l.BODY || Q === l.BR) Or(A, B);
}
function Or(A, B) {
  (A._insertFakeRootElement(), (A.insertionMode = 'BEFORE_HEAD_MODE'), A._processToken(B));
}
function DC6(A, B) {
  let Q = B.tagName;
  if (Q === l.HTML) PY(A, B);
  else if (Q === l.HEAD)
    (A._insertElement(B, b2.HTML),
      (A.headElement = A.openElements.current),
      (A.insertionMode = 'IN_HEAD_MODE'));
  else Tr(A, B);
}
function ZC6(A, B) {
  let Q = B.tagName;
  if (Q === l.HEAD || Q === l.BODY || Q === l.HTML || Q === l.BR) Tr(A, B);
  else A._err(JG.endTagWithoutMatchingOpenElement);
}
function Tr(A, B) {
  (A._insertFakeElement(l.HEAD),
    (A.headElement = A.openElements.current),
    (A.insertionMode = 'IN_HEAD_MODE'),
    A._processToken(B));
}
function FI(A, B) {
  let Q = B.tagName;
  if (Q === l.HTML) PY(A, B);
  else if (Q === l.BASE || Q === l.BASEFONT || Q === l.BGSOUND || Q === l.LINK || Q === l.META)
    (A._appendElement(B, b2.HTML), (B.ackSelfClosing = !0));
  else if (Q === l.TITLE) A._switchToTextParsing(B, BA.MODE.RCDATA);
  else if (Q === l.NOSCRIPT)
    if (A.options.scriptingEnabled) A._switchToTextParsing(B, BA.MODE.RAWTEXT);
    else (A._insertElement(B, b2.HTML), (A.insertionMode = 'IN_HEAD_NO_SCRIPT_MODE'));
  else if (Q === l.NOFRAMES || Q === l.STYLE) A._switchToTextParsing(B, BA.MODE.RAWTEXT);
  else if (Q === l.SCRIPT) A._switchToTextParsing(B, BA.MODE.SCRIPT_DATA);
  else if (Q === l.TEMPLATE)
    (A._insertTemplate(B, b2.HTML),
      A.activeFormattingElements.insertMarker(),
      (A.framesetOk = !1),
      (A.insertionMode = 'IN_TEMPLATE_MODE'),
      A._pushTmplInsertionMode('IN_TEMPLATE_MODE'));
  else if (Q === l.HEAD) A._err(JG.misplacedStartTagForHeadElement);
  else Pr(A, B);
}
function A_(A, B) {
  let Q = B.tagName;
  if (Q === l.HEAD) (A.openElements.pop(), (A.insertionMode = 'AFTER_HEAD_MODE'));
  else if (Q === l.BODY || Q === l.BR || Q === l.HTML) Pr(A, B);
  else if (Q === l.TEMPLATE)
    if (A.openElements.tmplCount > 0) {
      if (
        (A.openElements.generateImpliedEndTagsThoroughly(),
        A.openElements.currentTagName !== l.TEMPLATE)
      )
        A._err(JG.closingOfElementWithOpenChildElements);
      (A.openElements.popUntilTagNamePopped(l.TEMPLATE),
        A.activeFormattingElements.clearToLastMarker(),
        A._popTmplInsertionMode(),
        A._resetInsertionMode());
    } else A._err(JG.endTagWithoutMatchingOpenElement);
  else A._err(JG.endTagWithoutMatchingOpenElement);
}
function Pr(A, B) {
  (A.openElements.pop(), (A.insertionMode = 'AFTER_HEAD_MODE'), A._processToken(B));
}
function YC6(A, B) {
  let Q = B.tagName;
  if (Q === l.HTML) PY(A, B);
  else if (
    Q === l.BASEFONT ||
    Q === l.BGSOUND ||
    Q === l.HEAD ||
    Q === l.LINK ||
    Q === l.META ||
    Q === l.NOFRAMES ||
    Q === l.STYLE
  )
    FI(A, B);
  else if (Q === l.NOSCRIPT) A._err(JG.nestedNoscriptInHead);
  else Sr(A, B);
}
function WC6(A, B) {
  let Q = B.tagName;
  if (Q === l.NOSCRIPT) (A.openElements.pop(), (A.insertionMode = 'IN_HEAD_MODE'));
  else if (Q === l.BR) Sr(A, B);
  else A._err(JG.endTagWithoutMatchingOpenElement);
}
function Sr(A, B) {
  let Q =
    B.type === BA.EOF_TOKEN ? JG.openElementsLeftAfterEof : JG.disallowedContentInNoscriptInHead;
  (A._err(Q), A.openElements.pop(), (A.insertionMode = 'IN_HEAD_MODE'), A._processToken(B));
}
function FC6(A, B) {
  let Q = B.tagName;
  if (Q === l.HTML) PY(A, B);
  else if (Q === l.BODY)
    (A._insertElement(B, b2.HTML), (A.framesetOk = !1), (A.insertionMode = 'IN_BODY_MODE'));
  else if (Q === l.FRAMESET) (A._insertElement(B, b2.HTML), (A.insertionMode = 'IN_FRAMESET_MODE'));
  else if (
    Q === l.BASE ||
    Q === l.BASEFONT ||
    Q === l.BGSOUND ||
    Q === l.LINK ||
    Q === l.META ||
    Q === l.NOFRAMES ||
    Q === l.SCRIPT ||
    Q === l.STYLE ||
    Q === l.TEMPLATE ||
    Q === l.TITLE
  )
    (A._err(JG.abandonedHeadElementChild),
      A.openElements.push(A.headElement),
      FI(A, B),
      A.openElements.remove(A.headElement));
  else if (Q === l.HEAD) A._err(JG.misplacedStartTagForHeadElement);
  else _r(A, B);
}
function JC6(A, B) {
  let Q = B.tagName;
  if (Q === l.BODY || Q === l.HTML || Q === l.BR) _r(A, B);
  else if (Q === l.TEMPLATE) A_(A, B);
  else A._err(JG.endTagWithoutMatchingOpenElement);
}
function _r(A, B) {
  (A._insertFakeElement(l.BODY), (A.insertionMode = 'IN_BODY_MODE'), A._processToken(B));
}
function tS(A, B) {
  (A._reconstructActiveFormattingElements(), A._insertCharacters(B));
}
function eW1(A, B) {
  (A._reconstructActiveFormattingElements(), A._insertCharacters(B), (A.framesetOk = !1));
}
function CC6(A, B) {
  if (A.openElements.tmplCount === 0)
    A.treeAdapter.adoptAttributes(A.openElements.items[0], B.attrs);
}
function XC6(A, B) {
  let Q = A.openElements.tryPeekProperlyNestedBodyElement();
  if (Q && A.openElements.tmplCount === 0)
    ((A.framesetOk = !1), A.treeAdapter.adoptAttributes(Q, B.attrs));
}
function VC6(A, B) {
  let Q = A.openElements.tryPeekProperlyNestedBodyElement();
  if (A.framesetOk && Q)
    (A.treeAdapter.detachNode(Q),
      A.openElements.popAllUpToHtmlElement(),
      A._insertElement(B, b2.HTML),
      (A.insertionMode = 'IN_FRAMESET_MODE'));
}
function WN(A, B) {
  if (A.openElements.hasInButtonScope(l.P)) A._closePElement();
  A._insertElement(B, b2.HTML);
}
function KC6(A, B) {
  if (A.openElements.hasInButtonScope(l.P)) A._closePElement();
  let Q = A.openElements.currentTagName;
  if (Q === l.H1 || Q === l.H2 || Q === l.H3 || Q === l.H4 || Q === l.H5 || Q === l.H6)
    A.openElements.pop();
  A._insertElement(B, b2.HTML);
}
function Vh0(A, B) {
  if (A.openElements.hasInButtonScope(l.P)) A._closePElement();
  (A._insertElement(B, b2.HTML), (A.skipNextNewLine = !0), (A.framesetOk = !1));
}
function HC6(A, B) {
  let Q = A.openElements.tmplCount > 0;
  if (!A.formElement || Q) {
    if (A.openElements.hasInButtonScope(l.P)) A._closePElement();
    if ((A._insertElement(B, b2.HTML), !Q)) A.formElement = A.openElements.current;
  }
}
function zC6(A, B) {
  A.framesetOk = !1;
  let Q = B.tagName;
  for (let I = A.openElements.stackTop; I >= 0; I--) {
    let G = A.openElements.items[I],
      D = A.treeAdapter.getTagName(G),
      Z = null;
    if (Q === l.LI && D === l.LI) Z = l.LI;
    else if ((Q === l.DD || Q === l.DT) && (D === l.DD || D === l.DT)) Z = D;
    if (Z) {
      (A.openElements.generateImpliedEndTagsWithExclusion(Z),
        A.openElements.popUntilTagNamePopped(Z));
      break;
    }
    if (D !== l.ADDRESS && D !== l.DIV && D !== l.P && A._isSpecialElement(G)) break;
  }
  if (A.openElements.hasInButtonScope(l.P)) A._closePElement();
  A._insertElement(B, b2.HTML);
}
function wC6(A, B) {
  if (A.openElements.hasInButtonScope(l.P)) A._closePElement();
  (A._insertElement(B, b2.HTML), (A.tokenizer.state = BA.MODE.PLAINTEXT));
}
function EC6(A, B) {
  if (A.openElements.hasInScope(l.BUTTON))
    (A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(l.BUTTON));
  (A._reconstructActiveFormattingElements(), A._insertElement(B, b2.HTML), (A.framesetOk = !1));
}
function UC6(A, B) {
  let Q = A.activeFormattingElements.getElementEntryInScopeWithTagName(l.A);
  if (Q) (aL(A, B), A.openElements.remove(Q.element), A.activeFormattingElements.removeEntry(Q));
  (A._reconstructActiveFormattingElements(),
    A._insertElement(B, b2.HTML),
    A.activeFormattingElements.pushElement(A.openElements.current, B));
}
function Rh(A, B) {
  (A._reconstructActiveFormattingElements(),
    A._insertElement(B, b2.HTML),
    A.activeFormattingElements.pushElement(A.openElements.current, B));
}
function NC6(A, B) {
  if ((A._reconstructActiveFormattingElements(), A.openElements.hasInScope(l.NOBR)))
    (aL(A, B), A._reconstructActiveFormattingElements());
  (A._insertElement(B, b2.HTML), A.activeFormattingElements.pushElement(A.openElements.current, B));
}
function Kh0(A, B) {
  (A._reconstructActiveFormattingElements(),
    A._insertElement(B, b2.HTML),
    A.activeFormattingElements.insertMarker(),
    (A.framesetOk = !1));
}
function $C6(A, B) {
  if (
    A.treeAdapter.getDocumentMode(A.document) !== eS.DOCUMENT_MODE.QUIRKS &&
    A.openElements.hasInButtonScope(l.P)
  )
    A._closePElement();
  (A._insertElement(B, b2.HTML), (A.framesetOk = !1), (A.insertionMode = 'IN_TABLE_MODE'));
}
function Oh(A, B) {
  (A._reconstructActiveFormattingElements(),
    A._appendElement(B, b2.HTML),
    (A.framesetOk = !1),
    (B.ackSelfClosing = !0));
}
function qC6(A, B) {
  (A._reconstructActiveFormattingElements(), A._appendElement(B, b2.HTML));
  let Q = BA.getTokenAttr(B, Nh0.TYPE);
  if (!Q || Q.toLowerCase() !== 'hidden') A.framesetOk = !1;
  B.ackSelfClosing = !0;
}
function Hh0(A, B) {
  (A._appendElement(B, b2.HTML), (B.ackSelfClosing = !0));
}
function MC6(A, B) {
  if (A.openElements.hasInButtonScope(l.P)) A._closePElement();
  (A._appendElement(B, b2.HTML), (A.framesetOk = !1), (A.ackSelfClosing = !0));
}
function LC6(A, B) {
  ((B.tagName = l.IMG), Oh(A, B));
}
function RC6(A, B) {
  (A._insertElement(B, b2.HTML),
    (A.skipNextNewLine = !0),
    (A.tokenizer.state = BA.MODE.RCDATA),
    (A.originalInsertionMode = A.insertionMode),
    (A.framesetOk = !1),
    (A.insertionMode = 'TEXT_MODE'));
}
function OC6(A, B) {
  if (A.openElements.hasInButtonScope(l.P)) A._closePElement();
  (A._reconstructActiveFormattingElements(),
    (A.framesetOk = !1),
    A._switchToTextParsing(B, BA.MODE.RAWTEXT));
}
function TC6(A, B) {
  ((A.framesetOk = !1), A._switchToTextParsing(B, BA.MODE.RAWTEXT));
}
function zh0(A, B) {
  A._switchToTextParsing(B, BA.MODE.RAWTEXT);
}
function PC6(A, B) {
  if (
    (A._reconstructActiveFormattingElements(),
    A._insertElement(B, b2.HTML),
    (A.framesetOk = !1),
    A.insertionMode === 'IN_TABLE_MODE' ||
      A.insertionMode === 'IN_CAPTION_MODE' ||
      A.insertionMode === 'IN_TABLE_BODY_MODE' ||
      A.insertionMode === 'IN_ROW_MODE' ||
      A.insertionMode === 'IN_CELL_MODE')
  )
    A.insertionMode = 'IN_SELECT_IN_TABLE_MODE';
  else A.insertionMode = 'IN_SELECT_MODE';
}
function wh0(A, B) {
  if (A.openElements.currentTagName === l.OPTION) A.openElements.pop();
  (A._reconstructActiveFormattingElements(), A._insertElement(B, b2.HTML));
}
function Eh0(A, B) {
  if (A.openElements.hasInScope(l.RUBY)) A.openElements.generateImpliedEndTags();
  A._insertElement(B, b2.HTML);
}
function SC6(A, B) {
  if (A.openElements.hasInScope(l.RUBY)) A.openElements.generateImpliedEndTagsWithExclusion(l.RTC);
  A._insertElement(B, b2.HTML);
}
function _C6(A, B) {
  if (A.openElements.hasInButtonScope(l.P)) A._closePElement();
  A._insertElement(B, b2.HTML);
}
function jC6(A, B) {
  if (
    (A._reconstructActiveFormattingElements(),
    cz.adjustTokenMathMLAttrs(B),
    cz.adjustTokenXMLAttrs(B),
    B.selfClosing)
  )
    A._appendElement(B, b2.MATHML);
  else A._insertElement(B, b2.MATHML);
  B.ackSelfClosing = !0;
}
function yC6(A, B) {
  if (
    (A._reconstructActiveFormattingElements(),
    cz.adjustTokenSVGAttrs(B),
    cz.adjustTokenXMLAttrs(B),
    B.selfClosing)
  )
    A._appendElement(B, b2.SVG);
  else A._insertElement(B, b2.SVG);
  B.ackSelfClosing = !0;
}
function WC(A, B) {
  (A._reconstructActiveFormattingElements(), A._insertElement(B, b2.HTML));
}
function PY(A, B) {
  let Q = B.tagName;
  switch (Q.length) {
    case 1:
      if (Q === l.I || Q === l.S || Q === l.B || Q === l.U) Rh(A, B);
      else if (Q === l.P) WN(A, B);
      else if (Q === l.A) UC6(A, B);
      else WC(A, B);
      break;
    case 2:
      if (Q === l.DL || Q === l.OL || Q === l.UL) WN(A, B);
      else if (Q === l.H1 || Q === l.H2 || Q === l.H3 || Q === l.H4 || Q === l.H5 || Q === l.H6)
        KC6(A, B);
      else if (Q === l.LI || Q === l.DD || Q === l.DT) zC6(A, B);
      else if (Q === l.EM || Q === l.TT) Rh(A, B);
      else if (Q === l.BR) Oh(A, B);
      else if (Q === l.HR) MC6(A, B);
      else if (Q === l.RB) Eh0(A, B);
      else if (Q === l.RT || Q === l.RP) SC6(A, B);
      else if (Q !== l.TH && Q !== l.TD && Q !== l.TR) WC(A, B);
      break;
    case 3:
      if (Q === l.DIV || Q === l.DIR || Q === l.NAV) WN(A, B);
      else if (Q === l.PRE) Vh0(A, B);
      else if (Q === l.BIG) Rh(A, B);
      else if (Q === l.IMG || Q === l.WBR) Oh(A, B);
      else if (Q === l.XMP) OC6(A, B);
      else if (Q === l.SVG) yC6(A, B);
      else if (Q === l.RTC) Eh0(A, B);
      else if (Q !== l.COL) WC(A, B);
      break;
    case 4:
      if (Q === l.HTML) CC6(A, B);
      else if (Q === l.BASE || Q === l.LINK || Q === l.META) FI(A, B);
      else if (Q === l.BODY) XC6(A, B);
      else if (Q === l.MAIN || Q === l.MENU) WN(A, B);
      else if (Q === l.FORM) HC6(A, B);
      else if (Q === l.CODE || Q === l.FONT) Rh(A, B);
      else if (Q === l.NOBR) NC6(A, B);
      else if (Q === l.AREA) Oh(A, B);
      else if (Q === l.MATH) jC6(A, B);
      else if (Q === l.MENU) _C6(A, B);
      else if (Q !== l.HEAD) WC(A, B);
      break;
    case 5:
      if (Q === l.STYLE || Q === l.TITLE) FI(A, B);
      else if (Q === l.ASIDE) WN(A, B);
      else if (Q === l.SMALL) Rh(A, B);
      else if (Q === l.TABLE) $C6(A, B);
      else if (Q === l.EMBED) Oh(A, B);
      else if (Q === l.INPUT) qC6(A, B);
      else if (Q === l.PARAM || Q === l.TRACK) Hh0(A, B);
      else if (Q === l.IMAGE) LC6(A, B);
      else if (Q !== l.FRAME && Q !== l.TBODY && Q !== l.TFOOT && Q !== l.THEAD) WC(A, B);
      break;
    case 6:
      if (Q === l.SCRIPT) FI(A, B);
      else if (
        Q === l.CENTER ||
        Q === l.FIGURE ||
        Q === l.FOOTER ||
        Q === l.HEADER ||
        Q === l.HGROUP ||
        Q === l.DIALOG
      )
        WN(A, B);
      else if (Q === l.BUTTON) EC6(A, B);
      else if (Q === l.STRIKE || Q === l.STRONG) Rh(A, B);
      else if (Q === l.APPLET || Q === l.OBJECT) Kh0(A, B);
      else if (Q === l.KEYGEN) Oh(A, B);
      else if (Q === l.SOURCE) Hh0(A, B);
      else if (Q === l.IFRAME) TC6(A, B);
      else if (Q === l.SELECT) PC6(A, B);
      else if (Q === l.OPTION) wh0(A, B);
      else WC(A, B);
      break;
    case 7:
      if (Q === l.BGSOUND) FI(A, B);
      else if (
        Q === l.DETAILS ||
        Q === l.ADDRESS ||
        Q === l.ARTICLE ||
        Q === l.SECTION ||
        Q === l.SUMMARY
      )
        WN(A, B);
      else if (Q === l.LISTING) Vh0(A, B);
      else if (Q === l.MARQUEE) Kh0(A, B);
      else if (Q === l.NOEMBED) zh0(A, B);
      else if (Q !== l.CAPTION) WC(A, B);
      break;
    case 8:
      if (Q === l.BASEFONT) FI(A, B);
      else if (Q === l.FRAMESET) VC6(A, B);
      else if (Q === l.FIELDSET) WN(A, B);
      else if (Q === l.TEXTAREA) RC6(A, B);
      else if (Q === l.TEMPLATE) FI(A, B);
      else if (Q === l.NOSCRIPT)
        if (A.options.scriptingEnabled) zh0(A, B);
        else WC(A, B);
      else if (Q === l.OPTGROUP) wh0(A, B);
      else if (Q !== l.COLGROUP) WC(A, B);
      break;
    case 9:
      if (Q === l.PLAINTEXT) wC6(A, B);
      else WC(A, B);
      break;
    case 10:
      if (Q === l.BLOCKQUOTE || Q === l.FIGCAPTION) WN(A, B);
      else WC(A, B);
      break;
    default:
      WC(A, B);
  }
}
function kC6(A) {
  if (A.openElements.hasInScope(l.BODY)) A.insertionMode = 'AFTER_BODY_MODE';
}
function xC6(A, B) {
  if (A.openElements.hasInScope(l.BODY))
    ((A.insertionMode = 'AFTER_BODY_MODE'), A._processToken(B));
}
function nL(A, B) {
  let Q = B.tagName;
  if (A.openElements.hasInScope(Q))
    (A.openElements.generateImpliedEndTags(), A.openElements.popUntilTagNamePopped(Q));
}
function fC6(A) {
  let B = A.openElements.tmplCount > 0,
    Q = A.formElement;
  if (!B) A.formElement = null;
  if ((Q || B) && A.openElements.hasInScope(l.FORM))
    if ((A.openElements.generateImpliedEndTags(), B)) A.openElements.popUntilTagNamePopped(l.FORM);
    else A.openElements.remove(Q);
}
function vC6(A) {
  if (!A.openElements.hasInButtonScope(l.P)) A._insertFakeElement(l.P);
  A._closePElement();
}
function bC6(A) {
  if (A.openElements.hasInListItemScope(l.LI))
    (A.openElements.generateImpliedEndTagsWithExclusion(l.LI),
      A.openElements.popUntilTagNamePopped(l.LI));
}
function gC6(A, B) {
  let Q = B.tagName;
  if (A.openElements.hasInScope(Q))
    (A.openElements.generateImpliedEndTagsWithExclusion(Q),
      A.openElements.popUntilTagNamePopped(Q));
}
function hC6(A) {
  if (A.openElements.hasNumberedHeaderInScope())
    (A.openElements.generateImpliedEndTags(), A.openElements.popUntilNumberedHeaderPopped());
}
function Uh0(A, B) {
  let Q = B.tagName;
  if (A.openElements.hasInScope(Q))
    (A.openElements.generateImpliedEndTags(),
      A.openElements.popUntilTagNamePopped(Q),
      A.activeFormattingElements.clearToLastMarker());
}
function mC6(A) {
  (A._reconstructActiveFormattingElements(),
    A._insertFakeElement(l.BR),
    A.openElements.pop(),
    (A.framesetOk = !1));
}
function gV(A, B) {
  let Q = B.tagName;
  for (let I = A.openElements.stackTop; I > 0; I--) {
    let G = A.openElements.items[I];
    if (A.treeAdapter.getTagName(G) === Q) {
      (A.openElements.generateImpliedEndTagsWithExclusion(Q),
        A.openElements.popUntilElementPopped(G));
      break;
    }
    if (A._isSpecialElement(G)) break;
  }
}
function qu1(A, B) {
  let Q = B.tagName;
  switch (Q.length) {
    case 1:
      if (Q === l.A || Q === l.B || Q === l.I || Q === l.S || Q === l.U) aL(A, B);
      else if (Q === l.P) vC6(A, B);
      else gV(A, B);
      break;
    case 2:
      if (Q === l.DL || Q === l.UL || Q === l.OL) nL(A, B);
      else if (Q === l.LI) bC6(A, B);
      else if (Q === l.DD || Q === l.DT) gC6(A, B);
      else if (Q === l.H1 || Q === l.H2 || Q === l.H3 || Q === l.H4 || Q === l.H5 || Q === l.H6)
        hC6(A, B);
      else if (Q === l.BR) mC6(A, B);
      else if (Q === l.EM || Q === l.TT) aL(A, B);
      else gV(A, B);
      break;
    case 3:
      if (Q === l.BIG) aL(A, B);
      else if (Q === l.DIR || Q === l.DIV || Q === l.NAV || Q === l.PRE) nL(A, B);
      else gV(A, B);
      break;
    case 4:
      if (Q === l.BODY) kC6(A, B);
      else if (Q === l.HTML) xC6(A, B);
      else if (Q === l.FORM) fC6(A, B);
      else if (Q === l.CODE || Q === l.FONT || Q === l.NOBR) aL(A, B);
      else if (Q === l.MAIN || Q === l.MENU) nL(A, B);
      else gV(A, B);
      break;
    case 5:
      if (Q === l.ASIDE) nL(A, B);
      else if (Q === l.SMALL) aL(A, B);
      else gV(A, B);
      break;
    case 6:
      if (
        Q === l.CENTER ||
        Q === l.FIGURE ||
        Q === l.FOOTER ||
        Q === l.HEADER ||
        Q === l.HGROUP ||
        Q === l.DIALOG
      )
        nL(A, B);
      else if (Q === l.APPLET || Q === l.OBJECT) Uh0(A, B);
      else if (Q === l.STRIKE || Q === l.STRONG) aL(A, B);
      else gV(A, B);
      break;
    case 7:
      if (
        Q === l.ADDRESS ||
        Q === l.ARTICLE ||
        Q === l.DETAILS ||
        Q === l.SECTION ||
        Q === l.SUMMARY ||
        Q === l.LISTING
      )
        nL(A, B);
      else if (Q === l.MARQUEE) Uh0(A, B);
      else gV(A, B);
      break;
    case 8:
      if (Q === l.FIELDSET) nL(A, B);
      else if (Q === l.TEMPLATE) A_(A, B);
      else gV(A, B);
      break;
    case 10:
      if (Q === l.BLOCKQUOTE || Q === l.FIGCAPTION) nL(A, B);
      else gV(A, B);
      break;
    default:
      gV(A, B);
  }
}
function FN(A, B) {
  if (A.tmplInsertionModeStackTop > -1) Lh0(A, B);
  else A.stopped = !0;
}
function dC6(A, B) {
  if (B.tagName === l.SCRIPT) A.pendingScript = A.openElements.current;
  (A.openElements.pop(), (A.insertionMode = A.originalInsertionMode));
}
function uC6(A, B) {
  (A._err(JG.eofInElementThatCanContainOnlyText),
    A.openElements.pop(),
    (A.insertionMode = A.originalInsertionMode),
    A._processToken(B));
}
function JN(A, B) {
  let Q = A.openElements.currentTagName;
  if (Q === l.TABLE || Q === l.TBODY || Q === l.TFOOT || Q === l.THEAD || Q === l.TR)
    ((A.pendingCharacterTokens = []),
      (A.hasNonWhitespacePendingCharacterToken = !1),
      (A.originalInsertionMode = A.insertionMode),
      (A.insertionMode = 'IN_TABLE_TEXT_MODE'),
      A._processToken(B));
  else FC(A, B);
}
function pC6(A, B) {
  (A.openElements.clearBackToTableContext(),
    A.activeFormattingElements.insertMarker(),
    A._insertElement(B, b2.HTML),
    (A.insertionMode = 'IN_CAPTION_MODE'));
}
function cC6(A, B) {
  (A.openElements.clearBackToTableContext(),
    A._insertElement(B, b2.HTML),
    (A.insertionMode = 'IN_COLUMN_GROUP_MODE'));
}
function lC6(A, B) {
  (A.openElements.clearBackToTableContext(),
    A._insertFakeElement(l.COLGROUP),
    (A.insertionMode = 'IN_COLUMN_GROUP_MODE'),
    A._processToken(B));
}
function iC6(A, B) {
  (A.openElements.clearBackToTableContext(),
    A._insertElement(B, b2.HTML),
    (A.insertionMode = 'IN_TABLE_BODY_MODE'));
}
function nC6(A, B) {
  (A.openElements.clearBackToTableContext(),
    A._insertFakeElement(l.TBODY),
    (A.insertionMode = 'IN_TABLE_BODY_MODE'),
    A._processToken(B));
}
function aC6(A, B) {
  if (A.openElements.hasInTableScope(l.TABLE))
    (A.openElements.popUntilTagNamePopped(l.TABLE), A._resetInsertionMode(), A._processToken(B));
}
function sC6(A, B) {
  let Q = BA.getTokenAttr(B, Nh0.TYPE);
  if (Q && Q.toLowerCase() === 'hidden') A._appendElement(B, b2.HTML);
  else FC(A, B);
  B.ackSelfClosing = !0;
}
function rC6(A, B) {
  if (!A.formElement && A.openElements.tmplCount === 0)
    (A._insertElement(B, b2.HTML), (A.formElement = A.openElements.current), A.openElements.pop());
}
function Mu1(A, B) {
  let Q = B.tagName;
  switch (Q.length) {
    case 2:
      if (Q === l.TD || Q === l.TH || Q === l.TR) nC6(A, B);
      else FC(A, B);
      break;
    case 3:
      if (Q === l.COL) lC6(A, B);
      else FC(A, B);
      break;
    case 4:
      if (Q === l.FORM) rC6(A, B);
      else FC(A, B);
      break;
    case 5:
      if (Q === l.TABLE) aC6(A, B);
      else if (Q === l.STYLE) FI(A, B);
      else if (Q === l.TBODY || Q === l.TFOOT || Q === l.THEAD) iC6(A, B);
      else if (Q === l.INPUT) sC6(A, B);
      else FC(A, B);
      break;
    case 6:
      if (Q === l.SCRIPT) FI(A, B);
      else FC(A, B);
      break;
    case 7:
      if (Q === l.CAPTION) pC6(A, B);
      else FC(A, B);
      break;
    case 8:
      if (Q === l.COLGROUP) cC6(A, B);
      else if (Q === l.TEMPLATE) FI(A, B);
      else FC(A, B);
      break;
    default:
      FC(A, B);
  }
}
function Lu1(A, B) {
  let Q = B.tagName;
  if (Q === l.TABLE) {
    if (A.openElements.hasInTableScope(l.TABLE))
      (A.openElements.popUntilTagNamePopped(l.TABLE), A._resetInsertionMode());
  } else if (Q === l.TEMPLATE) A_(A, B);
  else if (
    Q !== l.BODY &&
    Q !== l.CAPTION &&
    Q !== l.COL &&
    Q !== l.COLGROUP &&
    Q !== l.HTML &&
    Q !== l.TBODY &&
    Q !== l.TD &&
    Q !== l.TFOOT &&
    Q !== l.TH &&
    Q !== l.THEAD &&
    Q !== l.TR
  )
    FC(A, B);
}
function FC(A, B) {
  let Q = A.fosterParentingEnabled;
  ((A.fosterParentingEnabled = !0), A._processTokenInBodyMode(B), (A.fosterParentingEnabled = Q));
}
function oC6(A, B) {
  A.pendingCharacterTokens.push(B);
}
function tC6(A, B) {
  (A.pendingCharacterTokens.push(B), (A.hasNonWhitespacePendingCharacterToken = !0));
}
function Rr(A, B) {
  let Q = 0;
  if (A.hasNonWhitespacePendingCharacterToken)
    for (; Q < A.pendingCharacterTokens.length; Q++) FC(A, A.pendingCharacterTokens[Q]);
  else
    for (; Q < A.pendingCharacterTokens.length; Q++)
      A._insertCharacters(A.pendingCharacterTokens[Q]);
  ((A.insertionMode = A.originalInsertionMode), A._processToken(B));
}
function eC6(A, B) {
  let Q = B.tagName;
  if (
    Q === l.CAPTION ||
    Q === l.COL ||
    Q === l.COLGROUP ||
    Q === l.TBODY ||
    Q === l.TD ||
    Q === l.TFOOT ||
    Q === l.TH ||
    Q === l.THEAD ||
    Q === l.TR
  ) {
    if (A.openElements.hasInTableScope(l.CAPTION))
      (A.openElements.generateImpliedEndTags(),
        A.openElements.popUntilTagNamePopped(l.CAPTION),
        A.activeFormattingElements.clearToLastMarker(),
        (A.insertionMode = 'IN_TABLE_MODE'),
        A._processToken(B));
  } else PY(A, B);
}
function AX6(A, B) {
  let Q = B.tagName;
  if (Q === l.CAPTION || Q === l.TABLE) {
    if (A.openElements.hasInTableScope(l.CAPTION)) {
      if (
        (A.openElements.generateImpliedEndTags(),
        A.openElements.popUntilTagNamePopped(l.CAPTION),
        A.activeFormattingElements.clearToLastMarker(),
        (A.insertionMode = 'IN_TABLE_MODE'),
        Q === l.TABLE)
      )
        A._processToken(B);
    }
  } else if (
    Q !== l.BODY &&
    Q !== l.COL &&
    Q !== l.COLGROUP &&
    Q !== l.HTML &&
    Q !== l.TBODY &&
    Q !== l.TD &&
    Q !== l.TFOOT &&
    Q !== l.TH &&
    Q !== l.THEAD &&
    Q !== l.TR
  )
    qu1(A, B);
}
function BX6(A, B) {
  let Q = B.tagName;
  if (Q === l.HTML) PY(A, B);
  else if (Q === l.COL) (A._appendElement(B, b2.HTML), (B.ackSelfClosing = !0));
  else if (Q === l.TEMPLATE) FI(A, B);
  else BF1(A, B);
}
function QX6(A, B) {
  let Q = B.tagName;
  if (Q === l.COLGROUP) {
    if (A.openElements.currentTagName === l.COLGROUP)
      (A.openElements.pop(), (A.insertionMode = 'IN_TABLE_MODE'));
  } else if (Q === l.TEMPLATE) A_(A, B);
  else if (Q !== l.COL) BF1(A, B);
}
function BF1(A, B) {
  if (A.openElements.currentTagName === l.COLGROUP)
    (A.openElements.pop(), (A.insertionMode = 'IN_TABLE_MODE'), A._processToken(B));
}
function IX6(A, B) {
  let Q = B.tagName;
  if (Q === l.TR)
    (A.openElements.clearBackToTableBodyContext(),
      A._insertElement(B, b2.HTML),
      (A.insertionMode = 'IN_ROW_MODE'));
  else if (Q === l.TH || Q === l.TD)
    (A.openElements.clearBackToTableBodyContext(),
      A._insertFakeElement(l.TR),
      (A.insertionMode = 'IN_ROW_MODE'),
      A._processToken(B));
  else if (
    Q === l.CAPTION ||
    Q === l.COL ||
    Q === l.COLGROUP ||
    Q === l.TBODY ||
    Q === l.TFOOT ||
    Q === l.THEAD
  ) {
    if (A.openElements.hasTableBodyContextInTableScope())
      (A.openElements.clearBackToTableBodyContext(),
        A.openElements.pop(),
        (A.insertionMode = 'IN_TABLE_MODE'),
        A._processToken(B));
  } else Mu1(A, B);
}
function GX6(A, B) {
  let Q = B.tagName;
  if (Q === l.TBODY || Q === l.TFOOT || Q === l.THEAD) {
    if (A.openElements.hasInTableScope(Q))
      (A.openElements.clearBackToTableBodyContext(),
        A.openElements.pop(),
        (A.insertionMode = 'IN_TABLE_MODE'));
  } else if (Q === l.TABLE) {
    if (A.openElements.hasTableBodyContextInTableScope())
      (A.openElements.clearBackToTableBodyContext(),
        A.openElements.pop(),
        (A.insertionMode = 'IN_TABLE_MODE'),
        A._processToken(B));
  } else if (
    (Q !== l.BODY && Q !== l.CAPTION && Q !== l.COL && Q !== l.COLGROUP) ||
    (Q !== l.HTML && Q !== l.TD && Q !== l.TH && Q !== l.TR)
  )
    Lu1(A, B);
}
function DX6(A, B) {
  let Q = B.tagName;
  if (Q === l.TH || Q === l.TD)
    (A.openElements.clearBackToTableRowContext(),
      A._insertElement(B, b2.HTML),
      (A.insertionMode = 'IN_CELL_MODE'),
      A.activeFormattingElements.insertMarker());
  else if (
    Q === l.CAPTION ||
    Q === l.COL ||
    Q === l.COLGROUP ||
    Q === l.TBODY ||
    Q === l.TFOOT ||
    Q === l.THEAD ||
    Q === l.TR
  ) {
    if (A.openElements.hasInTableScope(l.TR))
      (A.openElements.clearBackToTableRowContext(),
        A.openElements.pop(),
        (A.insertionMode = 'IN_TABLE_BODY_MODE'),
        A._processToken(B));
  } else Mu1(A, B);
}
function ZX6(A, B) {
  let Q = B.tagName;
  if (Q === l.TR) {
    if (A.openElements.hasInTableScope(l.TR))
      (A.openElements.clearBackToTableRowContext(),
        A.openElements.pop(),
        (A.insertionMode = 'IN_TABLE_BODY_MODE'));
  } else if (Q === l.TABLE) {
    if (A.openElements.hasInTableScope(l.TR))
      (A.openElements.clearBackToTableRowContext(),
        A.openElements.pop(),
        (A.insertionMode = 'IN_TABLE_BODY_MODE'),
        A._processToken(B));
  } else if (Q === l.TBODY || Q === l.TFOOT || Q === l.THEAD) {
    if (A.openElements.hasInTableScope(Q) || A.openElements.hasInTableScope(l.TR))
      (A.openElements.clearBackToTableRowContext(),
        A.openElements.pop(),
        (A.insertionMode = 'IN_TABLE_BODY_MODE'),
        A._processToken(B));
  } else if (
    (Q !== l.BODY && Q !== l.CAPTION && Q !== l.COL && Q !== l.COLGROUP) ||
    (Q !== l.HTML && Q !== l.TD && Q !== l.TH)
  )
    Lu1(A, B);
}
function YX6(A, B) {
  let Q = B.tagName;
  if (
    Q === l.CAPTION ||
    Q === l.COL ||
    Q === l.COLGROUP ||
    Q === l.TBODY ||
    Q === l.TD ||
    Q === l.TFOOT ||
    Q === l.TH ||
    Q === l.THEAD ||
    Q === l.TR
  ) {
    if (A.openElements.hasInTableScope(l.TD) || A.openElements.hasInTableScope(l.TH))
      (A._closeTableCell(), A._processToken(B));
  } else PY(A, B);
}
function WX6(A, B) {
  let Q = B.tagName;
  if (Q === l.TD || Q === l.TH) {
    if (A.openElements.hasInTableScope(Q))
      (A.openElements.generateImpliedEndTags(),
        A.openElements.popUntilTagNamePopped(Q),
        A.activeFormattingElements.clearToLastMarker(),
        (A.insertionMode = 'IN_ROW_MODE'));
  } else if (Q === l.TABLE || Q === l.TBODY || Q === l.TFOOT || Q === l.THEAD || Q === l.TR) {
    if (A.openElements.hasInTableScope(Q)) (A._closeTableCell(), A._processToken(B));
  } else if (Q !== l.BODY && Q !== l.CAPTION && Q !== l.COL && Q !== l.COLGROUP && Q !== l.HTML)
    qu1(A, B);
}
function qh0(A, B) {
  let Q = B.tagName;
  if (Q === l.HTML) PY(A, B);
  else if (Q === l.OPTION) {
    if (A.openElements.currentTagName === l.OPTION) A.openElements.pop();
    A._insertElement(B, b2.HTML);
  } else if (Q === l.OPTGROUP) {
    if (A.openElements.currentTagName === l.OPTION) A.openElements.pop();
    if (A.openElements.currentTagName === l.OPTGROUP) A.openElements.pop();
    A._insertElement(B, b2.HTML);
  } else if (Q === l.INPUT || Q === l.KEYGEN || Q === l.TEXTAREA || Q === l.SELECT) {
    if (A.openElements.hasInSelectScope(l.SELECT)) {
      if ((A.openElements.popUntilTagNamePopped(l.SELECT), A._resetInsertionMode(), Q !== l.SELECT))
        A._processToken(B);
    }
  } else if (Q === l.SCRIPT || Q === l.TEMPLATE) FI(A, B);
}
function Mh0(A, B) {
  let Q = B.tagName;
  if (Q === l.OPTGROUP) {
    let I = A.openElements.items[A.openElements.stackTop - 1],
      G = I && A.treeAdapter.getTagName(I);
    if (A.openElements.currentTagName === l.OPTION && G === l.OPTGROUP) A.openElements.pop();
    if (A.openElements.currentTagName === l.OPTGROUP) A.openElements.pop();
  } else if (Q === l.OPTION) {
    if (A.openElements.currentTagName === l.OPTION) A.openElements.pop();
  } else if (Q === l.SELECT && A.openElements.hasInSelectScope(l.SELECT))
    (A.openElements.popUntilTagNamePopped(l.SELECT), A._resetInsertionMode());
  else if (Q === l.TEMPLATE) A_(A, B);
}
function FX6(A, B) {
  let Q = B.tagName;
  if (
    Q === l.CAPTION ||
    Q === l.TABLE ||
    Q === l.TBODY ||
    Q === l.TFOOT ||
    Q === l.THEAD ||
    Q === l.TR ||
    Q === l.TD ||
    Q === l.TH
  )
    (A.openElements.popUntilTagNamePopped(l.SELECT), A._resetInsertionMode(), A._processToken(B));
  else qh0(A, B);
}
function JX6(A, B) {
  let Q = B.tagName;
  if (
    Q === l.CAPTION ||
    Q === l.TABLE ||
    Q === l.TBODY ||
    Q === l.TFOOT ||
    Q === l.THEAD ||
    Q === l.TR ||
    Q === l.TD ||
    Q === l.TH
  ) {
    if (A.openElements.hasInTableScope(Q))
      (A.openElements.popUntilTagNamePopped(l.SELECT), A._resetInsertionMode(), A._processToken(B));
  } else Mh0(A, B);
}
function CX6(A, B) {
  let Q = B.tagName;
  if (
    Q === l.BASE ||
    Q === l.BASEFONT ||
    Q === l.BGSOUND ||
    Q === l.LINK ||
    Q === l.META ||
    Q === l.NOFRAMES ||
    Q === l.SCRIPT ||
    Q === l.STYLE ||
    Q === l.TEMPLATE ||
    Q === l.TITLE
  )
    FI(A, B);
  else {
    let I = aJ6[Q] || 'IN_BODY_MODE';
    (A._popTmplInsertionMode(),
      A._pushTmplInsertionMode(I),
      (A.insertionMode = I),
      A._processToken(B));
  }
}
function XX6(A, B) {
  if (B.tagName === l.TEMPLATE) A_(A, B);
}
function Lh0(A, B) {
  if (A.openElements.tmplCount > 0)
    (A.openElements.popUntilTagNamePopped(l.TEMPLATE),
      A.activeFormattingElements.clearToLastMarker(),
      A._popTmplInsertionMode(),
      A._resetInsertionMode(),
      A._processToken(B));
  else A.stopped = !0;
}
function VX6(A, B) {
  if (B.tagName === l.HTML) PY(A, B);
  else QF1(A, B);
}
function KX6(A, B) {
  if (B.tagName === l.HTML) {
    if (!A.fragmentContext) A.insertionMode = 'AFTER_AFTER_BODY_MODE';
  } else QF1(A, B);
}
function QF1(A, B) {
  ((A.insertionMode = 'IN_BODY_MODE'), A._processToken(B));
}
function HX6(A, B) {
  let Q = B.tagName;
  if (Q === l.HTML) PY(A, B);
  else if (Q === l.FRAMESET) A._insertElement(B, b2.HTML);
  else if (Q === l.FRAME) (A._appendElement(B, b2.HTML), (B.ackSelfClosing = !0));
  else if (Q === l.NOFRAMES) FI(A, B);
}
function zX6(A, B) {
  if (B.tagName === l.FRAMESET && !A.openElements.isRootHtmlElementCurrent()) {
    if ((A.openElements.pop(), !A.fragmentContext && A.openElements.currentTagName !== l.FRAMESET))
      A.insertionMode = 'AFTER_FRAMESET_MODE';
  }
}
function wX6(A, B) {
  let Q = B.tagName;
  if (Q === l.HTML) PY(A, B);
  else if (Q === l.NOFRAMES) FI(A, B);
}
function EX6(A, B) {
  if (B.tagName === l.HTML) A.insertionMode = 'AFTER_AFTER_FRAMESET_MODE';
}
function UX6(A, B) {
  if (B.tagName === l.HTML) PY(A, B);
  else AF1(A, B);
}
function AF1(A, B) {
  ((A.insertionMode = 'IN_BODY_MODE'), A._processToken(B));
}
function NX6(A, B) {
  let Q = B.tagName;
  if (Q === l.HTML) PY(A, B);
  else if (Q === l.NOFRAMES) FI(A, B);
}
function $X6(A, B) {
  ((B.chars = lJ6.REPLACEMENT_CHARACTER), A._insertCharacters(B));
}
function qX6(A, B) {
  (A._insertCharacters(B), (A.framesetOk = !1));
}
function MX6(A, B) {
  if (cz.causesExit(B) && !A.fragmentContext) {
    while (
      A.treeAdapter.getNamespaceURI(A.openElements.current) !== b2.HTML &&
      !A._isIntegrationPoint(A.openElements.current)
    )
      A.openElements.pop();
    A._processToken(B);
  } else {
    let Q = A._getAdjustedCurrentElement(),
      I = A.treeAdapter.getNamespaceURI(Q);
    if (I === b2.MATHML) cz.adjustTokenMathMLAttrs(B);
    else if (I === b2.SVG) (cz.adjustTokenSVGTagName(B), cz.adjustTokenSVGAttrs(B));
    if ((cz.adjustTokenXMLAttrs(B), B.selfClosing)) A._appendElement(B, I);
    else A._insertElement(B, I);
    B.ackSelfClosing = !0;
  }
}
function LX6(A, B) {
  for (let Q = A.openElements.stackTop; Q > 0; Q--) {
    let I = A.openElements.items[Q];
    if (A.treeAdapter.getNamespaceURI(I) === b2.HTML) {
      A._processToken(B);
      break;
    }
    if (A.treeAdapter.getTagName(I).toLowerCase() === B.tagName) {
      A.openElements.popUntilElementPopped(I);
      break;
    }
  }
}
