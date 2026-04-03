// Module: Th1
// Params: $P0

Object.defineProperty($P0, '__esModule', { value: !0 });
$P0.ExternalAccountClient = void 0;
var j96 = qL(),
  y96 = Ch1(),
  k96 = Hh1(),
  x96 = YY1();
class NP0 {
  constructor() {
    throw new Error(
      'ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()'
    );
  }
  static fromJSON(A, B) {
    var Q, I;
    if (A && A.type === j96.EXTERNAL_ACCOUNT_TYPE)
      if ((Q = A.credential_source) === null || Q === void 0 ? void 0 : Q.environment_id)
        return new k96.AwsClient(A, B);
      else if ((I = A.credential_source) === null || I === void 0 ? void 0 : I.executable)
        return new x96.PluggableAuthClient(A, B);
      else return new y96.IdentityPoolClient(A, B);
    else return null;
  }
}
$P0.ExternalAccountClient = NP0;
