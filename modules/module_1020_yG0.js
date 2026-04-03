// Module: yG0
// Params: GI8,jG0

var gT4 = eG(),
  hT4 = pJ(),
  mT4 = (A, B, Q) => {
    let I = null,
      G = null,
      D = null;
    try {
      D = new hT4(B, Q);
    } catch (Z) {
      return null;
    }
    return (
      A.forEach((Z) => {
        if (D.test(Z)) {
          if (!I || G.compare(Z) === -1) ((I = Z), (G = new gT4(I, Q)));
        }
      }),
      I
    );
  };
jG0.exports = mT4;
