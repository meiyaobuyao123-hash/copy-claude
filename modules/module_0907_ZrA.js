// Module: ZrA
// Params: Mp5,DrA

var { defineProperty: jB1, getOwnPropertyDescriptor: hI4, getOwnPropertyNames: mI4 } = Object,
  dI4 = Object.prototype.hasOwnProperty,
  $6 = (A, B) => jB1(A, 'name', { value: B, configurable: !0 }),
  uI4 = (A, B) => {
    for (var Q in B) jB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  pI4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of mI4(B))
        if (!dI4.call(A, G) && G !== Q)
          jB1(A, G, { get: () => B[G], enumerable: !(I = hI4(B, G)) || I.enumerable });
    }
    return A;
  },
  cI4 = (A) => pI4(jB1({}, '__esModule', { value: !0 }), A),
  hsA = {};
uI4(hsA, {
  GetRoleCredentialsCommand: () => QrA,
  GetRoleCredentialsRequestFilterSensitiveLog: () => csA,
  GetRoleCredentialsResponseFilterSensitiveLog: () => isA,
  InvalidRequestException: () => msA,
  ListAccountRolesCommand: () => rP1,
  ListAccountRolesRequestFilterSensitiveLog: () => nsA,
  ListAccountsCommand: () => oP1,
  ListAccountsRequestFilterSensitiveLog: () => asA,
  LogoutCommand: () => IrA,
  LogoutRequestFilterSensitiveLog: () => ssA,
  ResourceNotFoundException: () => dsA,
  RoleCredentialsFilterSensitiveLog: () => lsA,
  SSO: () => GrA,
  SSOClient: () => kB1,
  SSOServiceException: () => rf,
  TooManyRequestsException: () => usA,
  UnauthorizedException: () => psA,
  __Client: () => k2.Client,
  paginateListAccountRoles: () => zG4,
  paginateListAccounts: () => wG4,
});
DrA.exports = cI4(hsA);
var ksA = WP(),
  lI4 = FP(),
  iI4 = JP(),
  xsA = FM(),
  nI4 = QZ(),
  CU = o7(),
  aI4 = zP(),
  sl = mH(),
  fsA = gW(),
  vsA = OP1(),
  sI4 = $6((A) => {
    return Object.assign(A, {
      useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
      useFipsEndpoint: A.useFipsEndpoint ?? !1,
      defaultSigningName: 'awsssoportal',
    });
  }, 'resolveClientEndpointParameters'),
  yB1 = {
    UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
    Endpoint: { type: 'builtInParams', name: 'endpoint' },
    Region: { type: 'builtInParams', name: 'region' },
    UseDualStack: { type: 'builtInParams', name: 'useDualstackEndpoint' },
  },
  rI4 = NsA(),
  bsA = OP(),
  gsA = ysA(),
  k2 = ll(),
  oI4 = $6((A) => {
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
  tI4 = $6((A) => {
    return {
      httpAuthSchemes: A.httpAuthSchemes(),
      httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
      credentials: A.credentials(),
    };
  }, 'resolveHttpAuthRuntimeConfig'),
  eI4 = $6((A, B) => {
    let Q = Object.assign(
      bsA.getAwsRegionExtensionConfiguration(A),
      k2.getDefaultExtensionConfiguration(A),
      gsA.getHttpHandlerExtensionConfiguration(A),
      oI4(A)
    );
    return (
      B.forEach((I) => I.configure(Q)),
      Object.assign(
        A,
        bsA.resolveAwsRegionExtensionConfiguration(Q),
        k2.resolveDefaultRuntimeConfig(Q),
        gsA.resolveHttpHandlerRuntimeConfig(Q),
        tI4(Q)
      )
    );
  }, 'resolveRuntimeExtensions'),
  kB1 = class extends k2.Client {
    static {
      $6(this, 'SSOClient');
    }
    config;
    constructor(...[A]) {
      let B = rI4.getRuntimeConfig(A || {});
      super(B);
      this.initConfig = B;
      let Q = sI4(B),
        I = xsA.resolveUserAgentConfig(Q),
        G = fsA.resolveRetryConfig(I),
        D = nI4.resolveRegionConfig(G),
        Z = ksA.resolveHostHeaderConfig(D),
        Y = sl.resolveEndpointConfig(Z),
        W = vsA.resolveHttpAuthSchemeConfig(Y),
        F = eI4(W, A?.extensions || []);
      ((this.config = F),
        this.middlewareStack.use(xsA.getUserAgentPlugin(this.config)),
        this.middlewareStack.use(fsA.getRetryPlugin(this.config)),
        this.middlewareStack.use(aI4.getContentLengthPlugin(this.config)),
        this.middlewareStack.use(ksA.getHostHeaderPlugin(this.config)),
        this.middlewareStack.use(lI4.getLoggerPlugin(this.config)),
        this.middlewareStack.use(iI4.getRecursionDetectionPlugin(this.config)),
        this.middlewareStack.use(
          CU.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: vsA.defaultSSOHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: $6(
              async (J) =>
                new CU.DefaultIdentityProviderConfig({ 'aws.auth#sigv4': J.credentials }),
              'identityProviderConfigProvider'
            ),
          })
        ),
        this.middlewareStack.use(CU.getHttpSigningPlugin(this.config)));
    }
    destroy() {
      super.destroy();
    }
  },
  xB1 = kH(),
  rf = class A extends k2.ServiceException {
    static {
      $6(this, 'SSOServiceException');
    }
    constructor(B) {
      super(B);
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  msA = class A extends rf {
    static {
      $6(this, 'InvalidRequestException');
    }
    name = 'InvalidRequestException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'InvalidRequestException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  dsA = class A extends rf {
    static {
      $6(this, 'ResourceNotFoundException');
    }
    name = 'ResourceNotFoundException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ResourceNotFoundException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  usA = class A extends rf {
    static {
      $6(this, 'TooManyRequestsException');
    }
    name = 'TooManyRequestsException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'TooManyRequestsException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  psA = class A extends rf {
    static {
      $6(this, 'UnauthorizedException');
    }
    name = 'UnauthorizedException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'UnauthorizedException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  csA = $6(
    (A) => ({ ...A, ...(A.accessToken && { accessToken: k2.SENSITIVE_STRING }) }),
    'GetRoleCredentialsRequestFilterSensitiveLog'
  ),
  lsA = $6(
    (A) => ({
      ...A,
      ...(A.secretAccessKey && { secretAccessKey: k2.SENSITIVE_STRING }),
      ...(A.sessionToken && { sessionToken: k2.SENSITIVE_STRING }),
    }),
    'RoleCredentialsFilterSensitiveLog'
  ),
  isA = $6(
    (A) => ({ ...A, ...(A.roleCredentials && { roleCredentials: lsA(A.roleCredentials) }) }),
    'GetRoleCredentialsResponseFilterSensitiveLog'
  ),
  nsA = $6(
    (A) => ({ ...A, ...(A.accessToken && { accessToken: k2.SENSITIVE_STRING }) }),
    'ListAccountRolesRequestFilterSensitiveLog'
  ),
  asA = $6(
    (A) => ({ ...A, ...(A.accessToken && { accessToken: k2.SENSITIVE_STRING }) }),
    'ListAccountsRequestFilterSensitiveLog'
  ),
  ssA = $6(
    (A) => ({ ...A, ...(A.accessToken && { accessToken: k2.SENSITIVE_STRING }) }),
    'LogoutRequestFilterSensitiveLog'
  ),
  al = c8(),
  AG4 = $6(async (A, B) => {
    let Q = CU.requestBuilder(A, B),
      I = k2.map({}, k2.isSerializableHeaderValue, { [bB1]: A[vB1] });
    Q.bp('/federation/credentials');
    let G = k2.map({
        [KG4]: [, k2.expectNonNull(A[VG4], 'roleName')],
        [osA]: [, k2.expectNonNull(A[rsA], 'accountId')],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_GetRoleCredentialsCommand'),
  BG4 = $6(async (A, B) => {
    let Q = CU.requestBuilder(A, B),
      I = k2.map({}, k2.isSerializableHeaderValue, { [bB1]: A[vB1] });
    Q.bp('/assignment/roles');
    let G = k2.map({
        [BrA]: [, A[ArA]],
        [esA]: [() => A.maxResults !== void 0, () => A[tsA].toString()],
        [osA]: [, k2.expectNonNull(A[rsA], 'accountId')],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListAccountRolesCommand'),
  QG4 = $6(async (A, B) => {
    let Q = CU.requestBuilder(A, B),
      I = k2.map({}, k2.isSerializableHeaderValue, { [bB1]: A[vB1] });
    Q.bp('/assignment/accounts');
    let G = k2.map({
        [BrA]: [, A[ArA]],
        [esA]: [() => A.maxResults !== void 0, () => A[tsA].toString()],
      }),
      D;
    return (Q.m('GET').h(I).q(G).b(D), Q.build());
  }, 'se_ListAccountsCommand'),
  IG4 = $6(async (A, B) => {
    let Q = CU.requestBuilder(A, B),
      I = k2.map({}, k2.isSerializableHeaderValue, { [bB1]: A[vB1] });
    Q.bp('/logout');
    let G;
    return (Q.m('POST').h(I).b(G), Q.build());
  }, 'se_LogoutCommand'),
  GG4 = $6(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return fB1(A, B);
    let Q = k2.map({ $metadata: EM(A) }),
      I = k2.expectNonNull(k2.expectObject(await al.parseJsonBody(A.body, B)), 'body'),
      G = k2.take(I, { roleCredentials: k2._json });
    return (Object.assign(Q, G), Q);
  }, 'de_GetRoleCredentialsCommand'),
  DG4 = $6(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return fB1(A, B);
    let Q = k2.map({ $metadata: EM(A) }),
      I = k2.expectNonNull(k2.expectObject(await al.parseJsonBody(A.body, B)), 'body'),
      G = k2.take(I, { nextToken: k2.expectString, roleList: k2._json });
    return (Object.assign(Q, G), Q);
  }, 'de_ListAccountRolesCommand'),
  ZG4 = $6(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return fB1(A, B);
    let Q = k2.map({ $metadata: EM(A) }),
      I = k2.expectNonNull(k2.expectObject(await al.parseJsonBody(A.body, B)), 'body'),
      G = k2.take(I, { accountList: k2._json, nextToken: k2.expectString });
    return (Object.assign(Q, G), Q);
  }, 'de_ListAccountsCommand'),
  YG4 = $6(async (A, B) => {
    if (A.statusCode !== 200 && A.statusCode >= 300) return fB1(A, B);
    let Q = k2.map({ $metadata: EM(A) });
    return (await k2.collectBody(A.body, B), Q);
  }, 'de_LogoutCommand'),
  fB1 = $6(async (A, B) => {
    let Q = { ...A, body: await al.parseJsonErrorBody(A.body, B) },
      I = al.loadRestJsonErrorCode(A, Q.body);
    switch (I) {
      case 'InvalidRequestException':
      case 'com.amazonaws.sso#InvalidRequestException':
        throw await FG4(Q, B);
      case 'ResourceNotFoundException':
      case 'com.amazonaws.sso#ResourceNotFoundException':
        throw await JG4(Q, B);
      case 'TooManyRequestsException':
      case 'com.amazonaws.sso#TooManyRequestsException':
        throw await CG4(Q, B);
      case 'UnauthorizedException':
      case 'com.amazonaws.sso#UnauthorizedException':
        throw await XG4(Q, B);
      default:
        let G = Q.body;
        return WG4({ output: A, parsedBody: G, errorCode: I });
    }
  }, 'de_CommandError'),
  WG4 = k2.withBaseException(rf),
  FG4 = $6(async (A, B) => {
    let Q = k2.map({}),
      I = A.body,
      G = k2.take(I, { message: k2.expectString });
    Object.assign(Q, G);
    let D = new msA({ $metadata: EM(A), ...Q });
    return k2.decorateServiceException(D, A.body);
  }, 'de_InvalidRequestExceptionRes'),
  JG4 = $6(async (A, B) => {
    let Q = k2.map({}),
      I = A.body,
      G = k2.take(I, { message: k2.expectString });
    Object.assign(Q, G);
    let D = new dsA({ $metadata: EM(A), ...Q });
    return k2.decorateServiceException(D, A.body);
  }, 'de_ResourceNotFoundExceptionRes'),
  CG4 = $6(async (A, B) => {
    let Q = k2.map({}),
      I = A.body,
      G = k2.take(I, { message: k2.expectString });
    Object.assign(Q, G);
    let D = new usA({ $metadata: EM(A), ...Q });
    return k2.decorateServiceException(D, A.body);
  }, 'de_TooManyRequestsExceptionRes'),
  XG4 = $6(async (A, B) => {
    let Q = k2.map({}),
      I = A.body,
      G = k2.take(I, { message: k2.expectString });
    Object.assign(Q, G);
    let D = new psA({ $metadata: EM(A), ...Q });
    return k2.decorateServiceException(D, A.body);
  }, 'de_UnauthorizedExceptionRes'),
  EM = $6(
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
  rsA = 'accountId',
  vB1 = 'accessToken',
  osA = 'account_id',
  tsA = 'maxResults',
  esA = 'max_result',
  ArA = 'nextToken',
  BrA = 'next_token',
  VG4 = 'roleName',
  KG4 = 'role_name',
  bB1 = 'x-amz-sso_bearer_token',
  QrA = class extends k2.Command.classBuilder()
    .ep(yB1)
    .m(function (A, B, Q, I) {
      return [
        xB1.getSerdePlugin(Q, this.serialize, this.deserialize),
        sl.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('SWBPortalService', 'GetRoleCredentials', {})
    .n('SSOClient', 'GetRoleCredentialsCommand')
    .f(csA, isA)
    .ser(AG4)
    .de(GG4)
    .build() {
    static {
      $6(this, 'GetRoleCredentialsCommand');
    }
  },
  rP1 = class extends k2.Command.classBuilder()
    .ep(yB1)
    .m(function (A, B, Q, I) {
      return [
        xB1.getSerdePlugin(Q, this.serialize, this.deserialize),
        sl.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('SWBPortalService', 'ListAccountRoles', {})
    .n('SSOClient', 'ListAccountRolesCommand')
    .f(nsA, void 0)
    .ser(BG4)
    .de(DG4)
    .build() {
    static {
      $6(this, 'ListAccountRolesCommand');
    }
  },
  oP1 = class extends k2.Command.classBuilder()
    .ep(yB1)
    .m(function (A, B, Q, I) {
      return [
        xB1.getSerdePlugin(Q, this.serialize, this.deserialize),
        sl.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('SWBPortalService', 'ListAccounts', {})
    .n('SSOClient', 'ListAccountsCommand')
    .f(asA, void 0)
    .ser(QG4)
    .de(ZG4)
    .build() {
    static {
      $6(this, 'ListAccountsCommand');
    }
  },
  IrA = class extends k2.Command.classBuilder()
    .ep(yB1)
    .m(function (A, B, Q, I) {
      return [
        xB1.getSerdePlugin(Q, this.serialize, this.deserialize),
        sl.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('SWBPortalService', 'Logout', {})
    .n('SSOClient', 'LogoutCommand')
    .f(ssA, void 0)
    .ser(IG4)
    .de(YG4)
    .build() {
    static {
      $6(this, 'LogoutCommand');
    }
  },
  HG4 = {
    GetRoleCredentialsCommand: QrA,
    ListAccountRolesCommand: rP1,
    ListAccountsCommand: oP1,
    LogoutCommand: IrA,
  },
  GrA = class extends kB1 {
    static {
      $6(this, 'SSO');
    }
  };
k2.createAggregatedClient(HG4, GrA);
var zG4 = CU.createPaginator(kB1, rP1, 'nextToken', 'nextToken', 'maxResults'),
  wG4 = CU.createPaginator(kB1, oP1, 'nextToken', 'nextToken', 'maxResults');
