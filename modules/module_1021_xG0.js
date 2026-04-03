// Module: xG0
// Params: DI8,kG0

var dT4 = eG(),
  uT4 = pJ(),
  pT4 = (A, B, Q) => {
    let I = null,
      G = null,
      D = null;
    try {
      D = new uT4(B, Q);
    } catch (Z) {
      return null;
    }
    return (
      A.forEach((Z) => {
        if (D.test(Z)) {
          if (!I || G.compare(Z) === 1) ((I = Z), (G = new dT4(I, Q)));
        }
      }),
      I
    );
  };
kG0.exports = pT4;
