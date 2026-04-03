// Module: LS1
// Params: op5,OtA

var { defineProperty: rB1, getOwnPropertyDescriptor: mZ4, getOwnPropertyNames: dZ4 } = Object,
  uZ4 = Object.prototype.hasOwnProperty,
  Q6 = (A, B) => rB1(A, 'name', { value: B, configurable: !0 }),
  pZ4 = (A, B) => {
    for (var Q in B) rB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  cZ4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of dZ4(B))
        if (!uZ4.call(A, G) && G !== Q)
          rB1(A, G, { get: () => B[G], enumerable: !(I = mZ4(B, G)) || I.enumerable });
    }
    return A;
  },
  lZ4 = (A) => cZ4(rB1({}, '__esModule', { value: !0 }), A),
  YtA = {};
pZ4(YtA, {
  $Command: () => JtA.Command,
  AccessDeniedException: () => CtA,
  AuthorizationPendingException: () => XtA,
  CreateTokenCommand: () => LtA,
  CreateTokenRequestFilterSensitiveLog: () => VtA,
  CreateTokenResponseFilterSensitiveLog: () => KtA,
  ExpiredTokenException: () => HtA,
  InternalServerException: () => ztA,
  InvalidClientException: () => wtA,
  InvalidGrantException: () => EtA,
  InvalidRequestException: () => UtA,
  InvalidScopeException: () => NtA,
  SSOOIDC: () => RtA,
  SSOOIDCClient: () => FtA,
  SSOOIDCServiceException: () => hW,
  SlowDownException: () => $tA,
  UnauthorizedClientException: () => qtA,
  UnsupportedGrantTypeException: () => MtA,
  __Client: () => WtA.Client,
});
OtA.exports = lZ4(YtA);
var AtA = WP(),
  iZ4 = FP(),
  nZ4 = JP(),
  BtA = FM(),
  aZ4 = QZ(),
  qS1 = o7(),
  sZ4 = zP(),
  rZ4 = mH(),
  QtA = gW(),
  WtA = T3(),
  ItA = XS1(),
  oZ4 = Q6((A) => {
    return Object.assign(A, {
      useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
      useFipsEndpoint: A.useFipsEndpoint ?? !1,
      defaultSigningName: 'sso-oauth',
    });
  }, 'resolveClientEndpointParameters'),
  tZ4 = {
    UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
    Endpoint: { type: 'builtInParams', name: 'endpoint' },
    Region: { type: 'builtInParams', name: 'region' },
    UseDualStack: { type: 'builtInParams', name: 'useDualstackEndpoint' },
  },
  eZ4 = aoA(),
  GtA = OP(),
  DtA = sB1(),
  ZtA = T3(),
  AY4 = Q6((A) => {
    let { httpAuthSchemes: B, httpAuthSchemeProvider: Q, credentials: I } = A;
    return {
      setHttpAuthScheme(G) {
        let D = B.findIndex((Z) => Z.schemeId === G.schemeId);
        if (D === -1) B.push(G);
        else B.splice(D, 1, G);
      },
      httpAuthSchemes() {
        return B;
      },
      setHttpAuthSchemeProvider(G) {
        Q = G;
      },
      httpAuthSchemeProvider() {
        return Q;
      },
      setCredentials(G) {
        I = G;
      },
      credentials() {
        return I;
      },
    };
  }, 'getHttpAuthExtensionConfiguration'),
  BY4 = Q6((A) => {
    return {
      httpAuthSchemes: A.httpAuthSchemes(),
      httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
      credentials: A.credentials(),
    };
  }, 'resolveHttpAuthRuntimeConfig'),
  QY4 = Q6((A, B) => {
    let Q = Object.assign(
      GtA.getAwsRegionExtensionConfiguration(A),
      ZtA.getDefaultExtensionConfiguration(A),
      DtA.getHttpHandlerExtensionConfiguration(A),
      AY4(A)
    );
    return (
      B.forEach((I) => I.configure(Q)),
      Object.assign(
        A,
        GtA.resolveAwsRegionExtensionConfiguration(Q),
        ZtA.resolveDefaultRuntimeConfig(Q),
        DtA.resolveHttpHandlerRuntimeConfig(Q),
        BY4(Q)
      )
    );
  }, 'resolveRuntimeExtensions'),
  FtA = class extends WtA.Client {
    static {
      Q6(this, 'SSOOIDCClient');
    }
    config;
    constructor(...[A]) {
      let B = eZ4.getRuntimeConfig(A || {});
      super(B);
      this.initConfig = B;
      let Q = oZ4(B),
        I = BtA.resolveUserAgentConfig(Q),
        G = QtA.resolveRetryConfig(I),
        D = aZ4.resolveRegionConfig(G),
        Z = AtA.resolveHostHeaderConfig(D),
        Y = rZ4.resolveEndpointConfig(Z),
        W = ItA.resolveHttpAuthSchemeConfig(Y),
        F = QY4(W, A?.extensions || []);
      ((this.config = F),
        this.middlewareStack.use(BtA.getUserAgentPlugin(this.config)),
        this.middlewareStack.use(QtA.getRetryPlugin(this.config)),
        this.middlewareStack.use(sZ4.getContentLengthPlugin(this.config)),
        this.middlewareStack.use(AtA.getHostHeaderPlugin(this.config)),
        this.middlewareStack.use(iZ4.getLoggerPlugin(this.config)),
        this.middlewareStack.use(nZ4.getRecursionDetectionPlugin(this.config)),
        this.middlewareStack.use(
          qS1.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: ItA.defaultSSOOIDCHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: Q6(
              async (J) =>
                new qS1.DefaultIdentityProviderConfig({ 'aws.auth#sigv4': J.credentials }),
              'identityProviderConfigProvider'
            ),
          })
        ),
        this.middlewareStack.use(qS1.getHttpSigningPlugin(this.config)));
    }
    destroy() {
      super.destroy();
    }
  },
  IY4 = T3(),
  GY4 = mH(),
  DY4 = kH(),
  JtA = T3(),
  Dv = T3(),
  ZY4 = T3(),
  hW = class A extends ZY4.ServiceException {
    static {
      Q6(this, 'SSOOIDCServiceException');
    }
    constructor(B) {
      super(B);
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  CtA = class A extends hW {
    static {
      Q6(this, 'AccessDeniedException');
    }
    name = 'AccessDeniedException';
    $fault = 'client';
    error;
    error_description;
    constructor(B) {
      super({ name: 'AccessDeniedException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  XtA = class A extends hW {
    static {
      Q6(this, 'AuthorizationPendingException');
    }
    name = 'AuthorizationPendingException';
    $fault = 'client';
    error;
    error_description;
    constructor(B) {
      super({ name: 'AuthorizationPendingException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  VtA = Q6(
    (A) => ({
      ...A,
      ...(A.clientSecret && { clientSecret: Dv.SENSITIVE_STRING }),
      ...(A.refreshToken && { refreshToken: Dv.SENSITIVE_STRING }),
      ...(A.codeVerifier && { codeVerifier: Dv.SENSITIVE_STRING }),
    }),
    'CreateTokenRequestFilterSensitiveLog'
  ),
  KtA = Q6(
    (A) => ({
      ...A,
      ...(A.accessToken && { accessToken: Dv.SENSITIVE_STRING }),
      ...(A.refreshToken && { refreshToken: Dv.SENSITIVE_STRING }),
      ...(A.idToken && { idToken: Dv.SENSITIVE_STRING }),
    }),
    'CreateTokenResponseFilterSensitiveLog'
  ),
  HtA = class A extends hW {
    static {
      Q6(this, 'ExpiredTokenException');
    }
    name = 'ExpiredTokenException';
    $fault = 'client';
    error;
    error_description;
    constructor(B) {
      super({ name: 'ExpiredTokenException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  ztA = class A extends hW {
    static {
      Q6(this, 'InternalServerException');
    }
    name = 'InternalServerException';
    $fault = 'server';
    error;
    error_description;
    constructor(B) {
      super({ name: 'InternalServerException', $fault: 'server', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  wtA = class A extends hW {
    static {
      Q6(this, 'InvalidClientException');
    }
    name = 'InvalidClientException';
    $fault = 'client';
    error;
    error_description;
    constructor(B) {
      super({ name: 'InvalidClientException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  EtA = class A extends hW {
    static {
      Q6(this, 'InvalidGrantException');
    }
    name = 'InvalidGrantException';
    $fault = 'client';
    error;
    error_description;
    constructor(B) {
      super({ name: 'InvalidGrantException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  UtA = class A extends hW {
    static {
      Q6(this, 'InvalidRequestException');
    }
    name = 'InvalidRequestException';
    $fault = 'client';
    error;
    error_description;
    constructor(B) {
      super({ name: 'InvalidRequestException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  NtA = class A extends hW {
    static {
      Q6(this, 'InvalidScopeException');
    }
    name = 'InvalidScopeException';
    $fault = 'client';
    error;
    error_description;
    constructor(B) {
      super({ name: 'InvalidScopeException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  $tA = class A extends hW {
    static {
      Q6(this, 'SlowDownException');
    }
    name = 'SlowDownException';
    $fault = 'client';
    error;
    error_description;
    constructor(B) {
      super({ name: 'SlowDownException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  qtA = class A extends hW {
    static {
      Q6(this, 'UnauthorizedClientException');
    }
    name = 'UnauthorizedClientException';
    $fault = 'client';
    error;
    error_description;
    constructor(B) {
      super({ name: 'UnauthorizedClientException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  MtA = class A extends hW {
    static {
      Q6(this, 'UnsupportedGrantTypeException');
    }
    name = 'UnsupportedGrantTypeException';
    $fault = 'client';
    error;
    error_description;
    constructor(B) {
      super({ name: 'UnsupportedGrantTypeException', $fault: 'client', ...B });
      (Object.setPrototypeOf(this, A.prototype),
        (this.error = B.error),
        (this.error_description = B.error_description));
    }
  },
  MS1 = c8(),
  YY4 = o7(),
  S2 = T3(),
  WY4 = Q6(async (A, B) => {
    let Q = YY4.requestBuilder(A, B),
      I = { 'content-type': 'application/json' };
    Q.bp('/token');
    let G;
    return (
      (G = JSON.stringify(
        S2.take(A, {
          clientId: [],
          clientSecret: [],
          code: [],
          codeVerifier: [],
          deviceCode: [],
          grantType: [],
          redirectUri: [],
          refreshToken: [],
          scope: Q6((D) => S2._json(D), 'scope'),
        })
      )),
      Q.m('POST').h(I).b(G),
      Q.build()
    );
  }, 'se_CreateTokenCommand'),
  FY4 = Q6(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return JY4(A, B);
    let Q = S2.map({ $metadata: jJ(A) }),
      I = S2.expectNonNull(S2.expectObject(await MS1.parseJsonBody(A.body, B)), 'body'),
      G = S2.take(I, {
        accessToken: S2.expectString,
        expiresIn: S2.expectInt32,
        idToken: S2.expectString,
        refreshToken: S2.expectString,
        tokenType: S2.expectString,
      });
    return (Object.assign(Q, G), Q);
  }, 'de_CreateTokenCommand'),
  JY4 = Q6(async (A, B) => {
    let Q = { ...A, body: await MS1.parseJsonErrorBody(A.body, B) },
      I = MS1.loadRestJsonErrorCode(A, Q.body);
    switch (I) {
      case 'AccessDeniedException':
      case 'com.amazonaws.ssooidc#AccessDeniedException':
        throw await XY4(Q, B);
      case 'AuthorizationPendingException':
      case 'com.amazonaws.ssooidc#AuthorizationPendingException':
        throw await VY4(Q, B);
      case 'ExpiredTokenException':
      case 'com.amazonaws.ssooidc#ExpiredTokenException':
        throw await KY4(Q, B);
      case 'InternalServerException':
      case 'com.amazonaws.ssooidc#InternalServerException':
        throw await HY4(Q, B);
      case 'InvalidClientException':
      case 'com.amazonaws.ssooidc#InvalidClientException':
        throw await zY4(Q, B);
      case 'InvalidGrantException':
      case 'com.amazonaws.ssooidc#InvalidGrantException':
        throw await wY4(Q, B);
      case 'InvalidRequestException':
      case 'com.amazonaws.ssooidc#InvalidRequestException':
        throw await EY4(Q, B);
      case 'InvalidScopeException':
      case 'com.amazonaws.ssooidc#InvalidScopeException':
        throw await UY4(Q, B);
      case 'SlowDownException':
      case 'com.amazonaws.ssooidc#SlowDownException':
        throw await NY4(Q, B);
      case 'UnauthorizedClientException':
      case 'com.amazonaws.ssooidc#UnauthorizedClientException':
        throw await $Y4(Q, B);
      case 'UnsupportedGrantTypeException':
      case 'com.amazonaws.ssooidc#UnsupportedGrantTypeException':
        throw await qY4(Q, B);
      default:
        let G = Q.body;
        return CY4({ output: A, parsedBody: G, errorCode: I });
    }
  }, 'de_CommandError'),
  CY4 = S2.withBaseException(hW),
  XY4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new CtA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_AccessDeniedExceptionRes'),
  VY4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new XtA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_AuthorizationPendingExceptionRes'),
  KY4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new HtA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_ExpiredTokenExceptionRes'),
  HY4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new ztA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_InternalServerExceptionRes'),
  zY4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new wtA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_InvalidClientExceptionRes'),
  wY4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new EtA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_InvalidGrantExceptionRes'),
  EY4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new UtA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_InvalidRequestExceptionRes'),
  UY4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new NtA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_InvalidScopeExceptionRes'),
  NY4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new $tA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_SlowDownExceptionRes'),
  $Y4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new qtA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_UnauthorizedClientExceptionRes'),
  qY4 = Q6(async (A, B) => {
    let Q = S2.map({}),
      I = A.body,
      G = S2.take(I, { error: S2.expectString, error_description: S2.expectString });
    Object.assign(Q, G);
    let D = new MtA({ $metadata: jJ(A), ...Q });
    return S2.decorateServiceException(D, A.body);
  }, 'de_UnsupportedGrantTypeExceptionRes'),
  jJ = Q6(
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
  LtA = class extends JtA.Command.classBuilder()
    .ep(tZ4)
    .m(function (A, B, Q, I) {
      return [
        DY4.getSerdePlugin(Q, this.serialize, this.deserialize),
        GY4.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSSSOOIDCService', 'CreateToken', {})
    .n('SSOOIDCClient', 'CreateTokenCommand')
    .f(VtA, KtA)
    .ser(WY4)
    .de(FY4)
    .build() {
    static {
      Q6(this, 'CreateTokenCommand');
    }
  },
  MY4 = { CreateTokenCommand: LtA },
  RtA = class extends FtA {
    static {
      Q6(this, 'SSOOIDC');
    }
  };
IY4.createAggregatedClient(MY4, RtA);
