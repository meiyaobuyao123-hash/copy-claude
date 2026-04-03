// Module: dWA
// Params: hWA

Object.defineProperty(hWA, '__esModule', { value: !0 });
hWA.scheduleObservable = void 0;
var WZ9 = j4(),
  FZ9 = ck(),
  JZ9 = lk();
function CZ9(A, B) {
  return WZ9.innerFrom(A).pipe(JZ9.subscribeOn(B), FZ9.observeOn(B));
}
hWA.scheduleObservable = CZ9;
