// Module: XOA
// Params: My5,COA

COA.exports = Tx9;
function Tx9(A) {
  var B =
    typeof setImmediate == 'function'
      ? setImmediate
      : typeof process == 'object' && typeof process.nextTick == 'function'
        ? process.nextTick
        : null;
  if (B) B(A);
  else setTimeout(A, 0);
}
