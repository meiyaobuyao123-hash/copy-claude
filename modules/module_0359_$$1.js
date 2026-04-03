// Module: $$1
// Params: xXA

Object.defineProperty(xXA, '__esModule', { value: !0 });
xXA.distinct = void 0;
var UX9 = w2(),
  kXA = t2(),
  NX9 = cI(),
  $X9 = j4();
function qX9(A, B) {
  return UX9.operate(function (Q, I) {
    var G = new Set();
    (Q.subscribe(
      kXA.createOperatorSubscriber(I, function (D) {
        var Z = A ? A(D) : D;
        if (!G.has(Z)) (G.add(Z), I.next(D));
      })
    ),
      B &&
        $X9.innerFrom(B).subscribe(
          kXA.createOperatorSubscriber(
            I,
            function () {
              return G.clear();
            },
            NX9.noop
          )
        ));
  });
}
xXA.distinct = qX9;
