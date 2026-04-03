// Module: gN1
// Params: IFA

Object.defineProperty(IFA, '__esModule', { value: !0 });
IFA.scheduled = void 0;
var TZ9 = dWA(),
  PZ9 = cWA(),
  SZ9 = nWA(),
  _Z9 = vN1(),
  jZ9 = bN1(),
  yZ9 = PN1(),
  kZ9 = TN1(),
  xZ9 = E91(),
  fZ9 = yN1(),
  vZ9 = SN1(),
  bZ9 = _N1(),
  gZ9 = U91(),
  hZ9 = QFA();
function mZ9(A, B) {
  if (A != null) {
    if (yZ9.isInteropObservable(A)) return TZ9.scheduleObservable(A, B);
    if (xZ9.isArrayLike(A)) return SZ9.scheduleArray(A, B);
    if (kZ9.isPromise(A)) return PZ9.schedulePromise(A, B);
    if (vZ9.isAsyncIterable(A)) return jZ9.scheduleAsyncIterable(A, B);
    if (fZ9.isIterable(A)) return _Z9.scheduleIterable(A, B);
    if (gZ9.isReadableStreamLike(A)) return hZ9.scheduleReadableStreamLike(A, B);
  }
  throw bZ9.createInvalidObservableTypeError(A);
}
IFA.scheduled = mZ9;
