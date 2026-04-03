// Module: gkA
// Params: Sh5,bkA

var { defineProperty: V51, getOwnPropertyDescriptor: Xp9, getOwnPropertyNames: Vp9 } = Object,
  Kp9 = Object.prototype.hasOwnProperty,
  K51 = (A, B) => V51(A, 'name', { value: B, configurable: !0 }),
  Hp9 = (A, B) => {
    for (var Q in B) V51(A, Q, { get: B[Q], enumerable: !0 });
  },
  zp9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Vp9(B))
        if (!Kp9.call(A, G) && G !== Q)
          V51(A, G, { get: () => B[G], enumerable: !(I = Xp9(B, G)) || I.enumerable });
    }
    return A;
  },
  wp9 = (A) => zp9(V51({}, '__esModule', { value: !0 }), A),
  SkA = {};
Hp9(SkA, {
  AlgorithmId: () => kkA,
  EndpointURLScheme: () => ykA,
  FieldPosition: () => xkA,
  HttpApiKeyAuthLocation: () => jkA,
  HttpAuthLocation: () => _kA,
  IniSectionType: () => fkA,
  RequestHandlerProtocol: () => vkA,
  SMITHY_CONTEXT_KEY: () => qp9,
  getDefaultClientConfiguration: () => Np9,
  resolveDefaultRuntimeConfig: () => $p9,
});
bkA.exports = wp9(SkA);
var _kA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(_kA || {}),
  jkA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(jkA || {}),
  ykA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(ykA || {}),
  kkA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(kkA || {}),
  Ep9 = K51((A) => {
    let B = [];
    if (A.sha256 !== void 0)
      B.push({ algorithmId: () => 'sha256', checksumConstructor: () => A.sha256 });
    if (A.md5 != null) B.push({ algorithmId: () => 'md5', checksumConstructor: () => A.md5 });
    return {
      addChecksumAlgorithm(Q) {
        B.push(Q);
      },
      checksumAlgorithms() {
        return B;
      },
    };
  }, 'getChecksumConfiguration'),
  Up9 = K51((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  Np9 = K51((A) => {
    return Ep9(A);
  }, 'getDefaultClientConfiguration'),
  $p9 = K51((A) => {
    return Up9(A);
  }, 'resolveDefaultRuntimeConfig'),
  xkA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(xkA || {}),
  qp9 = '__smithy_context',
  fkA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(fkA || {}),
  vkA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(vkA || {});
