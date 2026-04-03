// Module: FB0
// Params: Ho5,uy1

var WB0 = (A, B) => {
  for (let Q of Reflect.ownKeys(B))
    Object.defineProperty(A, Q, Object.getOwnPropertyDescriptor(B, Q));
  return A;
};
uy1.exports = WB0;
uy1.exports.default = WB0;
