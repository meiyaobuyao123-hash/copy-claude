// Module: V_1
// Params: aH

var eF4 =
    (aH && aH.__createBinding) ||
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
  AJ4 =
    (aH && aH.__setModuleDefault) ||
    (Object.create
      ? function (A, B) {
          Object.defineProperty(A, 'default', { enumerable: !0, value: B });
        }
      : function (A, B) {
          A.default = B;
        }),
  BJ4 =
    (aH && aH.__importStar) ||
    function (A) {
      if (A && A.__esModule) return A;
      var B = {};
      if (A != null) {
        for (var Q in A)
          if (Q !== 'default' && Object.prototype.hasOwnProperty.call(A, Q)) eF4(B, A, Q);
      }
      return (AJ4(B, A), B);
    };
Object.defineProperty(aH, '__esModule', { value: !0 });
aH.fromWebToken = void 0;
var QJ4 = (A) => async (B) => {
  A.logger?.debug('@aws-sdk/credential-provider-web-identity - fromWebToken');
  let {
      roleArn: Q,
      roleSessionName: I,
      webIdentityToken: G,
      providerId: D,
      policyArns: Z,
      policy: Y,
      durationSeconds: W,
    } = A,
    { roleAssumerWithWebIdentity: F } = A;
  if (!F) {
    let { getDefaultRoleAssumerWithWebIdentity: J } = await Promise.resolve().then(() =>
      BJ4(I31())
    );
    F = J(
      {
        ...A.clientConfig,
        credentialProviderLogger: A.logger,
        parentClientConfig: { ...B?.callerClientConfig, ...A.parentClientConfig },
      },
      A.clientPlugins
    );
  }
  return F({
    RoleArn: Q,
    RoleSessionName: I ?? `aws-sdk-js-session-${Date.now()}`,
    WebIdentityToken: G,
    ProviderId: D,
    PolicyArns: Z,
    Policy: Y,
    DurationSeconds: W,
  });
};
aH.fromWebToken = QJ4;
