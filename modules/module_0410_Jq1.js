// Module: Jq1
// Params: fKA

Object.defineProperty(fKA, '__esModule', { value: !0 });
fKA.startWith = void 0;
var xKA = tp(),
  nH9 = IY(),
  aH9 = w2();
function sH9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = nH9.popScheduler(A);
  return aH9.operate(function (I, G) {
    (Q ? xKA.concat(A, I, Q) : xKA.concat(A, I)).subscribe(G);
  });
}
fKA.startWith = sH9;
