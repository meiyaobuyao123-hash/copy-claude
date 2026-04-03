// Module: Ax1
// Params: P78,LI0

var qI0 = /^[0-9]+$/,
  MI0 = (A, B) => {
    let Q = qI0.test(A),
      I = qI0.test(B);
    if (Q && I) ((A = +A), (B = +B));
    return A === B ? 0 : Q && !I ? -1 : I && !Q ? 1 : A < B ? -1 : 1;
  },
  EO4 = (A, B) => MI0(B, A);
LI0.exports = { compareIdentifiers: MI0, rcompareIdentifiers: EO4 };
