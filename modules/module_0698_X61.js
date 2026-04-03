// Module: X61
// Params: WSA

Object.defineProperty(WSA, '__esModule', { value: !0 });
WSA._isTypeMatch = WSA._typeOf = void 0;
function jb9(A) {
  return Array.isArray(A) ? 'array' : typeof A;
}
WSA._typeOf = jb9;
function yb9(A, B) {
  let Q = (I) => (Array.isArray(I) ? 'array' : typeof I);
  return Q(A) === Q(B);
}
WSA._isTypeMatch = yb9;
