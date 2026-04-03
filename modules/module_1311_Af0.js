// Module: Af0
// Params: IK8,ex0

var BG6 = pY1();
ex0.exports = (A) => {
  let B = A?.maxRedirections;
  return (Q) => {
    return function I(G, D) {
      let { maxRedirections: Z = B, ...Y } = G;
      if (!Z) return Q(G, D);
      let W = new BG6(Q, Z, G, D);
      return Q(Y, W);
    };
  };
};
