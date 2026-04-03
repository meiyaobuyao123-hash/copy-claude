// Module: Df0
// Params: DK8,Gf0

var IG6 = I6(),
  { InvalidArgumentError: GG6, RequestAbortedError: DG6 } = y5(),
  ZG6 = FW1();
class If0 extends ZG6 {
  #A = 1048576;
  #B = null;
  #Q = !1;
  #I = !1;
  #G = 0;
  #W = null;
  #D = null;
  constructor({ maxSize: A }, B) {
    super(B);
    if (A != null && (!Number.isFinite(A) || A < 1))
      throw new GG6('maxSize must be a number greater than 0');
    ((this.#A = A ?? this.#A), (this.#D = B));
  }
  onConnect(A) {
    ((this.#B = A), this.#D.onConnect(this.#J.bind(this)));
  }
  #J(A) {
    ((this.#I = !0), (this.#W = A));
  }
  onHeaders(A, B, Q, I) {
    let D = IG6.parseHeaders(B)['content-length'];
    if (D != null && D > this.#A)
      throw new DG6(`Response size (${D}) larger than maxSize (${this.#A})`);
    if (this.#I) return !0;
    return this.#D.onHeaders(A, B, Q, I);
  }
  onError(A) {
    if (this.#Q) return;
    ((A = this.#W ?? A), this.#D.onError(A));
  }
  onData(A) {
    if (((this.#G = this.#G + A.length), this.#G >= this.#A))
      if (((this.#Q = !0), this.#I)) this.#D.onError(this.#W);
      else this.#D.onComplete([]);
    return !0;
  }
  onComplete(A) {
    if (this.#Q) return;
    if (this.#I) {
      this.#D.onError(this.reason);
      return;
    }
    this.#D.onComplete(A);
  }
}
function YG6({ maxSize: A } = { maxSize: 1048576 }) {
  return (B) => {
    return function Q(I, G) {
      let { dumpMaxSize: D = A } = I,
        Z = new If0({ maxSize: D }, G);
      return B(I, Z);
    };
  };
}
Gf0.exports = YG6;
