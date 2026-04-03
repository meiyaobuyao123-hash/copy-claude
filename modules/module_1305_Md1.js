// Module: Md1
// Params: oV8,gx0

var { promisify: jI6 } = D1('node:util'),
  yI6 = tg(),
  { buildMockDispatch: kI6 } = os(),
  {
    kDispatches: jx0,
    kMockAgent: yx0,
    kClose: kx0,
    kOriginalClose: xx0,
    kOrigin: fx0,
    kOriginalDispatch: xI6,
    kConnected: qd1,
  } = Zh(),
  { MockInterceptor: fI6 } = Ud1(),
  vx0 = uB(),
  { InvalidArgumentError: vI6 } = y5();
class bx0 extends yI6 {
  constructor(A, B) {
    super(A, B);
    if (!B || !B.agent || typeof B.agent.dispatch !== 'function')
      throw new vI6('Argument opts.agent must implement Agent');
    ((this[yx0] = B.agent),
      (this[fx0] = A),
      (this[jx0] = []),
      (this[qd1] = 1),
      (this[xI6] = this.dispatch),
      (this[xx0] = this.close.bind(this)),
      (this.dispatch = kI6.call(this)),
      (this.close = this[kx0]));
  }
  get [vx0.kConnected]() {
    return this[qd1];
  }
  intercept(A) {
    return new fI6(A, this[jx0]);
  }
  async [kx0]() {
    (await jI6(this[xx0])(), (this[qd1] = 0), this[yx0][vx0.kClients].delete(this[fx0]));
  }
}
gx0.exports = bx0;
