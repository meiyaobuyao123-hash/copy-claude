// Module: E81
// Params: yt9

var Pt9 =
    ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
  FmA =
    '[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][' +
    Pt9 +
    ']*',
  St9 = new RegExp('^' + FmA + '$'),
  _t9 = function (A, B) {
    let Q = [],
      I = B.exec(A);
    while (I) {
      let G = [];
      G.startIndex = B.lastIndex - I[0].length;
      let D = I.length;
      for (let Z = 0; Z < D; Z++) G.push(I[Z]);
      (Q.push(G), (I = B.exec(A)));
    }
    return Q;
  },
  jt9 = function (A) {
    let B = St9.exec(A);
    return !(B === null || typeof B === 'undefined');
  };
yt9.isExist = function (A) {
  return typeof A !== 'undefined';
};
yt9.isEmptyObject = function (A) {
  return Object.keys(A).length === 0;
};
yt9.merge = function (A, B, Q) {
  if (B) {
    let I = Object.keys(B),
      G = I.length;
    for (let D = 0; D < G; D++)
      if (Q === 'strict') A[I[D]] = [B[I[D]]];
      else A[I[D]] = B[I[D]];
  }
};
yt9.getValue = function (A) {
  if (yt9.isExist(A)) return A;
  else return '';
};
yt9.isName = jt9;
yt9.getAllMatches = _t9;
yt9.nameRegexp = FmA;
