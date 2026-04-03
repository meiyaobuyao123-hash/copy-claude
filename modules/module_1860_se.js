// Module: se
// Params: V75

class ot1 extends Error {
  constructor(A, B, Q) {
    super(Q);
    (Error.captureStackTrace(this, this.constructor),
      (this.name = this.constructor.name),
      (this.code = B),
      (this.exitCode = A),
      (this.nestedError = void 0));
  }
}
class Y$2 extends ot1 {
  constructor(A) {
    super(1, 'commander.invalidArgument', A);
    (Error.captureStackTrace(this, this.constructor), (this.name = this.constructor.name));
  }
}
V75.CommanderError = ot1;
V75.InvalidArgumentError = Y$2;
