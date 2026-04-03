// Module: cY1
// Params: TV8,Gy0

var M36 = pY1();
function L36({ maxRedirections: A }) {
  return (B) => {
    return function Q(I, G) {
      let { maxRedirections: D = A } = I;
      if (!D) return B(I, G);
      let Z = new M36(B, D, I, G);
      return ((I = { ...I, maxRedirections: 0 }), B(I, Z));
    };
  };
}
Gy0.exports = L36;
