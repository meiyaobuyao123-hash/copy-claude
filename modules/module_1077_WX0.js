// Module: WX0
// Params: VY8,YX0

var { defineProperty: gG1, getOwnPropertyDescriptor: Ov4, getOwnPropertyNames: Tv4 } = Object,
  Pv4 = Object.prototype.hasOwnProperty,
  aA = (A, B) => gG1(A, 'name', { value: B, configurable: !0 }),
  Sv4 = (A, B) => {
    for (var Q in B) gG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  _v4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Tv4(B))
        if (!Pv4.call(A, G) && G !== Q)
          gG1(A, G, { get: () => B[G], enumerable: !(I = Ov4(B, G)) || I.enumerable });
    }
    return A;
  },
  jv4 = (A) => _v4(gG1({}, '__esModule', { value: !0 }), A),
  zC0 = {};
Sv4(zC0, {
  AmbiguousRoleResolutionType: () => dv4,
  CognitoIdentity: () => ZX0,
  CognitoIdentityClient: () => lf1,
  CognitoIdentityServiceException: () => oW,
  ConcurrentModificationException: () => TC0,
  CreateIdentityPoolCommand: () => gC0,
  CredentialsFilterSensitiveLog: () => SC0,
  DeleteIdentitiesCommand: () => hC0,
  DeleteIdentityPoolCommand: () => mC0,
  DescribeIdentityCommand: () => dC0,
  DescribeIdentityPoolCommand: () => uC0,
  DeveloperUserAlreadyRegisteredException: () => OC0,
  ErrorCode: () => uv4,
  ExternalServiceException: () => LC0,
  GetCredentialsForIdentityCommand: () => pC0,
  GetCredentialsForIdentityInputFilterSensitiveLog: () => PC0,
  GetCredentialsForIdentityResponseFilterSensitiveLog: () => _C0,
  GetIdCommand: () => cC0,
  GetIdInputFilterSensitiveLog: () => jC0,
  GetIdentityPoolRolesCommand: () => lC0,
  GetOpenIdTokenCommand: () => iC0,
  GetOpenIdTokenForDeveloperIdentityCommand: () => nC0,
  GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog: () => xC0,
  GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog: () => fC0,
  GetOpenIdTokenInputFilterSensitiveLog: () => yC0,
  GetOpenIdTokenResponseFilterSensitiveLog: () => kC0,
  GetPrincipalTagAttributeMapCommand: () => aC0,
  InternalErrorException: () => wC0,
  InvalidIdentityPoolConfigurationException: () => RC0,
  InvalidParameterException: () => EC0,
  LimitExceededException: () => UC0,
  ListIdentitiesCommand: () => sC0,
  ListIdentityPoolsCommand: () => if1,
  ListTagsForResourceCommand: () => rC0,
  LookupDeveloperIdentityCommand: () => oC0,
  MappingRuleMatchType: () => pv4,
  MergeDeveloperIdentitiesCommand: () => tC0,
  NotAuthorizedException: () => NC0,
  ResourceConflictException: () => $C0,
  ResourceNotFoundException: () => MC0,
  RoleMappingType: () => cv4,
  SetIdentityPoolRolesCommand: () => eC0,
  SetPrincipalTagAttributeMapCommand: () => AX0,
  TagResourceCommand: () => BX0,
  TooManyRequestsException: () => qC0,
  UnlinkDeveloperIdentityCommand: () => QX0,
  UnlinkIdentityCommand: () => IX0,
  UnlinkIdentityInputFilterSensitiveLog: () => vC0,
  UntagResourceCommand: () => GX0,
  UpdateIdentityPoolCommand: () => DX0,
  __Client: () => nA.Client,
  paginateListIdentityPools: () => Ag4,
});
YX0.exports = jv4(zC0);
var CC0 = WP(),
  yv4 = FP(),
  kv4 = JP(),
  XC0 = FM(),
  xv4 = QZ(),
  bG1 = o7(),
  fv4 = zP(),
  mB = mH(),
  VC0 = gW(),
  KC0 = Lf1(),
  vv4 = aA((A) => {
    return Object.assign(A, {
      useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
      useFipsEndpoint: A.useFipsEndpoint ?? !1,
      defaultSigningName: 'cognito-identity',
    });
  }, 'resolveClientEndpointParameters'),
  Z3 = {
    UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
    Endpoint: { type: 'builtInParams', name: 'endpoint' },
    Region: { type: 'builtInParams', name: 'region' },
    UseDualStack: { type: 'builtInParams', name: 'useDualstackEndpoint' },
  },
  bv4 = GC0(),
  HC0 = OP(),
  cf1 = JC0(),
  nA = Ra(),
  gv4 = aA((A) => {
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
  hv4 = aA((A) => {
    return {
      httpAuthSchemes: A.httpAuthSchemes(),
      httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
      credentials: A.credentials(),
    };
  }, 'resolveHttpAuthRuntimeConfig'),
  mv4 = aA((A, B) => {
    let Q = Object.assign(
      HC0.getAwsRegionExtensionConfiguration(A),
      nA.getDefaultExtensionConfiguration(A),
      cf1.getHttpHandlerExtensionConfiguration(A),
      gv4(A)
    );
    return (
      B.forEach((I) => I.configure(Q)),
      Object.assign(
        A,
        HC0.resolveAwsRegionExtensionConfiguration(Q),
        nA.resolveDefaultRuntimeConfig(Q),
        cf1.resolveHttpHandlerRuntimeConfig(Q),
        hv4(Q)
      )
    );
  }, 'resolveRuntimeExtensions'),
  lf1 = class extends nA.Client {
    static {
      aA(this, 'CognitoIdentityClient');
    }
    config;
    constructor(...[A]) {
      let B = bv4.getRuntimeConfig(A || {});
      super(B);
      this.initConfig = B;
      let Q = vv4(B),
        I = XC0.resolveUserAgentConfig(Q),
        G = VC0.resolveRetryConfig(I),
        D = xv4.resolveRegionConfig(G),
        Z = CC0.resolveHostHeaderConfig(D),
        Y = mB.resolveEndpointConfig(Z),
        W = KC0.resolveHttpAuthSchemeConfig(Y),
        F = mv4(W, A?.extensions || []);
      ((this.config = F),
        this.middlewareStack.use(XC0.getUserAgentPlugin(this.config)),
        this.middlewareStack.use(VC0.getRetryPlugin(this.config)),
        this.middlewareStack.use(fv4.getContentLengthPlugin(this.config)),
        this.middlewareStack.use(CC0.getHostHeaderPlugin(this.config)),
        this.middlewareStack.use(yv4.getLoggerPlugin(this.config)),
        this.middlewareStack.use(kv4.getRecursionDetectionPlugin(this.config)),
        this.middlewareStack.use(
          bG1.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider:
              KC0.defaultCognitoIdentityHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: aA(
              async (J) =>
                new bG1.DefaultIdentityProviderConfig({ 'aws.auth#sigv4': J.credentials }),
              'identityProviderConfigProvider'
            ),
          })
        ),
        this.middlewareStack.use(bG1.getHttpSigningPlugin(this.config)));
    }
    destroy() {
      super.destroy();
    }
  },
  Y3 = kH(),
  CQ = c8(),
  oW = class A extends nA.ServiceException {
    static {
      aA(this, 'CognitoIdentityServiceException');
    }
    constructor(B) {
      super(B);
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  dv4 = { AUTHENTICATED_ROLE: 'AuthenticatedRole', DENY: 'Deny' },
  wC0 = class A extends oW {
    static {
      aA(this, 'InternalErrorException');
    }
    name = 'InternalErrorException';
    $fault = 'server';
    constructor(B) {
      super({ name: 'InternalErrorException', $fault: 'server', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  EC0 = class A extends oW {
    static {
      aA(this, 'InvalidParameterException');
    }
    name = 'InvalidParameterException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'InvalidParameterException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  UC0 = class A extends oW {
    static {
      aA(this, 'LimitExceededException');
    }
    name = 'LimitExceededException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'LimitExceededException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  NC0 = class A extends oW {
    static {
      aA(this, 'NotAuthorizedException');
    }
    name = 'NotAuthorizedException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'NotAuthorizedException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  $C0 = class A extends oW {
    static {
      aA(this, 'ResourceConflictException');
    }
    name = 'ResourceConflictException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ResourceConflictException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  qC0 = class A extends oW {
    static {
      aA(this, 'TooManyRequestsException');
    }
    name = 'TooManyRequestsException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'TooManyRequestsException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  uv4 = { ACCESS_DENIED: 'AccessDenied', INTERNAL_SERVER_ERROR: 'InternalServerError' },
  MC0 = class A extends oW {
    static {
      aA(this, 'ResourceNotFoundException');
    }
    name = 'ResourceNotFoundException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ResourceNotFoundException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  LC0 = class A extends oW {
    static {
      aA(this, 'ExternalServiceException');
    }
    name = 'ExternalServiceException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ExternalServiceException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  RC0 = class A extends oW {
    static {
      aA(this, 'InvalidIdentityPoolConfigurationException');
    }
    name = 'InvalidIdentityPoolConfigurationException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'InvalidIdentityPoolConfigurationException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  pv4 = {
    CONTAINS: 'Contains',
    EQUALS: 'Equals',
    NOT_EQUAL: 'NotEqual',
    STARTS_WITH: 'StartsWith',
  },
  cv4 = { RULES: 'Rules', TOKEN: 'Token' },
  OC0 = class A extends oW {
    static {
      aA(this, 'DeveloperUserAlreadyRegisteredException');
    }
    name = 'DeveloperUserAlreadyRegisteredException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'DeveloperUserAlreadyRegisteredException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  TC0 = class A extends oW {
    static {
      aA(this, 'ConcurrentModificationException');
    }
    name = 'ConcurrentModificationException';
    $fault = 'client';
    constructor(B) {
      super({ name: 'ConcurrentModificationException', $fault: 'client', ...B });
      Object.setPrototypeOf(this, A.prototype);
    }
  },
  PC0 = aA(
    (A) => ({ ...A, ...(A.Logins && { Logins: nA.SENSITIVE_STRING }) }),
    'GetCredentialsForIdentityInputFilterSensitiveLog'
  ),
  SC0 = aA(
    (A) => ({ ...A, ...(A.SecretKey && { SecretKey: nA.SENSITIVE_STRING }) }),
    'CredentialsFilterSensitiveLog'
  ),
  _C0 = aA(
    (A) => ({ ...A, ...(A.Credentials && { Credentials: SC0(A.Credentials) }) }),
    'GetCredentialsForIdentityResponseFilterSensitiveLog'
  ),
  jC0 = aA(
    (A) => ({ ...A, ...(A.Logins && { Logins: nA.SENSITIVE_STRING }) }),
    'GetIdInputFilterSensitiveLog'
  ),
  yC0 = aA(
    (A) => ({ ...A, ...(A.Logins && { Logins: nA.SENSITIVE_STRING }) }),
    'GetOpenIdTokenInputFilterSensitiveLog'
  ),
  kC0 = aA(
    (A) => ({ ...A, ...(A.Token && { Token: nA.SENSITIVE_STRING }) }),
    'GetOpenIdTokenResponseFilterSensitiveLog'
  ),
  xC0 = aA(
    (A) => ({ ...A, ...(A.Logins && { Logins: nA.SENSITIVE_STRING }) }),
    'GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog'
  ),
  fC0 = aA(
    (A) => ({ ...A, ...(A.Token && { Token: nA.SENSITIVE_STRING }) }),
    'GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog'
  ),
  vC0 = aA(
    (A) => ({ ...A, ...(A.Logins && { Logins: nA.SENSITIVE_STRING }) }),
    'UnlinkIdentityInputFilterSensitiveLog'
  ),
  lv4 = aA(async (A, B) => {
    let Q = dB('CreateIdentityPool'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_CreateIdentityPoolCommand'),
  iv4 = aA(async (A, B) => {
    let Q = dB('DeleteIdentities'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_DeleteIdentitiesCommand'),
  nv4 = aA(async (A, B) => {
    let Q = dB('DeleteIdentityPool'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_DeleteIdentityPoolCommand'),
  av4 = aA(async (A, B) => {
    let Q = dB('DescribeIdentity'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_DescribeIdentityCommand'),
  sv4 = aA(async (A, B) => {
    let Q = dB('DescribeIdentityPool'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_DescribeIdentityPoolCommand'),
  rv4 = aA(async (A, B) => {
    let Q = dB('GetCredentialsForIdentity'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_GetCredentialsForIdentityCommand'),
  ov4 = aA(async (A, B) => {
    let Q = dB('GetId'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_GetIdCommand'),
  tv4 = aA(async (A, B) => {
    let Q = dB('GetIdentityPoolRoles'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_GetIdentityPoolRolesCommand'),
  ev4 = aA(async (A, B) => {
    let Q = dB('GetOpenIdToken'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_GetOpenIdTokenCommand'),
  Ab4 = aA(async (A, B) => {
    let Q = dB('GetOpenIdTokenForDeveloperIdentity'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_GetOpenIdTokenForDeveloperIdentityCommand'),
  Bb4 = aA(async (A, B) => {
    let Q = dB('GetPrincipalTagAttributeMap'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_GetPrincipalTagAttributeMapCommand'),
  Qb4 = aA(async (A, B) => {
    let Q = dB('ListIdentities'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_ListIdentitiesCommand'),
  Ib4 = aA(async (A, B) => {
    let Q = dB('ListIdentityPools'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_ListIdentityPoolsCommand'),
  Gb4 = aA(async (A, B) => {
    let Q = dB('ListTagsForResource'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_ListTagsForResourceCommand'),
  Db4 = aA(async (A, B) => {
    let Q = dB('LookupDeveloperIdentity'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_LookupDeveloperIdentityCommand'),
  Zb4 = aA(async (A, B) => {
    let Q = dB('MergeDeveloperIdentities'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_MergeDeveloperIdentitiesCommand'),
  Yb4 = aA(async (A, B) => {
    let Q = dB('SetIdentityPoolRoles'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_SetIdentityPoolRolesCommand'),
  Wb4 = aA(async (A, B) => {
    let Q = dB('SetPrincipalTagAttributeMap'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_SetPrincipalTagAttributeMapCommand'),
  Fb4 = aA(async (A, B) => {
    let Q = dB('TagResource'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_TagResourceCommand'),
  Jb4 = aA(async (A, B) => {
    let Q = dB('UnlinkDeveloperIdentity'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_UnlinkDeveloperIdentityCommand'),
  Cb4 = aA(async (A, B) => {
    let Q = dB('UnlinkIdentity'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_UnlinkIdentityCommand'),
  Xb4 = aA(async (A, B) => {
    let Q = dB('UntagResource'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_UntagResourceCommand'),
  Vb4 = aA(async (A, B) => {
    let Q = dB('UpdateIdentityPool'),
      I;
    return ((I = JSON.stringify(nA._json(A))), F3(B, Q, '/', void 0, I));
  }, 'se_UpdateIdentityPoolCommand'),
  Kb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_CreateIdentityPoolCommand'),
  Hb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_DeleteIdentitiesCommand'),
  zb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    return (await nA.collectBody(A.body, B), { $metadata: l6(A) });
  }, 'de_DeleteIdentityPoolCommand'),
  wb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = bC0(Q, B)), { $metadata: l6(A), ...I });
  }, 'de_DescribeIdentityCommand'),
  Eb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_DescribeIdentityPoolCommand'),
  Ub4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = sb4(Q, B)), { $metadata: l6(A), ...I });
  }, 'de_GetCredentialsForIdentityCommand'),
  Nb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_GetIdCommand'),
  $b4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_GetIdentityPoolRolesCommand'),
  qb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_GetOpenIdTokenCommand'),
  Mb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_GetOpenIdTokenForDeveloperIdentityCommand'),
  Lb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_GetPrincipalTagAttributeMapCommand'),
  Rb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = ob4(Q, B)), { $metadata: l6(A), ...I });
  }, 'de_ListIdentitiesCommand'),
  Ob4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_ListIdentityPoolsCommand'),
  Tb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_ListTagsForResourceCommand'),
  Pb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_LookupDeveloperIdentityCommand'),
  Sb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_MergeDeveloperIdentitiesCommand'),
  _b4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    return (await nA.collectBody(A.body, B), { $metadata: l6(A) });
  }, 'de_SetIdentityPoolRolesCommand'),
  jb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_SetPrincipalTagAttributeMapCommand'),
  yb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_TagResourceCommand'),
  kb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    return (await nA.collectBody(A.body, B), { $metadata: l6(A) });
  }, 'de_UnlinkDeveloperIdentityCommand'),
  xb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    return (await nA.collectBody(A.body, B), { $metadata: l6(A) });
  }, 'de_UnlinkIdentityCommand'),
  fb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_UntagResourceCommand'),
  vb4 = aA(async (A, B) => {
    if (A.statusCode >= 300) return W3(A, B);
    let Q = await CQ.parseJsonBody(A.body, B),
      I = {};
    return ((I = nA._json(Q)), { $metadata: l6(A), ...I });
  }, 'de_UpdateIdentityPoolCommand'),
  W3 = aA(async (A, B) => {
    let Q = { ...A, body: await CQ.parseJsonErrorBody(A.body, B) },
      I = CQ.loadRestJsonErrorCode(A, Q.body);
    switch (I) {
      case 'InternalErrorException':
      case 'com.amazonaws.cognitoidentity#InternalErrorException':
        throw await mb4(Q, B);
      case 'InvalidParameterException':
      case 'com.amazonaws.cognitoidentity#InvalidParameterException':
        throw await ub4(Q, B);
      case 'LimitExceededException':
      case 'com.amazonaws.cognitoidentity#LimitExceededException':
        throw await pb4(Q, B);
      case 'NotAuthorizedException':
      case 'com.amazonaws.cognitoidentity#NotAuthorizedException':
        throw await cb4(Q, B);
      case 'ResourceConflictException':
      case 'com.amazonaws.cognitoidentity#ResourceConflictException':
        throw await lb4(Q, B);
      case 'TooManyRequestsException':
      case 'com.amazonaws.cognitoidentity#TooManyRequestsException':
        throw await nb4(Q, B);
      case 'ResourceNotFoundException':
      case 'com.amazonaws.cognitoidentity#ResourceNotFoundException':
        throw await ib4(Q, B);
      case 'ExternalServiceException':
      case 'com.amazonaws.cognitoidentity#ExternalServiceException':
        throw await hb4(Q, B);
      case 'InvalidIdentityPoolConfigurationException':
      case 'com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException':
        throw await db4(Q, B);
      case 'DeveloperUserAlreadyRegisteredException':
      case 'com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException':
        throw await gb4(Q, B);
      case 'ConcurrentModificationException':
      case 'com.amazonaws.cognitoidentity#ConcurrentModificationException':
        throw await bb4(Q, B);
      default:
        let G = Q.body;
        return tb4({ output: A, parsedBody: G, errorCode: I });
    }
  }, 'de_CommandError'),
  bb4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new TC0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_ConcurrentModificationExceptionRes'),
  gb4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new OC0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_DeveloperUserAlreadyRegisteredExceptionRes'),
  hb4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new LC0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_ExternalServiceExceptionRes'),
  mb4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new wC0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_InternalErrorExceptionRes'),
  db4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new RC0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_InvalidIdentityPoolConfigurationExceptionRes'),
  ub4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new EC0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_InvalidParameterExceptionRes'),
  pb4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new UC0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_LimitExceededExceptionRes'),
  cb4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new NC0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_NotAuthorizedExceptionRes'),
  lb4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new $C0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_ResourceConflictExceptionRes'),
  ib4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new MC0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_ResourceNotFoundExceptionRes'),
  nb4 = aA(async (A, B) => {
    let Q = A.body,
      I = nA._json(Q),
      G = new qC0({ $metadata: l6(A), ...I });
    return nA.decorateServiceException(G, Q);
  }, 'de_TooManyRequestsExceptionRes'),
  ab4 = aA((A, B) => {
    return nA.take(A, {
      AccessKeyId: nA.expectString,
      Expiration: aA(
        (Q) => nA.expectNonNull(nA.parseEpochTimestamp(nA.expectNumber(Q))),
        'Expiration'
      ),
      SecretKey: nA.expectString,
      SessionToken: nA.expectString,
    });
  }, 'de_Credentials'),
  sb4 = aA((A, B) => {
    return nA.take(A, {
      Credentials: aA((Q) => ab4(Q, B), 'Credentials'),
      IdentityId: nA.expectString,
    });
  }, 'de_GetCredentialsForIdentityResponse'),
  rb4 = aA((A, B) => {
    return (A || [])
      .filter((I) => I != null)
      .map((I) => {
        return bC0(I, B);
      });
  }, 'de_IdentitiesList'),
  bC0 = aA((A, B) => {
    return nA.take(A, {
      CreationDate: aA(
        (Q) => nA.expectNonNull(nA.parseEpochTimestamp(nA.expectNumber(Q))),
        'CreationDate'
      ),
      IdentityId: nA.expectString,
      LastModifiedDate: aA(
        (Q) => nA.expectNonNull(nA.parseEpochTimestamp(nA.expectNumber(Q))),
        'LastModifiedDate'
      ),
      Logins: nA._json,
    });
  }, 'de_IdentityDescription'),
  ob4 = aA((A, B) => {
    return nA.take(A, {
      Identities: aA((Q) => rb4(Q, B), 'Identities'),
      IdentityPoolId: nA.expectString,
      NextToken: nA.expectString,
    });
  }, 'de_ListIdentitiesResponse'),
  l6 = aA(
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
  tb4 = nA.withBaseException(oW),
  F3 = aA(async (A, B, Q, I, G) => {
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
    return new cf1.HttpRequest(F);
  }, 'buildHttpRpcRequest');
function dB(A) {
  return {
    'content-type': 'application/x-amz-json-1.1',
    'x-amz-target': `AWSCognitoIdentityService.${A}`,
  };
}
aA(dB, 'sharedHeaders');
var gC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'CreateIdentityPool', {})
    .n('CognitoIdentityClient', 'CreateIdentityPoolCommand')
    .f(void 0, void 0)
    .ser(lv4)
    .de(Kb4)
    .build() {
    static {
      aA(this, 'CreateIdentityPoolCommand');
    }
  },
  hC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'DeleteIdentities', {})
    .n('CognitoIdentityClient', 'DeleteIdentitiesCommand')
    .f(void 0, void 0)
    .ser(iv4)
    .de(Hb4)
    .build() {
    static {
      aA(this, 'DeleteIdentitiesCommand');
    }
  },
  mC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'DeleteIdentityPool', {})
    .n('CognitoIdentityClient', 'DeleteIdentityPoolCommand')
    .f(void 0, void 0)
    .ser(nv4)
    .de(zb4)
    .build() {
    static {
      aA(this, 'DeleteIdentityPoolCommand');
    }
  },
  dC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'DescribeIdentity', {})
    .n('CognitoIdentityClient', 'DescribeIdentityCommand')
    .f(void 0, void 0)
    .ser(av4)
    .de(wb4)
    .build() {
    static {
      aA(this, 'DescribeIdentityCommand');
    }
  },
  uC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'DescribeIdentityPool', {})
    .n('CognitoIdentityClient', 'DescribeIdentityPoolCommand')
    .f(void 0, void 0)
    .ser(sv4)
    .de(Eb4)
    .build() {
    static {
      aA(this, 'DescribeIdentityPoolCommand');
    }
  },
  pC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'GetCredentialsForIdentity', {})
    .n('CognitoIdentityClient', 'GetCredentialsForIdentityCommand')
    .f(PC0, _C0)
    .ser(rv4)
    .de(Ub4)
    .build() {
    static {
      aA(this, 'GetCredentialsForIdentityCommand');
    }
  },
  cC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'GetId', {})
    .n('CognitoIdentityClient', 'GetIdCommand')
    .f(jC0, void 0)
    .ser(ov4)
    .de(Nb4)
    .build() {
    static {
      aA(this, 'GetIdCommand');
    }
  },
  lC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'GetIdentityPoolRoles', {})
    .n('CognitoIdentityClient', 'GetIdentityPoolRolesCommand')
    .f(void 0, void 0)
    .ser(tv4)
    .de($b4)
    .build() {
    static {
      aA(this, 'GetIdentityPoolRolesCommand');
    }
  },
  iC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'GetOpenIdToken', {})
    .n('CognitoIdentityClient', 'GetOpenIdTokenCommand')
    .f(yC0, kC0)
    .ser(ev4)
    .de(qb4)
    .build() {
    static {
      aA(this, 'GetOpenIdTokenCommand');
    }
  },
  nC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'GetOpenIdTokenForDeveloperIdentity', {})
    .n('CognitoIdentityClient', 'GetOpenIdTokenForDeveloperIdentityCommand')
    .f(xC0, fC0)
    .ser(Ab4)
    .de(Mb4)
    .build() {
    static {
      aA(this, 'GetOpenIdTokenForDeveloperIdentityCommand');
    }
  },
  aC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'GetPrincipalTagAttributeMap', {})
    .n('CognitoIdentityClient', 'GetPrincipalTagAttributeMapCommand')
    .f(void 0, void 0)
    .ser(Bb4)
    .de(Lb4)
    .build() {
    static {
      aA(this, 'GetPrincipalTagAttributeMapCommand');
    }
  },
  sC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'ListIdentities', {})
    .n('CognitoIdentityClient', 'ListIdentitiesCommand')
    .f(void 0, void 0)
    .ser(Qb4)
    .de(Rb4)
    .build() {
    static {
      aA(this, 'ListIdentitiesCommand');
    }
  },
  if1 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'ListIdentityPools', {})
    .n('CognitoIdentityClient', 'ListIdentityPoolsCommand')
    .f(void 0, void 0)
    .ser(Ib4)
    .de(Ob4)
    .build() {
    static {
      aA(this, 'ListIdentityPoolsCommand');
    }
  },
  rC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'ListTagsForResource', {})
    .n('CognitoIdentityClient', 'ListTagsForResourceCommand')
    .f(void 0, void 0)
    .ser(Gb4)
    .de(Tb4)
    .build() {
    static {
      aA(this, 'ListTagsForResourceCommand');
    }
  },
  oC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'LookupDeveloperIdentity', {})
    .n('CognitoIdentityClient', 'LookupDeveloperIdentityCommand')
    .f(void 0, void 0)
    .ser(Db4)
    .de(Pb4)
    .build() {
    static {
      aA(this, 'LookupDeveloperIdentityCommand');
    }
  },
  tC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'MergeDeveloperIdentities', {})
    .n('CognitoIdentityClient', 'MergeDeveloperIdentitiesCommand')
    .f(void 0, void 0)
    .ser(Zb4)
    .de(Sb4)
    .build() {
    static {
      aA(this, 'MergeDeveloperIdentitiesCommand');
    }
  },
  eC0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'SetIdentityPoolRoles', {})
    .n('CognitoIdentityClient', 'SetIdentityPoolRolesCommand')
    .f(void 0, void 0)
    .ser(Yb4)
    .de(_b4)
    .build() {
    static {
      aA(this, 'SetIdentityPoolRolesCommand');
    }
  },
  AX0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'SetPrincipalTagAttributeMap', {})
    .n('CognitoIdentityClient', 'SetPrincipalTagAttributeMapCommand')
    .f(void 0, void 0)
    .ser(Wb4)
    .de(jb4)
    .build() {
    static {
      aA(this, 'SetPrincipalTagAttributeMapCommand');
    }
  },
  BX0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'TagResource', {})
    .n('CognitoIdentityClient', 'TagResourceCommand')
    .f(void 0, void 0)
    .ser(Fb4)
    .de(yb4)
    .build() {
    static {
      aA(this, 'TagResourceCommand');
    }
  },
  QX0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'UnlinkDeveloperIdentity', {})
    .n('CognitoIdentityClient', 'UnlinkDeveloperIdentityCommand')
    .f(void 0, void 0)
    .ser(Jb4)
    .de(kb4)
    .build() {
    static {
      aA(this, 'UnlinkDeveloperIdentityCommand');
    }
  },
  IX0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'UnlinkIdentity', {})
    .n('CognitoIdentityClient', 'UnlinkIdentityCommand')
    .f(vC0, void 0)
    .ser(Cb4)
    .de(xb4)
    .build() {
    static {
      aA(this, 'UnlinkIdentityCommand');
    }
  },
  GX0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'UntagResource', {})
    .n('CognitoIdentityClient', 'UntagResourceCommand')
    .f(void 0, void 0)
    .ser(Xb4)
    .de(fb4)
    .build() {
    static {
      aA(this, 'UntagResourceCommand');
    }
  },
  DX0 = class extends nA.Command.classBuilder()
    .ep(Z3)
    .m(function (A, B, Q, I) {
      return [
        Y3.getSerdePlugin(Q, this.serialize, this.deserialize),
        mB.getEndpointPlugin(Q, A.getEndpointParameterInstructions()),
      ];
    })
    .s('AWSCognitoIdentityService', 'UpdateIdentityPool', {})
    .n('CognitoIdentityClient', 'UpdateIdentityPoolCommand')
    .f(void 0, void 0)
    .ser(Vb4)
    .de(vb4)
    .build() {
    static {
      aA(this, 'UpdateIdentityPoolCommand');
    }
  },
  eb4 = {
    CreateIdentityPoolCommand: gC0,
    DeleteIdentitiesCommand: hC0,
    DeleteIdentityPoolCommand: mC0,
    DescribeIdentityCommand: dC0,
    DescribeIdentityPoolCommand: uC0,
    GetCredentialsForIdentityCommand: pC0,
    GetIdCommand: cC0,
    GetIdentityPoolRolesCommand: lC0,
    GetOpenIdTokenCommand: iC0,
    GetOpenIdTokenForDeveloperIdentityCommand: nC0,
    GetPrincipalTagAttributeMapCommand: aC0,
    ListIdentitiesCommand: sC0,
    ListIdentityPoolsCommand: if1,
    ListTagsForResourceCommand: rC0,
    LookupDeveloperIdentityCommand: oC0,
    MergeDeveloperIdentitiesCommand: tC0,
    SetIdentityPoolRolesCommand: eC0,
    SetPrincipalTagAttributeMapCommand: AX0,
    TagResourceCommand: BX0,
    UnlinkDeveloperIdentityCommand: QX0,
    UnlinkIdentityCommand: IX0,
    UntagResourceCommand: GX0,
    UpdateIdentityPoolCommand: DX0,
  },
  ZX0 = class extends lf1 {
    static {
      aA(this, 'CognitoIdentity');
    }
  };
nA.createAggregatedClient(eb4, ZX0);
var Ag4 = bG1.createPaginator(lf1, if1, 'NextToken', 'NextToken', 'MaxResults');
