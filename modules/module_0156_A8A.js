// Module: A8A
// Params: e5A

var { _optionalChain: xa2 } = tA();
Object.defineProperty(e5A, '__esModule', { value: !0 });
var o5A = D1('domain'),
  YT = I4();
function t5A() {
  return o5A.active;
}
function fa2() {
  let A = t5A();
  if (!A) return;
  return (YT.ensureHubOnCarrier(A), YT.getHubFromCarrier(A));
}
function va2(A) {
  let B = {};
  return (YT.ensureHubOnCarrier(B, A), YT.getHubFromCarrier(B));
}
function ba2(A, B) {
  let Q = t5A();
  if (Q && xa2([B, 'optionalAccess', (Z) => Z.reuseExisting])) return A();
  let I = o5A.create(),
    G = Q ? YT.getHubFromCarrier(Q) : void 0,
    D = va2(G);
  return (
    YT.setHubOnCarrier(I, D),
    I.bind(() => {
      return A();
    })()
  );
}
function ga2() {
  YT.setAsyncContextStrategy({ getCurrentHub: fa2, runWithAsyncContext: ba2 });
}
e5A.setDomainAsyncContextStrategy = ga2;
