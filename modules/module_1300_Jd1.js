// Module: Jd1
// Params: nV8,Fx0

var { UndiciError: ZI6 } = y5();
class Fd1 extends ZI6 {
  constructor(A) {
    super(A);
    (Error.captureStackTrace(this, Fd1),
      (this.name = 'MockNotMatchedError'),
      (this.message = A || 'The request does not match any registered mock dispatches'),
      (this.code = 'UND_MOCK_ERR_MOCK_NOT_MATCHED'));
  }
}
Fx0.exports = { MockNotMatchedError: Fd1 };
