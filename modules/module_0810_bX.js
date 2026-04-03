// Module: bX
// Params: um5,kgA

var { defineProperty: o51, getOwnPropertyDescriptor: Ms9, getOwnPropertyNames: Ls9 } = Object,
  Rs9 = Object.prototype.hasOwnProperty,
  vO1 = (A, B) => o51(A, 'name', { value: B, configurable: !0 }),
  Os9 = (A, B) => {
    for (var Q in B) o51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ts9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Ls9(B))
        if (!Rs9.call(A, G) && G !== Q)
          o51(A, G, { get: () => B[G], enumerable: !(I = Ms9(B, G)) || I.enumerable });
    }
    return A;
  },
  Ps9 = (A) => Ts9(o51({}, '__esModule', { value: !0 }), A),
  _gA = {};
Os9(_gA, {
  emitWarningIfUnsupportedVersion: () => Ss9,
  setCredentialFeature: () => jgA,
  setFeature: () => ygA,
  state: () => fO1,
});
kgA.exports = Ps9(_gA);
var fO1 = { warningEmitted: !1 },
  Ss9 = vO1((A) => {
    if (A && !fO1.warningEmitted && parseInt(A.substring(1, A.indexOf('.'))) < 18)
      ((fO1.warningEmitted = !0),
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`));
  }, 'emitWarningIfUnsupportedVersion');
function jgA(A, B, Q) {
  if (!A.$source) A.$source = {};
  return ((A.$source[B] = Q), A);
}
vO1(jgA, 'setCredentialFeature');
function ygA(A, B, Q) {
  if (!A.__aws_sdk_context) A.__aws_sdk_context = { features: {} };
  else if (!A.__aws_sdk_context.features) A.__aws_sdk_context.features = {};
  A.__aws_sdk_context.features[B] = Q;
}
vO1(ygA, 'setFeature');
