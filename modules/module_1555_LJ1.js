// Module: LJ1
// Params: l42

Object.defineProperty(l42, '__esModule', { value: !0 });
l42.createDenyListAttributesProcessor =
  l42.createAllowListAttributesProcessor =
  l42.createMultiAttributesProcessor =
  l42.createNoopAttributesProcessor =
    void 0;
class d42 {
  process(A, B) {
    return A;
  }
}
class u42 {
  _processors;
  constructor(A) {
    this._processors = A;
  }
  process(A, B) {
    let Q = A;
    for (let I of this._processors) Q = I.process(Q, B);
    return Q;
  }
}
class p42 {
  _allowedAttributeNames;
  constructor(A) {
    this._allowedAttributeNames = A;
  }
  process(A, B) {
    let Q = {};
    return (
      Object.keys(A)
        .filter((I) => this._allowedAttributeNames.includes(I))
        .forEach((I) => (Q[I] = A[I])),
      Q
    );
  }
}
class c42 {
  _deniedAttributeNames;
  constructor(A) {
    this._deniedAttributeNames = A;
  }
  process(A, B) {
    let Q = {};
    return (
      Object.keys(A)
        .filter((I) => !this._deniedAttributeNames.includes(I))
        .forEach((I) => (Q[I] = A[I])),
      Q
    );
  }
}
function Ov6() {
  return _v6;
}
l42.createNoopAttributesProcessor = Ov6;
function Tv6(A) {
  return new u42(A);
}
l42.createMultiAttributesProcessor = Tv6;
function Pv6(A) {
  return new p42(A);
}
l42.createAllowListAttributesProcessor = Pv6;
function Sv6(A) {
  return new c42(A);
}
l42.createDenyListAttributesProcessor = Sv6;
var _v6 = new d42();
