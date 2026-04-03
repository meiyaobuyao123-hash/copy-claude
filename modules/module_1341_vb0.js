// Module: vb0
// Params: kK8,fb0

var { WebsocketFrameSend: nY6 } = fW1(),
  { opcodes: jb0, sendHints: Nh } = iS(),
  aY6 = gm1(),
  yb0 = Buffer[Symbol.species];
class xb0 {
  #A = new aY6();
  #B = !1;
  #Q;
  constructor(A) {
    this.#Q = A;
  }
  add(A, B, Q) {
    if (Q !== Nh.blob) {
      let G = kb0(A, Q);
      if (!this.#B) this.#Q.write(G, B);
      else {
        let D = { promise: null, callback: B, frame: G };
        this.#A.push(D);
      }
      return;
    }
    let I = {
      promise: A.arrayBuffer().then((G) => {
        ((I.promise = null), (I.frame = kb0(G, Q)));
      }),
      callback: B,
      frame: null,
    };
    if ((this.#A.push(I), !this.#B)) this.#I();
  }
  async #I() {
    this.#B = !0;
    let A = this.#A;
    while (!A.isEmpty()) {
      let B = A.shift();
      if (B.promise !== null) await B.promise;
      (this.#Q.write(B.frame, B.callback), (B.callback = B.frame = null));
    }
    this.#B = !1;
  }
}
function kb0(A, B) {
  return new nY6(sY6(A, B)).createFrame(B === Nh.string ? jb0.TEXT : jb0.BINARY);
}
function sY6(A, B) {
  switch (B) {
    case Nh.string:
      return Buffer.from(A);
    case Nh.arrayBuffer:
    case Nh.blob:
      return new yb0(A);
    case Nh.typedArray:
      return new yb0(A.buffer, A.byteOffset, A.byteLength);
  }
}
fb0.exports = { SendQueue: xb0 };
