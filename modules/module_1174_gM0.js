// Module: gM0
// Params: ut4,KL

ut4.mixin = function A(B, Q) {
  let I = Object.getOwnPropertyNames(Q);
  for (let G = 0; G < I.length; ++G)
    Object.defineProperty(B, I[G], Object.getOwnPropertyDescriptor(Q, I[G]));
};
ut4.wrapperSymbol = Symbol('wrapper');
ut4.implSymbol = Symbol('impl');
ut4.wrapperForImpl = function (A) {
  return A[ut4.wrapperSymbol];
};
ut4.implForWrapper = function (A) {
  return A[ut4.implSymbol];
};
