// Module: VP0
// Params: CP0

Object.defineProperty(CP0, '__esModule', { value: !0 });
CP0.PluggableAuthHandler = void 0;
var M96 = YY1(),
  OS = Mh1(),
  L96 = D1('child_process'),
  Lh1 = D1('fs');
class Rh1 {
  constructor(A) {
    if (!A.command) throw new Error('No command provided.');
    if (
      ((this.commandComponents = Rh1.parseCommand(A.command)),
      (this.timeoutMillis = A.timeoutMillis),
      !this.timeoutMillis)
    )
      throw new Error('No timeoutMillis provided.');
    this.outputFile = A.outputFile;
  }
  retrieveResponseFromExecutable(A) {
    return new Promise((B, Q) => {
      let I = L96.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
          env: { ...process.env, ...Object.fromEntries(A) },
        }),
        G = '';
      (I.stdout.on('data', (Z) => {
        G += Z;
      }),
        I.stderr.on('data', (Z) => {
          G += Z;
        }));
      let D = setTimeout(() => {
        return (
          I.removeAllListeners(),
          I.kill(),
          Q(new Error('The executable failed to finish within the timeout specified.'))
        );
      }, this.timeoutMillis);
      I.on('close', (Z) => {
        if ((clearTimeout(D), Z === 0))
          try {
            let Y = JSON.parse(G),
              W = new OS.ExecutableResponse(Y);
            return B(W);
          } catch (Y) {
            if (Y instanceof OS.ExecutableResponseError) return Q(Y);
            return Q(
              new OS.ExecutableResponseError(`The executable returned an invalid response: ${G}`)
            );
          }
        else return Q(new M96.ExecutableError(G, Z.toString()));
      });
    });
  }
  async retrieveCachedResponse() {
    if (!this.outputFile || this.outputFile.length === 0) return;
    let A;
    try {
      A = await Lh1.promises.realpath(this.outputFile);
    } catch (Q) {
      return;
    }
    if (!(await Lh1.promises.lstat(A)).isFile()) return;
    let B = await Lh1.promises.readFile(A, { encoding: 'utf8' });
    if (B === '') return;
    try {
      let Q = JSON.parse(B);
      if (new OS.ExecutableResponse(Q).isValid()) return new OS.ExecutableResponse(Q);
      return;
    } catch (Q) {
      if (Q instanceof OS.ExecutableResponseError) throw Q;
      throw new OS.ExecutableResponseError(`The output file contained an invalid response: ${B}`);
    }
  }
  static parseCommand(A) {
    let B = A.match(/(?:[^\s"]+|"[^"]*")+/g);
    if (!B) throw new Error(`Provided command: "${A}" could not be parsed.`);
    for (let Q = 0; Q < B.length; Q++)
      if (B[Q][0] === '"' && B[Q].slice(-1) === '"') B[Q] = B[Q].slice(1, -1);
    return B;
  }
}
CP0.PluggableAuthHandler = Rh1;
