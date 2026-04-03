// Module: s22
// Params: n22

Object.defineProperty(n22, '__esModule', { value: !0 });
n22.getMachineId = void 0;
var i22 = D1('process'),
  Yf6 = UJ1(),
  Wf6 = C4();
async function Ff6() {
  let B = '%windir%\\System32\\REG.exe';
  if (i22.arch === 'ia32' && 'PROCESSOR_ARCHITEW6432' in i22.env)
    B = '%windir%\\sysnative\\cmd.exe /c ' + B;
  try {
    let I = (
      await Yf6.execAsync(
        `${B} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`
      )
    ).stdout.split('REG_SZ');
    if (I.length === 2) return I[1].trim();
  } catch (Q) {
    Wf6.diag.debug(`error reading machine id: ${Q}`);
  }
  return;
}
n22.getMachineId = Ff6;
