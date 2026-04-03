// Module: Oi1
// Params: fD2

Object.defineProperty(fD2, '__esModule', { value: !0 });
fD2.ChannelImplementation = void 0;
var na6 = To(),
  aa6 = cn1();
class xD2 {
  constructor(A, B, Q) {
    if (typeof A !== 'string') throw new TypeError('Channel target must be a string');
    if (!(B instanceof na6.ChannelCredentials))
      throw new TypeError('Channel credentials must be a ChannelCredentials object');
    if (Q) {
      if (typeof Q !== 'object') throw new TypeError('Channel options must be an object');
    }
    this.internalChannel = new aa6.InternalChannel(A, B, Q);
  }
  close() {
    this.internalChannel.close();
  }
  getTarget() {
    return this.internalChannel.getTarget();
  }
  getConnectivityState(A) {
    return this.internalChannel.getConnectivityState(A);
  }
  watchConnectivityState(A, B, Q) {
    this.internalChannel.watchConnectivityState(A, B, Q);
  }
  getChannelzRef() {
    return this.internalChannel.getChannelzRef();
  }
  createCall(A, B, Q, I, G) {
    if (typeof A !== 'string') throw new TypeError('Channel#createCall: method must be a string');
    if (!(typeof B === 'number' || B instanceof Date))
      throw new TypeError('Channel#createCall: deadline must be a number or Date');
    return this.internalChannel.createCall(A, B, Q, I, G);
  }
}
fD2.ChannelImplementation = xD2;
