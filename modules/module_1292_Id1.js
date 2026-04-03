// Module: Id1
// Params: mV8,_k0

var L76 = D1('node:assert'),
  { ResponseStatusCodeError: Ok0 } = y5(),
  { chunksDecode: Tk0 } = Qd1();
async function R76({
  callback: A,
  body: B,
  contentType: Q,
  statusCode: I,
  statusMessage: G,
  headers: D,
}) {
  L76(B);
  let Z = [],
    Y = 0;
  try {
    for await (let C of B)
      if ((Z.push(C), (Y += C.length), Y > 131072)) {
        ((Z = []), (Y = 0));
        break;
      }
  } catch {
    ((Z = []), (Y = 0));
  }
  let W = `Response status code ${I}${G ? `: ${G}` : ''}`;
  if (I === 204 || !Q || !Y) {
    queueMicrotask(() => A(new Ok0(W, I, D)));
    return;
  }
  let F = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  let J;
  try {
    if (Pk0(Q)) J = JSON.parse(Tk0(Z, Y));
    else if (Sk0(Q)) J = Tk0(Z, Y);
  } catch {
  } finally {
    Error.stackTraceLimit = F;
  }
  queueMicrotask(() => A(new Ok0(W, I, D, J)));
}
var Pk0 = (A) => {
    return (
      A.length > 15 &&
      A[11] === '/' &&
      A[0] === 'a' &&
      A[1] === 'p' &&
      A[2] === 'p' &&
      A[3] === 'l' &&
      A[4] === 'i' &&
      A[5] === 'c' &&
      A[6] === 'a' &&
      A[7] === 't' &&
      A[8] === 'i' &&
      A[9] === 'o' &&
      A[10] === 'n' &&
      A[12] === 'j' &&
      A[13] === 's' &&
      A[14] === 'o' &&
      A[15] === 'n'
    );
  },
  Sk0 = (A) => {
    return (
      A.length > 4 && A[4] === '/' && A[0] === 't' && A[1] === 'e' && A[2] === 'x' && A[3] === 't'
    );
  };
_k0.exports = {
  getResolveErrorBodyCallback: R76,
  isContentTypeApplicationJson: Pk0,
  isContentTypeText: Sk0,
};
