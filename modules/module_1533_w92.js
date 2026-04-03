// Module: w92
// Params: H92

Object.defineProperty(H92, '__esModule', { value: !0 });
H92.processDetector = void 0;
var Uf6 = C4(),
  UN = wN(),
  Nf6 = D1('os');
class K92 {
  detect(A) {
    let B = {
      [UN.SEMRESATTRS_PROCESS_PID]: process.pid,
      [UN.SEMRESATTRS_PROCESS_EXECUTABLE_NAME]: process.title,
      [UN.SEMRESATTRS_PROCESS_EXECUTABLE_PATH]: process.execPath,
      [UN.SEMRESATTRS_PROCESS_COMMAND_ARGS]: [
        process.argv[0],
        ...process.execArgv,
        ...process.argv.slice(1),
      ],
      [UN.SEMRESATTRS_PROCESS_RUNTIME_VERSION]: process.versions.node,
      [UN.SEMRESATTRS_PROCESS_RUNTIME_NAME]: 'nodejs',
      [UN.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION]: 'Node.js',
    };
    if (process.argv.length > 1) B[UN.SEMRESATTRS_PROCESS_COMMAND] = process.argv[1];
    try {
      let Q = Nf6.userInfo();
      B[UN.SEMRESATTRS_PROCESS_OWNER] = Q.username;
    } catch (Q) {
      Uf6.diag.debug(`error obtaining process owner: ${Q}`);
    }
    return { attributes: B };
  }
}
H92.processDetector = new K92();
