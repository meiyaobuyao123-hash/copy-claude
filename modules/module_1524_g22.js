// Module: g22
// Params: v22

Object.defineProperty(v22, '__esModule', { value: !0 });
v22.getMachineId = void 0;
var tx6 = UJ1(),
  ex6 = C4();
async function Af6() {
  try {
    let B = (await tx6.execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout
      .split(
        `
`
      )
      .find((I) => I.includes('IOPlatformUUID'));
    if (!B) return;
    let Q = B.split('" = "');
    if (Q.length === 2) return Q[1].slice(0, -1);
  } catch (A) {
    ex6.diag.debug(`error reading machine id: ${A}`);
  }
  return;
}
v22.getMachineId = Af6;
