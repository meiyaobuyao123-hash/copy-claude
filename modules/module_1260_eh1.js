// Module: eh1
// Params: WV8,G_0

var bg = 0,
  ih1 = 1000,
  nh1 = (ih1 >> 1) - 1,
  oU,
  ah1 = Symbol('kFastTimer'),
  tU = [],
  sh1 = -2,
  rh1 = -1,
  Q_0 = 0,
  B_0 = 1;
function oh1() {
  bg += nh1;
  let A = 0,
    B = tU.length;
  while (A < B) {
    let Q = tU[A];
    if (Q._state === Q_0) ((Q._idleStart = bg - nh1), (Q._state = B_0));
    else if (Q._state === B_0 && bg >= Q._idleStart + Q._idleTimeout)
      ((Q._state = rh1), (Q._idleStart = -1), Q._onTimeout(Q._timerArg));
    if (Q._state === rh1) {
      if (((Q._state = sh1), --B !== 0)) tU[A] = tU[B];
    } else ++A;
  }
  if (((tU.length = B), tU.length !== 0)) I_0();
}
function I_0() {
  if (oU) oU.refresh();
  else if ((clearTimeout(oU), (oU = setTimeout(oh1, nh1)), oU.unref)) oU.unref();
}
class th1 {
  [ah1] = !0;
  _state = sh1;
  _idleTimeout = -1;
  _idleStart = -1;
  _onTimeout;
  _timerArg;
  constructor(A, B, Q) {
    ((this._onTimeout = A), (this._idleTimeout = B), (this._timerArg = Q), this.refresh());
  }
  refresh() {
    if (this._state === sh1) tU.push(this);
    if (!oU || tU.length === 1) I_0();
    this._state = Q_0;
  }
  clear() {
    ((this._state = rh1), (this._idleStart = -1));
  }
}
G_0.exports = {
  setTimeout(A, B, Q) {
    return B <= ih1 ? setTimeout(A, B, Q) : new th1(A, B, Q);
  },
  clearTimeout(A) {
    if (A[ah1]) A.clear();
    else clearTimeout(A);
  },
  setFastTimeout(A, B, Q) {
    return new th1(A, B, Q);
  },
  clearFastTimeout(A) {
    A.clear();
  },
  now() {
    return bg;
  },
  tick(A = 0) {
    ((bg += A - ih1 + 1), oh1(), oh1());
  },
  reset() {
    ((bg = 0), (tU.length = 0), clearTimeout(oU), (oU = null));
  },
  kFastTimer: ah1,
};
