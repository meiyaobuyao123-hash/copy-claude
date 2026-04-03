// Module: JP1
// Params: fu5,TiA

var { defineProperty: YB1, getOwnPropertyDescriptor: X84, getOwnPropertyNames: V84 } = Object,
  K84 = Object.prototype.hasOwnProperty,
  WB1 = (A, B) => YB1(A, 'name', { value: B, configurable: !0 }),
  H84 = (A, B) => {
    for (var Q in B) YB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  z84 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of V84(B))
        if (!K84.call(A, G) && G !== Q)
          YB1(A, G, { get: () => B[G], enumerable: !(I = X84(B, G)) || I.enumerable });
    }
    return A;
  },
  w84 = (A) => z84(YB1({}, '__esModule', { value: !0 }), A),
  UiA = {};
H84(UiA, {
  AlgorithmId: () => MiA,
  EndpointURLScheme: () => qiA,
  FieldPosition: () => LiA,
  HttpApiKeyAuthLocation: () => $iA,
  HttpAuthLocation: () => NiA,
  IniSectionType: () => RiA,
  RequestHandlerProtocol: () => OiA,
  SMITHY_CONTEXT_KEY: () => q84,
  getDefaultClientConfiguration: () => N84,
  resolveDefaultRuntimeConfig: () => $84,
});
TiA.exports = w84(UiA);
var NiA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(NiA || {}),
  $iA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })($iA || {}),
  qiA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(qiA || {}),
  MiA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(MiA || {}),
  E84 = WB1((A) => {
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
  U84 = WB1((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  N84 = WB1((A) => {
    return E84(A);
  }, 'getDefaultClientConfiguration'),
  $84 = WB1((A) => {
    return U84(A);
  }, 'resolveDefaultRuntimeConfig'),
  LiA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(LiA || {}),
  q84 = '__smithy_context',
  RiA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(RiA || {}),
  OiA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(OiA || {});
