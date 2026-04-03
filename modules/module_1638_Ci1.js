// Module: Ci1
// Params: q32

Object.defineProperty(q32, '__esModule', { value: !0 });
q32.CIPHER_SUITES = void 0;
q32.getDefaultRootsData = Vd6;
var Xd6 = D1('fs');
q32.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
var $32 = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH,
  Ji1 = null;
function Vd6() {
  if ($32) {
    if (Ji1 === null) Ji1 = Xd6.readFileSync($32);
    return Ji1;
  }
  return null;
}
