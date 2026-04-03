// Module: I31
// Params: Vc5,J_1

var { defineProperty: Q31, getOwnPropertyDescriptor: mW4, getOwnPropertyNames: dW4 } = Object,
  uW4 = Object.prototype.hasOwnProperty,
  l2 = (A, B) => Q31(A, 'name', { value: B, configurable: !0 }),
  pW4 = (A, B) => {
    for (var Q in B) Q31(A, Q, { get: B[Q], enumerable: !0 });
  },
  I_1 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of dW4(B))
        if (!uW4.call(A, G) && G !== Q)
          Q31(A, G, { get: () => B[G], enumerable: !(I = mW4(B, G)) || I.enumerable });
    }
    return A;
  },
  cW4 = (A, B, Q) => (I_1(A, B, 'default'), Q && I_1(Q, B, 'default')),
  lW4 = (A) => I_1(Q31({}, '__esModule', { value: !0 }), A),
  D_1 = {};
pW4(D_1, {
  AssumeRoleCommand: () => W_1,
  AssumeRoleResponseFilterSensitiveLog: () => eeA,
  AssumeRoleWithWebIdentityCommand: () => F_1,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => Z10,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => Y10,
  ClientInputEndpointParameters: () => bF4.ClientInputEndpointParameters,
  CredentialsFilterSensitiveLog: () => Z_1,
  ExpiredTokenException: () => A10,
  IDPCommunicationErrorException: () => W10,
  IDPRejectedClaimException: () => G10,
  InvalidIdentityTokenException: () => D10,
  MalformedPolicyDocumentException: () => B10,
  PackedPolicyTooLargeException: () => Q10,
  RegionDisabledException: () => I10,
  STS: () => U10,
  STSServiceException: () => KU,
  decorateDefaultCredentialProvider: () => mF4,
  getDefaultRoleAssumer: () => R10,
  getDefaultRoleAssumerWithWebIdentity: () => O10,
});
J_1.exports = lW4(D_1);
cW4(D_1, Gi(), J_1.exports);
var iW4 = T3(),
  nW4 = mH(),
  aW4 = kH(),
  sW4 = T3(),
  rW4 = Di(),
  teA = T3(),
  oW4 = T3(),
  KU = class A extends oW4.ServiceException {
    static {
      l2(this, 'STSServiceException');
    }
    constructor(B) {
      super(B);
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Z_1 = l2(
    (A) => ({ ...A, ...(A.SecretAccessKey && { SecretAccessKey: teA.SENSITIVE_STRING }) }),
    'CredentialsFilterSensitiveLog'
  ),
  eeA = l2(
    (A) => ({ ...A, ...(A.Credentials && { Credentials: Z_1(A.Credentials) }) }),
    'AssumeRoleResponseFilterSensitiveLog'
  ),
  A10 = class A extends KU {
    static {
      l2(this, 'ExpiredTokenException');
    }
    name = 'ExpiredTokenException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ExpiredTokenException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  B10 = class A extends KU {
    static {
      l2(this, 'MalformedPolicyDocumentException');
    }
    name = 'MalformedPolicyDocumentException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'MalformedPolicyDocumentException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Q10 = class A extends KU {
    static {
      l2(this, 'PackedPolicyTooLargeException');
    }
    name = 'PackedPolicyTooLargeException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'PackedPolicyTooLargeException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  I10 = class A extends KU {
    static {
      l2(this, 'RegionDisabledException');
    }
    name = 'RegionDisabledException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'RegionDisabledException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  G10 = class A extends KU {
    static {
      l2(this, 'IDPRejectedClaimException');
    }
    name = 'IDPRejectedClaimException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'IDPRejectedClaimException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  D10 = class A extends KU {
    static {
      l2(this, 'InvalidIdentityTokenException');
    }
    name = 'InvalidIdentityTokenException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'InvalidIdentityTokenException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Z10 = l2(
    (A) => ({ ...A, ...(A.WebIdentityToken && { WebIdentityToken: teA.SENSITIVE_STRING }) }),
    'AssumeRoleWithWebIdentityRequestFilterSensitiveLog'
  ),
  Y10 = l2(
    (A) => ({ ...A, ...(A.Credentials && { Credentials: Z_1(A.Credentials) }) }),
    'AssumeRoleWithWebIdentityResponseFilterSensitiveLog'
  ),
  W10 = class A extends KU {
    static {
      l2(this, 'IDPCommunicationErrorException');
    }
    name = 'IDPCommunicationErrorException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'IDPCommunicationErrorException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  Y_1 = c8(),
  tW4 = sB1(),
  _5 = T3(),
  eW4 = l2(async (A, B) => {
    let Q = K10,
      I;
    return ((I = E10({ ...JF4(A, B), [z10]: PF4, [w10]: H10 })), V10(B, Q, '/', void 0, I));
  }, 'se_AssumeRoleCommand'),
  AF4 = l2(async (A, B) => {
    let Q = K10,
      I;
    return ((I = E10({ ...CF4(A, B), [z10]: SF4, [w10]: H10 })), V10(B, Q, '/', void 0, I));
  }, 'se_AssumeRoleWithWebIdentityCommand'),
  BF4 = l2(async (A, B) => {
    if (A.statusCode >= 300) return F10(A, B);
    let Q = await Y_1.parseXmlBody(A.body, B),
      I = {};
    return ((I = EF4(Q.AssumeRoleResult, B)), { $metadata: HU(A), ...I });
  }, 'de_AssumeRoleCommand'),
  QF4 = l2(async (A, B) => {
    if (A.statusCode >= 300) return F10(A, B);
    let Q = await Y_1.parseXmlBody(A.body, B),
      I = {};
    return ((I = UF4(Q.AssumeRoleWithWebIdentityResult, B)), { $metadata: HU(A), ...I });
  }, 'de_AssumeRoleWithWebIdentityCommand'),
  F10 = l2(async (A, B) => {
    let Q = { ...A, body: await Y_1.parseXmlErrorBody(A.body, B) },
      I = _F4(A, Q.body);
    switch (I) {
      case 'ExpiredTokenException':
      case 'com.amazonaws.sts#ExpiredTokenException':
        throw await IF4(Q, B);
      case 'MalformedPolicyDocument':
      case 'com.amazonaws.sts#MalformedPolicyDocumentException':
        throw await YF4(Q, B);
      case 'PackedPolicyTooLarge':
      case 'com.amazonaws.sts#PackedPolicyTooLargeException':
        throw await WF4(Q, B);
      case 'RegionDisabledException':
      case 'com.amazonaws.sts#RegionDisabledException':
        throw await FF4(Q, B);
      case 'IDPCommunicationError':
      case 'com.amazonaws.sts#IDPCommunicationErrorException':
        throw await GF4(Q, B);
      case 'IDPRejectedClaim':
      case 'com.amazonaws.sts#IDPRejectedClaimException':
        throw await DF4(Q, B);
      case 'InvalidIdentityToken':
      case 'com.amazonaws.sts#InvalidIdentityTokenException':
        throw await ZF4(Q, B);
      default:
        let G = Q.body;
        return TF4({ output: A, parsedBody: G.Error, errorCode: I });
    }
  }, 'de_CommandError'),
  IF4 = l2(async (A, B) => {
    let Q = A.body,
      I = NF4(Q.Error, B),
      G = new A10({ $metadata: HU(A), ...I });
    return _5.decorateServiceException(G, Q);
  }, 'de_ExpiredTokenExceptionRes'),
  GF4 = l2(async (A, B) => {
    let Q = A.body,
      I = $F4(Q.Error, B),
      G = new W10({ $metadata: HU(A), ...I });
    return _5.decorateServiceException(G, Q);
  }, 'de_IDPCommunicationErrorExceptionRes'),
  DF4 = l2(async (A, B) => {
    let Q = A.body,
      I = qF4(Q.Error, B),
      G = new G10({ $metadata: HU(A), ...I });
    return _5.decorateServiceException(G, Q);
  }, 'de_IDPRejectedClaimExceptionRes'),
  ZF4 = l2(async (A, B) => {
    let Q = A.body,
      I = MF4(Q.Error, B),
      G = new D10({ $metadata: HU(A), ...I });
    return _5.decorateServiceException(G, Q);
  }, 'de_InvalidIdentityTokenExceptionRes'),
  YF4 = l2(async (A, B) => {
    let Q = A.body,
      I = LF4(Q.Error, B),
      G = new B10({ $metadata: HU(A), ...I });
    return _5.decorateServiceException(G, Q);
  }, 'de_MalformedPolicyDocumentExceptionRes'),
  WF4 = l2(async (A, B) => {
    let Q = A.body,
      I = RF4(Q.Error, B),
      G = new Q10({ $metadata: HU(A), ...I });
    return _5.decorateServiceException(G, Q);
  }, 'de_PackedPolicyTooLargeExceptionRes'),
  FF4 = l2(async (A, B) => {
    let Q = A.body,
      I = OF4(Q.Error, B),
      G = new I10({ $metadata: HU(A), ...I });
    return _5.decorateServiceException(G, Q);
  }, 'de_RegionDisabledExceptionRes'),
  JF4 = l2((A, B) => {
    let Q = {};
    if (A[Kv] != null) Q[Kv] = A[Kv];
    if (A[Hv] != null) Q[Hv] = A[Hv];
    if (A[Xv] != null) {
      let I = J10(A[Xv], B);
      if (A[Xv]?.length === 0) Q.PolicyArns = [];
      Object.entries(I).forEach(([G, D]) => {
        let Z = `PolicyArns.${G}`;
        Q[Z] = D;
      });
    }
    if (A[Cv] != null) Q[Cv] = A[Cv];
    if (A[Jv] != null) Q[Jv] = A[Jv];
    if (A[oS1] != null) {
      let I = wF4(A[oS1], B);
      if (A[oS1]?.length === 0) Q.Tags = [];
      Object.entries(I).forEach(([G, D]) => {
        let Z = `Tags.${G}`;
        Q[Z] = D;
      });
    }
    if (A[eS1] != null) {
      let I = zF4(A[eS1], B);
      if (A[eS1]?.length === 0) Q.TransitiveTagKeys = [];
      Object.entries(I).forEach(([G, D]) => {
        let Z = `TransitiveTagKeys.${G}`;
        Q[Z] = D;
      });
    }
    if (A[dS1] != null) Q[dS1] = A[dS1];
    if (A[sS1] != null) Q[sS1] = A[sS1];
    if (A[tS1] != null) Q[tS1] = A[tS1];
    if (A[VU] != null) Q[VU] = A[VU];
    if (A[cS1] != null) {
      let I = KF4(A[cS1], B);
      if (A[cS1]?.length === 0) Q.ProvidedContexts = [];
      Object.entries(I).forEach(([G, D]) => {
        let Z = `ProvidedContexts.${G}`;
        Q[Z] = D;
      });
    }
    return Q;
  }, 'se_AssumeRoleRequest'),
  CF4 = l2((A, B) => {
    let Q = {};
    if (A[Kv] != null) Q[Kv] = A[Kv];
    if (A[Hv] != null) Q[Hv] = A[Hv];
    if (A[B_1] != null) Q[B_1] = A[B_1];
    if (A[lS1] != null) Q[lS1] = A[lS1];
    if (A[Xv] != null) {
      let I = J10(A[Xv], B);
      if (A[Xv]?.length === 0) Q.PolicyArns = [];
      Object.entries(I).forEach(([G, D]) => {
        let Z = `PolicyArns.${G}`;
        Q[Z] = D;
      });
    }
    if (A[Cv] != null) Q[Cv] = A[Cv];
    if (A[Jv] != null) Q[Jv] = A[Jv];
    return Q;
  }, 'se_AssumeRoleWithWebIdentityRequest'),
  J10 = l2((A, B) => {
    let Q = {},
      I = 1;
    for (let G of A) {
      if (G === null) continue;
      let D = XF4(G, B);
      (Object.entries(D).forEach(([Z, Y]) => {
        Q[`member.${I}.${Z}`] = Y;
      }),
        I++);
    }
    return Q;
  }, 'se_policyDescriptorListType'),
  XF4 = l2((A, B) => {
    let Q = {};
    if (A[Q_1] != null) Q[Q_1] = A[Q_1];
    return Q;
  }, 'se_PolicyDescriptorType'),
  VF4 = l2((A, B) => {
    let Q = {};
    if (A[pS1] != null) Q[pS1] = A[pS1];
    if (A[hS1] != null) Q[hS1] = A[hS1];
    return Q;
  }, 'se_ProvidedContext'),
  KF4 = l2((A, B) => {
    let Q = {},
      I = 1;
    for (let G of A) {
      if (G === null) continue;
      let D = VF4(G, B);
      (Object.entries(D).forEach(([Z, Y]) => {
        Q[`member.${I}.${Z}`] = Y;
      }),
        I++);
    }
    return Q;
  }, 'se_ProvidedContextsListType'),
  HF4 = l2((A, B) => {
    let Q = {};
    if (A[uS1] != null) Q[uS1] = A[uS1];
    if (A[A_1] != null) Q[A_1] = A[A_1];
    return Q;
  }, 'se_Tag'),
  zF4 = l2((A, B) => {
    let Q = {},
      I = 1;
    for (let G of A) {
      if (G === null) continue;
      ((Q[`member.${I}`] = G), I++);
    }
    return Q;
  }, 'se_tagKeyListType'),
  wF4 = l2((A, B) => {
    let Q = {},
      I = 1;
    for (let G of A) {
      if (G === null) continue;
      let D = HF4(G, B);
      (Object.entries(D).forEach(([Z, Y]) => {
        Q[`member.${I}.${Z}`] = Y;
      }),
        I++);
    }
    return Q;
  }, 'se_tagListType'),
  C10 = l2((A, B) => {
    let Q = {};
    if (A[vS1] != null) Q[vS1] = _5.expectString(A[vS1]);
    if (A[bS1] != null) Q[bS1] = _5.expectString(A[bS1]);
    return Q;
  }, 'de_AssumedRoleUser'),
  EF4 = l2((A, B) => {
    let Q = {};
    if (A[Fv] != null) Q[Fv] = X10(A[Fv], B);
    if (A[Wv] != null) Q[Wv] = C10(A[Wv], B);
    if (A[Vv] != null) Q[Vv] = _5.strictParseInt32(A[Vv]);
    if (A[VU] != null) Q[VU] = _5.expectString(A[VU]);
    return Q;
  }, 'de_AssumeRoleResponse'),
  UF4 = l2((A, B) => {
    let Q = {};
    if (A[Fv] != null) Q[Fv] = X10(A[Fv], B);
    if (A[aS1] != null) Q[aS1] = _5.expectString(A[aS1]);
    if (A[Wv] != null) Q[Wv] = C10(A[Wv], B);
    if (A[Vv] != null) Q[Vv] = _5.strictParseInt32(A[Vv]);
    if (A[iS1] != null) Q[iS1] = _5.expectString(A[iS1]);
    if (A[gS1] != null) Q[gS1] = _5.expectString(A[gS1]);
    if (A[VU] != null) Q[VU] = _5.expectString(A[VU]);
    return Q;
  }, 'de_AssumeRoleWithWebIdentityResponse'),
  X10 = l2((A, B) => {
    let Q = {};
    if (A[fS1] != null) Q[fS1] = _5.expectString(A[fS1]);
    if (A[nS1] != null) Q[nS1] = _5.expectString(A[nS1]);
    if (A[rS1] != null) Q[rS1] = _5.expectString(A[rS1]);
    if (A[mS1] != null) Q[mS1] = _5.expectNonNull(_5.parseRfc3339DateTimeWithOffset(A[mS1]));
    return Q;
  }, 'de_Credentials'),
  NF4 = l2((A, B) => {
    let Q = {};
    if (A[YQ] != null) Q[YQ] = _5.expectString(A[YQ]);
    return Q;
  }, 'de_ExpiredTokenException'),
  $F4 = l2((A, B) => {
    let Q = {};
    if (A[YQ] != null) Q[YQ] = _5.expectString(A[YQ]);
    return Q;
  }, 'de_IDPCommunicationErrorException'),
  qF4 = l2((A, B) => {
    let Q = {};
    if (A[YQ] != null) Q[YQ] = _5.expectString(A[YQ]);
    return Q;
  }, 'de_IDPRejectedClaimException'),
  MF4 = l2((A, B) => {
    let Q = {};
    if (A[YQ] != null) Q[YQ] = _5.expectString(A[YQ]);
    return Q;
  }, 'de_InvalidIdentityTokenException'),
  LF4 = l2((A, B) => {
    let Q = {};
    if (A[YQ] != null) Q[YQ] = _5.expectString(A[YQ]);
    return Q;
  }, 'de_MalformedPolicyDocumentException'),
  RF4 = l2((A, B) => {
    let Q = {};
    if (A[YQ] != null) Q[YQ] = _5.expectString(A[YQ]);
    return Q;
  }, 'de_PackedPolicyTooLargeException'),
  OF4 = l2((A, B) => {
    let Q = {};
    if (A[YQ] != null) Q[YQ] = _5.expectString(A[YQ]);
    return Q;
  }, 'de_RegionDisabledException'),
  HU = l2(
    (A) => ({
      httpStatusCode: A.statusCode,
      requestId:
        A.headers['x-amzn-requestid'] ??
        A.headers['x-amzn-request-id'] ??
        A.headers['x-amz-request-id'],
      extendedRequestId: A.headers['x-amz-id-2'],
      cfId: A.headers['x-amz-cf-id'],
    }),
    'deserializeMetadata'
  ),
  TF4 = _5.withBaseException(KU),
  V10 = l2(async (A, B, Q, I, G) => {
    let { hostname: D, protocol: Z = 'https', port: Y, path: W } = await A.endpoint(),
      F = {
        protocol: Z,
        hostname: D,
        port: Y,
        method: 'POST',
        path: W.endsWith('/') ? W.slice(0, -1) + Q : W + Q,
        headers: B,
      };
    if (I !== void 0) F.hostname = I;
    if (G !== void 0) F.body = G;
    return new tW4.HttpRequest(F);
  }, 'buildHttpRpcRequest'),
  K10 = { 'content-type': 'application/x-www-form-urlencoded' },
  H10 = '2011-06-15',
  z10 = 'Action',
  fS1 = 'AccessKeyId',
  PF4 = 'AssumeRole',
  vS1 = 'AssumedRoleId',
  Wv = 'AssumedRoleUser',
  SF4 = 'AssumeRoleWithWebIdentity',
  bS1 = 'Arn',
  gS1 = 'Audience',
  Fv = 'Credentials',
  hS1 = 'ContextAssertion',
  Jv = 'DurationSeconds',
  mS1 = 'Expiration',
  dS1 = 'ExternalId',
  uS1 = 'Key',
  Cv = 'Policy',
  Xv = 'PolicyArns',
  pS1 = 'ProviderArn',
  cS1 = 'ProvidedContexts',
  lS1 = 'ProviderId',
  Vv = 'PackedPolicySize',
  iS1 = 'Provider',
  Kv = 'RoleArn',
  Hv = 'RoleSessionName',
  nS1 = 'SecretAccessKey',
  aS1 = 'SubjectFromWebIdentityToken',
  VU = 'SourceIdentity',
  sS1 = 'SerialNumber',
  rS1 = 'SessionToken',
  oS1 = 'Tags',
  tS1 = 'TokenCode',
  eS1 = 'TransitiveTagKeys',
  w10 = 'Version',
  A_1 = 'Value',
  B_1 = 'WebIdentityToken',
  Q_1 = 'arn',
  YQ = 'message',
  E10 = l2(
    (A) =>
      Object.entries(A)
        .map(([B, Q]) => _5.extendedEncodeURIComponent(B) + '=' + _5.extendedEncodeURIComponent(Q))
        .join('&'),
    'buildFormUrlencodedString'
  ),
  _F4 = l2((A, B) => {
    if (B.Error?.Code !== void 0) return B.Error.Code;
    if (A.statusCode == 404) return 'NotFound';
  }, 'loadQueryErrorCode'),
  W_1 = class extends sW4.Command.classBuilder()
    .ep(rW4.commonParams)
    .m(function (A, B, Q, I) {
      return [
        aW4.getSerdePlugin(Q, this.serialize, this.deserialize),
        nW4.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSSecurityTokenServiceV20110615', 'AssumeRole', {})
    .n('STSClient', 'AssumeRoleCommand')
    .f(void 0, eeA)
    .ser(eW4)
    .de(BF4)
    .build() {
    static {
      l2(this, 'AssumeRoleCommand');
    }
  },
  jF4 = mH(),
  yF4 = kH(),
  kF4 = T3(),
  xF4 = Di(),
  F_1 = class extends kF4.Command.classBuilder()
    .ep(xF4.commonParams)
    .m(function (A, B, Q, I) {
      return [
        yF4.getSerdePlugin(Q, this.serialize, this.deserialize),
        jF4.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSSecurityTokenServiceV20110615', 'AssumeRoleWithWebIdentity', {})
    .n('STSClient', 'AssumeRoleWithWebIdentityCommand')
    .f(Z10, Y10)
    .ser(AF4)
    .de(QF4)
    .build() {
    static {
      l2(this, 'AssumeRoleWithWebIdentityCommand');
    }
  },
  fF4 = Gi(),
  vF4 = { AssumeRoleCommand: W_1, AssumeRoleWithWebIdentityCommand: F_1 },
  U10 = class extends fF4.STSClient {
    static {
      l2(this, 'STS');
    }
  };
iW4.createAggregatedClient(vF4, U10);
var bF4 = Di(),
  G_1 = bX(),
  oeA = 'us-east-1',
  N10 = l2((A) => {
    if (typeof A?.Arn === 'string') {
      let B = A.Arn.split(':');
      if (B.length > 4 && B[4] !== '') return B[4];
    }
    return;
  }, 'getAccountIdFromAssumedRoleUser'),
  $10 = l2(async (A, B, Q) => {
    let I = typeof A === 'function' ? await A() : A,
      G = typeof B === 'function' ? await B() : B;
    return (
      Q?.debug?.(
        '@aws-sdk/client-sts::resolveRegion',
        'accepting first of:',
        `${I} (provider)`,
        `${G} (parent client)`,
        `${oeA} (STS default)`
      ),
      I ?? G ?? oeA
    );
  }, 'resolveRegion'),
  gF4 = l2((A, B) => {
    let Q, I;
    return async (G, D) => {
      if (((I = G), !Q)) {
        let {
            logger: J = A?.parentClientConfig?.logger,
            region: C,
            requestHandler: X = A?.parentClientConfig?.requestHandler,
            credentialProviderLogger: V,
          } = A,
          K = await $10(C, A?.parentClientConfig?.region, V),
          U = !q10(X);
        Q = new B({
          profile: A?.parentClientConfig?.profile,
          credentialDefaultProvider: l2(() => async () => I, 'credentialDefaultProvider'),
          region: K,
          requestHandler: U ? X : void 0,
          logger: J,
        });
      }
      let { Credentials: Z, AssumedRoleUser: Y } = await Q.send(new W_1(D));
      if (!Z || !Z.AccessKeyId || !Z.SecretAccessKey)
        throw new Error(`Invalid response from STS.assumeRole call with role ${D.RoleArn}`);
      let W = N10(Y),
        F = {
          accessKeyId: Z.AccessKeyId,
          secretAccessKey: Z.SecretAccessKey,
          sessionToken: Z.SessionToken,
          expiration: Z.Expiration,
          ...(Z.CredentialScope && { credentialScope: Z.CredentialScope }),
          ...(W && { accountId: W }),
        };
      return (G_1.setCredentialFeature(F, 'CREDENTIALS_STS_ASSUME_ROLE', 'i'), F);
    };
  }, 'getDefaultRoleAssumer'),
  hF4 = l2((A, B) => {
    let Q;
    return async (I) => {
      if (!Q) {
        let {
            logger: W = A?.parentClientConfig?.logger,
            region: F,
            requestHandler: J = A?.parentClientConfig?.requestHandler,
            credentialProviderLogger: C,
          } = A,
          X = await $10(F, A?.parentClientConfig?.region, C),
          V = !q10(J);
        Q = new B({
          profile: A?.parentClientConfig?.profile,
          region: X,
          requestHandler: V ? J : void 0,
          logger: W,
        });
      }
      let { Credentials: G, AssumedRoleUser: D } = await Q.send(new F_1(I));
      if (!G || !G.AccessKeyId || !G.SecretAccessKey)
        throw new Error(
          `Invalid response from STS.assumeRoleWithWebIdentity call with role ${I.RoleArn}`
        );
      let Z = N10(D),
        Y = {
          accessKeyId: G.AccessKeyId,
          secretAccessKey: G.SecretAccessKey,
          sessionToken: G.SessionToken,
          expiration: G.Expiration,
          ...(G.CredentialScope && { credentialScope: G.CredentialScope }),
          ...(Z && { accountId: Z }),
        };
      if (Z) G_1.setCredentialFeature(Y, 'RESOLVED_ACCOUNT_ID', 'T');
      return (G_1.setCredentialFeature(Y, 'CREDENTIALS_STS_ASSUME_ROLE_WEB_ID', 'k'), Y);
    };
  }, 'getDefaultRoleAssumerWithWebIdentity'),
  q10 = l2((A) => {
    return A?.metadata?.handlerProtocol === 'h2';
  }, 'isH2'),
  M10 = Gi(),
  L10 = l2((A, B) => {
    if (!B) return A;
    else
      return class Q extends A {
        static {
          l2(this, 'CustomizableSTSClient');
        }
        constructor(I) {
          super(I);
          for (let G of B) this.middlewareStack.use(G);
        }
      };
  }, 'getCustomizableStsClientCtor'),
  R10 = l2((A = {}, B) => gF4(A, L10(M10.STSClient, B)), 'getDefaultRoleAssumer'),
  O10 = l2((A = {}, B) => hF4(A, L10(M10.STSClient, B)), 'getDefaultRoleAssumerWithWebIdentity'),
  mF4 = l2(
    (A) => (B) => A({ roleAssumer: R10(B), roleAssumerWithWebIdentity: O10(B), ...B }),
    'decorateDefaultCredentialProvider'
  );
