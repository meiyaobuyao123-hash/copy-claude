// Module: DyA
// Params: fg5,GyA

GyA.exports = sm9;
var am9 =
  Object.getPrototypeOf ||
  function (A) {
    return A.__proto__;
  };
function sm9(A) {
  if (A === null || typeof A !== 'object') return A;
  if (A instanceof Object) var B = { __proto__: am9(A) };
  else var B = Object.create(null);
  return (
    Object.getOwnPropertyNames(A).forEach(function (Q) {
      Object.defineProperty(B, Q, Object.getOwnPropertyDescriptor(A, Q));
    }),
    B
  );
}
