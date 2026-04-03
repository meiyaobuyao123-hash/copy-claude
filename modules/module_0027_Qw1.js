// Module: Qw1
// Params: k1A

Object.defineProperty(k1A, '__esModule', { value: !0 });
function KO2() {
  let A = typeof WeakSet === 'function',
    B = A ? new WeakSet() : [];
  function Q(G) {
    if (A) {
      if (B.has(G)) return !0;
      return (B.add(G), !1);
    }
    for (let D = 0; D < B.length; D++) if (B[D] === G) return !0;
    return (B.push(G), !1);
  }
  function I(G) {
    if (A) B.delete(G);
    else
      for (let D = 0; D < B.length; D++)
        if (B[D] === G) {
          B.splice(D, 1);
          break;
        }
  }
  return [Q, I];
}
k1A.memoBuilder = KO2;
