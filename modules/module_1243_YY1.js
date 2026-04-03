// Module: YY1
// Params: EP0

Object.defineProperty(EP0, '__esModule', { value: !0 });
EP0.PluggableAuthClient = EP0.ExecutableError = void 0;
var R96 = qL(),
  O96 = Mh1(),
  T96 = VP0();
class Oh1 extends Error {
  constructor(A, B) {
    super(`The executable failed with exit code: ${B} and error message: ${A}.`);
    ((this.code = B), Object.setPrototypeOf(this, new.target.prototype));
  }
}
EP0.ExecutableError = Oh1;
var P96 = 30000,
  KP0 = 5000,
  HP0 = 120000,
  S96 = 'GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES',
  zP0 = 1;
class wP0 extends R96.BaseExternalAccountClient {
  constructor(A, B) {
    super(A, B);
    if (!A.credential_source.executable)
      throw new Error('No valid Pluggable Auth "credential_source" provided.');
    if (((this.command = A.credential_source.executable.command), !this.command))
      throw new Error('No valid Pluggable Auth "credential_source" provided.');
    if (A.credential_source.executable.timeout_millis === void 0) this.timeoutMillis = P96;
    else if (
      ((this.timeoutMillis = A.credential_source.executable.timeout_millis),
      this.timeoutMillis < KP0 || this.timeoutMillis > HP0)
    )
      throw new Error(`Timeout must be between ${KP0} and ${HP0} milliseconds.`);
    ((this.outputFile = A.credential_source.executable.output_file),
      (this.handler = new T96.PluggableAuthHandler({
        command: this.command,
        timeoutMillis: this.timeoutMillis,
        outputFile: this.outputFile,
      })),
      (this.credentialSourceType = 'executable'));
  }
  async retrieveSubjectToken() {
    if (process.env[S96] !== '1')
      throw new Error(
        'Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.'
      );
    let A = void 0;
    if (this.outputFile) A = await this.handler.retrieveCachedResponse();
    if (!A) {
      let B = new Map();
      if (
        (B.set('GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE', this.audience),
        B.set('GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE', this.subjectTokenType),
        B.set('GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE', '0'),
        this.outputFile)
      )
        B.set('GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE', this.outputFile);
      let Q = this.getServiceAccountEmail();
      if (Q) B.set('GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL', Q);
      A = await this.handler.retrieveResponseFromExecutable(B);
    }
    if (A.version > zP0)
      throw new Error(
        `Version of executable is not currently supported, maximum supported version is ${zP0}.`
      );
    if (!A.success) throw new Oh1(A.errorMessage, A.errorCode);
    if (this.outputFile) {
      if (!A.expirationTime)
        throw new O96.InvalidExpirationTimeFieldError(
          'The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.'
        );
    }
    if (A.isExpired()) throw new Error('Executable response is expired.');
    return A.subjectToken;
  }
}
EP0.PluggableAuthClient = wP0;
