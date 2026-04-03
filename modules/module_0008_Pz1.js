// Module: Pz1
// Params: ve1

Object.defineProperty(ve1, '__esModule', { value: !0 });
class fe1 extends Error {
  constructor(A, B = 'warn') {
    super(A);
    ((this.message = A),
      (this.name = new.target.prototype.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.logLevel = B));
  }
}
ve1.SentryError = fe1;
