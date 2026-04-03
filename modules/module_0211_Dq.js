// Module: Dq
// Params: JZA

Object.defineProperty(JZA, '__esModule', { value: !0 });
JZA.createErrorClass = void 0;
function ZI9(A) {
  var B = function (I) {
      (Error.call(I), (I.stack = new Error().stack));
    },
    Q = A(B);
  return ((Q.prototype = Object.create(Error.prototype)), (Q.prototype.constructor = Q), Q);
}
JZA.createErrorClass = ZI9;
