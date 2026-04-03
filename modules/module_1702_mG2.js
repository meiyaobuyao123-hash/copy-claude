// Module: mG2
// Params: gG2

Object.defineProperty(gG2, '__esModule', { value: !0 });
gG2.SubchannelPool = void 0;
gG2.getSubchannelPool = nn6;
var mn6 = QQ2(),
  dn6 = CG2(),
  un6 = qC(),
  pn6 = xY(),
  cn6 = bG2(),
  ln6 = 1e4;
class dC1 {
  constructor() {
    ((this.pool = Object.create(null)), (this.cleanupTimer = null));
  }
  unrefUnusedSubchannels() {
    let A = !0;
    for (let B in this.pool) {
      let I = this.pool[B].filter((G) => !G.subchannel.unrefIfOneRef());
      if (I.length > 0) A = !1;
      this.pool[B] = I;
    }
    if (A && this.cleanupTimer !== null)
      (clearInterval(this.cleanupTimer), (this.cleanupTimer = null));
  }
  ensureCleanupTask() {
    var A, B;
    if (this.cleanupTimer === null)
      ((this.cleanupTimer = setInterval(() => {
        this.unrefUnusedSubchannels();
      }, ln6)),
        (B = (A = this.cleanupTimer).unref) === null || B === void 0 || B.call(A));
  }
  getOrCreateSubchannel(A, B, Q, I) {
    this.ensureCleanupTask();
    let G = pn6.uriToString(A);
    if (G in this.pool) {
      let Z = this.pool[G];
      for (let Y of Z)
        if (
          un6.subchannelAddressEqual(B, Y.subchannelAddress) &&
          mn6.channelOptionsEqual(Q, Y.channelArguments) &&
          I._equals(Y.channelCredentials)
        )
          return Y.subchannel;
    }
    let D = new dn6.Subchannel(A, B, Q, I, new cn6.Http2SubchannelConnector(A));
    if (!(G in this.pool)) this.pool[G] = [];
    return (
      this.pool[G].push({
        subchannelAddress: B,
        channelArguments: Q,
        channelCredentials: I,
        subchannel: D,
      }),
      D.ref(),
      D
    );
  }
}
gG2.SubchannelPool = dC1;
var in6 = new dC1();
function nn6(A) {
  if (A) return in6;
  else return new dC1();
}
