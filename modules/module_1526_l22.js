// Module: l22
// Params: p22

Object.defineProperty(p22, '__esModule', { value: !0 });
p22.getMachineId = void 0;
var Gf6 = D1('fs'),
  Df6 = UJ1(),
  u22 = C4();
async function Zf6() {
  try {
    return (await Gf6.promises.readFile('/etc/hostid', { encoding: 'utf8' })).trim();
  } catch (A) {
    u22.diag.debug(`error reading machine id: ${A}`);
  }
  try {
    return (await Df6.execAsync('kenv -q smbios.system.uuid')).stdout.trim();
  } catch (A) {
    u22.diag.debug(`error reading machine id: ${A}`);
  }
  return;
}
p22.getMachineId = Zf6;
