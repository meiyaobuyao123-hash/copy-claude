// Module: Mh1
// Params: FP0

Object.defineProperty(FP0, '__esModule', { value: !0 });
FP0.InvalidSubjectTokenError =
  FP0.InvalidMessageFieldError =
  FP0.InvalidCodeFieldError =
  FP0.InvalidTokenTypeFieldError =
  FP0.InvalidExpirationTimeFieldError =
  FP0.InvalidSuccessFieldError =
  FP0.InvalidVersionFieldError =
  FP0.ExecutableResponseError =
  FP0.ExecutableResponse =
    void 0;
var DY1 = 'urn:ietf:params:oauth:token-type:saml2',
  zh1 = 'urn:ietf:params:oauth:token-type:id_token',
  wh1 = 'urn:ietf:params:oauth:token-type:jwt';
class YP0 {
  constructor(A) {
    if (!A.version) throw new Eh1("Executable response must contain a 'version' field.");
    if (A.success === void 0) throw new Uh1("Executable response must contain a 'success' field.");
    if (((this.version = A.version), (this.success = A.success), this.success)) {
      if (
        ((this.expirationTime = A.expiration_time),
        (this.tokenType = A.token_type),
        this.tokenType !== DY1 && this.tokenType !== zh1 && this.tokenType !== wh1)
      )
        throw new Nh1(
          `Executable response must contain a 'token_type' field when successful and it must be one of ${zh1}, ${wh1}, or ${DY1}.`
        );
      if (this.tokenType === DY1) {
        if (!A.saml_response)
          throw new ZY1(
            `Executable response must contain a 'saml_response' field when token_type=${DY1}.`
          );
        this.subjectToken = A.saml_response;
      } else {
        if (!A.id_token)
          throw new ZY1(
            `Executable response must contain a 'id_token' field when token_type=${zh1} or ${wh1}.`
          );
        this.subjectToken = A.id_token;
      }
    } else {
      if (!A.code)
        throw new $h1("Executable response must contain a 'code' field when unsuccessful.");
      if (!A.message)
        throw new qh1("Executable response must contain a 'message' field when unsuccessful.");
      ((this.errorCode = A.code), (this.errorMessage = A.message));
    }
  }
  isValid() {
    return !this.isExpired() && this.success;
  }
  isExpired() {
    return this.expirationTime !== void 0 && this.expirationTime < Math.round(Date.now() / 1000);
  }
}
FP0.ExecutableResponse = YP0;
class aU extends Error {
  constructor(A) {
    super(A);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
FP0.ExecutableResponseError = aU;
class Eh1 extends aU {}
FP0.InvalidVersionFieldError = Eh1;
class Uh1 extends aU {}
FP0.InvalidSuccessFieldError = Uh1;
class WP0 extends aU {}
FP0.InvalidExpirationTimeFieldError = WP0;
class Nh1 extends aU {}
FP0.InvalidTokenTypeFieldError = Nh1;
class $h1 extends aU {}
FP0.InvalidCodeFieldError = $h1;
class qh1 extends aU {}
FP0.InvalidMessageFieldError = qh1;
class ZY1 extends aU {}
FP0.InvalidSubjectTokenError = ZY1;
