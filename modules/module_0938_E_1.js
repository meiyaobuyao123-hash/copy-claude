// Module: E_1
// Params: $c5,u10

var {
    create: KJ4,
    defineProperty: Wi,
    getOwnPropertyDescriptor: HJ4,
    getOwnPropertyNames: zJ4,
    getPrototypeOf: wJ4,
  } = Object,
  EJ4 = Object.prototype.hasOwnProperty,
  pQ = (A, B) => Wi(A, 'name', { value: B, configurable: !0 }),
  UJ4 = (A, B) => {
    for (var Q in B) Wi(A, Q, { get: B[Q], enumerable: !0 });
  },
  h10 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of zJ4(B))
        if (!EJ4.call(A, G) && G !== Q)
          Wi(A, G, { get: () => B[G], enumerable: !(I = HJ4(B, G)) || I.enumerable });
    }
    return A;
  },
  MM = (A, B, Q) => (
    (Q = A != null ? KJ4(wJ4(A)) : {}),
    h10(B || !A || !A.__esModule ? Wi(Q, 'default', { value: A, enumerable: !0 }) : Q, A)
  ),
  NJ4 = (A) => h10(Wi({}, '__esModule', { value: !0 }), A),
  m10 = {};
UJ4(m10, { fromIni: () => yJ4 });
u10.exports = NJ4(m10);
var w_1 = XM(),
  LM = bX(),
  Yi = t7(),
  $J4 = pQ((A, B, Q) => {
    let I = {
      EcsContainer: pQ(async (G) => {
        let { fromHttp: D } = await Promise.resolve().then(() => MM(VB1())),
          { fromContainerMetadata: Z } = await Promise.resolve().then(() => MM(UP()));
        return (
          Q?.debug('@aws-sdk/credential-provider-ini - credential_source is EcsContainer'),
          async () => Yi.chain(D(G ?? {}), Z(G))().then(z_1)
        );
      }, 'EcsContainer'),
      Ec2InstanceMetadata: pQ(async (G) => {
        Q?.debug('@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata');
        let { fromInstanceMetadata: D } = await Promise.resolve().then(() => MM(UP()));
        return async () => D(G)().then(z_1);
      }, 'Ec2InstanceMetadata'),
      Environment: pQ(async (G) => {
        Q?.debug('@aws-sdk/credential-provider-ini - credential_source is Environment');
        let { fromEnv: D } = await Promise.resolve().then(() => MM(AB1()));
        return async () => D(G)().then(z_1);
      }, 'Environment'),
    };
    if (A in I) return I[A];
    else
      throw new Yi.CredentialsProviderError(
        `Unsupported credential source in profile ${B}. Got ${A}, expected EcsContainer or Ec2InstanceMetadata or Environment.`,
        { logger: Q }
      );
  }, 'resolveCredentialSource'),
  z_1 = pQ(
    (A) => LM.setCredentialFeature(A, 'CREDENTIALS_PROFILE_NAMED_PROVIDER', 'p'),
    'setNamedProvider'
  ),
  qJ4 = pQ((A, { profile: B = 'default', logger: Q } = {}) => {
    return (
      Boolean(A) &&
      typeof A === 'object' &&
      typeof A.role_arn === 'string' &&
      ['undefined', 'string'].indexOf(typeof A.role_session_name) > -1 &&
      ['undefined', 'string'].indexOf(typeof A.external_id) > -1 &&
      ['undefined', 'string'].indexOf(typeof A.mfa_serial) > -1 &&
      (MJ4(A, { profile: B, logger: Q }) || LJ4(A, { profile: B, logger: Q }))
    );
  }, 'isAssumeRoleProfile'),
  MJ4 = pQ((A, { profile: B, logger: Q }) => {
    let I = typeof A.source_profile === 'string' && typeof A.credential_source === 'undefined';
    if (I) Q?.debug?.(`    ${B} isAssumeRoleWithSourceProfile source_profile=${A.source_profile}`);
    return I;
  }, 'isAssumeRoleWithSourceProfile'),
  LJ4 = pQ((A, { profile: B, logger: Q }) => {
    let I = typeof A.credential_source === 'string' && typeof A.source_profile === 'undefined';
    if (I)
      Q?.debug?.(`    ${B} isCredentialSourceProfile credential_source=${A.credential_source}`);
    return I;
  }, 'isCredentialSourceProfile'),
  RJ4 = pQ(async (A, B, Q, I = {}) => {
    Q.logger?.debug('@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)');
    let G = B[A],
      { source_profile: D, region: Z } = G;
    if (!Q.roleAssumer) {
      let { getDefaultRoleAssumer: W } = await Promise.resolve().then(() => MM(I31()));
      Q.roleAssumer = W(
        {
          ...Q.clientConfig,
          credentialProviderLogger: Q.logger,
          parentClientConfig: {
            ...Q?.parentClientConfig,
            region: Z ?? Q?.parentClientConfig?.region,
          },
        },
        Q.clientPlugins
      );
    }
    if (D && D in I)
      throw new Yi.CredentialsProviderError(
        `Detected a cycle attempting to resolve credentials for profile ${w_1.getProfileName(Q)}. Profiles visited: ` +
          Object.keys(I).join(', '),
        { logger: Q.logger }
      );
    Q.logger?.debug(
      `@aws-sdk/credential-provider-ini - finding credential resolver using ${D ? `source_profile=[${D}]` : `profile=[${A}]`}`
    );
    let Y = D
      ? d10(D, B, Q, { ...I, [D]: !0 }, v10(B[D] ?? {}))
      : (await $J4(G.credential_source, A, Q.logger)(Q))();
    if (v10(G))
      return Y.then((W) => LM.setCredentialFeature(W, 'CREDENTIALS_PROFILE_SOURCE_PROFILE', 'o'));
    else {
      let W = {
          RoleArn: G.role_arn,
          RoleSessionName: G.role_session_name || `aws-sdk-js-${Date.now()}`,
          ExternalId: G.external_id,
          DurationSeconds: parseInt(G.duration_seconds || '3600', 10),
        },
        { mfa_serial: F } = G;
      if (F) {
        if (!Q.mfaCodeProvider)
          throw new Yi.CredentialsProviderError(
            `Profile ${A} requires multi-factor authentication, but no MFA code callback was provided.`,
            { logger: Q.logger, tryNextLink: !1 }
          );
        ((W.SerialNumber = F), (W.TokenCode = await Q.mfaCodeProvider(F)));
      }
      let J = await Y;
      return Q.roleAssumer(J, W).then((C) =>
        LM.setCredentialFeature(C, 'CREDENTIALS_PROFILE_SOURCE_PROFILE', 'o')
      );
    }
  }, 'resolveAssumeRoleCredentials'),
  v10 = pQ((A) => {
    return !A.role_arn && !!A.credential_source;
  }, 'isCredentialSourceWithoutRoleArn'),
  OJ4 = pQ(
    (A) => Boolean(A) && typeof A === 'object' && typeof A.credential_process === 'string',
    'isProcessProfile'
  ),
  TJ4 = pQ(
    async (A, B) =>
      Promise.resolve()
        .then(() => MM(D31()))
        .then(({ fromProcess: Q }) =>
          Q({ ...A, profile: B })().then((I) =>
            LM.setCredentialFeature(I, 'CREDENTIALS_PROFILE_PROCESS', 'v')
          )
        ),
    'resolveProcessCredentials'
  ),
  PJ4 = pQ(async (A, B, Q = {}) => {
    let { fromSSO: I } = await Promise.resolve().then(() => MM(A31()));
    return I({
      profile: A,
      logger: Q.logger,
      parentClientConfig: Q.parentClientConfig,
      clientConfig: Q.clientConfig,
    })().then((G) => {
      if (B.sso_session) return LM.setCredentialFeature(G, 'CREDENTIALS_PROFILE_SSO', 'r');
      else return LM.setCredentialFeature(G, 'CREDENTIALS_PROFILE_SSO_LEGACY', 't');
    });
  }, 'resolveSsoCredentials'),
  SJ4 = pQ(
    (A) =>
      A &&
      (typeof A.sso_start_url === 'string' ||
        typeof A.sso_account_id === 'string' ||
        typeof A.sso_session === 'string' ||
        typeof A.sso_region === 'string' ||
        typeof A.sso_role_name === 'string'),
    'isSsoProfile'
  ),
  b10 = pQ(
    (A) =>
      Boolean(A) &&
      typeof A === 'object' &&
      typeof A.aws_access_key_id === 'string' &&
      typeof A.aws_secret_access_key === 'string' &&
      ['undefined', 'string'].indexOf(typeof A.aws_session_token) > -1 &&
      ['undefined', 'string'].indexOf(typeof A.aws_account_id) > -1,
    'isStaticCredsProfile'
  ),
  g10 = pQ(async (A, B) => {
    B?.logger?.debug('@aws-sdk/credential-provider-ini - resolveStaticCredentials');
    let Q = {
      accessKeyId: A.aws_access_key_id,
      secretAccessKey: A.aws_secret_access_key,
      sessionToken: A.aws_session_token,
      ...(A.aws_credential_scope && { credentialScope: A.aws_credential_scope }),
      ...(A.aws_account_id && { accountId: A.aws_account_id }),
    };
    return LM.setCredentialFeature(Q, 'CREDENTIALS_PROFILE', 'n');
  }, 'resolveStaticCredentials'),
  _J4 = pQ(
    (A) =>
      Boolean(A) &&
      typeof A === 'object' &&
      typeof A.web_identity_token_file === 'string' &&
      typeof A.role_arn === 'string' &&
      ['undefined', 'string'].indexOf(typeof A.role_session_name) > -1,
    'isWebIdentityProfile'
  ),
  jJ4 = pQ(
    async (A, B) =>
      Promise.resolve()
        .then(() => MM(Zi()))
        .then(({ fromTokenFile: Q }) =>
          Q({
            webIdentityTokenFile: A.web_identity_token_file,
            roleArn: A.role_arn,
            roleSessionName: A.role_session_name,
            roleAssumerWithWebIdentity: B.roleAssumerWithWebIdentity,
            logger: B.logger,
            parentClientConfig: B.parentClientConfig,
          })().then((I) => LM.setCredentialFeature(I, 'CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN', 'q'))
        ),
    'resolveWebIdentityCredentials'
  ),
  d10 = pQ(async (A, B, Q, I = {}, G = !1) => {
    let D = B[A];
    if (Object.keys(I).length > 0 && b10(D)) return g10(D, Q);
    if (G || qJ4(D, { profile: A, logger: Q.logger })) return RJ4(A, B, Q, I);
    if (b10(D)) return g10(D, Q);
    if (_J4(D)) return jJ4(D, Q);
    if (OJ4(D)) return TJ4(Q, A);
    if (SJ4(D)) return await PJ4(A, D, Q);
    throw new Yi.CredentialsProviderError(
      `Could not resolve credentials using profile: [${A}] in configuration/credentials file(s).`,
      { logger: Q.logger }
    );
  }, 'resolveProfileData'),
  yJ4 = pQ(
    (A = {}) =>
      async ({ callerClientConfig: B } = {}) => {
        let Q = { ...A, parentClientConfig: { ...B, ...A.parentClientConfig } };
        Q.logger?.debug('@aws-sdk/credential-provider-ini - fromIni');
        let I = await w_1.parseKnownFiles(Q);
        return d10(w_1.getProfileName({ profile: A.profile ?? B?.profile }), I, Q);
      },
    'fromIni'
  );
