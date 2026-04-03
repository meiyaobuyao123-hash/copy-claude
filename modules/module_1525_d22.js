// Module: d22
// Params: h22

Object.defineProperty(h22, '__esModule', { value: !0 });
h22.getMachineId = void 0;
var Bf6 = D1('fs'),
  Qf6 = C4();
async function If6() {
  let A = ['/etc/machine-id', '/var/lib/dbus/machine-id'];
  for (let B of A)
    try {
      return (await Bf6.promises.readFile(B, { encoding: 'utf8' })).trim();
    } catch (Q) {
      Qf6.diag.debug(`error reading machine id: ${Q}`);
    }
  return;
}
h22.getMachineId = If6;
