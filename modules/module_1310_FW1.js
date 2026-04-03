// Module: FW1
// Params: QK8,tx0

tx0.exports = class A {
  #A;
  constructor(B) {
    if (typeof B !== 'object' || B === null) throw new TypeError('handler must be an object');
    this.#A = B;
  }
  onConnect(...B) {
    return this.#A.onConnect?.(...B);
  }
  onError(...B) {
    return this.#A.onError?.(...B);
  }
  onUpgrade(...B) {
    return this.#A.onUpgrade?.(...B);
  }
  onResponseStarted(...B) {
    return this.#A.onResponseStarted?.(...B);
  }
  onHeaders(...B) {
    return this.#A.onHeaders?.(...B);
  }
  onData(...B) {
    return this.#A.onData?.(...B);
  }
  onComplete(...B) {
    return this.#A.onComplete?.(...B);
  }
  onBodySent(...B) {
    return this.#A.onBodySent?.(...B);
  }
};
