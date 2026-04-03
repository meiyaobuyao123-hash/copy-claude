// Module: $P
// Params: eu5,anA

var { defineProperty: UB1, getOwnPropertyDescriptor: $34, getOwnPropertyNames: q34 } = Object,
  M34 = Object.prototype.hasOwnProperty,
  EB1 = (A, B) => UB1(A, 'name', { value: B, configurable: !0 }),
  L34 = (A, B) => {
    for (var Q in B) UB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  R34 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of q34(B))
        if (!M34.call(A, G) && G !== Q)
          UB1(A, G, { get: () => B[G], enumerable: !(I = $34(B, G)) || I.enumerable });
    }
    return A;
  },
  O34 = (A) => R34(UB1({}, '__esModule', { value: !0 }), A),
  pnA = {};
L34(pnA, {
  NODE_APP_ID_CONFIG_OPTIONS: () => j34,
  UA_APP_ID_ENV_NAME: () => inA,
  UA_APP_ID_INI_NAME: () => nnA,
  createDefaultUserAgentProvider: () => lnA,
  crtAvailability: () => cnA,
  defaultUserAgent: () => P34,
});
anA.exports = O34(pnA);
var unA = D1('os'),
  PP1 = D1('process'),
  cnA = { isCrtAvailable: !1 },
  T34 = EB1(() => {
    if (cnA.isCrtAvailable) return ['md/crt-avail'];
    return null;
  }, 'isCrtAvailable'),
  lnA = EB1(({ serviceId: A, clientVersion: B }) => {
    return async (Q) => {
      let I = [
          ['aws-sdk-js', B],
          ['ua', '2.1'],
          [`os/${unA.platform()}`, unA.release()],
          ['lang/js'],
          ['md/nodejs', `${PP1.versions.node}`],
        ],
        G = T34();
      if (G) I.push(G);
      if (A) I.push([`api/${A}`, B]);
      if (PP1.env.AWS_EXECUTION_ENV) I.push([`exec-env/${PP1.env.AWS_EXECUTION_ENV}`]);
      let D = await Q?.userAgentAppId?.();
      return D ? [...I, [`app/${D}`]] : [...I];
    };
  }, 'createDefaultUserAgentProvider'),
  P34 = lnA,
  S34 = FM(),
  inA = 'AWS_SDK_UA_APP_ID',
  nnA = 'sdk_ua_app_id',
  _34 = 'sdk-ua-app-id',
  j34 = {
    environmentVariableSelector: EB1((A) => A[inA], 'environmentVariableSelector'),
    configFileSelector: EB1((A) => A[nnA] ?? A[_34], 'configFileSelector'),
    default: S34.DEFAULT_UA_APP_ID,
  };
