// Module: Wh0
// Params: kJ6

var Uu1 = qr(),
  Nu1 = iL(),
  O9 = Nu1.TAG_NAMES,
  FG = Nu1.NAMESPACES,
  oW1 = Nu1.ATTRS,
  Yh0 = { TEXT_HTML: 'text/html', APPLICATION_XML: 'application/xhtml+xml' },
  TJ6 = {
    attributename: 'attributeName',
    attributetype: 'attributeType',
    basefrequency: 'baseFrequency',
    baseprofile: 'baseProfile',
    calcmode: 'calcMode',
    clippathunits: 'clipPathUnits',
    diffuseconstant: 'diffuseConstant',
    edgemode: 'edgeMode',
    filterunits: 'filterUnits',
    glyphref: 'glyphRef',
    gradienttransform: 'gradientTransform',
    gradientunits: 'gradientUnits',
    kernelmatrix: 'kernelMatrix',
    kernelunitlength: 'kernelUnitLength',
    keypoints: 'keyPoints',
    keysplines: 'keySplines',
    keytimes: 'keyTimes',
    lengthadjust: 'lengthAdjust',
    limitingconeangle: 'limitingConeAngle',
    markerheight: 'markerHeight',
    markerunits: 'markerUnits',
    markerwidth: 'markerWidth',
    maskcontentunits: 'maskContentUnits',
    maskunits: 'maskUnits',
    numoctaves: 'numOctaves',
    pathlength: 'pathLength',
    patterncontentunits: 'patternContentUnits',
    patterntransform: 'patternTransform',
    patternunits: 'patternUnits',
    pointsatx: 'pointsAtX',
    pointsaty: 'pointsAtY',
    pointsatz: 'pointsAtZ',
    preservealpha: 'preserveAlpha',
    preserveaspectratio: 'preserveAspectRatio',
    primitiveunits: 'primitiveUnits',
    refx: 'refX',
    refy: 'refY',
    repeatcount: 'repeatCount',
    repeatdur: 'repeatDur',
    requiredextensions: 'requiredExtensions',
    requiredfeatures: 'requiredFeatures',
    specularconstant: 'specularConstant',
    specularexponent: 'specularExponent',
    spreadmethod: 'spreadMethod',
    startoffset: 'startOffset',
    stddeviation: 'stdDeviation',
    stitchtiles: 'stitchTiles',
    surfacescale: 'surfaceScale',
    systemlanguage: 'systemLanguage',
    tablevalues: 'tableValues',
    targetx: 'targetX',
    targety: 'targetY',
    textlength: 'textLength',
    viewbox: 'viewBox',
    viewtarget: 'viewTarget',
    xchannelselector: 'xChannelSelector',
    ychannelselector: 'yChannelSelector',
    zoomandpan: 'zoomAndPan',
  },
  PJ6 = {
    'xlink:actuate': { prefix: 'xlink', name: 'actuate', namespace: FG.XLINK },
    'xlink:arcrole': { prefix: 'xlink', name: 'arcrole', namespace: FG.XLINK },
    'xlink:href': { prefix: 'xlink', name: 'href', namespace: FG.XLINK },
    'xlink:role': { prefix: 'xlink', name: 'role', namespace: FG.XLINK },
    'xlink:show': { prefix: 'xlink', name: 'show', namespace: FG.XLINK },
    'xlink:title': { prefix: 'xlink', name: 'title', namespace: FG.XLINK },
    'xlink:type': { prefix: 'xlink', name: 'type', namespace: FG.XLINK },
    'xml:base': { prefix: 'xml', name: 'base', namespace: FG.XML },
    'xml:lang': { prefix: 'xml', name: 'lang', namespace: FG.XML },
    'xml:space': { prefix: 'xml', name: 'space', namespace: FG.XML },
    xmlns: { prefix: '', name: 'xmlns', namespace: FG.XMLNS },
    'xmlns:xlink': { prefix: 'xmlns', name: 'xlink', namespace: FG.XMLNS },
  },
  SJ6 = (kJ6.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient',
    textpath: 'textPath',
  }),
  _J6 = {
    [O9.B]: !0,
    [O9.BIG]: !0,
    [O9.BLOCKQUOTE]: !0,
    [O9.BODY]: !0,
    [O9.BR]: !0,
    [O9.CENTER]: !0,
    [O9.CODE]: !0,
    [O9.DD]: !0,
    [O9.DIV]: !0,
    [O9.DL]: !0,
    [O9.DT]: !0,
    [O9.EM]: !0,
    [O9.EMBED]: !0,
    [O9.H1]: !0,
    [O9.H2]: !0,
    [O9.H3]: !0,
    [O9.H4]: !0,
    [O9.H5]: !0,
    [O9.H6]: !0,
    [O9.HEAD]: !0,
    [O9.HR]: !0,
    [O9.I]: !0,
    [O9.IMG]: !0,
    [O9.LI]: !0,
    [O9.LISTING]: !0,
    [O9.MENU]: !0,
    [O9.META]: !0,
    [O9.NOBR]: !0,
    [O9.OL]: !0,
    [O9.P]: !0,
    [O9.PRE]: !0,
    [O9.RUBY]: !0,
    [O9.S]: !0,
    [O9.SMALL]: !0,
    [O9.SPAN]: !0,
    [O9.STRONG]: !0,
    [O9.STRIKE]: !0,
    [O9.SUB]: !0,
    [O9.SUP]: !0,
    [O9.TABLE]: !0,
    [O9.TT]: !0,
    [O9.U]: !0,
    [O9.UL]: !0,
    [O9.VAR]: !0,
  };
