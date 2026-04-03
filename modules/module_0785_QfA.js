// Module: QfA
// Params: AfA

Object.defineProperty(AfA, '__esModule', { value: !0 });
AfA.headStream = void 0;
var Ql9 = D1('stream'),
  Il9 = txA(),
  Gl9 = tq(),
  Dl9 = (A, B) => {
    if (Gl9.isReadableStream(A)) return Il9.headStream(A, B);
    return new Promise((Q, I) => {
      let G = new exA();
      ((G.limit = B),
        A.pipe(G),
        A.on('error', (D) => {
          (G.end(), I(D));
        }),
        G.on('error', I),
        G.on('finish', function () {
          let D = new Uint8Array(Buffer.concat(this.buffers));
          Q(D);
        }));
    });
  };
AfA.headStream = Dl9;
class exA extends Ql9.Writable {
  constructor() {
    super(...arguments);
    ((this.buffers = []), (this.limit = 1 / 0), (this.bytesBuffered = 0));
  }
  _write(A, B, Q) {
    var I;
    if (
      (this.buffers.push(A),
      (this.bytesBuffered += (I = A.byteLength) !== null && I !== void 0 ? I : 0),
      this.bytesBuffered >= this.limit)
    ) {
      let G = this.bytesBuffered - this.limit,
        D = this.buffers[this.buffers.length - 1];
      ((this.buffers[this.buffers.length - 1] = D.subarray(0, D.byteLength - G)),
        this.emit('finish'));
    }
    Q();
  }
}
