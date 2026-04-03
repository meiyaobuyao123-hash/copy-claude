// Module: mI0
// Params: x78,hI0

var gI0 = WS(),
  OO4 = (A, B) => {
    let Q = gI0(A, null, !0),
      I = gI0(B, null, !0),
      G = Q.compare(I);
    if (G === 0) return null;
    let D = G > 0,
      Z = D ? Q : I,
      Y = D ? I : Q,
      W = !!Z.prerelease.length;
    if (!!Y.prerelease.length && !W) {
      if (!Y.patch && !Y.minor) return 'major';
      if (Y.compareMain(Z) === 0) {
        if (Y.minor && !Y.patch) return 'minor';
        return 'patch';
      }
    }
    let J = W ? 'pre' : '';
    if (Q.major !== I.major) return J + 'major';
    if (Q.minor !== I.minor) return J + 'minor';
    if (Q.patch !== I.patch) return J + 'patch';
    return 'prerelease';
  };
hI0.exports = OO4;
