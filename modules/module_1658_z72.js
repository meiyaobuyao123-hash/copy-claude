// Module: z72
// Params: dO8,H72

var jp6 = 1 / 0,
  yp6 = '[object Symbol]',
  kp6 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
  xp6 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  FC1 = '\\ud800-\\udfff',
  eQ2 = '\\u0300-\\u036f\\ufe20-\\ufe23',
  A72 = '\\u20d0-\\u20f0',
  B72 = '\\u2700-\\u27bf',
  Q72 = 'a-z\\xdf-\\xf6\\xf8-\\xff',
  fp6 = '\\xac\\xb1\\xd7\\xf7',
  vp6 = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
  bp6 = '\\u2000-\\u206f',
  gp6 =
    ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
  I72 = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
  G72 = '\\ufe0e\\ufe0f',
  D72 = fp6 + vp6 + bp6 + gp6,
  _i1 = "['’]",
  hp6 = '[' + FC1 + ']',
  iQ2 = '[' + D72 + ']',
  WC1 = '[' + eQ2 + A72 + ']',
  Z72 = '\\d+',
  mp6 = '[' + B72 + ']',
  Y72 = '[' + Q72 + ']',
  W72 = '[^' + FC1 + D72 + Z72 + B72 + Q72 + I72 + ']',
  Si1 = '\\ud83c[\\udffb-\\udfff]',
  dp6 = '(?:' + WC1 + '|' + Si1 + ')',
  F72 = '[^' + FC1 + ']',
  ji1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  yi1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  wm = '[' + I72 + ']',
  J72 = '\\u200d',
  nQ2 = '(?:' + Y72 + '|' + W72 + ')',
  up6 = '(?:' + wm + '|' + W72 + ')',
  aQ2 = '(?:' + _i1 + '(?:d|ll|m|re|s|t|ve))?',
  sQ2 = '(?:' + _i1 + '(?:D|LL|M|RE|S|T|VE))?',
  C72 = dp6 + '?',
  X72 = '[' + G72 + ']?',
  pp6 = '(?:' + J72 + '(?:' + [F72, ji1, yi1].join('|') + ')' + X72 + C72 + ')*',
  V72 = X72 + C72 + pp6,
  cp6 = '(?:' + [mp6, ji1, yi1].join('|') + ')' + V72,
  lp6 = '(?:' + [F72 + WC1 + '?', WC1, ji1, yi1, hp6].join('|') + ')',
  ip6 = RegExp(_i1, 'g'),
  np6 = RegExp(WC1, 'g'),
  ap6 = RegExp(Si1 + '(?=' + Si1 + ')|' + lp6 + V72, 'g'),
  sp6 = RegExp(
    [
      wm + '?' + Y72 + '+' + aQ2 + '(?=' + [iQ2, wm, '$'].join('|') + ')',
      up6 + '+' + sQ2 + '(?=' + [iQ2, wm + nQ2, '$'].join('|') + ')',
      wm + '?' + nQ2 + '+' + aQ2,
      wm + '+' + sQ2,
      Z72,
      cp6,
    ].join('|'),
    'g'
  ),
  rp6 = RegExp('[' + J72 + FC1 + eQ2 + A72 + G72 + ']'),
  op6 = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
  tp6 = {
    À: 'A',
    Á: 'A',
    Â: 'A',
    Ã: 'A',
    Ä: 'A',
    Å: 'A',
    à: 'a',
    á: 'a',
    â: 'a',
    ã: 'a',
    ä: 'a',
    å: 'a',
    Ç: 'C',
    ç: 'c',
    Ð: 'D',
    ð: 'd',
    È: 'E',
    É: 'E',
    Ê: 'E',
    Ë: 'E',
    è: 'e',
    é: 'e',
    ê: 'e',
    ë: 'e',
    Ì: 'I',
    Í: 'I',
    Î: 'I',
    Ï: 'I',
    ì: 'i',
    í: 'i',
    î: 'i',
    ï: 'i',
    Ñ: 'N',
    ñ: 'n',
    Ò: 'O',
    Ó: 'O',
    Ô: 'O',
    Õ: 'O',
    Ö: 'O',
    Ø: 'O',
    ò: 'o',
    ó: 'o',
    ô: 'o',
    õ: 'o',
    ö: 'o',
    ø: 'o',
    Ù: 'U',
    Ú: 'U',
    Û: 'U',
    Ü: 'U',
    ù: 'u',
    ú: 'u',
    û: 'u',
    ü: 'u',
    Ý: 'Y',
    ý: 'y',
    ÿ: 'y',
    Æ: 'Ae',
    æ: 'ae',
    Þ: 'Th',
    þ: 'th',
    ß: 'ss',
    Ā: 'A',
    Ă: 'A',
    Ą: 'A',
    ā: 'a',
    ă: 'a',
    ą: 'a',
    Ć: 'C',
    Ĉ: 'C',
    Ċ: 'C',
    Č: 'C',
    ć: 'c',
    ĉ: 'c',
    ċ: 'c',
    č: 'c',
    Ď: 'D',
    Đ: 'D',
    ď: 'd',
    đ: 'd',
    Ē: 'E',
    Ĕ: 'E',
    Ė: 'E',
    Ę: 'E',
    Ě: 'E',
    ē: 'e',
    ĕ: 'e',
    ė: 'e',
    ę: 'e',
    ě: 'e',
    Ĝ: 'G',
    Ğ: 'G',
    Ġ: 'G',
    Ģ: 'G',
    ĝ: 'g',
    ğ: 'g',
    ġ: 'g',
    ģ: 'g',
    Ĥ: 'H',
    Ħ: 'H',
    ĥ: 'h',
    ħ: 'h',
    Ĩ: 'I',
    Ī: 'I',
    Ĭ: 'I',
    Į: 'I',
    İ: 'I',
    ĩ: 'i',
    ī: 'i',
    ĭ: 'i',
    į: 'i',
    ı: 'i',
    Ĵ: 'J',
    ĵ: 'j',
    Ķ: 'K',
    ķ: 'k',
    ĸ: 'k',
    Ĺ: 'L',
    Ļ: 'L',
    Ľ: 'L',
    Ŀ: 'L',
    Ł: 'L',
    ĺ: 'l',
    ļ: 'l',
    ľ: 'l',
    ŀ: 'l',
    ł: 'l',
    Ń: 'N',
    Ņ: 'N',
    Ň: 'N',
    Ŋ: 'N',
    ń: 'n',
    ņ: 'n',
    ň: 'n',
    ŋ: 'n',
    Ō: 'O',
    Ŏ: 'O',
    Ő: 'O',
    ō: 'o',
    ŏ: 'o',
    ő: 'o',
    Ŕ: 'R',
    Ŗ: 'R',
    Ř: 'R',
    ŕ: 'r',
    ŗ: 'r',
    ř: 'r',
    Ś: 'S',
    Ŝ: 'S',
    Ş: 'S',
    Š: 'S',
    ś: 's',
    ŝ: 's',
    ş: 's',
    š: 's',
    Ţ: 'T',
    Ť: 'T',
    Ŧ: 'T',
    ţ: 't',
    ť: 't',
    ŧ: 't',
    Ũ: 'U',
    Ū: 'U',
    Ŭ: 'U',
    Ů: 'U',
    Ű: 'U',
    Ų: 'U',
    ũ: 'u',
    ū: 'u',
    ŭ: 'u',
    ů: 'u',
    ű: 'u',
    ų: 'u',
    Ŵ: 'W',
    ŵ: 'w',
    Ŷ: 'Y',
    ŷ: 'y',
    Ÿ: 'Y',
    Ź: 'Z',
    Ż: 'Z',
    Ž: 'Z',
    ź: 'z',
    ż: 'z',
    ž: 'z',
    Ĳ: 'IJ',
    ĳ: 'ij',
    Œ: 'Oe',
    œ: 'oe',
    ŉ: "'n",
    ſ: 'ss',
  },
  ep6 = typeof global == 'object' && global && global.Object === Object && global,
  Ac6 = typeof self == 'object' && self && self.Object === Object && self,
  Bc6 = ep6 || Ac6 || Function('return this')();
