// Module: tg
// Params: yV8,vy0

var { PoolBase: zQ6, kClients: jy0, kNeedDrain: wQ6, kAddClient: EQ6, kGetDispatcher: UQ6 } = pm1(),
  NQ6 = hs(),
  { InvalidArgumentError: cm1 } = y5(),
  yy0 = I6(),
  { kUrl: ky0, kInterceptors: $Q6 } = uB(),
  qQ6 = Ns(),
  lm1 = Symbol('options'),
  im1 = Symbol('connections'),
  xy0 = Symbol('factory');
function MQ6(A, B) {
  return new NQ6(A, B);
}
class fy0 extends zQ6 {
  constructor(
    A,
    {
      connections: B,
      factory: Q = MQ6,
      connect: I,
      connectTimeout: G,
      tls: D,
      maxCachedSessions: Z,
      socketPath: Y,
      autoSelectFamily: W,
      autoSelectFamilyAttemptTimeout: F,
      allowH2: J,
      ...C
    } = {}
  ) {
    super();
    if (B != null && (!Number.isFinite(B) || B < 0)) throw new cm1('invalid connections');
    if (typeof Q !== 'function') throw new cm1('factory must be a function.');
    if (I != null && typeof I !== 'function' && typeof I !== 'object')
      throw new cm1('connect must be a function or an object');
    if (typeof I !== 'function')
      I = qQ6({
        ...D,
        maxCachedSessions: Z,
        allowH2: J,
        socketPath: Y,
        timeout: G,
        ...(W ? { autoSelectFamily: W, autoSelectFamilyAttemptTimeout: F } : void 0),
        ...I,
      });
    ((this[$Q6] =
      C.interceptors?.Pool && Array.isArray(C.interceptors.Pool) ? C.interceptors.Pool : []),
      (this[im1] = B || null),
      (this[ky0] = yy0.parseOrigin(A)),
      (this[lm1] = { ...yy0.deepClone(C), connect: I, allowH2: J }),
      (this[lm1].interceptors = C.interceptors ? { ...C.interceptors } : void 0),
      (this[xy0] = Q));
  }
  [UQ6]() {
    for (let A of this[jy0]) if (!A[wQ6]) return A;
    if (!this[im1] || this[jy0].length < this[im1]) {
      let A = this[xy0](this[ky0], this[lm1]);
      return (this[EQ6](A), A);
    }
  }
}
vy0.exports = fy0;
