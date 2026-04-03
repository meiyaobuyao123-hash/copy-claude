// Module: GQA
// Params: IQA

Object.defineProperty(IQA, '__esModule', { value: !0 });
var e3A = I4(),
  XU1 = tA(),
  CU1 = XU1.GLOBAL_OBJ,
  w19 = 7,
  AQA = 'ContextLines',
  E19 = (A = {}) => {
    let B = A.frameContextLines != null ? A.frameContextLines : w19;
    return {
      name: AQA,
      setupOnce() {},
      processEvent(Q) {
        return N19(Q, B);
      },
    };
  },
  BQA = e3A.defineIntegration(E19),
  U19 = e3A.convertIntegrationFnToClass(AQA, BQA);
function N19(A, B) {
  let Q = CU1.document,
    I = CU1.location && XU1.stripUrlQueryAndFragment(CU1.location.href);
  if (!Q || !I) return A;
  let G = A.exception && A.exception.values;
  if (!G || !G.length) return A;
  let D = Q.documentElement.innerHTML;
  if (!D) return A;
  let Z = [
    '<!DOCTYPE html>',
    '<html>',
    ...D.split(`
`),
    '</html>',
  ];
  return (
    G.forEach((Y) => {
      let W = Y.stacktrace;
      if (W && W.frames) W.frames = W.frames.map((F) => QQA(F, Z, I, B));
    }),
    A
  );
}
function QQA(A, B, Q, I) {
  if (A.filename !== Q || !A.lineno || !B.length) return A;
  return (XU1.addContextToFrame(B, A, I), A);
}
IQA.ContextLines = U19;
IQA.applySourceContextToFrame = QQA;
IQA.contextLinesIntegration = BQA;
