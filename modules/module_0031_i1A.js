// Module: i1A
// Params: l1A

Object.defineProperty(l1A, '__esModule', { value: !0 });
var iO2 = Pz1(),
  Zw1 = Dw1();
function nO2(A) {
  let B = [];
  function Q() {
    return A === void 0 || B.length < A;
  }
  function I(Z) {
    return B.splice(B.indexOf(Z), 1)[0];
  }
  function G(Z) {
    if (!Q())
      return Zw1.rejectedSyncPromise(
        new iO2.SentryError('Not adding Promise because buffer limit was reached.')
      );
    let Y = Z();
    if (B.indexOf(Y) === -1) B.push(Y);
    return (Y.then(() => I(Y)).then(null, () => I(Y).then(null, () => {})), Y);
  }
  function D(Z) {
    return new Zw1.SyncPromise((Y, W) => {
      let F = B.length;
      if (!F) return Y(!0);
      let J = setTimeout(() => {
        if (Z && Z > 0) Y(!1);
      }, Z);
      B.forEach((C) => {
        Zw1.resolvedSyncPromise(C).then(() => {
          if (!--F) (clearTimeout(J), Y(!0));
        }, W);
      });
    });
  }
  return { $: B, add: G, drain: D };
}
l1A.makePromiseBuffer = nO2;
