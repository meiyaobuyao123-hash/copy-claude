// Module: $d1
// Params: rV8,_x0

var { promisify: RI6 } = D1('node:util'),
  OI6 = hs(),
  { buildMockDispatch: TI6 } = os(),
  {
    kDispatches: Mx0,
    kMockAgent: Lx0,
    kClose: Rx0,
    kOriginalClose: Ox0,
    kOrigin: Tx0,
    kOriginalDispatch: PI6,
    kConnected: Nd1,
  } = Zh(),
  { MockInterceptor: SI6 } = Ud1(),
  Px0 = uB(),
  { InvalidArgumentError: _I6 } = y5();
class Sx0 extends OI6 {
  constructor(A, B) {
    super(A, B);
    if (!B || !B.agent || typeof B.agent.dispatch !== 'function')
      throw new _I6('Argument opts.agent must implement Agent');
    ((this[Lx0] = B.agent),
      (this[Tx0] = A),
      (this[Mx0] = []),
      (this[Nd1] = 1),
      (this[PI6] = this.dispatch),
      (this[Ox0] = this.close.bind(this)),
      (this.dispatch = TI6.call(this)),
      (this.close = this[Rx0]));
  }
  get [Px0.kConnected]() {
    return this[Nd1];
  }
  intercept(A) {
    return new SI6(A, this[Mx0]);
  }
  async [Rx0]() {
    (await RI6(this[Ox0])(), (this[Nd1] = 0), this[Lx0][Px0.kClients].delete(this[Tx0]));
  }
}
_x0.exports = Sx0;
