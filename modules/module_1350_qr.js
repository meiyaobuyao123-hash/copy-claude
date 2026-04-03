// Module: qr
// Params: Iz8,$g0

var wF6 = Hg0(),
  W8 = iW1(),
  oS = wg0(),
  Q0 = nW1(),
  t1 = W8.CODE_POINTS,
  sS = W8.CODE_POINT_SEQUENCES,
  EF6 = {
    128: 8364,
    130: 8218,
    131: 402,
    132: 8222,
    133: 8230,
    134: 8224,
    135: 8225,
    136: 710,
    137: 8240,
    138: 352,
    139: 8249,
    140: 338,
    142: 381,
    145: 8216,
    146: 8217,
    147: 8220,
    148: 8221,
    149: 8226,
    150: 8211,
    151: 8212,
    152: 732,
    153: 8482,
    154: 353,
    155: 8250,
    156: 339,
    158: 382,
    159: 376,
  };
function VB(A) {
  return A === t1.SPACE || A === t1.LINE_FEED || A === t1.TABULATION || A === t1.FORM_FEED;
}
function $r(A) {
  return A >= t1.DIGIT_0 && A <= t1.DIGIT_9;
}
function vV(A) {
  return A >= t1.LATIN_CAPITAL_A && A <= t1.LATIN_CAPITAL_Z;
}
function rS(A) {
  return A >= t1.LATIN_SMALL_A && A <= t1.LATIN_SMALL_Z;
}
function lL(A) {
  return rS(A) || vV(A);
}
function Wu1(A) {
  return lL(A) || $r(A);
}
function Ug0(A) {
  return A >= t1.LATIN_CAPITAL_A && A <= t1.LATIN_CAPITAL_F;
}
function Ng0(A) {
  return A >= t1.LATIN_SMALL_A && A <= t1.LATIN_SMALL_F;
}
function UF6(A) {
  return $r(A) || Ug0(A) || Ng0(A);
}
function aW1(A) {
  return A + 32;
}
function x3(A) {
  if (A <= 65535) return String.fromCharCode(A);
  return (
    (A -= 65536),
    String.fromCharCode(((A >>> 10) & 1023) | 55296) + String.fromCharCode(56320 | (A & 1023))
  );
}
function cL(A) {
  return String.fromCharCode(aW1(A));
}
function Eg0(A, B) {
  let Q = oS[++A],
    I = ++A,
    G = I + Q - 1;
  while (I <= G) {
    let D = (I + G) >>> 1,
      Z = oS[D];
    if (Z < B) I = D + 1;
    else if (Z > B) G = D - 1;
    else return oS[D + Q];
  }
  return -1;
}
class a8 {
  constructor() {
    ((this.preprocessor = new wF6()),
      (this.tokenQueue = []),
      (this.allowCDATA = !1),
      (this.state = 'DATA_STATE'),
      (this.returnState = ''),
      (this.charRefCode = -1),
      (this.tempBuff = []),
      (this.lastStartTagName = ''),
      (this.consumedAfterSnapshot = -1),
      (this.active = !1),
      (this.currentCharacterToken = null),
      (this.currentToken = null),
      (this.currentAttr = null));
  }
  _err() {}
  _errOnNextCodePoint(A) {
    (this._consume(), this._err(A), this._unconsume());
  }
  getNextToken() {
    while (!this.tokenQueue.length && this.active) {
      this.consumedAfterSnapshot = 0;
      let A = this._consume();
      if (!this._ensureHibernation()) this[this.state](A);
    }
    return this.tokenQueue.shift();
  }
  write(A, B) {
    ((this.active = !0), this.preprocessor.write(A, B));
  }
  insertHtmlAtCurrentPos(A) {
    ((this.active = !0), this.preprocessor.insertHtmlAtCurrentPos(A));
  }
  _ensureHibernation() {
    if (this.preprocessor.endOfChunkHit) {
      for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--)
        this.preprocessor.retreat();
      return ((this.active = !1), this.tokenQueue.push({ type: a8.HIBERNATION_TOKEN }), !0);
    }
    return !1;
  }
  _consume() {
    return (this.consumedAfterSnapshot++, this.preprocessor.advance());
  }
  _unconsume() {
    (this.consumedAfterSnapshot--, this.preprocessor.retreat());
  }
  _reconsumeInState(A) {
    ((this.state = A), this._unconsume());
  }
  _consumeSequenceIfMatch(A, B, Q) {
    let I = 0,
      G = !0,
      D = A.length,
      Z = 0,
      Y = B,
      W = void 0;
    for (; Z < D; Z++) {
      if (Z > 0) ((Y = this._consume()), I++);
      if (Y === t1.EOF) {
        G = !1;
        break;
      }
      if (((W = A[Z]), Y !== W && (Q || Y !== aW1(W)))) {
        G = !1;
        break;
      }
    }
    if (!G) while (I--) this._unconsume();
    return G;
  }
  _isTempBufferEqualToScriptString() {
    if (this.tempBuff.length !== sS.SCRIPT_STRING.length) return !1;
    for (let A = 0; A < this.tempBuff.length; A++)
      if (this.tempBuff[A] !== sS.SCRIPT_STRING[A]) return !1;
    return !0;
  }
  _createStartTagToken() {
    this.currentToken = {
      type: a8.START_TAG_TOKEN,
      tagName: '',
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
    };
  }
  _createEndTagToken() {
    this.currentToken = { type: a8.END_TAG_TOKEN, tagName: '', selfClosing: !1, attrs: [] };
  }
  _createCommentToken() {
    this.currentToken = { type: a8.COMMENT_TOKEN, data: '' };
  }
  _createDoctypeToken(A) {
    this.currentToken = {
      type: a8.DOCTYPE_TOKEN,
      name: A,
      forceQuirks: !1,
      publicId: null,
      systemId: null,
    };
  }
  _createCharacterToken(A, B) {
    this.currentCharacterToken = { type: A, chars: B };
  }
  _createEOFToken() {
    this.currentToken = { type: a8.EOF_TOKEN };
  }
  _createAttr(A) {
    this.currentAttr = { name: A, value: '' };
  }
  _leaveAttrName(A) {
    if (a8.getTokenAttr(this.currentToken, this.currentAttr.name) === null)
      this.currentToken.attrs.push(this.currentAttr);
    else this._err(Q0.duplicateAttribute);
    this.state = A;
  }
  _leaveAttrValue(A) {
    this.state = A;
  }
  _emitCurrentToken() {
    this._emitCurrentCharacterToken();
    let A = this.currentToken;
    if (((this.currentToken = null), A.type === a8.START_TAG_TOKEN))
      this.lastStartTagName = A.tagName;
    else if (A.type === a8.END_TAG_TOKEN) {
      if (A.attrs.length > 0) this._err(Q0.endTagWithAttributes);
      if (A.selfClosing) this._err(Q0.endTagWithTrailingSolidus);
    }
    this.tokenQueue.push(A);
  }
  _emitCurrentCharacterToken() {
    if (this.currentCharacterToken)
      (this.tokenQueue.push(this.currentCharacterToken), (this.currentCharacterToken = null));
  }
  _emitEOFToken() {
    (this._createEOFToken(), this._emitCurrentToken());
  }
  _appendCharToCurrentCharacterToken(A, B) {
    if (this.currentCharacterToken && this.currentCharacterToken.type !== A)
      this._emitCurrentCharacterToken();
    if (this.currentCharacterToken) this.currentCharacterToken.chars += B;
    else this._createCharacterToken(A, B);
  }
  _emitCodePoint(A) {
    let B = a8.CHARACTER_TOKEN;
    if (VB(A)) B = a8.WHITESPACE_CHARACTER_TOKEN;
    else if (A === t1.NULL) B = a8.NULL_CHARACTER_TOKEN;
    this._appendCharToCurrentCharacterToken(B, x3(A));
  }
  _emitSeveralCodePoints(A) {
    for (let B = 0; B < A.length; B++) this._emitCodePoint(A[B]);
  }
  _emitChars(A) {
    this._appendCharToCurrentCharacterToken(a8.CHARACTER_TOKEN, A);
  }
  _matchNamedCharacterReference(A) {
    let B = null,
      Q = 1,
      I = Eg0(0, A);
    this.tempBuff.push(A);
    while (I > -1) {
      let G = oS[I],
        D = G < 7;
      if (D && G & 1) ((B = G & 2 ? [oS[++I], oS[++I]] : [oS[++I]]), (Q = 0));
      let Y = this._consume();
      if ((this.tempBuff.push(Y), Q++, Y === t1.EOF)) break;
      if (D) I = G & 4 ? Eg0(I, Y) : -1;
      else I = Y === G ? ++I : -1;
    }
    while (Q--) (this.tempBuff.pop(), this._unconsume());
    return B;
  }
  _isCharacterReferenceInAttribute() {
    return (
      this.returnState === 'ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE' ||
      this.returnState === 'ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE' ||
      this.returnState === 'ATTRIBUTE_VALUE_UNQUOTED_STATE'
    );
  }
  _isCharacterReferenceAttributeQuirk(A) {
    if (!A && this._isCharacterReferenceInAttribute()) {
      let B = this._consume();
      return (this._unconsume(), B === t1.EQUALS_SIGN || Wu1(B));
    }
    return !1;
  }
  _flushCodePointsConsumedAsCharacterReference() {
    if (this._isCharacterReferenceInAttribute())
      for (let A = 0; A < this.tempBuff.length; A++) this.currentAttr.value += x3(this.tempBuff[A]);
    else this._emitSeveralCodePoints(this.tempBuff);
    this.tempBuff = [];
  }
  ['DATA_STATE'](A) {
    if ((this.preprocessor.dropParsedChunk(), A === t1.LESS_THAN_SIGN))
      this.state = 'TAG_OPEN_STATE';
    else if (A === t1.AMPERSAND)
      ((this.returnState = 'DATA_STATE'), (this.state = 'CHARACTER_REFERENCE_STATE'));
    else if (A === t1.NULL) (this._err(Q0.unexpectedNullCharacter), this._emitCodePoint(A));
    else if (A === t1.EOF) this._emitEOFToken();
    else this._emitCodePoint(A);
  }
  ['RCDATA_STATE'](A) {
    if ((this.preprocessor.dropParsedChunk(), A === t1.AMPERSAND))
      ((this.returnState = 'RCDATA_STATE'), (this.state = 'CHARACTER_REFERENCE_STATE'));
    else if (A === t1.LESS_THAN_SIGN) this.state = 'RCDATA_LESS_THAN_SIGN_STATE';
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), this._emitChars(W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) this._emitEOFToken();
    else this._emitCodePoint(A);
  }
  ['RAWTEXT_STATE'](A) {
    if ((this.preprocessor.dropParsedChunk(), A === t1.LESS_THAN_SIGN))
      this.state = 'RAWTEXT_LESS_THAN_SIGN_STATE';
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), this._emitChars(W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) this._emitEOFToken();
    else this._emitCodePoint(A);
  }
  ['SCRIPT_DATA_STATE'](A) {
    if ((this.preprocessor.dropParsedChunk(), A === t1.LESS_THAN_SIGN))
      this.state = 'SCRIPT_DATA_LESS_THAN_SIGN_STATE';
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), this._emitChars(W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) this._emitEOFToken();
    else this._emitCodePoint(A);
  }
  ['PLAINTEXT_STATE'](A) {
    if ((this.preprocessor.dropParsedChunk(), A === t1.NULL))
      (this._err(Q0.unexpectedNullCharacter), this._emitChars(W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) this._emitEOFToken();
    else this._emitCodePoint(A);
  }
  ['TAG_OPEN_STATE'](A) {
    if (A === t1.EXCLAMATION_MARK) this.state = 'MARKUP_DECLARATION_OPEN_STATE';
    else if (A === t1.SOLIDUS) this.state = 'END_TAG_OPEN_STATE';
    else if (lL(A)) (this._createStartTagToken(), this._reconsumeInState('TAG_NAME_STATE'));
    else if (A === t1.QUESTION_MARK)
      (this._err(Q0.unexpectedQuestionMarkInsteadOfTagName),
        this._createCommentToken(),
        this._reconsumeInState('BOGUS_COMMENT_STATE'));
    else if (A === t1.EOF)
      (this._err(Q0.eofBeforeTagName), this._emitChars('<'), this._emitEOFToken());
    else
      (this._err(Q0.invalidFirstCharacterOfTagName),
        this._emitChars('<'),
        this._reconsumeInState('DATA_STATE'));
  }
  ['END_TAG_OPEN_STATE'](A) {
    if (lL(A)) (this._createEndTagToken(), this._reconsumeInState('TAG_NAME_STATE'));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.missingEndTagName), (this.state = 'DATA_STATE'));
    else if (A === t1.EOF)
      (this._err(Q0.eofBeforeTagName), this._emitChars('</'), this._emitEOFToken());
    else
      (this._err(Q0.invalidFirstCharacterOfTagName),
        this._createCommentToken(),
        this._reconsumeInState('BOGUS_COMMENT_STATE'));
  }
  ['TAG_NAME_STATE'](A) {
    if (VB(A)) this.state = 'BEFORE_ATTRIBUTE_NAME_STATE';
    else if (A === t1.SOLIDUS) this.state = 'SELF_CLOSING_START_TAG_STATE';
    else if (A === t1.GREATER_THAN_SIGN) ((this.state = 'DATA_STATE'), this._emitCurrentToken());
    else if (vV(A)) this.currentToken.tagName += cL(A);
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter),
        (this.currentToken.tagName += W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) (this._err(Q0.eofInTag), this._emitEOFToken());
    else this.currentToken.tagName += x3(A);
  }
  ['RCDATA_LESS_THAN_SIGN_STATE'](A) {
    if (A === t1.SOLIDUS) ((this.tempBuff = []), (this.state = 'RCDATA_END_TAG_OPEN_STATE'));
    else (this._emitChars('<'), this._reconsumeInState('RCDATA_STATE'));
  }
  ['RCDATA_END_TAG_OPEN_STATE'](A) {
    if (lL(A)) (this._createEndTagToken(), this._reconsumeInState('RCDATA_END_TAG_NAME_STATE'));
    else (this._emitChars('</'), this._reconsumeInState('RCDATA_STATE'));
  }
  ['RCDATA_END_TAG_NAME_STATE'](A) {
    if (vV(A)) ((this.currentToken.tagName += cL(A)), this.tempBuff.push(A));
    else if (rS(A)) ((this.currentToken.tagName += x3(A)), this.tempBuff.push(A));
    else {
      if (this.lastStartTagName === this.currentToken.tagName) {
        if (VB(A)) {
          this.state = 'BEFORE_ATTRIBUTE_NAME_STATE';
          return;
        }
        if (A === t1.SOLIDUS) {
          this.state = 'SELF_CLOSING_START_TAG_STATE';
          return;
        }
        if (A === t1.GREATER_THAN_SIGN) {
          ((this.state = 'DATA_STATE'), this._emitCurrentToken());
          return;
        }
      }
      (this._emitChars('</'),
        this._emitSeveralCodePoints(this.tempBuff),
        this._reconsumeInState('RCDATA_STATE'));
    }
  }
  ['RAWTEXT_LESS_THAN_SIGN_STATE'](A) {
    if (A === t1.SOLIDUS) ((this.tempBuff = []), (this.state = 'RAWTEXT_END_TAG_OPEN_STATE'));
    else (this._emitChars('<'), this._reconsumeInState('RAWTEXT_STATE'));
  }
  ['RAWTEXT_END_TAG_OPEN_STATE'](A) {
    if (lL(A)) (this._createEndTagToken(), this._reconsumeInState('RAWTEXT_END_TAG_NAME_STATE'));
    else (this._emitChars('</'), this._reconsumeInState('RAWTEXT_STATE'));
  }
  ['RAWTEXT_END_TAG_NAME_STATE'](A) {
    if (vV(A)) ((this.currentToken.tagName += cL(A)), this.tempBuff.push(A));
    else if (rS(A)) ((this.currentToken.tagName += x3(A)), this.tempBuff.push(A));
    else {
      if (this.lastStartTagName === this.currentToken.tagName) {
        if (VB(A)) {
          this.state = 'BEFORE_ATTRIBUTE_NAME_STATE';
          return;
        }
        if (A === t1.SOLIDUS) {
          this.state = 'SELF_CLOSING_START_TAG_STATE';
          return;
        }
        if (A === t1.GREATER_THAN_SIGN) {
          (this._emitCurrentToken(), (this.state = 'DATA_STATE'));
          return;
        }
      }
      (this._emitChars('</'),
        this._emitSeveralCodePoints(this.tempBuff),
        this._reconsumeInState('RAWTEXT_STATE'));
    }
  }
  ['SCRIPT_DATA_LESS_THAN_SIGN_STATE'](A) {
    if (A === t1.SOLIDUS) ((this.tempBuff = []), (this.state = 'SCRIPT_DATA_END_TAG_OPEN_STATE'));
    else if (A === t1.EXCLAMATION_MARK)
      ((this.state = 'SCRIPT_DATA_ESCAPE_START_STATE'), this._emitChars('<!'));
    else (this._emitChars('<'), this._reconsumeInState('SCRIPT_DATA_STATE'));
  }
  ['SCRIPT_DATA_END_TAG_OPEN_STATE'](A) {
    if (lL(A))
      (this._createEndTagToken(), this._reconsumeInState('SCRIPT_DATA_END_TAG_NAME_STATE'));
    else (this._emitChars('</'), this._reconsumeInState('SCRIPT_DATA_STATE'));
  }
  ['SCRIPT_DATA_END_TAG_NAME_STATE'](A) {
    if (vV(A)) ((this.currentToken.tagName += cL(A)), this.tempBuff.push(A));
    else if (rS(A)) ((this.currentToken.tagName += x3(A)), this.tempBuff.push(A));
    else {
      if (this.lastStartTagName === this.currentToken.tagName) {
        if (VB(A)) {
          this.state = 'BEFORE_ATTRIBUTE_NAME_STATE';
          return;
        } else if (A === t1.SOLIDUS) {
          this.state = 'SELF_CLOSING_START_TAG_STATE';
          return;
        } else if (A === t1.GREATER_THAN_SIGN) {
          (this._emitCurrentToken(), (this.state = 'DATA_STATE'));
          return;
        }
      }
      (this._emitChars('</'),
        this._emitSeveralCodePoints(this.tempBuff),
        this._reconsumeInState('SCRIPT_DATA_STATE'));
    }
  }
  ['SCRIPT_DATA_ESCAPE_START_STATE'](A) {
    if (A === t1.HYPHEN_MINUS)
      ((this.state = 'SCRIPT_DATA_ESCAPE_START_DASH_STATE'), this._emitChars('-'));
    else this._reconsumeInState('SCRIPT_DATA_STATE');
  }
  ['SCRIPT_DATA_ESCAPE_START_DASH_STATE'](A) {
    if (A === t1.HYPHEN_MINUS)
      ((this.state = 'SCRIPT_DATA_ESCAPED_DASH_DASH_STATE'), this._emitChars('-'));
    else this._reconsumeInState('SCRIPT_DATA_STATE');
  }
  ['SCRIPT_DATA_ESCAPED_STATE'](A) {
    if (A === t1.HYPHEN_MINUS)
      ((this.state = 'SCRIPT_DATA_ESCAPED_DASH_STATE'), this._emitChars('-'));
    else if (A === t1.LESS_THAN_SIGN) this.state = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE';
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), this._emitChars(W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) (this._err(Q0.eofInScriptHtmlCommentLikeText), this._emitEOFToken());
    else this._emitCodePoint(A);
  }
  ['SCRIPT_DATA_ESCAPED_DASH_STATE'](A) {
    if (A === t1.HYPHEN_MINUS)
      ((this.state = 'SCRIPT_DATA_ESCAPED_DASH_DASH_STATE'), this._emitChars('-'));
    else if (A === t1.LESS_THAN_SIGN) this.state = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE';
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter),
        (this.state = 'SCRIPT_DATA_ESCAPED_STATE'),
        this._emitChars(W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) (this._err(Q0.eofInScriptHtmlCommentLikeText), this._emitEOFToken());
    else ((this.state = 'SCRIPT_DATA_ESCAPED_STATE'), this._emitCodePoint(A));
  }
  ['SCRIPT_DATA_ESCAPED_DASH_DASH_STATE'](A) {
    if (A === t1.HYPHEN_MINUS) this._emitChars('-');
    else if (A === t1.LESS_THAN_SIGN) this.state = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE';
    else if (A === t1.GREATER_THAN_SIGN) ((this.state = 'SCRIPT_DATA_STATE'), this._emitChars('>'));
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter),
        (this.state = 'SCRIPT_DATA_ESCAPED_STATE'),
        this._emitChars(W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) (this._err(Q0.eofInScriptHtmlCommentLikeText), this._emitEOFToken());
    else ((this.state = 'SCRIPT_DATA_ESCAPED_STATE'), this._emitCodePoint(A));
  }
  ['SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE'](A) {
    if (A === t1.SOLIDUS)
      ((this.tempBuff = []), (this.state = 'SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE'));
    else if (lL(A))
      ((this.tempBuff = []),
        this._emitChars('<'),
        this._reconsumeInState('SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE'));
    else (this._emitChars('<'), this._reconsumeInState('SCRIPT_DATA_ESCAPED_STATE'));
  }
  ['SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE'](A) {
    if (lL(A))
      (this._createEndTagToken(), this._reconsumeInState('SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE'));
    else (this._emitChars('</'), this._reconsumeInState('SCRIPT_DATA_ESCAPED_STATE'));
  }
  ['SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE'](A) {
    if (vV(A)) ((this.currentToken.tagName += cL(A)), this.tempBuff.push(A));
    else if (rS(A)) ((this.currentToken.tagName += x3(A)), this.tempBuff.push(A));
    else {
      if (this.lastStartTagName === this.currentToken.tagName) {
        if (VB(A)) {
          this.state = 'BEFORE_ATTRIBUTE_NAME_STATE';
          return;
        }
        if (A === t1.SOLIDUS) {
          this.state = 'SELF_CLOSING_START_TAG_STATE';
          return;
        }
        if (A === t1.GREATER_THAN_SIGN) {
          (this._emitCurrentToken(), (this.state = 'DATA_STATE'));
          return;
        }
      }
      (this._emitChars('</'),
        this._emitSeveralCodePoints(this.tempBuff),
        this._reconsumeInState('SCRIPT_DATA_ESCAPED_STATE'));
    }
  }
  ['SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE'](A) {
    if (VB(A) || A === t1.SOLIDUS || A === t1.GREATER_THAN_SIGN)
      ((this.state = this._isTempBufferEqualToScriptString()
        ? 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE'
        : 'SCRIPT_DATA_ESCAPED_STATE'),
        this._emitCodePoint(A));
    else if (vV(A)) (this.tempBuff.push(aW1(A)), this._emitCodePoint(A));
    else if (rS(A)) (this.tempBuff.push(A), this._emitCodePoint(A));
    else this._reconsumeInState('SCRIPT_DATA_ESCAPED_STATE');
  }
  ['SCRIPT_DATA_DOUBLE_ESCAPED_STATE'](A) {
    if (A === t1.HYPHEN_MINUS)
      ((this.state = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE'), this._emitChars('-'));
    else if (A === t1.LESS_THAN_SIGN)
      ((this.state = 'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE'), this._emitChars('<'));
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), this._emitChars(W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) (this._err(Q0.eofInScriptHtmlCommentLikeText), this._emitEOFToken());
    else this._emitCodePoint(A);
  }
  ['SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE'](A) {
    if (A === t1.HYPHEN_MINUS)
      ((this.state = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE'), this._emitChars('-'));
    else if (A === t1.LESS_THAN_SIGN)
      ((this.state = 'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE'), this._emitChars('<'));
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter),
        (this.state = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE'),
        this._emitChars(W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) (this._err(Q0.eofInScriptHtmlCommentLikeText), this._emitEOFToken());
    else ((this.state = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE'), this._emitCodePoint(A));
  }
  ['SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE'](A) {
    if (A === t1.HYPHEN_MINUS) this._emitChars('-');
    else if (A === t1.LESS_THAN_SIGN)
      ((this.state = 'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE'), this._emitChars('<'));
    else if (A === t1.GREATER_THAN_SIGN) ((this.state = 'SCRIPT_DATA_STATE'), this._emitChars('>'));
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter),
        (this.state = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE'),
        this._emitChars(W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) (this._err(Q0.eofInScriptHtmlCommentLikeText), this._emitEOFToken());
    else ((this.state = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE'), this._emitCodePoint(A));
  }
  ['SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE'](A) {
    if (A === t1.SOLIDUS)
      ((this.tempBuff = []),
        (this.state = 'SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE'),
        this._emitChars('/'));
    else this._reconsumeInState('SCRIPT_DATA_DOUBLE_ESCAPED_STATE');
  }
  ['SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE'](A) {
    if (VB(A) || A === t1.SOLIDUS || A === t1.GREATER_THAN_SIGN)
      ((this.state = this._isTempBufferEqualToScriptString()
        ? 'SCRIPT_DATA_ESCAPED_STATE'
        : 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE'),
        this._emitCodePoint(A));
    else if (vV(A)) (this.tempBuff.push(aW1(A)), this._emitCodePoint(A));
    else if (rS(A)) (this.tempBuff.push(A), this._emitCodePoint(A));
    else this._reconsumeInState('SCRIPT_DATA_DOUBLE_ESCAPED_STATE');
  }
  ['BEFORE_ATTRIBUTE_NAME_STATE'](A) {
    if (VB(A)) return;
    if (A === t1.SOLIDUS || A === t1.GREATER_THAN_SIGN || A === t1.EOF)
      this._reconsumeInState('AFTER_ATTRIBUTE_NAME_STATE');
    else if (A === t1.EQUALS_SIGN)
      (this._err(Q0.unexpectedEqualsSignBeforeAttributeName),
        this._createAttr('='),
        (this.state = 'ATTRIBUTE_NAME_STATE'));
    else (this._createAttr(''), this._reconsumeInState('ATTRIBUTE_NAME_STATE'));
  }
  ['ATTRIBUTE_NAME_STATE'](A) {
    if (VB(A) || A === t1.SOLIDUS || A === t1.GREATER_THAN_SIGN || A === t1.EOF)
      (this._leaveAttrName('AFTER_ATTRIBUTE_NAME_STATE'), this._unconsume());
    else if (A === t1.EQUALS_SIGN) this._leaveAttrName('BEFORE_ATTRIBUTE_VALUE_STATE');
    else if (vV(A)) this.currentAttr.name += cL(A);
    else if (A === t1.QUOTATION_MARK || A === t1.APOSTROPHE || A === t1.LESS_THAN_SIGN)
      (this._err(Q0.unexpectedCharacterInAttributeName), (this.currentAttr.name += x3(A)));
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), (this.currentAttr.name += W8.REPLACEMENT_CHARACTER));
    else this.currentAttr.name += x3(A);
  }
  ['AFTER_ATTRIBUTE_NAME_STATE'](A) {
    if (VB(A)) return;
    if (A === t1.SOLIDUS) this.state = 'SELF_CLOSING_START_TAG_STATE';
    else if (A === t1.EQUALS_SIGN) this.state = 'BEFORE_ATTRIBUTE_VALUE_STATE';
    else if (A === t1.GREATER_THAN_SIGN) ((this.state = 'DATA_STATE'), this._emitCurrentToken());
    else if (A === t1.EOF) (this._err(Q0.eofInTag), this._emitEOFToken());
    else (this._createAttr(''), this._reconsumeInState('ATTRIBUTE_NAME_STATE'));
  }
  ['BEFORE_ATTRIBUTE_VALUE_STATE'](A) {
    if (VB(A)) return;
    if (A === t1.QUOTATION_MARK) this.state = 'ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE';
    else if (A === t1.APOSTROPHE) this.state = 'ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE';
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.missingAttributeValue), (this.state = 'DATA_STATE'), this._emitCurrentToken());
    else this._reconsumeInState('ATTRIBUTE_VALUE_UNQUOTED_STATE');
  }
  ['ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE'](A) {
    if (A === t1.QUOTATION_MARK) this.state = 'AFTER_ATTRIBUTE_VALUE_QUOTED_STATE';
    else if (A === t1.AMPERSAND)
      ((this.returnState = 'ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE'),
        (this.state = 'CHARACTER_REFERENCE_STATE'));
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), (this.currentAttr.value += W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) (this._err(Q0.eofInTag), this._emitEOFToken());
    else this.currentAttr.value += x3(A);
  }
  ['ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE'](A) {
    if (A === t1.APOSTROPHE) this.state = 'AFTER_ATTRIBUTE_VALUE_QUOTED_STATE';
    else if (A === t1.AMPERSAND)
      ((this.returnState = 'ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE'),
        (this.state = 'CHARACTER_REFERENCE_STATE'));
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), (this.currentAttr.value += W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF) (this._err(Q0.eofInTag), this._emitEOFToken());
    else this.currentAttr.value += x3(A);
  }
  ['ATTRIBUTE_VALUE_UNQUOTED_STATE'](A) {
    if (VB(A)) this._leaveAttrValue('BEFORE_ATTRIBUTE_NAME_STATE');
    else if (A === t1.AMPERSAND)
      ((this.returnState = 'ATTRIBUTE_VALUE_UNQUOTED_STATE'),
        (this.state = 'CHARACTER_REFERENCE_STATE'));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._leaveAttrValue('DATA_STATE'), this._emitCurrentToken());
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), (this.currentAttr.value += W8.REPLACEMENT_CHARACTER));
    else if (
      A === t1.QUOTATION_MARK ||
      A === t1.APOSTROPHE ||
      A === t1.LESS_THAN_SIGN ||
      A === t1.EQUALS_SIGN ||
      A === t1.GRAVE_ACCENT
    )
      (this._err(Q0.unexpectedCharacterInUnquotedAttributeValue),
        (this.currentAttr.value += x3(A)));
    else if (A === t1.EOF) (this._err(Q0.eofInTag), this._emitEOFToken());
    else this.currentAttr.value += x3(A);
  }
  ['AFTER_ATTRIBUTE_VALUE_QUOTED_STATE'](A) {
    if (VB(A)) this._leaveAttrValue('BEFORE_ATTRIBUTE_NAME_STATE');
    else if (A === t1.SOLIDUS) this._leaveAttrValue('SELF_CLOSING_START_TAG_STATE');
    else if (A === t1.GREATER_THAN_SIGN)
      (this._leaveAttrValue('DATA_STATE'), this._emitCurrentToken());
    else if (A === t1.EOF) (this._err(Q0.eofInTag), this._emitEOFToken());
    else
      (this._err(Q0.missingWhitespaceBetweenAttributes),
        this._reconsumeInState('BEFORE_ATTRIBUTE_NAME_STATE'));
  }
  ['SELF_CLOSING_START_TAG_STATE'](A) {
    if (A === t1.GREATER_THAN_SIGN)
      ((this.currentToken.selfClosing = !0), (this.state = 'DATA_STATE'), this._emitCurrentToken());
    else if (A === t1.EOF) (this._err(Q0.eofInTag), this._emitEOFToken());
    else
      (this._err(Q0.unexpectedSolidusInTag), this._reconsumeInState('BEFORE_ATTRIBUTE_NAME_STATE'));
  }
  ['BOGUS_COMMENT_STATE'](A) {
    if (A === t1.GREATER_THAN_SIGN) ((this.state = 'DATA_STATE'), this._emitCurrentToken());
    else if (A === t1.EOF) (this._emitCurrentToken(), this._emitEOFToken());
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), (this.currentToken.data += W8.REPLACEMENT_CHARACTER));
    else this.currentToken.data += x3(A);
  }
  ['MARKUP_DECLARATION_OPEN_STATE'](A) {
    if (this._consumeSequenceIfMatch(sS.DASH_DASH_STRING, A, !0))
      (this._createCommentToken(), (this.state = 'COMMENT_START_STATE'));
    else if (this._consumeSequenceIfMatch(sS.DOCTYPE_STRING, A, !1)) this.state = 'DOCTYPE_STATE';
    else if (this._consumeSequenceIfMatch(sS.CDATA_START_STRING, A, !0))
      if (this.allowCDATA) this.state = 'CDATA_SECTION_STATE';
      else
        (this._err(Q0.cdataInHtmlContent),
          this._createCommentToken(),
          (this.currentToken.data = '[CDATA['),
          (this.state = 'BOGUS_COMMENT_STATE'));
    else if (!this._ensureHibernation())
      (this._err(Q0.incorrectlyOpenedComment),
        this._createCommentToken(),
        this._reconsumeInState('BOGUS_COMMENT_STATE'));
  }
  ['COMMENT_START_STATE'](A) {
    if (A === t1.HYPHEN_MINUS) this.state = 'COMMENT_START_DASH_STATE';
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.abruptClosingOfEmptyComment),
        (this.state = 'DATA_STATE'),
        this._emitCurrentToken());
    else this._reconsumeInState('COMMENT_STATE');
  }
  ['COMMENT_START_DASH_STATE'](A) {
    if (A === t1.HYPHEN_MINUS) this.state = 'COMMENT_END_STATE';
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.abruptClosingOfEmptyComment),
        (this.state = 'DATA_STATE'),
        this._emitCurrentToken());
    else if (A === t1.EOF)
      (this._err(Q0.eofInComment), this._emitCurrentToken(), this._emitEOFToken());
    else ((this.currentToken.data += '-'), this._reconsumeInState('COMMENT_STATE'));
  }
  ['COMMENT_STATE'](A) {
    if (A === t1.HYPHEN_MINUS) this.state = 'COMMENT_END_DASH_STATE';
    else if (A === t1.LESS_THAN_SIGN)
      ((this.currentToken.data += '<'), (this.state = 'COMMENT_LESS_THAN_SIGN_STATE'));
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), (this.currentToken.data += W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF)
      (this._err(Q0.eofInComment), this._emitCurrentToken(), this._emitEOFToken());
    else this.currentToken.data += x3(A);
  }
  ['COMMENT_LESS_THAN_SIGN_STATE'](A) {
    if (A === t1.EXCLAMATION_MARK)
      ((this.currentToken.data += '!'), (this.state = 'COMMENT_LESS_THAN_SIGN_BANG_STATE'));
    else if (A === t1.LESS_THAN_SIGN) this.currentToken.data += '!';
    else this._reconsumeInState('COMMENT_STATE');
  }
  ['COMMENT_LESS_THAN_SIGN_BANG_STATE'](A) {
    if (A === t1.HYPHEN_MINUS) this.state = 'COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE';
    else this._reconsumeInState('COMMENT_STATE');
  }
  ['COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE'](A) {
    if (A === t1.HYPHEN_MINUS) this.state = 'COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE';
    else this._reconsumeInState('COMMENT_END_DASH_STATE');
  }
  ['COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE'](A) {
    if (A !== t1.GREATER_THAN_SIGN && A !== t1.EOF) this._err(Q0.nestedComment);
    this._reconsumeInState('COMMENT_END_STATE');
  }
  ['COMMENT_END_DASH_STATE'](A) {
    if (A === t1.HYPHEN_MINUS) this.state = 'COMMENT_END_STATE';
    else if (A === t1.EOF)
      (this._err(Q0.eofInComment), this._emitCurrentToken(), this._emitEOFToken());
    else ((this.currentToken.data += '-'), this._reconsumeInState('COMMENT_STATE'));
  }
  ['COMMENT_END_STATE'](A) {
    if (A === t1.GREATER_THAN_SIGN) ((this.state = 'DATA_STATE'), this._emitCurrentToken());
    else if (A === t1.EXCLAMATION_MARK) this.state = 'COMMENT_END_BANG_STATE';
    else if (A === t1.HYPHEN_MINUS) this.currentToken.data += '-';
    else if (A === t1.EOF)
      (this._err(Q0.eofInComment), this._emitCurrentToken(), this._emitEOFToken());
    else ((this.currentToken.data += '--'), this._reconsumeInState('COMMENT_STATE'));
  }
  ['COMMENT_END_BANG_STATE'](A) {
    if (A === t1.HYPHEN_MINUS)
      ((this.currentToken.data += '--!'), (this.state = 'COMMENT_END_DASH_STATE'));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.incorrectlyClosedComment),
        (this.state = 'DATA_STATE'),
        this._emitCurrentToken());
    else if (A === t1.EOF)
      (this._err(Q0.eofInComment), this._emitCurrentToken(), this._emitEOFToken());
    else ((this.currentToken.data += '--!'), this._reconsumeInState('COMMENT_STATE'));
  }
  ['DOCTYPE_STATE'](A) {
    if (VB(A)) this.state = 'BEFORE_DOCTYPE_NAME_STATE';
    else if (A === t1.GREATER_THAN_SIGN) this._reconsumeInState('BEFORE_DOCTYPE_NAME_STATE');
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        this._createDoctypeToken(null),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else
      (this._err(Q0.missingWhitespaceBeforeDoctypeName),
        this._reconsumeInState('BEFORE_DOCTYPE_NAME_STATE'));
  }
  ['BEFORE_DOCTYPE_NAME_STATE'](A) {
    if (VB(A)) return;
    if (vV(A)) (this._createDoctypeToken(cL(A)), (this.state = 'DOCTYPE_NAME_STATE'));
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter),
        this._createDoctypeToken(W8.REPLACEMENT_CHARACTER),
        (this.state = 'DOCTYPE_NAME_STATE'));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.missingDoctypeName),
        this._createDoctypeToken(null),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        (this.state = 'DATA_STATE'));
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        this._createDoctypeToken(null),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else (this._createDoctypeToken(x3(A)), (this.state = 'DOCTYPE_NAME_STATE'));
  }
  ['DOCTYPE_NAME_STATE'](A) {
    if (VB(A)) this.state = 'AFTER_DOCTYPE_NAME_STATE';
    else if (A === t1.GREATER_THAN_SIGN) ((this.state = 'DATA_STATE'), this._emitCurrentToken());
    else if (vV(A)) this.currentToken.name += cL(A);
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter), (this.currentToken.name += W8.REPLACEMENT_CHARACTER));
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else this.currentToken.name += x3(A);
  }
  ['AFTER_DOCTYPE_NAME_STATE'](A) {
    if (VB(A)) return;
    if (A === t1.GREATER_THAN_SIGN) ((this.state = 'DATA_STATE'), this._emitCurrentToken());
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else if (this._consumeSequenceIfMatch(sS.PUBLIC_STRING, A, !1))
      this.state = 'AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE';
    else if (this._consumeSequenceIfMatch(sS.SYSTEM_STRING, A, !1))
      this.state = 'AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE';
    else if (!this._ensureHibernation())
      (this._err(Q0.invalidCharacterSequenceAfterDoctypeName),
        (this.currentToken.forceQuirks = !0),
        this._reconsumeInState('BOGUS_DOCTYPE_STATE'));
  }
  ['AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE'](A) {
    if (VB(A)) this.state = 'BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE';
    else if (A === t1.QUOTATION_MARK)
      (this._err(Q0.missingWhitespaceAfterDoctypePublicKeyword),
        (this.currentToken.publicId = ''),
        (this.state = 'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE'));
    else if (A === t1.APOSTROPHE)
      (this._err(Q0.missingWhitespaceAfterDoctypePublicKeyword),
        (this.currentToken.publicId = ''),
        (this.state = 'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE'));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.missingDoctypePublicIdentifier),
        (this.currentToken.forceQuirks = !0),
        (this.state = 'DATA_STATE'),
        this._emitCurrentToken());
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else
      (this._err(Q0.missingQuoteBeforeDoctypePublicIdentifier),
        (this.currentToken.forceQuirks = !0),
        this._reconsumeInState('BOGUS_DOCTYPE_STATE'));
  }
  ['BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE'](A) {
    if (VB(A)) return;
    if (A === t1.QUOTATION_MARK)
      ((this.currentToken.publicId = ''),
        (this.state = 'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE'));
    else if (A === t1.APOSTROPHE)
      ((this.currentToken.publicId = ''),
        (this.state = 'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE'));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.missingDoctypePublicIdentifier),
        (this.currentToken.forceQuirks = !0),
        (this.state = 'DATA_STATE'),
        this._emitCurrentToken());
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else
      (this._err(Q0.missingQuoteBeforeDoctypePublicIdentifier),
        (this.currentToken.forceQuirks = !0),
        this._reconsumeInState('BOGUS_DOCTYPE_STATE'));
  }
  ['DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE'](A) {
    if (A === t1.QUOTATION_MARK) this.state = 'AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE';
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter),
        (this.currentToken.publicId += W8.REPLACEMENT_CHARACTER));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.abruptDoctypePublicIdentifier),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        (this.state = 'DATA_STATE'));
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else this.currentToken.publicId += x3(A);
  }
  ['DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE'](A) {
    if (A === t1.APOSTROPHE) this.state = 'AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE';
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter),
        (this.currentToken.publicId += W8.REPLACEMENT_CHARACTER));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.abruptDoctypePublicIdentifier),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        (this.state = 'DATA_STATE'));
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else this.currentToken.publicId += x3(A);
  }
  ['AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE'](A) {
    if (VB(A)) this.state = 'BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE';
    else if (A === t1.GREATER_THAN_SIGN) ((this.state = 'DATA_STATE'), this._emitCurrentToken());
    else if (A === t1.QUOTATION_MARK)
      (this._err(Q0.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
        (this.currentToken.systemId = ''),
        (this.state = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE'));
    else if (A === t1.APOSTROPHE)
      (this._err(Q0.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
        (this.currentToken.systemId = ''),
        (this.state = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE'));
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else
      (this._err(Q0.missingQuoteBeforeDoctypeSystemIdentifier),
        (this.currentToken.forceQuirks = !0),
        this._reconsumeInState('BOGUS_DOCTYPE_STATE'));
  }
  ['BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE'](A) {
    if (VB(A)) return;
    if (A === t1.GREATER_THAN_SIGN) (this._emitCurrentToken(), (this.state = 'DATA_STATE'));
    else if (A === t1.QUOTATION_MARK)
      ((this.currentToken.systemId = ''),
        (this.state = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE'));
    else if (A === t1.APOSTROPHE)
      ((this.currentToken.systemId = ''),
        (this.state = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE'));
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else
      (this._err(Q0.missingQuoteBeforeDoctypeSystemIdentifier),
        (this.currentToken.forceQuirks = !0),
        this._reconsumeInState('BOGUS_DOCTYPE_STATE'));
  }
  ['AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE'](A) {
    if (VB(A)) this.state = 'BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE';
    else if (A === t1.QUOTATION_MARK)
      (this._err(Q0.missingWhitespaceAfterDoctypeSystemKeyword),
        (this.currentToken.systemId = ''),
        (this.state = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE'));
    else if (A === t1.APOSTROPHE)
      (this._err(Q0.missingWhitespaceAfterDoctypeSystemKeyword),
        (this.currentToken.systemId = ''),
        (this.state = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE'));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.missingDoctypeSystemIdentifier),
        (this.currentToken.forceQuirks = !0),
        (this.state = 'DATA_STATE'),
        this._emitCurrentToken());
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else
      (this._err(Q0.missingQuoteBeforeDoctypeSystemIdentifier),
        (this.currentToken.forceQuirks = !0),
        this._reconsumeInState('BOGUS_DOCTYPE_STATE'));
  }
  ['BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE'](A) {
    if (VB(A)) return;
    if (A === t1.QUOTATION_MARK)
      ((this.currentToken.systemId = ''),
        (this.state = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE'));
    else if (A === t1.APOSTROPHE)
      ((this.currentToken.systemId = ''),
        (this.state = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE'));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.missingDoctypeSystemIdentifier),
        (this.currentToken.forceQuirks = !0),
        (this.state = 'DATA_STATE'),
        this._emitCurrentToken());
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else
      (this._err(Q0.missingQuoteBeforeDoctypeSystemIdentifier),
        (this.currentToken.forceQuirks = !0),
        this._reconsumeInState('BOGUS_DOCTYPE_STATE'));
  }
  ['DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE'](A) {
    if (A === t1.QUOTATION_MARK) this.state = 'AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE';
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter),
        (this.currentToken.systemId += W8.REPLACEMENT_CHARACTER));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.abruptDoctypeSystemIdentifier),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        (this.state = 'DATA_STATE'));
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else this.currentToken.systemId += x3(A);
  }
  ['DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE'](A) {
    if (A === t1.APOSTROPHE) this.state = 'AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE';
    else if (A === t1.NULL)
      (this._err(Q0.unexpectedNullCharacter),
        (this.currentToken.systemId += W8.REPLACEMENT_CHARACTER));
    else if (A === t1.GREATER_THAN_SIGN)
      (this._err(Q0.abruptDoctypeSystemIdentifier),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        (this.state = 'DATA_STATE'));
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else this.currentToken.systemId += x3(A);
  }
  ['AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE'](A) {
    if (VB(A)) return;
    if (A === t1.GREATER_THAN_SIGN) (this._emitCurrentToken(), (this.state = 'DATA_STATE'));
    else if (A === t1.EOF)
      (this._err(Q0.eofInDoctype),
        (this.currentToken.forceQuirks = !0),
        this._emitCurrentToken(),
        this._emitEOFToken());
    else
      (this._err(Q0.unexpectedCharacterAfterDoctypeSystemIdentifier),
        this._reconsumeInState('BOGUS_DOCTYPE_STATE'));
  }
  ['BOGUS_DOCTYPE_STATE'](A) {
    if (A === t1.GREATER_THAN_SIGN) (this._emitCurrentToken(), (this.state = 'DATA_STATE'));
    else if (A === t1.NULL) this._err(Q0.unexpectedNullCharacter);
    else if (A === t1.EOF) (this._emitCurrentToken(), this._emitEOFToken());
  }
  ['CDATA_SECTION_STATE'](A) {
    if (A === t1.RIGHT_SQUARE_BRACKET) this.state = 'CDATA_SECTION_BRACKET_STATE';
    else if (A === t1.EOF) (this._err(Q0.eofInCdata), this._emitEOFToken());
    else this._emitCodePoint(A);
  }
  ['CDATA_SECTION_BRACKET_STATE'](A) {
    if (A === t1.RIGHT_SQUARE_BRACKET) this.state = 'CDATA_SECTION_END_STATE';
    else (this._emitChars(']'), this._reconsumeInState('CDATA_SECTION_STATE'));
  }
  ['CDATA_SECTION_END_STATE'](A) {
    if (A === t1.GREATER_THAN_SIGN) this.state = 'DATA_STATE';
    else if (A === t1.RIGHT_SQUARE_BRACKET) this._emitChars(']');
    else (this._emitChars(']]'), this._reconsumeInState('CDATA_SECTION_STATE'));
  }
  ['CHARACTER_REFERENCE_STATE'](A) {
    if (((this.tempBuff = [t1.AMPERSAND]), A === t1.NUMBER_SIGN))
      (this.tempBuff.push(A), (this.state = 'NUMERIC_CHARACTER_REFERENCE_STATE'));
    else if (Wu1(A)) this._reconsumeInState('NAMED_CHARACTER_REFERENCE_STATE');
    else
      (this._flushCodePointsConsumedAsCharacterReference(),
        this._reconsumeInState(this.returnState));
  }
  ['NAMED_CHARACTER_REFERENCE_STATE'](A) {
    let B = this._matchNamedCharacterReference(A);
    if (this._ensureHibernation()) this.tempBuff = [t1.AMPERSAND];
    else if (B) {
      let Q = this.tempBuff[this.tempBuff.length - 1] === t1.SEMICOLON;
      if (!this._isCharacterReferenceAttributeQuirk(Q)) {
        if (!Q) this._errOnNextCodePoint(Q0.missingSemicolonAfterCharacterReference);
        this.tempBuff = B;
      }
      (this._flushCodePointsConsumedAsCharacterReference(), (this.state = this.returnState));
    } else
      (this._flushCodePointsConsumedAsCharacterReference(),
        (this.state = 'AMBIGUOS_AMPERSAND_STATE'));
  }
  ['AMBIGUOS_AMPERSAND_STATE'](A) {
    if (Wu1(A))
      if (this._isCharacterReferenceInAttribute()) this.currentAttr.value += x3(A);
      else this._emitCodePoint(A);
    else {
      if (A === t1.SEMICOLON) this._err(Q0.unknownNamedCharacterReference);
      this._reconsumeInState(this.returnState);
    }
  }
  ['NUMERIC_CHARACTER_REFERENCE_STATE'](A) {
    if (((this.charRefCode = 0), A === t1.LATIN_SMALL_X || A === t1.LATIN_CAPITAL_X))
      (this.tempBuff.push(A), (this.state = 'HEXADEMICAL_CHARACTER_REFERENCE_START_STATE'));
    else this._reconsumeInState('DECIMAL_CHARACTER_REFERENCE_START_STATE');
  }
  ['HEXADEMICAL_CHARACTER_REFERENCE_START_STATE'](A) {
    if (UF6(A)) this._reconsumeInState('HEXADEMICAL_CHARACTER_REFERENCE_STATE');
    else
      (this._err(Q0.absenceOfDigitsInNumericCharacterReference),
        this._flushCodePointsConsumedAsCharacterReference(),
        this._reconsumeInState(this.returnState));
  }
  ['DECIMAL_CHARACTER_REFERENCE_START_STATE'](A) {
    if ($r(A)) this._reconsumeInState('DECIMAL_CHARACTER_REFERENCE_STATE');
    else
      (this._err(Q0.absenceOfDigitsInNumericCharacterReference),
        this._flushCodePointsConsumedAsCharacterReference(),
        this._reconsumeInState(this.returnState));
  }
  ['HEXADEMICAL_CHARACTER_REFERENCE_STATE'](A) {
    if (Ug0(A)) this.charRefCode = this.charRefCode * 16 + A - 55;
    else if (Ng0(A)) this.charRefCode = this.charRefCode * 16 + A - 87;
    else if ($r(A)) this.charRefCode = this.charRefCode * 16 + A - 48;
    else if (A === t1.SEMICOLON) this.state = 'NUMERIC_CHARACTER_REFERENCE_END_STATE';
    else
      (this._err(Q0.missingSemicolonAfterCharacterReference),
        this._reconsumeInState('NUMERIC_CHARACTER_REFERENCE_END_STATE'));
  }
  ['DECIMAL_CHARACTER_REFERENCE_STATE'](A) {
    if ($r(A)) this.charRefCode = this.charRefCode * 10 + A - 48;
    else if (A === t1.SEMICOLON) this.state = 'NUMERIC_CHARACTER_REFERENCE_END_STATE';
    else
      (this._err(Q0.missingSemicolonAfterCharacterReference),
        this._reconsumeInState('NUMERIC_CHARACTER_REFERENCE_END_STATE'));
  }
  ['NUMERIC_CHARACTER_REFERENCE_END_STATE']() {
    if (this.charRefCode === t1.NULL)
      (this._err(Q0.nullCharacterReference), (this.charRefCode = t1.REPLACEMENT_CHARACTER));
    else if (this.charRefCode > 1114111)
      (this._err(Q0.characterReferenceOutsideUnicodeRange),
        (this.charRefCode = t1.REPLACEMENT_CHARACTER));
    else if (W8.isSurrogate(this.charRefCode))
      (this._err(Q0.surrogateCharacterReference), (this.charRefCode = t1.REPLACEMENT_CHARACTER));
    else if (W8.isUndefinedCodePoint(this.charRefCode))
      this._err(Q0.noncharacterCharacterReference);
    else if (W8.isControlCodePoint(this.charRefCode) || this.charRefCode === t1.CARRIAGE_RETURN) {
      this._err(Q0.controlCharacterReference);
      let A = EF6[this.charRefCode];
      if (A) this.charRefCode = A;
    }
    ((this.tempBuff = [this.charRefCode]),
      this._flushCodePointsConsumedAsCharacterReference(),
      this._reconsumeInState(this.returnState));
  }
}
a8.CHARACTER_TOKEN = 'CHARACTER_TOKEN';
a8.NULL_CHARACTER_TOKEN = 'NULL_CHARACTER_TOKEN';
a8.WHITESPACE_CHARACTER_TOKEN = 'WHITESPACE_CHARACTER_TOKEN';
a8.START_TAG_TOKEN = 'START_TAG_TOKEN';
a8.END_TAG_TOKEN = 'END_TAG_TOKEN';
a8.COMMENT_TOKEN = 'COMMENT_TOKEN';
a8.DOCTYPE_TOKEN = 'DOCTYPE_TOKEN';
a8.EOF_TOKEN = 'EOF_TOKEN';
a8.HIBERNATION_TOKEN = 'HIBERNATION_TOKEN';
a8.MODE = {
  DATA: 'DATA_STATE',
  RCDATA: 'RCDATA_STATE',
  RAWTEXT: 'RAWTEXT_STATE',
  SCRIPT_DATA: 'SCRIPT_DATA_STATE',
  PLAINTEXT: 'PLAINTEXT_STATE',
};
a8.getTokenAttr = function (A, B) {
  for (let Q = A.attrs.length - 1; Q >= 0; Q--) if (A.attrs[Q].name === B) return A.attrs[Q].value;
  return null;
};
$g0.exports = a8;
