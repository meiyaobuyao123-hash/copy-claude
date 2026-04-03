// Module: Xg1
// Params: RR0

Object.defineProperty(RR0, '__esModule', { value: !0 });
RR0.GCE_LINUX_BIOS_PATHS = void 0;
RR0.isGoogleCloudServerless = $R0;
RR0.isGoogleComputeEngineLinux = qR0;
RR0.isGoogleComputeEngineMACAddress = MR0;
RR0.isGoogleComputeEngine = LR0;
RR0.detectGCPResidency = YA6;
var UR0 = D1('fs'),
  NR0 = D1('os');
RR0.GCE_LINUX_BIOS_PATHS = {
  BIOS_DATE: '/sys/class/dmi/id/bios_date',
  BIOS_VENDOR: '/sys/class/dmi/id/bios_vendor',
};
var ZA6 = /^42:01/;
function $R0() {
  return !!(process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE);
}
function qR0() {
  if (NR0.platform() !== 'linux') return !1;
  try {
    UR0.statSync(RR0.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
    let A = UR0.readFileSync(RR0.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, 'utf8');
    return /Google/.test(A);
  } catch (A) {
    return !1;
  }
}
function MR0() {
  let A = NR0.networkInterfaces();
  for (let B of Object.values(A)) {
    if (!B) continue;
    for (let { mac: Q } of B) if (ZA6.test(Q)) return !0;
  }
  return !1;
}
function LR0() {
  return qR0() || MR0();
}
function YA6() {
  return $R0() || LR0();
}
