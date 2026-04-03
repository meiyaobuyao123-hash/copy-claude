// Module: lV1
// Params: Ll8,UH2

var { parse: U65 } = KH2();
UH2.exports = function (A) {
  let B = new EH2(A);
  return new Proxy(B, {
    get: function (I, G) {
      return G in I ? I[G] : I.getPropertyValue(HH2(G));
    },
    has: function (I, G) {
      return !0;
    },
    set: function (I, G, D) {
      if (G in I) I[G] = D;
      else I.setProperty(HH2(G), D ?? void 0);
      return !0;
    },
  });
};
function HH2(A) {
  return A.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function EH2(A) {
  this._element = A;
}
var zH2 = '!important';
function wH2(A) {
  let B = { property: {}, priority: {} };
  if (!A) return B;
  let Q = U65(A);
  if (Q.length < 2) return B;
  for (let I = 0; I < Q.length; I += 2) {
    let G = Q[I],
      D = Q[I + 1];
    if (D.endsWith(zH2)) ((B.priority[G] = 'important'), (D = D.slice(0, -zH2.length).trim()));
    B.property[G] = D;
  }
  return B;
}
var zd = {};
EH2.prototype = Object.create(Object.prototype, {
  _parsed: {
    get: function () {
      if (!this._parsedStyles || this.cssText !== this._lastParsedText) {
        var A = this.cssText;
        ((this._parsedStyles = wH2(A)), (this._lastParsedText = A), delete this._names);
      }
      return this._parsedStyles;
    },
  },
  _serialize: {
    value: function () {
      var A = this._parsed,
        B = '';
      for (var Q in A.property) {
        if (B) B += ' ';
        if (((B += Q + ': ' + A.property[Q]), A.priority[Q])) B += ' !' + A.priority[Q];
        B += ';';
      }
      ((this.cssText = B), (this._lastParsedText = B), delete this._names);
    },
  },
  cssText: {
    get: function () {
      return this._element.getAttribute('style');
    },
    set: function (A) {
      this._element.setAttribute('style', A);
    },
  },
  length: {
    get: function () {
      if (!this._names) this._names = Object.getOwnPropertyNames(this._parsed.property);
      return this._names.length;
    },
  },
  item: {
    value: function (A) {
      if (!this._names) this._names = Object.getOwnPropertyNames(this._parsed.property);
      return this._names[A];
    },
  },
  getPropertyValue: {
    value: function (A) {
      return ((A = A.toLowerCase()), this._parsed.property[A] || '');
    },
  },
  getPropertyPriority: {
    value: function (A) {
      return ((A = A.toLowerCase()), this._parsed.priority[A] || '');
    },
  },
  setProperty: {
    value: function (A, B, Q) {
      if (((A = A.toLowerCase()), B === null || B === void 0)) B = '';
      if (Q === null || Q === void 0) Q = '';
      if (B !== zd) B = '' + B;
      if (((B = B.trim()), B === '')) {
        this.removeProperty(A);
        return;
      }
      if (Q !== '' && Q !== zd && !/^important$/i.test(Q)) return;
      var I = this._parsed;
      if (B === zd) {
        if (!I.property[A]) return;
        if (Q !== '') I.priority[A] = 'important';
        else delete I.priority[A];
      } else {
        if (B.indexOf(';') !== -1) return;
        var G = wH2(A + ':' + B);
        if (Object.getOwnPropertyNames(G.property).length === 0) return;
        if (Object.getOwnPropertyNames(G.priority).length !== 0) return;
        for (var D in G.property)
          if (((I.property[D] = G.property[D]), Q === zd)) continue;
          else if (Q !== '') I.priority[D] = 'important';
          else if (I.priority[D]) delete I.priority[D];
      }
      this._serialize();
    },
  },
  setPropertyValue: {
    value: function (A, B) {
      return this.setProperty(A, B, zd);
    },
  },
  setPropertyPriority: {
    value: function (A, B) {
      return this.setProperty(A, zd, B);
    },
  },
  removeProperty: {
    value: function (A) {
      A = A.toLowerCase();
      var B = this._parsed;
      if (A in B.property) (delete B.property[A], delete B.priority[A], this._serialize());
    },
  },
});
