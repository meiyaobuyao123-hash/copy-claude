// Module: Q8A
// Params: B8A

var { _optionalChain: ma2 } = tA();
Object.defineProperty(B8A, '__esModule', { value: !0 });
var iE1 = I4(),
  da2 = D1('async_hooks'),
  M01;
function ua2() {
  if (!M01) M01 = new da2.AsyncLocalStorage();
  function A() {
    return M01.getStore();
  }
  function B(I) {
    let G = {};
    return (iE1.ensureHubOnCarrier(G, I), iE1.getHubFromCarrier(G));
  }
  function Q(I, G) {
    let D = A();
    if (D && ma2([G, 'optionalAccess', (Y) => Y.reuseExisting])) return I();
    let Z = B(D);
    return M01.run(Z, () => {
      return I();
    });
  }
  iE1.setAsyncContextStrategy({ getCurrentHub: A, runWithAsyncContext: Q });
}
B8A.setHooksAsyncContextStrategy = ua2;
