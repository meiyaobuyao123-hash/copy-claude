// Module: hmA
// Params: $d5,gmA

var de9 = bmA(),
  ue9 = {
    attributeNamePrefix: '@_',
    attributesGroupName: !1,
    textNodeName: '#text',
    ignoreAttributes: !0,
    cdataPropName: !1,
    format: !1,
    indentBy: '  ',
    suppressEmptyNode: !1,
    suppressUnpairedNode: !0,
    suppressBooleanAttributes: !0,
    tagValueProcessor: function (A, B) {
      return B;
    },
    attributeValueProcessor: function (A, B) {
      return B;
    },
    preserveOrder: !1,
    commentPropName: !1,
    unpairedTags: [],
    entities: [
      { regex: new RegExp('&', 'g'), val: '&amp;' },
      { regex: new RegExp('>', 'g'), val: '&gt;' },
      { regex: new RegExp('<', 'g'), val: '&lt;' },
      { regex: new RegExp("'", 'g'), val: '&apos;' },
      { regex: new RegExp('"', 'g'), val: '&quot;' },
    ],
    processEntities: !0,
    stopNodes: [],
    oneListGroup: !1,
  };
function WM(A) {
  if (
    ((this.options = Object.assign({}, ue9, A)),
    this.options.ignoreAttributes || this.options.attributesGroupName)
  )
    this.isAttribute = function () {
      return !1;
    };
  else ((this.attrPrefixLen = this.options.attributeNamePrefix.length), (this.isAttribute = le9));
  if (((this.processTextOrObjNode = pe9), this.options.format))
    ((this.indentate = ce9),
      (this.tagEndChar = `>
`),
      (this.newLine = `
`));
  else
    ((this.indentate = function () {
      return '';
    }),
      (this.tagEndChar = '>'),
      (this.newLine = ''));
}
WM.prototype.build = function (A) {
  if (this.options.preserveOrder) return de9(A, this.options);
  else {
    if (Array.isArray(A) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1)
      A = { [this.options.arrayNodeName]: A };
    return this.j2x(A, 0).val;
  }
};
WM.prototype.j2x = function (A, B) {
  let Q = '',
    I = '';
  for (let G in A) {
    if (!Object.prototype.hasOwnProperty.call(A, G)) continue;
    if (typeof A[G] === 'undefined') {
      if (this.isAttribute(G)) I += '';
    } else if (A[G] === null)
      if (this.isAttribute(G)) I += '';
      else if (G[0] === '?') I += this.indentate(B) + '<' + G + '?' + this.tagEndChar;
      else I += this.indentate(B) + '<' + G + '/' + this.tagEndChar;
    else if (A[G] instanceof Date) I += this.buildTextValNode(A[G], G, '', B);
    else if (typeof A[G] !== 'object') {
      let D = this.isAttribute(G);
      if (D) Q += this.buildAttrPairStr(D, '' + A[G]);
      else if (G === this.options.textNodeName) {
        let Z = this.options.tagValueProcessor(G, '' + A[G]);
        I += this.replaceEntitiesValue(Z);
      } else I += this.buildTextValNode(A[G], G, '', B);
    } else if (Array.isArray(A[G])) {
      let D = A[G].length,
        Z = '',
        Y = '';
      for (let W = 0; W < D; W++) {
        let F = A[G][W];
        if (typeof F === 'undefined');
        else if (F === null)
          if (G[0] === '?') I += this.indentate(B) + '<' + G + '?' + this.tagEndChar;
          else I += this.indentate(B) + '<' + G + '/' + this.tagEndChar;
        else if (typeof F === 'object')
          if (this.options.oneListGroup) {
            let J = this.j2x(F, B + 1);
            if (
              ((Z += J.val),
              this.options.attributesGroupName &&
                F.hasOwnProperty(this.options.attributesGroupName))
            )
              Y += J.attrStr;
          } else Z += this.processTextOrObjNode(F, G, B);
        else if (this.options.oneListGroup) {
          let J = this.options.tagValueProcessor(G, F);
          ((J = this.replaceEntitiesValue(J)), (Z += J));
        } else Z += this.buildTextValNode(F, G, '', B);
      }
      if (this.options.oneListGroup) Z = this.buildObjectNode(Z, G, Y, B);
      I += Z;
    } else if (this.options.attributesGroupName && G === this.options.attributesGroupName) {
      let D = Object.keys(A[G]),
        Z = D.length;
      for (let Y = 0; Y < Z; Y++) Q += this.buildAttrPairStr(D[Y], '' + A[G][D[Y]]);
    } else I += this.processTextOrObjNode(A[G], G, B);
  }
  return { attrStr: Q, val: I };
};
WM.prototype.buildAttrPairStr = function (A, B) {
  if (
    ((B = this.options.attributeValueProcessor(A, '' + B)),
    (B = this.replaceEntitiesValue(B)),
    this.options.suppressBooleanAttributes && B === 'true')
  )
    return ' ' + A;
  else return ' ' + A + '="' + B + '"';
};
function pe9(A, B, Q) {
  let I = this.j2x(A, Q + 1);
  if (A[this.options.textNodeName] !== void 0 && Object.keys(A).length === 1)
    return this.buildTextValNode(A[this.options.textNodeName], B, I.attrStr, Q);
  else return this.buildObjectNode(I.val, B, I.attrStr, Q);
}
WM.prototype.buildObjectNode = function (A, B, Q, I) {
  if (A === '')
    if (B[0] === '?') return this.indentate(I) + '<' + B + Q + '?' + this.tagEndChar;
    else return this.indentate(I) + '<' + B + Q + this.closeTag(B) + this.tagEndChar;
  else {
    let G = '</' + B + this.tagEndChar,
      D = '';
    if (B[0] === '?') ((D = '?'), (G = ''));
    if ((Q || Q === '') && A.indexOf('<') === -1)
      return this.indentate(I) + '<' + B + Q + D + '>' + A + G;
    else if (
      this.options.commentPropName !== !1 &&
      B === this.options.commentPropName &&
      D.length === 0
    )
      return this.indentate(I) + `<!--${A}-->` + this.newLine;
    else return this.indentate(I) + '<' + B + Q + D + this.tagEndChar + A + this.indentate(I) + G;
  }
};
WM.prototype.closeTag = function (A) {
  let B = '';
  if (this.options.unpairedTags.indexOf(A) !== -1) {
    if (!this.options.suppressUnpairedNode) B = '/';
  } else if (this.options.suppressEmptyNode) B = '/';
  else B = `></${A}`;
  return B;
};
WM.prototype.buildTextValNode = function (A, B, Q, I) {
  if (this.options.cdataPropName !== !1 && B === this.options.cdataPropName)
    return this.indentate(I) + `<![CDATA[${A}]]>` + this.newLine;
  else if (this.options.commentPropName !== !1 && B === this.options.commentPropName)
    return this.indentate(I) + `<!--${A}-->` + this.newLine;
  else if (B[0] === '?') return this.indentate(I) + '<' + B + Q + '?' + this.tagEndChar;
  else {
    let G = this.options.tagValueProcessor(B, A);
    if (((G = this.replaceEntitiesValue(G)), G === ''))
      return this.indentate(I) + '<' + B + Q + this.closeTag(B) + this.tagEndChar;
    else return this.indentate(I) + '<' + B + Q + '>' + G + '</' + B + this.tagEndChar;
  }
};
WM.prototype.replaceEntitiesValue = function (A) {
  if (A && A.length > 0 && this.options.processEntities)
    for (let B = 0; B < this.options.entities.length; B++) {
      let Q = this.options.entities[B];
      A = A.replace(Q.regex, Q.val);
    }
  return A;
};
function ce9(A) {
  return this.options.indentBy.repeat(A);
}
function le9(A) {
  if (A.startsWith(this.options.attributeNamePrefix) && A !== this.options.textNodeName)
    return A.substr(this.attrPrefixLen);
  else return !1;
}
gmA.exports = WM;
