// Module: xB0
// Params: fo5,kB0

var uq4 = _B0(),
  pq4 =
    typeof process === 'object' && process && typeof process.cwd === 'function'
      ? process.cwd()
      : '.',
  yB0 = []
    .concat(D1('module').builtinModules, 'bootstrap_node', 'node')
    .map(
      (A) =>
        new RegExp(
          `(?:\\((?:node:)?${A}(?:\\.js)?:\\d+:\\d+\\)$|^\\s*at (?:node:)?${A}(?:\\.js)?:\\d+:\\d+$)`
        )
    );
yB0.push(
  /\((?:node:)?internal\/[^:]+:\d+:\d+\)$/,
  /\s*at (?:node:)?internal\/[^:]+:\d+:\d+$/,
  /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/
);
class ry1 {
  constructor(A) {
    if (((A = { ignoredPackages: [], ...A }), 'internals' in A === !1))
      A.internals = ry1.nodeInternals();
    if ('cwd' in A === !1) A.cwd = pq4;
    ((this._cwd = A.cwd.replace(/\\/g, '/')),
      (this._internals = [].concat(A.internals, cq4(A.ignoredPackages))),
      (this._wrapCallSite = A.wrapCallSite || !1));
  }
  static nodeInternals() {
    return [...yB0];
  }
  clean(A, B = 0) {
    if (((B = ' '.repeat(B)), !Array.isArray(A)))
      A = A.split(`
`);
    if (!/^\s*at /.test(A[0]) && /^\s*at /.test(A[1])) A = A.slice(1);
    let Q = !1,
      I = null,
      G = [];
    return (
      A.forEach((D) => {
        if (((D = D.replace(/\\/g, '/')), this._internals.some((Y) => Y.test(D)))) return;
        let Z = /^\s*at /.test(D);
        if (Q) D = D.trimEnd().replace(/^(\s+)at /, '$1');
        else if (((D = D.trim()), Z)) D = D.slice(3);
        if (((D = D.replace(`${this._cwd}/`, '')), D))
          if (Z) {
            if (I) (G.push(I), (I = null));
            G.push(D);
          } else ((Q = !0), (I = D));
      }),
      G.map(
        (D) => `${B}${D}
`
      ).join('')
    );
  }
  captureString(A, B = this.captureString) {
    if (typeof A === 'function') ((B = A), (A = 1 / 0));
    let { stackTraceLimit: Q } = Error;
    if (A) Error.stackTraceLimit = A;
    let I = {};
    Error.captureStackTrace(I, B);
    let { stack: G } = I;
    return ((Error.stackTraceLimit = Q), this.clean(G));
  }
  capture(A, B = this.capture) {
    if (typeof A === 'function') ((B = A), (A = 1 / 0));
    let { prepareStackTrace: Q, stackTraceLimit: I } = Error;
    if (
      ((Error.prepareStackTrace = (Z, Y) => {
        if (this._wrapCallSite) return Y.map(this._wrapCallSite);
        return Y;
      }),
      A)
    )
      Error.stackTraceLimit = A;
    let G = {};
    Error.captureStackTrace(G, B);
    let { stack: D } = G;
    return (Object.assign(Error, { prepareStackTrace: Q, stackTraceLimit: I }), D);
  }
  at(A = this.at) {
    let [B] = this.capture(1, A);
    if (!B) return {};
    let Q = { line: B.getLineNumber(), column: B.getColumnNumber() };
    if ((jB0(Q, B.getFileName(), this._cwd), B.isConstructor()))
      Object.defineProperty(Q, 'constructor', { value: !0, configurable: !0 });
    if (B.isEval()) Q.evalOrigin = B.getEvalOrigin();
    if (B.isNative()) Q.native = !0;
    let I;
    try {
      I = B.getTypeName();
    } catch (Z) {}
    if (I && I !== 'Object' && I !== '[object Object]') Q.type = I;
    let G = B.getFunctionName();
    if (G) Q.function = G;
    let D = B.getMethodName();
    if (D && G !== D) Q.method = D;
    return Q;
  }
  parseLine(A) {
    let B = A && A.match(lq4);
    if (!B) return null;
    let Q = B[1] === 'new',
      I = B[2],
      G = B[3],
      D = B[4],
      Z = Number(B[5]),
      Y = Number(B[6]),
      W = B[7],
      F = B[8],
      J = B[9],
      C = B[10] === 'native',
      X = B[11] === ')',
      V,
      K = {};
    if (F) K.line = Number(F);
    if (J) K.column = Number(J);
    if (X && W) {
      let U = 0;
      for (let N = W.length - 1; N > 0; N--)
        if (W.charAt(N) === ')') U++;
        else if (W.charAt(N) === '(' && W.charAt(N - 1) === ' ') {
          if ((U--, U === -1 && W.charAt(N - 1) === ' ')) {
            let q = W.slice(0, N - 1);
            ((W = W.slice(N + 1)), (I += ` (${q}`));
            break;
          }
        }
    }
    if (I) {
      let U = I.match(iq4);
      if (U) ((I = U[1]), (V = U[2]));
    }
    if ((jB0(K, W, this._cwd), Q))
      Object.defineProperty(K, 'constructor', { value: !0, configurable: !0 });
    if (G)
      ((K.evalOrigin = G),
        (K.evalLine = Z),
        (K.evalColumn = Y),
        (K.evalFile = D && D.replace(/\\/g, '/')));
    if (C) K.native = !0;
    if (I) K.function = I;
    if (V && I !== V) K.method = V;
    return K;
  }
}
function jB0(A, B, Q) {
  if (B) {
    if (((B = B.replace(/\\/g, '/')), B.startsWith(`${Q}/`))) B = B.slice(Q.length + 1);
    A.file = B;
  }
}
function cq4(A) {
  if (A.length === 0) return [];
  let B = A.map((Q) => uq4(Q));
  return new RegExp(`[/\\\\]node_modules[/\\\\](?:${B.join('|')})[/\\\\][^:]+:\\d+:\\d+`);
}
var lq4 = new RegExp(
    '^(?:\\s*at )?(?:(new) )?(?:(.*?) \\()?(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?(?:(.+?):(\\d+):(\\d+)|(native))(\\)?)$'
  ),
  iq4 = /^(.*?) \[as (.*?)\]$/;
kB0.exports = ry1;
