// Module: xtA
// Params: Bc5,ktA

var {
    create: LY4,
    defineProperty: Qi,
    getOwnPropertyDescriptor: RY4,
    getOwnPropertyNames: OY4,
    getPrototypeOf: TY4,
  } = Object,
  PY4 = Object.prototype.hasOwnProperty,
  NM = (A, B) => Qi(A, 'name', { value: B, configurable: !0 }),
  SY4 = (A, B) => {
    for (var Q in B) Qi(A, Q, { get: B[Q], enumerable: !0 });
  },
  StA = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of OY4(B))
        if (!PY4.call(A, G) && G !== Q)
          Qi(A, G, { get: () => B[G], enumerable: !(I = RY4(B, G)) || I.enumerable });
    }
    return A;
  },
  _tA = (A, B, Q) => (
    (Q = A != null ? LY4(TY4(A)) : {}),
    StA(B || !A || !A.__esModule ? Qi(Q, 'default', { value: A, enumerable: !0 }) : Q, A)
  ),
  _Y4 = (A) => StA(Qi({}, '__esModule', { value: !0 }), A),
  jtA = {};
SY4(jtA, { fromSso: () => ytA, fromStatic: () => bY4, nodeProvider: () => gY4 });
ktA.exports = _Y4(jtA);
var jY4 = 300000,
  RS1 = "To refresh this SSO session run 'aws sso login' with the corresponding profile.",
  yY4 = NM(async (A, B = {}) => {
    let { SSOOIDCClient: Q } = await Promise.resolve().then(() => _tA(LS1()));
    return new Q(
      Object.assign({}, B.clientConfig ?? {}, {
        region: A ?? B.clientConfig?.region,
        logger: B.clientConfig?.logger ?? B.parentClientConfig?.logger,
      })
    );
  }, 'getSsoOidcClient'),
  kY4 = NM(async (A, B, Q = {}) => {
    let { CreateTokenCommand: I } = await Promise.resolve().then(() => _tA(LS1()));
    return (await yY4(B, Q)).send(
      new I({
        clientId: A.clientId,
        clientSecret: A.clientSecret,
        refreshToken: A.refreshToken,
        grantType: 'refresh_token',
      })
    );
  }, 'getNewSsoOidcToken'),
  pX = t7(),
  TtA = NM((A) => {
    if (A.expiration && A.expiration.getTime() < Date.now())
      throw new pX.TokenProviderError(`Token is expired. ${RS1}`, !1);
  }, 'validateTokenExpiry'),
  PP = NM((A, B, Q = !1) => {
    if (typeof B === 'undefined')
      throw new pX.TokenProviderError(
        `Value not present for '${A}' in SSO Token${Q ? '. Cannot refresh' : ''}. ${RS1}`,
        !1
      );
  }, 'validateTokenKey'),
  Bi = XM(),
  xY4 = D1('fs'),
  { writeFile: fY4 } = xY4.promises,
  vY4 = NM((A, B) => {
    let Q = Bi.getSSOTokenFilepath(A),
      I = JSON.stringify(B, null, 2);
    return fY4(Q, I);
  }, 'writeSSOTokenToFile'),
  PtA = new Date(0),
  ytA = NM(
    (A = {}) =>
      async ({ callerClientConfig: B } = {}) => {
        let Q = { ...A, parentClientConfig: { ...B, ...A.parentClientConfig } };
        Q.logger?.debug('@aws-sdk/token-providers - fromSso');
        let I = await Bi.parseKnownFiles(Q),
          G = Bi.getProfileName({ profile: Q.profile ?? B?.profile }),
          D = I[G];
        if (!D)
          throw new pX.TokenProviderError(
            `Profile '${G}' could not be found in shared credentials file.`,
            !1
          );
        else if (!D.sso_session)
          throw new pX.TokenProviderError(
            `Profile '${G}' is missing required property 'sso_session'.`
          );
        let Z = D.sso_session,
          W = (await Bi.loadSsoSessionData(Q))[Z];
        if (!W)
          throw new pX.TokenProviderError(
            `Sso session '${Z}' could not be found in shared credentials file.`,
            !1
          );
        for (let U of ['sso_start_url', 'sso_region'])
          if (!W[U])
            throw new pX.TokenProviderError(
              `Sso session '${Z}' is missing required property '${U}'.`,
              !1
            );
        let { sso_start_url: F, sso_region: J } = W,
          C;
        try {
          C = await Bi.getSSOTokenFromFile(Z);
        } catch (U) {
          throw new pX.TokenProviderError(
            `The SSO session token associated with profile=${G} was not found or is invalid. ${RS1}`,
            !1
          );
        }
        (PP('accessToken', C.accessToken), PP('expiresAt', C.expiresAt));
        let { accessToken: X, expiresAt: V } = C,
          K = { token: X, expiration: new Date(V) };
        if (K.expiration.getTime() - Date.now() > jY4) return K;
        if (Date.now() - PtA.getTime() < 30000) return (TtA(K), K);
        (PP('clientId', C.clientId, !0),
          PP('clientSecret', C.clientSecret, !0),
          PP('refreshToken', C.refreshToken, !0));
        try {
          PtA.setTime(Date.now());
          let U = await kY4(C, J, Q);
          (PP('accessToken', U.accessToken), PP('expiresIn', U.expiresIn));
          let N = new Date(Date.now() + U.expiresIn * 1000);
          try {
            await vY4(Z, {
              ...C,
              accessToken: U.accessToken,
              expiresAt: N.toISOString(),
              refreshToken: U.refreshToken,
            });
          } catch (q) {}
          return { token: U.accessToken, expiration: N };
        } catch (U) {
          return (TtA(K), K);
        }
      },
    'fromSso'
  ),
  bY4 = NM(
    ({ token: A, logger: B }) =>
      async () => {
        if ((B?.debug('@aws-sdk/token-providers - fromStatic'), !A || !A.token))
          throw new pX.TokenProviderError('Please pass a valid token to fromStatic', !1);
        return A;
      },
    'fromStatic'
  ),
  gY4 = NM(
    (A = {}) =>
      pX.memoize(
        pX.chain(ytA(A), async () => {
          throw new pX.TokenProviderError('Could not load token from any providers', !1);
        }),
        (B) => B.expiration !== void 0 && B.expiration.getTime() - Date.now() < 300000,
        (B) => B.expiration !== void 0
      ),
    'nodeProvider'
  );
