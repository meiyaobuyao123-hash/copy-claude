// Module: nv0
// Params: LK8,iv0

var { parseSetCookie: vZ6 } = cv0(),
  { stringify: bZ6 } = ad1(),
  { webidl: L6 } = WG(),
  { Headers: xW1 } = dS();
function gZ6(A) {
  (L6.argumentLengthCheck(arguments, 1, 'getCookies'), L6.brandCheck(A, xW1, { strict: !1 }));
  let B = A.get('cookie'),
    Q = {};
  if (!B) return Q;
  for (let I of B.split(';')) {
    let [G, ...D] = I.split('=');
    Q[G.trim()] = D.join('=');
  }
  return Q;
}
function hZ6(A, B, Q) {
  L6.brandCheck(A, xW1, { strict: !1 });
  let I = 'deleteCookie';
  (L6.argumentLengthCheck(arguments, 2, I),
    (B = L6.converters.DOMString(B, I, 'name')),
    (Q = L6.converters.DeleteCookieAttributes(Q)),
    lv0(A, { name: B, value: '', expires: new Date(0), ...Q }));
}
function mZ6(A) {
  (L6.argumentLengthCheck(arguments, 1, 'getSetCookies'), L6.brandCheck(A, xW1, { strict: !1 }));
  let B = A.getSetCookie();
  if (!B) return [];
  return B.map((Q) => vZ6(Q));
}
function lv0(A, B) {
  (L6.argumentLengthCheck(arguments, 2, 'setCookie'),
    L6.brandCheck(A, xW1, { strict: !1 }),
    (B = L6.converters.Cookie(B)));
  let Q = bZ6(B);
  if (Q) A.append('Set-Cookie', Q);
}
L6.converters.DeleteCookieAttributes = L6.dictionaryConverter([
  {
    converter: L6.nullableConverter(L6.converters.DOMString),
    key: 'path',
    defaultValue: () => null,
  },
  {
    converter: L6.nullableConverter(L6.converters.DOMString),
    key: 'domain',
    defaultValue: () => null,
  },
]);
L6.converters.Cookie = L6.dictionaryConverter([
  { converter: L6.converters.DOMString, key: 'name' },
  { converter: L6.converters.DOMString, key: 'value' },
  {
    converter: L6.nullableConverter((A) => {
      if (typeof A === 'number') return L6.converters['unsigned long long'](A);
      return new Date(A);
    }),
    key: 'expires',
    defaultValue: () => null,
  },
  {
    converter: L6.nullableConverter(L6.converters['long long']),
    key: 'maxAge',
    defaultValue: () => null,
  },
  {
    converter: L6.nullableConverter(L6.converters.DOMString),
    key: 'domain',
    defaultValue: () => null,
  },
  {
    converter: L6.nullableConverter(L6.converters.DOMString),
    key: 'path',
    defaultValue: () => null,
  },
  {
    converter: L6.nullableConverter(L6.converters.boolean),
    key: 'secure',
    defaultValue: () => null,
  },
  {
    converter: L6.nullableConverter(L6.converters.boolean),
    key: 'httpOnly',
    defaultValue: () => null,
  },
  { converter: L6.converters.USVString, key: 'sameSite', allowedValues: ['Strict', 'Lax', 'None'] },
  {
    converter: L6.sequenceConverter(L6.converters.DOMString),
    key: 'unparsed',
    defaultValue: () => new Array(0),
  },
]);
iv0.exports = { getCookies: gZ6, deleteCookie: hZ6, getSetCookies: mZ6, setCookie: lv0 };
