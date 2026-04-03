// Module: A92
// Params: e22

Object.defineProperty(e22, '__esModule', { value: !0 });
e22.getMachineId = void 0;
var Xf6 = D1('process'),
  Am;
e22.getMachineId = Am;
switch (Xf6.platform) {
  case 'darwin':
    e22.getMachineId = Am = g22().getMachineId;
    break;
  case 'linux':
    e22.getMachineId = Am = d22().getMachineId;
    break;
  case 'freebsd':
    e22.getMachineId = Am = l22().getMachineId;
    break;
  case 'win32':
    e22.getMachineId = Am = s22().getMachineId;
    break;
  default:
    e22.getMachineId = Am = t22().getMachineId;
}
