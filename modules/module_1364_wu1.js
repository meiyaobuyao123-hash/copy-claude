// Module: wu1
// Params: $z8,Qh0

Qh0.exports = function A(B, Q) {
  return (
    (Q = Q || Object.create(null)),
    [B, Q].reduce((I, G) => {
      return (
        Object.keys(G).forEach((D) => {
          I[D] = G[D];
        }),
        I
      );
    }, Object.create(null))
  );
};
