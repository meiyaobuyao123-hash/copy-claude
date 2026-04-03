// Module: uy0
// Params: kV8,dy0

var { BalancedPoolMissingUpstreamError: LQ6, InvalidArgumentError: RQ6 } = y5(),
  {
    PoolBase: OQ6,
    kClients: ZD,
    kNeedDrain: us,
    kAddClient: TQ6,
    kRemoveClient: PQ6,
    kGetDispatcher: SQ6,
  } = pm1(),
  _Q6 = tg(),
  { kUrl: nm1, kInterceptors: jQ6 } = uB(),
  { parseOrigin: by0 } = I6(),
  gy0 = Symbol('factory'),
  iY1 = Symbol('options'),
  hy0 = Symbol('kGreatestCommonDivisor'),
  fS = Symbol('kCurrentWeight'),
  vS = Symbol('kIndex'),
  GC = Symbol('kWeight'),
  nY1 = Symbol('kMaxWeightPerServer'),
  aY1 = Symbol('kErrorPenalty');
function yQ6(A, B) {
  if (A === 0) return B;
  while (B !== 0) {
    let Q = B;
    ((B = A % B), (A = Q));
  }
  return A;
}
function kQ6(A, B) {
  return new _Q6(A, B);
}
class my0 extends OQ6 {
  constructor(A = [], { factory: B = kQ6, ...Q } = {}) {
    super();
    if (
      ((this[iY1] = Q),
      (this[vS] = -1),
      (this[fS] = 0),
      (this[nY1] = this[iY1].maxWeightPerServer || 100),
      (this[aY1] = this[iY1].errorPenalty || 15),
      !Array.isArray(A))
    )
      A = [A];
    if (typeof B !== 'function') throw new RQ6('factory must be a function.');
    ((this[jQ6] =
      Q.interceptors?.BalancedPool && Array.isArray(Q.interceptors.BalancedPool)
        ? Q.interceptors.BalancedPool
        : []),
      (this[gy0] = B));
    for (let I of A) this.addUpstream(I);
    this._updateBalancedPoolStats();
  }
  addUpstream(A) {
    let B = by0(A).origin;
    if (this[ZD].find((I) => I[nm1].origin === B && I.closed !== !0 && I.destroyed !== !0))
      return this;
    let Q = this[gy0](B, Object.assign({}, this[iY1]));
    (this[TQ6](Q),
      Q.on('connect', () => {
        Q[GC] = Math.min(this[nY1], Q[GC] + this[aY1]);
      }),
      Q.on('connectionError', () => {
        ((Q[GC] = Math.max(1, Q[GC] - this[aY1])), this._updateBalancedPoolStats());
      }),
      Q.on('disconnect', (...I) => {
        let G = I[2];
        if (G && G.code === 'UND_ERR_SOCKET')
          ((Q[GC] = Math.max(1, Q[GC] - this[aY1])), this._updateBalancedPoolStats());
      }));
    for (let I of this[ZD]) I[GC] = this[nY1];
    return (this._updateBalancedPoolStats(), this);
  }
  _updateBalancedPoolStats() {
    let A = 0;
    for (let B = 0; B < this[ZD].length; B++) A = yQ6(this[ZD][B][GC], A);
    this[hy0] = A;
  }
  removeUpstream(A) {
    let B = by0(A).origin,
      Q = this[ZD].find((I) => I[nm1].origin === B && I.closed !== !0 && I.destroyed !== !0);
    if (Q) this[PQ6](Q);
    return this;
  }
  get upstreams() {
    return this[ZD].filter((A) => A.closed !== !0 && A.destroyed !== !0).map((A) => A[nm1].origin);
  }
  [SQ6]() {
    if (this[ZD].length === 0) throw new LQ6();
    if (!this[ZD].find((G) => !G[us] && G.closed !== !0 && G.destroyed !== !0)) return;
    if (this[ZD].map((G) => G[us]).reduce((G, D) => G && D, !0)) return;
    let Q = 0,
      I = this[ZD].findIndex((G) => !G[us]);
    while (Q++ < this[ZD].length) {
      this[vS] = (this[vS] + 1) % this[ZD].length;
      let G = this[ZD][this[vS]];
      if (G[GC] > this[ZD][I][GC] && !G[us]) I = this[vS];
      if (this[vS] === 0) {
        if (((this[fS] = this[fS] - this[hy0]), this[fS] <= 0)) this[fS] = this[nY1];
      }
      if (G[GC] >= this[fS] && !G[us]) return G;
    }
    return ((this[fS] = this[ZD][I][GC]), (this[vS] = I), this[ZD][I]);
  }
}
dy0.exports = my0;
