// Module: Ld0
// Params: bw8,Md0

Md0.exports = function A(B) {
  if (!B || typeof B === 'string') return !1;
  return (
    B instanceof Array ||
    Array.isArray(B) ||
    (B.length >= 0 &&
      (B.splice instanceof Function ||
        (Object.getOwnPropertyDescriptor(B, B.length - 1) && B.constructor.name !== 'String')))
  );
};
