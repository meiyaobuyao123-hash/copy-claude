// Module: nV1
// Params: T65

var Ko1 = HG(),
  LH2 = Hd(),
  M65 = lV1(),
  RF = h3(),
  RH2 = Xo1(),
  L65 = Vo1(),
  bN = (T65.elements = {}),
  Te = Object.create(null);
T65.createElement = function (A, B, Q) {
  var I = Te[B] || O65;
  return new I(A, B, Q);
};
function X2(A) {
  return L65(A, C9, bN, Te);
}
function m3(A) {
  return {
    get: function () {
      var B = this._getattr(A);
      if (B === null) return '';
      var Q = this.doc._resolve(B);
      return Q === null ? B : Q;
    },
    set: function (B) {
      this._setattr(A, B);
    },
  };
}
function iV1(A) {
  return {
    get: function () {
      var B = this._getattr(A);
      if (B === null) return null;
      if (B.toLowerCase() === 'use-credentials') return 'use-credentials';
      return 'anonymous';
    },
    set: function (B) {
      if (B === null || B === void 0) this.removeAttribute(A);
      else this._setattr(A, B);
    },
  };
}
var wd = {
    type: [
      '',
      'no-referrer',
      'no-referrer-when-downgrade',
      'same-origin',
      'origin',
      'strict-origin',
      'origin-when-cross-origin',
      'strict-origin-when-cross-origin',
      'unsafe-url',
    ],
    missing: '',
  },
  R65 = { A: !0, LINK: !0, BUTTON: !0, INPUT: !0, SELECT: !0, TEXTAREA: !0, COMMAND: !0 },
  GK = function (A, B, Q) {
    (C9.call(this, A, B, Q), (this._form = null));
  },
  C9 = (T65.HTMLElement = X2({
    superclass: LH2,
    name: 'HTMLElement',
    ctor: function A(B, Q, I) {
      LH2.call(this, B, Q, RF.NAMESPACE.HTML, I);
    },
    props: {
      dangerouslySetInnerHTML: {
        set: function (A) {
          this._innerHTML = A;
        },
      },
      innerHTML: {
        get: function () {
          return this.serialize();
        },
        set: function (A) {
          var B = this.ownerDocument.implementation.mozHTMLParser(
            this.ownerDocument._address,
            this
          );
          B.parse(A === null ? '' : String(A), !0);
          var Q = this instanceof Te.template ? this.content : this;
          while (Q.hasChildNodes()) Q.removeChild(Q.firstChild);
          Q.appendChild(B._asDocumentFragment());
        },
      },
      style: {
        get: function () {
          if (!this._style) this._style = new M65(this);
          return this._style;
        },
        set: function (A) {
          if (A === null || A === void 0) A = '';
          this._setattr('style', String(A));
        },
      },
      blur: { value: function () {} },
      focus: { value: function () {} },
      forceSpellCheck: { value: function () {} },
      click: {
        value: function () {
          if (this._click_in_progress) return;
          this._click_in_progress = !0;
          try {
            if (this._pre_click_activation_steps) this._pre_click_activation_steps();
            var A = this.ownerDocument.createEvent('MouseEvent');
            A.initMouseEvent(
              'click',
              !0,
              !0,
              this.ownerDocument.defaultView,
              1,
              0,
              0,
              0,
              0,
              !1,
              !1,
              !1,
              !1,
              0,
              null
            );
            var B = this.dispatchEvent(A);
            if (B) {
              if (this._post_click_activation_steps) this._post_click_activation_steps(A);
            } else if (this._cancelled_activation_steps) this._cancelled_activation_steps();
          } finally {
            this._click_in_progress = !1;
          }
        },
      },
      submit: { value: RF.nyi },
    },
    attributes: {
      title: String,
      lang: String,
      dir: { type: ['ltr', 'rtl', 'auto'], missing: '' },
      draggable: { type: ['true', 'false'], treatNullAsEmptyString: !0 },
      spellcheck: { type: ['true', 'false'], missing: '' },
      enterKeyHint: {
        type: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'],
        missing: '',
      },
      autoCapitalize: {
        type: ['off', 'on', 'none', 'sentences', 'words', 'characters'],
        missing: '',
      },
      autoFocus: Boolean,
      accessKey: String,
      nonce: String,
      hidden: Boolean,
      translate: { type: ['no', 'yes'], missing: '' },
      tabIndex: {
        type: 'long',
        default: function () {
          if (this.tagName in R65 || this.contentEditable) return 0;
          else return -1;
        },
      },
    },
    events: [
      'abort',
      'canplay',
      'canplaythrough',
      'change',
      'click',
      'contextmenu',
      'cuechange',
      'dblclick',
      'drag',
      'dragend',
      'dragenter',
      'dragleave',
      'dragover',
      'dragstart',
      'drop',
      'durationchange',
      'emptied',
      'ended',
      'input',
      'invalid',
      'keydown',
      'keypress',
      'keyup',
      'loadeddata',
      'loadedmetadata',
      'loadstart',
      'mousedown',
      'mousemove',
      'mouseout',
      'mouseover',
      'mouseup',
      'mousewheel',
      'pause',
      'play',
      'playing',
      'progress',
      'ratechange',
      'readystatechange',
      'reset',
      'seeked',
      'seeking',
      'select',
      'show',
      'stalled',
      'submit',
      'suspend',
      'timeupdate',
      'volumechange',
      'waiting',
      'blur',
      'error',
      'focus',
      'load',
      'scroll',
    ],
  })),
  O65 = X2({
    name: 'HTMLUnknownElement',
    ctor: function A(B, Q, I) {
      C9.call(this, B, Q, I);
    },
  }),
  DK = {
    form: {
      get: function () {
        return this._form;
      },
    },
  };
