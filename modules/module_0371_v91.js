// Module: v91
// Params: YVA

Object.defineProperty(YVA, '__esModule', { value: !0 });
YVA.createFind = YVA.find = void 0;
var DV9 = w2(),
  ZV9 = t2();
function YV9(A, B) {
  return DV9.operate(ZVA(A, B, 'value'));
}
YVA.find = YV9;
function ZVA(A, B, Q) {
  var I = Q === 'index';
  return function (G, D) {
    var Z = 0;
    G.subscribe(
      ZV9.createOperatorSubscriber(
        D,
        function (Y) {
          var W = Z++;
          if (A.call(B, Y, W, G)) (D.next(I ? W : Y), D.complete());
        },
        function () {
          (D.next(I ? -1 : void 0), D.complete());
        }
      )
    );
  };
}
YVA.createFind = ZVA;
