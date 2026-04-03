// Module: ux0
// Params: eV8,dx0

var { Transform: hI6 } = D1('node:stream'),
  { Console: mI6 } = D1('node:console'),
  dI6 = process.versions.icu ? '✅' : 'Y ',
  uI6 = process.versions.icu ? '❌' : 'N ';
dx0.exports = class A {
  constructor({ disableColors: B } = {}) {
    ((this.transform = new hI6({
      transform(Q, I, G) {
        G(null, Q);
      },
    })),
      (this.logger = new mI6({ stdout: this.transform, inspectOptions: { colors: !B && !0 } })));
  }
  format(B) {
    let Q = B.map(
      ({
        method: I,
        path: G,
        data: { statusCode: D },
        persist: Z,
        times: Y,
        timesInvoked: W,
        origin: F,
      }) => ({
        Method: I,
        Origin: F,
        Path: G,
        'Status code': D,
        Persistent: Z ? dI6 : uI6,
        Invocations: W,
        Remaining: Z ? 1 / 0 : Y - W,
      })
    );
    return (this.logger.table(Q), this.transform.read().toString());
  }
};