X2({
  tag: 'a',
  name: 'HTMLAnchorElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: {
    _post_click_activation_steps: {
      value: function (A) {
        if (this.href) this.ownerDocument.defaultView.location = this.href;
      },
    },
  },
  attributes: {
    href: m3,
    ping: String,
    download: String,
    target: String,
    rel: String,
    media: String,
    hreflang: String,
    type: String,
    referrerPolicy: wd,
    coords: String,
    charset: String,
    name: String,
    rev: String,
    shape: String,
  },
});
RH2._inherit(Te.a.prototype);
X2({
  tag: 'area',
  name: 'HTMLAreaElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    alt: String,
    target: String,
    download: String,
    rel: String,
    media: String,
    href: m3,
    hreflang: String,
    type: String,
    shape: String,
    coords: String,
    ping: String,
    referrerPolicy: wd,
    noHref: Boolean,
  },
});
RH2._inherit(Te.area.prototype);
X2({
  tag: 'br',
  name: 'HTMLBRElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { clear: String },
});
X2({
  tag: 'base',
  name: 'HTMLBaseElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { target: String },
});
X2({
  tag: 'body',
  name: 'HTMLBodyElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  events: [
    'afterprint',
    'beforeprint',
    'beforeunload',
    'blur',
    'error',
    'focus',
    'hashchange',
    'load',
    'message',
    'offline',
    'online',
    'pagehide',
    'pageshow',
    'popstate',
    'resize',
    'scroll',
    'storage',
    'unload',
  ],
  attributes: {
    text: { type: String, treatNullAsEmptyString: !0 },
    link: { type: String, treatNullAsEmptyString: !0 },
    vLink: { type: String, treatNullAsEmptyString: !0 },
    aLink: { type: String, treatNullAsEmptyString: !0 },
    bgColor: { type: String, treatNullAsEmptyString: !0 },
    background: String,
  },
});
X2({
  tag: 'button',
  name: 'HTMLButtonElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: DK,
  attributes: {
    name: String,
    value: String,
    disabled: Boolean,
    autofocus: Boolean,
    type: { type: ['submit', 'reset', 'button', 'menu'], missing: 'submit' },
    formTarget: String,
    formAction: m3,
    formNoValidate: Boolean,
    formMethod: { type: ['get', 'post', 'dialog'], invalid: 'get', missing: '' },
    formEnctype: {
      type: ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
      invalid: 'application/x-www-form-urlencoded',
      missing: '',
    },
  },
});
X2({
  tag: 'dl',
  name: 'HTMLDListElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { compact: Boolean },
});
X2({
  tag: 'data',
  name: 'HTMLDataElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { value: String },
});
X2({
  tag: 'datalist',
  name: 'HTMLDataListElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
});
X2({
  tag: 'details',
  name: 'HTMLDetailsElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { open: Boolean },
});
X2({
  tag: 'div',
  name: 'HTMLDivElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { align: String },
});
X2({
  tag: 'embed',
  name: 'HTMLEmbedElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { src: m3, type: String, width: String, height: String, align: String, name: String },
});
X2({
  tag: 'fieldset',
  name: 'HTMLFieldSetElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: DK,
  attributes: { disabled: Boolean, name: String },
});
X2({
  tag: 'form',
  name: 'HTMLFormElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    action: String,
    autocomplete: { type: ['on', 'off'], missing: 'on' },
    name: String,
    acceptCharset: { name: 'accept-charset' },
    target: String,
    noValidate: Boolean,
    method: { type: ['get', 'post', 'dialog'], invalid: 'get', missing: 'get' },
    enctype: {
      type: ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
      invalid: 'application/x-www-form-urlencoded',
      missing: 'application/x-www-form-urlencoded',
    },
    encoding: {
      name: 'enctype',
      type: ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
      invalid: 'application/x-www-form-urlencoded',
      missing: 'application/x-www-form-urlencoded',
    },
  },
});
X2({
  tag: 'hr',
  name: 'HTMLHRElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { align: String, color: String, noShade: Boolean, size: String, width: String },
});
X2({
  tag: 'head',
  name: 'HTMLHeadElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
});
X2({
  tags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  name: 'HTMLHeadingElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { align: String },
});
X2({
  tag: 'html',
  name: 'HTMLHtmlElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { xmlns: m3, version: String },
});
X2({
  tag: 'iframe',
  name: 'HTMLIFrameElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    src: m3,
    srcdoc: String,
    name: String,
    width: String,
    height: String,
    seamless: Boolean,
    allow: Boolean,
    allowFullscreen: Boolean,
    allowUserMedia: Boolean,
    allowPaymentRequest: Boolean,
    referrerPolicy: wd,
    loading: { type: ['eager', 'lazy'], treatNullAsEmptyString: !0 },
    align: String,
    scrolling: String,
    frameBorder: String,
    longDesc: m3,
    marginHeight: { type: String, treatNullAsEmptyString: !0 },
    marginWidth: { type: String, treatNullAsEmptyString: !0 },
  },
});
X2({
  tag: 'img',
  name: 'HTMLImageElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    alt: String,
    src: m3,
    srcset: String,
    crossOrigin: iV1,
    useMap: String,
    isMap: Boolean,
    sizes: String,
    height: { type: 'unsigned long', default: 0 },
    width: { type: 'unsigned long', default: 0 },
    referrerPolicy: wd,
    loading: { type: ['eager', 'lazy'], missing: '' },
    name: String,
    lowsrc: m3,
    align: String,
    hspace: { type: 'unsigned long', default: 0 },
    vspace: { type: 'unsigned long', default: 0 },
    longDesc: m3,
    border: { type: String, treatNullAsEmptyString: !0 },
  },
});
X2({
  tag: 'input',
  name: 'HTMLInputElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: {
    form: DK.form,
    _post_click_activation_steps: {
      value: function (A) {
        if (this.type === 'checkbox') this.checked = !this.checked;
        else if (this.type === 'radio') {
          var B = this.form.getElementsByName(this.name);
          for (var Q = B.length - 1; Q >= 0; Q--) {
            var I = B[Q];
            I.checked = I === this;
          }
        }
      },
    },
  },
  attributes: {
    name: String,
    disabled: Boolean,
    autofocus: Boolean,
    accept: String,
    alt: String,
    max: String,
    min: String,
    pattern: String,
    placeholder: String,
    step: String,
    dirName: String,
    defaultValue: { name: 'value' },
    multiple: Boolean,
    required: Boolean,
    readOnly: Boolean,
    checked: Boolean,
    value: String,
    src: m3,
    defaultChecked: { name: 'checked', type: Boolean },
    size: { type: 'unsigned long', default: 20, min: 1, setmin: 1 },
    width: { type: 'unsigned long', min: 0, setmin: 0, default: 0 },
    height: { type: 'unsigned long', min: 0, setmin: 0, default: 0 },
    minLength: { type: 'unsigned long', min: 0, setmin: 0, default: -1 },
    maxLength: { type: 'unsigned long', min: 0, setmin: 0, default: -1 },
    autocomplete: String,
    type: {
      type: [
        'text',
        'hidden',
        'search',
        'tel',
        'url',
        'email',
        'password',
        'datetime',
        'date',
        'month',
        'week',
        'time',
        'datetime-local',
        'number',
        'range',
        'color',
        'checkbox',
        'radio',
        'file',
        'submit',
        'image',
        'reset',
        'button',
      ],
      missing: 'text',
    },
    formTarget: String,
    formNoValidate: Boolean,
    formMethod: { type: ['get', 'post'], invalid: 'get', missing: '' },
    formEnctype: {
      type: ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
      invalid: 'application/x-www-form-urlencoded',
      missing: '',
    },
    inputMode: {
      type: [
        'verbatim',
        'latin',
        'latin-name',
        'latin-prose',
        'full-width-latin',
        'kana',
        'kana-name',
        'katakana',
        'numeric',
        'tel',
        'email',
        'url',
      ],
      missing: '',
    },
    align: String,
    useMap: String,
  },
});
X2({
  tag: 'keygen',
  name: 'HTMLKeygenElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: DK,
  attributes: {
    name: String,
    disabled: Boolean,
    autofocus: Boolean,
    challenge: String,
    keytype: { type: ['rsa'], missing: '' },
  },
});
X2({
  tag: 'li',
  name: 'HTMLLIElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { value: { type: 'long', default: 0 }, type: String },
});
X2({
  tag: 'label',
  name: 'HTMLLabelElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: DK,
  attributes: { htmlFor: { name: 'for', type: String } },
});
X2({
  tag: 'legend',
  name: 'HTMLLegendElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { align: String },
});
X2({
  tag: 'link',
  name: 'HTMLLinkElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    href: m3,
    rel: String,
    media: String,
    hreflang: String,
    type: String,
    crossOrigin: iV1,
    nonce: String,
    integrity: String,
    referrerPolicy: wd,
    imageSizes: String,
    imageSrcset: String,
    charset: String,
    rev: String,
    target: String,
  },
});
X2({
  tag: 'map',
  name: 'HTMLMapElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { name: String },
});
X2({
  tag: 'menu',
  name: 'HTMLMenuElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    type: { type: ['context', 'popup', 'toolbar'], missing: 'toolbar' },
    label: String,
    compact: Boolean,
  },
});
X2({
  tag: 'meta',
  name: 'HTMLMetaElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    name: String,
    content: String,
    httpEquiv: { name: 'http-equiv', type: String },
    scheme: String,
  },
});
X2({
  tag: 'meter',
  name: 'HTMLMeterElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: DK,
});
X2({
  tags: ['ins', 'del'],
  name: 'HTMLModElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { cite: m3, dateTime: String },
});
X2({
  tag: 'ol',
  name: 'HTMLOListElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: {
    _numitems: {
      get: function () {
        var A = 0;
        return (
          this.childNodes.forEach(function (B) {
            if (B.nodeType === Ko1.ELEMENT_NODE && B.tagName === 'LI') A++;
          }),
          A
        );
      },
    },
  },
  attributes: {
    type: String,
    reversed: Boolean,
    start: {
      type: 'long',
      default: function () {
        if (this.reversed) return this._numitems;
        else return 1;
      },
    },
    compact: Boolean,
  },
});
X2({
  tag: 'object',
  name: 'HTMLObjectElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: DK,
  attributes: {
    data: m3,
    type: String,
    name: String,
    useMap: String,
    typeMustMatch: Boolean,
    width: String,
    height: String,
    align: String,
    archive: String,
    code: String,
    declare: Boolean,
    hspace: { type: 'unsigned long', default: 0 },
    standby: String,
    vspace: { type: 'unsigned long', default: 0 },
    codeBase: m3,
    codeType: String,
    border: { type: String, treatNullAsEmptyString: !0 },
  },
});
X2({
  tag: 'optgroup',
  name: 'HTMLOptGroupElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { disabled: Boolean, label: String },
});
X2({
  tag: 'option',
  name: 'HTMLOptionElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: {
    form: {
      get: function () {
        var A = this.parentNode;
        while (A && A.nodeType === Ko1.ELEMENT_NODE) {
          if (A.localName === 'select') return A.form;
          A = A.parentNode;
        }
      },
    },
    value: {
      get: function () {
        return this._getattr('value') || this.text;
      },
      set: function (A) {
        this._setattr('value', A);
      },
    },
    text: {
      get: function () {
        return this.textContent.replace(/[ \t\n\f\r]+/g, ' ').trim();
      },
      set: function (A) {
        this.textContent = A;
      },
    },
  },
  attributes: {
    disabled: Boolean,
    defaultSelected: { name: 'selected', type: Boolean },
    label: String,
  },
});
X2({
  tag: 'output',
  name: 'HTMLOutputElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: DK,
  attributes: { name: String },
});
X2({
  tag: 'p',
  name: 'HTMLParagraphElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { align: String },
});
X2({
  tag: 'param',
  name: 'HTMLParamElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { name: String, value: String, type: String, valueType: String },
});
X2({
  tags: ['pre', 'listing', 'xmp'],
  name: 'HTMLPreElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { width: { type: 'long', default: 0 } },
});
X2({
  tag: 'progress',
  name: 'HTMLProgressElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: DK,
  attributes: { max: { type: Number, float: !0, default: 1, min: 0 } },
});
X2({
  tags: ['q', 'blockquote'],
  name: 'HTMLQuoteElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { cite: m3 },
});
X2({
  tag: 'script',
  name: 'HTMLScriptElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: {
    text: {
      get: function () {
        var A = '';
        for (var B = 0, Q = this.childNodes.length; B < Q; B++) {
          var I = this.childNodes[B];
          if (I.nodeType === Ko1.TEXT_NODE) A += I._data;
        }
        return A;
      },
      set: function (A) {
        if ((this.removeChildren(), A !== null && A !== ''))
          this.appendChild(this.ownerDocument.createTextNode(A));
      },
    },
  },
  attributes: {
    src: m3,
    type: String,
    charset: String,
    referrerPolicy: wd,
    defer: Boolean,
    async: Boolean,
    nomodule: Boolean,
    crossOrigin: iV1,
    nonce: String,
    integrity: String,
  },
});
X2({
  tag: 'select',
  name: 'HTMLSelectElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: {
    form: DK.form,
    options: {
      get: function () {
        return this.getElementsByTagName('option');
      },
    },
  },
  attributes: {
    autocomplete: String,
    name: String,
    disabled: Boolean,
    autofocus: Boolean,
    multiple: Boolean,
    required: Boolean,
    size: { type: 'unsigned long', default: 0 },
  },
});
X2({
  tag: 'span',
  name: 'HTMLSpanElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
});
X2({
  tag: 'style',
  name: 'HTMLStyleElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { media: String, type: String, scoped: Boolean },
});
X2({
  tag: 'caption',
  name: 'HTMLTableCaptionElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { align: String },
});
X2({
  name: 'HTMLTableCellElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    colSpan: { type: 'unsigned long', default: 1 },
    rowSpan: { type: 'unsigned long', default: 1 },
    scope: { type: ['row', 'col', 'rowgroup', 'colgroup'], missing: '' },
    abbr: String,
    align: String,
    axis: String,
    height: String,
    width: String,
    ch: { name: 'char', type: String },
    chOff: { name: 'charoff', type: String },
    noWrap: Boolean,
    vAlign: String,
    bgColor: { type: String, treatNullAsEmptyString: !0 },
  },
});
X2({
  tags: ['col', 'colgroup'],
  name: 'HTMLTableColElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    span: { type: 'limited unsigned long with fallback', default: 1, min: 1 },
    align: String,
    ch: { name: 'char', type: String },
    chOff: { name: 'charoff', type: String },
    vAlign: String,
    width: String,
  },
});
X2({
  tag: 'table',
  name: 'HTMLTableElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: {
    rows: {
      get: function () {
        return this.getElementsByTagName('tr');
      },
    },
  },
  attributes: {
    align: String,
    border: String,
    frame: String,
    rules: String,
    summary: String,
    width: String,
    bgColor: { type: String, treatNullAsEmptyString: !0 },
    cellPadding: { type: String, treatNullAsEmptyString: !0 },
    cellSpacing: { type: String, treatNullAsEmptyString: !0 },
  },
});
X2({
  tag: 'template',
  name: 'HTMLTemplateElement',
  ctor: function A(B, Q, I) {
    (C9.call(this, B, Q, I), (this._contentFragment = B._templateDoc.createDocumentFragment()));
  },
  props: {
    content: {
      get: function () {
        return this._contentFragment;
      },
    },
    serialize: {
      value: function () {
        return this.content.serialize();
      },
    },
  },
});
X2({
  tag: 'tr',
  name: 'HTMLTableRowElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: {
    cells: {
      get: function () {
        return this.querySelectorAll('td,th');
      },
    },
  },
  attributes: {
    align: String,
    ch: { name: 'char', type: String },
    chOff: { name: 'charoff', type: String },
    vAlign: String,
    bgColor: { type: String, treatNullAsEmptyString: !0 },
  },
});
X2({
  tags: ['thead', 'tfoot', 'tbody'],
  name: 'HTMLTableSectionElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: {
    rows: {
      get: function () {
        return this.getElementsByTagName('tr');
      },
    },
  },
  attributes: {
    align: String,
    ch: { name: 'char', type: String },
    chOff: { name: 'charoff', type: String },
    vAlign: String,
  },
});
X2({
  tag: 'textarea',
  name: 'HTMLTextAreaElement',
  ctor: function A(B, Q, I) {
    GK.call(this, B, Q, I);
  },
  props: {
    form: DK.form,
    type: {
      get: function () {
        return 'textarea';
      },
    },
    defaultValue: {
      get: function () {
        return this.textContent;
      },
      set: function (A) {
        this.textContent = A;
      },
    },
    value: {
      get: function () {
        return this.defaultValue;
      },
      set: function (A) {
        this.defaultValue = A;
      },
    },
    textLength: {
      get: function () {
        return this.value.length;
      },
    },
  },
  attributes: {
    autocomplete: String,
    name: String,
    disabled: Boolean,
    autofocus: Boolean,
    placeholder: String,
    wrap: String,
    dirName: String,
    required: Boolean,
    readOnly: Boolean,
    rows: { type: 'limited unsigned long with fallback', default: 2 },
    cols: { type: 'limited unsigned long with fallback', default: 20 },
    maxLength: { type: 'unsigned long', min: 0, setmin: 0, default: -1 },
    minLength: { type: 'unsigned long', min: 0, setmin: 0, default: -1 },
    inputMode: {
      type: [
        'verbatim',
        'latin',
        'latin-name',
        'latin-prose',
        'full-width-latin',
        'kana',
        'kana-name',
        'katakana',
        'numeric',
        'tel',
        'email',
        'url',
      ],
      missing: '',
    },
  },
});
X2({
  tag: 'time',
  name: 'HTMLTimeElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { dateTime: String, pubDate: Boolean },
});
X2({
  tag: 'title',
  name: 'HTMLTitleElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: {
    text: {
      get: function () {
        return this.textContent;
      },
    },
  },
});
X2({
  tag: 'ul',
  name: 'HTMLUListElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { type: String, compact: Boolean },
});
X2({
  name: 'HTMLMediaElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    src: m3,
    crossOrigin: iV1,
    preload: { type: ['metadata', 'none', 'auto', { value: '', alias: 'auto' }], missing: 'auto' },
    loop: Boolean,
    autoplay: Boolean,
    mediaGroup: String,
    controls: Boolean,
    defaultMuted: { name: 'muted', type: Boolean },
  },
});
X2({
  name: 'HTMLAudioElement',
  tag: 'audio',
  superclass: bN.HTMLMediaElement,
  ctor: function A(B, Q, I) {
    bN.HTMLMediaElement.call(this, B, Q, I);
  },
});
X2({
  name: 'HTMLVideoElement',
  tag: 'video',
  superclass: bN.HTMLMediaElement,
  ctor: function A(B, Q, I) {
    bN.HTMLMediaElement.call(this, B, Q, I);
  },
  attributes: {
    poster: m3,
    width: { type: 'unsigned long', min: 0, default: 0 },
    height: { type: 'unsigned long', min: 0, default: 0 },
  },
});
X2({
  tag: 'td',
  name: 'HTMLTableDataCellElement',
  superclass: bN.HTMLTableCellElement,
  ctor: function A(B, Q, I) {
    bN.HTMLTableCellElement.call(this, B, Q, I);
  },
});
X2({
  tag: 'th',
  name: 'HTMLTableHeaderCellElement',
  superclass: bN.HTMLTableCellElement,
  ctor: function A(B, Q, I) {
    bN.HTMLTableCellElement.call(this, B, Q, I);
  },
});
X2({
  tag: 'frameset',
  name: 'HTMLFrameSetElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
});
X2({
  tag: 'frame',
  name: 'HTMLFrameElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
});
X2({
  tag: 'canvas',
  name: 'HTMLCanvasElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: {
    getContext: { value: RF.nyi },
    probablySupportsContext: { value: RF.nyi },
    setContext: { value: RF.nyi },
    transferControlToProxy: { value: RF.nyi },
    toDataURL: { value: RF.nyi },
    toBlob: { value: RF.nyi },
  },
  attributes: {
    width: { type: 'unsigned long', default: 300 },
    height: { type: 'unsigned long', default: 150 },
  },
});
X2({
  tag: 'dialog',
  name: 'HTMLDialogElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: { show: { value: RF.nyi }, showModal: { value: RF.nyi }, close: { value: RF.nyi } },
  attributes: { open: Boolean, returnValue: String },
});
X2({
  tag: 'menuitem',
  name: 'HTMLMenuItemElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  props: {
    _label: {
      get: function () {
        var A = this._getattr('label');
        if (A !== null && A !== '') return A;
        return ((A = this.textContent), A.replace(/[ \t\n\f\r]+/g, ' ').trim());
      },
    },
    label: {
      get: function () {
        var A = this._getattr('label');
        if (A !== null) return A;
        return this._label;
      },
      set: function (A) {
        this._setattr('label', A);
      },
    },
  },
  attributes: {
    type: { type: ['command', 'checkbox', 'radio'], missing: 'command' },
    icon: m3,
    disabled: Boolean,
    checked: Boolean,
    radiogroup: String,
    default: Boolean,
  },
});
X2({
  tag: 'source',
  name: 'HTMLSourceElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    srcset: String,
    sizes: String,
    media: String,
    src: m3,
    type: String,
    width: String,
    height: String,
  },
});
X2({
  tag: 'track',
  name: 'HTMLTrackElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    src: m3,
    srclang: String,
    label: String,
    default: Boolean,
    kind: {
      type: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata'],
      missing: 'subtitles',
      invalid: 'metadata',
    },
  },
  props: {
    NONE: {
      get: function () {
        return 0;
      },
    },
    LOADING: {
      get: function () {
        return 1;
      },
    },
    LOADED: {
      get: function () {
        return 2;
      },
    },
    ERROR: {
      get: function () {
        return 3;
      },
    },
    readyState: { get: RF.nyi },
    track: { get: RF.nyi },
  },
});
X2({
  tag: 'font',
  name: 'HTMLFontElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: {
    color: { type: String, treatNullAsEmptyString: !0 },
    face: { type: String },
    size: { type: String },
  },
});
X2({
  tag: 'dir',
  name: 'HTMLDirectoryElement',
  ctor: function A(B, Q, I) {
    C9.call(this, B, Q, I);
  },
  attributes: { compact: Boolean },
});
X2({
  tags: [
    'abbr',
    'address',
    'article',
    'aside',
    'b',
    'bdi',
    'bdo',
    'cite',
    'content',
    'code',
    'dd',
    'dfn',
    'dt',
    'em',
    'figcaption',
    'figure',
    'footer',
    'header',
    'hgroup',
    'i',
    'kbd',
    'main',
    'mark',
    'nav',
    'noscript',
    'rb',
    'rp',
    'rt',
    'rtc',
    'ruby',
    's',
    'samp',
    'section',
    'small',
    'strong',
    'sub',
    'summary',
    'sup',
    'u',
    'var',
    'wbr',
    'acronym',
    'basefont',
    'big',
    'center',
    'nobr',
    'noembed',
    'noframes',
    'plaintext',
    'strike',
    'tt',
  ],
});
