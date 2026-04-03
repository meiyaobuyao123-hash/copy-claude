// Module: pm1
// Params: jV8,_y0

var YQ6 = vg(),
  WQ6 = gm1(),
  {
    kConnected: hm1,
    kSize: Ny0,
    kRunning: $y0,
    kPending: qy0,
    kQueued: ms,
    kBusy: FQ6,
    kFree: JQ6,
    kUrl: CQ6,
    kClose: XQ6,
    kDestroy: VQ6,
    kDispatch: KQ6,
  } = uB(),
  HQ6 = Uy0(),
  MY = Symbol('clients'),
  XZ = Symbol('needDrain'),
  ds = Symbol('queue'),
  mm1 = Symbol('closed resolve'),
  dm1 = Symbol('onDrain'),
  My0 = Symbol('onConnect'),
  Ly0 = Symbol('onDisconnect'),
  Ry0 = Symbol('onConnectionError'),
  um1 = Symbol('get dispatcher'),
  Ty0 = Symbol('add client'),
  Py0 = Symbol('remove client'),
  Oy0 = Symbol('stats');
class Sy0 extends YQ6 {
  constructor() {
    super();
    ((this[ds] = new WQ6()), (this[MY] = []), (this[ms] = 0));
    let A = this;
    ((this[dm1] = function B(Q, I) {
      let G = A[ds],
        D = !1;
      while (!D) {
        let Z = G.shift();
        if (!Z) break;
        (A[ms]--, (D = !this.dispatch(Z.opts, Z.handler)));
      }
      if (((this[XZ] = D), !this[XZ] && A[XZ])) ((A[XZ] = !1), A.emit('drain', Q, [A, ...I]));
      if (A[mm1] && G.isEmpty()) Promise.all(A[MY].map((Z) => Z.close())).then(A[mm1]);
    }),
      (this[My0] = (B, Q) => {
        A.emit('connect', B, [A, ...Q]);
      }),
      (this[Ly0] = (B, Q, I) => {
        A.emit('disconnect', B, [A, ...Q], I);
      }),
      (this[Ry0] = (B, Q, I) => {
        A.emit('connectionError', B, [A, ...Q], I);
      }),
      (this[Oy0] = new HQ6(this)));
  }
  get [FQ6]() {
    return this[XZ];
  }
  get [hm1]() {
    return this[MY].filter((A) => A[hm1]).length;
  }
  get [JQ6]() {
    return this[MY].filter((A) => A[hm1] && !A[XZ]).length;
  }
  get [qy0]() {
    let A = this[ms];
    for (let { [qy0]: B } of this[MY]) A += B;
    return A;
  }
  get [$y0]() {
    let A = 0;
    for (let { [$y0]: B } of this[MY]) A += B;
    return A;
  }
  get [Ny0]() {
    let A = this[ms];
    for (let { [Ny0]: B } of this[MY]) A += B;
    return A;
  }
  get stats() {
    return this[Oy0];
  }
  async [XQ6]() {
    if (this[ds].isEmpty()) await Promise.all(this[MY].map((A) => A.close()));
    else
      await new Promise((A) => {
        this[mm1] = A;
      });
  }
  async [VQ6](A) {
    while (!0) {
      let B = this[ds].shift();
      if (!B) break;
      B.handler.onError(A);
    }
    await Promise.all(this[MY].map((B) => B.destroy(A)));
  }
  [KQ6](A, B) {
    let Q = this[um1]();
    if (!Q) ((this[XZ] = !0), this[ds].push({ opts: A, handler: B }), this[ms]++);
    else if (!Q.dispatch(A, B)) ((Q[XZ] = !0), (this[XZ] = !this[um1]()));
    return !this[XZ];
  }
  [Ty0](A) {
    if (
      (A.on('drain', this[dm1])
        .on('connect', this[My0])
        .on('disconnect', this[Ly0])
        .on('connectionError', this[Ry0]),
      this[MY].push(A),
      this[XZ])
    )
      queueMicrotask(() => {
        if (this[XZ]) this[dm1](A[CQ6], [this, A]);
      });
    return this;
  }
  [Py0](A) {
    (A.close(() => {
      let B = this[MY].indexOf(A);
      if (B !== -1) this[MY].splice(B, 1);
    }),
      (this[XZ] = this[MY].some((B) => !B[XZ] && B.closed !== !0 && B.destroyed !== !0)));
  }
}
_y0.exports = {
  PoolBase: Sy0,
  kClients: MY,
  kNeedDrain: XZ,
  kAddClient: Ty0,
  kRemoveClient: Py0,
  kGetDispatcher: um1,
};
