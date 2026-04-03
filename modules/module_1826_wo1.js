// Module: wo1
// Params: k65

var OH2 = Hd(),
  S65 = Vo1(),
  _65 = h3(),
  j65 = lV1(),
  y65 = (k65.elements = {}),
  TH2 = Object.create(null);
k65.createElement = function (A, B, Q) {
  var I = TH2[B] || zo1;
  return new I(A, B, Q);
};
function Ho1(A) {
  return S65(A, zo1, y65, TH2);
}
var zo1 = Ho1({
  superclass: OH2,
  name: 'SVGElement',
  ctor: function A(B, Q, I) {
    OH2.call(this, B, Q, _65.NAMESPACE.SVG, I);
  },
  props: {
    style: {
      get: function () {
        if (!this._style) this._style = new j65(this);
        return this._style;
      },
    },
  },
});
Ho1({
  name: 'SVGSVGElement',
  ctor: function A(B, Q, I) {
    zo1.call(this, B, Q, I);
  },
  tag: 'svg',
  props: {
    createSVGRect: {
      value: function () {
        return k65.createElement(this.ownerDocument, 'rect', null);
      },
    },
  },
});
Ho1({
  tags: [
    'a',
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'ellipse',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-src',
    'font-face-uri',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'hkern',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'metadata',
    'missing-glyph',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'script',
    'set',
    'stop',
    'style',
    'switch',
    'symbol',
    'text',
    'textPath',
    'title',
    'tref',
    'tspan',
    'use',
    'view',
    'vkern',
  ],
});
