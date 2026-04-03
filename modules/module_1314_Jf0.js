// Module: Jf0
// Params: ZK8,Ff0

var { isIP: WG6 } = D1('node:net'),
  { lookup: FG6 } = D1('node:dns'),
  JG6 = FW1(),
  { InvalidArgumentError: Yh, InformationalError: CG6 } = y5(),
  Zf0 = Math.pow(2, 31) - 1;
class Yf0 {
  #A = 0;
  #B = 0;
  #Q = new Map();
  dualStack = !0;
  affinity = null;
  lookup = null;
  pick = null;
  constructor(A) {
    ((this.#A = A.maxTTL),
      (this.#B = A.maxItems),
      (this.dualStack = A.dualStack),
      (this.affinity = A.affinity),
      (this.lookup = A.lookup ?? this.#I),
      (this.pick = A.pick ?? this.#G));
  }
  get full() {
    return this.#Q.size === this.#B;
  }
  runLookup(A, B, Q) {
    let I = this.#Q.get(A.hostname);
    if (I == null && this.full) {
      Q(null, A.origin);
      return;
    }
    let G = {
      affinity: this.affinity,
      dualStack: this.dualStack,
      lookup: this.lookup,
      pick: this.pick,
      ...B.dns,
      maxTTL: this.#A,
      maxItems: this.#B,
    };
    if (I == null)
      this.lookup(A, G, (D, Z) => {
        if (D || Z == null || Z.length === 0) {
          Q(D ?? new CG6('No DNS entries found'));
          return;
        }
        this.setRecords(A, Z);
        let Y = this.#Q.get(A.hostname),
          W = this.pick(A, Y, G.affinity),
          F;
        if (typeof W.port === 'number') F = `:${W.port}`;
        else if (A.port !== '') F = `:${A.port}`;
        else F = '';
        Q(null, `${A.protocol}//${W.family === 6 ? `[${W.address}]` : W.address}${F}`);
      });
    else {
      let D = this.pick(A, I, G.affinity);
      if (D == null) {
        (this.#Q.delete(A.hostname), this.runLookup(A, B, Q));
        return;
      }
      let Z;
      if (typeof D.port === 'number') Z = `:${D.port}`;
      else if (A.port !== '') Z = `:${A.port}`;
      else Z = '';
      Q(null, `${A.protocol}//${D.family === 6 ? `[${D.address}]` : D.address}${Z}`);
    }
  }
  #I(A, B, Q) {
    FG6(
      A.hostname,
      { all: !0, family: this.dualStack === !1 ? this.affinity : 0, order: 'ipv4first' },
      (I, G) => {
        if (I) return Q(I);
        let D = new Map();
        for (let Z of G) D.set(`${Z.address}:${Z.family}`, Z);
        Q(null, D.values());
      }
    );
  }
  #G(A, B, Q) {
    let I = null,
      { records: G, offset: D } = B,
      Z;
    if (this.dualStack) {
      if (Q == null)
        if (D == null || D === Zf0) ((B.offset = 0), (Q = 4));
        else (B.offset++, (Q = (B.offset & 1) === 1 ? 6 : 4));
      if (G[Q] != null && G[Q].ips.length > 0) Z = G[Q];
      else Z = G[Q === 4 ? 6 : 4];
    } else Z = G[Q];
    if (Z == null || Z.ips.length === 0) return I;
    if (Z.offset == null || Z.offset === Zf0) Z.offset = 0;
    else Z.offset++;
    let Y = Z.offset % Z.ips.length;
    if (((I = Z.ips[Y] ?? null), I == null)) return I;
    if (Date.now() - I.timestamp > I.ttl) return (Z.ips.splice(Y, 1), this.pick(A, B, Q));
    return I;
  }
  setRecords(A, B) {
    let Q = Date.now(),
      I = { records: { 4: null, 6: null } };
    for (let G of B) {
      if (((G.timestamp = Q), typeof G.ttl === 'number')) G.ttl = Math.min(G.ttl, this.#A);
      else G.ttl = this.#A;
      let D = I.records[G.family] ?? { ips: [] };
      (D.ips.push(G), (I.records[G.family] = D));
    }
    this.#Q.set(A.hostname, I);
  }
  getHandler(A, B) {
    return new Wf0(this, A, B);
  }
}
class Wf0 extends JG6 {
  #A = null;
  #B = null;
  #Q = null;
  #I = null;
  #G = null;
  constructor(A, { origin: B, handler: Q, dispatch: I }, G) {
    super(Q);
    ((this.#G = B), (this.#I = Q), (this.#B = { ...G }), (this.#A = A), (this.#Q = I));
  }
  onError(A) {
    switch (A.code) {
      case 'ETIMEDOUT':
      case 'ECONNREFUSED': {
        if (this.#A.dualStack) {
          this.#A.runLookup(this.#G, this.#B, (B, Q) => {
            if (B) return this.#I.onError(B);
            let I = { ...this.#B, origin: Q };
            this.#Q(I, this);
          });
          return;
        }
        this.#I.onError(A);
        return;
      }
      case 'ENOTFOUND':
        this.#A.deleteRecord(this.#G);
      default:
        this.#I.onError(A);
        break;
    }
  }
}
Ff0.exports = (A) => {
  if (A?.maxTTL != null && (typeof A?.maxTTL !== 'number' || A?.maxTTL < 0))
    throw new Yh('Invalid maxTTL. Must be a positive number');
  if (A?.maxItems != null && (typeof A?.maxItems !== 'number' || A?.maxItems < 1))
    throw new Yh('Invalid maxItems. Must be a positive number and greater than zero');
  if (A?.affinity != null && A?.affinity !== 4 && A?.affinity !== 6)
    throw new Yh('Invalid affinity. Must be either 4 or 6');
  if (A?.dualStack != null && typeof A?.dualStack !== 'boolean')
    throw new Yh('Invalid dualStack. Must be a boolean');
  if (A?.lookup != null && typeof A?.lookup !== 'function')
    throw new Yh('Invalid lookup. Must be a function');
  if (A?.pick != null && typeof A?.pick !== 'function')
    throw new Yh('Invalid pick. Must be a function');
  let B = A?.dualStack ?? !0,
    Q;
  if (B) Q = A?.affinity ?? null;
  else Q = A?.affinity ?? 4;
  let I = {
      maxTTL: A?.maxTTL ?? 1e4,
      lookup: A?.lookup ?? null,
      pick: A?.pick ?? null,
      dualStack: B,
      affinity: Q,
      maxItems: A?.maxItems ?? 1 / 0,
    },
    G = new Yf0(I);
  return (D) => {
    return function Z(Y, W) {
      let F = Y.origin.constructor === URL ? Y.origin : new URL(Y.origin);
      if (WG6(F.hostname) !== 0) return D(Y, W);
      return (
        G.runLookup(F, Y, (J, C) => {
          if (J) return W.onError(J);
          let X = null;
          ((X = {
            ...Y,
            servername: F.hostname,
            origin: C,
            headers: { host: F.hostname, ...Y.headers },
          }),
            D(X, G.getHandler({ origin: F, dispatch: D, handler: W }, Y)));
        }),
        !0
      );
    };
  };
};
