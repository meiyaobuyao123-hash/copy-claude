// Module: Hh1
// Params: Rg

var C96 =
    (Rg && Rg.__classPrivateFieldGet) ||
    function (A, B, Q, I) {
      if (Q === 'a' && !I) throw new TypeError('Private accessor was defined without a getter');
      if (typeof B === 'function' ? A !== B || !I : !B.has(A))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        );
      return Q === 'm' ? I : Q === 'a' ? I.call(A) : I ? I.value : B.get(A);
    },
  GY1,
  ZP0;
Object.defineProperty(Rg, '__esModule', { value: !0 });
Rg.AwsClient = void 0;
var X96 = Xh1(),
  V96 = qL(),
  K96 = GP0(),
  DP0 = NL();
class Vs extends V96.BaseExternalAccountClient {
  constructor(A, B) {
    super(A, B);
    let Q = DP0.originalOrCamelOptions(A),
      I = Q.get('credential_source'),
      G = Q.get('aws_security_credentials_supplier');
    if (!I && !G)
      throw new Error(
        'A credential source or AWS security credentials supplier must be specified.'
      );
    if (I && G)
      throw new Error(
        'Only one of credential source or AWS security credentials supplier can be specified.'
      );
    if (G)
      ((this.awsSecurityCredentialsSupplier = G),
        (this.regionalCredVerificationUrl = C96(GY1, GY1, 'f', ZP0)),
        (this.credentialSourceType = 'programmatic'));
    else {
      let D = DP0.originalOrCamelOptions(I);
      this.environmentId = D.get('environment_id');
      let Z = D.get('region_url'),
        Y = D.get('url'),
        W = D.get('imdsv2_session_token_url');
      ((this.awsSecurityCredentialsSupplier = new K96.DefaultAwsSecurityCredentialsSupplier({
        regionUrl: Z,
        securityCredentialsUrl: Y,
        imdsV2SessionTokenUrl: W,
      })),
        (this.regionalCredVerificationUrl = D.get('regional_cred_verification_url')),
        (this.credentialSourceType = 'aws'),
        this.validateEnvironmentId());
    }
    ((this.awsRequestSigner = null), (this.region = ''));
  }
  validateEnvironmentId() {
    var A;
    let B = (A = this.environmentId) === null || A === void 0 ? void 0 : A.match(/^(aws)(\d+)$/);
    if (!B || !this.regionalCredVerificationUrl)
      throw new Error('No valid AWS "credential_source" provided');
    else if (parseInt(B[2], 10) !== 1)
      throw new Error(`aws version "${B[2]}" is not supported in the current build.`);
  }
  async retrieveSubjectToken() {
    if (!this.awsRequestSigner)
      ((this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext)),
        (this.awsRequestSigner = new X96.AwsRequestSigner(async () => {
          return this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(
            this.supplierContext
          );
        }, this.region)));
    let A = await this.awsRequestSigner.getRequestOptions({
        ...GY1.RETRY_CONFIG,
        url: this.regionalCredVerificationUrl.replace('{region}', this.region),
        method: 'POST',
      }),
      B = [],
      Q = Object.assign({ 'x-goog-cloud-target-resource': this.audience }, A.headers);
    for (let I in Q) B.push({ key: I, value: Q[I] });
    return encodeURIComponent(JSON.stringify({ url: A.url, method: A.method, headers: B }));
  }
}
Rg.AwsClient = Vs;
GY1 = Vs;
ZP0 = { value: 'https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15' };
Vs.AWS_EC2_METADATA_IPV4_ADDRESS = '169.254.169.254';
Vs.AWS_EC2_METADATA_IPV6_ADDRESS = 'fd00:ec2::254';