function Qc6(A, B, Q, I) {
  var G = -1,
    D = A ? A.length : 0;
  if (I && D) Q = A[++G];
  while (++G < D) Q = B(Q, A[G], G, A);
  return Q;
}
function Ic6(A) {
  return A.split('');
}
function Gc6(A) {
  return A.match(kp6) || [];
}
function Dc6(A) {
  return function (B) {
    return A == null ? void 0 : A[B];
  };
}
var Zc6 = Dc6(tp6);
function K72(A) {
  return rp6.test(A);
}
function Yc6(A) {
  return op6.test(A);
}
function Wc6(A) {
  return K72(A) ? Fc6(A) : Ic6(A);
}
function Fc6(A) {
  return A.match(ap6) || [];
}
function Jc6(A) {
  return A.match(sp6) || [];
}
var Cc6 = Object.prototype,
  Xc6 = Cc6.toString,
  rQ2 = Bc6.Symbol,
  oQ2 = rQ2 ? rQ2.prototype : void 0,
  tQ2 = oQ2 ? oQ2.toString : void 0;
function Vc6(A, B, Q) {
  var I = -1,
    G = A.length;
  if (B < 0) B = -B > G ? 0 : G + B;
  if (((Q = Q > G ? G : Q), Q < 0)) Q += G;
  ((G = B > Q ? 0 : (Q - B) >>> 0), (B >>>= 0));
  var D = Array(G);
  while (++I < G) D[I] = A[I + B];
  return D;
}
function Kc6(A) {
  if (typeof A == 'string') return A;
  if (Uc6(A)) return tQ2 ? tQ2.call(A) : '';
  var B = A + '';
  return B == '0' && 1 / A == -jp6 ? '-0' : B;
}
function Hc6(A, B, Q) {
  var I = A.length;
  return ((Q = Q === void 0 ? I : Q), !B && Q >= I ? A : Vc6(A, B, Q));
}
function zc6(A) {
  return function (B) {
    B = JC1(B);
    var Q = K72(B) ? Wc6(B) : void 0,
      I = Q ? Q[0] : B.charAt(0),
      G = Q ? Hc6(Q, 1).join('') : B.slice(1);
    return I[A]() + G;
  };
}
function wc6(A) {
  return function (B) {
    return Qc6(Lc6(qc6(B).replace(ip6, '')), A, '');
  };
}
function Ec6(A) {
  return !!A && typeof A == 'object';
}
function Uc6(A) {
  return typeof A == 'symbol' || (Ec6(A) && Xc6.call(A) == yp6);
}
function JC1(A) {
  return A == null ? '' : Kc6(A);
}
var Nc6 = wc6(function (A, B, Q) {
  return ((B = B.toLowerCase()), A + (Q ? $c6(B) : B));
});
function $c6(A) {
  return Mc6(JC1(A).toLowerCase());
}
function qc6(A) {
  return ((A = JC1(A)), A && A.replace(xp6, Zc6).replace(np6, ''));
}
var Mc6 = zc6('toUpperCase');
function Lc6(A, B, Q) {
  if (((A = JC1(A)), (B = Q ? void 0 : B), B === void 0)) return Yc6(A) ? Jc6(A) : Gc6(A);
  return A.match(B) || [];
}
H72.exports = Nc6;
