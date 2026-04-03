// Module: n$1
// Params: cVA

Object.defineProperty(cVA, '__esModule', { value: !0 });
cVA.publishBehavior = void 0;
var OK9 = qN1(),
  TK9 = ap();
function PK9(A) {
  return function (B) {
    var Q = new OK9.BehaviorSubject(A);
    return new TK9.ConnectableObservable(B, function () {
      return Q;
    });
  };
}
cVA.publishBehavior = PK9;
