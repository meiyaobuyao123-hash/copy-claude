// Module: iV2
// Params: oc8,lV2

lV2.exports = class A extends Array {
  constructor(B) {
    super((B && B.length) || 0);
    if (B) for (var Q in B) this[Q] = B[Q];
  }
  item(B) {
    return this[B] || null;
  }
};
