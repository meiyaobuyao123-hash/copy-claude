// Module: Hk0
// Params: gV8,Kk0

var K76 = Es(),
  H76 = eY1();
class Vk0 extends K76 {
  #A = null;
  #B = null;
  constructor(A, B = {}) {
    super(B);
    ((this.#A = A), (this.#B = B));
  }
  dispatch(A, B) {
    let Q = new H76(
      { ...A, retryOptions: this.#B },
      { dispatch: this.#A.dispatch.bind(this.#A), handler: B }
    );
    return this.#A.dispatch(A, Q);
  }
  close() {
    return this.#A.close();
  }
  destroy() {
    return this.#A.destroy();
  }
}
Kk0.exports = Vk0;
