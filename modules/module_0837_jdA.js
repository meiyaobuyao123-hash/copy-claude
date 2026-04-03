// Module: jdA
// Params: Pd5,_dA

var { defineProperty: R81, getOwnPropertyDescriptor: BA4, getOwnPropertyNames: QA4 } = Object,
  IA4 = Object.prototype.hasOwnProperty,
  O81 = (A, B) => R81(A, 'name', { value: B, configurable: !0 }),
  GA4 = (A, B) => {
    for (var Q in B) R81(A, Q, { get: B[Q], enumerable: !0 });
  },
  DA4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of QA4(B))
        if (!IA4.call(A, G) && G !== Q)
          R81(A, G, { get: () => B[G], enumerable: !(I = BA4(B, G)) || I.enumerable });
    }
    return A;
  },
  ZA4 = (A) => DA4(R81({}, '__esModule', { value: !0 }), A),
  qdA = {};
GA4(qdA, {
  AlgorithmId: () => OdA,
  EndpointURLScheme: () => RdA,
  FieldPosition: () => TdA,
  HttpApiKeyAuthLocation: () => LdA,
  HttpAuthLocation: () => MdA,
  IniSectionType: () => PdA,
  RequestHandlerProtocol: () => SdA,
  SMITHY_CONTEXT_KEY: () => CA4,
  getDefaultClientConfiguration: () => FA4,
  resolveDefaultRuntimeConfig: () => JA4,
});
_dA.exports = ZA4(qdA);
var MdA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(MdA || {}),
  LdA = ((A) => {
    return ((A.HEADER = 'header'), (A.QUERY = 'query'), A);
  })(LdA || {}),
  RdA = ((A) => {
    return ((A.HTTP = 'http'), (A.HTTPS = 'https'), A);
  })(RdA || {}),
  OdA = ((A) => {
    return (
      (A.MD5 = 'md5'),
      (A.CRC32 = 'crc32'),
      (A.CRC32C = 'crc32c'),
      (A.SHA1 = 'sha1'),
      (A.SHA256 = 'sha256'),
      A
    );
  })(OdA || {}),
  YA4 = O81((A) => {
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
  WA4 = O81((A) => {
    let B = {};
    return (
      A.checksumAlgorithms().forEach((Q) => {
        B[Q.algorithmId()] = Q.checksumConstructor();
      }),
      B
    );
  }, 'resolveChecksumRuntimeConfig'),
  FA4 = O81((A) => {
    return YA4(A);
  }, 'getDefaultClientConfiguration'),
  JA4 = O81((A) => {
    return WA4(A);
  }, 'resolveDefaultRuntimeConfig'),
  TdA = ((A) => {
    return ((A[(A.HEADER = 0)] = 'HEADER'), (A[(A.TRAILER = 1)] = 'TRAILER'), A);
  })(TdA || {}),
  CA4 = '__smithy_context',
  PdA = ((A) => {
    return ((A.PROFILE = 'profile'), (A.SSO_SESSION = 'sso-session'), (A.SERVICES = 'services'), A);
  })(PdA || {}),
  SdA = ((A) => {
    return ((A.HTTP_0_9 = 'http/0.9'), (A.HTTP_1_0 = 'http/1.0'), (A.TDS_8_0 = 'tds/8.0'), A);
  })(SdA || {});
