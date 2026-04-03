// Module: eg
// Params: xV8,ry0

var { InvalidArgumentError: sY1 } = y5(),
  {
    kClients: xL,
    kRunning: py0,
    kClose: xQ6,
    kDestroy: fQ6,
    kDispatch: vQ6,
    kInterceptors: bQ6,
  } = uB(),
  gQ6 = vg(),
  hQ6 = tg(),
  mQ6 = hs(),
  dQ6 = I6(),
  uQ6 = cY1(),
  cy0 = Symbol('onConnect'),
  ly0 = Symbol('onDisconnect'),
  iy0 = Symbol('onConnectionError'),
  pQ6 = Symbol('maxRedirections'),
  ny0 = Symbol('onDrain'),
  ay0 = Symbol('factory'),
  am1 = Symbol('options');
function cQ6(A, B) {
  return B && B.connections === 1 ? new mQ6(A, B) : new hQ6(A, B);
}
class sy0 extends gQ6 {
  constructor({ factory: A = cQ6, maxRedirections: B = 0, connect: Q, ...I } = {}) {
    super();
    if (typeof A !== 'function') throw new sY1('factory must be a function.');
    if (Q != null && typeof Q !== 'function' && typeof Q !== 'object')
      throw new sY1('connect must be a function or an object');
    if (!Number.isInteger(B) || B < 0) throw new sY1('maxRedirections must be a positive number');
    if (Q && typeof Q !== 'function') Q = { ...Q };
    ((this[bQ6] =
      I.interceptors?.Agent && Array.isArray(I.interceptors.Agent)
        ? I.interceptors.Agent
        : [uQ6({ maxRedirections: B })]),
      (this[am1] = { ...dQ6.deepClone(I), connect: Q }),
      (this[am1].interceptors = I.interceptors ? { ...I.interceptors } : void 0),
      (this[pQ6] = B),
      (this[ay0] = A),
      (this[xL] = new Map()),
      (this[ny0] = (G, D) => {
        this.emit('drain', G, [this, ...D]);
      }),
      (this[cy0] = (G, D) => {
        this.emit('connect', G, [this, ...D]);
      }),
      (this[ly0] = (G, D, Z) => {
        this.emit('disconnect', G, [this, ...D], Z);
      }),
      (this[iy0] = (G, D, Z) => {
        this.emit('connectionError', G, [this, ...D], Z);
      }));
  }
  get [py0]() {
    let A = 0;
    for (let B of this[xL].values()) A += B[py0];
    return A;
  }
  [vQ6](A, B) {
    let Q;
    if (A.origin && (typeof A.origin === 'string' || A.origin instanceof URL)) Q = String(A.origin);
    else throw new sY1('opts.origin must be a non-empty string or URL.');
    let I = this[xL].get(Q);
    if (!I)
      ((I = this[ay0](A.origin, this[am1])
        .on('drain', this[ny0])
        .on('connect', this[cy0])
        .on('disconnect', this[ly0])
        .on('connectionError', this[iy0])),
        this[xL].set(Q, I));
    return I.dispatch(A, B);
  }
  async [xQ6]() {
    let A = [];
    for (let B of this[xL].values()) A.push(B.close());
    (this[xL].clear(), await Promise.all(A));
  }
  async [fQ6](A) {
    let B = [];
    for (let Q of this[xL].values()) B.push(Q.destroy(A));
    (this[xL].clear(), await Promise.all(B));
  }
}
ry0.exports = sy0;
