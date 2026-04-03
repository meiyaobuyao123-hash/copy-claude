// Module: EFA
// Params: zFA

Object.defineProperty(zFA, '__esModule', { value: !0 });
zFA.isObservable = void 0;
var IY9 = G8(),
  HFA = l5();
function GY9(A) {
  return (
    !!A && (A instanceof IY9.Observable || (HFA.isFunction(A.lift) && HFA.isFunction(A.subscribe)))
  );
}
zFA.isObservable = GY9;
