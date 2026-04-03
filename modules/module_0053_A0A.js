// Module: A0A
// Params: eAA

Object.defineProperty(eAA, '__esModule', { value: !0 });
function ES2(A) {
  return A.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
eAA.escapeStringForRegex = ES2;
