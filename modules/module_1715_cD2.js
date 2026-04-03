// Module: cD2
// Params: uD2

Object.defineProperty(uD2, '__esModule', { value: !0 });
uD2.ServerDuplexStreamImpl =
  uD2.ServerWritableStreamImpl =
  uD2.ServerReadableStreamImpl =
  uD2.ServerUnaryCallImpl =
    void 0;
uD2.serverErrorToStatus = nn1;
var sa6 = D1('events'),
  ln1 = D1('stream'),
  in1 = O6(),
  bD2 = XD();
function nn1(A, B) {
  var Q;
  let I = {
    code: in1.Status.UNKNOWN,
    details: 'message' in A ? A.message : 'Unknown Error',
    metadata: (Q = B !== null && B !== void 0 ? B : A.metadata) !== null && Q !== void 0 ? Q : null,
  };
  if ('code' in A && typeof A.code === 'number' && Number.isInteger(A.code)) {
    if (((I.code = A.code), 'details' in A && typeof A.details === 'string')) I.details = A.details;
  }
  return I;
}
class gD2 extends sa6.EventEmitter {
  constructor(A, B, Q, I) {
    super();
    ((this.path = A),
      (this.call = B),
      (this.metadata = Q),
      (this.request = I),
      (this.cancelled = !1));
  }
  getPeer() {
    return this.call.getPeer();
  }
  sendMetadata(A) {
    this.call.sendMetadata(A);
  }
  getDeadline() {
    return this.call.getDeadline();
  }
  getPath() {
    return this.path;
  }
  getHost() {
    return this.call.getHost();
  }
}
uD2.ServerUnaryCallImpl = gD2;
class hD2 extends ln1.Readable {
  constructor(A, B, Q) {
    super({ objectMode: !0 });
    ((this.path = A), (this.call = B), (this.metadata = Q), (this.cancelled = !1));
  }
  _read(A) {
    this.call.startRead();
  }
  getPeer() {
    return this.call.getPeer();
  }
  sendMetadata(A) {
    this.call.sendMetadata(A);
  }
  getDeadline() {
    return this.call.getDeadline();
  }
  getPath() {
    return this.path;
  }
  getHost() {
    return this.call.getHost();
  }
}
uD2.ServerReadableStreamImpl = hD2;
class mD2 extends ln1.Writable {
  constructor(A, B, Q, I) {
    super({ objectMode: !0 });
    ((this.path = A),
      (this.call = B),
      (this.metadata = Q),
      (this.request = I),
      (this.pendingStatus = { code: in1.Status.OK, details: 'OK' }),
      (this.cancelled = !1),
      (this.trailingMetadata = new bD2.Metadata()),
      this.on('error', (G) => {
        ((this.pendingStatus = nn1(G)), this.end());
      }));
  }
  getPeer() {
    return this.call.getPeer();
  }
  sendMetadata(A) {
    this.call.sendMetadata(A);
  }
  getDeadline() {
    return this.call.getDeadline();
  }
  getPath() {
    return this.path;
  }
  getHost() {
    return this.call.getHost();
  }
  _write(A, B, Q) {
    this.call.sendMessage(A, Q);
  }
  _final(A) {
    var B;
    (A(null),
      this.call.sendStatus(
        Object.assign(Object.assign({}, this.pendingStatus), {
          metadata:
            (B = this.pendingStatus.metadata) !== null && B !== void 0 ? B : this.trailingMetadata,
        })
      ));
  }
  end(A) {
    if (A) this.trailingMetadata = A;
    return super.end();
  }
}
uD2.ServerWritableStreamImpl = mD2;
class dD2 extends ln1.Duplex {
  constructor(A, B, Q) {
    super({ objectMode: !0 });
    ((this.path = A),
      (this.call = B),
      (this.metadata = Q),
      (this.pendingStatus = { code: in1.Status.OK, details: 'OK' }),
      (this.cancelled = !1),
      (this.trailingMetadata = new bD2.Metadata()),
      this.on('error', (I) => {
        ((this.pendingStatus = nn1(I)), this.end());
      }));
  }
  getPeer() {
    return this.call.getPeer();
  }
  sendMetadata(A) {
    this.call.sendMetadata(A);
  }
  getDeadline() {
    return this.call.getDeadline();
  }
  getPath() {
    return this.path;
  }
  getHost() {
    return this.call.getHost();
  }
  _read(A) {
    this.call.startRead();
  }
  _write(A, B, Q) {
    this.call.sendMessage(A, Q);
  }
  _final(A) {
    var B;
    (A(null),
      this.call.sendStatus(
        Object.assign(Object.assign({}, this.pendingStatus), {
          metadata:
            (B = this.pendingStatus.metadata) !== null && B !== void 0 ? B : this.trailingMetadata,
        })
      ));
  }
  end(A) {
    if (A) this.trailingMetadata = A;
    return super.end();
  }
}
uD2.ServerDuplexStreamImpl = dD2;
