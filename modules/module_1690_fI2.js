// Module: fI2
// Params: kI2

Object.defineProperty(kI2, '__esModule', { value: !0 });
kI2.addCommonProtos = kI2.loadProtosWithOptionsSync = kI2.loadProtosWithOptions = void 0;
var _I2 = D1('fs'),
  jI2 = D1('path'),
  Rm = PC1();
function yI2(A, B) {
  let Q = A.resolvePath;
  A.resolvePath = (I, G) => {
    if (jI2.isAbsolute(G)) return G;
    for (let D of B) {
      let Z = jI2.join(D, G);
      try {
        return (_I2.accessSync(Z, _I2.constants.R_OK), Z);
      } catch (Y) {
        continue;
      }
    }
    return (process.emitWarning(`${G} not found in any of the include paths ${B}`), Q(I, G));
  };
}
async function dl6(A, B) {
  let Q = new Rm.Root();
  if (((B = B || {}), B.includeDirs)) {
    if (!Array.isArray(B.includeDirs))
      return Promise.reject(new Error('The includeDirs option must be an array'));
    yI2(Q, B.includeDirs);
  }
  let I = await Q.load(A, B);
  return (I.resolveAll(), I);
}
kI2.loadProtosWithOptions = dl6;
function ul6(A, B) {
  let Q = new Rm.Root();
  if (((B = B || {}), B.includeDirs)) {
    if (!Array.isArray(B.includeDirs)) throw new Error('The includeDirs option must be an array');
    yI2(Q, B.includeDirs);
  }
  let I = Q.loadSync(A, B);
  return (I.resolveAll(), I);
}
kI2.loadProtosWithOptionsSync = ul6;
function pl6() {
  let A = TI2(),
    B = Jn1(),
    Q = PI2(),
    I = SI2();
  (Rm.common('api', A.nested.google.nested.protobuf.nested),
    Rm.common('descriptor', B.nested.google.nested.protobuf.nested),
    Rm.common('source_context', Q.nested.google.nested.protobuf.nested),
    Rm.common('type', I.nested.google.nested.protobuf.nested));
}
kI2.addCommonProtos = pl6;
