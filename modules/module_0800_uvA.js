// Module: uvA
// Params: mvA

Object.defineProperty(mvA, '__esModule', { value: !0 });
mvA.splitStream = void 0;
var gvA = D1('stream'),
  $n9 = bvA(),
  hvA = tq();
async function qn9(A) {
  if (hvA.isReadableStream(A) || hvA.isBlob(A)) return $n9.splitStream(A);
  let B = new gvA.PassThrough(),
    Q = new gvA.PassThrough();
  return (A.pipe(B), A.pipe(Q), [B, Q]);
}
mvA.splitStream = qn9;
