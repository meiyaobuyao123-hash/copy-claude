// Module: Qu1
// Params: fK8,ib0

function VW6(A) {
  return A.indexOf('\x00') === -1;
}
function KW6(A) {
  if (A.length === 0) return !1;
  for (let B = 0; B < A.length; B++) if (A.charCodeAt(B) < 48 || A.charCodeAt(B) > 57) return !1;
  return !0;
}
function HW6(A) {
  return new Promise((B) => {
    setTimeout(B, A).unref();
  });
}
ib0.exports = { isValidLastEventId: VW6, isASCIINumber: KW6, delay: HW6 };
