// Module: mx0
// Params: tV8,hx0

var bI6 = { pronoun: 'it', is: 'is', was: 'was', this: 'this' },
  gI6 = { pronoun: 'they', is: 'are', was: 'were', this: 'these' };
hx0.exports = class A {
  constructor(B, Q) {
    ((this.singular = B), (this.plural = Q));
  }
  pluralize(B) {
    let Q = B === 1,
      I = Q ? bI6 : gI6,
      G = Q ? this.singular : this.plural;
    return { ...I, count: B, noun: G };
  }
};
