// Module: G8A
// Params: I8A

Object.defineProperty(I8A, '__esModule', { value: !0 });
var ca2 = ZT(),
  la2 = A8A(),
  ia2 = Q8A();
function na2() {
  if (ca2.NODE_VERSION.major >= 14) ia2.setHooksAsyncContextStrategy();
  else la2.setDomainAsyncContextStrategy();
}
I8A.setNodeAsyncContextStrategy = na2;
