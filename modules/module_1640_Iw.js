// Module: Iw
// Params: O32

Object.defineProperty(O32, '__esModule', { value: !0 });
O32.registerResolver = Ld6;
O32.registerDefaultScheme = Rd6;
O32.createResolver = Od6;
O32.getDefaultAuthority = Td6;
O32.mapUriDefaultScheme = Pd6;
var Vi1 = xY(),
  Cm = {},
  Xi1 = null;
function Ld6(A, B) {
  Cm[A] = B;
}
function Rd6(A) {
  Xi1 = A;
}
function Od6(A, B, Q) {
  if (A.scheme !== void 0 && A.scheme in Cm) return new Cm[A.scheme](A, B, Q);
  else throw new Error(`No resolver could be created for target ${Vi1.uriToString(A)}`);
}
function Td6(A) {
  if (A.scheme !== void 0 && A.scheme in Cm) return Cm[A.scheme].getDefaultAuthority(A);
  else throw new Error(`Invalid target ${Vi1.uriToString(A)}`);
}
function Pd6(A) {
  if (A.scheme === void 0 || !(A.scheme in Cm))
    if (Xi1 !== null) return { scheme: Xi1, authority: void 0, path: Vi1.uriToString(A) };
    else return null;
  return A;
}
