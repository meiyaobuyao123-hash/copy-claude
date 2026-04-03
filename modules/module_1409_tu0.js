// Module: tu0
// Params: ru0

Object.defineProperty(ru0, '__esModule', { value: !0 });
ru0.isCompatible = ru0._makeCompatibilityCheck = void 0;
var tw6 = zp1(),
  au0 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function su0(A) {
  let B = new Set([A]),
    Q = new Set(),
    I = A.match(au0);
  if (!I) return () => !1;
  let G = { major: +I[1], minor: +I[2], patch: +I[3], prerelease: I[4] };
  if (G.prerelease != null)
    return function Y(W) {
      return W === A;
    };
  function D(Y) {
    return (Q.add(Y), !1);
  }
  function Z(Y) {
    return (B.add(Y), !0);
  }
  return function Y(W) {
    if (B.has(W)) return !0;
    if (Q.has(W)) return !1;
    let F = W.match(au0);
    if (!F) return D(W);
    let J = { major: +F[1], minor: +F[2], patch: +F[3], prerelease: F[4] };
    if (J.prerelease != null) return D(W);
    if (G.major !== J.major) return D(W);
    if (G.major === 0) {
      if (G.minor === J.minor && G.patch <= J.patch) return Z(W);
      return D(W);
    }
    if (G.minor <= J.minor) return Z(W);
    return D(W);
  };
}
ru0._makeCompatibilityCheck = su0;
ru0.isCompatible = su0(tw6.VERSION);
