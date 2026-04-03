// Module: GP0
// Params: Lg

var nU =
    (Lg && Lg.__classPrivateFieldGet) ||
    function (A, B, Q, I) {
      if (Q === 'a' && !I) throw new TypeError('Private accessor was defined without a getter');
      if (typeof B === 'function' ? A !== B || !I : !B.has(A))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        );
      return Q === 'm' ? I : Q === 'a' ? I.call(A) : I ? I.value : B.get(A);
    },
  LV,
  Vh1,
  BP0,
  QP0,
  IY1,
  Kh1;
Object.defineProperty(Lg, '__esModule', { value: !0 });
Lg.DefaultAwsSecurityCredentialsSupplier = void 0;
class IP0 {
  constructor(A) {
    (LV.add(this),
      (this.regionUrl = A.regionUrl),
      (this.securityCredentialsUrl = A.securityCredentialsUrl),
      (this.imdsV2SessionTokenUrl = A.imdsV2SessionTokenUrl),
      (this.additionalGaxiosOptions = A.additionalGaxiosOptions));
  }
  async getAwsRegion(A) {
    if (nU(this, LV, 'a', IY1)) return nU(this, LV, 'a', IY1);
    let B = {};
    if (!nU(this, LV, 'a', IY1) && this.imdsV2SessionTokenUrl)
      B['x-aws-ec2-metadata-token'] = await nU(this, LV, 'm', Vh1).call(this, A.transporter);
    if (!this.regionUrl)
      throw new Error(
        'Unable to determine AWS region due to missing "options.credential_source.region_url"'
      );
    let Q = {
        ...this.additionalGaxiosOptions,
        url: this.regionUrl,
        method: 'GET',
        responseType: 'text',
        headers: B,
      },
      I = await A.transporter.request(Q);
    return I.data.substr(0, I.data.length - 1);
  }
  async getAwsSecurityCredentials(A) {
    if (nU(this, LV, 'a', Kh1)) return nU(this, LV, 'a', Kh1);
    let B = {};
    if (this.imdsV2SessionTokenUrl)
      B['x-aws-ec2-metadata-token'] = await nU(this, LV, 'm', Vh1).call(this, A.transporter);
    let Q = await nU(this, LV, 'm', BP0).call(this, B, A.transporter),
      I = await nU(this, LV, 'm', QP0).call(this, Q, B, A.transporter);
    return { accessKeyId: I.AccessKeyId, secretAccessKey: I.SecretAccessKey, token: I.Token };
  }
}
Lg.DefaultAwsSecurityCredentialsSupplier = IP0;
((LV = new WeakSet()),
  (Vh1 = async function A(B) {
    let Q = {
      ...this.additionalGaxiosOptions,
      url: this.imdsV2SessionTokenUrl,
      method: 'PUT',
      responseType: 'text',
      headers: { 'x-aws-ec2-metadata-token-ttl-seconds': '300' },
    };
    return (await B.request(Q)).data;
  }),
  (BP0 = async function A(B, Q) {
    if (!this.securityCredentialsUrl)
      throw new Error(
        'Unable to determine AWS role name due to missing "options.credential_source.url"'
      );
    let I = {
      ...this.additionalGaxiosOptions,
      url: this.securityCredentialsUrl,
      method: 'GET',
      responseType: 'text',
      headers: B,
    };
    return (await Q.request(I)).data;
  }),
  (QP0 = async function A(B, Q, I) {
    return (
      await I.request({
        ...this.additionalGaxiosOptions,
        url: `${this.securityCredentialsUrl}/${B}`,
        responseType: 'json',
        headers: Q,
      })
    ).data;
  }),
  (IY1 = function A() {
    return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || null;
  }),
  (Kh1 = function A() {
    if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY)
      return {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        token: process.env.AWS_SESSION_TOKEN,
      };
    return null;
  }));
