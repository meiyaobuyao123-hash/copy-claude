// Module: nx0
// Params: AK8,ix0

var { kClients: hS } = uB(),
  pI6 = eg(),
  {
    kAgent: Ld1,
    kMockAgentSet: GW1,
    kMockAgentGet: px0,
    kDispatches: Rd1,
    kIsMockActive: DW1,
    kNetConnect: mS,
    kGetNetConnect: cI6,
    kOptions: ZW1,
    kFactory: YW1,
  } = Zh(),
  lI6 = $d1(),
  iI6 = Md1(),
  { matchValue: nI6, buildMockOptions: aI6 } = os(),
  { InvalidArgumentError: cx0, UndiciError: sI6 } = y5(),
  rI6 = Es(),
  oI6 = mx0(),
  tI6 = ux0();
class lx0 extends rI6 {
  constructor(A) {
    super(A);
    if (((this[mS] = !0), (this[DW1] = !0), A?.agent && typeof A.agent.dispatch !== 'function'))
      throw new cx0('Argument opts.agent must implement Agent');
    let B = A?.agent ? A.agent : new pI6(A);
    ((this[Ld1] = B), (this[hS] = B[hS]), (this[ZW1] = aI6(A)));
  }
  get(A) {
    let B = this[px0](A);
    if (!B) ((B = this[YW1](A)), this[GW1](A, B));
    return B;
  }
  dispatch(A, B) {
    return (this.get(A.origin), this[Ld1].dispatch(A, B));
  }
  async close() {
    (await this[Ld1].close(), this[hS].clear());
  }
  deactivate() {
    this[DW1] = !1;
  }
  activate() {
    this[DW1] = !0;
  }
  enableNetConnect(A) {
    if (typeof A === 'string' || typeof A === 'function' || A instanceof RegExp)
      if (Array.isArray(this[mS])) this[mS].push(A);
      else this[mS] = [A];
    else if (typeof A === 'undefined') this[mS] = !0;
    else throw new cx0('Unsupported matcher. Must be one of String|Function|RegExp.');
  }
  disableNetConnect() {
    this[mS] = !1;
  }
  get isMockActive() {
    return this[DW1];
  }
  [GW1](A, B) {
    this[hS].set(A, B);
  }
  [YW1](A) {
    let B = Object.assign({ agent: this }, this[ZW1]);
    return this[ZW1] && this[ZW1].connections === 1 ? new lI6(A, B) : new iI6(A, B);
  }
  [px0](A) {
    let B = this[hS].get(A);
    if (B) return B;
    if (typeof A !== 'string') {
      let Q = this[YW1]('http://localhost:9999');
      return (this[GW1](A, Q), Q);
    }
    for (let [Q, I] of Array.from(this[hS]))
      if (I && typeof Q !== 'string' && nI6(Q, A)) {
        let G = this[YW1](A);
        return (this[GW1](A, G), (G[Rd1] = I[Rd1]), G);
      }
  }
  [cI6]() {
    return this[mS];
  }
  pendingInterceptors() {
    let A = this[hS];
    return Array.from(A.entries())
      .flatMap(([B, Q]) => Q[Rd1].map((I) => ({ ...I, origin: B })))
      .filter(({ pending: B }) => B);
  }
  assertNoPendingInterceptors({ pendingInterceptorsFormatter: A = new tI6() } = {}) {
    let B = this.pendingInterceptors();
    if (B.length === 0) return;
    let Q = new oI6('interceptor', 'interceptors').pluralize(B.length);
    throw new sI6(
      `
${Q.count} ${Q.noun} ${Q.is} pending:

${A.format(B)}
`.trim()
    );
  }
}
ix0.exports = lx0;
