// Module: AA1
// Params: te1

Object.defineProperty(te1, '__esModule', { value: !0 });
var ae1 = e11(),
  se1 = 50,
  ie1 = /\(error: (.*)\)/,
  ne1 = /captureMessage|captureException/;
function re1(...A) {
  let B = A.sort((Q, I) => Q[0] - I[0]).map((Q) => Q[1]);
  return (Q, I = 0) => {
    let G = [],
      D = Q.split(`
`);
    for (let Z = I; Z < D.length; Z++) {
      let Y = D[Z];
      if (Y.length > 1024) continue;
      let W = ie1.test(Y) ? Y.replace(ie1, '$1') : Y;
      if (W.match(/\S*Error: /)) continue;
      for (let F of B) {
        let J = F(W);
        if (J) {
          G.push(J);
          break;
        }
      }
      if (G.length >= se1) break;
    }
    return oe1(G);
  };
}
function AL2(A) {
  if (Array.isArray(A)) return re1(...A);
  return A;
}
function oe1(A) {
  if (!A.length) return [];
  let B = Array.from(A);
  if (/sentryWrapped/.test(B[B.length - 1].function || '')) B.pop();
  if ((B.reverse(), ne1.test(B[B.length - 1].function || ''))) {
    if ((B.pop(), ne1.test(B[B.length - 1].function || ''))) B.pop();
  }
  return B.slice(0, se1).map((Q) => ({
    ...Q,
    filename: Q.filename || B[B.length - 1].filename,
    function: Q.function || '?',
  }));
}
var _z1 = '<anonymous>';
function BL2(A) {
  try {
    if (!A || typeof A !== 'function') return _z1;
    return A.name || _z1;
  } catch (B) {
    return _z1;
  }
}
function QL2(A) {
  return [90, ae1.node(A)];
}
te1.filenameIsInApp = ae1.filenameIsInApp;
te1.createStackParser = re1;
te1.getFunctionName = BL2;
te1.nodeStackLineParser = QL2;
te1.stackParserFromStackParserOptions = AL2;
te1.stripSentryFramesAndReverse = oe1;
