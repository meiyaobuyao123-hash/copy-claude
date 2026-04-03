// Module: cWA
// Params: uWA

Object.defineProperty(uWA, '__esModule', { value: !0 });
uWA.schedulePromise = void 0;
var XZ9 = j4(),
  VZ9 = ck(),
  KZ9 = lk();
function HZ9(A, B) {
  return XZ9.innerFrom(A).pipe(KZ9.subscribeOn(B), VZ9.observeOn(B));
}
uWA.schedulePromise = HZ9;
