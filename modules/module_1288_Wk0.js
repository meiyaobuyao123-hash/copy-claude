// Module: Wk0
// Params: vV8,Yk0

var D76 = vg(),
  {
    kClose: Z76,
    kDestroy: Y76,
    kClosed: Qk0,
    kDestroyed: Ik0,
    kDispatch: W76,
    kNoProxyAgent: ls,
    kHttpProxyAgent: fL,
    kHttpsProxyAgent: bS,
  } = uB(),
  Gk0 = rm1(),
  F76 = eg(),
  J76 = { 'http:': 80, 'https:': 443 },
  Dk0 = !1;
class Zk0 extends D76 {
  #A = null;
  #B = null;
  #Q = null;
  constructor(A = {}) {
    super();
    if (((this.#Q = A), !Dk0))
      ((Dk0 = !0),
        process.emitWarning(
          'EnvHttpProxyAgent is experimental, expect them to change at any time.',
          { code: 'UNDICI-EHPA' }
        ));
    let { httpProxy: B, httpsProxy: Q, noProxy: I, ...G } = A;
    this[ls] = new F76(G);
    let D = B ?? process.env.http_proxy ?? process.env.HTTP_PROXY;
    if (D) this[fL] = new Gk0({ ...G, uri: D });
    else this[fL] = this[ls];
    let Z = Q ?? process.env.https_proxy ?? process.env.HTTPS_PROXY;
    if (Z) this[bS] = new Gk0({ ...G, uri: Z });
    else this[bS] = this[fL];
    this.#W();
  }
  [W76](A, B) {
    let Q = new URL(A.origin);
    return this.#I(Q).dispatch(A, B);
  }
  async [Z76]() {
    if ((await this[ls].close(), !this[fL][Qk0])) await this[fL].close();
    if (!this[bS][Qk0]) await this[bS].close();
  }
  async [Y76](A) {
    if ((await this[ls].destroy(A), !this[fL][Ik0])) await this[fL].destroy(A);
    if (!this[bS][Ik0]) await this[bS].destroy(A);
  }
  #I(A) {
    let { protocol: B, host: Q, port: I } = A;
    if (
      ((Q = Q.replace(/:\d*$/, '').toLowerCase()),
      (I = Number.parseInt(I, 10) || J76[B] || 0),
      !this.#G(Q, I))
    )
      return this[ls];
    if (B === 'https:') return this[bS];
    return this[fL];
  }
  #G(A, B) {
    if (this.#D) this.#W();
    if (this.#B.length === 0) return !0;
    if (this.#A === '*') return !1;
    for (let Q = 0; Q < this.#B.length; Q++) {
      let I = this.#B[Q];
      if (I.port && I.port !== B) continue;
      if (!/^[.*]/.test(I.hostname)) {
        if (A === I.hostname) return !1;
      } else if (A.endsWith(I.hostname.replace(/^\*/, ''))) return !1;
    }
    return !0;
  }
  #W() {
    let A = this.#Q.noProxy ?? this.#J,
      B = A.split(/[,\s]/),
      Q = [];
    for (let I = 0; I < B.length; I++) {
      let G = B[I];
      if (!G) continue;
      let D = G.match(/^(.+):(\d+)$/);
      Q.push({ hostname: (D ? D[1] : G).toLowerCase(), port: D ? Number.parseInt(D[2], 10) : 0 });
    }
    ((this.#A = A), (this.#B = Q));
  }
  get #D() {
    if (this.#Q.noProxy !== void 0) return !1;
    return this.#A !== this.#J;
  }
  get #J() {
    return process.env.no_proxy ?? process.env.NO_PROXY ?? '';
  }
}
Yk0.exports = Zk0;
