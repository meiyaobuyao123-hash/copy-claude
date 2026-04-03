// Module: Wu0
// Params: aw8,Yu0

var Iw6 = D1('node:events'),
  TF1 = UF1(),
  XC = iz(),
  { runtimePlatformArch: Gw6 } = au1(),
  VZ = fr(),
  Du0 = Gw6(),
  Ip1 = VZ.libvipsVersion(),
  IR = VZ.format();
IR.heif.output.alias = ['avif', 'heic'];
IR.jpeg.output.alias = ['jpe', 'jpg'];
IR.tiff.output.alias = ['tif'];
IR.jp2k.output.alias = ['j2c', 'j2k', 'jp2', 'jpx'];
var Dw6 = {
    nearest: 'nearest',
    bilinear: 'bilinear',
    bicubic: 'bicubic',
    locallyBoundedBicubic: 'lbb',
    nohalo: 'nohalo',
    vertexSplitQuadraticBasisSpline: 'vsqbs',
  },
  ph = { vips: Ip1.semver };
if (!Ip1.isGlobal)
  if (!Ip1.isWasm)
    try {
      ph = D1(`@img/sharp-${Du0}/versions`);
    } catch (A) {
      try {
        ph = D1(`@img/sharp-libvips-${Du0}/versions`);
      } catch (B) {}
    }
  else
    try {
      ph = (() => {
        throw new Error('Cannot require module ' + '@img/sharp-wasm32/versions');
      })();
    } catch (A) {}
ph.sharp = iu1().version;
if (ph.heif && IR.heif) ((IR.heif.input.fileSuffix = ['.avif']), (IR.heif.output.alias = ['avif']));
function Zu0(A) {
  if (XC.bool(A))
    if (A) return VZ.cache(50, 20, 100);
    else return VZ.cache(0, 0, 0);
  else if (XC.object(A)) return VZ.cache(A.memory, A.files, A.items);
  else return VZ.cache();
}
Zu0(!0);
function Zw6(A) {
  return VZ.concurrency(XC.integer(A) ? A : null);
}
if (TF1.familySync() === TF1.GLIBC && !VZ._isUsingJemalloc()) VZ.concurrency(1);
else if (TF1.familySync() === TF1.MUSL && VZ.concurrency() === 1024)
  VZ.concurrency(D1('node:os').availableParallelism());
var Yw6 = new Iw6.EventEmitter();
function Ww6() {
  return VZ.counters();
}
function Fw6(A) {
  return VZ.simd(XC.bool(A) ? A : null);
}
function Jw6(A) {
  if (XC.object(A))
    if (Array.isArray(A.operation) && A.operation.every(XC.string)) VZ.block(A.operation, !0);
    else throw XC.invalidParameterError('operation', 'Array<string>', A.operation);
  else throw XC.invalidParameterError('options', 'object', A);
}
function Cw6(A) {
  if (XC.object(A))
    if (Array.isArray(A.operation) && A.operation.every(XC.string)) VZ.block(A.operation, !1);
    else throw XC.invalidParameterError('operation', 'Array<string>', A.operation);
  else throw XC.invalidParameterError('options', 'object', A);
}
Yu0.exports = function (A) {
  ((A.cache = Zu0),
    (A.concurrency = Zw6),
    (A.counters = Ww6),
    (A.simd = Fw6),
    (A.format = IR),
    (A.interpolators = Dw6),
    (A.versions = ph),
    (A.queue = Yw6),
    (A.block = Jw6),
    (A.unblock = Cw6));
};
