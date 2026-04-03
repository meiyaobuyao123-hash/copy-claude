// Module: tl0
// Params: rl0

Object.defineProperty(rl0, '__esModule', { value: !0 });
rl0.Buckets = void 0;
class Xc1 {
  backing;
  indexBase;
  indexStart;
  indexEnd;
  constructor(A = new Vc1(), B = 0, Q = 0, I = 0) {
    ((this.backing = A), (this.indexBase = B), (this.indexStart = Q), (this.indexEnd = I));
  }
  get offset() {
    return this.indexStart;
  }
  get length() {
    if (this.backing.length === 0) return 0;
    if (this.indexEnd === this.indexStart && this.at(0) === 0) return 0;
    return this.indexEnd - this.indexStart + 1;
  }
  counts() {
    return Array.from({ length: this.length }, (A, B) => this.at(B));
  }
  at(A) {
    let B = this.indexBase - this.indexStart;
    if (A < B) A += this.backing.length;
    return ((A -= B), this.backing.countAt(A));
  }
  incrementBucket(A, B) {
    this.backing.increment(A, B);
  }
  decrementBucket(A, B) {
    this.backing.decrement(A, B);
  }
  trim() {
    for (let A = 0; A < this.length; A++)
      if (this.at(A) !== 0) {
        this.indexStart += A;
        break;
      } else if (A === this.length - 1) {
        this.indexStart = this.indexEnd = this.indexBase = 0;
        return;
      }
    for (let A = this.length - 1; A >= 0; A--)
      if (this.at(A) !== 0) {
        this.indexEnd -= this.length - A - 1;
        break;
      }
    this._rotate();
  }
  downscale(A) {
    this._rotate();
    let B = 1 + this.indexEnd - this.indexStart,
      Q = 1 << A,
      I = 0,
      G = 0;
    for (let D = this.indexStart; D <= this.indexEnd; ) {
      let Z = D % Q;
      if (Z < 0) Z += Q;
      for (let Y = Z; Y < Q && I < B; Y++) (this._relocateBucket(G, I), I++, D++);
      G++;
    }
    ((this.indexStart >>= A), (this.indexEnd >>= A), (this.indexBase = this.indexStart));
  }
  clone() {
    return new Xc1(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
  }
  _rotate() {
    let A = this.indexBase - this.indexStart;
    if (A === 0) return;
    else if (A > 0)
      (this.backing.reverse(0, this.backing.length),
        this.backing.reverse(0, A),
        this.backing.reverse(A, this.backing.length));
    else
      (this.backing.reverse(0, this.backing.length),
        this.backing.reverse(0, this.backing.length + A));
    this.indexBase = this.indexStart;
  }
  _relocateBucket(A, B) {
    if (A === B) return;
    this.incrementBucket(A, this.backing.emptyBucket(B));
  }
}
rl0.Buckets = Xc1;
class Vc1 {
  _counts;
  constructor(A = [0]) {
    this._counts = A;
  }
  get length() {
    return this._counts.length;
  }
  countAt(A) {
    return this._counts[A];
  }
  growTo(A, B, Q) {
    let I = new Array(A).fill(0);
    (I.splice(Q, this._counts.length - B, ...this._counts.slice(B)),
      I.splice(0, B, ...this._counts.slice(0, B)),
      (this._counts = I));
  }
  reverse(A, B) {
    let Q = Math.floor((A + B) / 2) - A;
    for (let I = 0; I < Q; I++) {
      let G = this._counts[A + I];
      ((this._counts[A + I] = this._counts[B - I - 1]), (this._counts[B - I - 1] = G));
    }
  }
  emptyBucket(A) {
    let B = this._counts[A];
    return ((this._counts[A] = 0), B);
  }
  increment(A, B) {
    this._counts[A] += B;
  }
  decrement(A, B) {
    if (this._counts[A] >= B) this._counts[A] -= B;
    else this._counts[A] = 0;
  }
  clone() {
    return new Vc1([...this._counts]);
  }
}
