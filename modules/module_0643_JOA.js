// Module: JOA
// Params: Mx9

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var p41 = DOA(),
  wx9 = D1('path').extname,
  ZOA = /^\s*([^;\s]*)(?:;|\s|$)/,
  Ex9 = /^text\//i;
Mx9.charset = YOA;
Mx9.charsets = { lookup: YOA };
Mx9.contentType = Ux9;
Mx9.extension = Nx9;
Mx9.extensions = Object.create(null);
Mx9.lookup = $x9;
Mx9.types = Object.create(null);
qx9(Mx9.extensions, Mx9.types);
function YOA(A) {
  if (!A || typeof A !== 'string') return !1;
  var B = ZOA.exec(A),
    Q = B && p41[B[1].toLowerCase()];
  if (Q && Q.charset) return Q.charset;
  if (B && Ex9.test(B[1])) return 'UTF-8';
  return !1;
}
function Ux9(A) {
  if (!A || typeof A !== 'string') return !1;
  var B = A.indexOf('/') === -1 ? Mx9.lookup(A) : A;
  if (!B) return !1;
  if (B.indexOf('charset') === -1) {
    var Q = Mx9.charset(B);
    if (Q) B += '; charset=' + Q.toLowerCase();
  }
  return B;
}
function Nx9(A) {
  if (!A || typeof A !== 'string') return !1;
  var B = ZOA.exec(A),
    Q = B && Mx9.extensions[B[1].toLowerCase()];
  if (!Q || !Q.length) return !1;
  return Q[0];
}
function $x9(A) {
  if (!A || typeof A !== 'string') return !1;
  var B = wx9('x.' + A)
    .toLowerCase()
    .substr(1);
  if (!B) return !1;
  return Mx9.types[B] || !1;
}
function qx9(A, B) {
  var Q = ['nginx', 'apache', void 0, 'iana'];
  Object.keys(p41).forEach(function I(G) {
    var D = p41[G],
      Z = D.extensions;
    if (!Z || !Z.length) return;
    A[G] = Z;
    for (var Y = 0; Y < Z.length; Y++) {
      var W = Z[Y];
      if (B[W]) {
        var F = Q.indexOf(p41[B[W]].source),
          J = Q.indexOf(D.source);
        if (
          B[W] !== 'application/octet-stream' &&
          (F > J || (F === J && B[W].substr(0, 12) === 'application/'))
        )
          continue;
      }
      B[W] = G;
    }
  });
}
