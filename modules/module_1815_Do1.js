// Module: Do1
// Params: wl8,iK2

var zl8 = (iK2.exports = {
  nextSkippingChildren: X65,
  nextAncestorSibling: Go1,
  next: V65,
  previous: K65,
  deepLastChild: lK2,
});
function X65(A, B) {
  if (A === B) return null;
  if (A.nextSibling !== null) return A.nextSibling;
  return Go1(A, B);
}
function Go1(A, B) {
  for (A = A.parentNode; A !== null; A = A.parentNode) {
    if (A === B) return null;
    if (A.nextSibling !== null) return A.nextSibling;
  }
  return null;
}
function V65(A, B) {
  var Q = A.firstChild;
  if (Q !== null) return Q;
  if (A === B) return null;
  if (((Q = A.nextSibling), Q !== null)) return Q;
  return Go1(A, B);
}
function lK2(A) {
  while (A.lastChild) A = A.lastChild;
  return A;
}
function K65(A, B) {
  var Q = A.previousSibling;
  if (Q !== null) return lK2(Q);
  if (((Q = A.parentNode), Q === B)) return null;
  return Q;
}
