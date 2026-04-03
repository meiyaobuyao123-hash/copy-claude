// Module: bI0
// Params: k78,vI0

var fI0 = eG(),
  RO4 = (A, B, Q, I, G) => {
    if (typeof Q === 'string') ((G = I), (I = Q), (Q = void 0));
    try {
      return new fI0(A instanceof fI0 ? A.version : A, Q).inc(B, I, G).version;
    } catch (D) {
      return null;
    }
  };
vI0.exports = RO4;
