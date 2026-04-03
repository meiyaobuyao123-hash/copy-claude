// Module: uE1
// Params: f5A

Object.defineProperty(f5A, '__esModule', { value: !0 });
var Ga2 = D1('os'),
  Da2 = D1('util'),
  k5A = I4();
class x5A extends k5A.ServerRuntimeClient {
  constructor(A) {
    (k5A.applySdkMetadata(A, 'node'),
      (A.transportOptions = { textEncoder: new Da2.TextEncoder(), ...A.transportOptions }));
    let B = {
      ...A,
      platform: 'node',
      runtime: { name: 'node', version: global.process.version },
      serverName: A.serverName || global.process.env.SENTRY_NAME || Ga2.hostname(),
    };
    super(B);
  }
}
f5A.NodeClient = x5A;
