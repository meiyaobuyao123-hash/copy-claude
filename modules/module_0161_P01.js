// Module: P01
// Params: M8A

var { _optionalChain: nE1 } = tA();
Object.defineProperty(M8A, '__esModule', { value: !0 });
var Us2 = D1('fs'),
  U8A = I4(),
  N8A = tA(),
  T01 = new N8A.LRUMap(100),
  Ns2 = 7,
  $8A = 'ContextLines';
function $s2(A) {
  return new Promise((B, Q) => {
    Us2.readFile(A, 'utf8', (I, G) => {
      if (I) Q(I);
      else B(G);
    });
  });
}
var qs2 = (A = {}) => {
    let B = A.frameContextLines !== void 0 ? A.frameContextLines : Ns2;
    return {
      name: $8A,
      setupOnce() {},
      processEvent(Q) {
        return Ls2(Q, B);
      },
    };
  },
  q8A = U8A.defineIntegration(qs2),
  Ms2 = U8A.convertIntegrationFnToClass($8A, q8A);
async function Ls2(A, B) {
  let Q = {},
    I = [];
  if (B > 0 && nE1([A, 'access', (G) => G.exception, 'optionalAccess', (G) => G.values]))
    for (let G of A.exception.values) {
      if (!nE1([G, 'access', (D) => D.stacktrace, 'optionalAccess', (D) => D.frames])) continue;
      for (let D = G.stacktrace.frames.length - 1; D >= 0; D--) {
        let Z = G.stacktrace.frames[D];
        if (Z.filename && !Q[Z.filename] && !T01.get(Z.filename))
          (I.push(Os2(Z.filename)), (Q[Z.filename] = 1));
      }
    }
  if (I.length > 0) await Promise.all(I);
  if (B > 0 && nE1([A, 'access', (G) => G.exception, 'optionalAccess', (G) => G.values])) {
    for (let G of A.exception.values)
      if (G.stacktrace && G.stacktrace.frames) await Rs2(G.stacktrace.frames, B);
  }
  return A;
}
function Rs2(A, B) {
  for (let Q of A)
    if (Q.filename && Q.context_line === void 0) {
      let I = T01.get(Q.filename);
      if (I)
        try {
          N8A.addContextToFrame(I, Q, B);
        } catch (G) {}
    }
}
async function Os2(A) {
  let B = T01.get(A);
  if (B === null) return null;
  if (B !== void 0) return B;
  let Q = null;
  try {
    Q = (await $s2(A)).split(`
`);
  } catch (I) {}
  return (T01.set(A, Q), Q);
}
M8A.ContextLines = Ms2;
M8A.contextLinesIntegration = q8A;
