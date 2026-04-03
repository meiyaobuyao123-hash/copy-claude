// Module: ob0
// Params: vK8,rb0

var { Transform: zW6 } = D1('node:stream'),
  { isASCIINumber: nb0, isValidLastEventId: ab0 } = Qu1(),
  ZN = [239, 187, 191];
class sb0 extends zW6 {
  state = null;
  checkBOM = !0;
  crlfCheck = !1;
  eventEndCheck = !1;
  buffer = null;
  pos = 0;
  event = { data: void 0, event: void 0, id: void 0, retry: void 0 };
  constructor(A = {}) {
    A.readableObjectMode = !0;
    super(A);
    if (((this.state = A.eventSourceSettings || {}), A.push)) this.push = A.push;
  }
  _transform(A, B, Q) {
    if (A.length === 0) {
      Q();
      return;
    }
    if (this.buffer) this.buffer = Buffer.concat([this.buffer, A]);
    else this.buffer = A;
    if (this.checkBOM)
      switch (this.buffer.length) {
        case 1:
          if (this.buffer[0] === ZN[0]) {
            Q();
            return;
          }
          ((this.checkBOM = !1), Q());
          return;
        case 2:
          if (this.buffer[0] === ZN[0] && this.buffer[1] === ZN[1]) {
            Q();
            return;
          }
          this.checkBOM = !1;
          break;
        case 3:
          if (this.buffer[0] === ZN[0] && this.buffer[1] === ZN[1] && this.buffer[2] === ZN[2]) {
            ((this.buffer = Buffer.alloc(0)), (this.checkBOM = !1), Q());
            return;
          }
          this.checkBOM = !1;
          break;
        default:
          if (this.buffer[0] === ZN[0] && this.buffer[1] === ZN[1] && this.buffer[2] === ZN[2])
            this.buffer = this.buffer.subarray(3);
          this.checkBOM = !1;
          break;
      }
    while (this.pos < this.buffer.length) {
      if (this.eventEndCheck) {
        if (this.crlfCheck) {
          if (this.buffer[this.pos] === 10) {
            ((this.buffer = this.buffer.subarray(this.pos + 1)),
              (this.pos = 0),
              (this.crlfCheck = !1));
            continue;
          }
          this.crlfCheck = !1;
        }
        if (this.buffer[this.pos] === 10 || this.buffer[this.pos] === 13) {
          if (this.buffer[this.pos] === 13) this.crlfCheck = !0;
          if (
            ((this.buffer = this.buffer.subarray(this.pos + 1)),
            (this.pos = 0),
            this.event.data !== void 0 || this.event.event || this.event.id || this.event.retry)
          )
            this.processEvent(this.event);
          this.clearEvent();
          continue;
        }
        this.eventEndCheck = !1;
        continue;
      }
      if (this.buffer[this.pos] === 10 || this.buffer[this.pos] === 13) {
        if (this.buffer[this.pos] === 13) this.crlfCheck = !0;
        (this.parseLine(this.buffer.subarray(0, this.pos), this.event),
          (this.buffer = this.buffer.subarray(this.pos + 1)),
          (this.pos = 0),
          (this.eventEndCheck = !0));
        continue;
      }
      this.pos++;
    }
    Q();
  }
  parseLine(A, B) {
    if (A.length === 0) return;
    let Q = A.indexOf(58);
    if (Q === 0) return;
    let I = '',
      G = '';
    if (Q !== -1) {
      I = A.subarray(0, Q).toString('utf8');
      let D = Q + 1;
      if (A[D] === 32) ++D;
      G = A.subarray(D).toString('utf8');
    } else ((I = A.toString('utf8')), (G = ''));
    switch (I) {
      case 'data':
        if (B[I] === void 0) B[I] = G;
        else
          B[I] += `
${G}`;
        break;
      case 'retry':
        if (nb0(G)) B[I] = G;
        break;
      case 'id':
        if (ab0(G)) B[I] = G;
        break;
      case 'event':
        if (G.length > 0) B[I] = G;
        break;
    }
  }
  processEvent(A) {
    if (A.retry && nb0(A.retry)) this.state.reconnectionTime = parseInt(A.retry, 10);
    if (A.id && ab0(A.id)) this.state.lastEventId = A.id;
    if (A.data !== void 0)
      this.push({
        type: A.event || 'message',
        options: { data: A.data, lastEventId: this.state.lastEventId, origin: this.state.origin },
      });
  }
  clearEvent() {
    this.event = { data: void 0, event: void 0, id: void 0, retry: void 0 };
  }
}
rb0.exports = { EventSourceStream: sb0 };
