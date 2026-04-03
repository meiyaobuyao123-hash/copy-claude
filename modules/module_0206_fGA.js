// Module: fGA
// Params: QU5,xGA

var kGA =
    '(?:' +
    [
      '\\|\\|',
      '\\&\\&',
      ';;',
      '\\|\\&',
      '\\<\\(',
      '\\<\\<\\<',
      '>>',
      '>\\&',
      '<\\&',
      '[&;()|<>]',
    ].join('|') +
    ')',
  SGA = new RegExp('^' + kGA + '$'),
  _GA = '|&;()<> \\t',
  s39 = '"((\\\\"|[^"])*?)"',
  r39 = "'((\\\\'|[^'])*?)'",
  o39 = /^#$/,
  jGA = "'",
  yGA = '"',
  PU1 = '$',
  $T = '',
  t39 = 4294967296;
for (b21 = 0; b21 < 4; b21++) $T += (t39 * Math.random()).toString(16);
var b21,
  e39 = new RegExp('^' + $T);
function AQ9(A, B) {
  var Q = B.lastIndex,
    I = [],
    G;
  while ((G = B.exec(A))) if ((I.push(G), B.lastIndex === G.index)) B.lastIndex += 1;
  return ((B.lastIndex = Q), I);
}
function BQ9(A, B, Q) {
  var I = typeof A === 'function' ? A(Q) : A[Q];
  if (typeof I === 'undefined' && Q != '') I = '';
  else if (typeof I === 'undefined') I = '$';
  if (typeof I === 'object') return B + $T + JSON.stringify(I) + $T;
  return B + I;
}
function QQ9(A, B, Q) {
  if (!Q) Q = {};
  var I = Q.escape || '\\',
    G = '(\\' + I + `['"` + _GA + `]|[^\\s'"` + _GA + '])+',
    D = new RegExp(['(' + kGA + ')', '(' + G + '|' + s39 + '|' + r39 + ')+'].join('|'), 'g'),
    Z = AQ9(A, D);
  if (Z.length === 0) return [];
  if (!B) B = {};
  var Y = !1;
  return Z.map(function (W) {
    var F = W[0];
    if (!F || Y) return;
    if (SGA.test(F)) return { op: F };
    var J = !1,
      C = !1,
      X = '',
      V = !1,
      K;
    function U() {
      K += 1;
      var M,
        R,
        T = F.charAt(K);
      if (T === '{') {
        if (((K += 1), F.charAt(K) === '}'))
          throw new Error('Bad substitution: ' + F.slice(K - 2, K + 1));
        if (((M = F.indexOf('}', K)), M < 0)) throw new Error('Bad substitution: ' + F.slice(K));
        ((R = F.slice(K, M)), (K = M));
      } else if (/[*@#?$!_-]/.test(T)) ((R = T), (K += 1));
      else {
        var O = F.slice(K);
        if (((M = O.match(/[^\w\d_]/)), !M)) ((R = O), (K = F.length));
        else ((R = O.slice(0, M.index)), (K += M.index - 1));
      }
      return BQ9(B, '', R);
    }
    for (K = 0; K < F.length; K++) {
      var N = F.charAt(K);
      if (((V = V || (!J && (N === '*' || N === '?'))), C)) ((X += N), (C = !1));
      else if (J)
        if (N === J) J = !1;
        else if (J == jGA) X += N;
        else if (N === I)
          if (((K += 1), (N = F.charAt(K)), N === yGA || N === I || N === PU1)) X += N;
          else X += I + N;
        else if (N === PU1) X += U();
        else X += N;
      else if (N === yGA || N === jGA) J = N;
      else if (SGA.test(N)) return { op: F };
      else if (o39.test(N)) {
        Y = !0;
        var q = { comment: A.slice(W.index + K + 1) };
        if (X.length) return [X, q];
        return [q];
      } else if (N === I) C = !0;
      else if (N === PU1) X += U();
      else X += N;
    }
    if (V) return { op: 'glob', pattern: X };
    return X;
  }).reduce(function (W, F) {
    return typeof F === 'undefined' ? W : W.concat(F);
  }, []);
}
xGA.exports = function A(B, Q, I) {
  var G = QQ9(B, Q, I);
  if (typeof Q !== 'function') return G;
  return G.reduce(function (D, Z) {
    if (typeof Z === 'object') return D.concat(Z);
    var Y = Z.split(RegExp('(' + $T + '.*?' + $T + ')', 'g'));
    if (Y.length === 1) return D.concat(Y[0]);
    return D.concat(
      Y.filter(Boolean).map(function (W) {
        if (e39.test(W)) return JSON.parse(W.split($T)[1]);
        return W;
      })
    );
  }, []);
};
