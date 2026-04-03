// Module: OQ2
// Params: LQ2

Object.defineProperty(LQ2, '__esModule', { value: !0 });
LQ2.ClientDuplexStreamImpl =
  LQ2.ClientWritableStreamImpl =
  LQ2.ClientReadableStreamImpl =
  LQ2.ClientUnaryCallImpl =
    void 0;
LQ2.callErrorFromStatus = Wp6;
var Yp6 = D1('events'),
  Ni1 = D1('stream'),
  ko = O6();
function Wp6(A, B) {
  let Q = `${A.code} ${ko.Status[A.code]}: ${A.details}`,
    G = `${new Error(Q).stack}
for call at
${B}`;
  return Object.assign(new Error(Q), A, { stack: G });
}
class NQ2 extends Yp6.EventEmitter {
  constructor() {
    super();
  }
  cancel() {
    var A;
    (A = this.call) === null ||
      A === void 0 ||
      A.cancelWithStatus(ko.Status.CANCELLED, 'Cancelled on client');
  }
  getPeer() {
    var A, B;
    return (B = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null &&
      B !== void 0
      ? B
      : 'unknown';
  }
}
LQ2.ClientUnaryCallImpl = NQ2;
class $Q2 extends Ni1.Readable {
  constructor(A) {
    super({ objectMode: !0 });
    this.deserialize = A;
  }
  cancel() {
    var A;
    (A = this.call) === null ||
      A === void 0 ||
      A.cancelWithStatus(ko.Status.CANCELLED, 'Cancelled on client');
  }
  getPeer() {
    var A, B;
    return (B = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null &&
      B !== void 0
      ? B
      : 'unknown';
  }
  _read(A) {
    var B;
    (B = this.call) === null || B === void 0 || B.startRead();
  }
}
LQ2.ClientReadableStreamImpl = $Q2;
class qQ2 extends Ni1.Writable {
  constructor(A) {
    super({ objectMode: !0 });
    this.serialize = A;
  }
  cancel() {
    var A;
    (A = this.call) === null ||
      A === void 0 ||
      A.cancelWithStatus(ko.Status.CANCELLED, 'Cancelled on client');
  }
  getPeer() {
    var A, B;
    return (B = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null &&
      B !== void 0
      ? B
      : 'unknown';
  }
  _write(A, B, Q) {
    var I;
    let G = { callback: Q },
      D = Number(B);
    if (!Number.isNaN(D)) G.flags = D;
    (I = this.call) === null || I === void 0 || I.sendMessageWithContext(G, A);
  }
  _final(A) {
    var B;
    ((B = this.call) === null || B === void 0 || B.halfClose(), A());
  }
}
LQ2.ClientWritableStreamImpl = qQ2;
class MQ2 extends Ni1.Duplex {
  constructor(A, B) {
    super({ objectMode: !0 });
    ((this.serialize = A), (this.deserialize = B));
  }
  cancel() {
    var A;
    (A = this.call) === null ||
      A === void 0 ||
      A.cancelWithStatus(ko.Status.CANCELLED, 'Cancelled on client');
  }
  getPeer() {
    var A, B;
    return (B = (A = this.call) === null || A === void 0 ? void 0 : A.getPeer()) !== null &&
      B !== void 0
      ? B
      : 'unknown';
  }
  _read(A) {
    var B;
    (B = this.call) === null || B === void 0 || B.startRead();
  }
  _write(A, B, Q) {
    var I;
    let G = { callback: Q },
      D = Number(B);
    if (!Number.isNaN(D)) G.flags = D;
    (I = this.call) === null || I === void 0 || I.sendMessageWithContext(G, A);
  }
  _final(A) {
    var B;
    ((B = this.call) === null || B === void 0 || B.halfClose(), A());
  }
}
LQ2.ClientDuplexStreamImpl = MQ2;
