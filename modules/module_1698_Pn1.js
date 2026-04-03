// Module: Pn1
// Params: OG2

Object.defineProperty(OG2, '__esModule', { value: !0 });
OG2.StreamDecoder = void 0;
var Kw;
(function (A) {
  ((A[(A.NO_DATA = 0)] = 'NO_DATA'),
    (A[(A.READING_SIZE = 1)] = 'READING_SIZE'),
    (A[(A.READING_MESSAGE = 2)] = 'READING_MESSAGE'));
})(Kw || (Kw = {}));
class RG2 {
  constructor(A) {
    ((this.maxReadMessageLength = A),
      (this.readState = Kw.NO_DATA),
      (this.readCompressFlag = Buffer.alloc(1)),
      (this.readPartialSize = Buffer.alloc(4)),
      (this.readSizeRemaining = 4),
      (this.readMessageSize = 0),
      (this.readPartialMessage = []),
      (this.readMessageRemaining = 0));
  }
  write(A) {
    let B = 0,
      Q,
      I = [];
    while (B < A.length)
      switch (this.readState) {
        case Kw.NO_DATA:
          ((this.readCompressFlag = A.slice(B, B + 1)),
            (B += 1),
            (this.readState = Kw.READING_SIZE),
            this.readPartialSize.fill(0),
            (this.readSizeRemaining = 4),
            (this.readMessageSize = 0),
            (this.readMessageRemaining = 0),
            (this.readPartialMessage = []));
          break;
        case Kw.READING_SIZE:
          if (
            ((Q = Math.min(A.length - B, this.readSizeRemaining)),
            A.copy(this.readPartialSize, 4 - this.readSizeRemaining, B, B + Q),
            (this.readSizeRemaining -= Q),
            (B += Q),
            this.readSizeRemaining === 0)
          ) {
            if (
              ((this.readMessageSize = this.readPartialSize.readUInt32BE(0)),
              this.maxReadMessageLength !== -1 && this.readMessageSize > this.maxReadMessageLength)
            )
              throw new Error(
                `Received message larger than max (${this.readMessageSize} vs ${this.maxReadMessageLength})`
              );
            if (((this.readMessageRemaining = this.readMessageSize), this.readMessageRemaining > 0))
              this.readState = Kw.READING_MESSAGE;
            else {
              let G = Buffer.concat([this.readCompressFlag, this.readPartialSize], 5);
              ((this.readState = Kw.NO_DATA), I.push(G));
            }
          }
          break;
        case Kw.READING_MESSAGE:
          if (
            ((Q = Math.min(A.length - B, this.readMessageRemaining)),
            this.readPartialMessage.push(A.slice(B, B + Q)),
            (this.readMessageRemaining -= Q),
            (B += Q),
            this.readMessageRemaining === 0)
          ) {
            let G = [this.readCompressFlag, this.readPartialSize].concat(this.readPartialMessage),
              D = Buffer.concat(G, this.readMessageSize + 5);
            ((this.readState = Kw.NO_DATA), I.push(D));
          }
          break;
        default:
          throw new Error('Unexpected read state');
      }
    return I;
  }
}
OG2.StreamDecoder = RG2;
