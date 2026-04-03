// Module: Es
// Params: ZV8,tS0

var y66 = D1('node:events');
class ph1 extends y66 {
  dispatch() {
    throw new Error('not implemented');
  }
  close() {
    throw new Error('not implemented');
  }
  destroy() {
    throw new Error('not implemented');
  }
  compose(...A) {
    let B = Array.isArray(A[0]) ? A[0] : A,
      Q = this.dispatch.bind(this);
    for (let I of B) {
      if (I == null) continue;
      if (typeof I !== 'function')
        throw new TypeError(`invalid interceptor, expected function received ${typeof I}`);
      if (((Q = I(Q)), Q == null || typeof Q !== 'function' || Q.length !== 2))
        throw new TypeError('invalid interceptor');
    }
    return new oS0(this, Q);
  }
}
class oS0 extends ph1 {
  #A = null;
  #B = null;
  constructor(A, B) {
    super();
    ((this.#A = A), (this.#B = B));
  }
  dispatch(...A) {
    this.#B(...A);
  }
  close(...A) {
    return this.#A.close(...A);
  }
  destroy(...A) {
    return this.#A.destroy(...A);
  }
}
tS0.exports = ph1;
