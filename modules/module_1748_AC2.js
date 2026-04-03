// Module: AC2
// Params: R05

var { DOMParser: q05 } = tJ2();
R05.parse = L05;
var QV1 = 3,
  eJ2 = 4,
  M05 = 8;
function us1(A) {
  return A.nodeType === QV1 || A.nodeType === M05 || A.nodeType === eJ2;
}
function jN(A) {
  if (!A.childNodes || A.childNodes.length === 0) return !0;
  else return !1;
}
function t_(A, B) {
  if (!A) throw new Error(B);
}
function L05(A) {
  var B = new q05().parseFromString(A);
  t_(B.documentElement.nodeName === 'plist', 'malformed document. First element should be <plist>');
  var Q = em(B.documentElement);
  if (Q.length == 1) Q = Q[0];
  return Q;
}
function em(A) {
  var B, Q, I, G, D, Z, Y, W;
  if (!A) return null;
  if (A.nodeName === 'plist') {
    if (((D = []), jN(A))) return D;
    for (B = 0; B < A.childNodes.length; B++)
      if (!us1(A.childNodes[B])) D.push(em(A.childNodes[B]));
    return D;
  } else if (A.nodeName === 'dict') {
    if (((Q = {}), (I = null), (Y = 0), jN(A))) return Q;
    for (B = 0; B < A.childNodes.length; B++) {
      if (us1(A.childNodes[B])) continue;
      if (Y % 2 === 0)
        (t_(A.childNodes[B].nodeName === 'key', 'Missing key while parsing <dict/>.'),
          (I = em(A.childNodes[B])));
      else
        (t_(
          A.childNodes[B].nodeName !== 'key',
          'Unexpected key "' + em(A.childNodes[B]) + '" while parsing <dict/>.'
        ),
          (Q[I] = em(A.childNodes[B])));
      Y += 1;
    }
    if (Y % 2 === 1) Q[I] = '';
    return Q;
  } else if (A.nodeName === 'array') {
    if (((D = []), jN(A))) return D;
    for (B = 0; B < A.childNodes.length; B++)
      if (!us1(A.childNodes[B])) {
        if (((Z = em(A.childNodes[B])), Z != null)) D.push(Z);
      }
    return D;
  } else if (A.nodeName === '#text');
  else if (A.nodeName === 'key') {
    if (jN(A)) return '';
    return (
      t_(
        A.childNodes[0].nodeValue !== '__proto__',
        '__proto__ keys can lead to prototype pollution. More details on CVE-2022-22912'
      ),
      A.childNodes[0].nodeValue
    );
  } else if (A.nodeName === 'string') {
    if (((Z = ''), jN(A))) return Z;
    for (B = 0; B < A.childNodes.length; B++) {
      var W = A.childNodes[B].nodeType;
      if (W === QV1 || W === eJ2) Z += A.childNodes[B].nodeValue;
    }
    return Z;
  } else if (A.nodeName === 'integer')
    return (t_(!jN(A), 'Cannot parse "" as integer.'), parseInt(A.childNodes[0].nodeValue, 10));
  else if (A.nodeName === 'real') {
    (t_(!jN(A), 'Cannot parse "" as real.'), (Z = ''));
    for (B = 0; B < A.childNodes.length; B++)
      if (A.childNodes[B].nodeType === QV1) Z += A.childNodes[B].nodeValue;
    return parseFloat(Z);
  } else if (A.nodeName === 'data') {
    if (((Z = ''), jN(A))) return Buffer.from(Z, 'base64');
    for (B = 0; B < A.childNodes.length; B++)
      if (A.childNodes[B].nodeType === QV1) Z += A.childNodes[B].nodeValue.replace(/\s+/g, '');
    return Buffer.from(Z, 'base64');
  } else if (A.nodeName === 'date')
    return (t_(!jN(A), 'Cannot parse "" as Date.'), new Date(A.childNodes[0].nodeValue));
  else if (A.nodeName === 'null') return null;
  else if (A.nodeName === 'true') return !0;
  else if (A.nodeName === 'false') return !1;
  else throw new Error('Invalid PLIST tag ' + A.nodeName);
}
