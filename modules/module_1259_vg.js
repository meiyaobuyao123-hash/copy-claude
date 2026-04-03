// Module: vg
// Params: YV8,A_0

var k66 = Es(),
  { ClientDestroyedError: ch1, ClientClosedError: x66, InvalidArgumentError: kg } = y5(),
  {
    kDestroy: f66,
    kClose: v66,
    kClosed: Us,
    kDestroyed: xg,
    kDispatch: lh1,
    kInterceptors: PS,
  } = uB(),
  rU = Symbol('onDestroyed'),
  fg = Symbol('onClosed'),
  EY1 = Symbol('Intercepted Dispatch');
class eS0 extends k66 {
  constructor() {
    super();
    ((this[xg] = !1), (this[rU] = null), (this[Us] = !1), (this[fg] = []));
  }
  get destroyed() {
    return this[xg];
  }
  get closed() {
    return this[Us];
  }
  get interceptors() {
    return this[PS];
  }
  set interceptors(A) {
    if (A) {
      for (let B = A.length - 1; B >= 0; B--)
        if (typeof this[PS][B] !== 'function') throw new kg('interceptor must be an function');
    }
    this[PS] = A;
  }
  close(A) {
    if (A === void 0)
      return new Promise((Q, I) => {
        this.close((G, D) => {
          return G ? I(G) : Q(D);
        });
      });
    if (typeof A !== 'function') throw new kg('invalid callback');
    if (this[xg]) {
      queueMicrotask(() => A(new ch1(), null));
      return;
    }
    if (this[Us]) {
      if (this[fg]) this[fg].push(A);
      else queueMicrotask(() => A(null, null));
      return;
    }
    ((this[Us] = !0), this[fg].push(A));
    let B = () => {
      let Q = this[fg];
      this[fg] = null;
      for (let I = 0; I < Q.length; I++) Q[I](null, null);
    };
    this[v66]()
      .then(() => this.destroy())
      .then(() => {
        queueMicrotask(B);
      });
  }
  destroy(A, B) {
    if (typeof A === 'function') ((B = A), (A = null));
    if (B === void 0)
      return new Promise((I, G) => {
        this.destroy(A, (D, Z) => {
          return D ? G(D) : I(Z);
        });
      });
    if (typeof B !== 'function') throw new kg('invalid callback');
    if (this[xg]) {
      if (this[rU]) this[rU].push(B);
      else queueMicrotask(() => B(null, null));
      return;
    }
    if (!A) A = new ch1();
    ((this[xg] = !0), (this[rU] = this[rU] || []), this[rU].push(B));
    let Q = () => {
      let I = this[rU];
      this[rU] = null;
      for (let G = 0; G < I.length; G++) I[G](null, null);
    };
    this[f66](A).then(() => {
      queueMicrotask(Q);
    });
  }
  [EY1](A, B) {
    if (!this[PS] || this[PS].length === 0) return ((this[EY1] = this[lh1]), this[lh1](A, B));
    let Q = this[lh1].bind(this);
    for (let I = this[PS].length - 1; I >= 0; I--) Q = this[PS][I](Q);
    return ((this[EY1] = Q), Q(A, B));
  }
  dispatch(A, B) {
    if (!B || typeof B !== 'object') throw new kg('handler must be an object');
    try {
      if (!A || typeof A !== 'object') throw new kg('opts must be an object.');
      if (this[xg] || this[rU]) throw new ch1();
      if (this[Us]) throw new x66();
      return this[EY1](A, B);
    } catch (Q) {
      if (typeof B.onError !== 'function') throw new kg('invalid onError method');
      return (B.onError(Q), !1);
    }
  }
}
A_0.exports = eS0;
