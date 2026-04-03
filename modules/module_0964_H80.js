// Module: H80
// Params: es5,K80

var { kForOnEventAttribute: ii, kListener: Ly1 } = wU(),
  Y80 = Symbol('kCode'),
  W80 = Symbol('kData'),
  F80 = Symbol('kError'),
  J80 = Symbol('kMessage'),
  C80 = Symbol('kReason'),
  dv = Symbol('kTarget'),
  X80 = Symbol('kType'),
  V80 = Symbol('kWasClean');
class vM {
  constructor(A) {
    ((this[dv] = null), (this[X80] = A));
  }
  get target() {
    return this[dv];
  }
  get type() {
    return this[X80];
  }
}
Object.defineProperty(vM.prototype, 'target', { enumerable: !0 });
Object.defineProperty(vM.prototype, 'type', { enumerable: !0 });
class uv extends vM {
  constructor(A, B = {}) {
    super(A);
    ((this[Y80] = B.code === void 0 ? 0 : B.code),
      (this[C80] = B.reason === void 0 ? '' : B.reason),
      (this[V80] = B.wasClean === void 0 ? !1 : B.wasClean));
  }
  get code() {
    return this[Y80];
  }
  get reason() {
    return this[C80];
  }
  get wasClean() {
    return this[V80];
  }
}
Object.defineProperty(uv.prototype, 'code', { enumerable: !0 });
Object.defineProperty(uv.prototype, 'reason', { enumerable: !0 });
Object.defineProperty(uv.prototype, 'wasClean', { enumerable: !0 });
class ni extends vM {
  constructor(A, B = {}) {
    super(A);
    ((this[F80] = B.error === void 0 ? null : B.error),
      (this[J80] = B.message === void 0 ? '' : B.message));
  }
  get error() {
    return this[F80];
  }
  get message() {
    return this[J80];
  }
}
Object.defineProperty(ni.prototype, 'error', { enumerable: !0 });
Object.defineProperty(ni.prototype, 'message', { enumerable: !0 });
class kQ1 extends vM {
  constructor(A, B = {}) {
    super(A);
    this[W80] = B.data === void 0 ? null : B.data;
  }
  get data() {
    return this[W80];
  }
}
Object.defineProperty(kQ1.prototype, 'data', { enumerable: !0 });
var U$4 = {
  addEventListener(A, B, Q = {}) {
    for (let G of this.listeners(A)) if (!Q[ii] && G[Ly1] === B && !G[ii]) return;
    let I;
    if (A === 'message')
      I = function G(D, Z) {
        let Y = new kQ1('message', { data: Z ? D : D.toString() });
        ((Y[dv] = this), yQ1(B, this, Y));
      };
    else if (A === 'close')
      I = function G(D, Z) {
        let Y = new uv('close', {
          code: D,
          reason: Z.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent,
        });
        ((Y[dv] = this), yQ1(B, this, Y));
      };
    else if (A === 'error')
      I = function G(D) {
        let Z = new ni('error', { error: D, message: D.message });
        ((Z[dv] = this), yQ1(B, this, Z));
      };
    else if (A === 'open')
      I = function G() {
        let D = new vM('open');
        ((D[dv] = this), yQ1(B, this, D));
      };
    else return;
    if (((I[ii] = !!Q[ii]), (I[Ly1] = B), Q.once)) this.once(A, I);
    else this.on(A, I);
  },
  removeEventListener(A, B) {
    for (let Q of this.listeners(A))
      if (Q[Ly1] === B && !Q[ii]) {
        this.removeListener(A, Q);
        break;
      }
  },
};
K80.exports = { CloseEvent: uv, ErrorEvent: ni, Event: vM, EventTarget: U$4, MessageEvent: kQ1 };
function yQ1(A, B, Q) {
  if (typeof A === 'object' && A.handleEvent) A.handleEvent.call(A, Q);
  else A.call(B, Q);
}
