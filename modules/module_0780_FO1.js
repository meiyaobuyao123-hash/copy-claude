// Module: FO1
// Params: fxA

Object.defineProperty(fxA, '__esModule', { value: !0 });
fxA.ByteArrayCollector = void 0;
class xxA {
  constructor(A) {
    ((this.allocByteArray = A), (this.byteLength = 0), (this.byteArrays = []));
  }
  push(A) {
    (this.byteArrays.push(A), (this.byteLength += A.byteLength));
  }
  flush() {
    if (this.byteArrays.length === 1) {
      let Q = this.byteArrays[0];
      return (this.reset(), Q);
    }
    let A = this.allocByteArray(this.byteLength),
      B = 0;
    for (let Q = 0; Q < this.byteArrays.length; ++Q) {
      let I = this.byteArrays[Q];
      (A.set(I, B), (B += I.byteLength));
    }
    return (this.reset(), A);
  }
  reset() {
    ((this.byteArrays = []), (this.byteLength = 0));
  }
}
fxA.ByteArrayCollector = xxA;
