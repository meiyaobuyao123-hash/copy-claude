// Module: QFA
// Params: AFA

Object.defineProperty(AFA, '__esModule', { value: !0 });
AFA.scheduleReadableStreamLike = void 0;
var LZ9 = bN1(),
  RZ9 = U91();
function OZ9(A, B) {
  return LZ9.scheduleAsyncIterable(RZ9.readableStreamLikeToAsyncGenerator(A), B);
}
AFA.scheduleReadableStreamLike = OZ9;