kJ6.causesExit = function (A) {
  let B = A.tagName;
  return B === O9.FONT &&
    (Uu1.getTokenAttr(A, oW1.COLOR) !== null ||
      Uu1.getTokenAttr(A, oW1.SIZE) !== null ||
      Uu1.getTokenAttr(A, oW1.FACE) !== null)
    ? !0
    : _J6[B];
};
kJ6.adjustTokenMathMLAttrs = function (A) {
  for (let B = 0; B < A.attrs.length; B++)
    if (A.attrs[B].name === 'definitionurl') {
      A.attrs[B].name = 'definitionURL';
      break;
    }
};
kJ6.adjustTokenSVGAttrs = function (A) {
  for (let B = 0; B < A.attrs.length; B++) {
    let Q = TJ6[A.attrs[B].name];
    if (Q) A.attrs[B].name = Q;
  }
};
kJ6.adjustTokenXMLAttrs = function (A) {
  for (let B = 0; B < A.attrs.length; B++) {
    let Q = PJ6[A.attrs[B].name];
    if (Q)
      ((A.attrs[B].prefix = Q.prefix),
        (A.attrs[B].name = Q.name),
        (A.attrs[B].namespace = Q.namespace));
  }
};
kJ6.adjustTokenSVGTagName = function (A) {
  let B = SJ6[A.tagName];
  if (B) A.tagName = B;
};
function jJ6(A, B) {
  return (
    B === FG.MATHML && (A === O9.MI || A === O9.MO || A === O9.MN || A === O9.MS || A === O9.MTEXT)
  );
}
function yJ6(A, B, Q) {
  if (B === FG.MATHML && A === O9.ANNOTATION_XML) {
    for (let I = 0; I < Q.length; I++)
      if (Q[I].name === oW1.ENCODING) {
        let G = Q[I].value.toLowerCase();
        return G === Yh0.TEXT_HTML || G === Yh0.APPLICATION_XML;
      }
  }
  return B === FG.SVG && (A === O9.FOREIGN_OBJECT || A === O9.DESC || A === O9.TITLE);
}
kJ6.isIntegrationPoint = function (A, B, Q, I) {
  if ((!I || I === FG.HTML) && yJ6(A, B, Q)) return !0;
  if ((!I || I === FG.MATHML) && jJ6(A, B)) return !0;
  return !1;
};
