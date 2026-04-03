// Module: Ds
// Params: tR0

Object.defineProperty(tR0, '__esModule', { value: !0 });
tR0.DefaultTransporter = void 0;
var D06 = EV(),
  Z06 = rR0(),
  Y06 = qg1(),
  oR0 = 'google-api-nodejs-client';
class Gs {
  constructor() {
    this.instance = new D06.Gaxios();
  }
  configure(A = {}) {
    if (((A.headers = A.headers || {}), typeof window === 'undefined')) {
      let B = A.headers['User-Agent'];
      if (!B) A.headers['User-Agent'] = Gs.USER_AGENT;
      else if (!B.includes(`${oR0}/`)) A.headers['User-Agent'] = `${B} ${Gs.USER_AGENT}`;
      if (!A.headers['x-goog-api-client']) {
        let Q = process.version.replace(/^v/, '');
        A.headers['x-goog-api-client'] = `gl-node/${Q}`;
      }
    }
    return A;
  }
  request(A) {
    return (
      (A = this.configure(A)),
      Z06.validate(A),
      this.instance.request(A).catch((B) => {
        throw this.processError(B);
      })
    );
  }
  get defaults() {
    return this.instance.defaults;
  }
  set defaults(A) {
    this.instance.defaults = A;
  }
  processError(A) {
    let B = A.response,
      Q = A,
      I = B ? B.data : null;
    if (B && I && I.error && B.status !== 200)
      if (typeof I.error === 'string') ((Q.message = I.error), (Q.status = B.status));
      else if (Array.isArray(I.error.errors))
        ((Q.message = I.error.errors.map((G) => G.message).join(`
`)),
          (Q.code = I.error.code),
          (Q.errors = I.error.errors));
      else ((Q.message = I.error.message), (Q.code = I.error.code));
    else if (B && B.status >= 400) ((Q.message = I), (Q.status = B.status));
    return Q;
  }
}
tR0.DefaultTransporter = Gs;
Gs.USER_AGENT = `${oR0}/${Y06.version}`;
