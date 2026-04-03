// Module: A31
// Params: Qc5,ptA

var { defineProperty: tB1, getOwnPropertyDescriptor: hY4, getOwnPropertyNames: btA } = Object,
  mY4 = Object.prototype.hasOwnProperty,
  eB1 = (A, B) => tB1(A, 'name', { value: B, configurable: !0 }),
  dY4 = (A, B) =>
    function Q() {
      return (A && (B = A[btA(A)[0]]((A = 0))), B);
    },
  gtA = (A, B) => {
    for (var Q in B) tB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  uY4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of btA(B))
        if (!mY4.call(A, G) && G !== Q)
          tB1(A, G, { get: () => B[G], enumerable: !(I = hY4(B, G)) || I.enumerable });
    }
    return A;
  },
  pY4 = (A) => uY4(tB1({}, '__esModule', { value: !0 }), A),
  htA = {};
gtA(htA, {
  GetRoleCredentialsCommand: () => OS1.GetRoleCredentialsCommand,
  SSOClient: () => OS1.SSOClient,
});
var OS1,
  cY4 = dY4({
    'src/loadSso.ts'() {
      OS1 = ZrA();
    },
  }),
  mtA = {};
gtA(mtA, { fromSSO: () => iY4, isSsoProfile: () => dtA, validateSsoProfile: () => utA });
ptA.exports = pY4(mtA);
var dtA = eB1(
    (A) =>
      A &&
      (typeof A.sso_start_url === 'string' ||
        typeof A.sso_account_id === 'string' ||
        typeof A.sso_session === 'string' ||
        typeof A.sso_region === 'string' ||
        typeof A.sso_role_name === 'string'),
    'isSsoProfile'
  ),
  ftA = bX(),
  lY4 = xtA(),
  cX = t7(),
  oB1 = XM(),
  Ii = !1,
  vtA = eB1(
    async ({
      ssoStartUrl: A,
      ssoSession: B,
      ssoAccountId: Q,
      ssoRegion: I,
      ssoRoleName: G,
      ssoClient: D,
      clientConfig: Z,
      parentClientConfig: Y,
      profile: W,
      logger: F,
    }) => {
      let J,
        C = 'To refresh this SSO session run aws sso login with the corresponding profile.';
      if (B)
        try {
          let a = await lY4.fromSso({ profile: W })();
          J = { accessToken: a.token, expiresAt: new Date(a.expiration).toISOString() };
        } catch (a) {
          throw new cX.CredentialsProviderError(a.message, { tryNextLink: Ii, logger: F });
        }
      else
        try {
          J = await oB1.getSSOTokenFromFile(A);
        } catch (a) {
          throw new cX.CredentialsProviderError(
            'The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.',
            { tryNextLink: Ii, logger: F }
          );
        }
      if (new Date(J.expiresAt).getTime() - Date.now() <= 0)
        throw new cX.CredentialsProviderError(
          'The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.',
          { tryNextLink: Ii, logger: F }
        );
      let { accessToken: X } = J,
        { SSOClient: V, GetRoleCredentialsCommand: K } = await Promise.resolve().then(
          () => (cY4(), htA)
        ),
        U =
          D ||
          new V(
            Object.assign({}, Z ?? {}, { logger: Z?.logger ?? Y?.logger, region: Z?.region ?? I })
          ),
        N;
      try {
        N = await U.send(new K({ accountId: Q, roleName: G, accessToken: X }));
      } catch (a) {
        throw new cX.CredentialsProviderError(a, { tryNextLink: Ii, logger: F });
      }
      let {
        roleCredentials: {
          accessKeyId: q,
          secretAccessKey: M,
          sessionToken: R,
          expiration: T,
          credentialScope: O,
          accountId: S,
        } = {},
      } = N;
      if (!q || !M || !R || !T)
        throw new cX.CredentialsProviderError('SSO returns an invalid temporary credential.', {
          tryNextLink: Ii,
          logger: F,
        });
      let f = {
        accessKeyId: q,
        secretAccessKey: M,
        sessionToken: R,
        expiration: new Date(T),
        ...(O && { credentialScope: O }),
        ...(S && { accountId: S }),
      };
      if (B) ftA.setCredentialFeature(f, 'CREDENTIALS_SSO', 's');
      else ftA.setCredentialFeature(f, 'CREDENTIALS_SSO_LEGACY', 'u');
      return f;
    },
    'resolveSSOCredentials'
  ),
  utA = eB1((A, B) => {
    let { sso_start_url: Q, sso_account_id: I, sso_region: G, sso_role_name: D } = A;
    if (!Q || !I || !G || !D)
      throw new cX.CredentialsProviderError(
        `Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(A).join(', ')}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
        { tryNextLink: !1, logger: B }
      );
    return A;
  }, 'validateSsoProfile'),
  iY4 = eB1(
    (A = {}) =>
      async ({ callerClientConfig: B } = {}) => {
        A.logger?.debug('@aws-sdk/credential-provider-sso - fromSSO');
        let { ssoStartUrl: Q, ssoAccountId: I, ssoRegion: G, ssoRoleName: D, ssoSession: Z } = A,
          { ssoClient: Y } = A,
          W = oB1.getProfileName({ profile: A.profile ?? B?.profile });
        if (!Q && !I && !G && !D && !Z) {
          let J = (await oB1.parseKnownFiles(A))[W];
          if (!J)
            throw new cX.CredentialsProviderError(`Profile ${W} was not found.`, {
              logger: A.logger,
            });
          if (!dtA(J))
            throw new cX.CredentialsProviderError(
              `Profile ${W} is not configured with SSO credentials.`,
              { logger: A.logger }
            );
          if (J?.sso_session) {
            let q = (await oB1.loadSsoSessionData(A))[J.sso_session],
              M = ` configurations in profile ${W} and sso-session ${J.sso_session}`;
            if (G && G !== q.sso_region)
              throw new cX.CredentialsProviderError('Conflicting SSO region' + M, {
                tryNextLink: !1,
                logger: A.logger,
              });
            if (Q && Q !== q.sso_start_url)
              throw new cX.CredentialsProviderError('Conflicting SSO start_url' + M, {
                tryNextLink: !1,
                logger: A.logger,
              });
            ((J.sso_region = q.sso_region), (J.sso_start_url = q.sso_start_url));
          }
          let {
            sso_start_url: C,
            sso_account_id: X,
            sso_region: V,
            sso_role_name: K,
            sso_session: U,
          } = utA(J, A.logger);
          return vtA({
            ssoStartUrl: C,
            ssoSession: U,
            ssoAccountId: X,
            ssoRegion: V,
            ssoRoleName: K,
            ssoClient: Y,
            clientConfig: A.clientConfig,
            parentClientConfig: A.parentClientConfig,
            profile: W,
          });
        } else if (!Q || !I || !G || !D)
          throw new cX.CredentialsProviderError(
            'Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"',
            { tryNextLink: !1, logger: A.logger }
          );
        else
          return vtA({
            ssoStartUrl: Q,
            ssoSession: Z,
            ssoAccountId: I,
            ssoRegion: G,
            ssoRoleName: D,
            ssoClient: Y,
            clientConfig: A.clientConfig,
            parentClientConfig: A.parentClientConfig,
            profile: W,
          });
      },
    'fromSSO'
  );
