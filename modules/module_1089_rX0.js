// Module: rX0
// Params: Hz

var Sg4 =
    (Hz && Hz.__createBinding) ||
    (Object.create
      ? function (A, B, Q, I) {
          if (I === void 0) I = Q;
          var G = Object.getOwnPropertyDescriptor(B, Q);
          if (!G || ('get' in G ? !B.__esModule : G.writable || G.configurable))
            G = {
              enumerable: !0,
              get: function () {
                return B[Q];
              },
            };
          Object.defineProperty(A, I, G);
        }
      : function (A, B, Q, I) {
          if (I === void 0) I = Q;
          A[I] = B[Q];
        }),
  _g4 =
    (Hz && Hz.__setModuleDefault) ||
    (Object.create
      ? function (A, B) {
          Object.defineProperty(A, 'default', { enumerable: !0, value: B });
        }
      : function (A, B) {
          A.default = B;
        }),
  jg4 =
    (Hz && Hz.__importStar) ||
    function (A) {
      if (A && A.__esModule) return A;
      var B = {};
      if (A != null) {
        for (var Q in A)
          if (Q !== 'default' && Object.prototype.hasOwnProperty.call(A, Q)) Sg4(B, A, Q);
      }
      return (_g4(B, A), B);
    };
Object.defineProperty(Hz, '__esModule', { value: !0 });
Hz.fromTemporaryCredentials = void 0;
var yg4 = o7(),
  aX0 = t7(),
  kg4 = 'us-east-1',
  xg4 = (A, B, Q) => {
    let I;
    return async (G = {}) => {
      let { callerClientConfig: D } = G,
        Z = A.clientConfig?.profile ?? D?.profile,
        Y = A.logger ?? D?.logger;
      Y?.debug('@aws-sdk/credential-providers - fromTemporaryCredentials (STS)');
      let W = {
        ...A.params,
        RoleSessionName: A.params.RoleSessionName ?? 'aws-sdk-js-' + Date.now(),
      };
      if (W?.SerialNumber) {
        if (!A.mfaCodeProvider)
          throw new aX0.CredentialsProviderError(
            'Temporary credential requires multi-factor authentication, but no MFA code callback was provided.',
            { tryNextLink: !1, logger: Y }
          );
        W.TokenCode = await A.mfaCodeProvider(W?.SerialNumber);
      }
      let { AssumeRoleCommand: F, STSClient: J } = await Promise.resolve().then(() => jg4(nX0()));
      if (!I) {
        let X = typeof B === 'function' ? B() : void 0,
          V = [
            A.masterCredentials,
            A.clientConfig?.credentials,
            void D?.credentials,
            D?.credentialDefaultProvider?.(),
            X,
          ],
          K = 'STS client default credentials';
        if (V[0]) K = 'options.masterCredentials';
        else if (V[1]) K = 'options.clientConfig.credentials';
        else if (V[2])
          throw (
            (K = "caller client's credentials"),
            new Error('fromTemporaryCredentials recursion in callerClientConfig.credentials')
          );
        else if (V[3]) K = "caller client's credentialDefaultProvider";
        else if (V[4]) K = 'AWS SDK default credentials';
        let U = [A.clientConfig?.region, D?.region, await Q?.({ profile: Z }), kg4],
          N = "default partition's default region";
        if (U[0]) N = 'options.clientConfig.region';
        else if (U[1]) N = "caller client's region";
        else if (U[2]) N = 'file or env region';
        let q = [sX0(A.clientConfig?.requestHandler), sX0(D?.requestHandler)],
          M = 'STS default requestHandler';
        if (q[0]) M = 'options.clientConfig.requestHandler';
        else if (q[1]) M = "caller client's requestHandler";
        (Y?.debug?.(
          `@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ${N}=${await yg4.normalizeProvider(pG1(U))()}, ${K}, ${M}.`
        ),
          (I = new J({
            ...A.clientConfig,
            credentials: pG1(V),
            logger: Y,
            profile: Z,
            region: pG1(U),
            requestHandler: pG1(q),
          })));
      }
      if (A.clientPlugins) for (let X of A.clientPlugins) I.middlewareStack.use(X);
      let { Credentials: C } = await I.send(new F(W));
      if (!C || !C.AccessKeyId || !C.SecretAccessKey)
        throw new aX0.CredentialsProviderError(
          `Invalid response from STS.assumeRole call with role ${W.RoleArn}`,
          { logger: Y }
        );
      return {
        accessKeyId: C.AccessKeyId,
        secretAccessKey: C.SecretAccessKey,
        sessionToken: C.SessionToken,
        expiration: C.Expiration,
        credentialScope: C.CredentialScope,
      };
    };
  };
Hz.fromTemporaryCredentials = xg4;
var sX0 = (A) => {
    return A?.metadata?.handlerProtocol === 'h2' ? void 0 : A;
  },
  pG1 = (A) => {
    for (let B of A) if (B !== void 0) return B;
  };
